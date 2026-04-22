import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Globe, Database, Zap, Map, TrendingUp } from 'lucide-react';

const FeatureSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="research" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            Impact <span className="text-agri-emerald">Metrics</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl text-lg"
          >
            A paradigm shift in precision agriculture, powered by cutting-edge machine learning and earth observation telemetry.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 auto-rows-[minmax(200px,auto)]"
        >
          {/* Large Card 1 */}
          <motion.div variants={itemVariants} className="md:col-span-2 glass rounded-3xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-agri-emerald/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 group-hover:bg-agri-emerald/20 transition-colors duration-500"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <Activity className="text-agri-emerald mb-6" size={40} />
              <div>
                <h3 className="text-6xl font-bold mb-2">98<span className="text-agri-emerald">%</span></h3>
                <p className="text-xl font-semibold text-white mb-2">Classification Accuracy</p>
                <p className="text-slate-400">Achieved using our fine-tuned XGBoost model for spatial feature extraction, outperforming traditional Random Forest baselines by 12% in multi-terrain scenarios.</p>
              </div>
            </div>
          </motion.div>

          {/* Medium Card 1 */}
          <motion.div variants={itemVariants} className="glass rounded-3xl p-8 flex flex-col justify-between group overflow-hidden relative">
             <div className="absolute inset-0 bg-gradient-to-br from-agri-slate/50 to-transparent z-0"></div>
            <div className="relative z-10">
              <Database className="text-cyan-400 mb-4" size={32} />
              <h3 className="text-4xl font-bold mb-2">18</h3>
              <p className="text-lg font-semibold text-white mb-2">GEE Variables</p>
              <p className="text-sm text-slate-400">Integration of multi-spectral bands, NDVI, elevation, and soil indices.</p>
            </div>
          </motion.div>

          {/* Medium Card 2 */}
          <motion.div variants={itemVariants} className="glass rounded-3xl p-8 flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-agri-slate/50 to-transparent z-0"></div>
            <div className="relative z-10">
              <Zap className="text-yellow-400 mb-4" size={32} />
              <h3 className="text-2xl font-bold text-white mb-2">Real-time <br/>Analysis</h3>
              <p className="text-sm text-slate-400">Sub-second inference times through optimized edge-node routing and cached GEE tiles.</p>
            </div>
          </motion.div>

          {/* Medium Card 3 */}
          <motion.div variants={itemVariants} className="glass rounded-3xl p-8 flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-bl from-agri-slate/50 to-transparent z-0"></div>
            <div className="relative z-10">
              <Globe className="text-blue-400 mb-4" size={32} />
              <h3 className="text-2xl font-bold text-white mb-2">Globally <br/>Deployable</h3>
              <p className="text-sm text-slate-400">Architecture designed to scale across continents without retraining, utilizing normalized indices.</p>
            </div>
          </motion.div>

          {/* Medium Card 4 */}
          <motion.div variants={itemVariants} className="glass rounded-3xl p-8 flex flex-col justify-between group overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-tl from-agri-emerald/10 to-transparent z-0"></div>
            <div className="relative z-10">
              <TrendingUp className="text-agri-emeraldGlow mb-4" size={32} />
              <h3 className="text-4xl font-bold mb-2">+40<span className="text-agri-emerald">%</span></h3>
              <p className="text-lg font-semibold text-white mb-2">Yield Optimization</p>
              <p className="text-sm text-slate-400">Average projected increase in harvest value for optimized land plots.</p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;
