import { motion } from 'framer-motion';
import { Scale, Users, MessageSquare, HandHeart } from 'lucide-react';

const CoreValues = () => {
  const values = [
    {
      icon: Scale,
      title: 'Justice',
      description: 'Equal treatment and fair representation for every citizen, regardless of background.',
      color: 'text-accent-saffron',
      bgColor: 'bg-accent-saffron/10',
    },
    {
      icon: Users,
      title: 'Equality',
      description: 'Breaking barriers and ensuring equal opportunities for all members of society.',
      color: 'text-accent-green',
      bgColor: 'bg-accent-green/10',
    },
    {
      icon: MessageSquare,
      title: 'Freedom of Speech',
      description: 'Protecting the fundamental right to express opinions and hold diverse viewpoints.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: HandHeart,
      title: 'Unity',
      description: 'Bringing people together across divides to strengthen our democratic fabric.',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
  ];

  return (
    <section id="values" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <HandHeart className="w-4 h-4" />
            What We Stand For
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Core Values
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The fundamental principles that guide our work and shape our vision for democracy
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl shadow-soft hover-lift group"
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${value.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <value.icon className={`w-8 h-8 ${value.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {value.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>

              {/* Decorative Element */}
              <div className={`w-full h-1 ${value.bgColor} rounded-full mt-6 group-hover:bg-primary/20 transition-colors duration-300`}></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto glass p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Values in Action
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              These values aren't just words on a page - they're the foundation of everything we do. 
              From grassroots organizing to policy advocacy, we ensure that justice, equality, 
              freedom, and unity remain at the heart of our democratic society.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValues;