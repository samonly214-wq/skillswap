import { useState } from 'react';
import { Header } from '@/app/components/Header';
import { LandingPage } from '@/app/components/LandingPage';
import { BrowseSkills } from '@/app/components/BrowseSkills';
import { SkillDetail } from '@/app/components/SkillDetail';
import { MySkills } from '@/app/components/MySkills';
import { UserProfile } from '@/app/components/UserProfile';
import { HowItWorks } from '@/app/components/HowItWorks';
import { SuccessStories } from '@/app/components/SuccessStories';
import { HelpCenter } from '@/app/components/HelpCenter';
import { SafetyGuidelines } from '@/app/components/SafetyGuidelines';
import { ContactUs } from '@/app/components/ContactUs';
import { TermsOfService } from '@/app/components/TermsOfService';
import { PrivacyPolicy } from '@/app/components/PrivacyPolicy';
import { CookiePolicy } from '@/app/components/CookiePolicy';
import { AuthProvider } from '@/app/contexts/AuthContext';

type Page = 
  | 'home' 
  | 'browse' 
  | 'skill-detail' 
  | 'my-skills' 
  | 'profile'
  | 'how-it-works'
  | 'success-stories'
  | 'help'
  | 'safety'
  | 'contact'
  | 'terms'
  | 'privacy'
  | 'cookies';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedSkillId, setSelectedSkillId] = useState<string>('');

  const handleNavigate = (page: string, skillId?: string) => {
    setCurrentPage(page as Page);
    if (skillId) {
      setSelectedSkillId(skillId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AuthProvider>
      <div className="min-h-screen bg-white">
        <Header currentPage={currentPage} onNavigate={handleNavigate} />

        {currentPage === 'home' && <LandingPage onNavigate={handleNavigate} />}
        {currentPage === 'browse' && <BrowseSkills onNavigate={handleNavigate} />}
        {currentPage === 'skill-detail' && (
          <SkillDetail skillId={selectedSkillId} onNavigate={handleNavigate} />
        )}
        {currentPage === 'my-skills' && <MySkills />}
        {currentPage === 'profile' && <UserProfile />}
        {currentPage === 'how-it-works' && <HowItWorks onNavigate={handleNavigate} />}
        {currentPage === 'success-stories' && <SuccessStories onNavigate={handleNavigate} />}
        {currentPage === 'help' && <HelpCenter onNavigate={handleNavigate} />}
        {currentPage === 'safety' && <SafetyGuidelines onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactUs onNavigate={handleNavigate} />}
        {currentPage === 'terms' && <TermsOfService onNavigate={handleNavigate} />}
        {currentPage === 'privacy' && <PrivacyPolicy onNavigate={handleNavigate} />}
        {currentPage === 'cookies' && <CookiePolicy onNavigate={handleNavigate} />}

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-lg mb-4">SkillSwap</h3>
                <p className="text-gray-400 text-sm">
                  Exchange skills, build community, learn together.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Platform</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <button 
                      onClick={() => handleNavigate('browse')}
                      className="hover:text-white transition-colors"
                    >
                      Browse Skills
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => handleNavigate('how-it-works')}
                      className="hover:text-white transition-colors"
                    >
                      How It Works
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => handleNavigate('success-stories')}
                      className="hover:text-white transition-colors"
                    >
                      Success Stories
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <button 
                      onClick={() => handleNavigate('help')}
                      className="hover:text-white transition-colors"
                    >
                      Help Center
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => handleNavigate('safety')}
                      className="hover:text-white transition-colors"
                    >
                      Safety Guidelines
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => handleNavigate('contact')}
                      className="hover:text-white transition-colors"
                    >
                      Contact Us
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>
                    <button 
                      onClick={() => handleNavigate('terms')}
                      className="hover:text-white transition-colors"
                    >
                      Terms of Service
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => handleNavigate('privacy')}
                      className="hover:text-white transition-colors"
                    >
                      Privacy Policy
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => handleNavigate('cookies')}
                      className="hover:text-white transition-colors"
                    >
                      Cookie Policy
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
              <p>© 2025 SkillSwap. All rights reserved. Made with ❤️ for the learning community.</p>
            </div>
          </div>
        </footer>
      </div>
    </AuthProvider>
  );
}