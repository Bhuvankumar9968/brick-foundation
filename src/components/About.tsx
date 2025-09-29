import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Heart, Users, Target } from 'lucide-react';
import aboutImage1 from '@/assets/about-us-1.jpg'; // Assuming you have multiple images
import aboutImage2 from '@/assets/about-us-2.jpg';
import aboutImage3 from '@/assets/about-us-3.jpg';

const images = [
  // aboutImage1,
  aboutImage2,
  aboutImage3,
];

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Added items-start to grid to control alignment, but for height matching, we need more specific height management. */}
        {/* Let's try to adjust the image height to match the content height, or ensure both stretch in the grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch"> {/* items-stretch makes grid items fill the height of the column */}
          {/* Image Slider Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex flex-col" // Use flex-col to push dots to bottom
          >
            <div className="relative overflow-hidden rounded-2xl shadow-strong flex-grow"> {/* flex-grow allows image container to fill height */}
              <motion.img 
                key={currentImageIndex}
                src={images[currentImageIndex]} 
                alt="Democracy activists and volunteers working together" 
                className="w-full h-full object-cover" // h-full to fill parent div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            </div>
            
            {/* Pagination Dots */}
            <div className="flex justify-center mt-6 space-x-2 pb-2"> {/* Added pb-2 for a bit of padding */}
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    currentImageIndex === index ? 'bg-primary' : 'bg-muted-foreground/50 hover:bg-muted-foreground'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 flex flex-col justify-between" // Use flex-col and justify-between for internal spacing
          >
            <div> {/* This div holds the top content block */}
              <motion.div 
                className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Shield className="w-4 h-4" />
                About Our Movement
              </motion.div>
              
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Uniting Citizens to Protect{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Democracy and Justice
                </span>
              </motion.h2>
              
              <motion.p 
                className="text-md text-muted-foreground leading-relaxed mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Brick Foundation is a people-powered movement committed to defending the Constitution, empowering citizens, and saving democracy. We believe that true change begins at the grassroots, where ordinary people unite to challenge injustice and build a just society.
              </motion.p>
            </div>

            {/* Feature Grid - now this will be pushed towards the bottom if space allows */}
            <motion.div 
              className="grid sm:grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-card p-6 rounded-xl shadow-soft hover-lift">
                <Heart className="w-8 h-8 text-accent-saffron mb-4" />
                <h3 className="font-semibold text-lg mb-2">Constitution First</h3>
                <p className="text-muted-foreground text-sm">
                Standing against authoritarianism while protecting rights of all communities.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl shadow-soft hover-lift">
                <Users className="w-8 h-8 text-accent-green mb-4" />
                <h3 className="font-semibold text-lg mb-2">Empower People</h3>
                <p className="text-muted-foreground text-sm">
                Mobilising youth, women, and marginalized voices to lead change.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl shadow-soft hover-lift">
                <Target className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-lg mb-2">Movement Building</h3>
                <p className="text-muted-foreground text-sm">
                  Organising campaigns that hold governments accountable and demand justice.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-xl shadow-soft hover-lift">
                <Shield className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold text-lg mb-2">Cultural Renewal</h3>
                <p className="text-muted-foreground text-sm">
                Promoting inclusivity, equality, and spirit of India’s reformers.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;