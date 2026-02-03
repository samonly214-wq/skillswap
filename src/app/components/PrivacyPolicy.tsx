import { motion } from 'motion/react';
import { Shield, Eye, Lock, Database, UserCheck, Globe, Mail } from 'lucide-react';

interface PrivacyPolicyProps {
  onNavigate: (page: string) => void;
}

export function PrivacyPolicy({ onNavigate }: PrivacyPolicyProps) {
  const sections = [
    {
      icon: Database,
      title: '1. Information We Collect',
      content: [
        {
          subtitle: 'Information You Provide',
          points: [
            'Account information (name, email, location, password)',
            'Profile information (bio, skills, interests, profile photo)',
            'Communications with other users through the platform',
            'Reviews and ratings you provide',
            'Support inquiries and correspondence',
          ],
        },
        {
          subtitle: 'Information Collected Automatically',
          points: [
            'Device information (IP address, browser type, operating system)',
            'Usage data (pages visited, features used, time spent)',
            'Cookies and similar tracking technologies',
            'Location data (with your permission)',
          ],
        },
      ],
    },
    {
      icon: Eye,
      title: '2. How We Use Your Information',
      content: [
        {
          subtitle: 'We use your information to:',
          points: [
            'Provide, maintain, and improve our Service',
            'Facilitate skill exchanges between users',
            'Communicate with you about your account and the Service',
            'Send you updates, newsletters, and promotional materials (with consent)',
            'Respond to your inquiries and provide customer support',
            'Detect, prevent, and address technical issues and security threats',
            'Analyze usage patterns to improve user experience',
            'Comply with legal obligations',
          ],
        },
      ],
    },
    {
      icon: Globe,
      title: '3. How We Share Your Information',
      content: [
        {
          subtitle: 'We may share your information with:',
          points: [
            'Other users (your public profile, skills offered, reviews)',
            'Service providers who assist in operating our platform',
            'Analytics partners to understand usage patterns',
            'Law enforcement when required by law or to protect rights and safety',
            'Business partners in the event of a merger, acquisition, or sale',
          ],
        },
        {
          subtitle: 'We do NOT:',
          points: [
            'Sell your personal information to third parties',
            'Share your private messages without your consent',
            'Use your information for purposes incompatible with this policy',
          ],
        },
      ],
    },
    {
      icon: Lock,
      title: '4. Data Security',
      content: [
        {
          subtitle: 'We implement security measures including:',
          points: [
            'Encryption of data in transit and at rest',
            'Regular security audits and vulnerability assessments',
            'Access controls and authentication protocols',
            'Secure backup and disaster recovery procedures',
            'Employee training on data protection',
          ],
        },
        {
          subtitle: 'However, please note:',
          points: [
            'No method of transmission over the internet is 100% secure',
            'You are responsible for maintaining the security of your account',
            'Report any security concerns immediately',
          ],
        },
      ],
    },
    {
      icon: UserCheck,
      title: '5. Your Rights and Choices',
      content: [
        {
          subtitle: 'You have the right to:',
          points: [
            'Access your personal information',
            'Correct inaccurate information',
            'Request deletion of your data (subject to legal obligations)',
            'Object to processing of your information',
            'Export your data in a portable format',
            'Opt out of marketing communications',
            'Disable cookies through browser settings',
          ],
        },
      ],
    },
    {
      icon: Database,
      title: '6. Data Retention',
      content: [
        {
          subtitle: '',
          points: [
            'We retain your information as long as your account is active',
            'After account deletion, we retain certain data for legal and business purposes',
            'Aggregated, anonymized data may be retained indefinitely',
            'You can request deletion of specific data by contacting us',
          ],
        },
      ],
    },
    {
      icon: Globe,
      title: '7. International Data Transfers',
      content: [
        {
          subtitle: '',
          points: [
            'SkillSwap operates globally, and your data may be transferred to countries outside your own',
            'We ensure appropriate safeguards are in place when transferring data internationally',
            'By using our Service, you consent to the transfer of your information',
          ],
        },
      ],
    },
    {
      icon: UserCheck,
      title: '8. Children\'s Privacy',
      content: [
        {
          subtitle: '',
          points: [
            'SkillSwap is not intended for users under 18 years of age',
            'We do not knowingly collect information from children',
            'If we learn we have collected information from a child, we will delete it',
            'Parents or guardians should contact us if they believe a child has provided information',
          ],
        },
      ],
    },
  ];

  const principles = [
    {
      icon: Lock,
      title: 'Privacy by Design',
      description: 'Privacy is built into everything we do',
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'Clear about what data we collect and why',
    },
    {
      icon: UserCheck,
      title: 'User Control',
      description: 'You control your data and privacy settings',
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Industry-leading security measures',
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-white/90 mb-4">
              Your privacy is important to us
            </p>
            <p className="text-white/80">Last Updated: February 3, 2026</p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Our Privacy Principles</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <principle.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-bold mb-2">{principle.title}</h3>
                <p className="text-gray-600 text-sm">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
          >
            <div className="mb-8">
              <p className="text-lg text-gray-700">
                This Privacy Policy describes how SkillSwap ("we," "us," or "our") collects,
                uses, and shares your personal information when you use our Service.
              </p>
            </div>

            <div className="space-y-12">
              {sections.map((section, index) => (
                <div key={index} className="border-b border-gray-200 pb-8 last:border-0">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <section.icon className="w-5 h-5 text-purple-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                  </div>

                  <div className="space-y-6 ml-13">
                    {section.content.map((block, blockIndex) => (
                      <div key={blockIndex}>
                        {block.subtitle && (
                          <h3 className="font-semibold text-lg mb-3 text-gray-800">
                            {block.subtitle}
                          </h3>
                        )}
                        <ul className="space-y-2">
                          {block.points.map((point, pointIndex) => (
                            <li
                              key={pointIndex}
                              className="flex items-start gap-2 text-gray-700"
                            >
                              <span className="text-purple-600 mt-1">•</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <div className="mt-12 p-6 bg-purple-50 rounded-xl">
              <div className="flex items-start gap-3">
                <Mail className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Questions About Privacy?</h3>
                  <p className="text-gray-700 mb-2">
                    If you have questions or concerns about this Privacy Policy or our data
                    practices, please contact us:
                  </p>
                  <div className="space-y-1 text-gray-700">
                    <p>Email: privacy@skillswap.com</p>
                    <p>Address: 123 Market Street, San Francisco, CA 94103</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Related Links */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Related Documents:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => onNavigate('terms')}
                className="text-purple-600 hover:text-purple-700 font-semibold underline"
              >
                Terms of Service
              </button>
              <button
                onClick={() => onNavigate('cookies')}
                className="text-purple-600 hover:text-purple-700 font-semibold underline"
              >
                Cookie Policy
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="text-purple-600 hover:text-purple-700 font-semibold underline"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
