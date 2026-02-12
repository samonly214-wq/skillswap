import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/app/components/ui/avatar';
import { Clock, Star, ArrowRight } from 'lucide-react';
import { Skill } from '@/data/mockData';
import { motion } from 'motion/react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

interface SkillCardProps {
  skill: Skill;
  onClick: () => void;
}

export function SkillCard({ skill, onClick }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className="cursor-pointer"
    >
      <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-shadow">
        <div className="relative h-48 overflow-hidden">
          <ImageWithFallback
            src={skill.image}
            alt={skill.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute top-3 right-3">
            <Badge className="bg-white/90 text-gray-900 hover:bg-white">
              {skill.level}
            </Badge>
          </div>
        </div>
        <div className="p-5">
          <div className="flex items-center gap-2 mb-3">
            <Avatar className="h-8 w-8 border-2 border-white shadow">
              <AvatarImage src={skill.teacher.avatar} />
              <AvatarFallback>{skill.teacher.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{skill.teacher.name}</p>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{skill.teacher.rating}</span>
            </div>
          </div>

          <h3 className="font-semibold text-lg mb-2 line-clamp-1">{skill.title}</h3>
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">{skill.description}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <Clock className="h-4 w-4" />
              <span>{skill.duration}</span>
            </div>
            <div className="flex items-center gap-1 text-purple-600 font-medium text-sm group">
              <span>View Details</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>

          <div className="mt-4 pt-4 border-t">
            <p className="text-xs text-gray-500 mb-2">Looking to learn:</p>
            <div className="flex flex-wrap gap-1">
              {skill.skillsWanted.slice(0, 2).map((wanted, idx) => (
                <Badge key={idx} variant="outline" className="text-xs">
                  {wanted}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
