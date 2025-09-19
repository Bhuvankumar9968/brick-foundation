import { motion } from 'framer-motion';
import { Calendar, Users, Megaphone, BookOpen, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Work = () => {
  const projects = [
    {
      title: 'Youth for Democracy',
      description: 'Empowering young citizens with knowledge about their constitutional rights and democratic responsibilities.',
      category: 'Education',
      impact: '5,000+ students reached',
      icon: Users,
      color: 'text-accent-saffron',
      bgColor: 'bg-accent-saffron/10',
      borderColor: 'border-accent-saffron/20',
    },
    {
      title: 'Constitution Awareness Drive',
      description: 'Community workshops and seminars to promote constitutional literacy among citizens of all ages.',
      category: 'Awareness',
      impact: '10,000+ participants',
      icon: BookOpen,
      color: 'text-accent-green',
      bgColor: 'bg-accent-green/10',
      borderColor: 'border-accent-green/20',
    },
    {
      title: 'Campaign for Free Speech',
      description: 'Defending the fundamental right to freedom of expression and protecting journalists and activists.',
      category: 'Advocacy',
      impact: '50+ cases supported',
      icon: Megaphone,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/20',
    },
    {
      title: 'Civic Engagement Initiative',
      description: 'Encouraging active participation in democratic processes and building stronger communities.',
      category: 'Community',
      impact: '25+ communities engaged',
      icon: Calendar,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      borderColor: 'border-accent/20',
    },
  ];

  return (
    <section id="work" className="py-20 bg-muted/30">
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
            <Megaphone className="w-4 h-4" />
            Our Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Projects & Campaigns
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the initiatives that are making a real difference in strengthening democracy across India
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-card p-8 rounded-2xl shadow-soft hover-lift border-l-4 ${project.borderColor} group`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className={`w-12 h-12 ${project.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className={`w-6 h-6 ${project.color}`} />
                </div>
                <span className={`text-sm px-3 py-1 rounded-full ${project.bgColor} ${project.color} font-medium`}>
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Impact */}
              <div className="flex items-center justify-between">
                <div className={`text-sm font-semibold ${project.color}`}>
                  {project.impact}
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-muted-foreground hover:text-primary"
                >
                  Learn More
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Campaign */}
        <motion.div 
          className="gradient-primary p-8 md:p-12 rounded-2xl text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-32 h-32 border border-white/20 rounded-full"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 border border-white/20 rounded-full"></div>
          </div>

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              <BookOpen className="w-4 h-4" />
              Featured Campaign
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Democracy Education for All
            </h3>
            
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Our flagship initiative to ensure every Indian citizen understands their constitutional rights, 
              democratic responsibilities, and the power of their voice in shaping the nation's future.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">25,000+</div>
                <div className="text-white/80">Citizens Educated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100+</div>
                <div className="text-white/80">Workshops Conducted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">15</div>
                <div className="text-white/80">States Covered</div>
              </div>
            </div>

            <Button 
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3"
            >
              Join This Campaign
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;