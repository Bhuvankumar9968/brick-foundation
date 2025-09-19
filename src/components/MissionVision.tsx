import { motion } from 'framer-motion';
import { Target, Eye, Lightbulb, Star, Handshake } from 'lucide-react';
import { useState } from 'react';

const content = {
  mission: {
    icon: Target,
    title: "Our Mission",
    description: "To empower citizens and safeguard democracy by promoting constitutional literacy, defending fundamental rights, and building a movement of engaged citizens who actively protect the pillars of our democratic society.",
    points: [
      "Promote constitutional awareness",
      "Defend fundamental rights",
      "Empower citizen participation"
    ],
    image: "https://via.placeholder.com/600x400/FFD700/FFFFFF?text=Mission+Image" // Replace with actual image
  },
  vision: {
    icon: Eye,
    title: "Our Vision",
    description: "An India where justice, liberty, equality, and fraternity thrive - where every citizen understands their rights and responsibilities, and where democratic institutions remain strong, transparent, and accountable to the people.",
    points: [
      "Justice for all citizens",
      "Liberty and freedom of expression",
      "Equality and fraternity"
    ],
    image: "https://via.placeholder.com/600x400/7CFC00/FFFFFF?text=Vision+Image" // Replace with actual image
  },
  values: {
    icon: Handshake, // Assuming Handshake icon for Values
    title: "Our Values",
    description: "We are committed to integrity, transparency, and inclusivity in all our actions. We believe in the power of collective action and uphold the principles of non-violence, empathy, and respect for diversity.",
    points: [
      "Integrity & Transparency",
      "Inclusivity & Empathy",
      "Respect for Diversity"
    ],
    image: "https://via.placeholder.com/600x400/8A2BE2/FFFFFF?text=Values+Image" // Replace with actual image
  }
};

const MissionVisionValues = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const activeContent = content[activeTab];

  return (
    <section id="mission-vision-values" className="py-20 gradient-primary relative overflow-hidden">
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
            Our Core Principles
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Mission, Vision & Values
          </h2>
          <p className="text-md text-white/80 max-w-2xl mx-auto">
            Guided by strong principles, we work toward a future where democracy flourishes
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          {/* Left: Cards for Mission, Vision, Values - REDUCED WIDTH */}
          <div className="lg:w-1/5 grid grid-cols-3 gap-4 lg:grid-cols-1"> 
            {Object.keys(content).map((key) => {
              const item = content[key];
              const IconComponent = item.icon; 
              const isActive = activeTab === key;

              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * Object.keys(content).indexOf(key) }}
                  viewport={{ once: true }}
                  className={`w-full glass p-4 rounded-xl shadow-strong cursor-pointer transform transition-all duration-300 ${ 
                    isActive ? 'border-2 border-accent-saffron scale-105' : 'hover:scale-105 hover:border-accent-saffron/50 border border-transparent'
                  }`}
                  onClick={() => setActiveTab(key)}
                >
                  <div className={`w-10 h-10 ${key === 'mission' ? 'bg-accent-saffron/20 text-accent-saffron' : key === 'vision' ? 'bg-accent-green/20 text-accent-green' : 'bg-purple-500/20 text-purple-400'} rounded-full flex items-center justify-center mb-2`}> 
                    <IconComponent className="w-5 h-5" /> 
                  </div>
                  <h3 className="text-lg font-semibold text-white capitalize">{item.title}</h3> 
                </motion.div>
              );
            })}
          </div>

          {/* Center: Description - REDUCED WIDTH */}
          <motion.div
            key={activeTab} 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-3/5 glass backdrop-blur-lg p-8 rounded-2xl shadow-strong flex flex-col justify-center" 
          >
            <h3 className={`text-2xl font-bold mb-4 ${activeTab === 'mission' ? 'text-accent-saffron' : activeTab === 'vision' ? 'text-accent-green' : 'text-purple-400'}`}> 
              {activeContent.title}
            </h3>
            <p className="text-base text-white/90 leading-relaxed mb-6"> 
              {activeContent.description}
            </p>
            <div className="space-y-2"> 
              {activeContent.points.map((point, index) => (
                <div key={index} className="flex items-center gap-2 text-white/80"> 
                  <Star className={`w-4 h-4 ${activeTab === 'mission' ? 'text-accent-saffron' : activeTab === 'vision' ? 'text-accent-green' : 'text-purple-400'}`} /> 
                  <span className="text-sm">{point}</span> 
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image - INCREASED WIDTH */}
          <motion.div
            key={`image-${activeTab}`} 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-2/5 flex items-center justify-center" 
          >
            <img 
              src={activeContent.image} 
              alt={activeContent.title} 
              className="rounded-2xl shadow-strong w-full h-auto object-cover max-h-96 lg:max-h-full"
            />
          </motion.div>
        </div>

        {/* Bottom CTA */}
        {/* <motion.div 
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
        </motion.div> */}
      </div>
    </section>
  );
};

export default MissionVisionValues;