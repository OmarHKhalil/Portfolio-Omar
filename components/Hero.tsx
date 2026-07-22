'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  // محرك الكتابة والحذف المخصص لاسمك فقط
  const welcomeString = "Hello, I'm Omar Khalil";
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const typingSpeed = isDeleting ? 40 : 60;
    const delayAfterDuration = 2500; // مدة بقاء الاسم ظاهراً قبل الحذف

    if (!isDeleting && currentText === welcomeString) {
      timer = setTimeout(() => setIsDeleting(true), delayAfterDuration);
    } else if (isDeleting && currentText === '') {
      timer = setTimeout(() => setIsDeleting(false), 500); // وقت انتظار قصير قبل إعادة الكتابة
    } else {
      timer = setTimeout(() => {
        setCurrentText(
          isDeleting 
            ? welcomeString.substring(0, currentText.length - 1)
            : welcomeString.substring(0, currentText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting]);

  return (
    <section id="hero" className="flex min-h-screen items-center justify-center px-4 pb-16 pt-24 sm:px-6 sm:pb-20 lg:px-8 lg:pt-28">
      <motion.div variants={container} initial="hidden" animate="show" className="mx-auto w-full max-w-4xl text-center flex flex-col items-center">
        
        {/* 1. قسم شارات التخصص العليا */}
        <motion.div variants={item} className="mb-8">
          <div className="inline-flex rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-xs font-medium text-slate-400 sm:text-sm">
            ML | DL | CV | LLMS | RAG | AI Agents
          </div>
        </motion.div>

        {/* 2. الصورة الشخصية الدائرية الكبيرة والمتمركِزة تماماً */}
<motion.div 
  variants={item} 
  className="mb-8 w-full max-w-[280px] sm:max-w-[340px] relative group"
  suppressHydrationWarning={true} // 💡 تم نقل الخاصية هنا إلى الحاوية الرئيسية لحل خطأ الـ Hydration نهائياً
>
  
  {/* الهالة المضيئة الخلفية النيون */}
  <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-violet-600 rounded-full blur-2xl opacity-25 group-hover:opacity-45 transition duration-1000 animate-pulse"></div>
  
  {/* الحاوية الدائرية الرئيسية المحكمة الأبعاد بفضل aspect-square */}
  <div className="relative w-full aspect-square rounded-full border border-slate-800 bg-slate-900/80 p-3 shadow-2xl shadow-blue-500/10 flex items-center justify-center">
    
    {/* الإطار الداخلي الأسود ليعطي عمقاً بصرياً ويحمي أبعاد الصورة */}
    <div className="relative w-full h-full overflow-hidden rounded-full border border-slate-950 bg-slate-950">
      <Image
  src="/personal_picture.jpg"
  alt="Omar Khalil - AI Engineer profile picture"
  fill
  quality={100} // 💡 يخبر Next.js بعدم ضغط الصورة وتقديمها بأعلى جودة (0 إلى 100)
  sizes="(max-w-768px) 400px, 600px" // 💡 طلب مساحة بكسل أعلى من السيرفر لمنع البكسلة على الشاشات القوية (Retina)
  className="object-cover object-center rounded-full transition-transform duration-700 group-hover:scale-[1.05]"
  priority
/>
    </div>

  </div>
</motion.div>

        {/* 3. النصوص والأزرار مرتبة وممركزة تحت الصورة مباشرة */}
        <div className="max-w-3xl w-full flex flex-col items-center">
          
          {/* سطر الترحيب الخاص بعمر خليل (يكتب ويحذف) */}
          <motion.div variants={item} className="text-xl font-bold tracking-wide text-cyan-400 mb-3 min-h-[30px] flex items-center justify-center">
            <span>{currentText}</span>
            <span className="text-cyan-400 animate-pulse ml-0.5">|</span>
          </motion.div>

          {/* العنوان الرئيسي الثابت والمحفوظ تماماً بناءً على طلبك */}
          <motion.h1 variants={item} className="mb-4 text-3xl font-bold leading-[1.15] sm:text-4xl lg:text-5xl xl:text-6xl text-slate-100">
            Building AI Systems that transform{' '}
            <span className="block mt-2 bg-gradient-to-r from-blue-400 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
              ideas into real world solutions.
            </span>
          </motion.h1>

          {/* نص التخصص الثابت المستقر */}
          <motion.p variants={item} className="mb-8 text-sm sm:text-base text-slate-400 max-w-2xl font-medium">
          AI Engineer specialized in Machine Learning, Deep Learning, and Generative AI systems.          </motion.p>

          {/* أزرار التفاعل المعدلة والمحمية بالكامل عمودياً */}
          <motion.div variants={item} className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4 w-full sm:w-auto">
            
            {/* الزر الأول: Download My CV */}
            <motion.a
              href="/Omar_Khalil_AI_ML_Engineer.pdf"
              download="Omar_Khalil_AI_ML_Engineer.pdf"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-6 py-3 transition-colors hover:from-blue-400 hover:to-violet-500 sm:px-8 sm:py-3.5"
            >
              <span className="!text-white text-sm sm:text-base font-semibold">
                Download My CV
              </span>
              <ArrowRight className="h-5 w-5 !text-white" />
            </motion.a>
            
            {/* الزر الثاني: View My Work */}
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-6 py-3 transition-colors hover:from-blue-400 hover:to-violet-500 sm:px-8 sm:py-3.5"
            >
              <span className="!text-white text-sm sm:text-base font-semibold">
                View My Work
              </span>
              <ArrowRight className="h-5 w-5 !text-white" />
            </motion.a>

            {/* الزر الثالث: Let's Connect
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-violet-600 px-6 py-3 transition-colors hover:from-blue-400 hover:to-violet-500 sm:px-8 sm:py-3.5"
            >
              <span className="!text-white text-sm sm:text-base font-semibold">
                View My Work
              </span>
              <ArrowRight className="h-5 w-5 !text-white" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full border border-slate-700 px-6 py-3 transition-colors hover:border-blue-500 hover:bg-slate-900 sm:px-8"
            >
              <span className="!text-slate-100 text-sm sm:text-base font-semibold">
                Let's Connect
              </span>
            </motion.a> */}
          </motion.div>
        </div>

        {/* كروت الإحصائيات الـ 3 المتبقية */}
        {/* <motion.div variants={item} className="mt-16 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 lg:gap-6 w-full max-w-3xl">
          {[
            { label: 'Projects', value: '11+' },
            { label: 'Technologies', value: '30+' },
            { label: 'ML Models', value: '15+' },
          ].map((stat, i) => (
            <div key={i} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-center">
              <div className="mb-2 text-xl font-bold text-blue-400 sm:text-2xl lg:text-3xl">{stat.value}</div>
              <div className="text-xs text-slate-400 sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div> */}
      </motion.div>

      {/* أيقونة حركة النزول */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block"
      >
        <div className="flex h-10 w-6 items-center justify-center rounded-full border-2 border-slate-700">
          <div className="h-2 w-1 rounded-full bg-blue-400" />
        </div>
      </motion.div>
    </section>
  );
}