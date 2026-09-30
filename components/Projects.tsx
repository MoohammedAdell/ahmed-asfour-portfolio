'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, X, CheckCircle, Smartphone } from 'lucide-react';
import Image from 'next/image';

export interface Project {
  id: string;
  title: string;
  category: string;
  image?: string;
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  github: string;
  demo: string;
}


const PROJECTS_DATA: Project[] = [
  {
    id: 'neuronest',
    title: 'NeuroNest - Autism Support App',
    category: 'Flutter',
    image: '/img1.jpeg',
    description:
      'A specialized Flutter application designed to assist children with autism spectrum disorder (ASD) and support their caregivers through interactive sensory activities, progress tracking, and structured visual schedules.',
    longDescription:
      'NeuroNest provides an inclusive digital environment tailored for neurodiverse individuals. It incorporates visual communication boards, customizable sensory relaxation modes, behavioral tracking, and direct reporting for care specialists.',
    problem:
      'Caregivers and therapists lack unified mobile tools to monitor behavioral patterns, facilitate daily scheduling, and reduce visual/sensory overstimulation for children with autism.',
    solution:
      'Developed an accessible mobile experience with calm visual themes, intuitive PECS-inspired visual cards, real-time activity tracking, and secure offline synchronization using Flutter.',
    features: [
      'Interactive Visual Schedules & Digital Routine Cards',
      'Sensory-Friendly Calming Exercises & Games',
      'Caregiver Dashboard & Dynamic Progress Analytics',
      'Custom Reminders & Visual Behavioral Triggers'
    ],
    technologies: ['Flutter', 'Dart', 'Firebase', 'State Management', 'REST API'],
    github: 'https://github.com/a7med3sfour099/NeuroNest',
    demo: 'https://github.com/a7med3sfour099/NeuroNest'
  },
  {
    id: 'meal-planner',
    title: 'Meal Planning & Food Delivery',
    category: 'Flutter',
    image: '/img2.jpeg',
    description:
      'A cross-platform mobile application for personalized meal planning, dietary tracking, and seamless food ordering with intelligent nutrition analysis.',
    longDescription:
      'An end-to-end culinary and nutrition solution enabling users to plan daily meals, auto-generate organized shopping lists, track calorie intake, and order healthy dishes directly from partner kitchens.',
    problem:
      'Busy individuals struggle to maintain healthy eating habits and coordinate grocery shopping or meal ordering based on personalized calorie targets.',
    solution:
      'Built a Flutter solution featuring automated meal generation, dynamic macro-nutrient breakdown graphs, and a streamlined checkout flow for meal delivery.',
    features: [
      'Customizable Weekly Meal Plans & Calorie Trackers',
      'Automated Shopping List Generator',
      'Real-Time Food Order Tracking & Menu Customization',
      'Smart Recipe Recommendations based on Macros'
    ],
    technologies: ['Flutter', 'Dart', 'BLoC Pattern', 'REST API', 'JSON Parsing'],
    github: 'https://github.com/a7med3sfour099/Meal-planning-app',
    demo: 'https://github.com/a7med3sfour099/Meal-planning-app'
  },
  {
    id: 'ecommerce-tech-store',
    title: 'PulseStore - Tech E-Commerce App',
    category: 'UI/UX',
    description:
      'A modern e-commerce mobile experience featuring custom UI micro-animations, fast product discovery, secure checkout, and interactive order tracking.',
    longDescription:
      'PulseStore demonstrates high-performance mobile UI patterns, smooth card interactions, advanced category filters, cart management, and seamless multi-step order processing.',
    problem:
      'Traditional shopping apps suffer from bloated interface hierarchy, slow navigation transitions, and complex multi-step checkout drop-offs.',
    solution:
      'Engineered a fluid, high-conversion mobile storefront with optimistic UI updates, integrated payment gateways, and crisp product visualization.',
    features: [
      'Interactive Product Showcase with Fluid Animations',
      'Smart Search & Dynamic Multi-Attribute Filters',
      'Persistent Shopping Cart & Wishlist Synchronization',
      'Multi-Payment Gateway Integration Flow'
    ],
    technologies: ['Flutter', 'Dart', 'Provider', 'Stripe API', 'Tailwind Colors'],
    github: 'https://github.com/a7med3sfour099',
    demo: 'https://github.com/a7med3sfour099'
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-[#050816] relative border-t border-slate-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[#42A5F5] font-mono text-sm uppercase tracking-widest font-semibold mb-2">
            Selected Portfolio
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#42A5F5] to-[#8B5CF6] mx-auto mt-4 rounded-full" />
        </div>

        {/* 3 Main Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-[#0B1120] border border-slate-800 rounded-3xl overflow-hidden hover:border-slate-700 transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 group shadow-xl hover:shadow-[#42A5F5]/5"
            >
              <div>
                {/* Visual Banner / Image Showcase */}
                <div className="w-full h-52 rounded-2xl bg-gradient-to-br from-slate-900 to-[#050816] border border-slate-800/80 overflow-hidden relative mb-6 group-hover:border-[#42A5F5]/40 transition-colors">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col justify-center items-center">
                      <div className="w-12 h-12 rounded-xl bg-[#42A5F5]/10 border border-[#42A5F5]/30 flex items-center justify-center text-[#42A5F5] mb-3 group-hover:scale-110 transition-transform duration-300">
                        <Smartphone size={24} />
                      </div>
                      <span className="text-xs font-mono text-[#42A5F5] uppercase tracking-widest font-medium">
                        {project.category}
                      </span>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-slate-500 font-medium">
                    Project 0{idx + 1}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-[#42A5F5]/10 text-[#42A5F5] border border-[#42A5F5]/20 font-semibold">
                    Mobile App
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#42A5F5] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Bottom Actions */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-[#42A5F5] to-[#8B5CF6] text-white font-semibold text-xs flex items-center justify-center gap-2 hover:shadow-[0_0_15px_rgba(66,165,245,0.4)] transition-all"
                >
                  <Eye size={15} />
                  Details
                </button>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors"
                  aria-label="GitHub Repository"
                >
                  <Github size={17} />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors"
                  aria-label="Live Demo"
                >
                  <ExternalLink size={17} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Interactive Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0B1120] border border-slate-700 rounded-3xl p-6 sm:p-8 z-10 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-20 p-2 rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                aria-label="Close Modal"
              >
                <X size={20} />
              </button>

              <div className="space-y-6">
                {selectedProject.image && (
                  <div className="w-full h-64 relative rounded-2xl overflow-hidden border border-slate-800">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                <div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#42A5F5]/20 text-[#42A5F5] border border-[#42A5F5]/30">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
                    {selectedProject.title}
                  </h3>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                {/* Problem & Solution */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                    <h5 className="text-xs font-mono text-red-400 uppercase font-semibold mb-1">
                      The Challenge
                    </h5>
                    <p className="text-xs text-slate-300 leading-relaxed">{selectedProject.problem}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                    <h5 className="text-xs font-mono text-emerald-400 uppercase font-semibold mb-1">
                      The Solution
                    </h5>
                    <p className="text-xs text-slate-300 leading-relaxed">{selectedProject.solution}</p>
                  </div>
                </div>

                {/* Features List */}
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
                    Key Capabilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProject.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle size={14} className="text-[#00D4FF] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 border border-slate-800 text-slate-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Links */}
                <div className="flex gap-4 pt-4 border-t border-slate-800">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#42A5F5] to-[#8B5CF6] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(66,165,245,0.4)] transition-all"
                  >
                    <ExternalLink size={16} />
                    Live Preview
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}