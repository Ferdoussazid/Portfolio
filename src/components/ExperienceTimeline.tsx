"use client";

import React from "react";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2 
} from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Soothing Header */}
        <div className="text-center max-w-xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 dark:bg-cyan-500/10 border border-blue-500/20 dark:border-cyan-500/20 text-blue-600 dark:text-cyan-400 text-xs font-mono font-medium">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER &amp; VENTURES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
            Current business ownership at Crochethia alongside prior fintech engineering at Hyper Systems LTD.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="space-y-6">
          {PORTFOLIO_DATA.experience.map((exp, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 sm:p-7 border transition-all backdrop-blur-md ${
                exp.current
                  ? "bg-white/95 dark:bg-gradient-to-br dark:from-[#080f22]/90 dark:via-[#0d1836]/80 dark:to-[#070c1a]/90 border-blue-500/40 dark:border-cyan-500/30 shadow-md dark:shadow-xl"
                  : "bg-white/80 dark:bg-white/[0.02] border-slate-200/80 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10 shadow-xs dark:shadow-none"
              }`}
            >
              {/* Header Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-white/5">
                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <span className="text-blue-600 dark:text-cyan-400 font-bold text-base">
                      @ {exp.company}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400 pt-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
                      <span>{exp.period}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {exp.current && (
                  <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-mono font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                    <span>CURRENT VENTURE</span>
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-4 leading-relaxed font-sans">
                {exp.description}
              </p>

              {/* Deliverables */}
              <div className="mt-4 space-y-2">
                {exp.achievements.map((ach, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>

              {/* Tech Tags */}
              <div className="mt-5 pt-4 border-t border-slate-200 dark:border-white/5 flex flex-wrap gap-1.5">
                {exp.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-white/[0.03] text-xs font-mono text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5"
                  >
                    {t}
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
