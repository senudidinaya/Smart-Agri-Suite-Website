import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src="/images/spice-bowls.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.08] dark:opacity-[0.15]" />
        <div className="absolute inset-0 bg-gradient-to-t from-agri-earth via-white/80 to-agri-earth dark:from-agri-dark dark:via-agri-slate/90 dark:to-agri-dark"></div>
      </div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-agri-emerald/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-black text-slate-800 dark:text-white mb-4">Get In <span className="text-gradient">Touch</span></h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">Interested in our research or want to collaborate? Reach out to the team.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:col-span-2 space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-800 text-agri-emerald shadow-md border border-gray-100 dark:border-slate-700 shrink-0"><MapPin size={22} /></div>
              <div>
                <h4 className="font-bold text-slate-800 dark:text-white mb-1">Location</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Faculty of Computing,<br />Sri Lanka Institute of Information Technology (SLIIT),<br />Malabe, Sri Lanka.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-800 text-blue-500 shadow-md border border-gray-100 dark:border-slate-700 shrink-0"><Mail size={22} /></div>
              <div>
                <h4 className="font-bold text-slate-800 dark:text-white mb-1">Email</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">research@smartagrisuite.lk</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-800 text-orange-500 shadow-md border border-gray-100 dark:border-slate-700 shrink-0"><Phone size={22} /></div>
              <div>
                <h4 className="font-bold text-slate-800 dark:text-white mb-1">Phone</h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm">+94 11 754 4801</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="md:col-span-3">
            <form className="p-8 rounded-3xl bg-white/90 dark:bg-slate-800/80 backdrop-blur-md border border-gray-100 dark:border-slate-700/50 shadow-xl space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 focus:outline-none focus:border-agri-emerald focus:ring-2 focus:ring-agri-emerald/20 transition-all text-slate-800 dark:text-white" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 focus:outline-none focus:border-agri-emerald focus:ring-2 focus:ring-agri-emerald/20 transition-all text-slate-800 dark:text-white" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Subject</label>
                <input type="text" placeholder="Research Collaboration" className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 focus:outline-none focus:border-agri-emerald focus:ring-2 focus:ring-agri-emerald/20 transition-all text-slate-800 dark:text-white" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Your Message</label>
                <textarea rows="4" placeholder="Write your message here..." className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-700 focus:outline-none focus:border-agri-emerald focus:ring-2 focus:ring-agri-emerald/20 transition-all text-slate-800 dark:text-white resize-none"></textarea>
              </div>
              <motion.button type="button" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full py-4 rounded-xl bg-gradient-to-r from-agri-emerald to-agri-leaf text-white font-bold flex items-center justify-center gap-2 shadow-xl shadow-agri-emerald/20 hover:shadow-agri-emerald/40 transition-shadow">
                <Send size={18} /> Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
