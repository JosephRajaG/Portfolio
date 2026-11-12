import React from 'react';
import {
  Award,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  BookOpen,
  Calendar,
  ShieldCheck,
} from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Credentials & Continued Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Professional <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Verified technical certifications spanning Python programming, full-stack web engineering, and enterprise data analytics.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel p-6 rounded-3xl space-y-5 glass-panel-hover flex flex-col justify-between border border-white/10 relative group"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-cyan-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono text-cyan-300 bg-cyan-500/10 border border-cyan-500/20">
                    {cert.year}
                  </span>
                </div>

                {/* Title & Issuer */}
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-400 font-mono">
                    {cert.issuer}
                  </p>
                </div>

                {/* Skills Learned */}
                <div className="space-y-2 pt-2">
                  <p className="text-[11px] font-mono uppercase text-slate-500">
                    Competencies:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsLearned.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md text-[11px] bg-slate-900/80 text-slate-300 border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Verified Pill */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-mono text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Credential</span>
                </span>
                <span className="font-mono text-[11px] text-slate-500">
                  {cert.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
