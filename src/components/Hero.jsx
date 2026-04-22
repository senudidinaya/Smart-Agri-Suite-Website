import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, BarChart3, MapPin, ShieldCheck } from 'lucide-react';

const stats = [
  { value: '80%', label: 'Classification Accuracy', icon: <BarChart3 size={20} /> },
  { value: '18+', label: 'GEE Variables', icon: <MapPin size={20} /> },
  { value: '4', label: 'Core Modules', icon: <ShieldCheck size={20} /> },
];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/spices-hero.png"
          alt="Spices overview"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/50 dark:from-agri-dark/95 dark:via-agri-dark/85 dark:to-agri-dark/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-agri-earth via-transparent to-transparent dark:from-agri-dark dark:via-transparent dark:to-transparent"></div>
        <div className="absolute top-[15%] left-[5%] w-[500px] h-[500px] bg-agri-emerald/15 dark:bg-agri-emerald/10 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-amber-500/15 dark:bg-orange-600/10 rounded-full blur-[100px] animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-28 pb-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-agri-emerald/10 dark:bg-agri-emerald/20 border border-agri-emerald/30 text-agri-emerald text-sm font-bold mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-agri-emerald opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-agri-emerald"></span>
              </span>
              Research Project 2026 · SLIIT
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight mb-6">
              <span className="text-slate-800 dark:text-white">Planetary-Scale</span><br />
              <span className="text-gradient">Intelligence</span>
              <span className="text-slate-800 dark:text-white"> for</span><br />
              <span className="text-slate-800 dark:text-white">Sustainable </span>
              <span className="text-gradient-gold">Agriculture</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-10 max-w-2xl font-medium">
              A comprehensive, mobile-first ecosystem integrating Google Earth Engine with advanced machine learning for Sri Lankan spice and crop cultivation.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <a href="#about" className="px-8 py-4 rounded-2xl bg-gradient-to-r from-agri-emerald to-agri-leaf text-white font-bold shadow-xl shadow-agri-emerald/25 hover:shadow-agri-emerald/40 hover:-translate-y-1 transition-all">
                Explore Research
              </a>
              <a href="#solution" className="px-8 py-4 rounded-2xl bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-gray-200 dark:border-slate-700 text-slate-700 dark:text-white font-bold hover:-translate-y-1 hover:border-agri-emerald transition-all">
                View Solution
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/70 dark:bg-slate-800/60 backdrop-blur-md border border-gray-200 dark:border-slate-700 shadow-lg">
                <div className="p-2.5 rounded-xl bg-agri-emerald/10 text-agri-emerald">{stat.icon}</div>
                <div>
                  <p className="text-2xl font-black text-slate-800 dark:text-white">{stat.value}</p>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-slate-500 dark:text-slate-400">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <ChevronDown size={20} className="text-agri-emerald" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
