import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';
import { motion } from 'framer-motion';
import DonationModal from '@/components/DonationModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [isDonateOpen, setIsDonateOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Mission & Vision', href: '#mission' },
    { label: 'Core Principles', href: '#principles' },
    { label: 'Work', href: '#work' },
    { label: 'Impact', href: '#impact' },
    // { label: 'Testimonials', href: '#testimonials' },
    // { label: 'Get Involved', href: '#get-involved' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Brick Foundation" className="h-8 w-auto sm:h-14 md:h-16" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => { setActiveSection(item.href); scrollToSection(item.href); }}
                className={`relative pb-1 text-foreground hover:text-blue-600 transition-colors duration-200 font-medium group ${activeSection === item.href ? 'text-blue-600' : ''}`}
              >
                {item.label}
                {/* Active underline animation (left-to-right) */}
                <span
                  className={`pointer-events-none absolute -bottom-0.5 left-0 h-0.5 w-full bg-blue-600 transition-transform duration-300 origin-left transform-gpu ${activeSection === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                />
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            <Button 
              size="sm"
              className="h-12"
              onClick={() => setIsDonateOpen(true)}
              className="relative group overflow-hidden bg-accent-saffron hover:bg-accent-green text-black hover:text-white font-bold px-5 py-6 rounded-full transition-colors duration-300"
            > 
              {/* Shimmer overlays (always on) */}
              <motion.span
                className="pointer-events-none absolute z-0 top-[-6px] bottom-[-6px] w-2/3 -skew-x-12 bg-gradient-to-r from-transparent via-white to-transparent blur-md opacity-90 mix-blend-screen"
                initial={{ left: '-100%' }}
                animate={{ left: '150%' }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'linear', repeatDelay: 0.15 }}
              />
              <motion.span
                className="pointer-events-none absolute z-0 top-[-6px] bottom-[-6px] w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/90 to-transparent blur-md opacity-90 mix-blend-screen"
                initial={{ left: '-110%' }}
                animate={{ left: '160%' }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'linear', delay: 0.6, repeatDelay: 0.15 }}
              />
              <span className="relative z-10 inline-flex items-center">
                Donate Now
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-background shadow-lg border-t border-border">
            <nav className="flex flex-col p-4 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => { setActiveSection(item.href); scrollToSection(item.href); }}
                  className={`relative text-left p-3 text-foreground hover:text-blue-600 hover:bg-muted/50 rounded-lg transition-all duration-200 font-medium group ${activeSection === item.href ? 'text-blue-600' : ''}`}
                >
                  {item.label}
                  {/* Active underline animation (left-to-right) */}
                  <span
                    className={`pointer-events-none absolute bottom-1 left-3 right-3 h-0.5 bg-blue-600 transition-transform duration-300 origin-left transform-gpu ${activeSection === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                  />
                </button>
              ))}
              <Button 
                size="sm"
                onClick={() => { setIsDonateOpen(true); setIsMenuOpen(false); }}
                className="relative group overflow-hidden bg-accent-saffron hover:bg-accent-green text-black hover:text-white font-bold px-5 py-2.5 rounded-full transition-colors duration-300 mt-4"
              >
                {/* Shimmer overlays (always on) */}
                <motion.span
                  className="pointer-events-none absolute z-0 top-[-6px] bottom-[-6px] w-2/3 -skew-x-12 bg-gradient-to-r from-transparent via-white to-transparent blur-md opacity-90 mix-blend-screen"
                  initial={{ left: '-100%' }}
                  animate={{ left: '150%' }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: 'linear', repeatDelay: 0.15 }}
                />
                <motion.span
                  className="pointer-events-none absolute z-0 top-[-6px] bottom-[-6px] w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/90 to-transparent blur-md opacity-90 mix-blend-screen"
                  initial={{ left: '-110%' }}
                  animate={{ left: '160%' }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'linear', delay: 0.6, repeatDelay: 0.15 }}
                />
                <span className="relative z-10 inline-flex items-center">
                  Donate Now
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
            </nav>
          </div>
        )}
      </div>
      {/* Donation Modal */}
      <DonationModal open={isDonateOpen} onClose={() => setIsDonateOpen(false)} />
    </header>
  );
};

export default Header;