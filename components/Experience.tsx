'use client';

import { motion } from 'framer-motion';
import { experience } from '@/lib/about';

export function Experience() {
  const currentExperience = experience[0];

  return (
    <section id="experience" className="scroll-mt-24 bg-slate-950/60 px-4 py-20 sm:scroll-mt-28 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10 flex flex-col items-center text-center sm:mb-14"
        >
          <h3 className="mb-3 inline-flex rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-sm font-medium text-cyan-400 sm:mb-4">
            Experience
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[1.5rem] border border-slate-800 bg-slate-900/70 p-5 shadow-xl shadow-slate-950/40 sm:p-8"
        >
          <div className="absolute inset-y-0 left-5 hidden w-px bg-gradient-to-b from-transparent via-cyan-400/80 to-transparent sm:block" />

          <div className="relative sm:pl-8">
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h4 className="text-2xl font-semibold text-slate-100 sm:text-3xl">
                {currentExperience.title}
              </h4>

              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 sm:text-sm">
                <span>{currentExperience.period}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
                <span>{currentExperience.location}</span>
              </div>
            </div>

            <ul className="space-y-4 text-sm leading-7 text-slate-300 sm:text-base">
              {currentExperience.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-400" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
