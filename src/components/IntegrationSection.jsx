import React from 'react';
import { motion } from 'framer-motion';
import { Map, TrendingUp, Package, Mic } from 'lucide-react';

const IntegrationSection = () => {
  const modules = [
    {
      id: 1,
      title: "Idle Land Mobilization",
      author: "Chamindu Navod",
      icon: <Map size={28} />,
      description: "Uses Google Earth Engine and machine learning to identify idle, vegetation, and built-up land while generating crop suitability and intercropping recommendations.",
      accent: "from-blue-500 to-cyan-500",
      iconBg: "bg-blue-500/15 dark:bg-blue-500/20",
      iconColor: "text-blue-500",
      chipBg: "bg-blue-50 dark:bg-blue-900/20",
      chipText: "text-blue-600 dark:text-blue-400",
      glow: "group-hover:shadow-blue-500/20",
      border: "group-hover:border-blue-500/40",
    },
    {
      id: 2,
      title: "Smart Marketplace & Pricing",
      author: "Eranga Bowatte",
      icon: <TrendingUp size={28} />,
      description: "Combines live spice pricing, demand patterns, transport planning, and profit simulation to help farmers choose better markets and improve trading decisions.",
      accent: "from-orange-500 to-amber-400",
      iconBg: "bg-orange-500/15 dark:bg-orange-500/20",
      iconColor: "text-orange-500",
      chipBg: "bg-orange-50 dark:bg-orange-900/20",
      chipText: "text-orange-600 dark:text-orange-400",
      glow: "group-hover:shadow-orange-500/20",
      border: "group-hover:border-orange-500/40",
    },
    {
      id: 3,
      title: "Predictive Stock & Alerts",
      author: "Janakalani Maheepala",
      icon: <Package size={28} />,
      description: "Forecasts stock movement using historical demand behavior and inventory inputs, then produces restock guidance and shortage alerts for spice supply planning.",
      accent: "from-purple-500 to-violet-500",
      iconBg: "bg-purple-500/15 dark:bg-purple-500/20",
      iconColor: "text-purple-500",
      chipBg: "bg-purple-50 dark:bg-purple-900/20",
      chipText: "text-purple-600 dark:text-purple-400",
      glow: "group-hover:shadow-purple-500/20",
      border: "group-hover:border-purple-500/40",
    },
    {
      id: 4,
      title: "Cultivator Intention Analyzer",
      author: "Senudi Rupasinghe",
      icon: <Mic size={28} />,
      description: "A two-gated audio and interview assessment pipeline that evaluates cultivator intent, truthfulness, emotional stability, and risk before recommendation.",
      accent: "from-agri-emerald to-teal-500",
      iconBg: "bg-agri-emerald/15 dark:bg-agri-emerald/20",
      iconColor: "text-agri-emerald",
      chipBg: "bg-emerald-50 dark:bg-emerald-900/20",
      chipText: "text-emerald-600 dark:text-emerald-400",
      glow: "group-hover:shadow-agri-emerald/20",
      border: "group-hover:border-agri-emerald/40",
    },
  ];

  return (
    <section id="ecosystem" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-slate-800 dark:text-white mb-4"
          >
            The <span className="text-gradient">Agri-Suite</span> Ecosystem
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg"
          >
            A unified four-component research architecture linking land discovery, farmer decision support, stock forecasting, and cultivator screening.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((mod, index) => (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className={`group relative rounded-3xl bg-white dark:bg-slate-800/70 border border-gray-100 dark:border-slate-700/50 shadow-lg hover:shadow-2xl ${mod.glow} ${mod.border} transition-all duration-300 overflow-hidden flex flex-col`}
            >
              {/* Gradient top accent bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${mod.accent}`} />

              <div className="p-7 flex flex-col flex-1">
                {/* Number + icon row */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`p-3 rounded-2xl ${mod.iconBg} ${mod.iconColor}`}>
                    {mod.icon}
                  </div>
                  <span className="text-3xl font-black text-gray-100 dark:text-slate-700 select-none">
                    0{mod.id}
                  </span>
                </div>

                <h3 className="text-lg font-black text-slate-800 dark:text-white mb-3 leading-snug">
                  {mod.title}
                </h3>

                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed flex-1 mb-5">
                  {mod.description}
                </p>

                {/* Author chip */}
                <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold ${mod.chipBg} ${mod.chipText} w-fit`}>
                  <span className={`w-1.5 h-1.5 rounded-full bg-current`} />
                  {mod.author}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
