import { ReactElement, useEffect } from 'react';
import { Toaster } from '@/components/ui/toaster';

// Components
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import DesignGallery from '@/components/DesignGallery';
import ProcessSection from '@/components/ProcessSection';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App(): ReactElement {

  // Add dark class to ensure dark mode is always applied
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <Header />
      <main>
        <Hero />
        <DesignGallery />
        <ProcessSection />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;