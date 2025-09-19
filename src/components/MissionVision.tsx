import { motion } from 'framer-motion';
import { Target, Eye, Lightbulb, Star } from 'lucide-react';

const MissionVision = () => {
  return (
    <section id="mission" className="py-20 gradient-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
            <Lightbulb className="w-4 h-4" />
            Our Purpose
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Mission & Vision
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Guided by constitutional values, we work toward a future where democracy flourishes
          </p>
        </motion.div>

        {/* Mission & Vision Cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass backdrop-blur-lg p-8 rounded-2xl shadow-strong hover-lift"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-accent-saffron/20 rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-accent-saffron" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Our Mission</h3>
                <div className="w-12 h-1 bg-accent-saffron rounded-full"></div>
              </div>
            </div>
            
            <p className="text-lg text-white/90 leading-relaxed mb-6">
              To empower citizens and safeguard democracy by promoting constitutional literacy, 
              defending fundamental rights, and building a movement of engaged citizens who 
              actively protect the pillars of our democratic society.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/80">
                <Star className="w-5 h-5 text-accent-saffron" />
                <span>Promote constitutional awareness</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Star className="w-5 h-5 text-accent-saffron" />
                <span>Defend fundamental rights</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Star className="w-5 h-5 text-accent-saffron" />
                <span>Empower citizen participation</span>
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass backdrop-blur-lg p-8 rounded-2xl shadow-strong hover-lift"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center">
                <Eye className="w-8 h-8 text-accent-green" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Our Vision</h3>
                <div className="w-12 h-1 bg-accent-green rounded-full"></div>
              </div>
            </div>
            
            <p className="text-lg text-white/90 leading-relaxed mb-6">
              An India where justice, liberty, equality, and fraternity thrive - where every 
              citizen understands their rights and responsibilities, and where democratic 
              institutions remain strong, transparent, and accountable to the people.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/80">
                <Star className="w-5 h-5 text-accent-green" />
                <span>Justice for all citizens</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Star className="w-5 h-5 text-accent-green" />
                <span>Liberty and freedom of expression</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Star className="w-5 h-5 text-accent-green" />
                <span>Equality and fraternity</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-white/80 text-lg mb-6">
            Together, we can build a stronger democracy for future generations
          </p>
          <div className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-full backdrop-blur-sm">
            <span className="text-sm font-medium">Join our mission today</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;