import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Lightbulb, Package, Smile, Users } from 'lucide-react';

const ProcessSection = () => {
  const processSteps = [
    {
      icon: FileText,
      title: 'Justice',
      description: 'We believe in fairness and equality for all. Our actions challenge injustice, fight discrimination, and ensure that every individual’s rights are respected, protected, and upheld across society.',
    },
    {
      icon: Lightbulb,
      title: 'Empowerment',
      description: 'We strive to give voice and agency to marginalized communities, women, and youth. By fostering leadership and participation, we enable citizens to actively shape a just and democratic society.',
    },
    {
      icon: Package,
      title: 'Integrity',
      description: 'Our movement is grounded in honesty, transparency, and ethical action. We uphold truth and accountability in everything we do, ensuring trust and credibility with the communities we serve.',
    },
    {
      icon: Smile,
      title: 'Unity',
      description: 'We unite people across diverse backgrounds, beliefs, and regions. Together, we build solidarity, collective strength, and resilience to defend democracy, promote equality, and drive meaningful social change.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    show: { scaleX: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section id="principles" className="py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            Our Guiding Principles
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          What We{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Stand For
            </span>
          </h2>
          <p className="text-md text-muted-foreground max-w-2xl mx-auto">
          Principles that guide our actions to protect democracy and empower citizens.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          className="relative flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-12 lg:space-y-0 lg:space-x-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Horizontal Line for Desktop */}
          <motion.div 
            className="hidden lg:block absolute top-1/4 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 mx-auto transform -translate-y-1/2"
            variants={lineVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 origin-left" style={{ width: '100%' }}></div>
          </motion.div>
          
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center text-center max-w-xs mx-auto lg:mx-0 w-full"
              variants={itemVariants}
            >
              {/* Vertical Line for Mobile/Tablet */}
              {index > 0 && (
                <div className="lg:hidden absolute -top-6 bottom-full w-0.5 bg-gray-200 dark:bg-gray-700 h-12">
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-purple-500" style={{ height: '100%' }}></div>
                </div>
              )}

              {/* Icon Container */}
              <div className="relative z-10 w-24 h-24 flex items-center justify-center rounded-full bg-blue-600 dark:bg-blue-700 text-white shadow-xl ring-8 ring-white dark:ring-gray-950">
                <step.icon className="w-10 h-10" />
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-purple-600 dark:bg-purple-700 text-white flex items-center justify-center rounded-full text-lg font-bold shadow-md">
                  {`0${index + 1}`}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-3">
                {step.title}
              </h3>
              <p className="text-md text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;