'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const { profile } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050816] border-t border-slate-800/80 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          <div>
            <h3 className="text-xl font-bold text-white">{profile.name}</h3>
            <p className="text-slate-400 text-sm mt-1">
              Flutter Developer crafting beautiful mobile experiences.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-[#0B1120] border border-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-[#0B1120] border border-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={profile.social.email}
              className="p-2.5 rounded-xl bg-[#0B1120] border border-slate-800 text-slate-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Ahmed Asfour. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-[#42A5F5] transition-colors group"
          >
            <span>Back to top</span>
            <div className="p-1.5 rounded-lg bg-[#0B1120] border border-slate-800 group-hover:border-[#42A5F5]/40 transition-colors">
              <ArrowUp size={14} />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}
