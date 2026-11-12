import React from 'react';
import {
  GraduationCap,
  MapPin,
  Calendar,
  Award,
  BookOpen,
  Code2,
  Cpu,
  Sparkles,
  CheckCircle2,
  Brain,
  Compass,
} from 'lucide-react';
import { personalInfo, educationData } from '../data/portfolioData';

export const About: React.FC = () => {
  const highlights = [
    {
      icon: <Brain className="w-5 h-5 text-purple-400" />,
      title: 'AI & Bio-Signal Systems',
      description:
        'Experienced in designing adaptive learning models using Deep Neural Networks and EEG & ECG physiological signal classification, recognized at IIT Madras Shaastra.',
    },
    {
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
      title: 'Full Stack Architecture',
      description:
        'Hands-on with React, FastAPI, Node.js, and Tailwind CSS, building responsive interfaces backed by scalable REST APIs and automated data pipelines.',
    },
    {
      icon: <Cpu className="w-5 h-5 text-amber-400" />,
      title: 'Competitive Problem Solver',
      description:
        'Solved 300+ problems on LeetCode with 1690 max rating (top 3.4%), 2-Star on CodeChef, with strong intuition in graphs, dynamic programming, and complexity optimization.',
    },
    {
      icon: <Compass className="w-5 h-5 text-emerald-400" />,
      title: 'Data Quality & Automation',
      description:
        'Skilled in developing B2B data cleaning and normalization pipelines with fuzzy matching, format verification, and automated quality scoring.',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Background & Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Passionate software developer and AI enthusiast driven by solving real-world challenges with clean code, modern architectures, and algorithmic rigor.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Story & Education Card */}
          <div className="lg:col-span-7 space-y-6">
            {/* Main Narrative Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span>Engineering with Purpose & Precision</span>
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a final-year Computer Science and Engineering undergraduate at{' '}
                  <span className="text-white font-medium">
                    KIT-Kalaignarkarunanidhi Institute of Technology, Coimbatore
                  </span>
                  , currently maintaining a strong academic standing with a{' '}
                  <span className="text-cyan-400 font-semibold font-mono">7.9 / 10 CGPA</span>.
                </p>
                <p>
                  My engineering journey is centered on bridging the gap between intelligent algorithmic decision-making and polished user experiences. From crafting full-stack travel solutions with FastAPI and React to competing as an offline finalist at{' '}
                  <span className="text-purple-400 font-medium">IIT Madras Shaastra 2026</span>{' '}
                  with an EEG/ECG-based adaptive AI tutor, I relish solving problems where performance, data accuracy, and user experience converge.
                </p>
                <p>
                  Based in <span className="text-white font-medium">Tiruppur, Tamil Nadu</span>, I actively hone my problem-solving skills across LeetCode (1690 max rating, 300+ problems solved) and CodeChef (2-Star). I look forward to contributing to high-impact software engineering teams that value craftsmanship, curiosity, and rapid execution.
                </p>
              </div>

              {/* Personal Quick Info Badges */}
              <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-white/5">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div>
                    <p className="text-[10px] text-slate-400 font-mono uppercase">Location</p>
                    <p className="text-xs font-semibold text-white">Tiruppur, Tamil Nadu</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-white/5">
                  <Calendar className="w-4 h-4 text-purple-400 shrink-0" />
                  <div>
                    <p className="text-[10px] text-slate-400 font-mono uppercase">Graduation</p>
                    <p className="text-xs font-semibold text-white">Batch of 2027</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-white/5">
                  <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <p className="text-[10px] text-slate-400 font-mono uppercase">Current CGPA</p>
                    <p className="text-xs font-semibold text-white font-mono">7.9 / 10.0</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formal Education Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl space-y-4 border-l-4 border-l-cyan-500">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-mono">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>{educationData.status} • {educationData.period}</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-white">
                    {educationData.degree}
                  </h4>
                  <p className="text-sm text-cyan-300 font-medium">
                    {educationData.institution}
                  </p>
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-slate-900/80 border border-cyan-500/30 text-right">
                  <p className="text-[10px] text-slate-400 font-mono">ACADEMIC SCORE</p>
                  <p className="text-sm font-extrabold text-cyan-400 font-mono">
                    CGPA {educationData.cgpa}
                  </p>
                </div>
              </div>

              {/* Relevant Coursework */}
              <div className="pt-3 space-y-2">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Key Coursework & CS Fundamentals</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {educationData.coursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-900/80 text-slate-300 border border-white/5 hover:border-cyan-500/30 hover:text-white transition-colors"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Engineering Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-base font-semibold text-slate-300 font-mono uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400"></span>
              Core Pillars & Expertise
            </h3>

            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="glass-panel p-5 rounded-2xl glass-panel-hover flex gap-4 items-start"
                >
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-white/10 shrink-0">
                    {item.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white tracking-wide">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Summary Pill */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-indigo-950/30 to-purple-950/40 border border-cyan-500/20 text-xs text-slate-300 leading-relaxed">
              <p className="flex items-center gap-2 font-medium text-cyan-300 mb-1">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>Ready for Impact</span>
              </p>
              Available for full-time graduate opportunities and high-growth developer internships starting in 2026/2027.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
