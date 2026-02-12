import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/app/components/ui/avatar';
import { Separator } from '@/app/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import {
  MapPin,
  Star,
  Calendar,
  Award,
  CheckCircle2,
  MessageCircle,
  Settings,
} from 'lucide-react';
import { motion } from 'motion/react';

export function UserProfile() {
  const user = {
    name: 'Alex Rivera',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
    location: 'Los Angeles, CA',
    memberSince: 'January 2025',
    rating: 4.9,
    swapsCompleted: 15,
    bio: 'Passionate learner and teacher. I love connecting with people and sharing knowledge. Always excited to learn something new!',
  };

  const handleEditProfile = () => {
    alert('Edit profile functionality - will open profile editing form');
  };

  const handleViewMessages = (skillTitle: string) => {
    alert(`Opening messages for: ${skillTitle}`);
  };

  const skillsOffered = [
    {
      title: 'Web Design Fundamentals',
      category: 'Programming',
      students: 8,
      rating: 5.0,
    },
    {
      title: 'Spanish Conversation',
      category: 'Languages',
      students: 5,
      rating: 4.8,
    },
  ];

  const skillsLearned = [
    {
      title: 'Photography Basics',
      teacher: 'Sarah Johnson',
      completed: true,
      date: 'Dec 2024',
    },
    {
      title: 'Guitar Fundamentals',
      teacher: 'Marcus Chen',
      completed: true,
      date: 'Nov 2024',
    },
    {
      title: 'Italian Cooking',
      teacher: 'Emma Martinez',
      completed: false,
      date: 'In Progress',
    },
  ];

  const achievements = [
    { icon: '🎯', title: 'First Swap', description: 'Completed your first skill exchange' },
    { icon: '⭐', title: 'Top Rated', description: 'Maintained 4.5+ rating' },
    { icon: '🚀', title: '10 Swaps', description: 'Completed 10 skill swaps' },
    { icon: '🌟', title: 'Early Adopter', description: 'Joined in the first month' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-6">
              <Avatar className="h-32 w-32 border-4 border-purple-200">
                <AvatarImage src={user.avatar} />
                <AvatarFallback className="text-2xl">{user.name[0]}</AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
                    <div className="flex flex-wrap items-center gap-4 text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{user.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>Joined {user.memberSince}</span>
                      </div>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="gap-2"
                    onClick={handleEditProfile}
                  >
                    <Settings className="h-4 w-4" />
                    Edit Profile
                  </Button>
                </div>

                <p className="text-gray-700 mb-6">{user.bio}</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">
                      {user.swapsCompleted}
                    </div>
                    <div className="text-sm text-gray-600">Swaps Completed</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 flex items-center justify-center gap-1">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      {user.rating}
                    </div>
                    <div className="text-sm text-gray-600">Rating</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">
                      {skillsOffered.length}
                    </div>
                    <div className="text-sm text-gray-600">Skills Offered</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">
                      {skillsLearned.filter((s) => s.completed).length}
                    </div>
                    <div className="text-sm text-gray-600">Skills Learned</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        <Tabs defaultValue="teaching" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="teaching">Teaching</TabsTrigger>
            <TabsTrigger value="learning">Learning</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          {/* Teaching Tab */}
          <TabsContent value="teaching">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              {skillsOffered.map((skill, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold">{skill.title}</h3>
                        <Badge variant="outline">{skill.category}</Badge>
                      </div>

                      <div className="flex items-center gap-6 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{skill.rating}</span>
                        </div>
                        <div>{skill.students} students taught</div>
                      </div>
                    </div>

                    <Button 
                      variant="outline"
                      onClick={() => handleViewMessages(skill.title)}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Messages
                    </Button>
                  </div>
                </Card>
              ))}
            </motion.div>
          </TabsContent>

          {/* Learning Tab */}
          <TabsContent value="learning">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              {skillsLearned.map((skill, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold">{skill.title}</h3>
                        {skill.completed && (
                          <CheckCircle2 className="h-5 w-5 text-green-600" />
                        )}
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>Teacher: {skill.teacher}</span>
                        <span>•</span>
                        <span>{skill.date}</span>
                      </div>
                    </div>

                    {skill.completed ? (
                      <Badge className="bg-green-600">Completed</Badge>
                    ) : (
                      <Badge className="bg-blue-600">In Progress</Badge>
                    )}
                  </div>
                </Card>
              ))}
            </motion.div>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="grid md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{achievement.icon}</div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{achievement.title}</h3>
                        <p className="text-sm text-gray-600">{achievement.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="p-6 mt-6 bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
                <div className="flex items-center gap-4">
                  <Award className="h-12 w-12 text-purple-600" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Keep Going!</h3>
                    <p className="text-sm text-gray-700">
                      Complete 5 more swaps to unlock the "Expert Swapper" achievement
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}