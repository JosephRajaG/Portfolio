import React from 'react';
import {
  ArrowUp,
  Heart,
  Code2,
  Terminal,
  Mail,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'CP Stats', href: '#competitive' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#02050e] relative py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Headline */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 p-[1.5px]">
              <div className="w-full h-full bg-[#030712] rounded-[10px] flex items-center justify-center">
                <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-mono text-sm">
                  JR
                </span>
              </div>
            </div>
            <div>
              <p className="text-sm font-bold text-white">{personalInfo.name}</p>
              <p className="text-xs text-slate-400 font-mono">
                Full Stack Developer & AI Enthusiast • KIT Coimbatore '27
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-400">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-white/10 text-xs font-medium text-slate-300 hover:text-white hover:border-cyan-500/40 transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>

        {/* Divider & Copyright */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center sm:text-left">
            Designed and Developed by{' '}
            <span className="font-semibold text-white">Joseph Raja G</span>
          </p>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={personalInfo.socialLinks.leetcode}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition-colors"
              aria-label="LeetCode"
            >
              <LeetCodeIcon size={16} />
            </a>
            <a
              href={personalInfo.socialLinks.codechef}
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition-colors"
              aria-label="CodeChef"
            >
              <Terminal className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-cyan-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <p className="font-mono text-[11px] text-slate-400">
            © {new Date().getFullYear()} Joseph Raja G. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
