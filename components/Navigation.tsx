'use client';

import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    // { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="cursor-pointer">
  <a href="#hero" onClick={() => setMobileMenuOpen(false)}>
    <span className="bg-gradient-to-r from-blue-400 via-violet-500 to-cyan-400 bg-clip-text text-xl font-semibold text-transparent sm:text-2xl">
      OK TECH
    </span>
  </a>
</motion.div>

        {/* 1. تكبير عناصر القائمة للشاشات الكبيرة (تم تغيير text-sm إلى text-base) */}
        <div className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              className="text-base font-medium text-slate-400 transition-colors hover:text-slate-100"
              whileHover={{ color: '#f8fafc' }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm font-semibold text-slate-100 transition-colors hover:border-blue-500 hover:bg-slate-800"
          >
            Contact Me
          </motion.a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="rounded-full border border-slate-700 bg-slate-900/80 p-2 text-slate-100"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <div className="hidden md:flex">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm font-semibold text-slate-100 transition-colors hover:border-blue-500 hover:bg-slate-800"
          >
            Contact Me
          </motion.a>
        </div>
      </div>

      {/* 2. تكبير عناصر القائمة للهواتف عند فتح الـ Menu (تم تغيير text-sm إلى text-base) */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-800 bg-slate-950/95 px-4 py-4 shadow-lg md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-3 py-2 text-base font-medium text-slate-300 transition-colors hover:bg-slate-900 hover:text-slate-100"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </motion.nav>
  );
}