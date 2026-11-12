import React, { useEffect } from 'react';
import { X, ExternalLink, Sparkles, CheckCircle2, Layers, Cpu } from 'lucide-react';
import { GithubIcon } from './Icons';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-panel bg-[#070b1a] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900/80 border border-white/10 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
              {project.category}
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-mono text-slate-400 bg-slate-900 border border-white/5">
              Year {project.year}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-cyan-300 font-medium">
            {project.subtitle}
          </p>
        </div>

        {/* Abstract / Overview */}
        <div className="p-4 rounded-2xl bg-slate-900/70 border border-white/5 space-y-2">
          <p className="text-xs font-mono uppercase text-slate-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            System Overview
          </p>
          <p className="text-sm text-slate-200 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Engineering Highlights */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
            <Layers className="w-4 h-4 text-purple-400" />
            Architectural & Implementation Details
          </h4>
          <ul className="space-y-2.5">
            {project.fullDescription.map((desc, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed"
              >
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{desc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Matrix */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
            <Cpu className="w-4 h-4 text-amber-400" />
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-900 text-slate-200 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/25 hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all"
            >
              <GithubIcon size={16} />
              <span>Explore GitHub Repository</span>
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-medium bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
