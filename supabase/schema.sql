-- =====================================================
-- SKILLSWAP DATABASE SCHEMA
-- =====================================================
-- Execute these SQL commands in your Supabase SQL Editor
-- Go to: https://supabase.com/dashboard/project/YOUR_PROJECT/sql/new
-- =====================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =====================================================
-- 1. PROFILES TABLE (extends auth.users)
-- =====================================================
CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  avatar_url TEXT,
  bio TEXT DEFAULT '',
  location TEXT,
  rating DECIMAL(3,2) DEFAULT 5.0 CHECK (rating >= 0 AND rating <= 5),
  swaps_completed INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- Policies for profiles
CREATE POLICY "Profiles are viewable by everyone" 
  ON profiles FOR SELECT 
  USING (true);

CREATE POLICY "Users can update own profile" 
  ON profiles FOR UPDATE 
  USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" 
  ON profiles FOR INSERT 
  WITH CHECK (auth.uid() = id);

-- =====================================================
-- 2. SKILLS TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS skills (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT NOT NULL,
  level TEXT NOT NULL CHECK (level IN ('Beginner', 'Intermediate', 'Advanced')),
  duration TEXT NOT NULL,
  image_url TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;

-- Policies for skills
CREATE POLICY "Skills are viewable by everyone" 
  ON skills FOR SELECT 
  USING (is_active = true);

CREATE POLICY "Users can create own skills" 
  ON skills FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own skills" 
  ON skills FOR UPDATE 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own skills" 
  ON skills FOR DELETE 
  USING (auth.uid() = user_id);

-- =====================================================
-- 3. SKILL_WANTS TABLE (skills teacher wants to learn)
-- =====================================================
CREATE TABLE IF NOT EXISTS skill_wants (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  skill_id UUID NOT NULL REFERENCES skills(id) ON DELETE CASCADE,
  wanted_skill_name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE skill_wants ENABLE ROW LEVEL SECURITY;

-- Policies for skill_wants
CREATE POLICY "Skill wants are viewable by everyone" 
  ON skill_wants FOR SELECT 
  USING (true);

CREATE POLICY "Users can manage own skill wants" 
  ON skill_wants FOR ALL 
  USING (
    EXISTS (
      SELECT 1 FROM skills 
      WHERE skills.id = skill_wants.skill_id 
      AND skills.user_id = auth.uid()
    )
  );

-- =====================================================
-- 4. SKILL_TAGS TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS skill_tags (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  skill_id UUID NOT NULL REFERENCES skills(id) ON DELETE CASCADE,
  tag TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE skill_tags ENABLE ROW LEVEL SECURITY;

-- Policies for skill_tags
CREATE POLICY "Skill tags are viewable by everyone" 
  ON skill_tags FOR SELECT 
  USING (true);

CREATE POLICY "Users can manage own skill tags" 
  ON skill_tags FOR ALL 
  USING (
    EXISTS (
      SELECT 1 FROM skills 
      WHERE skills.id = skill_tags.skill_id 
      AND skills.user_id = auth.uid()
    )
  );

-- =====================================================
-- 5. WISHLIST TABLE (skills users want to learn)
-- =====================================================
CREATE TABLE IF NOT EXISTS wishlist (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  skill_name TEXT NOT NULL,
  category TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE wishlist ENABLE ROW LEVEL SECURITY;

-- Policies for wishlist
CREATE POLICY "Users can view own wishlist" 
  ON wishlist FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can manage own wishlist" 
  ON wishlist FOR ALL 
  USING (auth.uid() = user_id);

-- =====================================================
-- 6. SWAP_REQUESTS TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS swap_requests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  skill_id UUID NOT NULL REFERENCES skills(id) ON DELETE CASCADE,
  requester_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'rejected', 'completed')),
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE swap_requests ENABLE ROW LEVEL SECURITY;

-- Policies for swap_requests
CREATE POLICY "Users can view own swap requests" 
  ON swap_requests FOR SELECT 
  USING (
    auth.uid() = requester_id OR 
    EXISTS (
      SELECT 1 FROM skills 
      WHERE skills.id = swap_requests.skill_id 
      AND skills.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create swap requests" 
  ON swap_requests FOR INSERT 
  WITH CHECK (auth.uid() = requester_id);

CREATE POLICY "Skill owners can update swap requests" 
  ON swap_requests FOR UPDATE 
  USING (
    EXISTS (
      SELECT 1 FROM skills 
      WHERE skills.id = swap_requests.skill_id 
      AND skills.user_id = auth.uid()
    )
  );

-- =====================================================
-- 7. REVIEWS TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  skill_id UUID NOT NULL REFERENCES skills(id) ON DELETE CASCADE,
  reviewer_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(skill_id, reviewer_id)
);

-- Enable Row Level Security
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Policies for reviews
CREATE POLICY "Reviews are viewable by everyone" 
  ON reviews FOR SELECT 
  USING (true);

CREATE POLICY "Users can create reviews" 
  ON reviews FOR INSERT 
  WITH CHECK (auth.uid() = reviewer_id);

CREATE POLICY "Users can update own reviews" 
  ON reviews FOR UPDATE 
  USING (auth.uid() = reviewer_id);

CREATE POLICY "Users can delete own reviews" 
  ON reviews FOR DELETE 
  USING (auth.uid() = reviewer_id);

-- =====================================================
-- 8. ACHIEVEMENTS TABLE
-- =====================================================
CREATE TABLE IF NOT EXISTS achievements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  achievement_type TEXT NOT NULL,
  earned_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, achievement_type)
);

-- Enable Row Level Security
ALTER TABLE achievements ENABLE ROW LEVEL SECURITY;

-- Policies for achievements
CREATE POLICY "Achievements are viewable by everyone" 
  ON achievements FOR SELECT 
  USING (true);

-- =====================================================
-- INDEXES FOR PERFORMANCE
-- =====================================================
CREATE INDEX IF NOT EXISTS idx_skills_user_id ON skills(user_id);
CREATE INDEX IF NOT EXISTS idx_skills_category ON skills(category);
CREATE INDEX IF NOT EXISTS idx_skills_is_active ON skills(is_active);
CREATE INDEX IF NOT EXISTS idx_skill_wants_skill_id ON skill_wants(skill_id);
CREATE INDEX IF NOT EXISTS idx_skill_tags_skill_id ON skill_tags(skill_id);
CREATE INDEX IF NOT EXISTS idx_wishlist_user_id ON wishlist(user_id);
CREATE INDEX IF NOT EXISTS idx_swap_requests_skill_id ON swap_requests(skill_id);
CREATE INDEX IF NOT EXISTS idx_swap_requests_requester_id ON swap_requests(requester_id);
CREATE INDEX IF NOT EXISTS idx_reviews_skill_id ON reviews(skill_id);
CREATE INDEX IF NOT EXISTS idx_achievements_user_id ON achievements(user_id);

-- =====================================================
-- FUNCTIONS AND TRIGGERS
-- =====================================================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_skills_updated_at BEFORE UPDATE ON skills
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_swap_requests_updated_at BEFORE UPDATE ON swap_requests
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- SEED DATA (Optional - for testing)
-- =====================================================

-- Note: You'll need to create actual users through the signup endpoint first
-- Then you can manually add skills using those user IDs

-- Example of adding a skill after user signup:
-- INSERT INTO skills (user_id, title, category, description, level, duration, image_url)
-- VALUES (
--   'USER_UUID_HERE',
--   'Italian Cooking Basics',
--   'Cooking',
--   'Learn authentic Italian cooking',
--   'Beginner',
--   '4 weeks',
--   'https://images.unsplash.com/...'
-- );
