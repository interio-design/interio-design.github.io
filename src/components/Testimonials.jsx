import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Homeowner, Mumbai',
      image: 'Indian woman in modern apartment',
      rating: 5,
      text: 'The Grooveline Interio turned our flat into a beautiful sanctuary! Their understanding of Vastu and modern aesthetics is remarkable. Every corner now tells a story.',
      project: 'Contemporary Mumbai Apartment'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Startup Founder, Bangalore',
      image: 'Indian man in vibrant co-working space',
      rating: 5,
      text: 'Fantastic work on our new office! The team created an energetic and collaborative environment. Our team loves the new space, and it truly reflects our brand.',
      project: 'Dynamic Startup Office'
    },
    {
      name: 'Aisha Khan',
      role: 'Fashion Boutique Owner, Delhi',
      image: 'Indian woman in chic boutique',
      rating: 5,
      text: 'I am thrilled with my boutique\'s new look! They captured the essence of my brand perfectly. The design is elegant, inviting, and has boosted sales!',
      project: 'Luxury Fashion Boutique'
    },
    {
      name: 'Vikram Singh',
      role: 'Restaurant Owner, Jaipur',
      image: 'Indian man in traditional yet modern restaurant',
      rating: 5,
      text: 'Our restaurant\'s ambiance is now the talk of the town, thanks to The Grooveline Interio. They blended Rajasthani heritage with modern flair beautifully.',
      project: 'Heritage Fusion Restaurant'
    },
    {
      name: 'Meera Reddy',
      role: 'Homeowner, Hyderabad',
      image: 'Indian family in spacious living room',
      rating: 5,
      text: 'From the initial design to the final touches, their professionalism was top-notch. Our home is now a perfect blend of comfort and luxury. Highly recommended!',
      project: 'Luxury Villa Interior'
    },
    {
      name: 'Arjun Desai',
      role: 'Hotelier, Goa',
      image: 'Indian man in stylish beach resort lobby',
      rating: 5,
      text: 'The resort interiors are stunning! The Grooveline team understood our vision for a tranquil yet luxurious coastal retreat. Our guests are loving it!',
      project: 'Boutique Beach Resort'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600 fill-gray-600'}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-gray-100">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients across India have to say 
            about their experience with The Grooveline Interio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gray-800/80 backdrop-blur-sm border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 card-hover">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Quote className="text-purple-400" size={32} />
                    <div className="flex space-x-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                      <img 
                        className="w-full h-full object-cover"
                        alt={`${testimonial.name} - ${testimonial.image}`}
                       src="https://images.unsplash.com/photo-1467197894731-a3ec7e0d7cb8" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-100">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                      <p className="text-xs text-purple-400 font-medium">{testimonial.project}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">98%</div>
              <div className="text-sm text-gray-400">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">25+</div>
              <div className="text-sm text-gray-400">Design Awards</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;