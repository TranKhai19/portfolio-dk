import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechMarquee } from './components/TechMarquee';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative bg-grid-pattern">
      {/* Decorative radial gradient background */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50 z-0" />
      
      <div className="relative z-10">
        <Navbar />
        
        <main>
          <Hero />
          <TechMarquee />
          <About />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-primary/20 border border-primary/50 text-primary hover:bg-primary hover:text-black rounded-full backdrop-blur-sm transition-all duration-300 z-50 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}