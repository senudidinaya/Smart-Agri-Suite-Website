import React, { useState } from 'react';
// Framer motion is used for animations
import { motion as fm, AnimatePresence as AP } from 'framer-motion';
import { Download, FileText, X, Maximize2 } from 'lucide-react';

const PublicationSection = () => {
  const [isPdfOpen, setIsPdfOpen] = useState(false);

  const resultsData = [
    { metric: "Overall Accuracy", rf: "86.4%", xgb: "98.2%" },
    { metric: "Precision (Vegetation)", rf: "88.1%", xgb: "99.1%" },
    { metric: "Recall (Built-up)", rf: "81.5%", xgb: "96.4%" },
    { metric: "F1-Score", rf: "84.2%", xgb: "97.8%" },
    { metric: "Inference Time (ms/tile)", rf: "245", xgb: "85" },
  ];

  return (
    <section id="publication" className="py-24 relative bg-slate-900/50 border-t border-slate-800">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <div className="w-full md:w-1/2">
            <fm.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Comparative <span className="text-agri-emerald">Performance</span>
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Our methodology employs a highly optimized XGBoost classifier trained on 18 spatial variables extracted via Google Earth Engine. As detailed in our upcoming IEEE publication, this approach significantly outperforms standard baseline models.
              </p>

              {/* Three-Line Table Style */}
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-y-2 border-slate-500 text-slate-300">
                      <th className="py-3 font-semibold">Evaluation Metric</th>
                      <th className="py-3 font-semibold">Random Forest</th>
                      <th className="py-3 font-semibold text-agri-emerald">Our Model (XGBoost)</th>
                    </tr>
                  </thead>
                  <tbody className="border-b-2 border-slate-500 text-slate-400">
                    {resultsData.map((row, idx) => (
                      <tr key={idx} className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                        <td className="py-3 text-white font-medium">{row.metric}</td>
                        <td className="py-3">{row.rf}</td>
                        <td className="py-3 font-bold text-agri-emeraldGlow">{row.xgb}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </fm.div>
          </div>

          <div className="w-full md:w-1/2">
            <fm.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-agri-emerald/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-24 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg shadow-2xl mb-6 flex items-center justify-center border border-slate-600 relative group-hover:-translate-y-2 transition-transform duration-300">
                  <FileText size={32} className="text-agri-emerald" />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-agri-emerald rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-[10px] font-bold text-white">PDF</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">IEEE Research Paper</h3>
                <p className="text-sm text-slate-400 mb-8 max-w-xs">
                  "Smart Agri-Suite: A Globally Deployable Land Analysis Framework using Multi-Spectral Telemetry"
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 w-full">
                  <button 
                    onClick={() => setIsPdfOpen(true)}
                    className="flex-1 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium flex items-center justify-center gap-2 transition-colors border border-slate-700"
                  >
                    <Maximize2 size={18} />
                    Read Online
                  </button>
                  <button className="flex-1 py-3 px-4 rounded-xl bg-agri-emerald hover:bg-agri-emeraldDark text-white font-medium flex items-center justify-center gap-2 transition-colors shadow-lg shadow-agri-emerald/20">
                    <Download size={18} />
                    Download PDF
                  </button>
                </div>
              </div>
            </fm.div>
          </div>

        </div>
      </div>

      {/* PDF Modal */}
      <AP>
        {isPdfOpen && (
          <fm.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-agri-dark/90 backdrop-blur-sm p-4 md:p-12"
          >
            <fm.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="w-full h-full max-w-5xl bg-slate-900 border border-slate-700 rounded-2xl flex flex-col overflow-hidden shadow-2xl"
            >
              {/* Modal Header */}
              <div className="px-6 py-4 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
                <div className="flex items-center gap-3">
                  <FileText className="text-agri-emerald" size={20} />
                  <span className="font-medium text-slate-200">Smart_AgriSuite_IEEE_Draft.pdf</span>
                </div>
                <button 
                  onClick={() => setIsPdfOpen(false)}
                  className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              {/* Fake PDF Content Area */}
              <div className="flex-1 overflow-y-auto bg-slate-800 p-8 flex justify-center">
                <div className="w-full max-w-3xl bg-white min-h-[1000px] shadow-lg rounded-sm p-12 text-slate-900 font-serif">
                  <h1 className="text-3xl font-bold text-center mb-4 leading-tight">
                    Smart Agri-Suite: A Globally Deployable Land Analysis Framework using Multi-Spectral Telemetry
                  </h1>
                  <p className="text-center italic mb-12 text-slate-700">
                    Subodhi, Rashmika, Chamindu, Eranga<br/>
                    Department of Computer Science
                  </p>
                  
                  <h2 className="text-xl font-bold mb-3 uppercase tracking-wider text-slate-800">Abstract</h2>
                  <p className="mb-8 text-justify leading-relaxed">
                    This paper presents a novel paradigm in precision agriculture by introducing the Smart Agri-Suite, an integrated multi-module architecture. The system leverages 18 spatial variables acquired via Google Earth Engine (GEE) to dynamically assess land suitability. Our advanced XGBoost classifier achieves an unprecedented 98.2% accuracy in distinguishing agricultural complexity zones, mitigating the inefficiencies of conventional baseline models such as Random Forest. We demonstrate a substantial 40% enhancement in projected yield optimization...
                  </p>

                  <h2 className="text-xl font-bold mb-3 uppercase tracking-wider text-slate-800">1. Introduction</h2>
                  <p className="mb-8 text-justify leading-relaxed">
                    The proliferation of satellite telemetry has revolutionized spatial analytics. However, real-time extraction and inference for multi-crop suitability remain computationally prohibitive...
                  </p>

                  {/* Faded bottom to indicate more content */}
                  <div className="h-32 bg-gradient-to-b from-transparent to-white w-full absolute bottom-8 left-0 rounded-b-sm"></div>
                </div>
              </div>
              
              {/* Modal Footer */}
              <div className="px-6 py-4 border-t border-slate-800 bg-slate-900 flex justify-between items-center">
                <span className="text-sm text-slate-500">Page 1 of 12</span>
                <button className="px-4 py-2 bg-agri-emerald hover:bg-agri-emeraldDark text-white rounded-lg text-sm font-medium transition-colors">
                  Download Full PDF
                </button>
              </div>
            </fm.div>
          </fm.div>
        )}
      </AP>
    </section>
  );
};

export default PublicationSection;
