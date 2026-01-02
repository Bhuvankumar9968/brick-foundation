import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { db } from '../firebase/firebase.js';
import { collection, addDoc } from 'firebase/firestore';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.mobile.trim()) {
      alert('Please fill in both Name and Mobile number.');
      return;
    }

    try {
      await addDoc(collection(db, 'contactForm'), {
        ...formData,
        submittedAt: new Date()
      });
      alert('Your message has been sent!');
      setFormData({ name: '', mobile: '', email: '', message: '' });
    } catch (err) {
      console.error('Error sending message:', err);
      alert('There was an error sending your message. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['Sheshadripuram, Bengaluru - 560020'],
      color: 'text-accent-saffron',
      bgColor: 'bg-accent-saffron/10',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 63667 05015'],
      color: 'text-accent-green',
      bgColor: 'bg-accent-green/10',
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['brickfoundationtrust@gmail.com'],
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Mail className="w-4 h-4" /> Contact Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get in Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions or want to get involved? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left: Contact Info */}
          <motion.div className="lg:col-span-1" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold text-foreground mb-6">Let's Connect</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Whether you're interested in volunteering, have questions about our campaigns, or want to support our cause, we're here to help.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div key={info.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${info.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <info.icon className={`w-6 h-6 ${info.color}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-muted-foreground text-sm">{detail}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div className="lg:col-span-2" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <div className="bg-card p-8 rounded-2xl shadow-soft">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Mobile Number *</label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Your mobile number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email (Optional)</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message (Optional)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-vertical"
                    placeholder="Your message..."
                  />
                </div>

                <div className="flex items-center gap-4">
                  <Button type="submit" size="lg" className="gradient-primary hover:opacity-90 font-semibold px-8 py-3">
                    Send Message
                    <Send className="w-5 h-5 ml-2" />
                  </Button>
                  <p className="text-sm text-muted-foreground">We'll get back to you within 24 hours</p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
