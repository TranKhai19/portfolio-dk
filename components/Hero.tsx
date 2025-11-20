import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Download, Brain, Sparkles } from 'lucide-react';

const TYPING_TEXTS = [
  "Building the future with AI.",
  "Architecting Neural Networks.",
  "Solving Problems with Deep Learning."
];

export const Hero: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Typewriter Logic
  useEffect(() => {
    if (textIndex >= TYPING_TEXTS.length) {
      setTextIndex(0);
      return;
    }

    const currentText = TYPING_TEXTS[textIndex];

    if (subIndex === currentText.length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000); // Wait at end
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setTextIndex((prev) => (prev + 1) % TYPING_TEXTS.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, textIndex, reverse]);

  // Blinking Cursor
  useEffect(() => {
    const timeout2 = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(timeout2);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for new projects
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Trần Duy Khải</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-12 md:h-16"
          >
            <h2 className="text-2xl md:text-4xl font-mono text-slate-400">
              {`${TYPING_TEXTS[textIndex].substring(0, subIndex)}`}
              <span className={`${blink ? 'opacity-100' : 'opacity-0'} text-primary`}>|</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed"
          >
            Junior AI Engineer specializing in Computer Vision and Large Language Models. 
            I bridge the gap between cutting-edge research and scalable production systems.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#projects" 
              className="group relative px-8 py-4 bg-white text-black font-bold rounded hover:bg-primary hover:text-black transition-colors flex items-center justify-center gap-2"
            >
              View Projects
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded hover:bg-white/5 transition-colors flex items-center justify-center gap-2 group"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -translate-x-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Abstract Code/Data Overlay */}
      <div className="absolute top-20 right-10 md:right-32 opacity-20 font-mono text-xs text-primary hidden lg:block">
        <div className="flex flex-col gap-1">
           <p>class NeuralNetwork(nn.Module):</p>
           <p className="pl-4">def __init__(self):</p>
           <p className="pl-8">super().__init__()</p>
           <p className="pl-8">self.conv1 = nn.Conv2d(1, 32, 3, 1)</p>
           <p className="pl-8">self.dropout = nn.Dropout(0.25)</p>
           <p className="pl-4">def forward(self, x):</p>
           <p className="pl-8">x = self.conv1(x)</p>
           <p className="pl-8">return F.log_softmax(x, dim=1)</p>
        </div>
      </div>
    </section>
  );
};