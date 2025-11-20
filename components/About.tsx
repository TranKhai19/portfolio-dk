import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Eye, Cpu, Database, Server, Code } from 'lucide-react';

const skills = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Natural Language Processing",
    desc: "LLM Fine-tuning, RAG pipelines, Sentiment Analysis using Transformers."
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "Computer Vision",
    desc: "Object Detection (YOLO), Segmentation, and Image Generation."
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Generative AI",
    desc: "Prompt Engineering, Stable Diffusion workflows, Agentic workflows."
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "MLOps",
    desc: "Deployment via Docker/K8s, Model Monitoring, CI/CD for ML."
  }
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            <span className="text-primary">/</span> About Me
          </h2>
          <p className="text-slate-400 max-w-2xl text-lg">
            I transform complex data into intelligent actions. With a background in mathematics 
            and computer science, I focus on building scalable AI systems that solve real-world problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-surface/50 border border-white/5 hover:border-primary/30 hover:bg-white/5 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats / Experience Bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10">
          {[
            { label: "Years Experience", value: "5+" },
            { label: "Projects Shipped", value: "30+" },
            { label: "Models Deployed", value: "12" },
            { label: "Research Papers", value: "03" }
          ].map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-bold text-white font-mono mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};