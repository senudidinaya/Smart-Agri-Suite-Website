import React from 'react';
import { motion } from 'framer-motion';
import { MapPinOff, Eye, TrendingDown, Unplug } from 'lucide-react';

const challenges = [
  { icon: <MapPinOff size={28} />, title: 'Inefficient Land Utilization', desc: 'Millions of hectares remain idle due to a lack of scalable, accurate identification methods.', accent: 'border-red-400 dark:border-red-500', iconBg: 'bg-red-50 dark:bg-red-900/20 text-red-500 dark:text-red-400' },
  { icon: <Eye size={28} />, title: 'Subjective Assessments', desc: 'Traditional, manual land surveys are slow, costly, and prone to human error, resulting in suboptimal crop choices.', accent: 'border-orange-400 dark:border-orange-500', iconBg: 'bg-orange-50 dark:bg-orange-900/20 text-orange-500 dark:text-orange-400' },
  { icon: <TrendingDown size={28} />, title: 'Market Volatility', desc: 'Farmers frequently suffer from unpredictable market prices and lack the data to time their harvests profitably.', accent: 'border-yellow-500 dark:border-yellow-400', iconBg: 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400' },
  { icon: <Unplug size={28} />, title: 'Supply Chain Disconnect', desc: 'The absence of real-time inventory tracking leads to localized shortages or devastating surpluses.', accent: 'border-purple-400 dark:border-purple-500', iconBg: 'bg-purple-50 dark:bg-purple-900/20 text-purple-500 dark:text-purple-400' },
];

const Challenges = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src="/images/spice-farm.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.08] dark:opacity-[0.12]" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/85 to-amber-50/80 dark:from-agri-slate/90 dark:via-agri-slate/85 dark:to-agri-slate/80"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 dark:text-white mb-4">
            Challenges in <span className="text-gradient-gold">Current Agriculture</span>
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-3xl mx-auto">Smallholder farmers and regional policymakers face critical roadblocks that limit agricultural output and economic growth.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {challenges.map((c, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ scale: 1.02 }}
              className={`flex gap-5 p-6 rounded-2xl bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm border-l-4 ${c.accent} shadow-md hover:shadow-xl transition-all`}>
              <div className={`shrink-0 p-3 rounded-2xl ${c.iconBg} self-start`}>{c.icon}</div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{c.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;
