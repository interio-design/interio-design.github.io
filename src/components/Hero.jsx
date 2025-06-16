import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Home, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      <div className="absolute inset-0 hero-gradient opacity-30 dark:opacity-50"></div>
      
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 dark:bg-purple-700/30 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1.2, 1, 1.2],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-48 h-48 bg-pink-500/20 dark:bg-pink-700/30 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [-20, 20, -20],
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-10 w-24 h-24 bg-indigo-500/20 dark:bg-indigo-700/30 rounded-full blur-lg"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="inline-flex items-center space-x-2 bg-gray-800/50 dark:bg-gray-700/60 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-gray-700 dark:border-gray-600"
          >
            <Sparkles className="text-yellow-400" size={20} />
            <span className="text-white font-medium">Premium Interior Design</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight"
          >
            Transform Your
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
              Dream Space
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-xl md:text-2xl text-gray-300 dark:text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Experience luxury interior design that reflects your personality and lifestyle. 
            We create stunning spaces that inspire and delight.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 group"
            >
              Start Your Project
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 text-white hover:bg-gray-700/50 px-8 py-4 rounded-full text-lg font-semibold backdrop-blur-sm"
            >
              View Portfolio
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          >
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Home className="text-yellow-400" size={32} />
              </div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-300 dark:text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Palette className="text-pink-400" size={32} />
              </div>
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-gray-300 dark:text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Sparkles className="text-purple-400" size={32} />
              </div>
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-gray-300 dark:text-gray-400">Client Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-600 dark:border-gray-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-500 dark:bg-gray-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;