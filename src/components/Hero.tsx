import React, { useState, useEffect } from 'react';
import {
  FileDown,
  ArrowRight,
  Mail,
  Code,
  Terminal,
  Trophy,
  Sparkles,
  Award,
  ChevronDown,
  CheckCircle2,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const roles = personalInfo.typingRoles;

  useEffect(() => {
    const currentFullText = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setDisplayedText(currentFullText.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentFullText.length) {
          // Pause before deleting
          setIsDeleting(true);
          setTypingSpeed(1800);
        } else {
          setTypingSpeed(75);
        }
      } else {
        // Deleting
        setDisplayedText(currentFullText.substring(0, displayedText.length - 1));
        setTypingSpeed(40);
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(250);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, roles, typingSpeed]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elem = document.querySelector(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden"
    >
      {/* Background Radial Glow & Grid Pattern */}
      <div className="absolute inset-0 bg-radial-mesh pointer-events-none opacity-80" />
      <div className="absolute inset-0 grid-background pointer-events-none opacity-40" />

      {/* Floating Ambient Orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.15)] animate-in fade-in slide-in-from-top duration-500">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-200">
                {personalInfo.status}
              </span>
            </div>

            {/* Name & Title */}
            <div className="space-y-2">
              <p className="text-sm font-semibold tracking-wider text-cyan-400 uppercase font-mono">
                Welcome to my portfolio
              </p>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400">
                  {personalInfo.name}
                </span>
              </h1>
            </div>

            {/* Animated Typing Role */}
            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
              <div className="text-lg sm:text-2xl font-mono text-slate-300 font-semibold flex items-center gap-2">
                <span className="text-cyan-400 font-mono">&gt;</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-300">
                  {displayedText}
                </span>
                <span className="w-2.5 h-6 bg-cyan-400 inline-block animate-pulse"></span>
              </div>
            </div>

            {/* Professional Introduction Bio */}
            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl font-normal">
              Final-year Computer Science Engineering student at{' '}
              <span className="text-white font-medium underline decoration-cyan-500/50 decoration-2 underline-offset-4">
                KIT Coimbatore
              </span>{' '}
              with a CGPA of <span className="text-cyan-400 font-semibold font-mono">7.9/10</span>. Passionate about architecting intelligent full-stack applications with React & FastAPI, data quality automation, and solving algorithmic challenges.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, '#projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-lg shadow-indigo-600/25 hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border border-white/10"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-white/10 hover:border-cyan-500/40 hover:text-white transition-all duration-200 backdrop-blur-md"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>

              <a
                href={personalInfo.resumeUrl}
                download={personalInfo.resumeFileName}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-purple-300 bg-purple-950/40 hover:bg-purple-900/50 border border-purple-500/30 hover:border-purple-400 hover:text-white transition-all duration-200 backdrop-blur-md"
              >
                <FileDown className="w-4 h-4 text-purple-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="pt-3 flex items-center justify-center lg:justify-start gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 mr-2">
                Connect:
              </span>
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/40 hover:bg-slate-800 transition-all hover:scale-105"
                title="GitHub Profile"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:bg-slate-800 transition-all hover:scale-105"
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href={personalInfo.socialLinks.leetcode}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 hover:bg-slate-800 transition-all hover:scale-105"
                title="LeetCode (1690 Rating)"
              >
                <LeetCodeIcon size={16} />
              </a>
              <a
                href={personalInfo.socialLinks.codechef}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-purple-400 hover:border-purple-500/40 hover:bg-slate-800 transition-all hover:scale-105"
                title="CodeChef (2-Star)"
              >
                <Terminal className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800 transition-all hover:scale-105"
                title="Email Direct"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual / Profile Card */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-72 sm:w-80 lg:w-96">
              {/* Pulsing Gradient Backlight */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 rounded-3xl blur-2xl opacity-40 animate-pulse" />

              {/* Glass Card Container */}
              <div className="relative rounded-3xl bg-[#090d1f]/90 border border-white/15 p-4 shadow-2xl backdrop-blur-xl">
                {/* Photo with inner gradient frame */}
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gradient-to-b from-slate-800 to-slate-950 border border-white/10">
                  <img
                    src={personalInfo.avatarUrl}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-center filter saturate-105 contrast-105 hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback if image fails to load
                      const target = e.currentTarget;
                      target.style.display = 'none';
                    }}
                  />

                  {/* Gradient Overlay for bottom text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d1f] via-transparent to-transparent opacity-80" />

                  {/* Quick Bottom Info inside photo */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#030712]/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-white">Joseph Raja G</p>
                      <p className="text-[11px] text-cyan-300 font-mono">KIT Coimbatore '27</p>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        CGPA 7.9
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Badge 1: LeetCode */}
                <div className="absolute -top-4 -left-4 sm:-left-6 px-3.5 py-2 rounded-xl bg-[#0b0f24]/90 border border-amber-500/40 shadow-lg shadow-black/50 backdrop-blur-md flex items-center gap-2 animate-bounce [animation-duration:4s]">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-xs">
                    LC
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-white">1690 Rating</p>
                    <p className="text-[10px] text-amber-300 font-mono">Top 3.4% • 300+ Solved</p>
                  </div>
                </div>

                {/* Floating Badge 2: NeuroHACK Shaastra Finalist */}
                <div className="absolute -bottom-4 -right-4 sm:-right-6 px-3.5 py-2 rounded-xl bg-[#0b0f24]/90 border border-purple-500/40 shadow-lg shadow-black/50 backdrop-blur-md flex items-center gap-2 animate-bounce [animation-duration:5s] [animation-delay:1s]">
                  <div className="w-7 h-7 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-white">Shaastra 2026</p>
                    <p className="text-[10px] text-purple-300 font-mono">IIT Madras Finalist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Highlights Stats Strip */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          <div className="glass-panel p-4 rounded-2xl text-center glass-panel-hover">
            <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-mono">
              300+
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">LeetCode Problems Solved</div>
          </div>

          <div className="glass-panel p-4 rounded-2xl text-center glass-panel-hover">
            <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400 font-mono">
              1690
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Max CP Contest Rating</div>
          </div>

          <div className="glass-panel p-4 rounded-2xl text-center glass-panel-hover">
            <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-mono">
              7.9 / 10
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">CGPA at KIT Coimbatore</div>
          </div>

          <div className="glass-panel p-4 rounded-2xl text-center glass-panel-hover">
            <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 font-mono">
              Finalist
            </div>
            <div className="text-xs text-slate-400 mt-1 font-medium">IIT Madras NeuroHACK</div>
          </div>
        </div>

        {/* Scroll Down Hint */}
        <div className="mt-8 flex justify-center">
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, '#about')}
            className="flex flex-col items-center gap-1 text-slate-500 hover:text-cyan-400 transition-colors text-xs font-mono"
          >
            <span>EXPLORE MORE</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
