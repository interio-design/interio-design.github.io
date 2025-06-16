import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Message Sent Successfully! 🎉",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 98765 43210',
      subtext: 'Mon-Fri 10AM-7PM IST'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'namaste@groovelineinterio.in',
      subtext: 'We reply within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: '42 Kala Marg, Design Enclave',
      subtext: 'Mumbai, MH 400001'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Fri: 10AM-7PM',
      subtext: 'Sat: 11AM-5PM, Sun: Closed'
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', href: '#', color: 'hover:text-blue-500' },
    { icon: Instagram, name: 'Instagram', href: '#', color: 'hover:text-pink-500' },
    { icon: Twitter, name: 'Twitter', href: '#', color: 'hover:text-sky-400' },
    { icon: Linkedin, name: 'LinkedIn', href: '#', color: 'hover:text-blue-600' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-gray-100">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-6">
            Let's Create Something Amazing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your space? Get in touch with us today for a free consultation. 
            We'd love to hear about your project and bring your vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Card className="bg-gray-800/80 backdrop-blur-sm border-gray-700 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-display gradient-text">
                  Get In Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-100 mb-1">{info.title}</h4>
                      <p className="text-gray-300 font-medium">{info.details}</p>
                      <p className="text-sm text-gray-400">{info.subtext}</p>
                    </div>
                  </motion.div>
                ))}

                <div className="pt-6 border-t border-gray-700">
                  <h4 className="font-semibold text-gray-100 mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 transition-colors duration-300 ${social.color}`}
                        onClick={(e) => {
                          e.preventDefault();
                          toast({
                            title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
                          });
                        }}
                      >
                        <social.icon size={18} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="bg-gray-800/80 backdrop-blur-sm border-gray-700 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-display gradient-text">
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="w-full bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        className="w-full bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className="w-full bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Project consultation"
                        className="w-full bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project, space, and design preferences..."
                      className="w-full min-h-[120px] bg-gray-700 border-gray-600 text-gray-100 placeholder-gray-400"
                      required
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Send className="mr-2" size={20} />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-gray-800/80 backdrop-blur-sm border-gray-700 shadow-xl overflow-hidden">
            <div className="h-64 bg-gradient-to-r from-purple-700 to-pink-700 flex items-center justify-center">
              <div className="text-center text-white">
                <MapPin size={48} className="mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Visit Our Studio</h3>
                <p className="text-lg opacity-90">42 Kala Marg, Design Enclave</p>
                <p className="opacity-90">Mumbai, MH 400001</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;