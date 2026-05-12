import React from 'react';
import { motion } from 'framer-motion';
import { Map, TrendingUp, Package, Mic, ArrowRight } from 'lucide-react';

const IntegrationSection = () => {
  const modules = [
    {
      id: 1,
      title: "Idle Land Mobilization",
      author: "Chamindu",
      icon: <Map size={32} className="text-blue-400" />,
      description: "Uses Google Earth Engine and machine learning to identify idle, vegetation, and built-up land while generating crop suitability and intercropping recommendations.",
      color: "from-blue-500/20 to-transparent",
      borderColor: "group-hover:border-blue-500/50"
    },
    {
      id: 2,
      title: "Smart Marketplace & Pricing Support",
      author: "Eranga",
      icon: <TrendingUp size={32} className="text-orange-400" />,
      description: "Combines live spice pricing, demand patterns, transport planning, and profit simulation to help farmers choose better markets and improve trading decisions.",
      color: "from-orange-500/20 to-transparent",
      borderColor: "group-hover:border-orange-500/50"
    },
    {
      id: 3,
      title: "Smart Predictive Stock & Alerts",
      author: "Janakalani",
      icon: <Package size={32} className="text-purple-400" />,
      description: "Forecasts stock movement using historical demand behavior and inventory inputs, then produces restock guidance and shortage alerts for spice supply planning.",
      color: "from-purple-500/20 to-transparent",
      borderColor: "group-hover:border-purple-500/50"
    },
    {
      id: 4,
      title: "Cultivator Intention Analyzer",
      author: "Senudi",
      icon: <Mic size={32} className="text-agri-emerald" />,
      description: "A two-gated audio and interview assessment pipeline that evaluates cultivator intent, truthfulness, emotional stability, and risk before recommendation.",
      color: "from-agri-emerald/20 to-transparent",
      borderColor: "group-hover:border-agri-emerald/50"
    }
  ];

  return (
    <section id="ecosystem" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            The <span className="text-agri-emerald">Agri-Suite</span> Ecosystem
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            A unified four-component research architecture that links land discovery, farmer decision support, stock forecasting, and cultivator screening in one ecosystem.
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
              className={`glass rounded-3xl p-8 relative overflow-hidden group transition-all duration-300 hover:-translate-y-2 border border-slate-700/50 ${mod.borderColor} cursor-pointer`}
            >
              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${mod.color} rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 p-4 rounded-2xl bg-slate-800/50 inline-block w-fit border border-slate-700">
                  {mod.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{mod.title}</h3>
                <p className="text-sm font-medium text-slate-500 mb-4 uppercase tracking-wider">Module by {mod.author}</p>
                
                <p className="text-slate-400 text-sm mb-8 flex-1 leading-relaxed">
                  {mod.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
