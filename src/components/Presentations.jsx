import React from 'react';
import { motion } from 'framer-motion';
import { Presentation, ExternalLink, Clock } from 'lucide-react';
import proposalPresentationPdf from '../assets/proposal presentation.pdf';
import progressPresentation1Pdf from '../assets/Progress Presentation - I.pdf';
import progressPresentation2Pdf from '../assets/Progress Presentation - II.pdf';

const slides = [
  {
    label: 'Proposal Presentation',
    description: 'Initial presentation of the project concept, problem statement, objectives, and proposed methodology to the panel.',
    status: 'available',
    link: proposalPresentationPdf,
    gradient: 'from-blue-500 to-cyan-500',
    lightBg: 'bg-blue-50 dark:bg-blue-900/20',
  },
  {
    label: 'Progress Presentation 1',
    description: 'Slides covering Phase 1 progress: system design, data collection, initial model development and early prototyping results.',
    status: 'available',
    link: progressPresentation1Pdf,
    gradient: 'from-agri-emerald to-teal-500',
    lightBg: 'bg-emerald-50 dark:bg-emerald-900/20',
  },
  {
    label: 'Progress Presentation 2',
    description: 'Slides for Phase 2 covering completed module integrations, testing outcomes, and mid-project research findings.',
    status: 'available',
    link: progressPresentation2Pdf,
    gradient: 'from-purple-500 to-violet-500',
    lightBg: 'bg-purple-50 dark:bg-purple-900/20',
  },
  {
    label: 'Final Presentation',
    description: 'Final project defence slides showcasing the complete system, evaluation results, contributions, and conclusions.',
    status: 'pending',
    link: '#',
    gradient: 'from-amber-500 to-orange-500',
    lightBg: 'bg-amber-50 dark:bg-amber-900/20',
  },
];

const Presentations = () => {
  return (
    <section id="slides" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={`${import.meta.env.BASE_URL}images/cinnamon.png`} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.05] dark:opacity-[0.08]" />
        <div className="absolute inset-0 bg-gradient-to-b from-agri-earth via-agri-earth/96 to-agri-earth dark:from-agri-dark dark:via-agri-dark/96 dark:to-agri-dark"></div>
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-black text-slate-800 dark:text-white mb-4">
            Presentation <span className="text-gradient">Slides</span>
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Slides from past presentations. Future presentation slides will be added here as they become available.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {slides.map((slide, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className={`p-7 rounded-3xl ${slide.lightBg} border border-gray-100 dark:border-slate-700/50 shadow-lg hover:shadow-2xl transition-all`}
            >
              <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${slide.gradient} text-white shadow-md mb-5`}>
                <Presentation size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{slide.label}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-5">{slide.description}</p>

              {slide.status === 'available' ? (
                <a
                  href={slide.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r ${slide.gradient} text-white text-sm font-bold shadow-md hover:shadow-lg transition-shadow`}
                >
                  <ExternalLink size={15} /> View Slides
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-100 dark:bg-slate-700 text-slate-400 dark:text-slate-500 text-sm font-bold">
                  <Clock size={15} /> Coming Soon
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Presentations;
