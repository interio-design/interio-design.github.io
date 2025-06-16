import { motion } from 'framer-motion';
import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  href: string;
}

interface NavLink {
  name: string;
  href: string;
}

const Footer = (): JSX.Element => {
  const { toast } = useToast();

  const socialLinks: SocialLink[] = [
    { icon: Facebook, name: 'Facebook', href: '#' },
    { icon: Instagram, name: 'Instagram', href: '#' },
    { icon: Twitter, name: 'Twitter', href: '#' },
    { icon: Linkedin, name: 'LinkedIn', href: '#' }
  ];

  const quickLinks: NavLink[] = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  const services: string[] = [
    'Residential Design',
    'Commercial Spaces',
    'Vastu Compliant Design',
    'Modular Kitchens',
    'Office Interiors',
    'Consultation Services'
  ];

  const scrollToSection = (href: string): void => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSocialClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-950 via-purple-950 to-gray-950 text-gray-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                The Grooveline Interio
              </span>
            </div>
            <p className="text-gray-400">
              Creating beautiful, functional spaces that inspire and elevate your lifestyle.
              We bring your vision to life with innovative design solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    onClick={handleSocialClick}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500 mr-2"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <MapPin className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-white">Our Location</h4>
                  <p className="text-gray-400">123 Design Street, Mumbai, MH 400001, India</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-white">Phone</h4>
                  <p className="text-gray-400">+91 98765 43210</p>
                  <p className="text-gray-400">+91 22 1234 5678</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Mail className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-white">Email</h4>
                  <p className="text-gray-400">info@groovelineinterio.com</p>
                  <p className="text-gray-400">support@groovelineinterio.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} The Grooveline Interio. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="text-gray-500 hover:text-white text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="text-gray-500 hover:text-white text-sm transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="text-gray-500 hover:text-white text-sm transition-colors duration-300"
              >
                Sitemap
              </a>
            </div>
          </div>
          <div className="mt-4 text-center md:text-left">
            <p className="text-xs text-gray-600">
              Made with <Heart className="inline h-3 w-3 text-pink-500" /> in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
