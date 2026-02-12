import { Logo } from '@/app/components/Logo';
import { Button } from '@/app/components/ui/button';
import { Search, User, Menu, LogOut, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useAuth } from '@/app/contexts/AuthContext';
import { useState } from 'react';
import { AuthModal } from '@/app/components/AuthModal';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const { user, signOut } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'browse', label: 'Browse Skills' },
    { id: 'my-skills', label: 'My Skills' },
  ];

  const handleSignOut = async () => {
    try {
      await signOut();
      onNavigate('home');
      setMobileMenuOpen(false);
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  const handleAuthClick = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setShowAuthModal(true);
    setMobileMenuOpen(false);
  };

  const handleNavigation = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-lg shadow-sm"
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <button
              onClick={() => handleNavigation('home')}
              className="cursor-pointer hover:opacity-80 transition-opacity"
              aria-label="Go to home"
            >
              <Logo size="md" />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`text-sm font-semibold transition-all hover:text-purple-600 relative group ${
                    currentPage === item.id ? 'text-purple-600' : 'text-gray-700'
                  }`}
                  aria-current={currentPage === item.id ? 'page' : undefined}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-2 left-0 h-0.5 bg-purple-600 transition-all ${
                      currentPage === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </button>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleNavigation('browse')}
                className="hover:bg-purple-50 hover:text-purple-600"
                aria-label="Search skills"
              >
                <Search className="h-5 w-5" />
              </Button>

              {user ? (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleNavigation('profile')}
                    className="hover:bg-purple-50 hover:text-purple-600"
                    aria-label="View profile"
                  >
                    <User className="h-5 w-5" />
                  </Button>
                  <Button
                    onClick={() => handleNavigation('my-skills')}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-md hover:shadow-lg transition-all"
                  >
                    Post a Skill
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleSignOut}
                    title="Sign Out"
                    className="hover:bg-red-50 hover:text-red-600"
                  >
                    <LogOut className="h-5 w-5" />
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="ghost"
                    onClick={() => handleAuthClick('login')}
                    className="hover:bg-purple-50 hover:text-purple-600"
                  >
                    Sign In
                  </Button>
                  <Button
                    onClick={() => handleAuthClick('signup')}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-md hover:shadow-lg transition-all"
                  >
                    Get Started
                  </Button>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t bg-white"
            >
              <div className="container mx-auto px-4 py-4 space-y-3">
                {/* Mobile Navigation Links */}
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                      currentPage === item.id
                        ? 'bg-purple-50 text-purple-600 font-semibold'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}

                {/* Mobile Actions */}
                <div className="pt-3 border-t space-y-2">
                  {user ? (
                    <>
                      <Button
                        onClick={() => handleNavigation('profile')}
                        variant="outline"
                        className="w-full justify-start"
                      >
                        <User className="h-5 w-5 mr-2" />
                        My Profile
                      </Button>
                      <Button
                        onClick={() => handleNavigation('my-skills')}
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                      >
                        Post a Skill
                      </Button>
                      <Button
                        onClick={handleSignOut}
                        variant="outline"
                        className="w-full justify-start text-red-600 hover:bg-red-50"
                      >
                        <LogOut className="h-5 w-5 mr-2" />
                        Sign Out
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button
                        onClick={() => handleAuthClick('login')}
                        variant="outline"
                        className="w-full"
                      >
                        Sign In
                      </Button>
                      <Button
                        onClick={() => handleAuthClick('signup')}
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                      >
                        Get Started
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        initialMode={authMode}
      />
    </>
  );
}