import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flag, Calendar, Award, ChevronDown } from 'lucide-react';

const milestones = [
  {
    id: 'proposal',
    label: 'Project Proposal',
    date: 'TBD',
    marks: '10%',
    description:
      'The Project Proposal milestone requires the team to present the project idea, problem statement, objectives, and a high-level plan to the panel. This includes the initial literature survey and justification for the research direction.',
    status: 'Completed',
    statusColor: 'text-emerald-600 dark:text-emerald-400',
    statusBg: 'bg-emerald-50 dark:bg-emerald-900/20',
  },
  {
    id: 'pp1',
    label: 'Progress Presentation 1',
    date: 'TBD',
    marks: '15%',
    description:
      'Progress Presentation 1 evaluates the work completed in the first phase, including system design, data collection, initial model development, and early prototyping. The team demonstrates measurable progress toward the final deliverable.',
    status: 'Completed',
    statusColor: 'text-emerald-600 dark:text-emerald-400',
    statusBg: 'bg-emerald-50 dark:bg-emerald-900/20',
  },
  {
    id: 'pp2',
    label: 'Progress Presentation 2',
    date: 'TBD',
    marks: '18%',
    description:
      'Progress Presentation 2 covers the second phase of development, including completed module implementations, integration results, and testing outcomes. The panel evaluates technical depth and research validity at this stage.',
    status: 'Completed',
    statusColor: 'text-emerald-600 dark:text-emerald-400',
    statusBg: 'bg-emerald-50 dark:bg-emerald-900/20',
  },
  {
    id: 'final',
    label: 'Final Assessment',
    date: 'TBD',
    marks: '40%',
    description:
      'The Final Assessment is the most heavily weighted milestone. The team presents the fully integrated system, research findings, and evaluation results. A comprehensive final report and working demonstration are required.',
    status: 'Upcoming',
    statusColor: 'text-amber-600 dark:text-amber-400',
    statusBg: 'bg-amber-50 dark:bg-amber-900/20',
  },
  {
    id: 'viva',
    label: 'Viva',
    date: 'TBD',
    marks: '17%',
    description:
      'The Viva is an individual oral examination where each team member defends their contribution to the project. Examiners assess understanding of the research domain, technical decisions made, and individual ownership of components.',
    status: 'Upcoming',
    statusColor: 'text-purple-600 dark:text-purple-400',
    statusBg: 'bg-purple-50 dark:bg-purple-900/20',
  },
];

const Milestones = () => {
  const [selected, setSelected] = useState(milestones[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <section id="milestones" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={`${import.meta.env.BASE_URL}images/tea-hills.png`} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.06] dark:opacity-[0.1]" />
        <div className="absolute inset-0 bg-gradient-to-b from-agri-earth via-agri-earth/95 to-agri-earth dark:from-agri-dark dark:via-agri-dark/95 dark:to-agri-dark"></div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-black text-slate-800 dark:text-white mb-4">
            Project <span className="text-gradient">Milestones</span>
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Select a milestone below to view its details, scheduled date, and marks allocation.
          </p>
        </motion.div>

        {/* Dropdown */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative mb-10">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-full flex items-center justify-between px-6 py-4 rounded-2xl bg-white dark:bg-slate-800 border-2 border-agri-emerald/30 dark:border-agri-emerald/40 shadow-lg text-left hover:border-agri-emerald/60 transition-all"
          >
            <div className="flex items-center gap-3">
              <Flag size={20} className="text-agri-emerald shrink-0" />
              <span className="font-bold text-slate-800 dark:text-white text-lg">{selected.label}</span>
            </div>
            <motion.div animate={{ rotate: dropdownOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown size={20} className="text-agri-emerald" />
            </motion.div>
          </button>

          <AnimatePresence>
            {dropdownOpen && (
              <motion.ul
                initial={{ opacity: 0, y: -8, scaleY: 0.95 }}
                animate={{ opacity: 1, y: 0, scaleY: 1 }}
                exit={{ opacity: 0, y: -8, scaleY: 0.95 }}
                transition={{ duration: 0.15 }}
                className="absolute z-20 w-full mt-2 rounded-2xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-2xl overflow-hidden origin-top"
              >
                {milestones.map((m) => (
                  <li key={m.id}>
                    <button
                      onClick={() => { setSelected(m); setDropdownOpen(false); }}
                      className={`w-full text-left px-6 py-4 flex items-center gap-3 hover:bg-agri-emerald/5 dark:hover:bg-agri-emerald/10 transition-colors ${selected.id === m.id ? 'bg-agri-emerald/10 dark:bg-agri-emerald/15' : ''}`}
                    >
                      <Flag size={16} className="text-agri-emerald shrink-0" />
                      <span className="font-semibold text-slate-700 dark:text-slate-200">{m.label}</span>
                      <span className={`ml-auto text-xs font-bold px-2 py-1 rounded-full ${m.statusBg} ${m.statusColor}`}>{m.status}</span>
                    </button>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Detail Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="p-8 rounded-3xl bg-white/90 dark:bg-slate-800/80 backdrop-blur-md border border-gray-100 dark:border-slate-700/50 shadow-xl"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-black text-slate-800 dark:text-white mb-1">{selected.label}</h3>
                <span className={`text-sm font-bold px-3 py-1 rounded-full ${selected.statusBg} ${selected.statusColor}`}>
                  {selected.status}
                </span>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-agri-emerald/10 dark:bg-agri-emerald/15 border border-agri-emerald/20">
                  <Calendar size={18} className="text-agri-emerald" />
                  <div>
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Date</p>
                    <p className="font-bold text-slate-800 dark:text-white">{selected.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200/50 dark:border-amber-700/30">
                  <Award size={18} className="text-amber-500" />
                  <div>
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Marks</p>
                    <p className="font-bold text-slate-800 dark:text-white">{selected.marks}</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">{selected.description}</p>
          </motion.div>
        </AnimatePresence>

        {/* Summary bar */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10 grid grid-cols-2 sm:grid-cols-5 gap-3">
          {milestones.map((m) => (
            <button
              key={m.id}
              onClick={() => setSelected(m)}
              className={`p-4 rounded-2xl border-2 text-center transition-all ${
                selected.id === m.id
                  ? 'border-agri-emerald bg-agri-emerald/10 dark:bg-agri-emerald/15'
                  : 'border-gray-100 dark:border-slate-700/50 bg-white/70 dark:bg-slate-800/50 hover:border-agri-emerald/40'
              }`}
            >
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-1 leading-tight">{m.label}</p>
              <p className="text-lg font-black text-agri-emerald">{m.marks}</p>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Milestones;
