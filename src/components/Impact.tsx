import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Users, Megaphone, Heart, MapPin } from 'lucide-react';

const Impact = () => {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    {
      icon: Users,
      number: 50000,
      label: 'Citizens Reached',
      suffix: '+',
      description: 'Through awareness campaigns and educational programs',
      color: 'text-accent-saffron',
      bgColor: 'bg-accent-saffron/10',
    },
    {
      icon: Megaphone,
      number: 10000,
      label: 'Awareness Drives',
      suffix: '+',
      description: 'Community events promoting constitutional literacy',
      color: 'text-accent-green',
      bgColor: 'bg-accent-green/10',
    },
    {
      icon: Heart,
      number: 1000,
      label: 'Volunteers Mobilized',
      suffix: '+',
      description: 'Dedicated citizens working for democratic change',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: MapPin,
      number: 50,
      label: 'Cities Covered',
      suffix: '+',
      description: 'Expanding our reach across urban and rural areas',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
  ];

  const AnimatedCounter = ({ number, suffix, isVisible }: { number: number; suffix: string; isVisible: boolean }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (isVisible) {
        const duration = 2000; // 2 seconds
        const steps = 50;
        const increment = number / steps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= number) {
            setCount(number);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);

        return () => clearInterval(timer);
      }
    }, [isVisible, number]);

    return (
      <span className="text-4xl md:text-5xl font-bold">
        {count.toLocaleString()}{suffix}
      </span>
    );
  };

  return (
    <section id="impact" className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 border-2 border-primary rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-accent-saffron rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 border border-accent-green rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          onViewportEnter={() => setIsVisible(true)}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            Our Impact
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Making Democracy{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Stronger Together
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every number represents real people, real change, and real progress toward a stronger democracy
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-2xl shadow-soft hover-lift text-center group"
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>

              {/* Number */}
              <div className={`${stat.color} mb-2`}>
                <AnimatedCounter 
                  number={stat.number} 
                  suffix={stat.suffix} 
                  isVisible={isVisible} 
                />
              </div>

              {/* Label */}
              <h3 className="text-lg font-bold text-foreground mb-3">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section - Success Stories Preview */}
        <motion.div 
          className="bg-gradient-to-r from-primary/5 to-accent/5 p-8 md:p-12 rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Real Stories, Real Impact
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Behind every statistic are inspiring stories of citizens who found their voice, 
              communities that came together, and democratic victories that strengthened our nation. 
              These numbers represent hope, change, and the power of collective action.
            </p>
            
            {/* Mini Success Indicators */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent-saffron rounded-full"></div>
                <span>Constitutional Literacy Increased</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent-green rounded-full"></div>
                <span>Community Engagement Enhanced</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <span>Democratic Participation Strengthened</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Impact;