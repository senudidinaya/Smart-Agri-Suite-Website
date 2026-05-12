import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ExternalLink, Clock } from 'lucide-react';

const documents = [
  {
    category: 'Proposal Documents',
    items: [
      {
        name: 'Proposal Documents',
        status: 'available',
        link: 'https://drive.google.com/drive/folders/1onXGR2gM0NJ6apOavrEbPe4rkz5YppRV?usp=sharing',
      },
    ],
  },
  {
    category: 'Check List Documents',
    items: [
      {
        name: 'Checklist 1',
        status: 'available',
        link: 'https://drive.google.com/file/d/1dpRtInCSXO7BWb-QAd6ndANnEsJ-4etK/view?usp=sharing',
      },
      {
        name: 'Checklist 2',
        status: 'available',
        link: 'https://drive.google.com/file/d/1t2TOxiimEjRyAplmznjwtrwWNI_cPiir/view?usp=sharing',
      },
    ],
  },
  {
    category: 'Final Documents',
    items: [
      { name: 'Final Report – Main', status: 'pending', link: '#' },
      { name: 'Final Report – Eranga Bowatte', status: 'pending', link: '#' },
      { name: 'Final Report – Chamindu Navod', status: 'pending', link: '#' },
      { name: 'Final Report – Janakalani Maheepala', status: 'pending', link: '#' },
      { name: 'Final Report – Senudi Rupasinghe', status: 'pending', link: '#' },
    ],
  },
];

const Documents = () => {
  return (
    <section id="documents" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={`${import.meta.env.BASE_URL}images/spice-bowls.png`} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.05] dark:opacity-[0.08]" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/98 to-white dark:from-agri-slate/90 dark:via-agri-slate/95 dark:to-agri-slate/90"></div>
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-black text-slate-800 dark:text-white mb-4">
            Project <span className="text-gradient">Documents</span>
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            All project documents produced and pending. Click a document to view.
          </p>
        </motion.div>

        <div className="space-y-8">
          {documents.map((group, gIdx) => (
            <motion.div
              key={gIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gIdx * 0.08 }}
              className="rounded-3xl bg-white/90 dark:bg-slate-800/70 backdrop-blur-md border border-gray-100 dark:border-slate-700/50 shadow-lg overflow-hidden"
            >
              <div className="px-7 py-4 bg-agri-emerald/8 dark:bg-agri-emerald/10 border-b border-gray-100 dark:border-slate-700/50">
                <h3 className="text-base font-bold text-agri-emerald uppercase tracking-wider">{group.category}</h3>
              </div>
              <ul className="divide-y divide-gray-50 dark:divide-slate-700/40">
                {group.items.map((doc, dIdx) => (
                  <li key={dIdx}>
                    <a
                      href={doc.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-7 py-4 hover:bg-agri-emerald/5 dark:hover:bg-agri-emerald/10 transition-colors group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-xl bg-agri-emerald/10 dark:bg-agri-emerald/15 text-agri-emerald group-hover:bg-agri-emerald/20 transition-colors shrink-0">
                          <FileText size={18} />
                        </div>
                        <span className="font-semibold text-slate-700 dark:text-slate-200">{doc.name}</span>
                      </div>
                      {doc.status === 'available' ? (
                        <div className="flex items-center gap-2 text-agri-emerald">
                          <ExternalLink size={16} />
                          <span className="text-xs font-bold uppercase tracking-wider">View</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500">
                          <Clock size={16} />
                          <span className="text-xs font-bold uppercase tracking-wider">Pending</span>
                        </div>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Documents;
