'use client';

import { motion } from 'framer-motion';
import { skills } from '@/lib/skills';

export function Skills() {
  return (
    <section id="skills" className="grid min-h-screen place-items-center scroll-mt-24 bg-slate-950/60 px-4 py-20 sm:scroll-mt-28 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl w-full flex flex-col items-center justify-center">
        
        {/* الحاوية العلوية للنصوص */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-10 flex flex-col items-center text-center sm:mb-16">
          <h3 className="mb-3 inline-flex rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-sm font-medium text-cyan-400 sm:mb-4">All Skills</h3>
        </motion.div>

        {/* شبكة الكروت */}
        <div className="w-full flex justify-center">
          <div className="grid w-full max-w-6xl gap-8 sm:grid-cols-2 xl:grid-cols-4 items-stretch">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group w-full flex flex-col rounded-3xl border border-slate-800 bg-slate-900/70 p-6 lg:p-8 text-center transition-all hover:border-blue-500 hover:bg-slate-900"
              >
                {/* العنوان الرئيسي للبلوك */}
                <h3 className="mb-8 text-lg font-semibold text-slate-100 tracking-wide">{skill.category}</h3>
                
                {/* التعداد البرمجي - منير وثابت دائماً */}
                <ul className="space-y-4 text-sm sm:text-base text-left flex flex-col items-start pl-2 w-full h-full">
                  {skill.skills.map((item) => {
                    const Icon = item.icon;
                    return (
                      <li key={item.name} className="flex items-center gap-3 w-full">
                        {/* 💡 تم تثبيت اللون text-cyan-400 هنا لتصبح الأيقونة فاتحة دائماً */}
                        <Icon className="h-4 w-4 shrink-0 text-cyan-400" />
                        
                        {/* 💡 تم تثبيت اللون text-slate-200 هنا ليصبح النص واضحاً ومقروءاً دائماً */}
                        <span className="text-slate-200 font-medium">{item.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}