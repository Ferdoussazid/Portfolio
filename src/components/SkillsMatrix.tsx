"use client";

import React, { useState } from "react";
import { 
  Cpu, 
  ShieldCheck, 
  LayoutGrid, 
  Brain
} from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { sounds } from "./SoundEffects";

export const SkillsMatrix: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck": return ShieldCheck;
      case "LayoutGrid": return LayoutGrid;
      case "Brain": return Brain;
      default: return Cpu;
    }
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Soothing Header */}
        <div className="text-center max-w-xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 dark:bg-cyan-500/10 border border-blue-500/20 dark:border-cyan-500/20 text-blue-600 dark:text-cyan-400 text-xs font-mono font-medium">
            <Cpu className="w-3.5 h-3.5" />
            <span>CORE COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Technical Skillset
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
            Fintech payment pipelines, modern web &amp; e-commerce frameworks, and scientific machine learning algorithms.
          </p>
        </div>

        {/* Minimal Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {PORTFOLIO_DATA.skillCategories.map((cat, idx) => {
            const Icon = getCategoryIcon(cat.icon);
            const isSelected = activeCategory === idx;
            return (
              <button
                key={idx}
                onClick={() => {
                  sounds.playClick();
                  setActiveCategory(idx);
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
                  isSelected
                    ? "bg-blue-600/15 dark:bg-cyan-500/20 text-blue-700 dark:text-cyan-300 border border-blue-500/30 dark:border-cyan-500/40 shadow-xs"
                    : "bg-slate-100 dark:bg-white/[0.03] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/5"
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? "text-blue-600 dark:text-cyan-400" : "text-slate-400"}`} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display */}
        {(() => {
          const currentCat = PORTFOLIO_DATA.skillCategories[activeCategory];
          return (
            <div className="rounded-2xl bg-white/95 dark:bg-[#080d1c]/80 border border-slate-200/90 dark:border-white/5 p-6 sm:p-8 backdrop-blur-md shadow-md dark:shadow-xl">
              <div className="mb-6 pb-4 border-b border-slate-200 dark:border-white/5">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {currentCat.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                  {currentCat.description}
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentCat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/5 hover:border-blue-500/30 dark:hover:border-cyan-500/30 transition-all shadow-2xs dark:shadow-none"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-slate-900 dark:text-white text-xs sm:text-sm">
                        {skill.name}
                      </span>
                      <span className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-1.5 rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-700"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>

                    {skill.note && (
                      <p className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-2">
                        {skill.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
};
