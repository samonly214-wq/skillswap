import { motion } from 'motion/react';
import { FileText, CheckCircle } from 'lucide-react';

interface TermsOfServiceProps {
  onNavigate: (page: string) => void;
}

export function TermsOfService({ onNavigate }: TermsOfServiceProps) {
  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: [
        'By accessing and using SkillSwap ("the Service"), you accept and agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Service.',
        'We reserve the right to modify these Terms at any time. Your continued use of the Service after changes are posted constitutes acceptance of the modified Terms.',
      ],
    },
    {
      title: '2. Service Description',
      content: [
        'SkillSwap is a platform that facilitates skill exchange between users. The Service allows members to offer skills they possess in exchange for learning skills from other members.',
        'SkillSwap is a facilitator only. We do not provide the skills, teaching, or learning services ourselves. All exchanges are between individual users.',
      ],
    },
    {
      title: '3. User Accounts',
      content: [
        'You must be at least 18 years old to create an account and use the Service.',
        'You are responsible for maintaining the confidentiality of your account credentials.',
        'You agree to provide accurate, current, and complete information during registration.',
        'You are responsible for all activities that occur under your account.',
        'You must notify us immediately of any unauthorized use of your account.',
      ],
    },
    {
      title: '4. User Conduct',
      content: [
        'You agree to use the Service only for lawful purposes and in accordance with these Terms.',
        'You will not use the Service to transmit any unlawful, harassing, defamatory, abusive, threatening, harmful, vulgar, obscene, or otherwise objectionable material.',
        'You will not impersonate any person or entity or misrepresent your affiliation with any person or entity.',
        'You will not use the Service to solicit money or goods beyond legitimate skill exchange.',
        'You will honor your commitments to other users and conduct skill exchanges in good faith.',
      ],
    },
    {
      title: '5. Skill Exchanges',
      content: [
        'Skill exchanges are agreements between individual users. SkillSwap is not a party to these agreements.',
        'Users are solely responsible for determining the terms of their skill exchanges.',
        'SkillSwap does not guarantee the quality, safety, legality, or accuracy of skills offered or taught.',
        'Users exchange skills at their own risk. SkillSwap is not liable for any disputes, injuries, or damages arising from skill exchanges.',
      ],
    },
    {
      title: '6. Content and Intellectual Property',
      content: [
        'You retain ownership of content you post on the Service, but grant SkillSwap a non-exclusive, worldwide, royalty-free license to use, display, and distribute your content in connection with the Service.',
        'You represent that you have all necessary rights to the content you post.',
        'SkillSwap respects intellectual property rights. If you believe your work has been infringed, please contact us.',
        'The Service and its original content, features, and functionality are owned by SkillSwap and protected by international copyright, trademark, and other intellectual property laws.',
      ],
    },
    {
      title: '7. Privacy',
      content: [
        'Your use of the Service is also governed by our Privacy Policy, which is incorporated into these Terms by reference.',
        'We collect, use, and protect your personal information as described in the Privacy Policy.',
      ],
    },
    {
      title: '8. Termination',
      content: [
        'We reserve the right to suspend or terminate your account at any time, with or without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason.',
        'You may terminate your account at any time by contacting us.',
        'Upon termination, your right to use the Service will immediately cease.',
      ],
    },
    {
      title: '9. Disclaimers',
      content: [
        'THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.',
        'SKILLSWAP DOES NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.',
        'SKILLSWAP DOES NOT ENDORSE, WARRANT, OR GUARANTEE ANY SKILLS, SERVICES, OR PRODUCTS OFFERED THROUGH THE SERVICE.',
      ],
    },
    {
      title: '10. Limitation of Liability',
      content: [
        'TO THE FULLEST EXTENT PERMITTED BY LAW, SKILLSWAP SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE.',
        'IN NO EVENT SHALL SKILLSWAP\'S TOTAL LIABILITY EXCEED THE AMOUNT PAID BY YOU TO SKILLSWAP IN THE TWELVE MONTHS PRECEDING THE CLAIM.',
      ],
    },
    {
      title: '11. Indemnification',
      content: [
        'You agree to indemnify and hold harmless SkillSwap, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising out of your use of the Service, your violation of these Terms, or your violation of any rights of another party.',
      ],
    },
    {
      title: '12. Dispute Resolution',
      content: [
        'Any dispute arising out of or relating to these Terms or the Service shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.',
        'You agree to waive any right to a jury trial or to participate in a class action.',
      ],
    },
    {
      title: '13. Governing Law',
      content: [
        'These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.',
      ],
    },
    {
      title: '14. Contact Information',
      content: [
        'If you have any questions about these Terms, please contact us at:',
        'Email: legal@skillswap.com',
        'Address: 123 Market Street, San Francisco, CA 94103',
      ],
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
            <FileText className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-white/90">
              Last Updated: February 3, 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-12"
          >
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-8">
                Please read these Terms of Service carefully before using SkillSwap. These
                Terms govern your access to and use of our Service.
              </p>

              <div className="space-y-8">
                {sections.map((section, index) => (
                  <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                    <h2 className="text-2xl font-bold mb-4 text-gray-900">
                      {section.title}
                    </h2>
                    <div className="space-y-3">
                      {section.content.map((paragraph, pIndex) => (
                        <p key={pIndex} className="text-gray-700 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 bg-purple-50 rounded-xl">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Agreement</h3>
                    <p className="text-gray-700">
                      By using SkillSwap, you acknowledge that you have read, understood, and
                      agree to be bound by these Terms of Service.
                    </p>
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
                onClick={() => onNavigate('privacy')}
                className="text-purple-600 hover:text-purple-700 font-semibold underline"
              >
                Privacy Policy
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
