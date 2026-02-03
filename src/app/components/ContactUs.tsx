import { motion } from 'motion/react';
import { Mail, MessageCircle, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/app/components/ui/button';

interface ContactUsProps {
  onNavigate: (page: string) => void;
}

export function ContactUs({ onNavigate }: ContactUsProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to an API
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      value: 'support@skillswap.com',
      description: 'Get a response within 24 hours',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      value: 'Available 24/7',
      description: 'Instant help from our support team',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Phone,
      title: 'Phone Support',
      value: '+1 (555) 123-4567',
      description: 'Mon-Fri, 9AM-6PM PST',
      color: 'from-green-500 to-green-600',
    },
  ];

  const offices = [
    {
      city: 'San Francisco',
      address: '123 Market Street',
      postal: 'San Francisco, CA 94103',
      country: 'United States',
    },
    {
      city: 'New York',
      address: '456 Broadway',
      postal: 'New York, NY 10013',
      country: 'United States',
    },
    {
      city: 'London',
      address: '789 Oxford Street',
      postal: 'London W1D 2HG',
      country: 'United Kingdom',
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
            <MessageCircle className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-white/90">
              We're here to help! Reach out with any questions, concerns, or feedback.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                <p className="text-purple-600 font-semibold mb-2">{method.value}</p>
                <p className="text-gray-600 text-sm">{method.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h2 className="text-2xl font-bold mb-6 text-center">Send Us a Message</h2>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-green-600 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600">
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select a subject...</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="safety">Safety Concern</option>
                      <option value="feedback">Feedback</option>
                      <option value="partnership">Partnership</option>
                      <option value="press">Press Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                      placeholder="Tell us how we can help..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Our Offices</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6"
              >
                <MapPin className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">{office.city}</h3>
                <p className="text-gray-700">{office.address}</p>
                <p className="text-gray-700">{office.postal}</p>
                <p className="text-gray-600 mt-2">{office.country}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Clock className="w-8 h-8 text-purple-600" />
              <h2 className="text-2xl font-bold">Support Hours</h2>
            </div>
            <div className="space-y-3 text-center">
              <div className="flex justify-between max-w-md mx-auto">
                <span className="text-gray-600">Monday - Friday</span>
                <span className="font-semibold">9:00 AM - 6:00 PM PST</span>
              </div>
              <div className="flex justify-between max-w-md mx-auto">
                <span className="text-gray-600">Saturday</span>
                <span className="font-semibold">10:00 AM - 4:00 PM PST</span>
              </div>
              <div className="flex justify-between max-w-md mx-auto">
                <span className="text-gray-600">Sunday</span>
                <span className="font-semibold">Closed</span>
              </div>
              <div className="pt-4 border-t mt-4">
                <p className="text-purple-600 font-semibold">
                  🌐 Email support available 24/7
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Looking for Something Else?</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Button
              onClick={() => onNavigate('help')}
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100"
            >
              Help Center
            </Button>
            <Button
              onClick={() => onNavigate('safety')}
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100"
            >
              Safety Guidelines
            </Button>
            <Button
              onClick={() => onNavigate('browse')}
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100"
            >
              Browse Skills
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
