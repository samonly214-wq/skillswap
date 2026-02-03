import { motion } from 'motion/react';
import { Cookie, Settings, Eye, Shield, CheckCircle, X } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface CookiePolicyProps {
  onNavigate: (page: string) => void;
}

export function CookiePolicy({ onNavigate }: CookiePolicyProps) {
  const cookieTypes = [
    {
      icon: Shield,
      title: 'Essential Cookies',
      description: 'Required for the website to function properly',
      examples: [
        'Authentication tokens',
        'Session management',
        'Security features',
        'Load balancing',
      ],
      required: true,
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Settings,
      title: 'Functional Cookies',
      description: 'Remember your preferences and settings',
      examples: [
        'Language preferences',
        'Display settings',
        'Search filters',
        'User preferences',
      ],
      required: false,
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Eye,
      title: 'Analytics Cookies',
      description: 'Help us understand how you use our website',
      examples: [
        'Page views and visits',
        'User behavior patterns',
        'Feature usage statistics',
        'Performance metrics',
      ],
      required: false,
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Cookie,
      title: 'Marketing Cookies',
      description: 'Deliver relevant advertisements and content',
      examples: [
        'Ad targeting',
        'Campaign tracking',
        'Social media integration',
        'Retargeting pixels',
      ],
      required: false,
      color: 'from-pink-500 to-pink-600',
    },
  ];

  const thirdPartyServices = [
    {
      name: 'Google Analytics',
      purpose: 'Website analytics and insights',
      cookiesUsed: '_ga, _gid, _gat',
      link: 'https://policies.google.com/privacy',
    },
    {
      name: 'Supabase',
      purpose: 'Authentication and database services',
      cookiesUsed: 'sb-access-token, sb-refresh-token',
      link: 'https://supabase.com/privacy',
    },
    {
      name: 'Cloudflare',
      purpose: 'Content delivery and security',
      cookiesUsed: '__cfduid',
      link: 'https://www.cloudflare.com/privacypolicy',
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
            <Cookie className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookie Policy</h1>
            <p className="text-xl text-white/90 mb-4">
              How we use cookies to improve your experience
            </p>
            <p className="text-white/80">Last Updated: February 3, 2026</p>
          </motion.div>
        </div>
      </section>

      {/* What Are Cookies */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-3xl font-bold mb-6">What Are Cookies?</h2>
            <div className="prose max-w-none text-gray-700 space-y-4">
              <p>
                Cookies are small text files that are stored on your device (computer,
                tablet, or mobile) when you visit a website. They help websites remember
                information about your visit, making it easier to visit again and making
                the site more useful to you.
              </p>
              <p>
                We use cookies and similar tracking technologies to track activity on our
                Service and hold certain information. These technologies help us improve
                your user experience and understand how you interact with our platform.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Types of Cookies */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Types of Cookies We Use</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {cookieTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${type.color} rounded-lg flex items-center justify-center`}
                  >
                    <type.icon className="w-6 h-6 text-white" />
                  </div>
                  {type.required ? (
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                      Required
                    </span>
                  ) : (
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
                      Optional
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Examples:</p>
                  <ul className="space-y-1">
                    {type.examples.map((example, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Third-Party Services */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Third-Party Cookies
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <p className="text-gray-700 mb-6">
                We use services from third-party companies that may set their own cookies
                on your device. These services help us operate and improve our platform.
              </p>
              <div className="space-y-4">
                {thirdPartyServices.map((service, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-lg">{service.name}</h3>
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-700 text-sm underline"
                      >
                        Privacy Policy →
                      </a>
                    </div>
                    <p className="text-gray-600 mb-2">{service.purpose}</p>
                    <p className="text-sm text-gray-500">
                      Cookies: <code className="bg-gray-100 px-2 py-1 rounded">{service.cookiesUsed}</code>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Managing Cookies */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Managing Your Cookie Preferences
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-purple-50 rounded-xl p-6"
            >
              <Settings className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="font-bold text-xl mb-3">Browser Settings</h3>
              <p className="text-gray-700 mb-4">
                Most web browsers allow you to control cookies through their settings.
                You can typically:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  View which cookies are stored
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  Delete cookies individually or all at once
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  Block cookies from specific sites
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  Block all third-party cookies
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-blue-50 rounded-xl p-6"
            >
              <X className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-bold text-xl mb-3">Impact of Blocking</h3>
              <p className="text-gray-700 mb-4">
                Please note that blocking cookies may impact your experience:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">⚠️</span>
                  You may need to log in repeatedly
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">⚠️</span>
                  Your preferences won't be saved
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">⚠️</span>
                  Some features may not work correctly
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">⚠️</span>
                  Essential cookies are required for the site to function
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Browser Instructions */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Browser-Specific Instructions
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <div className="space-y-4">
              <div className="border-l-4 border-purple-600 pl-4">
                <h3 className="font-bold mb-1">Google Chrome</h3>
                <p className="text-gray-600 text-sm">
                  Settings → Privacy and security → Cookies and other site data
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-bold mb-1">Mozilla Firefox</h3>
                <p className="text-gray-600 text-sm">
                  Options → Privacy & Security → Cookies and Site Data
                </p>
              </div>
              <div className="border-l-4 border-gray-600 pl-4">
                <h3 className="font-bold mb-1">Safari</h3>
                <p className="text-gray-600 text-sm">
                  Preferences → Privacy → Manage Website Data
                </p>
              </div>
              <div className="border-l-4 border-cyan-600 pl-4">
                <h3 className="font-bold mb-1">Microsoft Edge</h3>
                <p className="text-gray-600 text-sm">
                  Settings → Cookies and site permissions → Manage cookies
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Questions About Cookies?</h2>
            <p className="text-xl mb-8 text-white/90">
              Contact us if you have any questions about our use of cookies.
            </p>
            <Button
              onClick={() => onNavigate('contact')}
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100"
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-gray-600 mb-4">Related Documents:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onNavigate('privacy')}
              className="text-purple-600 hover:text-purple-700 font-semibold underline"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onNavigate('terms')}
              className="text-purple-600 hover:text-purple-700 font-semibold underline"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
