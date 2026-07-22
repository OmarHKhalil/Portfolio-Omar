'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Code2 } from 'lucide-react';
import { getFeaturedProjects } from '@/lib/projects';

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="projects" className="scroll-mt-24 bg-slate-900/40 px-4 py-16 sm:scroll-mt-28 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-10 text-center sm:mb-16">
          <h3 className="mb-3 inline-flex rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-sm font-medium text-cyan-400 sm:mb-4">Featured Projects</h3>

          <p className="mx-auto max-w-2xl text-base text-slate-400 sm:text-lg">A snapshot of my most impactful work in machine learning, computer vision, generative AI, and end-to-end AI systems.</p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-10 grid grid-cols-1 gap-6 sm:mb-12 sm:gap-8">
          {featured.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative min-w-0 w-full max-w-full overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/70 transition-all duration-300 hover:border-blue-500"
            >
              
              {/* تم حذف الحاوية الجانبية الملونة السابقة بالكامل وتوسيع حاوية البيانات لتأخذ المساحة الكاملة للكرت */}
              <div className="flex w-full min-w-0 flex-col justify-between p-4 sm:p-6 lg:p-8">
                <div className="space-y-3">
                  <div className="mb-3 flex min-w-0 flex-wrap items-center gap-2 sm:gap-3">
                    <span className="min-w-0 rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-slate-400 sm:text-xs">{project.complexity}</span>
                    <span className="min-w-0 rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-slate-400 sm:text-xs">{project.category}</span>
                  </div>

                  <h3 className="min-w-0 mb-1 text-sm font-bold text-slate-100 transition-colors group-hover:text-blue-400 sm:text-sm">{project.title}</h3>
                  <p className="min-w-0 mb-2 text-[11px] leading-relaxed text-slate-400 sm:text-xs">{project.description}</p>

{project.contributions && project.contributions.length > 0 && (
  <div className="mt-4">
    <h4 className="mb-2 text-sm font-semibold text-slate-300">
      My Contributions
    </h4>

    <ul className="space-y-2">
      {project.contributions.map((contribution, i) => (
        <li
          key={i}
          className="flex gap-2 text-[11px] leading-relaxed text-slate-400 sm:text-xs"
        >
          <span className="mt-1 text-blue-400">•</span>
          <span>{contribution}</span>
        </li>
      ))}
    </ul>
  </div>
)}
                  {project.metrics && (
                    <div className="mb-2 flex min-w-0 flex-col gap-1.5 border-y border-slate-800 py-2 sm:mb-2 sm:flex-row sm:items-stretch sm:justify-center sm:gap-2 sm:py-2">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-2 sm:min-w-[120px] sm:flex-1 sm:flex-col sm:items-center sm:justify-start sm:text-center">
                          <p className="text-[11px] uppercase tracking-wide text-slate-500">{metric.label}</p>
                          <p className="text-sm font-semibold text-blue-400 sm:mt-1">{metric.value}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <p className="mb-2 text-sm font-semibold text-slate-500">Technologies</p>
                  <div className="mb-4 flex min-w-0 flex-wrap gap-2 sm:mb-5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="min-w-0 rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1 text-[11px] font-medium text-slate-300 sm:text-xs">{tech}</span>
                    ))}
                    {project.technologies.length > 4 && <span className="rounded-full bg-slate-900/70 px-3 py-1 text-[11px] font-medium text-slate-400 sm:text-xs">+{project.technologies.length - 4}</span>}
                  </div>

                  <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap">
                    {project.links.github && (
                      <motion.a href={project.links.github} target="_blank" rel="noreferrer" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-blue-500 hover:text-blue-400">
                        <Code2 className="h-4 w-4" /> Code
                      </motion.a>
                    )}
                    {project.links.demo && (
                      <motion.a href={project.links.demo} target="_blank" rel="noreferrer" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:from-blue-400 hover:to-violet-500">
                        <ExternalLink className="h-4 w-4" /> Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="flex justify-center">
          <motion.a href="#all-projects" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition-colors hover:border-blue-500 hover:text-blue-400 sm:px-8 sm:text-base">
            Explore All Projects <ArrowRight className="h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}