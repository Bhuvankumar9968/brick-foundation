import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Mission & Vision', href: '#mission' },
    { label: 'Core Values', href: '#values' },
    { label: 'Impact', href: '#impact' },
    { label: 'Work', href: '#work' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Get Involved', href: '#get-involved' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Brick Foundation" className="h-16 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center space-x-4">
            <Button 
              onClick={() => scrollToSection('#get-involved')}
              className="gradient-primary hover:opacity-90 transition-opacity font-semibold"
            >
              Donate Now
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
          <div className="lg:hidden absolute top-20 left-0 right-0 glass border-t border-border">
            <nav className="flex flex-col p-4 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left p-3 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-all duration-200 font-medium"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('#get-involved')}
                className="gradient-primary hover:opacity-90 transition-opacity font-semibold mt-4"
              >
                Donate Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;