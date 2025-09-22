import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CtaSection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-700 text-white"> {/* Blue gradient background */}
      <div className="container mx-auto px-4">
        <motion.div
          className="rounded-2xl flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center md:text-left max-w-4xl mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Support Our Movement, Defend Democracy with Your Contribution
            </h2>
            <p className="text-md text-white/80">
            Every contribution counts—help us mobilize citizens, fight injustice, and protect the foundations of democracy.            </p>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <motion.button
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98, y: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative group overflow-hidden bg-accent-saffron hover:bg-accent-green text-black hover:text-white font-bold px-8 py-4 text-lg rounded-full transition-colors duration-300 w-full md:w-[340px] mx-auto md:mx-0"
              onClick={() => navigate('/donate')}
            >
              {/* Shimmer overlays */}
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
              <span className="relative z-10">Donate every Month</span>
            </motion.button>

            <motion.button
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98, y: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="relative group overflow-hidden border border-white/30 text-white hover:text-white hover:bg-white/30 font-semibold px-8 py-4 text-lg rounded-full backdrop-blur-sm transition-colors duration-300 w-full md:w-[340px] mx-auto md:mx-0"
            >
              <span className="relative z-10">Connect Now</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;