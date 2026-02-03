import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/app/components/ui/avatar';
import { Separator } from '@/app/components/ui/separator';
import {
  ArrowLeft,
  Clock,
  Star,
  MapPin,
  CheckCircle2,
  MessageCircle,
  Calendar,
} from 'lucide-react';
import { mockSkills } from '@/data/mockData';
import { motion } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface SkillDetailProps {
  skillId: string;
  onNavigate: (page: string, id?: string) => void;
}

export function SkillDetail({ skillId, onNavigate }: SkillDetailProps) {
  const skill = mockSkills.find((s) => s.id === skillId);

  if (!skill) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Skill not found</h2>
          <Button onClick={() => onNavigate('browse')}>Back to Browse</Button>
        </div>
      </div>
    );
  }

  const curriculum = [
    'Introduction and fundamentals',
    'Core concepts and techniques',
    'Hands-on practice sessions',
    'Advanced tips and tricks',
    'Final project and review',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <Button variant="ghost" onClick={() => onNavigate('browse')} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Browse
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative h-96 rounded-2xl overflow-hidden"
            >
              <ImageWithFallback
                src={skill.image}
                alt={skill.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-white text-gray-900 text-sm px-3 py-1">
                  {skill.category}
                </Badge>
              </div>
            </motion.div>

            {/* Title and Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold mb-2">{skill.title}</h1>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{skill.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Badge variant="outline">{skill.level}</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">{skill.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {skill.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* What You'll Learn */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
                <div className="space-y-3">
                  {curriculum.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Teacher Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4">About the Teacher</h2>
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16 border-2 border-purple-200">
                    <AvatarImage src={skill.teacher.avatar} />
                    <AvatarFallback>{skill.teacher.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{skill.teacher.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{skill.teacher.rating} rating</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{skill.teacher.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3">{skill.teacher.bio}</p>
                    <div className="text-sm text-gray-600">
                      {skill.teacher.swapsCompleted} successful skill swaps completed
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="sticky top-24 space-y-4"
            >
              <Card className="p-6">
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Skills in Exchange</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    The teacher is looking to learn:
                  </p>
                  <div className="space-y-2">
                    {skill.skillsWanted.map((wanted, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-2 bg-purple-50 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        <span className="text-sm font-medium">{wanted}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="space-y-3">
                  <Button
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                    size="lg"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Propose a Swap
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule Call
                  </Button>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-900">
                    💡 <span className="font-medium">Tip:</span> Have one of the skills they're
                    looking for? You're a perfect match!
                  </p>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-3">Share this skill</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Know someone who might be interested?
                </p>
                <Button variant="outline" className="w-full">
                  Share with Friends
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
