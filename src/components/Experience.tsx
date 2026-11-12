import React from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  Sparkles,
  CheckCircle2,
  Building2,
  Code,
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Work & Industry Exposure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Work <span className="text-gradient-blue">Experience</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Professional industry training and engineering internship experience applying web technologies and team-based development.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Guide Line */}
          <div className="absolute left-4 sm:left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-cyan-500 via-indigo-500 to-purple-500/20 hidden sm:block" />

          <div className="space-y-12">
            {experienceData.map((item, index) => (
              <div key={index} className="relative sm:pl-20">
                {/* Timeline Icon Node */}
                <div className="hidden sm:flex absolute left-5 -top-1 w-7 h-7 rounded-full bg-[#030712] border-2 border-cyan-400 items-center justify-center -translate-x-1/2 shadow-[0_0_12px_rgba(56,189,248,0.5)] z-10">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                </div>

                {/* Experience Card */}
                <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6 glass-panel-hover border border-white/10 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-2">
                        <Briefcase className="w-3.5 h-3.5" />
                        <span>{item.type}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {item.role}
                      </h3>
                      <div className="flex items-center gap-2 text-slate-300 font-medium text-sm mt-1">
                        <Building2 className="w-4 h-4 text-cyan-400" />
                        <span>{item.company}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 text-xs font-mono text-slate-400">
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-white/5">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-white/5">
                        <MapPin className="w-3.5 h-3.5 text-purple-400" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Accomplishment Bullets */}
                  <div className="space-y-3">
                    <p className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                      Key Responsibilities & Deliverables:
                    </p>
                    <ul className="space-y-2.5">
                      {item.description.map((bullet, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills Tag Strip */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-slate-400 mr-2 flex items-center gap-1">
                      <Code className="w-3.5 h-3.5 text-indigo-400" />
                      Skills:
                    </span>
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-900 text-slate-300 border border-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
