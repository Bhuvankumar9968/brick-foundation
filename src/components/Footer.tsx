import { motion } from 'framer-motion';
import { Heart, Shield, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Mission & Vision', href: '#mission' },
    { label: 'Core Values', href: '#values' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/privacy-policy' }
  ];

  const getInvolvedLinks = [
    { label: 'Donate Now', href: '#get-involved' },
    { label: 'Volunteer', href: '#get-involved' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'Newsletter', href: '#get-involved' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white/10 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Organization Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              {/* Logo */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center">
                  <img src={logo} alt="Democracy Defenders Logo" className="w-full h-16 text-white" />
                </div>
                {/* <div>
                  <h3 className="text-xl font-bold text-white">Democracy Defenders</h3>
                  <p className="text-white/70 text-sm">Protecting the Constitution</p>
                </div> */}
              </div>

              {/* Tagline */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">
                  "For the People. By the People. Protecting the Constitution."
                </h4>
                <p className="text-white/80 leading-relaxed">
                Brick Foundation stands for justice, inclusivity, and people’s power—mobilising citizens nationwide to safeguard democracy, protect rights, and create meaningful change for future generations.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-white/80">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">brickfoundationtrust@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+91 6366705015</span>
                </div>
                <div className="flex items-center gap-3 text-white/80">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Bengaluru, India</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Get Involved */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">
                Get Involved
              </h4>
              <ul className="space-y-3">
  {quickLinks.map((link) => (
    <li key={link.label}>
      {link.href.startsWith("#") ? (
        <button
          onClick={() => scrollToSection(link.href)}
          className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
        >
          {link.label}
        </button>
      ) : (
        <Link
          to={link.href}
          className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
        >
          {link.label}
        </Link>
      )}
    </li>
  ))}
</ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-white/70 text-sm">
              © 2025 Brick Foundation. All rights reserved. 
              {/* <span className="ml-1">
                Built with <Heart className="w-4 h-4 inline text-accent-saffron" /> for democracy.
              </span> */}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-white/70 text-sm">Follow us:</span>
              {['FB', 'TW', 'IG', 'LI'].map((social, index) => (
                <button
                  key={social}
                  className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-300"
                >
                  <span className="text-xs font-bold text-white">{social}</span>
                </button>
              ))}
            </div>

            {/* Back to Top */}
            <Button
              onClick={scrollToTop}
              variant="ghost"
              size="sm"
              className="text-white/70 hover:text-white hover:bg-white/10"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Donate Button */}
      <motion.div 
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
      >
        <Button
          onClick={() => scrollToSection('#get-involved')}
          className="bg-accent-saffron hover:bg-accent-saffron/90 text-black font-bold px-6 py-3 rounded-full shadow-xl hover-glow animate-glow"
        >
          <Heart className="w-5 h-5 mr-2" />
          Donate
        </Button>
      </motion.div>
    </footer>
  );
};

export default Footer;