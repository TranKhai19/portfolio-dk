// Fix: Import React to resolve "Cannot find namespace 'React'" error
import React from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  category: 'CV' | 'NLP' | 'IOT';
  imageUrl: string;
  demoLink?: string;
  repoLink?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface TechSkill {
  name: string;
  icon?: React.ReactNode;
}