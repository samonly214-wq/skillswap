# SkillSwap - Quick Setup Guide

## 🚀 Step-by-Step Setup

### Step 1: Execute Database Schema

1. **Open Supabase SQL Editor**
   - Go to: https://supabase.com/dashboard/project/YOUR_PROJECT_ID/sql/new

2. **Copy Schema**
   - Open `/supabase/schema.sql` in this project
   - Copy ALL the SQL code

3. **Execute SQL**
   - Paste into SQL Editor
   - Click "Run" button
   - Wait for success message

4. **Verify Tables Created**
   - Go to Table Editor in Supabase
   - You should see 8 new tables:
     - profiles
     - skills
     - skill_wants
     - skill_tags
     - wishlist
     - swap_requests
     - reviews
     - achievements

### Step 2: Test the Application

1. **Browse Skills** (No auth required)
   - Click "Browse Skills" in nav
   - View available skills
   - Filter by category
   - Search for skills

2. **Sign Up** (Future feature - currently mock data)
   - Will allow creating new accounts
   - Automatically creates profile

3. **Create Skills** (Requires auth)
   - Go to "My Skills"
   - Click "Add New Skill"
   - Fill out form
   - Submit to database

## 📋 Database Table Summary

### **profiles** - User Information
- Extends Supabase auth users
- Stores name, location, bio, rating
- Tracks swaps completed

### **skills** - All Available Skills
- Title, description, category, level
- Links to user who created it
- Can be active/inactive

### **skill_wants** - Exchange Preferences
- What skills the teacher wants to learn
- Linked to specific skill offers

### **skill_tags** - Search Tags
- Multiple tags per skill
- Used for search/filtering

### **wishlist** - User Learning Goals
- Skills users want to learn
- Helps match with teachers

### **swap_requests** - Exchange Requests
- Pending/accepted/rejected/completed states
- Includes message from requester

### **reviews** - Ratings & Feedback
- 1-5 star ratings
- Written comments
- One review per user per skill

### **achievements** - User Badges
- Track milestones
- Gamification element

## 🔐 Row Level Security (RLS)

All tables have RLS enabled. Key policies:

**Public Read (Everyone can see):**
- skills (if active)
- profiles
- skill_wants
- skill_tags
- reviews
- achievements

**Authenticated Only:**
- Creating skills
- Managing wishlist
- Creating swap requests
- Writing reviews

**Owner Only:**
- Updating/deleting your skills
- Updating your profile
- Managing your swap requests

## 🛠️ API Endpoints Reference

### Public Endpoints
```
GET  /skills                    # List all skills
GET  /skills/:id                # Get skill details
GET  /profile/:id               # Get user profile
```

### Protected Endpoints (require auth token)
```
POST /auth/signup               # Create account
POST /skills                    # Create new skill
PUT  /skills/:id                # Update your skill
DELETE /skills/:id              # Delete your skill
GET  /my-skills                 # Get your skills
GET  /profile                   # Get your profile
PUT  /profile                   # Update your profile
GET  /wishlist                  # Get your wishlist
POST /wishlist                  # Add to wishlist
DELETE /wishlist/:id            # Remove from wishlist
GET  /swap-requests             # Your swap requests
POST /swap-requests             # Create swap request
PUT  /swap-requests/:id         # Update request status
```

## 📝 Sample Data Workflow

### Creating Your First Skill

1. **Sign Up** (future):
```json
POST /auth/signup
{
  "email": "teacher@example.com",
  "password": "secure123",
  "name": "Jane Doe",
  "location": "San Francisco, CA"
}
```

2. **Create Skill**:
```json
POST /skills
{
  "title": "React for Beginners",
  "category": "Programming",
  "description": "Learn React basics...",
  "level": "Beginner",
  "duration": "6 weeks",
  "image_url": "https://...",
  "wanted_skills": ["Spanish", "Guitar"],
  "tags": ["react", "javascript", "web"]
}
```

3. **Receive Requests**:
Other users can now:
- View your skill
- Send swap requests
- Propose exchange

## 🎯 Testing Checklist

- [ ] All 8 tables created successfully
- [ ] RLS policies are enabled
- [ ] Can browse skills without auth
- [ ] Mock data displays correctly
- [ ] Navigation works between pages
- [ ] Filtering works on Browse page
- [ ] Skill detail page loads
- [ ] Profile page displays

## ⚠️ Important Notes

1. **Email Confirmation**: Currently disabled (email_confirm: true in signup)
   - No email server configured
   - Users are auto-confirmed
   - For production, set up SMTP

2. **Authentication**: Currently using mock data
   - Real auth requires token management
   - Implement login/signup UI
   - Store JWT token properly

3. **Images**: Using Unsplash URLs
   - For production, use Supabase Storage
   - Implement upload functionality
   - Handle image compression

4. **Real-time**: Not implemented yet
   - Add Supabase Realtime for live updates
   - Subscribe to swap request changes
   - Show online/offline status

## 🔍 Troubleshooting

**Tables not created?**
- Check SQL execution results
- Look for error messages
- Ensure UUID extension is enabled

**Can't insert data?**
- Check RLS policies
- Verify authentication token
- Look at server logs

**Skills not showing?**
- Check `is_active = true`
- Verify query filters
- Check browser console

## 📚 Additional Resources

- **Supabase Docs**: https://supabase.com/docs
- **React Docs**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com
- **Motion**: https://motion.dev

---

**Ready to start?** Execute the SQL schema and your SkillSwap platform is live!
