import React, { useState } from 'react';
import {
  ExternalLink,
  Sparkles,
  ArrowUpRight,
  Code2,
  Brain,
  Compass,
  Database,
  Layers,
  ChevronRight,
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & ML':
        return <Brain className="w-4 h-4 text-purple-400" />;
      case 'Full Stack':
        return <Compass className="w-4 h-4 text-cyan-400" />;
      case 'Data Engineering':
        return <Database className="w-4 h-4 text-emerald-400" />;
      default:
        return <Code2 className="w-4 h-4 text-cyan-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Innovations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            A showcase of production-ready AI applications, full-stack web platforms, and automated data quality systems built with modern engineering practices.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="glass-panel rounded-3xl overflow-hidden flex flex-col justify-between glass-panel-hover group relative"
            >
              {/* Card Banner Graphic Header */}
              <div
                className={`relative h-44 w-full bg-gradient-to-br ${project.imagePlaceholderGradient} p-6 flex flex-col justify-between border-b border-white/10 overflow-hidden`}
              >
                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-20 grid-background pointer-events-none" />
                <div className="absolute -right-8 -bottom-8 w-36 h-36 rounded-full bg-white/5 blur-xl pointer-events-none" />

                {/* Top Banner Row */}
                <div className="flex items-center justify-between z-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#030712]/70 backdrop-blur-md border border-white/10 text-xs font-mono font-medium text-slate-200">
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#030712]/60 text-slate-300 border border-white/10">
                    {project.year}
                  </span>
                </div>

                {/* Bottom Banner Title */}
                <div className="z-10">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300/80">
                    Project 0{index + 1}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-4">
                  <p className="text-xs font-mono text-cyan-400 font-medium">
                    {project.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlights Pill Tags */}
                  <div className="space-y-1.5">
                    {project.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-[11px] text-slate-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                        <span className="truncate">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-slate-900/90 text-slate-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white border border-white/10 hover:border-cyan-500/40 transition-all hover:scale-[1.02]"
                  >
                    <GithubIcon size={14} />
                    <span>View Code</span>
                  </a>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-medium text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 transition-colors cursor-pointer"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
