'use client';

import { motion } from 'framer-motion';
import { aboutContent } from '@/lib/about';

export function About() {
  return (
    <section 
      id="about" 
      className="grid min-h-screen place-items-center scroll-mt-24 px-4 py-16 sm:scroll-mt-28 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-6xl w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          viewport={{ once: true }} 
          className="w-full text-center"
        >
          {/* الشارة العلوية */}
          <h3 className="mb-3 inline-flex rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-sm font-medium text-cyan-400 sm:mb-4">
            About Me
          </h3>

          <div className="h-5 sm:h-5 block" aria-hidden="true"></div>

          <div className="grid gap-8 grid-cols-1 place-items-center mt-2">
            
            {/* الحاوية الرئيسية */}
            <div className="mx-auto w-full max-w-3xl text-left bg-slate-950/30 border border-slate-900/50 p-6 sm:p-8 rounded-2xl shadow-xl backdrop-blur-sm">
              
              {/* 💡 تم إضافة text-justify هنا لجعله مشدوداً ومتساوياً من الطرفين تماماً */}
              <div className="space-y-5 text-sm leading-relaxed text-slate-400 text-justify sm:space-y-6 sm:text-base md:text-lg">
                <motion.p 
                  initial={{ opacity: 0 }} 
                  whileInView={{ opacity: 1 }} 
                  transition={{ delay: 0.1, duration: 0.6 }} 
                  viewport={{ once: true }}
                  className="tracking-wide"
                >
                  {aboutContent.intro}
                </motion.p>

                <motion.p 
                  initial={{ opacity: 0 }} 
                  whileInView={{ opacity: 1 }} 
                  transition={{ delay: 0.2, duration: 0.6 }} 
                  viewport={{ once: true }}
                  className="tracking-wide"
                >
                  {aboutContent.focus}
                </motion.p>

                {/* فاصل ناعم */}
                <div className="h-2 border-t border-slate-900 mt-6 pt-4" aria-hidden="true"></div>

                <motion.p 
                  initial={{ opacity: 0 }} 
                  whileInView={{ opacity: 1 }} 
                  transition={{ delay: 0.3, duration: 0.6 }} 
                  viewport={{ once: true }} 
                  className="text-blue-400 font-medium sm:text-base md:text-lg tracking-wide"
                >
                  {aboutContent.currentlyLooking}
                </motion.p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}