import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users } from 'lucide-react';

const supervisors = [
  { name: 'Mr. Dhammika De Silva', role: 'Project Supervisor' },
  { name: 'Dr. Lakmini Abeywardhana', role: 'Co-Supervisor' },
];

const team = [
  { name: 'Eranga Bowatte', role: 'Team Leader', initials: 'EB', gradient: 'from-agri-emerald to-teal-500' },
  { name: 'Chamindu Navod', role: 'Team Member', initials: 'CN', gradient: 'from-blue-500 to-cyan-500' },
  { name: 'Janakalani Maheepala', role: 'Team Member', initials: 'JM', gradient: 'from-purple-500 to-violet-500' },
  { name: 'Senudi Rupasinghe', role: 'Team Member', initials: 'SR', gradient: 'from-amber-500 to-orange-500' },
];

const Team = () => {
  return (
    <section id="team" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/spice-farm.png"
          alt="Spice farm landscape"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.04] dark:opacity-[0.08]"
        />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-slate-800 dark:text-white mb-4">
            Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            The dedicated researchers and advisors behind the Smart Agri-Suite framework.
          </p>
        </motion.div>

        {/* Supervisors */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-10">
            <GraduationCap className="text-agri-emerald" size={24} />
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Project Supervisors</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {supervisors.map((sup, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="w-full sm:w-80 p-8 rounded-3xl bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm border-2 border-agri-emerald/20 dark:border-agri-emerald/30 shadow-lg hover:shadow-2xl hover:border-agri-emerald/40 transition-all text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-agri-emerald to-agri-leaf flex items-center justify-center shadow-xl shadow-agri-emerald/20">
                  <GraduationCap size={36} className="text-white" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 dark:text-white mb-1">{sup.name}</h4>
                <p className="text-agri-emerald font-semibold text-sm uppercase tracking-wider">{sup.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Research Team */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-10">
            <Users className="text-agri-emerald" size={24} />
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Research Team</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="p-6 rounded-3xl bg-white/80 dark:bg-slate-800/60 backdrop-blur-sm border border-gray-100 dark:border-slate-700/50 shadow-lg hover:shadow-2xl transition-all text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center shadow-lg`}>
                  <span className="text-white font-black text-lg">{member.initials}</span>
                </div>
                <h4 className="text-lg font-bold text-slate-800 dark:text-white mb-1">{member.name}</h4>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
