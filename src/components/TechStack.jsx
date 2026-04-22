import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Server, Brain, Database, Cloud, Code2, Paintbrush, Flame, HardDrive } from 'lucide-react';

const categories = [
  {
    title: 'Frontend / Mobile',
    tools: [
      { name: 'React.js', icon: <Code2 size={28} /> },
      { name: 'React Native', icon: <Smartphone size={28} /> },
      { name: 'Tailwind CSS', icon: <Paintbrush size={28} /> },
      { name: 'Framer Motion', icon: <Flame size={28} /> },
    ],
    gradient: 'from-blue-500 to-cyan-500',
    lightBg: 'bg-blue-50',
    darkBg: 'dark:bg-blue-900/20',
  },
  {
    title: 'Backend & Cloud',
    tools: [
      { name: 'Node.js', icon: <Server size={28} /> },
      { name: 'FastAPI', icon: <Code2 size={28} /> },
      { name: 'GEE API', icon: <Cloud size={28} /> },
    ],
    gradient: 'from-emerald-500 to-teal-500',
    lightBg: 'bg-emerald-50',
    darkBg: 'dark:bg-emerald-900/20',
  },
  {
    title: 'Machine Learning',
    tools: [
      { name: 'Python', icon: <Code2 size={28} /> },
      { name: 'XGBoost', icon: <Brain size={28} /> },
      { name: 'Scikit-Learn', icon: <Brain size={28} /> },
    ],
    gradient: 'from-purple-500 to-violet-500',
    lightBg: 'bg-purple-50',
    darkBg: 'dark:bg-purple-900/20',
  },
  {
    title: 'Database & Hosting',
    tools: [
      { name: 'MongoDB', icon: <Database size={28} /> },
      { name: 'PostgreSQL', icon: <HardDrive size={28} /> },
      { name: 'Firebase', icon: <Flame size={28} /> },
    ],
    gradient: 'from-amber-500 to-orange-500',
    lightBg: 'bg-amber-50',
    darkBg: 'dark:bg-amber-900/20',
  },
];

const TechStack = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src="/images/plantation.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.06] dark:opacity-[0.08]" />
        <div className="absolute inset-0 bg-gradient-to-b from-agri-earth via-agri-earth/95 to-agri-earth dark:from-agri-dark dark:via-agri-dark/95 dark:to-agri-dark"></div>
      </div>
      {/* Decorative */}
      <svg className="absolute top-10 left-10 w-28 h-28 text-agri-emerald/5 rotate-12" viewBox="0 0 100 100" fill="currentColor"><path d="M50 5C50 5 15 25 15 55C15 75 30 95 50 95C70 95 85 75 85 55C85 25 50 5 50 5Z"/></svg>
      <svg className="absolute bottom-10 right-10 w-20 h-20 text-amber-500/5 -rotate-45" viewBox="0 0 100 100" fill="currentColor"><path d="M50 5C50 5 15 25 15 55C15 75 30 95 50 95C70 95 85 75 85 55C85 25 50 5 50 5Z"/></svg>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 dark:text-white mb-4">Tools & <span className="text-gradient">Technologies</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
              className={`p-8 rounded-3xl ${cat.lightBg} ${cat.darkBg} border border-gray-100 dark:border-slate-700/50 shadow-lg`}>
              <h3 className={`text-xl font-bold mb-6 bg-gradient-to-r ${cat.gradient} bg-clip-text text-transparent`}>{cat.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {cat.tools.map((tool, tIdx) => (
                  <motion.div key={tIdx} whileHover={{ scale: 1.05, y: -4 }}
                    className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm border border-gray-50 dark:border-slate-700/50 shadow-sm hover:shadow-lg transition-all">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${cat.gradient} text-white shadow-md`}>{tool.icon}</div>
                    <span className="font-bold text-sm text-slate-700 dark:text-slate-200">{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
