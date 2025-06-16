import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Home, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = (): JSX.Element => {
  const scrollToContact = (): void => {
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
          className="absolute top-1/3 left-1/4 w-16 h-16 bg-blue-500/20 dark:bg-blue-700/30 rounded-full blur-xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-white/10 mb-6"
          >
            <Sparkles className="w-5 h-5 mr-2 text-yellow-400" />
            <span className="text-sm font-medium text-white/90">New: AI-Powered Design Tools</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Transform Your Space with
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              {' '}Modern Design
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
          >
            Create stunning interiors that inspire and elevate your living experience. 
            Our expert designers bring your vision to life with innovative solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button 
              onClick={scrollToContact}
              className="group px-8 py-6 text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              className="px-8 py-6 text-lg font-semibold text-white border-white/20 hover:bg-white/10 hover:text-white rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              <Palette className="mr-2 h-5 w-5" />
              View Portfolio
            </Button>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 md:mt-32 relative"
        >
          <div className="relative z-10 max-w-5xl mx-auto bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            <div className="aspect-video bg-gray-800/50 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <Home className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Your Dream Home Awaits</h3>
                <p className="text-gray-300">Experience the transformation with our expert design services</p>
              </div>
            </div>
          </div>
          
          <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-purple-500/20 rounded-full filter blur-3xl"></div>
          <div className="absolute -top-6 -right-6 w-60 h-60 bg-pink-500/20 rounded-full filter blur-3xl"></div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="flex flex-col items-center text-gray-400"
        >
          <span className="text-sm mb-1">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="w-1 h-2 bg-gray-400 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
