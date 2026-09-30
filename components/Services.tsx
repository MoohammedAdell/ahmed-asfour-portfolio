'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { Smartphone, Layout, Server, Zap } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Smartphone: <Smartphone size={28} className="text-[#42A5F5]" />,
  Layout: <Layout size={28} className="text-[#00D4FF]" />,
  Server: <Server size={28} className="text-[#8B5CF6]" />,
  Zap: <Zap size={28} className="text-amber-400" />
};

export default function Services() {
  const { services } = PORTFOLIO_DATA;

  return (
    <section id="services" className="py-24 bg-[#050816] relative border-t border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#00D4FF] font-mono text-sm uppercase tracking-widest font-semibold mb-2">
            Services
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            What I Can Build
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00D4FF] to-[#42A5F5] mx-auto mt-4 rounded-full" />
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-[#0B1120] border border-slate-800 hover:border-[#42A5F5]/40 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 w-fit mb-6 group-hover:scale-110 transition-transform">
                {iconMap[service.iconName] || <Smartphone size={28} />}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#42A5F5] transition-colors">
                {service.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
