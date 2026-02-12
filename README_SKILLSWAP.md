# SkillSwap - Micro Skill Exchange Platform

A beautiful, fully-functional skill exchange platform where users can teach skills in exchange for learning others. Built with React, Tailwind CSS, and Supabase.

## 🎯 Features

### Core Functionality
- **User Authentication**: Sign up, login, and session management
- **Browse Skills**: Search and filter skills by category
- **Skill Details**: Comprehensive information about each skill
- **My Skills Page**: Manage skills you're offering and want to learn
- **User Profiles**: View achievements, teaching history, and learning progress
- **Swap Requests**: Send and manage skill exchange requests
- **Wishlist**: Track skills you want to learn

### Design Features
- Beautiful purple-to-blue gradient theme
- Smooth animations using Motion (Framer Motion)
- Responsive design for all screen sizes
- Clean card-based layouts with hover effects
- Custom logo with gradient styling

## 📊 Database Schema

### Tables Structure

#### 1. **profiles**
Extends Supabase auth.users with additional user information.

```sql
- id (uuid, PK, references auth.users)
- name (text)
- avatar_url (text)
- bio (text)
- location (text)
- rating (decimal, 0-5)
- swaps_completed (integer)
- created_at (timestamp)
- updated_at (timestamp)
```

#### 2. **skills**
All skills offered by users.

```sql
- id (uuid, PK)
- user_id (uuid, FK → profiles)
- title (text)
- category (text)
- description (text)
- level (text: Beginner/Intermediate/Advanced)
- duration (text)
- image_url (text)
- is_active (boolean)
- created_at (timestamp)
- updated_at (timestamp)
```

#### 3. **skill_wants**
Skills that teachers want to learn in exchange.

```sql
- id (uuid, PK)
- skill_id (uuid, FK → skills)
- wanted_skill_name (text)
- created_at (timestamp)
```

#### 4. **skill_tags**
Tags for better skill discoverability.

```sql
- id (uuid, PK)
- skill_id (uuid, FK → skills)
- tag (text)
```

#### 5. **wishlist**
Skills users want to learn.

```sql
- id (uuid, PK)
- user_id (uuid, FK → profiles)
- skill_name (text)
- category (text)
- created_at (timestamp)
```

#### 6. **swap_requests**
Skill exchange requests between users.

```sql
- id (uuid, PK)
- skill_id (uuid, FK → skills)
- requester_id (uuid, FK → profiles)
- status (text: pending/accepted/rejected/completed)
- message (text)
- created_at (timestamp)
- updated_at (timestamp)
```

#### 7. **reviews**
Reviews and ratings for completed skill swaps.

```sql
- id (uuid, PK)
- skill_id (uuid, FK → skills)
- reviewer_id (uuid, FK → profiles)
- rating (integer, 1-5)
- comment (text)
- created_at (timestamp)
```

#### 8. **achievements**
User achievements and badges.

```sql
- id (uuid, PK)
- user_id (uuid, FK → profiles)
- achievement_type (text)
- earned_at (timestamp)
```

## 🚀 Setup Instructions

