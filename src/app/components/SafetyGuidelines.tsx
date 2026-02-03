import { motion } from 'motion/react';
import {
  Shield,
  CheckCircle,
  AlertTriangle,
  Lock,
  Eye,
  UserCheck,
  MapPin,
  Video,
  MessageSquare,
  Flag,
  Heart,
  Info,
} from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface SafetyGuidelinesProps {
  onNavigate: (page: string) => void;
}

export function SafetyGuidelines({ onNavigate }: SafetyGuidelinesProps) {
  const guidelines = [
    {
      icon: UserCheck,
      title: 'Verify Identities',
      description:
        'Always review profiles thoroughly. Check reviews, ratings, and completed swaps before committing.',
      tips: [
        'Look for verified badges',
        'Read previous reviews',
        'Check member since date',
        'Review completed swap count',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: MapPin,
      title: 'Meet Safely',
      description:
        'Choose public locations for in-person meetings, especially for first sessions.',
      tips: [
        'Meet in coffee shops, libraries, or public spaces',
        'Avoid meeting in private homes initially',
        'Tell a friend or family member where you\'ll be',
        'Trust your instincts',
      ],
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Video,
      title: 'Start with Video Calls',
      description:
        'For initial meetings, consider video calls to build trust before meeting in person.',
      tips: [
        'Use video chat for first session',
        'Assess communication style',
        'Confirm expectations',
        'Establish comfort level',
      ],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Lock,
      title: 'Protect Personal Info',
      description:
        'Be cautious about sharing sensitive personal information until trust is established.',
      tips: [
        'Don\'t share home address immediately',
        'Use SkillSwap messaging initially',
        'Avoid sharing financial details',
        'Be mindful of social media',
      ],
      color: 'from-red-500 to-red-600',
    },
    {
      icon: MessageSquare,
      title: 'Clear Communication',
      description:
        'Set clear expectations about schedule, location, and scope of the skill exchange.',
      tips: [
        'Discuss time commitments',
        'Clarify skill levels',
        'Agree on meeting locations',
        'Set boundaries early',
      ],
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: Flag,
      title: 'Report Issues',
      description:
        'If you experience anything concerning, report it immediately to our support team.',
      tips: [
        'Report inappropriate behavior',
        'Flag suspicious profiles',
        'Document concerning interactions',
        'Contact support 24/7',
      ],
      color: 'from-orange-500 to-orange-600',
    },
  ];

  const redFlags = [
    {
      icon: AlertTriangle,
      title: 'Requests for Money',
      description: 'SkillSwap is about skill exchange, not money. Be wary of anyone asking for payment.',
    },
    {
      icon: AlertTriangle,
      title: 'Pressure to Meet Quickly',
      description: 'Take your time. Legitimate members understand the need to build trust first.',
    },
    {
      icon: AlertTriangle,
      title: 'Avoiding Platform Communication',
      description: 'Be cautious of users who immediately want to move off-platform.',
    },
    {
      icon: AlertTriangle,
      title: 'Too Good to Be True',
      description: 'Unrealistic promises or overly enthusiastic responses may be warning signs.',
    },
  ];

  const bestPractices = [
    {
      icon: CheckCircle,
      text: 'Start with short sessions to test compatibility',
    },
    {
      icon: CheckCircle,
      text: 'Keep detailed records of your swaps',
    },
    {
      icon: CheckCircle,
      text: 'Leave honest reviews after each swap',
    },
    {
      icon: CheckCircle,
      text: 'Respect time commitments and cancellation policies',
    },
    {
      icon: CheckCircle,
      text: 'Communicate openly about any issues',
    },
    {
      icon: CheckCircle,
      text: 'Honor your agreements and teach with integrity',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Safety Guidelines</h1>
            <p className="text-xl text-white/90">
              Your safety is our top priority. Follow these guidelines for a secure and
              positive skill exchange experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Guidelines */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-12">
            {guidelines.map((guideline, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="md:flex">
                  <div
                    className={`md:w-1/3 bg-gradient-to-br ${guideline.color} p-8 flex items-center justify-center`}
                  >
                    <guideline.icon className="w-24 h-24 text-white" />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <h3 className="text-2xl font-bold mb-3">{guideline.title}</h3>
                    <p className="text-gray-600 mb-6">{guideline.description}</p>
                    <div className="space-y-2">
                      {guideline.tips.map((tip, tipIndex) => (
                        <div key={tipIndex} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Red Flags */}
      <section className="py-16 px-4 bg-red-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-red-600" />
            <h2 className="text-3xl font-bold mb-4">Watch Out For Red Flags</h2>
            <p className="text-gray-600">
              Be aware of these warning signs and report them immediately
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {redFlags.map((flag, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md border-l-4 border-red-500"
              >
                <div className="flex items-start gap-4">
                  <flag.icon className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">{flag.title}</h3>
                    <p className="text-gray-600">{flag.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Best Practices</h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="space-y-4">
              {bestPractices.map((practice, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-purple-50 transition"
                >
                  <practice.icon className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{practice.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Safety Features */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Safety Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserCheck className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-xl mb-2">Identity Verification</h3>
              <p className="text-gray-600">
                Optional verification badges for added trust and authenticity
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-xl mb-2">Profile Monitoring</h3>
              <p className="text-gray-600">
                AI-powered system monitors for suspicious activity 24/7
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-xl mb-2">24/7 Support</h3>
              <p className="text-gray-600">
                Our safety team is always available to help with any concerns
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <AlertTriangle className="w-12 h-12 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Report a Safety Concern</h2>
            <p className="text-xl mb-8 text-white/90">
              If you experience or witness anything that makes you uncomfortable, report it
              immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => onNavigate('contact')}
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100"
              >
                Report Now
              </Button>
              <Button
                onClick={() => onNavigate('help')}
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Get Help
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Values */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Heart className="w-12 h-12 mx-auto mb-6 text-purple-600" />
          <h2 className="text-3xl font-bold mb-6">Our Community Values</h2>
          <p className="text-lg text-gray-600 mb-8">
            SkillSwap is built on respect, trust, and mutual learning. Together, we create
            a safe and welcoming environment for everyone to share knowledge and grow.
          </p>
          <div className="bg-purple-50 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <div className="font-bold text-purple-600 mb-2">Respect</div>
                <p className="text-gray-600 text-sm">
                  Treat all members with kindness and professionalism
                </p>
              </div>
              <div>
                <div className="font-bold text-purple-600 mb-2">Integrity</div>
                <p className="text-gray-600 text-sm">
                  Honor your commitments and teach with honesty
                </p>
              </div>
              <div>
                <div className="font-bold text-purple-600 mb-2">Safety First</div>
                <p className="text-gray-600 text-sm">
                  Prioritize your safety and the safety of others
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
