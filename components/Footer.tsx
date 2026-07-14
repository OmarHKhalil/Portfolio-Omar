'use client';

import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950/70 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          viewport={{ once: true }} 
          className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12"
        >
          {/* العمود الأول */}
          <div>
            <h3 className="mb-2 bg-gradient-to-r from-blue-400 via-violet-500 to-cyan-400 bg-clip-text text-2xl font-bold text-transparent">
              Eng. Omar Khalil
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              AI Engineer • Backend
            </p>
          </div>

          {/* العمود الثاني */}
          <div>
            <h4 className="mb-4 font-semibold text-slate-100">Quick Links</h4>
            <nav className="space-y-2">
              {[
                { label: 'About', href: '#about' },
                { label: 'Skills', href: '#skills' },
                { label: 'Projects', href: '#projects' },
                // { label: 'Experience', href: '#experience' },
                { label: 'Certifications', href: '#certifications' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <a key={link.href} href={link.href} className="block text-slate-400 transition-colors hover:text-slate-100 text-sm">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* العمود الثالث - تم تعديله هنا لتجنب فتح صفحة فارغة للايميل */}
          <div>
            <h4 className="mb-4 font-semibold text-slate-100">Connect</h4>
            <div className="flex flex-wrap gap-4 text-sm">
              {[
                { label: 'GitHub', href: 'https://github.com/OmarHKhalil' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/omar-khalil-55a674281' },
                { label: 'Email', href: 'mailto:mo5rb600@gmail.com' },
              ].map((link) => {
                const isEmail = link.href.startsWith('mailto:');
                return (
                  <a 
                    key={link.href} 
                    href={link.href} 
                    // 💡 إذا كان إيميل لا يفتح تبويب جديد، وإذا كان رابط عادي يفتحه في تبويب جديد
                    target={isEmail ? undefined : '_blank'} 
                    rel={isEmail ? undefined : 'noreferrer'} 
                    className="text-slate-400 transition-colors hover:text-cyan-400"
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* سطر الحقوق السفلي */}
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.6 }} 
          viewport={{ once: true }} 
          className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500"
        >
          <p>© {currentYear} Omar Khalil. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}