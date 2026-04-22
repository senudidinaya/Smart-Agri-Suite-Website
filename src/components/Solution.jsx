import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Satellite, ShieldCheck, DollarSign, Package } from 'lucide-react';

const modules = [
  { icon: <Satellite size={28} />, title: 'The Global Analyzer', desc: 'Live satellite classification to map idle lands and calculate interpretative crop suitability scores.', gradient: 'from-emerald-500 to-teal-600' },
  { icon: <ShieldCheck size={28} />, title: 'Trust & Security Layer', desc: 'A multi-gated intent analysis system ensuring secure and credible land mobilization.', gradient: 'from-blue-500 to-indigo-600' },
  { icon: <DollarSign size={28} />, title: 'Dynamic Pricing Engine', desc: 'Algorithmic price adjustments based on real-time market demand and regional stock availability.', gradient: 'from-amber-500 to-orange-600' },
  { icon: <Package size={28} />, title: 'Smart Stock Management', desc: 'Probabilistic forecasting to provide actionable alerts for inventory preparation.', gradient: 'from-purple-500 to-violet-600' },
];

const Solution = () => {
  return (
    <section id="solution" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src="/images/tea-hills.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.08] dark:opacity-[0.1]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/92 via-emerald-50/80 to-white/92 dark:from-agri-dark/92 dark:via-agri-slate/80 dark:to-agri-dark/92"></div>
      </div>
      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-agri-emerald/10 rounded-full blur-[80px] animate-float"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-amber-400/10 rounded-full blur-[60px] animate-float-delayed"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="text-center mb-16">
          <motion.div whileHover={{ rotate: 15 }} className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-agri-emerald to-agri-leaf text-white shadow-xl shadow-agri-emerald/20 mb-6">
            <Lightbulb size={36} />
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-800 dark:text-white mb-4">Our Research <span className="text-gradient">Solution</span></h2>
          <p className="text-xl md:text-2xl text-gradient font-bold mb-6">Mobile-Based Intelligent System for Sustainable Cultivation in Sri Lanka</p>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">Our solution bridges the technology gap by delivering a multi-modular suite directly to the farmer's smartphone.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((mod, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -8 }}
              className="group relative p-8 rounded-3xl bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm border border-gray-100 dark:border-slate-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${mod.gradient} rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              <div className="relative z-10 flex gap-6">
                <div className={`shrink-0 p-4 rounded-2xl bg-gradient-to-br ${mod.gradient} text-white shadow-lg`}>{mod.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{mod.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{mod.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