### 1. Execute Database Schema

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor** (https://supabase.com/dashboard/project/YOUR_PROJECT/sql/new)
3. Copy all the SQL from `/supabase/schema.sql`
4. Execute the SQL to create all tables, indexes, and Row Level Security policies

### 2. Server Routes

The backend server is located at `/supabase/functions/server/index.tsx` and includes:

**Auth Routes:**
- `POST /make-server-b4947159/auth/signup` - User registration

**Skills Routes:**
- `GET /make-server-b4947159/skills` - Get all skills (with filtering)
- `GET /make-server-b4947159/skills/:id` - Get single skill
- `POST /make-server-b4947159/skills` - Create new skill (protected)
- `PUT /make-server-b4947159/skills/:id` - Update skill (protected)
- `DELETE /make-server-b4947159/skills/:id` - Delete skill (protected)

**Profile Routes:**
- `GET /make-server-b4947159/profile` - Get current user profile (protected)
- `GET /make-server-b4947159/profile/:id` - Get user profile by ID
- `PUT /make-server-b4947159/profile` - Update profile (protected)
- `GET /make-server-b4947159/my-skills` - Get user's skills (protected)

**Wishlist Routes:**
- `GET /make-server-b4947159/wishlist` - Get user wishlist (protected)
- `POST /make-server-b4947159/wishlist` - Add to wishlist (protected)
- `DELETE /make-server-b4947159/wishlist/:id` - Remove from wishlist (protected)

**Swap Request Routes:**
- `GET /make-server-b4947159/swap-requests` - Get swap requests (protected)
- `POST /make-server-b4947159/swap-requests` - Create swap request (protected)
- `PUT /make-server-b4947159/swap-requests/:id` - Update request status (protected)

### 3. Frontend Integration

The app uses:
- **Supabase Client** (`/src/lib/supabaseClient.ts`) - For authentication
- **API Client** (`/src/lib/api.ts`) - For all backend communication

## 🔒 Security

### Row Level Security (RLS)
All tables have RLS enabled with appropriate policies:

- **Public Read**: Skills, profiles, reviews, achievements
- **Authenticated Write**: Users can only modify their own data
- **Protected Routes**: Server validates auth tokens for sensitive operations

### Authentication Flow

1. **Sign Up**: `/auth/signup` → Creates user + profile
2. **Sign In**: Use Supabase `signInWithPassword`
3. **Session**: Token stored in localStorage
4. **Protected Routes**: Server verifies token with `getUser()`

## 📝 Data Flow

### Creating a Skill
1. User fills form on "My Skills" page
2. Frontend calls `skillsApi.create(data)`
3. Server validates auth token
4. Creates skill + related records (wants, tags)
5. Returns created skill to frontend

### Browsing Skills
1. User navigates to "Browse Skills"
2. Frontend calls `skillsApi.getAll(filters)`
3. Server queries database with filters
4. Returns skills with teacher profiles
5. Frontend displays in grid layout

### Proposing a Swap
1. User views skill detail page
2. Clicks "Propose a Swap"
3. Frontend calls `swapRequestsApi.create()`
4. Server creates request record
5. Teacher receives notification (future feature)

## 🎨 Components Structure

```
/src/app/
├── App.tsx                 # Main app with routing
└── components/
    ├── Logo.tsx            # SkillSwap logo
    ├── Header.tsx          # Navigation header
    ├── LandingPage.tsx     # Home page
    ├── BrowseSkills.tsx    # Skills listing
    ├── SkillCard.tsx       # Individual skill card
    ├── SkillDetail.tsx     # Skill details page
    ├── MySkills.tsx        # User's skills management
    └── UserProfile.tsx     # User profile page
```

## 🔄 State Management

Currently using React state for:
- Current page/route
- Selected skill ID
- User session (localStorage)

For production, consider adding:
- React Context for global auth state
- React Query for server state caching
- Real routing with React Router

## 🎯 Next Steps for Production

### Required Improvements
1. **Add Real Authentication UI**: Login/Signup modals
2. **Implement Real Routing**: Use React Router for proper URLs
3. **Add Image Upload**: Supabase Storage for skill images
4. **Messaging System**: Real-time chat for swap coordination
5. **Notifications**: Email/in-app notifications for requests
6. **Search Enhancement**: Full-text search with PostgreSQL
7. **Rating System**: Implement reviews after completed swaps

### Optional Features
- Social authentication (Google, GitHub)
- Calendar integration for scheduling
- Video call integration
- Payment escrow for premium skills
- Skill verification badges
- Community forums

## 📱 Responsive Design

The app is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🐛 Debugging Tips

### Check Server Logs
Server logs are visible in Supabase Functions logs.

### Common Issues
1. **"Unauthorized" errors**: Check if token is in localStorage
2. **Schema errors**: Ensure all SQL was executed correctly
3. **CORS issues**: Server has open CORS headers configured

## 📄 License

Built as a prototype/demo. Feel free to use and modify.

## 🙏 Credits

- **UI Framework**: React + Tailwind CSS
- **Backend**: Supabase (PostgreSQL + Edge Functions)
- **Icons**: Lucide React
- **Animations**: Motion (Framer Motion)
- **Images**: Unsplash API

---

**Note**: This is a prototype built in Figma Make. For production use, additional security hardening, error handling, and testing are recommended.
