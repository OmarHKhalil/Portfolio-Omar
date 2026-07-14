// 'use client';

// import { motion } from 'framer-motion';
// import { experience, education } from '@/lib/about';

// export function Experience() {
//   return (
//     <section id="experience" className="scroll-mt-24 bg-slate-900/40 px-4 py-20 sm:scroll-mt-28 sm:px-6 sm:py-24 lg:px-8">
//       <div className="mx-auto max-w-6xl">
//         <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-10 flex flex-col items-center text-center sm:mb-16">
//           <div className="mb-4 inline-flex rounded-full border border-slate-800 bg-slate-950/60 px-4 py-2 text-sm font-medium text-cyan-300 sm:text-base">
//             My Experience
//           </div>
//           <h2 className="mb-3 text-3xl font-bold sm:mb-4 sm:text-4xl lg:text-5xl">Real-world AI roles and learning</h2>
//           <p className="mx-auto max-w-3xl text-base text-slate-400 sm:text-lg">Experience across AI engineering, research projects, and technical problem solving, with a focus on applying models to live systems.</p>
//         </motion.div>

//         <div className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-2">
//           {experience.map((item, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.08 }}
//               viewport={{ once: true }}
//               className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6 text-center sm:p-8"
//             >
//               <div className="mb-4 flex justify-center flex-wrap items-center gap-3">
//                 <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-300">{item.status}</span>
//               </div>
//               <h3 className="mb-4 text-2xl font-semibold text-slate-100">{item.role}</h3>
//               <p className="text-sm leading-relaxed text-slate-400 sm:text-base">{item.description}</p>
//             </motion.div>
//           ))}

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: experience.length * 0.08 }}
//             viewport={{ once: true }}
//             className="rounded-3xl border border-slate-800 bg-slate-950/60 p-6 text-center sm:p-8"
//           >
//             <h3 className="mb-4 text-2xl font-semibold text-slate-100">Education</h3>
//             <div className="mx-auto max-w-2xl space-y-5">
//               {education.map((school, index) => (
//                 <div key={index} className="space-y-3 rounded-2xl border border-slate-800 bg-slate-900/80 p-4 text-center">
//                   <p className="text-sm uppercase tracking-[0.18em] text-slate-400">{school.year}</p>
//                   <h4 className="text-xl font-semibold text-slate-100">{school.degree}</h4>
//                   <p className="text-sm text-slate-400">{school.institution}</p>
//                   <ul className="space-y-2 text-sm text-slate-400">
//                     {school.highlights.map((highlight) => (
//                       <li key={highlight}>• {highlight}</li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
