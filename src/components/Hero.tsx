import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Users, Heart } from 'lucide-react';
import heroImage from '@/assets/hero-democracy.jpg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Democracy and Constitution Protection" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Headline */}
          <motion.h1 
            className="text-4xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Together We Rise{' '}
            <br />
            <span className="bg-gradient-to-r from-accent-saffron to-accent-green bg-clip-text text-transparent">
              To Save Democracy.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p 
            className="text-lg md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            United as one, Brick Foundation defends the Constitution, empowers people, and works to save democracy.
          </motion.p>

          {/* Stats Row */}
          {/* <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center gap-2 text-white/80">
              <Users className="w-5 h-5" />
              <span className="font-semibold">50,000+ Citizens Reached</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Shield className="w-5 h-5" />
              <span className="font-semibold">10,000+ Awareness Drives</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Heart className="w-5 h-5" />
              <span className="font-semibold">1,000+ Volunteers</span>
            </div>
          </motion.div> */}

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.98, y: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Button 
                size="lg"
                onClick={() => scrollToSection('#get-involved')}
                className="relative group overflow-hidden bg-accent-saffron hover:bg-accent-green text-black hover:text-white font-bold px-8 py-4 text-lg rounded-full transition-colors duration-300"
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
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                </span>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.98, y: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Button 
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('#about')}
                className="relative group overflow-hidden border-white/30 text-black hover:text-white hover:bg-white/30 font-semibold px-8 py-4 text-lg rounded-full backdrop-blur-sm transition-colors duration-300"
              >
                {/* Shimmer overlays (always on) */}
                <motion.span
                  className="pointer-events-none absolute z-0 top-[-6px] bottom-[-6px] w-2/3 -skew-x-12 bg-gradient-to-r from-transparent via-white to-transparent blur-md opacity-90 mix-blend-overlay"
                  initial={{ left: '-100%' }}
                  animate={{ left: '150%' }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'linear', repeatDelay: 0.2 }}
                />
                <motion.span
                  className="pointer-events-none absolute z-0 top-[-6px] bottom-[-6px] w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/90 to-transparent blur-md opacity-90 mix-blend-overlay"
                  initial={{ left: '-110%' }}
                  animate={{ left: '160%' }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'linear', delay: 0.7, repeatDelay: 0.2 }}
                />
                <span className="relative z-10 inline-flex items-center">
                  Join as Volunteer
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-1/4 left-10 w-20 h-20 bg-white/10 rounded-full backdrop-blur-sm hidden lg:block"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-16 h-16 bg-accent-saffron/20 rounded-full backdrop-blur-sm hidden lg:block"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;