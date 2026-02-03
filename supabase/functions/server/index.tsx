import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { createClient } from "npm:@supabase/supabase-js@2";

const app = new Hono();

// Supabase client with service role (server-side only)
const supabaseAdmin = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
);

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Helper to verify user authentication
async function getUserFromToken(authHeader: string | null) {
  if (!authHeader) return null;
  const token = authHeader.split(' ')[1];
  const { data: { user }, error } = await supabaseAdmin.auth.getUser(token);
  if (error) {
    console.log('Auth error:', error);
    return null;
  }
  return user;
}

// Health check endpoint
app.get("/make-server-b4947159/health", (c) => {
  return c.json({ status: "ok" });
});

// ===== AUTH ROUTES =====

// Sign up
app.post("/make-server-b4947159/auth/signup", async (c) => {
  try {
    const { email, password, name, location } = await c.req.json();

    // Create user with auto-confirmed email
    const { data: authData, error: authError } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true, // Auto-confirm since no email server configured
    });

    if (authError) {
      console.log('Signup auth error:', authError);
      return c.json({ error: authError.message }, 400);
    }

    // Create profile
    const { error: profileError } = await supabaseAdmin
      .from('profiles')
      .insert({
        id: authData.user.id,
        name,
        location,
        bio: '',
        avatar_url: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`,
        rating: 5.0,
        swaps_completed: 0,
      });

    if (profileError) {
      console.log('Profile creation error:', profileError);
      return c.json({ error: 'Failed to create profile' }, 400);
    }

    return c.json({ success: true, user: authData.user });
  } catch (error) {
    console.log('Signup error:', error);
    return c.json({ error: 'Signup failed' }, 500);
  }
});

// ===== SKILLS ROUTES =====

// Get all skills (public)
app.get("/make-server-b4947159/skills", async (c) => {
  try {
    const category = c.req.query('category');
    const search = c.req.query('search');

    let query = supabaseAdmin
      .from('skills')
      .select(`
        *,
        profiles!skills_user_id_fkey (
          id,
          name,
          avatar_url,
          location,
          rating,
          swaps_completed
        ),
        skill_wants (*),
        skill_tags (*)
      `)
      .eq('is_active', true)
      .order('created_at', { ascending: false });

    if (category && category !== 'All') {
      query = query.eq('category', category);
    }

    if (search) {
      query = query.ilike('title', `%${search}%`);
    }

    const { data, error } = await query;

    if (error) {
      console.log('Get skills error:', error);
      return c.json({ error: error.message }, 400);
    }

    return c.json({ skills: data });
  } catch (error) {
    console.log('Get skills error:', error);
    return c.json({ error: 'Failed to fetch skills' }, 500);
  }
});

// Get single skill
app.get("/make-server-b4947159/skills/:id", async (c) => {
  try {
    const id = c.req.param('id');

    const { data, error } = await supabaseAdmin
      .from('skills')
      .select(`
        *,
        profiles!skills_user_id_fkey (
          id,
          name,
          avatar_url,
          location,
          bio,
          rating,
          swaps_completed
        ),
        skill_wants (*),
        skill_tags (*)
      `)
      .eq('id', id)
      .single();

    if (error) {
      console.log('Get skill error:', error);
      return c.json({ error: error.message }, 404);
    }

    return c.json({ skill: data });
  } catch (error) {
    console.log('Get skill error:', error);
    return c.json({ error: 'Failed to fetch skill' }, 500);
  }
});

// Create skill (protected)
app.post("/make-server-b4947159/skills", async (c) => {
  try {
    const user = await getUserFromToken(c.req.header('Authorization'));
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const { title, category, description, level, duration, image_url, wanted_skills, tags } = await c.req.json();

    // Create skill
    const { data: skill, error: skillError } = await supabaseAdmin
      .from('skills')
      .insert({
        user_id: user.id,
        title,
        category,
        description,
        level,
        duration,
        image_url,
        is_active: true,
      })
      .select()
      .single();

    if (skillError) {
      console.log('Create skill error:', skillError);
      return c.json({ error: skillError.message }, 400);
    }

    // Add wanted skills
    if (wanted_skills && wanted_skills.length > 0) {
      const wantedSkillsData = wanted_skills.map((skill: string) => ({
        skill_id: skill.id,
        wanted_skill_name: skill,
      }));

      await supabaseAdmin.from('skill_wants').insert(wantedSkillsData);
    }

    // Add tags
    if (tags && tags.length > 0) {
      const tagsData = tags.map((tag: string) => ({
        skill_id: skill.id,
        tag,
      }));

      await supabaseAdmin.from('skill_tags').insert(tagsData);
    }

    return c.json({ success: true, skill });
  } catch (error) {
    console.log('Create skill error:', error);
    return c.json({ error: 'Failed to create skill' }, 500);
  }
});

// Update skill (protected)
app.put("/make-server-b4947159/skills/:id", async (c) => {
  try {
    const user = await getUserFromToken(c.req.header('Authorization'));
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const id = c.req.param('id');
    const updates = await c.req.json();

    // Verify ownership
    const { data: skill } = await supabaseAdmin
      .from('skills')
      .select('user_id')
      .eq('id', id)
      .single();

    if (!skill || skill.user_id !== user.id) {
      return c.json({ error: 'Unauthorized' }, 403);
    }

    const { data, error } = await supabaseAdmin
      .from('skills')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.log('Update skill error:', error);
      return c.json({ error: error.message }, 400);
    }

    return c.json({ success: true, skill: data });
  } catch (error) {
    console.log('Update skill error:', error);
    return c.json({ error: 'Failed to update skill' }, 500);
  }
});

// Delete skill (protected)
app.delete("/make-server-b4947159/skills/:id", async (c) => {
  try {
    const user = await getUserFromToken(c.req.header('Authorization'));
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const id = c.req.param('id');

    // Verify ownership
    const { data: skill } = await supabaseAdmin
      .from('skills')
      .select('user_id')
      .eq('id', id)
      .single();

    if (!skill || skill.user_id !== user.id) {
      return c.json({ error: 'Unauthorized' }, 403);
    }

    const { error } = await supabaseAdmin
      .from('skills')
      .delete()
      .eq('id', id);

    if (error) {
      console.log('Delete skill error:', error);
      return c.json({ error: error.message }, 400);
    }

    return c.json({ success: true });
  } catch (error) {
    console.log('Delete skill error:', error);
    return c.json({ error: 'Failed to delete skill' }, 500);
  }
});

// ===== PROFILE ROUTES =====

// Get user profile
app.get("/make-server-b4947159/profile/:id", async (c) => {
  try {
    const id = c.req.param('id');

    const { data, error } = await supabaseAdmin
      .from('profiles')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.log('Get profile error:', error);
      return c.json({ error: error.message }, 404);
    }

    return c.json({ profile: data });
  } catch (error) {
    console.log('Get profile error:', error);
    return c.json({ error: 'Failed to fetch profile' }, 500);
  }
});

// Get current user profile (protected)
app.get("/make-server-b4947159/profile", async (c) => {
  try {
    const user = await getUserFromToken(c.req.header('Authorization'));
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const { data, error } = await supabaseAdmin
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();

    if (error) {
      console.log('Get profile error:', error);
      return c.json({ error: error.message }, 404);
    }

    return c.json({ profile: data });
  } catch (error) {
    console.log('Get profile error:', error);
    return c.json({ error: 'Failed to fetch profile' }, 500);
  }
});

// Update profile (protected)
app.put("/make-server-b4947159/profile", async (c) => {
  try {
    const user = await getUserFromToken(c.req.header('Authorization'));
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const updates = await c.req.json();

    const { data, error } = await supabaseAdmin
      .from('profiles')
      .update(updates)
      .eq('id', user.id)
      .select()
      .single();

    if (error) {
      console.log('Update profile error:', error);
      return c.json({ error: error.message }, 400);
    }

    return c.json({ success: true, profile: data });
  } catch (error) {
    console.log('Update profile error:', error);
    return c.json({ error: 'Failed to update profile' }, 500);
  }
});

// Get user's skills (protected)
app.get("/make-server-b4947159/my-skills", async (c) => {
  try {
    const user = await getUserFromToken(c.req.header('Authorization'));
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const { data, error } = await supabaseAdmin
      .from('skills')
      .select(`
        *,
        skill_wants (*),
        skill_tags (*)
      `)
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (error) {
      console.log('Get user skills error:', error);
      return c.json({ error: error.message }, 400);
    }

    return c.json({ skills: data });
  } catch (error) {
    console.log('Get user skills error:', error);
    return c.json({ error: 'Failed to fetch skills' }, 500);
  }
});

// ===== WISHLIST ROUTES =====

// Get user wishlist (protected)
app.get("/make-server-b4947159/wishlist", async (c) => {
  try {
    const user = await getUserFromToken(c.req.header('Authorization'));
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const { data, error } = await supabaseAdmin
      .from('wishlist')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (error) {
      console.log('Get wishlist error:', error);
      return c.json({ error: error.message }, 400);
    }

    return c.json({ wishlist: data });
  } catch (error) {
    console.log('Get wishlist error:', error);
    return c.json({ error: 'Failed to fetch wishlist' }, 500);
  }
});

// Add to wishlist (protected)
app.post("/make-server-b4947159/wishlist", async (c) => {
  try {
    const user = await getUserFromToken(c.req.header('Authorization'));
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const { skill_name, category } = await c.req.json();

    const { data, error } = await supabaseAdmin
      .from('wishlist')
      .insert({
        user_id: user.id,
        skill_name,
        category,
      })
      .select()
      .single();

    if (error) {
      console.log('Add to wishlist error:', error);
      return c.json({ error: error.message }, 400);
    }

    return c.json({ success: true, item: data });
  } catch (error) {
    console.log('Add to wishlist error:', error);
    return c.json({ error: 'Failed to add to wishlist' }, 500);
  }
});

// Remove from wishlist (protected)
app.delete("/make-server-b4947159/wishlist/:id", async (c) => {
  try {
    const user = await getUserFromToken(c.req.header('Authorization'));
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const id = c.req.param('id');

    const { error } = await supabaseAdmin
      .from('wishlist')
      .delete()
      .eq('id', id)
      .eq('user_id', user.id);

    if (error) {
      console.log('Remove from wishlist error:', error);
      return c.json({ error: error.message }, 400);
    }

    return c.json({ success: true });
  } catch (error) {
    console.log('Remove from wishlist error:', error);
    return c.json({ error: 'Failed to remove from wishlist' }, 500);
  }
});

// ===== SWAP REQUEST ROUTES =====

// Get swap requests for user (protected)
app.get("/make-server-b4947159/swap-requests", async (c) => {
  try {
    const user = await getUserFromToken(c.req.header('Authorization'));
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const type = c.req.query('type'); // 'sent' or 'received'

    let query = supabaseAdmin
      .from('swap_requests')
      .select(`
        *,
        skills (*),
        profiles!swap_requests_requester_id_fkey (
          id,
          name,
          avatar_url
        )
      `);

    if (type === 'sent') {
      query = query.eq('requester_id', user.id);
    } else {
      // Received - get requests for user's skills
      const { data: userSkills } = await supabaseAdmin
        .from('skills')
        .select('id')
        .eq('user_id', user.id);

      const skillIds = userSkills?.map(s => s.id) || [];
      query = query.in('skill_id', skillIds);
    }

    const { data, error } = await query.order('created_at', { ascending: false });

    if (error) {
      console.log('Get swap requests error:', error);
      return c.json({ error: error.message }, 400);
    }

    return c.json({ requests: data });
  } catch (error) {
    console.log('Get swap requests error:', error);
    return c.json({ error: 'Failed to fetch swap requests' }, 500);
  }
});

// Create swap request (protected)
app.post("/make-server-b4947159/swap-requests", async (c) => {
  try {
    const user = await getUserFromToken(c.req.header('Authorization'));
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const { skill_id, message } = await c.req.json();

    const { data, error } = await supabaseAdmin
      .from('swap_requests')
      .insert({
        skill_id,
        requester_id: user.id,
        status: 'pending',
        message,
      })
      .select()
      .single();

    if (error) {
      console.log('Create swap request error:', error);
      return c.json({ error: error.message }, 400);
    }

    return c.json({ success: true, request: data });
  } catch (error) {
    console.log('Create swap request error:', error);
    return c.json({ error: 'Failed to create swap request' }, 500);
  }
});

// Update swap request status (protected)
app.put("/make-server-b4947159/swap-requests/:id", async (c) => {
  try {
    const user = await getUserFromToken(c.req.header('Authorization'));
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }

    const id = c.req.param('id');
    const { status } = await c.req.json();

    const { data, error } = await supabaseAdmin
      .from('swap_requests')
      .update({ status })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.log('Update swap request error:', error);
      return c.json({ error: error.message }, 400);
    }

    return c.json({ success: true, request: data });
  } catch (error) {
    console.log('Update swap request error:', error);
    return c.json({ error: 'Failed to update swap request' }, 500);
  }
});

Deno.serve(app.fetch);