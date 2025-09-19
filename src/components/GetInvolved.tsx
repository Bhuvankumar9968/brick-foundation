import { motion } from 'framer-motion';
import { Heart, Users, Share2, ArrowRight, DollarSign, HandHeart, Megaphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import getInvolvedImage from '@/assets/get-involved.jpg';

const GetInvolved = () => {
  const ways = [
    {
      icon: DollarSign,
      title: 'Donate',
      description: 'Support our campaigns and help us reach more citizens with democracy education.',
      cta: 'Make a Donation',
      color: 'text-accent-saffron',
      bgColor: 'bg-accent-saffron/10',
      borderColor: 'border-accent-saffron/20',
      hoverColor: 'hover:bg-accent-saffron hover:text-black',
    },
    {
      icon: HandHeart,
      title: 'Volunteer',
      description: 'Join our team of dedicated volunteers and make a direct impact in your community.',
      cta: 'Become a Volunteer',
      color: 'text-accent-green',
      bgColor: 'bg-accent-green/10',
      borderColor: 'border-accent-green/20',
      hoverColor: 'hover:bg-accent-green hover:text-white',
    },
    {
      icon: Megaphone,
      title: 'Spread the Word',
      description: 'Share our mission on social media and help us reach more people who care about democracy.',
      cta: 'Share Our Mission',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/20',
      hoverColor: 'hover:bg-primary hover:text-white',
    },
  ];

  return (
    <section id="get-involved" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background Image Section */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src={getInvolvedImage} 
          alt="People joining hands in unity" 
          className="w-full h-full object-cover"
        />
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
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Heart className="w-4 h-4" />
            Join Our Movement
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get Involved
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every action, no matter how small, contributes to strengthening our democracy. Choose how you'd like to make a difference.
          </p>
        </motion.div>

        {/* Ways to Get Involved */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {ways.map((way, index) => (
            <motion.div
              key={way.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-card p-8 rounded-2xl shadow-soft hover-lift border-l-4 ${way.borderColor} group text-center`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${way.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <way.icon className={`w-8 h-8 ${way.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {way.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {way.description}
              </p>

              {/* CTA Button */}
              <Button 
                className={`w-full ${way.hoverColor} transition-all duration-300 font-semibold`}
                variant="outline"
              >
                {way.cta}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Featured Donation Section */}
        <motion.div 
          className="gradient-primary p-8 md:p-12 rounded-2xl text-white text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-32 h-32 border border-white/20 rounded-full"></div>
            <div className="absolute bottom-10 left-10 w-24 h-24 border border-white/20 rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.div
              className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <DollarSign className="w-4 h-4" />
              Support Democracy
            </motion.div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Your Support Defends Democracy
            </h3>
            
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Every contribution helps us educate more citizens, protect fundamental rights, 
              and build a stronger democratic foundation for future generations.
            </p>

            {/* Donation Impact */}
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="glass p-4 rounded-xl backdrop-blur-sm">
                <div className="text-2xl font-bold mb-2">₹500</div>
                <div className="text-white/80 text-sm">Educates 10 citizens about their rights</div>
              </div>
              <div className="glass p-4 rounded-xl backdrop-blur-sm">
                <div className="text-2xl font-bold mb-2">₹2,000</div>
                <div className="text-white/80 text-sm">Conducts a community workshop</div>
              </div>
              <div className="glass p-4 rounded-xl backdrop-blur-sm">
                <div className="text-2xl font-bold mb-2">₹5,000</div>
                <div className="text-white/80 text-sm">Supports a constitutional awareness campaign</div>
              </div>
            </div>

            {/* Big Donate Button */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Button 
                size="lg"
                className="bg-accent-saffron hover:bg-accent-saffron/90 text-black font-bold px-12 py-4 text-xl rounded-full hover-glow transition-all duration-300 shadow-xl animate-glow"
              >
                Donate Now
                <Heart className="ml-3 w-6 h-6" />
              </Button>
            </motion.div>

            <p className="text-white/70 text-sm mt-4">
              Secure donations • Tax deductible • Transparent use of funds
            </p>
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div 
          className="mt-16 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-card p-8 rounded-2xl shadow-soft">
            <Share2 className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Stay Connected
            </h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for updates on our campaigns, events, and ways to get involved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground"
              />
              <Button className="gradient-primary hover:opacity-90 px-8 py-3 font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetInvolved;