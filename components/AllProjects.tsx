'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const repositoryCards = [
  {
    title: 'Multi Agents Projects',
    description: 'Agent-based systems focused on orchestration, planning, and multi-step reasoning.',
    link: 'https://github.com/OmarHKhalil/AI-Agents-Projects.git',
    accent: 'from-cyan-500/20 via-blue-500/20 to-violet-500/20',
  },
  {
    title: 'LLM & RAG Projects',
    description: 'Retrieval-augmented generation systems and LLM applications for knowledge access.',
    link: 'https://github.com/OmarHKhalil/LLM-RAG-Projects.git',
    accent: 'from-violet-500/20 via-fuchsia-500/20 to-cyan-500/20',
  },
  {
    title: 'Deep Learning Projects',
    description: 'Advanced neural networks and deep learning experiments for computer vision tasks.',
    link: 'https://github.com/OmarHKhalil/Deep-Learning-Projects.git',
    accent: 'from-blue-500/20 via-cyan-500/20 to-emerald-500/20',
  },
  {
    title: 'Machine Learning Projects',
    description: 'Practical ML pipelines for prediction, recommendation, and more.',
    link: 'https://github.com/OmarHKhalil/Machine-Learning-Projects.git',
    accent: 'from-emerald-500/20 via-lime-500/20 to-cyan-500/20',
  },
  {
    title: 'University Projects',
    description: 'Academic and research-oriented projects that shaped the foundation of this portfolio.',
    link: 'https://github.com/OmarHKhalil/University-Projects.git',
    accent: 'from-amber-500/20 via-orange-500/20 to-rose-500/20',
  },
];

export function AllProjects() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % repositoryCards.length);
    }, 10000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="all-projects" className="scroll-mt-24 px-4 py-16 sm:scroll-mt-28 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-8 sm:mb-10">
          <h3 className="mb-3 inline-flex rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-sm font-medium text-cyan-400 sm:mb-4">Projects Gallery</h3>
          <h2 className="mb-3 text-3xl font-bold sm:mb-4 sm:text-4xl lg:text-5xl">More projects, more depth</h2>
          <p className="max-w-2xl text-base text-slate-400 sm:text-lg">A broader look at the AI work I&apos;ve built across research, deployment, and experimentation.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.15, duration: 0.6 }} viewport={{ once: true }} className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/70 p-3 sm:p-4">
          <div className="relative h-[280px] overflow-hidden sm:h-[340px]">
            {repositoryCards.map((card, index) => {
              const isActive = index === activeIndex;
              const offset = (index - activeIndex) * 100;

              return (
                <motion.div
                  key={card.title}
                  initial={false}
                  animate={{
                    x: `${offset}%`,
                    opacity: isActive ? 1 : 0.3,
                    scale: isActive ? 1 : 0.95,
                  }}
                  transition={{ duration: 0.7, ease: 'easeInOut' }}
                  className={`absolute inset-0 flex items-center justify-center p-2 sm:p-4 ${isActive ? 'pointer-events-auto' : 'pointer-events-none'}`}
                >
                  <motion.a
                    href={card.link}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -4, scale: 1.01 }}
                    className="group flex h-full w-full max-w-5xl flex-col justify-between overflow-hidden rounded-[1.75rem] border border-slate-800 bg-slate-950/80 p-6 shadow-2xl shadow-black/30 transition-all hover:border-cyan-400 sm:p-8 lg:p-10"
                  >
                    <div className="min-w-0">
                      <div className={`mb-4 flex h-24 items-center justify-center rounded-[1.25rem] bg-gradient-to-br ${card.accent} p-4 sm:h-28`}>
                        <div className="rounded-full border border-white/20 bg-slate-950/70 px-4 py-2 text-center text-sm font-semibold uppercase tracking-wide text-slate-100 sm:text-base">
                          {card.title}
                        </div>
                      </div>
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <span className="inline-flex rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-slate-400">
                          Repository
                        </span>
                        <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-cyan-300 transition-colors group-hover:border-cyan-400 group-hover:bg-cyan-500/20">
                          Explore <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                      <p className="max-w-2xl break-words text-sm leading-relaxed text-slate-400 sm:text-base">{card.description}</p>
                    </div>
                  </motion.a>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-4 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setActiveIndex((current) => (current - 1 + repositoryCards.length) % repositoryCards.length)}
              aria-label="Previous project"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-950/80 text-slate-200 transition-colors hover:border-cyan-400 hover:text-cyan-300"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>

            <div className="flex flex-1 justify-center gap-2">
              {repositoryCards.map((card, index) => (
                <button
                  key={card.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show ${card.title}`}
                  className={`h-2.5 rounded-full transition-all ${index === activeIndex ? 'w-8 bg-cyan-400' : 'w-2.5 bg-slate-700 hover:bg-slate-500'}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => setActiveIndex((current) => (current + 1) % repositoryCards.length)}
              aria-label="Next project"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-950/80 text-slate-200 transition-colors hover:border-cyan-400 hover:text-cyan-300"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
