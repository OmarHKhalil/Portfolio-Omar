'use client';

import { IconType } from 'react-icons';
import { 
  SiPython, SiPandas, SiScikitlearn, SiPytorch, 
  SiNodedotjs, SiExpress, SiMongodb, SiFastapi, 
  SiPostman, SiJupyter, SiGooglecolab, SiGit, 
  SiGithub // 💡 تم تصحيحها هنا بحرف h صغير في النهاية
} from 'react-icons/si';
import { 
  Brain, Cpu, Database, Network, LineChart, 
  Layers, Wrench, Terminal, Users, Lightbulb, 
  MessageSquare, Sliders, CheckCircle2, ShieldCheck,
  BrainCircuit
} from 'lucide-react';

export interface SkillItem {
  name: string;
  icon: IconType;
}

export interface SkillCategory {
  category: string;
  skills: SkillItem[];
}

export const skills: SkillCategory[] = [
  {
    category: 'Machine Learning',
    skills: [
      { name: 'Python', icon: SiPython },
      { name: 'Pandas', icon: SiPandas },
      { name: 'Data Visualization', icon: LineChart },
      { name: 'Data Preprocessing & Cleaning', icon: Sliders },
      { name: 'Feature Engineering', icon: Brain },
      { name: 'Scikit-learn', icon: SiScikitlearn },
      { name: 'Hyperparameter Tuning', icon: CheckCircle2 },
      { name: 'Model Selection', icon: Network },
      { name: 'Model Evaluation', icon: ShieldCheck },
    ],
  },
  {
    category: 'Deep Learning',
    skills: [
      { name: 'PyTorch', icon: SiPytorch },
      { name: 'Neural Networks', icon: Layers },
      { name: 'Computer Vision', icon: Cpu },
      { name: 'Object Detection', icon: ShieldCheck },
      { name: 'Ultralytics(YOLOv8)', icon: SiPytorch },
      { name: 'Transfer Learning', icon: Network },
      { name: 'Fine Tuning', icon: Sliders },
    ],
  },
  {
    category: 'Generative AI & Advanced Agents',
    skills: [
      { name: 'Large Language Models (LLMs)', icon: BrainCircuit },
      { name: 'Transformers', icon: Layers },
      { name: 'Prompt Engineering', icon: MessageSquare },
      { name: 'Retrieval-Augmented Generation (RAG)', icon: Database },
      { name: 'Vector Databases & Embeddings', icon: Network },
      { name: 'AI Agents (LangChain & LangGraph)', icon: Brain },
    ],
  },
  {
    category: 'Backend Development',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Express.js', icon: SiExpress },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Mongoose', icon: Database },
      { name: 'SQL', icon: Database },
      { name: 'Database Design', icon: Network },
    ],
  },
  {
    category: 'Deployment',
    skills: [
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'REST APIs', icon: Terminal },
      { name: 'Postman', icon: SiPostman },
    ],
  },
  {
    category: 'Tools & Frameworks',
    skills: [
      { name: 'Jupyter Notebook', icon: SiJupyter },
      { name: 'Google Colab', icon: SiGooglecolab },
      { name: 'Git & GitHub', icon: SiGithub }, // 💡 تم ربطها هنا بالـ Icon الصحيح ليتم قراءتها
      { name: 'FastAPI', icon: SiFastapi },
    ],
  },
  {
    category: 'Soft Skills',
    skills: [
      { name: 'Problem Solving', icon: Wrench },
      { name: 'Communication', icon: MessageSquare },
      { name: 'Continuous Learning', icon: Brain },
      { name: 'Teamwork & Collaboration', icon: Users },
      { name: 'Time Management & Organization', icon: CheckCircle2 },
      { name: 'Innovation & Creativity', icon: Lightbulb }
    ],
  },
];

export function getSkillsByCategory(category: string) {
  const skillCategory = skills.find((s) => s.category === category);
  return skillCategory?.skills || [];
}

export function getAllSkills() {
  return skills.flatMap((s) => s.skills);
}