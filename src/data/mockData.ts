export interface User {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  skillsOffered: string[];
  skillsWanted: string[];
  location: string;
  rating: number;
  swapsCompleted: number;
}

export interface Skill {
  id: string;
  title: string;
  category: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  image: string;
  teacher: User;
  skillsWanted: string[];
  tags: string[];
}

export const categories = [
  'All',
  'Cooking',
  'Music',
  'Programming',
  'Art',
  'Photography',
  'Languages',
  'Fitness',
  'Crafts',
  'Gardening',
];

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Sarah Martinez',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    bio: 'Passionate chef and guitar enthusiast. Love sharing my cooking skills!',
    skillsOffered: ['Italian Cooking', 'Pasta Making'],
    skillsWanted: ['Guitar Basics', 'Photography'],
    location: 'San Francisco, CA',
    rating: 4.9,
    swapsCompleted: 23,
  },
  {
    id: '2',
    name: 'James Chen',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
    bio: 'Software developer who loves teaching and learning new things.',
    skillsOffered: ['React Basics', 'Python for Beginners'],
    skillsWanted: ['Spanish Language', 'Cooking'],
    location: 'Austin, TX',
    rating: 5.0,
    swapsCompleted: 31,
  },
  {
    id: '3',
    name: 'Emma Wilson',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
    bio: 'Yoga instructor and watercolor artist.',
    skillsOffered: ['Beginner Yoga', 'Watercolor Painting'],
    skillsWanted: ['Web Design', 'Photography'],
    location: 'Portland, OR',
    rating: 4.8,
    swapsCompleted: 18,
  },
  {
    id: '4',
    name: 'Marcus Johnson',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
    bio: 'Professional photographer and guitar player.',
    skillsOffered: ['Portrait Photography', 'Guitar Intermediate'],
    skillsWanted: ['Video Editing', 'Cooking'],
    location: 'New York, NY',
    rating: 4.7,
    swapsCompleted: 15,
  },
  {
    id: '5',
    name: 'Lily Zhang',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lily',
    bio: 'Language teacher and gardening enthusiast.',
    skillsOffered: ['Mandarin Chinese', 'Container Gardening'],
    skillsWanted: ['Piano', 'Baking'],
    location: 'Seattle, WA',
    rating: 5.0,
    swapsCompleted: 27,
  },
];

export const mockSkills: Skill[] = [
  {
    id: '1',
    title: 'Italian Cooking Basics',
    category: 'Cooking',
    description: 'Learn to cook authentic Italian dishes including pasta, risotto, and classic sauces. Perfect for beginners who want to master Italian cuisine.',
    level: 'Beginner',
    duration: '4 weeks',
    image: 'https://images.unsplash.com/photo-1758279745466-f5f4087a87d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwY2xhc3MlMjBraXRjaGVufGVufDF8fHx8MTc2OTYzNTE1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    teacher: mockUsers[0],
    skillsWanted: ['Guitar Basics', 'Photography Fundamentals'],
    tags: ['cooking', 'italian', 'beginner-friendly'],
  },
  {
    id: '2',
    title: 'React for Beginners',
    category: 'Programming',
    description: 'Master the fundamentals of React including components, hooks, state management, and building your first web app.',
    level: 'Beginner',
    duration: '6 weeks',
    image: 'https://images.unsplash.com/photo-1675495277087-10598bf7bcd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGluZyUyMGxhcHRvcHxlbnwxfHx8fDE3Njk1OTg4NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    teacher: mockUsers[1],
    skillsWanted: ['Spanish Conversation', 'Baking'],
    tags: ['programming', 'web-development', 'react'],
  },
  {
    id: '3',
    title: 'Vinyasa Yoga Flow',
    category: 'Fitness',
    description: 'Discover the power of yoga through flowing sequences that build strength, flexibility, and mindfulness.',
    level: 'Beginner',
    duration: '8 weeks',
    image: 'https://images.unsplash.com/photo-1635545999375-057ee4013deb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWVkaXRhdGlvbiUyMHdlbGxuZXNzfGVufDF8fHx8MTc2OTU3NDc4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    teacher: mockUsers[2],
    skillsWanted: ['UI/UX Design', 'Photography'],
    tags: ['fitness', 'yoga', 'wellness'],
  },
  {
    id: '4',
    title: 'Portrait Photography',
    category: 'Photography',
    description: 'Learn professional portrait photography techniques including lighting, composition, and posing.',
    level: 'Intermediate',
    duration: '5 weeks',
    image: 'https://images.unsplash.com/photo-1768680357210-9aa2eba3adef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMGNhbWVyYSUyMGxlYXJuaW5nfGVufDF8fHx8MTc2OTY3NzIxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    teacher: mockUsers[3],
    skillsWanted: ['Video Editing', 'French Cooking'],
    tags: ['photography', 'portrait', 'camera'],
  },
  {
    id: '5',
    title: 'Watercolor for Beginners',
    category: 'Art',
    description: 'Explore watercolor painting basics including color mixing, brush techniques, and creating beautiful landscapes.',
    level: 'Beginner',
    duration: '4 weeks',
    image: 'https://images.unsplash.com/photo-1725819242793-e83d3e08d439?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWludGluZyUyMGFydCUyMGNyZWF0aXZlfGVufDF8fHx8MTc2OTY3NzIyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    teacher: mockUsers[2],
    skillsWanted: ['Digital Art', 'Photography'],
    tags: ['art', 'watercolor', 'painting'],
  },
  {
    id: '6',
    title: 'Mandarin Chinese Basics',
    category: 'Languages',
    description: 'Start speaking Mandarin Chinese with confidence. Learn essential phrases, pronunciation, and basic conversation skills.',
    level: 'Beginner',
    duration: '8 weeks',
    image: 'https://images.unsplash.com/photo-1758270704787-615782711641?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5ndWFnZSUyMGxlYXJuaW5nJTIwY29udmVyc2F0aW9ufGVufDF8fHx8MTc2OTY3NzIyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    teacher: mockUsers[4],
    skillsWanted: ['Piano', 'Pastry Making'],
    tags: ['language', 'mandarin', 'chinese'],
  },
  {
    id: '7',
    title: 'Acoustic Guitar Fundamentals',
    category: 'Music',
    description: 'Learn to play your favorite songs on acoustic guitar. Covers chords, strumming patterns, and basic music theory.',
    level: 'Beginner',
    duration: '6 weeks',
    image: 'https://images.unsplash.com/photo-1758524944402-1903b38f848f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjB0ZWFjaGluZyUyMGd1aXRhciUyMG11c2ljfGVufDF8fHx8MTc2OTY3NzIxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    teacher: mockUsers[3],
    skillsWanted: ['Song Writing', 'Music Production'],
    tags: ['music', 'guitar', 'instrument'],
  },
  {
    id: '8',
    title: 'Container Gardening',
    category: 'Gardening',
    description: 'Grow your own herbs and vegetables in small spaces. Perfect for apartment dwellers and beginners.',
    level: 'Beginner',
    duration: '3 weeks',
    image: 'https://images.unsplash.com/photo-1722404476013-6baa2b72caaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJkZW5pbmclMjBwbGFudHMlMjBuYXR1cmV8ZW58MXx8fHwxNzY5Njc3MjIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    teacher: mockUsers[4],
    skillsWanted: ['Composting', 'Sustainable Living'],
    tags: ['gardening', 'plants', 'urban-farming'],
  },
];
