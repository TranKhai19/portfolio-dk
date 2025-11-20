import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Car, Scale, Music } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: "Car Damage Detection",
    description: "Automated vehicle inspection system using YOLOv8 fine-tuned on custom datasets. Detects dents, scratches, and glass cracks with 94% mAP. Deployed via FastAPI.",
    tech: ["YOLOv8", "PyTorch", "OpenCV", "FastAPI", "Docker"],
    category: "CV",
    imageUrl: "https://picsum.photos/id/1072/600/400",
    repoLink: "#",
    demoLink: "#"
  },
  {
    id: 2,
    title: "Legal RAG Chatbot",
    description: "An enterprise-grade RAG system for querying complex legal documents. Uses LangChain, vector database (Pinecone), and GPT-4 for accurate citations.",
    tech: ["LangChain", "OpenAI API", "Pinecone", "React", "Next.js"],
    category: "NLP",
    imageUrl: "https://picsum.photos/id/192/600/400",
    repoLink: "#",
    demoLink: "#"
  },
  {
    id: 3,
    title: "AI Music Generator",
    description: "A generative model based on AudioLDM that creates lofi hip-hop tracks from text descriptions. Features a React frontend for real-time generation and mixing.",
    tech: ["Diffusers", "Hugging Face", "React", "Web Audio API"],
    category: "GenAI",
    imageUrl: "https://picsum.photos/id/39/600/400",
    repoLink: "#",
    demoLink: "#"
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            <span className="text-primary">/</span> Featured Projects
          </h2>
          <p className="text-slate-400 max-w-2xl">
            A selection of my recent work in AI/ML engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-xl bg-surface border border-white/10 overflow-hidden hover:border-primary/50 transition-colors"
            >
              {/* Image Area */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay" />
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 text-xs font-bold bg-black/70 backdrop-blur text-white border border-white/10 rounded-full uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs font-mono text-primary/80 bg-primary/10 px-2 py-1 rounded border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-white/5">
                  <a 
                    href={project.repoLink} 
                    className="flex items-center gap-2 text-sm text-white hover:text-primary transition-colors"
                  >
                    <Github size={16} /> Code
                  </a>
                  <a 
                    href={project.demoLink}
                    className="flex items-center gap-2 text-sm text-white hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};