import React, { useState } from 'react';
import {
  Code2,
  Layout,
  Server,
  Database,
  Brain,
  Terminal,
  Cpu,
  Sparkles,
  Layers,
  Check,
} from 'lucide-react';
import { skillsCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...skillsCategories.map((c) => c.title)];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-blue-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-purple-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Brain':
        return <Brain className="w-5 h-5 text-pink-400" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-amber-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      default:
        return <Layers className="w-5 h-5 text-cyan-400" />;
    }
  };

  const filteredCategories =
    selectedCategory === 'All'
      ? skillsCategories
      : skillsCategories.filter((cat) => cat.title === selectedCategory);

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tech Stack & Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Technical <span className="text-gradient-purple">Skills</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            A comprehensive overview of programming languages, modern frameworks, data science libraries, and core computer science foundations.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500/30 to-purple-500/30 text-white border border-cyan-500/50 shadow-[0_0_15px_rgba(99,102,241,0.25)] font-semibold'
                    : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-white/5'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className="glass-panel p-6 rounded-3xl space-y-5 glass-panel-hover flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-slate-900/90 border border-white/10">
                      {getCategoryIcon(category.iconName)}
                    </div>
                    <h3 className="text-base font-bold text-white tracking-wide">
                      {category.title}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    {category.skills.length} skills
                  </span>
                </div>

                {/* Skill Badges */}
                <div className="pt-4 flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`group flex items-center justify-between gap-2 px-3 py-1.5 rounded-xl text-xs transition-all duration-200 ${
                        skill.featured
                          ? 'bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950/40 text-slate-200 border border-cyan-500/30 hover:border-cyan-400/60 hover:text-white shadow-sm'
                          : 'bg-slate-900/60 text-slate-300 border border-white/5 hover:border-white/20 hover:text-white'
                      }`}
                    >
                      <span className="font-medium tracking-wide flex items-center gap-1.5">
                        {skill.featured && (
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                        )}
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 group-hover:text-cyan-300 transition-colors">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Note */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span className="flex items-center gap-1 text-emerald-400/90">
                  <Check className="w-3 h-3" />
                  Verified on projects
                </span>
                <span>Production / Contest</span>
              </div>
            </div>
          ))}
        </div>

        {/* Core Concepts Banner */}
        <div className="mt-12 glass-panel p-6 rounded-3xl border border-indigo-500/20 bg-gradient-to-r from-slate-900/90 via-indigo-950/20 to-slate-900/90 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 shrink-0">
              <Cpu className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                Strong Foundation in Computer Science Fundamentals
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Proficient in Data Structures, Algorithms, Complexity Analysis, DBMS, Operating Systems & Networks.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="px-3.5 py-1.5 rounded-xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-mono font-semibold">
              200+ DSA Solved
            </span>
            <span className="px-3.5 py-1.5 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold">
              Clean Architecture
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
