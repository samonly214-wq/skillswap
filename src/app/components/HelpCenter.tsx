import { motion } from 'motion/react';
import {
  Search,
  Book,
  MessageCircle,
  Shield,
  CreditCard,
  Users,
  Settings,
  HelpCircle,
  FileText,
  AlertCircle,
} from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/app/components/ui/button';

interface HelpCenterProps {
  onNavigate: (page: string) => void;
}

export function HelpCenter({ onNavigate }: HelpCenterProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      icon: Book,
      title: 'Getting Started',
      description: 'Learn the basics of using SkillSwap',
      articles: 12,
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Users,
      title: 'Managing Swaps',
      description: 'Tips for successful skill exchanges',
      articles: 8,
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Shield,
      title: 'Safety & Security',
      description: 'Stay safe while swapping skills',
      articles: 6,
      color: 'from-green-500 to-green-600',
    },
    {
      icon: CreditCard,
      title: 'Account & Billing',
      description: 'Manage your account settings',
      articles: 5,
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: MessageCircle,
      title: 'Communication',
      description: 'Connect with other members',
      articles: 7,
      color: 'from-violet-500 to-violet-600',
    },
    {
      icon: Settings,
      title: 'Troubleshooting',
      description: 'Fix common issues',
      articles: 10,
      color: 'from-pink-500 to-pink-600',
    },
  ];

  const popularArticles = [
    {
      title: 'How do I create my first skill listing?',
      category: 'Getting Started',
      views: '15.2K',
    },
    {
      title: 'What should I include in a swap proposal?',
      category: 'Managing Swaps',
      views: '12.8K',
    },
    {
      title: 'How to verify the identity of other users?',
      category: 'Safety & Security',
      views: '10.5K',
    },
    {
      title: 'Can I swap skills online or must it be in person?',
      category: 'Getting Started',
      views: '9.2K',
    },
    {
      title: 'How do reviews and ratings work?',
      category: 'Managing Swaps',
      views: '8.7K',
    },
    {
      title: 'What happens if a swap doesn\'t work out?',
      category: 'Safety & Security',
      views: '7.9K',
    },
  ];

  const quickAnswers = [
    {
      q: 'Is SkillSwap really free?',
      a: 'Yes! SkillSwap is completely free. No subscription fees, no course costs. Just pure skill exchange.',
    },
    {
      q: 'How long does it take to find a match?',
      a: 'Most users find their first match within 48 hours. Active profiles with clear descriptions match faster.',
    },
    {
      q: 'Can I swap with multiple people?',
      a: 'Absolutely! There\'s no limit. Many members maintain multiple ongoing swaps.',
    },
    {
      q: 'What if I\'m not satisfied with a swap?',
      a: 'Contact us immediately. We take all concerns seriously and will help mediate or find a resolution.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section with Search */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <HelpCircle className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">How Can We Help?</h1>
            <p className="text-xl mb-8 text-white/90">
              Search our knowledge base or browse categories below
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full text-gray-900 text-lg focus:ring-4 focus:ring-white/30 outline-none"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition cursor-pointer group"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition`}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="text-sm text-purple-600 font-semibold">
                  {category.articles} articles →
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Articles</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {popularArticles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-4 hover:bg-purple-50 transition cursor-pointer group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1 group-hover:text-purple-600 transition">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="text-purple-600">{article.category}</span>
                      <span>·</span>
                      <span>{article.views} views</span>
                    </div>
                  </div>
                  <FileText className="w-5 h-5 text-gray-400 flex-shrink-0" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Answers */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Quick Answers</h2>
          <div className="space-y-4">
            {quickAnswers.map((qa, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <h3 className="text-lg font-bold mb-3 flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                  {qa.q}
                </h3>
                <p className="text-gray-600 ml-7">{qa.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <MessageCircle className="w-12 h-12 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-xl mb-8 text-white/90">
              Our support team is here to help you with any questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => onNavigate('contact')}
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100"
              >
                Contact Support
              </Button>
              <Button
                onClick={() => onNavigate('safety')}
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Safety Guidelines
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
