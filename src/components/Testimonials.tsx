import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Testimonial {
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
  project: string;
}

const Testimonials = (): JSX.Element => {
  const testimonials: Testimonial[] = [
    {
      name: 'Priya Sharma',
      role: 'Homeowner',
      image: 'Indian woman in modern apartment',
      rating: 5,
      text: 'The Grooveline Interio turned our flat into a beautiful sanctuary! Their understanding of Vastu and modern aesthetics is remarkable. Every corner now tells a story.',
      project: 'Contemporary Apartment'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Startup Founder',
      image: 'Indian man in vibrant co-working space',
      rating: 5,
      text: 'Fantastic work on our new office! The team created an energetic and collaborative environment. Our team loves the new space, and it truly reflects our brand.',
      project: 'Dynamic Office Space'
    },
    {
      name: 'Aisha Khan',
      role: 'Fashion Boutique Owner',
      image: 'Indian woman in chic boutique',
      rating: 5,
      text: 'I am thrilled with my boutique\'s new look! They captured the essence of my brand perfectly. The design is elegant, inviting, and has boosted sales!',
      project: 'Luxury Fashion Boutique'
    },
    {
      name: 'Vikram Singh',
      role: 'Restaurant Owner',
      image: 'Indian man in traditional yet modern restaurant',
      rating: 5,
      text: 'Our restaurant\'s ambiance is now the talk of the town, thanks to The Grooveline Interio. They blended heritage with modern flair beautifully.',
      project: 'Heritage Fusion Restaurant'
    },
    {
      name: 'Meera Reddy',
      role: 'Homeowner',
      image: 'Indian family in spacious living room',
      rating: 5,
      text: 'From the initial design to the final touches, their professionalism was top-notch. Our home is now a perfect blend of comfort and luxury. Highly recommended!',
      project: 'Luxury Villa Interior'
    },
    {
      name: 'Arjun Desai',
      role: 'Hotelier',
      image: 'Indian man in beachfront hotel lobby',
      rating: 5,
      text: 'The resort\'s new look has exceeded our expectations. The design perfectly captures the spirit while offering modern luxury. Our guests are delighted!',
      project: 'Beach Resort Renovation'
    }
  ];

  const renderStars = (rating: number): JSX.Element => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="mb-4">
                    <Quote className="h-8 w-8 text-purple-500 opacity-20 transform -scale-x-100" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow">
                    {testimonial.text}
                  </p>
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {testimonial.role}
                        </p>
                      </div>
                      <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-full">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                          {testimonial.name.charAt(0)}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      {renderStars(testimonial.rating)}
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.project}
                      </span>
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
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Ready to transform your space?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Join our growing list of satisfied clients and experience the difference of working with a team that truly cares about your vision.
          </p>
          <a 
            href="#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
          >
            Schedule a Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
