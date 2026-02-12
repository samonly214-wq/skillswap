import { useState } from 'react';
import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Input } from '@/app/components/ui/input';
import { Textarea } from '@/app/components/ui/textarea';
import { Label } from '@/app/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Plus, Edit2, Trash2, BookOpen, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';
import { categories } from '@/data/mockData';

export function MySkills() {
  const [showAddForm, setShowAddForm] = useState(false);
<<<<<<< HEAD
  const [showWishlistForm, setShowWishlistForm] = useState(false);
  const [offeredSkills, setOfferedSkills] = useState([
=======

  const myOfferedSkills = [
>>>>>>> 352704d7903ceb46c2cb0381f70cd25215c64f46
    {
      id: '1',
      title: 'Web Design Fundamentals',
      category: 'Programming',
      level: 'Intermediate',
      duration: '6 weeks',
      description: 'Teaching the basics of modern web design using Figma and HTML/CSS',
      lookingFor: ['Photography', 'Spanish Language'],
    },
<<<<<<< HEAD
  ]);

  const [wantedSkills, setWantedSkills] = useState([
    { id: '1', title: 'Photography Basics', category: 'Photography' },
    { id: '2', title: 'Spanish Conversation', category: 'Languages' },
    { id: '3', title: 'Guitar for Beginners', category: 'Music' },
  ]);

  const handleDeleteOfferedSkill = (skillId: string) => {
    if (confirm('Are you sure you want to delete this skill?')) {
      setOfferedSkills(offeredSkills.filter(s => s.id !== skillId));
    }
  };

  const handleEditOfferedSkill = (skillId: string) => {
    alert('Edit functionality will be connected to backend. Skill ID: ' + skillId);
  };

  const handleDeleteWantedSkill = (skillId: string) => {
    setWantedSkills(wantedSkills.filter(s => s.id !== skillId));
  };

  const handlePublishSkill = () => {
    alert('Skill publishing will be connected to backend API');
    setShowAddForm(false);
  };

  const handleAddToWishlist = () => {
    setShowWishlistForm(!showWishlistForm);
    if (!showWishlistForm) {
      alert('Add to wishlist functionality - will search and add skills');
    }
  };
=======
  ];

  const myWantedSkills = [
    { title: 'Photography Basics', category: 'Photography' },
    { title: 'Spanish Conversation', category: 'Languages' },
    { title: 'Guitar for Beginners', category: 'Music' },
  ];
>>>>>>> 352704d7903ceb46c2cb0381f70cd25215c64f46

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">My Skills</h1>
          <p className="text-gray-600">Manage the skills you're offering and want to learn</p>
        </motion.div>

        <Tabs defaultValue="offering" className="space-y-6">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="offering" className="gap-2">
              <GraduationCap className="h-4 w-4" />
              Skills I'm Offering
            </TabsTrigger>
            <TabsTrigger value="learning" className="gap-2">
              <BookOpen className="h-4 w-4" />
              Skills I Want
            </TabsTrigger>
          </TabsList>

          {/* Skills I'm Offering */}
          <TabsContent value="offering" className="space-y-6">
            {!showAddForm ? (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Button
                    onClick={() => setShowAddForm(true)}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Add New Skill
                  </Button>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
<<<<<<< HEAD
                  {offeredSkills.map((skill, index) => (
=======
                  {myOfferedSkills.map((skill, index) => (
>>>>>>> 352704d7903ceb46c2cb0381f70cd25215c64f46
                    <motion.div
                      key={skill.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-start justify-between mb-4">
                          <Badge>{skill.category}</Badge>
                          <div className="flex gap-2">
<<<<<<< HEAD
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => handleEditOfferedSkill(skill.id)}
                              title="Edit skill"
                            >
                              <Edit2 className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="text-red-600 hover:text-red-700"
                              onClick={() => handleDeleteOfferedSkill(skill.id)}
                              title="Delete skill"
                            >
=======
                            <Button variant="ghost" size="sm">
                              <Edit2 className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-red-600">
>>>>>>> 352704d7903ceb46c2cb0381f70cd25215c64f46
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{skill.description}</p>

                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                          <span>{skill.level}</span>
                          <span>•</span>
                          <span>{skill.duration}</span>
                        </div>

                        <div className="pt-4 border-t">
                          <p className="text-sm text-gray-600 mb-2">Looking to learn:</p>
                          <div className="flex flex-wrap gap-2">
                            {skill.lookingFor.map((item, idx) => (
                              <Badge key={idx} variant="outline">
                                {item}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600">Interested learners:</span>
                            <span className="font-semibold text-purple-600">12 people</span>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card className="p-6 max-w-2xl">
                  <h2 className="text-2xl font-bold mb-6">Add a New Skill</h2>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="title">Skill Title</Label>
                      <Input id="title" placeholder="e.g., Beginner Guitar Lessons" />
                    </div>

                    <div>
                      <Label htmlFor="category">Category</Label>
                      <Select>
                        <SelectTrigger id="category">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.slice(1).map((cat) => (
                            <SelectItem key={cat} value={cat.toLowerCase()}>
                              {cat}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="level">Level</Label>
                      <Select>
                        <SelectTrigger id="level">
                          <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner</SelectItem>
                          <SelectItem value="intermediate">Intermediate</SelectItem>
                          <SelectItem value="advanced">Advanced</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="duration">Duration</Label>
                      <Input id="duration" placeholder="e.g., 4 weeks, 10 sessions" />
                    </div>

                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe what you'll teach and what students will learn..."
                        rows={4}
                      />
                    </div>

                    <div>
                      <Label htmlFor="looking-for">Skills You're Looking For</Label>
                      <Input
                        id="looking-for"
                        placeholder="e.g., Photography, Spanish, Cooking"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Separate multiple skills with commas
                      </p>
                    </div>

                    <div className="flex gap-3 pt-4">
<<<<<<< HEAD
                      <Button 
                        onClick={handlePublishSkill}
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                      >
=======
                      <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
>>>>>>> 352704d7903ceb46c2cb0381f70cd25215c64f46
                        Publish Skill
                      </Button>
                      <Button variant="outline" onClick={() => setShowAddForm(false)}>
                        Cancel
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}
          </TabsContent>

          {/* Skills I Want to Learn */}
          <TabsContent value="learning" className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
<<<<<<< HEAD
              <Button 
                onClick={handleAddToWishlist}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
=======
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
>>>>>>> 352704d7903ceb46c2cb0381f70cd25215c64f46
                <Plus className="mr-2 h-4 w-4" />
                Add Skill to Wishlist
              </Button>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-4">
<<<<<<< HEAD
              {wantedSkills.map((skill, index) => (
                <motion.div
                  key={skill.id}
=======
              {myWantedSkills.map((skill, index) => (
                <motion.div
                  key={index}
>>>>>>> 352704d7903ceb46c2cb0381f70cd25215c64f46
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-4 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <Badge variant="outline">{skill.category}</Badge>
<<<<<<< HEAD
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-red-600 hover:text-red-700 -mt-2"
                        onClick={() => handleDeleteWantedSkill(skill.id)}
                        title="Remove from wishlist"
                      >
=======
                      <Button variant="ghost" size="sm" className="text-red-600 -mt-2">
>>>>>>> 352704d7903ceb46c2cb0381f70cd25215c64f46
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <h3 className="font-semibold mb-2">{skill.title}</h3>
<<<<<<< HEAD
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full mt-2"
                      onClick={() => alert('Searching for teachers with this skill...')}
                    >
=======
                    <Button variant="outline" size="sm" className="w-full mt-2">
>>>>>>> 352704d7903ceb46c2cb0381f70cd25215c64f46
                      Find Teachers
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>

            <Card className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
              <div className="flex items-start gap-4">
                <div className="text-4xl">💡</div>
                <div>
                  <h3 className="font-semibold mb-2">Get Matched Faster</h3>
                  <p className="text-sm text-gray-700 mb-3">
                    The more skills you offer, the easier it is to find matches! Teachers often
                    look for learners with specific skills to exchange.
                  </p>
<<<<<<< HEAD
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setShowAddForm(true)}
                  >
=======
                  <Button variant="outline" size="sm">
>>>>>>> 352704d7903ceb46c2cb0381f70cd25215c64f46
                    Add a Skill to Offer
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 352704d7903ceb46c2cb0381f70cd25215c64f46
