import React from 'react';
import {
  Code,
  Trophy,
  ExternalLink,
  Sparkles,
  TrendingUp,
  Award,
  Zap,
  CheckCircle,
} from 'lucide-react';
import { competitiveData } from '../data/portfolioData';

export const CompetitiveProgramming: React.FC = () => {
  return (
    <section id="competitive" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            <span>Problem Solving & Algorithms</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Competitive <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300">Programming</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Active participant in global coding contests across LeetCode, CodeChef, Codeforces, and AtCoder with over 300+ solved algorithmic problems.
          </p>
        </div>

        {/* Global Summary Metric Strip */}
        <div className="mb-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="glass-panel p-5 rounded-2xl border-l-4 border-l-amber-500">
            <span className="text-xs font-mono text-slate-400">LEETCODE HIGHEST</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono mt-1">
              1690 Max
            </div>
            <p className="text-xs text-slate-400 mt-1">Top 3.4% worldwide rank</p>
          </div>

          <div className="glass-panel p-5 rounded-2xl border-l-4 border-l-purple-500">
            <span className="text-xs font-mono text-slate-400">DSA PROBLEMS</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-purple-400 font-mono mt-1">
              300+ Solved
            </div>
            <p className="text-xs text-slate-400 mt-1">Arrays, Trees, Graphs, DP</p>
          </div>

          <div className="glass-panel p-5 rounded-2xl border-l-4 border-l-cyan-500">
            <span className="text-xs font-mono text-slate-400">CODECHEF RATING</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono mt-1">
              1544 (2★)
            </div>
            <p className="text-xs text-slate-400 mt-1">Highest Rank #1478</p>
          </div>

          <div className="glass-panel p-5 rounded-2xl border-l-4 border-l-emerald-500">
            <span className="text-xs font-mono text-slate-400">CODEFORCES & ATCODER</span>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono mt-1">
              Active CP
            </div>
            <p className="text-xs text-slate-400 mt-1">Regular contest competitor</p>
          </div>
        </div>

        {/* Platform Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {competitiveData.map((item) => (
            <div
              key={item.platform}
              className={`glass-panel p-6 rounded-3xl flex flex-col justify-between space-y-6 glass-panel-hover border ${item.colorScheme.border} relative overflow-hidden group`}
            >
              {/* Card Ambient Glow */}
              <div
                className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-br ${item.colorScheme.gradient} rounded-full blur-2xl pointer-events-none`}
              />

              <div>
                {/* Platform Name & Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-slate-900 border border-white/10">
                      <Code className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white">
                      {item.platform}
                    </h3>
                  </div>
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-mono font-semibold border ${item.colorScheme.badgeBg}`}
                  >
                    {item.rankBadge}
                  </span>
                </div>

                {/* Primary Metric Showcase */}
                <div className="pt-5 space-y-1">
                  <span className="text-xs font-mono uppercase text-slate-400">
                    {item.highlightLabel}
                  </span>
                  <div className="text-3xl font-extrabold text-white font-mono tracking-tight">
                    {item.highlightMetric}
                  </div>
                </div>

                {/* Extra Stats List */}
                <div className="pt-5 space-y-2.5">
                  {item.extraDetails.map((detail, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-slate-300"
                    >
                      <Zap className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href={item.profileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-white/10 hover:border-white/20 transition-all"
                >
                  <span>View {item.platform} Profile</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
