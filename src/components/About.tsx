import { motion } from 'framer-motion';
import { Award, Users, Lightbulb, Heart } from 'lucide-react';

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const About = (): JSX.Element => {
  const features: Feature[] = [
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
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 bg-gray-800/50 backdrop-blur-sm p-1 rounded-2xl overflow-hidden">
              <div className="relative aspect-video bg-gray-700/30 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-[url('/placeholder-about.jpg')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Our Story</h3>
                    <p className="text-gray-300">Designing beautiful spaces since 2008</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-purple-500/20 rounded-full filter blur-3xl -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              At The Grooveline Interio, we believe that great design has the power to transform lives. 
              Our approach combines innovative thinking with meticulous attention to detail, ensuring 
              every space we design is as functional as it is beautiful.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{feature.title}</h4>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Ready to Transform Your Space?
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Let's create something extraordinary together. Schedule a free consultation with our design experts today.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                Book a Free Consultation
              </button>
            </div>
          </div>
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-purple-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-pink-500/10 rounded-full filter blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
