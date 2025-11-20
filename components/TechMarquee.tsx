import React from 'react';

const technologies = [
  "Python", "TensorFlow", "PyTorch", "OpenCV", "LangChain", 
  "Docker", "Kubernetes", "AWS SageMaker", "Hugging Face", 
  "React", "TypeScript", "FastAPI", "PostgreSQL", "MongoDB", "Redis"
];

export const TechMarquee: React.FC = () => {
  return (
    <div className="w-full bg-surface/50 border-y border-white/5 py-8 overflow-hidden relative">
      {/* Gradient fade on sides */}
      <div className="absolute left-0 top-0 z-10 h-full w-20 md:w-40 bg-gradient-to-r from-background to-transparent" />
      <div className="absolute right-0 top-0 z-10 h-full w-20 md:w-40 bg-gradient-to-l from-background to-transparent" />

      <div className="flex w-[200%] animate-marquee group hover:[animation-play-state:paused]">
        {/* First Set */}
        <div className="flex w-1/2 justify-around min-w-max gap-12 px-6">
          {technologies.map((tech, index) => (
            <div key={`t1-${index}`} className="flex items-center gap-2 text-slate-400 font-mono text-lg font-bold uppercase tracking-wider hover:text-primary transition-colors cursor-default">
              <span className="text-primary opacity-50">#</span>{tech}
            </div>
          ))}
        </div>
        {/* Duplicate Set for seamless loop */}
        <div className="flex w-1/2 justify-around min-w-max gap-12 px-6">
          {technologies.map((tech, index) => (
            <div key={`t2-${index}`} className="flex items-center gap-2 text-slate-400 font-mono text-lg font-bold uppercase tracking-wider hover:text-primary transition-colors cursor-default">
              <span className="text-primary opacity-50">#</span>{tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};