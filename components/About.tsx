'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/portfolio';

export default function About() {
  const { profile } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-24 bg-[#050816] relative border-t border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#42A5F5] font-mono text-sm uppercase tracking-widest font-semibold mb-2">
            Get To Know Me
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#42A5F5] to-[#00D4FF] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Bio Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            {profile.about.map((paragraph, idx) => (
              <p key={idx} className="bg-[#0B1120]/40 border border-slate-800/80 p-6 rounded-2xl backdrop-blur-sm">
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {profile.stats.map((stat, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#0B1120] border border-slate-800/80 hover:border-[#42A5F5]/50 transition-all duration-300 group hover:-translate-y-1"
              >
                <p className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#42A5F5] to-[#00D4FF] font-mono">
                  {stat.value}{stat.suffix}
                </p>
                <p className="mt-2 text-sm text-slate-400 font-medium group-hover:text-slate-200 transition-colors">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
