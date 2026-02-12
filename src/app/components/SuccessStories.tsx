import { motion } from 'motion/react';
import { Star, Quote, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface SuccessStoriesProps {
  onNavigate: (page: string) => void;
}

export function SuccessStories({ onNavigate }: SuccessStoriesProps) {
  const stories = [
    {
      name: 'Sarah Chen',
      location: 'San Francisco, CA',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      taught: 'Graphic Design',
      learned: 'Web Development',
      story: "I've always wanted to learn coding but courses were too expensive. Through SkillSwap, I taught design to a developer who taught me React in return. Now I'm building my own projects!",
      swaps: 12,
      rating: 5,
      badge: '🎨',
    },
    {
      name: 'Marcus Johnson',
      location: 'Austin, TX',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      taught: 'Guitar Lessons',
      learned: 'Spanish',
      story: 'Learning Spanish opened up a whole new world for me. I traded guitar lessons with Maria who wanted to learn music. We both got way more than we expected - we became great friends!',
      swaps: 18,
      rating: 5,
      badge: '🎸',
    },
    {
      name: 'Priya Patel',
      location: 'New York, NY',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      taught: 'Yoga & Meditation',
      learned: 'Photography',
      story: 'As a yoga instructor, I wanted to learn photography to capture my classes better. I found a photographer who wanted to learn yoga. Perfect match! Now I run my own photography business.',
      swaps: 25,
      rating: 5,
      badge: '🧘',
    },
    {
      name: 'David Kim',
      location: 'Seattle, WA',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      taught: 'Cooking (Korean)',
      learned: 'Piano',
      story: 'I taught traditional Korean cooking to a piano teacher who had always wanted to learn. In exchange, I finally fulfilled my childhood dream of playing piano. We still meet weekly!',
      swaps: 15,
      rating: 5,
      badge: '🍳',
    },
    {
      name: 'Emma Rodriguez',
      location: 'Miami, FL',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
      taught: 'Digital Marketing',
      learned: 'Fitness Training',
      story: 'Swapped my marketing expertise for personal training sessions. Lost 30 pounds and my swap partner gained 100+ clients from the marketing strategies I taught. Win-win!',
      swaps: 20,
      rating: 5,
      badge: '💪',
    },
    {
      name: 'Alex Thompson',
      location: 'Portland, OR',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
      taught: 'Woodworking',
      learned: 'Video Editing',
      story: 'I taught a YouTuber how to build custom furniture. He taught me video editing. Now I run a YouTube channel documenting my woodworking projects with 50K subscribers!',
      swaps: 8,
      rating: 5,
      badge: '🪚',
    },
  ];

  const stats = [
    { label: 'Total Swaps Completed', value: '50,000+', icon: TrendingUp },
    { label: 'Active Members', value: '25,000+', icon: Award },
    { label: 'Success Rate', value: '94%', icon: Star },
    { label: 'Skills Categories', value: '150+', icon: Quote },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Success Stories
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Real people, real skills, real results. See how SkillSwap is changing lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-purple-600" />
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {stories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-bold text-lg">{story.name}</h3>
                      <p className="text-gray-600 text-sm">{story.location}</p>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(story.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                    <div className="ml-auto text-3xl">{story.badge}</div>
                  </div>

                  {/* Swap Info */}
                  <div className="bg-purple-50 rounded-lg p-4 mb-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="text-gray-600 mb-1">Taught</div>
                        <div className="font-semibold">{story.taught}</div>
                      </div>
                      <div>
                        <div className="text-gray-600 mb-1">Learned</div>
                        <div className="font-semibold">{story.learned}</div>
                      </div>
                    </div>
                  </div>

                  {/* Story */}
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-purple-200" />
                    <p className="text-gray-700 pl-6 leading-relaxed italic">
                      "{story.story}"
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="mt-4 pt-4 border-t flex items-center justify-between text-sm">
                    <span className="text-gray-600">
                      <span className="font-bold text-purple-600">{story.swaps}</span> swaps
                      completed
                    </span>
                    <span className="text-green-600 font-semibold">✓ Verified</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Community Says</h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8"
          >
            <Quote className="w-12 h-12 mx-auto mb-4 text-white/50" />
            <p className="text-xl mb-6 italic">
              "SkillSwap completely changed how I think about education. I've learned
              more in 6 months than I did in years of expensive online courses. The best
              part? I made incredible friends along the way."
            </p>
            <div className="font-semibold">- Jennifer Smith, Los Angeles</div>
            <div className="text-white/80 text-sm">Learned Programming, Taught Photography</div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Write Your Own Success Story</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of people exchanging skills and transforming their lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => onNavigate('browse')}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                Browse Skills
              </Button>
              <Button
                onClick={() => onNavigate('how-it-works')}
                size="lg"
                variant="outline"
              >
                Learn How It Works
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
