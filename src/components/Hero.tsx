import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Palette, ChevronRight, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const Hero = (): JSX.Element => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const heroImages = [
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80',
    'https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80',
    'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1800&q=80',
  ];

  const scrollToContact = (): void => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = (): void => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Auto-rotate background images
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentImage((prev) => (prev + 1) % heroImages.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, heroImages.length]);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Background Images */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `linear-gradient(to right, rgba(17, 24, 39, 0.8) 0%, rgba(17, 24, 39, 0.4) 100%), url(${heroImages[currentImage]})`,
            }}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              scale: 1.05,
              transition: { duration: 1.5, ease: [0.6, -0.05, 0.01, 0.99] }
            }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
          />
        </AnimatePresence>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 via-gray-900/70 to-gray-900/90"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(168, 85, 247, ${Math.random() * 0.2}) 0%, rgba(236, 72, 153, 0) 70%)`,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 100],
              rotate: [0, Math.random() * 360],
              scale: [1, 1 + Math.random() * 0.5],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6"
              >
                <Sparkles className="w-5 h-5 mr-2 text-yellow-400" />
                <span className="text-sm font-medium text-white/90">Premium Interior Design</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Transform Your Space with
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-pink-600 bg-clip-text text-transparent">
                  Modern Design
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl"
              >
                Create stunning interiors that inspire and elevate your living experience. 
                Our expert designers bring your vision to life with innovative solutions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button 
                  onClick={scrollToContact}
                  className="group px-8 py-6 text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/20"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  onClick={scrollToPortfolio}
                  variant="outline" 
                  className="px-8 py-6 text-lg font-semibold text-white border-white/30 hover:bg-white/10 hover:border-white/50 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                >
                  <Palette className="mr-2 h-5 w-5" />
                  View Our Work
                </Button>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-12 flex flex-wrap gap-8"
              >
                <div className="flex items-center">
                  <div className="mr-3">
                    <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center">
                      <Award className="h-4 w-4 text-pink-500" />
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Certified Designers</div>
                  </div>
                </div>
                {[
                  { number: '100+', label: 'Projects Completed' },
                  { number: '98%', label: 'Client Satisfaction' },
                ].map((stat, index) => (
                  <div key={index} className="flex items-center">
                    <div className="mr-3">
                      <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">{stat.number}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-2xl transform rotate-1">
                <div className="aspect-[3/4] bg-gray-800/50 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <Sparkles className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Your Dream Home Awaits</h3>
                    <p className="text-gray-300 mb-6">Let's create something extraordinary together</p>
                    <Button 
                      variant="outline" 
                      className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                      onClick={scrollToContact}
                    >
                      Start Your Project
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-purple-500/20 rounded-full filter blur-3xl"></div>
              <div className="absolute -top-6 -right-6 w-60 h-60 bg-pink-500/20 rounded-full filter blur-3xl"></div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div 
                className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-xl"
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [360, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: [0, 1, 1, 0],
          y: [20, 0, 0, -10],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatDelay: 1,
          ease: "easeInOut",
          times: [0, 0.2, 0.8, 1]
        }}
      >
        <div className="flex flex-col items-center group">
          <span className="text-sm text-gray-300 mb-2 group-hover:text-white transition-colors">Scroll to explore</span>
          <div className="w-8 h-12 border-2 border-gray-400/50 group-hover:border-white/80 rounded-2xl flex justify-center p-1 transition-colors">
            <motion.div
              animate={{ 
                y: [0, 10, 0],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="w-1 h-3 bg-white rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
