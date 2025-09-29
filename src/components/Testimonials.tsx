import { motion } from 'framer-motion';
import { Quote, Star, User } from 'lucide-react';
import { useState } from 'react';

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Community Volunteer',
      location: 'Mumbai',
      quote: 'Through Democracy Defenders, I learned about my constitutional rights and found my voice. Now I actively participate in community meetings and help educate others.',
      rating: 5,
      avatar: 'PS'
    },
    {
      name: 'Raj Patel',
      role: 'College Student',
      location: 'Delhi',
      quote: 'The Youth for Democracy program opened my eyes to how I can make a difference. I now lead constitutional awareness sessions in my college.',
      rating: 5,
      avatar: 'RP'
    },
    {
      name: 'Dr. Kavitha Nair',
      role: 'Activist',
      location: 'Bangalore',
      quote: 'Their work in defending free speech and supporting activists like me is crucial for our democracy. We need more organizations like Democracy Defenders.',
      rating: 5,
      avatar: 'KN'
    },
    {
      name: 'Amit Kumar',
      role: 'Local Leader',
      location: 'Jaipur',
      quote: 'The Constitution Awareness Drive in our village changed everything. People now understand their rights and are more engaged in local governance.',
      rating: 5,
      avatar: 'AK'
    },
    {
      name: 'Sunita Reddy',
      role: 'Teacher',
      location: 'Hyderabad',
      quote: 'I incorporate their educational materials in my classes. Students are now more aware of democratic values and their role as future citizens.',
      rating: 5,
      avatar: 'SR'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
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
            <Quote className="w-4 h-4" />
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Voices of{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Change
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from the citizens, volunteers, and activists whose lives have been transformed through our work
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <motion.div 
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-card p-8 md:p-12 rounded-2xl shadow-strong relative">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-primary" />
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6 pt-4">
              {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent-saffron text-accent-saffron" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl text-center text-foreground leading-relaxed mb-8 font-medium">
              "{testimonials[activeTestimonial].quote}"
            </blockquote>

            {/* Author */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold text-lg">
                  {testimonials[activeTestimonial].avatar}
                </span>
              </div>
              <h4 className="font-bold text-lg text-primary mb-1">
                {testimonials[activeTestimonial].name}
              </h4>
              <p className="text-muted-foreground">
                {testimonials[activeTestimonial].role} • {testimonials[activeTestimonial].location}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center gap-4 flex-wrap">
          {testimonials.map((testimonial, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`p-4 rounded-xl transition-all duration-300 ${
                activeTestimonial === index 
                  ? 'bg-primary text-primary-foreground shadow-md' 
                  : 'bg-card hover:bg-muted text-muted-foreground hover:text-foreground'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 ${
                  activeTestimonial === index ? 'bg-primary-foreground/20' : 'bg-primary/10'
                }`}>
                  <span className={`text-sm font-bold ${
                    activeTestimonial === index ? 'text-primary-foreground' : 'text-primary'
                  }`}>
                    {testimonial.avatar}
                  </span>
                </div>
                <div className="text-xs font-medium">{testimonial.name}</div>
                <div className="text-xs opacity-75">{testimonial.location}</div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto glass p-8 rounded-2xl">
            <User className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Share Your Story
            </h3>
            <p className="text-muted-foreground mb-6">
              Have you been impacted by our work? We'd love to hear from you and share your story with others.
            </p>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium">
              <span>Contact us to share your experience</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;