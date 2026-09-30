'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { Smartphone, Server, Wrench, Layers, CheckCircle2 } from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  "Mobile Development": <Smartphone className="text-[#42A5F5]" size={24} />,
  "Backend & Services": <Server className="text-[#00D4FF]" size={24} />,
  "Tools & Environment": <Wrench className="text-[#8B5CF6]" size={24} />,
  "Architecture & Best Practices": <Layers className="text-emerald-400" size={24} />
};

export default function Skills() {
  const { skills } = PORTFOLIO_DATA;

  return (
    <section id="skills" className="py-24 bg-[#050816] relative border-t border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#00D4FF] font-mono text-sm uppercase tracking-widest font-semibold mb-2">
            Technical Proficiency
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & Tech Stack
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] mx-auto mt-4 rounded-full" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#0B1120] border border-slate-800/80 rounded-2xl p-6 sm:p-8 hover:border-slate-700 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  {categoryIcons[category.title] || <CheckCircle2 className="text-[#42A5F5]" size={24} />}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all duration-200 ${
                      skill.featured
                        ? 'bg-gradient-to-r from-[#42A5F5]/20 to-[#00D4FF]/20 border border-[#42A5F5]/60 text-white shadow-[0_0_15px_rgba(66,165,245,0.2)]'
                        : 'bg-slate-900/80 border border-slate-800 text-slate-300 hover:border-slate-600 hover:text-white'
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${skill.featured ? 'bg-[#00D4FF]' : 'bg-slate-500'}`} />
                    {skill.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
