import React from 'react';
import { motion } from 'framer-motion';
import { Database, Brain, Plug, FlaskConical, Rocket } from 'lucide-react';

const steps = [
  { icon: <Database size={28} />, title: 'Data Acquisition & Engineering', desc: 'Extraction of satellite imagery and climatic data via Google Earth Engine; compilation of historical market pricing datasets.', color: 'from-blue-500 to-cyan-500' },
  { icon: <Brain size={28} />, title: 'Model Development', desc: 'Training and hyperparameter tuning of XGBoost classifiers for land analysis and quantile regression models for financial forecasting.', color: 'from-purple-500 to-violet-500' },
  { icon: <Plug size={28} />, title: 'System Integration', desc: 'Connecting the Python/FastAPI backend with the React Native mobile frontend via asynchronous pipelines.', color: 'from-agri-emerald to-teal-500' },
  { icon: <FlaskConical size={28} />, title: 'Validation & Testing', desc: 'Rigorous field testing and cross-validation in diverse agroclimatic zones (e.g., Malabe, Sri Lanka, and Kerala, India).', color: 'from-amber-500 to-orange-500' },
  { icon: <Rocket size={28} />, title: 'Deployment', desc: 'Rollout of the mobile application and continuous iteration based on user feedback and system latency metrics.', color: 'from-rose-500 to-pink-500' },
];

const Methodology = () => {
  return (
    <section id="methodology" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src="/images/cardamom.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.07] dark:opacity-[0.1]" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-emerald-50/70 to-white/90 dark:from-agri-slate/90 dark:via-agri-slate/80 dark:to-agri-slate/90"></div>
      </div>
      {/* Decorative glow */}
      <div className="absolute top-1/3 left-0 w-72 h-72 bg-agri-emerald/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-1/3 right-0 w-56 h-56 bg-purple-500/10 rounded-full blur-[80px]"></div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 dark:text-white mb-4">System <span className="text-gradient">Methodology</span></h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">Our end-to-end development pipeline from data engineering to production deployment.</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-agri-emerald/30 via-purple-500/30 to-rose-500/30 dark:from-agri-emerald/20 dark:via-purple-500/20 dark:to-rose-500/20 md:-translate-x-px"></div>

          {steps.map((step, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div key={idx} className="relative flex items-start mb-12 last:mb-0">
                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: 'spring', delay: idx * 0.1 }}
                  className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} shadow-lg flex items-center justify-center text-white ring-4 ring-white dark:ring-agri-dark`}>{step.icon}</div>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: isLeft ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
                  className={`w-full md:w-5/12 pl-20 md:pl-0 ${isLeft ? 'md:pr-16 md:text-right md:mr-auto' : 'md:pl-16 md:ml-auto'}`}>
                  <div className="p-6 rounded-2xl bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm border border-gray-100 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-shadow">
                    <span className="text-xs font-bold text-agri-emerald uppercase tracking-wider">Step {idx + 1}</span>
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-1 mb-2">{step.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
