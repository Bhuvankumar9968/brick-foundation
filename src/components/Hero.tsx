import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-democracy.jpg';
import DonationModal from '@/components/DonationModal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Democracy" className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.h1
          className="text-4xl md:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Together We Rise <br />
          <span className="bg-gradient-to-r from-accent-saffron to-accent-green bg-clip-text text-transparent">
            To Save Democracy.
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          United as one, Brick Foundation defends the Constitution, empowers people, and works to save democracy.
        </motion.p>

        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            size="lg"
            onClick={() => setIsModalOpen(true)}
            className="relative group overflow-hidden bg-accent-saffron hover:bg-accent-green text-black hover:text-white font-bold px-8 py-4 text-lg rounded-full transition-colors duration-300"
          >
            Donate Now
            <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
          </Button>
        </motion.div>
      </div>

      {/* Donation Modal */}
      <DonationModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default Hero;
