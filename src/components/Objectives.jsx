import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, BarChart3, Package, DollarSign, Smartphone } from 'lucide-react';

const objectives = [
  { text: 'To develop a globally deployable, GEE-based engine for the autonomous classification of arable and idle land.', icon: <Globe2 size={24} /> },
  { text: 'To formulate an interpretable suitability scoring framework for high-value crops based on multidimensional geospatial data.', icon: <BarChart3 size={24} /> },
  { text: 'To implement a predictive stock management system that mitigates supply chain disruptions.', icon: <Package size={24} /> },
  { text: 'To design a dynamic pricing model that stabilizes income for smallholder farmers.', icon: <DollarSign size={24} /> },
  { text: 'To deliver a seamless, mobile-first user experience that encourages high adoption rates among rural communities.', icon: <Smartphone size={24} /> },
];

const Objectives = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src="/images/spice-bowls.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.06] dark:opacity-[0.1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-agri-earth via-agri-earth/95 to-agri-earth dark:from-agri-dark dark:via-agri-dark/95 dark:to-agri-dark"></div>
      </div>
      {/* Decorative leaves */}
      <svg className="absolute top-0 left-0 w-40 h-40 text-agri-emerald/5 dark:text-agri-emerald/5" viewBox="0 0 100 100" fill="currentColor"><path d="M50 5C50 5 15 25 15 55C15 75 30 95 50 95C70 95 85 75 85 55C85 25 50 5 50 5Z"/></svg>
      <svg className="absolute bottom-0 right-0 w-40 h-40 text-amber-500/5 dark:text-amber-500/5 rotate-180" viewBox="0 0 100 100" fill="currentColor"><path d="M50 5C50 5 15 25 15 55C15 75 30 95 50 95C70 95 85 75 85 55C85 25 50 5 50 5Z"/></svg>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 dark:text-white mb-4">Research <span className="text-gradient">Objectives</span></h2>
        </motion.div>

        <div className="space-y-5">
          {objectives.map((obj, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }} whileHover={{ x: 8 }}
              className="flex items-start gap-5 p-6 rounded-2xl bg-white/70 dark:bg-slate-800/50 backdrop-blur-sm border border-gray-100 dark:border-slate-700/50 shadow-md hover:shadow-xl hover:border-agri-emerald/30 transition-all">
              <div className="shrink-0 w-12 h-12 rounded-2xl bg-agri-emerald/10 dark:bg-agri-emerald/20 text-agri-emerald flex items-center justify-center">{obj.icon}</div>
              <div className="flex items-center gap-4">
                <span className="text-3xl font-black text-agri-emerald/20 dark:text-agri-emerald/30">0{idx + 1}</span>
                <p className="text-lg font-semibold text-slate-700 dark:text-slate-200 leading-relaxed">{obj.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;
