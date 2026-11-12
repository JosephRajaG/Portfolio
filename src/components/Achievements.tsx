import React from 'react';
import {
  Trophy,
  Award,
  Sparkles,
  Calendar,
  Building,
  CheckCircle2,
  ExternalLink,
  Zap,
} from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Competitions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Key <span className="text-gradient-purple">Achievements</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Distinctions earned in national-tier hackathons and collegiate competitive programming events.
          </p>
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievementsData.map((item, index) => (
            <div
              key={item.id}
              className="glass-panel p-6 sm:p-8 rounded-3xl space-y-6 glass-panel-hover border border-white/10 relative overflow-hidden group flex flex-col justify-between"
            >
              {/* Decorative Accent Glow */}
              <div
                className={`absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none ${
                  index === 0 ? 'bg-purple-500/15' : 'bg-cyan-500/15'
                }`}
              />

              <div className="space-y-4">
                {/* Header with Icon and Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="p-3 rounded-2xl bg-slate-900 border border-white/10 text-amber-400">
                    {index === 0 ? (
                      <Trophy className="w-6 h-6 text-yellow-400" />
                    ) : (
                      <Award className="w-6 h-6 text-cyan-400" />
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30">
                      {item.badge}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-mono text-slate-400 bg-slate-900 border border-white/5">
                      {item.year}
                    </span>
                  </div>
                </div>

                {/* Title & Event */}
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-cyan-400">
                    {item.event} • <span className="text-slate-300">{item.organizer}</span>
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Impact Tags Strip */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                {item.impactTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-900 text-slate-300 border border-white/5"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
