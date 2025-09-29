import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

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
  // Placeholder images - replace these with your actual image paths
  const imagesRow1 = [
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

  const imagesRow2 = [
    event14,
    event13,
    event12,
    event11,
    event10,
    event09,
    event08,
    event07,
    event06,
    event05,
    event04,
    event03,
    event02,
    event01,
  ];

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
            <ChevronRight className="w-4 h-4" /> {/* Updated icon */}
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

      {/* Image Gallery - Continuously Scrolling */}
      <div className="space-y-4 md:space-y-6 lg:space-y-2 pb-10"> {/* Added padding to the bottom */}
        {/* Row 1: Left to Right */}
        <motion.div
          className="flex flex-nowrap items-center w-full"
          initial={{ x: 0 }}
          animate={{ x: '-100%' }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 50, // Adjust speed as needed
              ease: 'linear',
            },
          }}
        >
          {/* Duplicate images to create continuous loop */}
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

        {/* Row 2: Right to Left (Hidden on small screens) */}
        <motion.div
          className="hidden md:flex flex-nowrap items-center w-full" // Hidden on `sm` and below
          initial={{ x: '-100%' }}
          animate={{ x: '0%' }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 50, // Adjust speed as needed
              ease: 'linear',
            },
          }}
        >
          {/* Duplicate images to create continuous loop */}
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

      {/* Optional: Call to action for more photos if needed */}
      {/* <div className="container mx-auto px-4 text-center mt-10">
        <button className="bg-primary text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-primary/90 transition-colors">
          View All Photos
        </button>
      </div> */}
    </section>
  );
};

export default Work;