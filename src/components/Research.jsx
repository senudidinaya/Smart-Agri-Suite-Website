import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, SearchX } from 'lucide-react';

const Research = () => {
  return (
    <section id="research" className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-slate-800 dark:text-white mb-4">
            Research <span className="text-gradient">Foundation</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Research Background */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-3xl overflow-hidden shadow-2xl min-h-[420px]"
          >
            <img src="/images/plantation.png" alt="Sri Lankan spice plantation" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
            <div className="relative p-8 md:p-10 h-full flex flex-col justify-end">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-md w-fit px-4 py-2 rounded-full border border-blue-400/30 text-blue-300 text-sm font-bold mb-4">
                <BookOpen size={16} /> Research Background
              </div>
              <p className="text-slate-100 text-lg leading-relaxed font-medium">
                Sri Lanka possesses a rich agricultural heritage and highly diverse agroclimatic zones, making it ideal for premium cash crop cultivation. However, the sector is increasingly threatened by climate unpredictability, resource mismanagement, and outdated operational frameworks. While the global shift toward precision agriculture offers immense potential, these technologies are rarely accessible to the rural smallholder farmers who form the backbone of the nation's agricultural economy.
              </p>
            </div>
          </motion.div>

          {/* Research Gap */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="group relative rounded-3xl overflow-hidden shadow-2xl min-h-[420px]"
          >
            <img src="/images/market.png" alt="Spice market" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent"></div>
            <div className="relative p-8 md:p-10 h-full flex flex-col justify-end">
              <div className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-md w-fit px-4 py-2 rounded-full border border-red-400/30 text-red-300 text-sm font-bold mb-4">
                <SearchX size={16} /> Research Gap
              </div>
              <p className="text-slate-100 text-lg leading-relaxed font-medium">
                While localized AgTech solutions exist, there is a distinct lack of an integrated, end-to-end digital ecosystem. Current systems fail to bridge the gap between high-level geospatial analysis and ground-level economic realities. There is no unified platform that seamlessly combines planetary-scale idle land identification, automated trustworthiness screening, and predictive financial tools within a single, mobile-accessible architecture.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Research;
