import React from 'react';
import { motion } from 'framer-motion';
import { Sprout, TrendingUp, Globe2, Bell, Target } from 'lucide-react';

const impactCards = [
  { value: '80%', title: 'Classification Accuracy', desc: 'High-precision idle land detection utilizing optimized XGBoost algorithms.', icon: <Target size={28} />, lightBg: 'bg-emerald-50', darkBg: 'dark:bg-emerald-900/20', iconColor: 'text-emerald-600 dark:text-emerald-400' },
  { value: 'Global', title: 'Scalability', desc: 'Real-time processing of 18-variable geospatial data stacks via live GEE integration.', icon: <Globe2 size={28} />, lightBg: 'bg-blue-50', darkBg: 'dark:bg-blue-900/20', iconColor: 'text-blue-600 dark:text-blue-400' },
  { value: 'Fair', title: 'Economic Empowerment', desc: 'Data-driven dynamic pricing models to ensure fair market participation for smallholder farmers.', icon: <TrendingUp size={28} />, lightBg: 'bg-amber-50', darkBg: 'dark:bg-amber-900/20', iconColor: 'text-amber-600 dark:text-amber-400' },
  { value: 'Smart', title: 'Predictive Inventory', desc: 'Advanced stock management alerts to balance regional supply and demand efficiently.', icon: <Bell size={28} />, lightBg: 'bg-purple-50', darkBg: 'dark:bg-purple-900/20', iconColor: 'text-purple-600 dark:text-purple-400' },
];

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Full background image */}
      <div className="absolute inset-0 z-0">
        <img src="/images/spice-leaves.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.08] dark:opacity-[0.12]" />
        <div className="absolute inset-0 bg-gradient-to-b from-agri-earth via-agri-earth/95 to-agri-earth dark:from-agri-dark dark:via-agri-dark/95 dark:to-agri-dark"></div>
      </div>

      {/* Decorative leaf SVG elements */}
      <svg className="absolute top-10 right-10 w-32 h-32 text-agri-emerald/10 dark:text-agri-emerald/5 rotate-45" viewBox="0 0 100 100" fill="currentColor"><path d="M50 5C50 5 15 25 15 55C15 75 30 95 50 95C70 95 85 75 85 55C85 25 50 5 50 5Z"/></svg>
      <svg className="absolute bottom-20 left-10 w-24 h-24 text-agri-emerald/10 dark:text-agri-emerald/5 -rotate-12" viewBox="0 0 100 100" fill="currentColor"><path d="M50 5C50 5 15 25 15 55C15 75 30 95 50 95C70 95 85 75 85 55C85 25 50 5 50 5Z"/></svg>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-agri-emerald/10 text-agri-emerald text-xs font-bold uppercase tracking-widest mb-6">
              <Sprout size={14} /> About the Project
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-800 dark:text-white leading-tight">
              Smart <span className="text-gradient">Agri-Suite</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
              The Smart Agri-Suite is a comprehensive, mobile-first ecosystem designed to modernize agricultural land management and market access in Sri Lanka.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              By integrating <strong className="text-agri-emerald font-bold">Google Earth Engine (GEE)</strong> with advanced machine learning, the platform identifies underutilized land, predicts crop suitability, and optimizes supply chain dynamics through dynamic pricing and intelligent stock management.
            </p>
            {/* Mini stats */}
            <div className="flex gap-6 flex-wrap">
              <div className="text-center p-4 rounded-2xl bg-white/60 dark:bg-slate-800/50 backdrop-blur-sm border border-gray-100 dark:border-slate-700/50 shadow-md">
                <p className="text-3xl font-black text-agri-emerald">4</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Modules</p>
              </div>
              <div className="text-center p-4 rounded-2xl bg-white/60 dark:bg-slate-800/50 backdrop-blur-sm border border-gray-100 dark:border-slate-700/50 shadow-md">
                <p className="text-3xl font-black text-agri-emerald">18+</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Variables</p>
              </div>
              <div className="text-center p-4 rounded-2xl bg-white/60 dark:bg-slate-800/50 backdrop-blur-sm border border-gray-100 dark:border-slate-700/50 shadow-md">
                <p className="text-3xl font-black text-agri-emerald">ML</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Powered</p>
              </div>
            </div>
          </motion.div>

          {/* Image Collage */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-8">
                <motion.img whileHover={{ scale: 1.03 }} src="/images/cinnamon.png" alt="Cinnamon sticks" className="w-full h-44 object-cover rounded-2xl shadow-xl ring-2 ring-white/50 dark:ring-slate-700/50" />
                <motion.img whileHover={{ scale: 1.03 }} src="/images/plantation.png" alt="Spice plantation" className="w-full h-56 object-cover rounded-2xl shadow-xl ring-2 ring-white/50 dark:ring-slate-700/50" />
              </div>
              <div className="space-y-4">
                <motion.img whileHover={{ scale: 1.03 }} src="/images/pepper.png" alt="Black pepper vine" className="w-full h-56 object-cover rounded-2xl shadow-xl ring-2 ring-white/50 dark:ring-slate-700/50" />
                <motion.img whileHover={{ scale: 1.03 }} src="/images/turmeric.png" alt="Turmeric roots" className="w-full h-44 object-cover rounded-2xl shadow-xl ring-2 ring-white/50 dark:ring-slate-700/50" />
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="w-20 h-20 rounded-full bg-gradient-to-br from-agri-emerald to-agri-leaf shadow-2xl shadow-agri-emerald/30 flex items-center justify-center ring-4 ring-white/30 dark:ring-slate-900/30">
                <Sprout size={36} className="text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Research Impact */}
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h3 className="text-3xl md:text-4xl font-black text-slate-800 dark:text-white mb-4">Our Research <span className="text-gradient">Impact</span></h3>
            <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">Key focus areas driving our mission towards a sustainable, data-driven agricultural future.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactCards.map((card, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -8 }}
                className={`p-7 rounded-3xl ${card.lightBg} ${card.darkBg} border border-gray-100 dark:border-slate-700/50 shadow-lg hover:shadow-2xl transition-all duration-300`}>
                <div className={`inline-flex p-3 rounded-2xl mb-5 ${card.iconColor} bg-white dark:bg-slate-800 shadow-sm`}>{card.icon}</div>
                <p className="text-3xl font-black text-slate-800 dark:text-white mb-1">{card.value}</p>
                <h4 className="text-lg font-bold text-slate-700 dark:text-slate-200 mb-3">{card.title}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
