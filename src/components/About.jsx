import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Lightbulb, Heart } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: 'Award-Winning Design',
      description: 'Recognized for excellence in interior design with multiple industry awards and certifications.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Our passionate team of designers brings creativity and expertise to every project.'
    },
    {
      icon: Lightbulb,
      title: 'Innovative Solutions',
      description: 'We blend modern trends with timeless elegance to create unique, functional spaces.'
    },
    {
      icon: Heart,
      title: 'Client-Focused',
      description: 'Your vision is our priority. We listen, understand, and deliver beyond expectations.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-gray-100">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-6">
            About The Grooveline Interio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are passionate interior designers dedicated to creating extraordinary spaces that 
            reflect your unique style and enhance your daily life. With over 15 years of experience, 
            we transform houses into dream homes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img  
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              alt="Modern interior design showcase with dark tones"
             src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&q=80" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-display font-bold text-gray-100 mb-6">
              Creating Spaces That Inspire
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our design philosophy centers on understanding your lifestyle, preferences, and dreams. 
              We believe that great design should not only look beautiful but also enhance how you 
              live and feel in your space.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              From concept to completion, we handle every detail with precision and care, ensuring 
              your project is delivered on time and exceeds your expectations.
            </p>
            
            <div className="flex items-center space-x-4 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">500+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </div>
              <div className="w-px h-12 bg-gray-700"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">15+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-gray-700"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">25+</div>
                <div className="text-sm text-gray-400">Awards Won</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-semibold text-gray-100 mb-3">{feature.title}</h4>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;