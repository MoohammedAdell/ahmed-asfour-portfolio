'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '@/data/portfolio';
import { Briefcase, Calendar, MapPin, ArrowUpRight } from 'lucide-react';

export default function Experience() {
  const { experiences } = PORTFOLIO_DATA;

  return (
    <section
      id="experience"
      className="relative overflow-hidden border-t border-slate-800/40 bg-[#050816] py-24"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#42A5F5]/5 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-3 font-mono text-sm font-semibold uppercase tracking-[0.25em] text-[#8B5CF6]">
            Career Journey
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Work Experience
          </h2>

          <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#42A5F5]" />

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            A look at my professional journey, the experience I’ve gained,
            and the work I’ve contributed to.
          </p>
        </motion.div>

        {/* Experience */}
        <div className="relative mx-auto max-w-3xl">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Timeline Node */}
              <div className="relative z-10 mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#42A5F5]/30 bg-[#0B1120] text-[#42A5F5] shadow-[0_0_30px_rgba(66,165,245,0.12)]">
                <Briefcase size={22} />
              </div>

              {/* Connecting Line */}
              <div className="absolute left-1/2 top-14 h-6 w-px -translate-x-1/2 bg-gradient-to-b from-[#42A5F5]/50 to-transparent" />

              {/* Card */}
              <div className="group relative overflow-hidden rounded-3xl border border-slate-800/80 bg-[#0B1120]/90 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#42A5F5]/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] sm:p-8">
                {/* Card Glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#42A5F5]/10 blur-3xl transition-all duration-500 group-hover:bg-[#42A5F5]/15" />

                <div className="relative">
                  {/* Top Row */}
                  <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="mb-2 flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#42A5F5] shadow-[0_0_10px_rgba(66,165,245,0.8)]" />

                        <span className="text-sm font-semibold text-[#00D4FF]">
                          {exp.company}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-white sm:text-3xl">
                        {exp.role}
                      </h3>
                    </div>

                    {/* Period */}
                    <div className="flex w-fit items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-4 py-2 font-mono text-xs text-slate-300">
                      <Calendar size={13} className="text-[#42A5F5]" />
                      {exp.period}
                    </div>
                  </div>

                  {/* Location */}
                  <div className="mb-6 flex items-center gap-2 text-sm text-slate-400">
                    <MapPin size={15} className="text-[#8B5CF6]" />
                    {exp.location}
                  </div>

                  {/* Divider */}
                  <div className="mb-6 h-px bg-gradient-to-r from-slate-800 via-slate-700/60 to-transparent" />

                  {/* Description */}
                  <p className="mb-6 text-sm leading-7 text-slate-300 sm:text-base">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  {exp.highlights?.length > 0 && (
                    <div className="space-y-3">
                      {exp.highlights.map((item, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex items-start gap-3 text-sm text-slate-400"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#42A5F5]" />

                          <span className="leading-6">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Bottom Label */}
                  <div className="mt-8 flex items-center justify-between border-t border-slate-800/70 pt-5">
                    <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                      Professional Experience
                    </span>

                    <ArrowUpRight
                      size={18}
                      className="text-slate-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#42A5F5]"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}