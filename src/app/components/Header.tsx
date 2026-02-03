import { Logo } from '@/app/components/Logo';
import { Button } from '@/app/components/ui/button';
import { Search, User, Menu, LogOut } from 'lucide-react';
import { motion } from 'motion/react';
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

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'browse', label: 'Browse Skills' },
    { id: 'my-skills', label: 'My Skills' },
  ];

  const handleSignOut = async () => {
    try {
      await signOut();
      onNavigate('home');
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  const handleAuthClick = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-lg"
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <button onClick={() => onNavigate('home')} className="cursor-pointer">
              <Logo size="md" />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-purple-600 ${
                    currentPage === item.id ? 'text-purple-600' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onNavigate('browse')}
                className="hidden sm:flex"
              >
                <Search className="h-5 w-5" />
              </Button>

              {user ? (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onNavigate('profile')}
                  >
                    <User className="h-5 w-5" />
                  </Button>
                  <Button
                    onClick={() => onNavigate('my-skills')}
                    className="hidden sm:flex bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  >
                    Post a Skill
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleSignOut}
                    title="Sign Out"
                  >
                    <LogOut className="h-5 w-5" />
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="ghost"
                    onClick={() => handleAuthClick('login')}
                    className="hidden sm:flex"
                  >
                    Sign In
                  </Button>
                  <Button
                    onClick={() => handleAuthClick('signup')}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  >
                    Get Started
                  </Button>
                </>
              )}

              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        initialMode={authMode}
      />
    </>
  );
}