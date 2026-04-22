import React from 'react';
import { Leaf, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-agri-slate border-t border-gray-200 dark:border-slate-800 pt-16 pb-8 transition-colors duration-500">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-agri-emerald to-agri-leaf flex items-center justify-center">
                <Leaf className="text-white" size={18} />
              </div>
              <span className="text-lg font-extrabold tracking-tight text-slate-800 dark:text-white">
                Smart<span className="text-agri-emerald">Agri</span>
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              An AI-powered mobile solution transforming sustainable agriculture in Sri Lanka through real-time geospatial analysis and dynamic supply chain management.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-slate-800 dark:text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {['Home', 'Research', 'Methodology', 'Team'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-slate-600 dark:text-slate-400 hover:text-agri-emerald dark:hover:text-agri-emerald transition-colors font-medium"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-slate-800 dark:text-white uppercase tracking-wider mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-agri-emerald mt-0.5 shrink-0" />
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Faculty of Computing, SLIIT, Malabe, Sri Lanka
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-agri-emerald mt-0.5 shrink-0" />
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  research@smartagrisuite.lk
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-gray-200 dark:border-slate-800 pt-8 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            &copy; 2026 Smart Agri-Suite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
