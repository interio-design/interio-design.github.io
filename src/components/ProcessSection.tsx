import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Lightbulb, Ruler, Palette, Hand as HandIcon, Hammer, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProcessSection = (): JSX.Element => {
  const scrollToContact = (): void => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const processSteps = [
    {
      id: 1,
      title: 'Initial Consultation',
      description: 'We discuss your vision, requirements, and budget to understand your unique style and needs.',
      icon: <Lightbulb className="w-8 h-8 text-white" />,
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 2,
      title: 'Space Planning',
      description: 'Our team creates detailed floor plans and 3D visualizations to bring your vision to life.',
      icon: <Ruler className="w-8 h-8 text-white" />,
      color: 'from-blue-500 to-cyan-400',
    },
    {
      id: 3,
      title: 'Design Development',
      description: 'We refine the design, select materials, and finalize the color schemes and furnishings.',
      icon: <Palette className="w-8 h-8 text-white" />,
      color: 'from-amber-500 to-yellow-400',
    },
    {
      id: 4,
      title: 'Approval & Finalization',
      description: 'We present the final design for your approval and make any necessary adjustments.',
      icon: <HandIcon className="w-8 h-8 text-white" />,
      color: 'from-emerald-500 to-teal-400',
    },
    {
      id: 5,
      title: 'Execution',
      description: 'Our skilled team brings the design to life with meticulous attention to detail.',
      icon: <Hammer className="w-8 h-8 text-white" />,
      color: 'from-rose-500 to-pink-400',
    },
    {
      id: 6,
      title: 'Project Handover',
      description: 'We reveal your transformed space and ensure every detail meets your expectations.',
      icon: <Home className="w-8 h-8 text-white" />,
      color: 'from-indigo-500 to-purple-400',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/50 mb-4"
          >
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Our Process</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Our Seamless
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Design Process</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4 leading-relaxed"
          >
            From concept to completion, we guide you through every step of transforming your space into a masterpiece.
          </motion.p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group h-full border border-gray-100 dark:border-gray-700/50 hover:-translate-y-1"
                >
                  {/* Content */}
                  <div className="flex flex-col h-full">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r ${step.color} mb-4 shadow-md`}>
                      {React.cloneElement(step.icon, { className: 'w-5 h-5 text-white' })}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 bg-gradient-to-r bg-clip-text text-transparent ${step.color.split(' ')[0]} ${step.color.split(' ')[1].replace('to-', '')}">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Removed timeline elements for cleaner grid layout */}
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <Button
            onClick={scrollToContact}
            className="group px-8 py-4 text-base font-semibold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 hover:-translate-y-0.5"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
