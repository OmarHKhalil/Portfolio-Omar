'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Globe, Mail, Sparkles, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    // 💡 نرسل الطلب مباشرة إلى المسار المحلي بالسيرفر
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (result.success) {
      alert('Thank you! Your message has been sent successfully.');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Something went wrong on the server. Please try again.');
    }
  } catch (error) {
    console.error(error);
    alert('Error connecting to the server.');
  } finally {
    setIsSubmitting(false);
  }
};

  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mo5rb600@gmail.com',
      href: 'mailto:mo5rb600@gmail.com',
    },
    {
      icon: Globe,
      label: 'Portfolio & Code',
      value: 'github.com/OmarHKhalil',
      href: 'https://github.com/OmarHKhalil',
    },
    {
      icon: Brain,
      label: 'Focus',
      value: 'AI Engineering, Computer Vision & Generative AI',
      href: '#skills',
    },
    {
      icon: Sparkles,
      label: 'Availability',
      value: 'Open to AI Engineering opportunities, internships, and collaborations',
      href: '#projects',
    },
  ];

  return (
    <section id="contact" className="scroll-mt-24 px-4 py-16 sm:scroll-mt-28 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-5xl">
        
        {/* العناوين الرئيسية */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-10 text-center sm:mb-16">
          <h3 className="mb-3 inline-flex rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 text-sm font-medium text-cyan-400 sm:mb-4">Contact Me</h3>
          <p className="mx-auto max-w-2xl text-base text-slate-400 sm:text-lg">
            I'm always interested in discussing meaningful AI projects, scalable collaborations in backend software development, or new ideas for real world impact.
          </p>
        </motion.div>

        {/* تقسيم القسم إلى عمودين على الشاشات الكبيرة */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-12">
          
          {/* العمود الأيسر: بطاقات التواصل السريع (ياخذ 2 من 5 أعمدة) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }} 
            viewport={{ once: true }} 
            className="flex flex-col gap-4 md:col-span-2"
          >
            {contacts.map((contact, i) => {
              const Icon = contact.icon;
              const isEmail = contact.href.startsWith('mailto:');
              const isAnchor = contact.href.startsWith('#');

              return (
                <a 
                  key={i} 
                  href={contact.href} 
                  target={isEmail || isAnchor ? undefined : "_blank"} 
                  rel={isEmail || isAnchor ? undefined : "noopener noreferrer"} 
                  className="group block rounded-2xl border border-slate-800 bg-slate-900/40 p-4 transition-all hover:border-cyan-500/50 hover:bg-slate-900/70"
                >
                  <div className="flex items-center gap-4">
                    <div className="rounded-xl bg-slate-950 p-2.5 text-cyan-400 transition-colors group-hover:bg-cyan-500/10">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-xs font-medium text-slate-500">{contact.label}</h4>
                      <p className="truncate text-sm font-medium text-slate-300 group-hover:text-slate-100">{contact.value}</p>
                    </div>
                  </div>
                </a>
              );
            })}
          </motion.div>

          {/* العمود الأيمن: نموذج الاتصال (ياخذ 3 من 5 أعمدة) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }} 
            viewport={{ once: true }} 
            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:col-span-3 sm:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-slate-400 mb-1.5">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Omar Khalil"
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm text-slate-200 placeholder-slate-600 outline-none transition focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium text-slate-400 mb-1.5">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm text-slate-200 placeholder-slate-600 outline-none transition focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-slate-400 mb-1.5">Message</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Omar, I'd love to discuss a project with you..."
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm text-slate-200 placeholder-slate-600 outline-none transition focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}