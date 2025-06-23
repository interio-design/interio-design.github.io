import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// High-quality interior design images from Unsplash (1920px width, 80% quality)
const designProjects = [
  {
    id: 1,
    title: 'Modern Living Room',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60',
    alt: 'Elegant modern living room with minimalist furniture',
  },
  {
    id: 2,
    title: 'Luxury Bedroom',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1586023492125-27c2e0386ec4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1586023492125-27c2e0386ec4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60',
    alt: 'Luxurious bedroom with plush bedding and warm lighting',
  },
  {
    id: 3,
    title: 'Contemporary Kitchen',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1556911220-e6a5b6b1e1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1556911220-e6a5b6b1e1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60',
    alt: 'Sleek contemporary kitchen with high-end appliances',
  },
  {
    id: 4,
    title: 'Cozy Reading Nook',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60',
    alt: 'Cozy reading nook with comfortable seating and natural light',
  },
  {
    id: 5,
    title: 'Elegant Dining Area',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60',
    alt: 'Elegant dining area with modern chandelier',
  },
  {
    id: 6,
    title: 'Modern Office Space',
    category: 'Commercial',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60',
    alt: 'Contemporary office space with ergonomic furniture',
  },
  {
    id: 7,
    title: 'Luxury Bathroom',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1618222288422-511a614a6dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1618222288422-511a614a6dfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60',
    alt: 'Luxury bathroom with modern fixtures and natural stone',
  },
  {
    id: 8,
    title: 'Minimalist Apartment',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1618221195710-4d77f3d3f8b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    thumbnail: 'https://images.unsplash.com/photo-1618221195710-4d77f3d3f8b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=60',
    alt: 'Minimalist apartment with clean lines and neutral colors',
  },
];

const DesignGallery = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 rounded-full bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700/50 mb-4"
          >
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Our Portfolio</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Explore Our Design
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Masterpieces</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Discover how we transform spaces into stunning, functional, and inspiring environments that reflect your unique style.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-800 overflow-hidden relative">
                {/* Thumbnail (low quality) */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-opacity duration-300 group-hover:opacity-0"
                  style={{ 
                    backgroundImage: `url(${project.thumbnail})`,
                    filter: 'blur(5px)'
                  }}
                />
                
                {/* Full quality image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
                  style={{ 
                    backgroundImage: `url(${project.image})`,
                    opacity: 0,
                    transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out'
                  }}
                  onLoad={(e) => {
                    // Fade in the full quality image once loaded
                    e.currentTarget.style.opacity = '1';
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-purple-600 rounded-full mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <Button
                    variant="ghost"
                    className="text-white hover:bg-white/10 p-0 h-auto"
                  >
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Button
            variant="outline"
            className="px-8 py-6 text-lg font-semibold rounded-xl border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-colors duration-300"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default DesignGallery;
