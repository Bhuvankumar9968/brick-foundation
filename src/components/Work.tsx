import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

import event01 from '../assets/event-01.jpg';
import event02 from '../assets/event-02.jpg';
import event03 from '../assets/event-03.jpg';
import event04 from '../assets/event-04.jpg';
import event05 from '../assets/event-05.jpg';
import event06 from '../assets/event-06.jpg';
import event07 from '../assets/event-07.jpg';
import event08 from '../assets/event-08.jpg';
import event09 from '../assets/event-09.jpg';
import event10 from '../assets/event-10.jpg';
import event11 from '../assets/event-11.jpg';
import event12 from '../assets/event-12.jpg';
import event13 from '../assets/event-13.jpg';
import event14 from '../assets/event-14.jpg';

const Work = () => {
  const images = [
    event01,
    event02,
    event03,
    event04,
    event05,
    event06,
    event07,
    event08,
    event09,
    event10,
    event11,
    event12,
    event13,
    event14,
  ];

  const imagesRow1 = images;
  const imagesRow2 = [...images].reverse();

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance logic for the mobile carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [images.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section id="work" className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <ChevronRight className="w-4 h-4" />
            Our Recent Initiatives
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Constitution Defenders Convention{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              April 26, 2025, Karnataka
            </span>
          </h2>
          <p className="text-md text-muted-foreground max-w-2xl mx-auto">
            Mobilising citizens to uphold constitutional rights and strengthen democratic participation.
          </p>
        </motion.div>
      </div>

      {/* Image Gallery - Continuously Scrolling for larger screens */}
      <div className="hidden md:block space-y-4 md:space-y-6 lg:space-y-2 pb-10">
        {/* Row 1: Left to Right */}
        <motion.div
          className="flex flex-nowrap items-center w-full"
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 50,
              ease: 'linear',
            },
          }}
        >
          {[...imagesRow1, ...imagesRow1].map((src, index) => (
            <div key={`row1-${index}`} className="flex-shrink-0 w-[300px] md:w-[400px] lg:w-[500px] h-[200px] md:h-[250px] lg:h-[300px] p-2">
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover rounded-xl border border-border"
              />
            </div>
          ))}
        </motion.div>

        {/* Row 2: Right to Left */}
        <motion.div
          className="flex flex-nowrap items-center w-full"
          initial={{ x: '-100%' }}
          animate={{ x: '0%' }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 50,
              ease: 'linear',
            },
          }}
        >
          {[...imagesRow2, ...imagesRow2].map((src, index) => (
            <div key={`row2-${index}`} className="flex-shrink-0 w-[300px] md:w-[400px] lg:w-[500px] h-[200px] md:h-[250px] lg:h-[300px] p-2">
              <img
                src={src}
                alt={`Gallery image ${index + 7}`}
                className="w-full h-full object-cover rounded-xl border border-border"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Mobile Carousel - Visible on small screens */}
      <div className="md:hidden relative w-full px-4 pb-10">
        <AnimatePresence mode="wait"> {/* Use AnimatePresence for exit animations */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="w-full h-[250px] flex justify-center items-center"
          >
            <img
              src={images[currentIndex]}
              alt={`Gallery image ${currentIndex + 1}`}
              className="w-full h-full object-cover rounded-xl border border-border"
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons for Mobile */}
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button
            onClick={handlePrev}
            className="bg-primary/70 text-white p-2 rounded-full ml-2 focus:outline-none"
            aria-label="Previous image"
          >
            <ChevronRight className="w-5 h-5 rotate-180" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            onClick={handleNext}
            className="bg-primary/70 text-white p-2 rounded-full mr-2 focus:outline-none"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots Indicator for Mobile */}
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${currentIndex === index ? 'bg-primary' : 'bg-muted-foreground'}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;