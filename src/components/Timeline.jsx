import React from 'react';
import { motion } from 'framer-motion';
import { Search, Pencil, Code, FlaskConical, Rocket } from 'lucide-react';

const phases = [
  { icon: <Search size={24} />, title: 'Conceptualization & Research', desc: 'Problem identification, literature review, and system architecture design.', color: 'from-blue-500 to-cyan-500' },
  { icon: <Pencil size={24} />, title: 'Data Engineering & AI Training', desc: 'GEE pipeline setup and initial training of the XGBoost and pricing models.', color: 'from-purple-500 to-violet-500' },
  { icon: <Code size={24} />, title: 'Core Application Development', desc: 'Building the React Native mobile interface and backend integration.', color: 'from-agri-emerald to-teal-500' },
  { icon: <FlaskConical size={24} />, title: 'Field Testing & Optimization', desc: 'System stress testing, accuracy audits, and user interface refinements.', color: 'from-amber-500 to-orange-500' },
  { icon: <Rocket size={24} />, title: 'Final Validation & Deployment', desc: 'Final progress presentations, IEEE research paper compilation, and project handover.', color: 'from-rose-500 to-pink-500' },
];

const Timeline = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src="/images/cinnamon.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.05] dark:opacity-[0.08]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/92 via-amber-50/60 to-white/92 dark:from-agri-slate/92 dark:via-agri-slate/80 dark:to-agri-slate/92"></div>
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 dark:text-white mb-4">Project <span className="text-gradient">Timeline</span></h2>
        </motion.div>

        {/* Horizontal on desktop */}
        <div className="relative">
          <div className="hidden md:block absolute top-6 left-0 right-0 h-1 bg-gradient-to-r from-blue-300 via-agri-emerald to-rose-300 dark:from-blue-700 dark:via-agri-emerald/50 dark:to-rose-700 rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            {phases.map((phase, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.12 }} className="relative text-center">
                <div className="flex justify-center mb-5">
                  <motion.div whileHover={{ scale: 1.2, rotate: 10 }}
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${phase.color} shadow-lg flex items-center justify-center text-white relative z-10 ring-4 ring-white dark:ring-agri-dark`}>{phase.icon}</motion.div>
                </div>
                <div className="px-2">
                  <span className="text-xs font-bold text-agri-emerald uppercase tracking-wider">Phase {idx + 1}</span>
                  <h3 className="text-base font-bold text-slate-800 dark:text-white mt-1 mb-2 leading-tight">{phase.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{phase.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
