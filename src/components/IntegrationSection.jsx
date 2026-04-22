import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, ScanFace, FileText, ArrowRight } from 'lucide-react';

const IntegrationSection = () => {
  const modules = [
    {
      id: 1,
      title: "Trustworthiness & Intent",
      author: "Subodhi",
      icon: <ShieldCheck size={32} className="text-blue-400" />,
      description: "A multi-step verification form using the 'Two-Gated' architecture. Handles user credibility screening prior to land listing.",
      color: "from-blue-500/20 to-transparent",
      borderColor: "group-hover:border-blue-500/50"
    },
    {
      id: 2,
      title: "Agricultural Supply Chain Hub",
      author: "Rashmika",
      icon: <Truck size={32} className="text-orange-400" />,
      description: "Marketplace interface displaying real-time pricing for spices and connecting farmers with buyers based on verified land output.",
      color: "from-orange-500/20 to-transparent",
      borderColor: "group-hover:border-orange-500/50"
    },
    {
      id: 3,
      title: "Predictive Disease & Yield",
      author: "Chamindu",
      icon: <ScanFace size={32} className="text-purple-400" />,
      description: "Computer vision dashboard where farmers upload leaf images for instant grading, anomaly detection, and accurate yield forecasts.",
      color: "from-purple-500/20 to-transparent",
      borderColor: "group-hover:border-purple-500/50"
    },
    {
      id: 4,
      title: "Automated Documentation",
      author: "Eranga",
      icon: <FileText size={32} className="text-agri-emerald" />,
      description: "Backend-integrated portal generating standardized PDF reports and comprehensive research logs for every scan performed.",
      color: "from-agri-emerald/20 to-transparent",
      borderColor: "group-hover:border-agri-emerald/50"
    }
  ];

  return (
    <section id="team" className="py-24 relative">
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
            A unified, multi-module architecture designed by our specialized research team to address the complete agricultural lifecycle.
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
                
                <div className="flex items-center gap-2 text-sm font-medium text-slate-300 group-hover:text-white transition-colors mt-auto">
                  <span>Explore Module</span>
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
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
