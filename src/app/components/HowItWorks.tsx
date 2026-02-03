import { CheckCircle, Users, Clock, Repeat, Search, MessageCircle, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '@/app/components/ui/button';

interface HowItWorksProps {
  onNavigate: (page: string) => void;
}

export function HowItWorks({ onNavigate }: HowItWorksProps) {
  const steps = [
    {
      icon: Users,
      title: 'Create Your Profile',
      description: 'Sign up and tell us about the skills you have and the skills you want to learn.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Search,
      title: 'Browse & Search',
      description: 'Explore skills offered by others in your area or online. Filter by category, level, and location.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: MessageCircle,
      title: 'Connect & Propose',
      description: 'Found a skill you want to learn? Propose a swap! Discuss your teaching and learning schedule.',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: Repeat,
      title: 'Exchange Skills',
      description: 'Meet up in person or online. Teach your skill and learn theirs. Exchange value, not money.',
      color: 'from-violet-500 to-violet-600',
    },
    {
      icon: Award,
      title: 'Leave Reviews',
      description: 'After the swap, leave a review to build your reputation and help others in the community.',
      color: 'from-purple-500 to-pink-600',
    },
  ];

  const benefits = [
    {
      title: 'Zero Cost',
      description: 'No course fees, no subscription. Just pure skill exchange.',
      icon: '💰',
    },
    {
      title: 'Build Community',
      description: 'Connect with like-minded learners and teachers in your area.',
      icon: '🤝',
    },
    {
      title: 'Learn Anything',
      description: 'From cooking to coding, music to marketing. The possibilities are endless.',
      icon: '🎓',
    },
    {
      title: 'Teach & Learn',
      description: 'Everyone has something to teach. Share your expertise while learning new skills.',
      icon: '✨',
    },
  ];

  const faqs = [
    {
      q: 'Do I need to be an expert to teach?',
      a: "No! You just need to know more than someone else wants to learn. Teaching beginners is valuable even if you're intermediate.",
    },
    {
      q: 'How long do skill swaps usually take?',
      a: 'It varies! Some skills can be taught in a single session, while others might need weekly meetings over several weeks.',
    },
    {
      q: 'Can I swap skills online or does it have to be in person?',
      a: 'Both! Many skills work great over video call. You choose what works best for you.',
    },
    {
      q: 'What if I don\'t have a skill to offer?',
      a: 'Everyone has something valuable! Cooking, organizing, language skills, tech support - think about what comes naturally to you.',
    },
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
              How SkillSwap Works
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Exchange skills, build community, learn together. It's that simple.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-8`}
              >
                <div className="flex-1 flex justify-center">
                  <div
                    className={`w-24 h-24 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl`}
                  >
                    <step.icon className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-block px-4 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4">
                    Step {index + 1}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-lg">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why SkillSwap?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl hover:bg-purple-50 transition"
              >
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-lg font-bold mb-2 flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                  {faq.q}
                </h3>
                <p className="text-gray-600 ml-7">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Start Swapping?</h2>
            <p className="text-xl mb-8 text-white/90">
              Join thousands of learners exchanging skills every day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => onNavigate('browse')}
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100"
              >
                Browse Skills
              </Button>
              <Button
                onClick={() => onNavigate('home')}
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
