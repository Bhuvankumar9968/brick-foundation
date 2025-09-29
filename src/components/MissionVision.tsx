import { motion } from 'framer-motion';
import { Target, Eye, Lightbulb, Star, Handshake } from 'lucide-react';
import { useState } from 'react';
import missionImage from '../assets/misson.jpg';
import visionImage from '../assets/vision.jpg';
import valuesImage from '../assets/values.jpg';

const content = {
  mission: {
    icon: Target,
    title: "Our Mission",
    description: "To defend the Constitution, empower people, and build grassroots movements that protect rights, ensure justice, and safeguard democracy for future generations.",
    points: [
      "Defend constitutional values",
      "Empower marginalized voices",
      "Mobilize active citizens",
      "Protect democratic freedoms"
    ],
    image: missionImage
  },
  vision: {
    icon: Eye,
    title: "Our Vision",
    description: "We stand for truth, integrity, and collective strength, driven by the spirit of solidarity, accountability, and commitment to building a better tomorrow.",
    points: [
      "Justice for all",
      "Equality and inclusion",
      "Unity in diversity",
      "People-led democracy"
    ],
    image: visionImage
  },
  values: {
    icon: Handshake, // Assuming Handshake icon for Values
    title: "Our Values",
    description: "We stand for truth, integrity, and collective strength, driven by the spirit of solidarity, accountability, and commitment to building a better tomorrow.",
    points: [
      "Truth and integrity",
      "Solidarity and unity",
      "Accountability to people",
      "Commitment to building a better tomorrow"
    ],
    image: valuesImage
  }
};

const MissionVisionValues = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const activeContent = content[activeTab];

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
            Our Core Principles
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Mission, Vision & Values
          </h2>
          <p className="text-md text-white/80 max-w-2xl mx-auto">
            Guided by strong principles, we work toward a future where democracy flourishes
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-stretch gap-8 max-w-7xl mx-auto">
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
            className="h-full lg:w-3/5 glass backdrop-blur-lg p-8 rounded-2xl shadow-strong flex flex-col justify-center" 
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
            className="h-full lg:w-2/5 flex" 
          >
            <img 
              src={activeContent.image} 
              alt={activeContent.title} 
              className="rounded-2xl shadow-strong w-full h-full object-cover"
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