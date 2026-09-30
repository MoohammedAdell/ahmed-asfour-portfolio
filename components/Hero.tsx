'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, Smartphone, Zap, Flame, Cpu, Code } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolio';

export default function Hero() {
  const { profile } = PORTFOLIO_DATA;

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#42A5F5]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#8B5CF6]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-6 text-center lg:text-left"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#42A5F5]/10 border border-[#42A5F5]/30 text-[#42A5F5] text-xs sm:text-sm font-medium backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D4FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#42A5F5]"></span>
            </span>
            Available for opportunities
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-100 leading-[1.1]">
            I Build Beautiful <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#42A5F5] via-[#00D4FF] to-[#8B5CF6]">
              Flutter
            </span>{' '}
            Experiences.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            {profile.bio}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#42A5F5] to-[#8B5CF6] text-white font-semibold shadow-lg shadow-[#42A5F5]/25 hover:shadow-[#42A5F5]/40 hover:scale-[1.02] active:scale-95 transition-all text-center"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#0B1120] border border-slate-700/80 text-slate-200 font-semibold hover:bg-slate-800/60 hover:border-slate-500 hover:scale-[1.02] active:scale-95 transition-all text-center"
            >
              Let's Talk
            </a>
          </div>

          {/* Social Links */}
          <div className="pt-4 flex items-center justify-center lg:justify-start gap-5">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-[#0B1120] border border-slate-800 text-slate-400 hover:text-[#42A5F5] hover:border-[#42A5F5]/40 transition-all"
              aria-label="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-[#0B1120] border border-slate-800 text-slate-400 hover:text-[#42A5F5] hover:border-[#42A5F5]/40 transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={profile.social.email}
              className="p-3 rounded-xl bg-[#0B1120] border border-slate-800 text-slate-400 hover:text-[#42A5F5] hover:border-[#42A5F5]/40 transition-all"
              aria-label="Email Contact"
            >
              <Mail size={20} />
            </a>
          </div>
        </motion.div>

        {/* Right Hero Visual: Phone Mockup with Floating Tech Cards */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center relative"
        >
          {/* Smartphone Container */}
          <div className="relative w-[280px] sm:w-[320px] h-[580px] sm:h-[620px] bg-slate-900 rounded-[48px] p-3 border-4 border-slate-700/60 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] backdrop-blur-2xl">
            {/* Screen Notch */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-32 h-5 bg-slate-900 rounded-full z-30 flex items-center justify-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
              <div className="w-2 h-2 rounded-full bg-[#42A5F5]/40" />
            </div>

            {/* Simulated Mobile App Screen */}
            <div className="w-full h-full bg-[#050816] rounded-[38px] overflow-hidden pt-10 px-4 pb-4 flex flex-col justify-between border border-slate-800/80 relative">
              {/* Fake App Header */}
              <div className="flex justify-between items-center pb-3 border-b border-slate-800/60">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#42A5F5]/20 flex items-center justify-center text-[#42A5F5] font-bold text-xs">
                    AA
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-slate-400">Welcome Back</p>
                    <p className="text-xs font-semibold text-slate-200">Ahmed Asfour</p>
                  </div>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#00D4FF]" />
              </div>

              {/* Fake Dashboard Card */}
              <div className="my-3 p-3.5 rounded-2xl bg-gradient-to-br from-[#42A5F5]/20 to-[#8B5CF6]/20 border border-[#42A5F5]/30">
                <p className="text-[10px] text-slate-300">Flutter Wallet Balance</p>
                <p className="text-xl font-black text-white mt-1">$24,850.00</p>
                <div className="mt-3 flex justify-between items-center text-[10px] text-slate-400">
                  <span>**** 4892</span>
                  <span className="text-[#00D4FF] font-semibold">Active</span>
                </div>
              </div>

              {/* Fake Transaction List */}
              <div className="space-y-2 flex-1 overflow-hidden">
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Recent Activity</p>
                {[
                  { name: 'Firebase Cloud Storage', date: 'Today, 14:20', amount: '-$12.50', color: '#8B5CF6' },
                  { name: 'REST API Payload', date: 'Yesterday', amount: '+$450.00', color: '#00D4FF' },
                  { name: 'BLoC State Sync', date: 'Oct 12', amount: '+$1,200.00', color: '#42A5F5' }
                ].map((item, idx) => (
                  <div key={idx} className="p-2 rounded-xl bg-[#0B1120] border border-slate-800/60 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-slate-800 flex items-center justify-center text-xs font-bold" style={{ color: item.color }}>
                        F
                      </div>
                      <div>
                        <p className="text-[11px] font-medium text-slate-200">{item.name}</p>
                        <p className="text-[9px] text-slate-500">{item.date}</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-mono text-slate-300">{item.amount}</span>
                  </div>
                ))}
              </div>

              {/* Fake App Bottom Nav */}
              <div className="pt-2 border-t border-slate-800/80 flex justify-around items-center">
                <div className="w-8 h-1.5 rounded-full bg-[#42A5F5]" />
                <div className="w-2 h-2 rounded-full bg-slate-700" />
                <div className="w-2 h-2 rounded-full bg-slate-700" />
              </div>
            </div>
          </div>

          {/* Floating Technology Badge - Flutter */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-4 -left-6 sm:left-0 bg-[#0B1120]/90 backdrop-blur-md border border-[#42A5F5]/40 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-3 z-30"
          >
            <div className="w-9 h-9 rounded-xl bg-[#42A5F5]/20 flex items-center justify-center text-[#42A5F5]">
              <Smartphone size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Flutter</p>
              <p className="text-[10px] text-slate-400">Cross-Platform Engine</p>
            </div>
          </motion.div>

          {/* Floating Technology Badge - Dart */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/3 -right-6 sm:-right-4 bg-[#0B1120]/90 backdrop-blur-md border border-[#00D4FF]/40 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-3 z-30"
          >
            <div className="w-9 h-9 rounded-xl bg-[#00D4FF]/20 flex items-center justify-center text-[#00D4FF]">
              <Code size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Dart</p>
              <p className="text-[10px] text-slate-400">OOP & Asynchronous</p>
            </div>
          </motion.div>

          {/* Floating Technology Badge - Firebase */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-16 -left-6 sm:left-2 bg-[#0B1120]/90 backdrop-blur-md border border-[#8B5CF6]/40 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-3 z-30"
          >
            <div className="w-9 h-9 rounded-xl bg-[#8B5CF6]/20 flex items-center justify-center text-[#8B5CF6]">
              <Flame size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Firebase</p>
              <p className="text-[10px] text-slate-400">Realtime & Auth</p>
            </div>
          </motion.div>

          {/* Floating Badge - REST API */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 3.8, ease: "easeInOut", delay: 1.5 }}
            className="absolute -bottom-4 right-4 bg-[#0B1120]/90 backdrop-blur-md border border-slate-700 px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-2 z-30"
          >
            <Zap size={16} className="text-amber-400" />
            <span className="text-xs font-semibold text-slate-200">REST API</span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
