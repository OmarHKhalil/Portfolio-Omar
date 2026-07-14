'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { certifications } from '@/lib/about';

export function Certifications() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % certifications.length);
    }, 10000);

    return () => window.clearInterval(interval);
  }, []);

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % certifications.length);
  };

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + certifications.length) % certifications.length);
  };

  const activeCertification = certifications[activeIndex];

  return (
    <section id="certifications" className="scroll-mt-24 px-4 py-10 sm:scroll-mt-28 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* العناوين الرئيسية */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }} 
          viewport={{ once: true }} 
          className="mb-6 flex flex-col items-center text-center sm:mb-8"
        >
        <h3 className="mb-3 inline-flex rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-sm font-medium text-cyan-400 sm:mb-4">Certifications</h3>
        </motion.div>

        {/* الحاوية الرئيسية للشهادات */}
        <div className="mx-auto max-w-3xl rounded-[1.25rem] border border-slate-800 bg-slate-900/70 p-3 shadow-xl shadow-slate-950/40 sm:p-5">
          
          {/* سطر التحكم العلوي: يحتوي على سهم اليسار، اسم الشهادة الحالية بالمنتصف، وسهم اليمين */}
          <div className="mb-4 flex items-center justify-between gap-4">
            <button onClick={goToPrevious} aria-label="Previous certificate" className="flex-shrink-0 rounded-full border border-slate-700 bg-slate-950/70 p-2 text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300">
              <ArrowLeft className="h-3.5 w-3.5" />
            </button>
            
            <div className="text-center overflow-hidden">
              <p className="text-sm font-semibold text-cyan-300 truncate max-w-[200px] sm:max-w-xs md:max-w-md">
                {activeCertification.name}
              </p>
            </div>

            <button onClick={goToNext} aria-label="Next certificate" className="flex-shrink-0 rounded-full border border-slate-700 bg-slate-950/70 p-2 text-slate-200 transition hover:border-cyan-400 hover:text-cyan-300">
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* منطقة عرض الشهادة */}
          <div className="overflow-hidden rounded-[0.75rem] border border-slate-800 bg-slate-950/70">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCertification.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-3 p-3 sm:p-4 lg:p-5"
              >
                {/* 💡 التعديل هنا: تم تقليل الارتفاع الأقصى (max-h) قليلاً ليصبح متوازناً ومناسباً */}
                <img
                  src={activeCertification.file}
                  alt={activeCertification.name}
                  className="mx-auto h-auto w-full rounded-[0.5rem] object-contain max-h-[280px] sm:max-h-[350px] md:max-h-[400px] lg:max-h-[440px]"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* المؤشرات السفلية */}
          <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-1.5">
              {certifications.map((cert, index) => (
                <button
                  key={cert.name}
                  aria-label={`Show ${cert.name}`}
                  onClick={() => setActiveIndex(index)}
                  className={`h-1.5 rounded-full transition-all ${index === activeIndex ? 'w-5 bg-cyan-400' : 'w-1.5 bg-slate-700 hover:bg-slate-500'}`}
                />
              ))}
            </div>
            <p className="text-[11px] text-slate-400">{activeIndex + 1} / {certifications.length}</p>
          </div>
        </div>
      </div>
    </section>
  );
}