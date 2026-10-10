"use client";

import React from "react";
import { ArrowUp, Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { sounds } from "./SoundEffects";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    sounds.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-white/5 bg-slate-100 dark:bg-[#03060d] py-10 relative z-10 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 p-[1.5px] shadow-sm">
              <div className="w-full h-full bg-slate-900 dark:bg-[#050813] rounded-[10px] flex items-center justify-center font-bold text-xs text-white">
                FS
              </div>
            </div>
            <div>
              <span className="font-bold text-slate-900 dark:text-white text-sm block">
                {PORTFOLIO_DATA.personal.name}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                Owner @ Crochethia • Jashore, Khulna, Bangladesh
              </span>
            </div>
          </div>

          {/* Profile Links: Strictly Email, Git, LinkedIn, Number */}
          <div className="flex items-center gap-2">
            {/* Email */}
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              onClick={() => sounds.playClick()}
              className="p-2 rounded-lg bg-slate-200/60 dark:bg-white/5 border border-slate-300/80 dark:border-white/5 text-slate-700 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-all duration-200 hover:scale-110 active:scale-95"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* GitHub */}
            <a
              href={PORTFOLIO_DATA.personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sounds.playClick()}
              className="p-2 rounded-lg bg-slate-200/60 dark:bg-white/5 border border-slate-300/80 dark:border-white/5 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all duration-200 hover:scale-110 active:scale-95"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {/* LinkedIn */}
            <a
              href={PORTFOLIO_DATA.personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sounds.playClick()}
              className="p-2 rounded-lg bg-slate-200/60 dark:bg-white/5 border border-slate-300/80 dark:border-white/5 text-slate-700 dark:text-slate-400 hover:text-[#0A66C2] transition-all duration-200 hover:scale-110 active:scale-95"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            {/* Number */}
            <a
              href={`tel:${PORTFOLIO_DATA.personal.rawPhone}`}
              onClick={() => sounds.playClick()}
              className="p-2 rounded-lg bg-slate-200/60 dark:bg-white/5 border border-slate-300/80 dark:border-white/5 text-slate-700 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-200 hover:scale-110 active:scale-95"
              title="Call / WhatsApp"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-200/60 dark:bg-white/5 border border-slate-300/80 dark:border-white/5 text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all duration-200 hover:scale-110 active:scale-95 flex items-center gap-1 text-xs font-mono ml-1"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 gap-2">
          <p>© {new Date().getFullYear()} MD. Ferdous Sazid. All rights reserved.</p>
          <p>Software Engineer &amp; Founder of Crochethia • Jashore, Khulna</p>
        </div>
      </div>
    </footer>
  );
};
