import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 bg-black py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Alex Chen. Built with React, Tailwind & Framer Motion.
        </p>
        <p className="text-xs text-slate-700 mt-2 font-mono">
          System.exit(0)
        </p>
      </div>
    </footer>
  );
};