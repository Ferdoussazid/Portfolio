"use client";

import React, { useState } from "react";
import { 
  FolderGit2, 
  ExternalLink, 
  CreditCard, 
  CheckCircle2, 
  ArrowUpRight
} from "lucide-react";
import { GithubIcon } from "./Icons";
import { PORTFOLIO_DATA, Project } from "../data/portfolioData";
import { sounds } from "./SoundEffects";

export const ProjectShowcase: React.FC<{ onOpenBkashSimulator: () => void }> = ({ onOpenBkashSimulator }) => {
  const [activeFilter, setActiveFilter] = useState<"all" | "fintech" | "web" | "ml">("all");

  const categories = [
    { id: "all" as const, label: "All Projects (5)" },
    { id: "fintech" as const, label: "Fintech & Payments" },
    { id: "web" as const, label: "Web Applications" },
    { id: "ml" as const, label: "Machine Learning" },
  ];

  const filteredProjects = activeFilter === "all"
    ? PORTFOLIO_DATA.featuredProjects
    : PORTFOLIO_DATA.featuredProjects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Soothing Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200 dark:border-white/5">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 dark:bg-cyan-500/10 border border-blue-500/20 dark:border-cyan-500/20 text-blue-600 dark:text-cyan-400 text-xs font-mono font-medium">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>CORE ENGINEERING WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              Selected Projects &amp; Repositories
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm max-w-lg">
              Focused software engineering portfolio: payment gateway infrastructures, live Next.js platforms, cryptographic verification, cinema directories, and statistical machine learning.
            </p>
          </div>

          {/* Minimal Filter Pills */}
          <div className="flex flex-wrap gap-1.5 self-start md:self-end">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  sounds.playClick();
                  setActiveFilter(c.id);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeFilter === c.id
                    ? "bg-blue-600/15 dark:bg-cyan-500/20 text-blue-700 dark:text-cyan-300 border border-blue-500/30 dark:border-cyan-500/40 shadow-xs"
                    : "bg-slate-100 dark:bg-white/[0.03] text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/5"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Minimal Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project: Project) => {
            const isBkash = project.id === "bkash-fintech-suite";

            return (
              <div
                key={project.id}
                className="group rounded-2xl bg-white dark:bg-[#080d1c]/80 border border-slate-200/90 dark:border-white/5 hover:border-blue-500/50 dark:hover:border-cyan-500/40 p-6 flex flex-col justify-between transition-all duration-300 backdrop-blur-md hover:-translate-y-1 shadow-md dark:shadow-lg"
              >
                <div className="space-y-4">
                  {/* Category Pill & Metrics */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono uppercase tracking-wider font-semibold bg-slate-100 dark:bg-white/5 text-blue-700 dark:text-cyan-300 border border-slate-200 dark:border-white/10">
                      {project.category}
                    </span>
                    {project.metrics && (
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 truncate">
                        {project.metrics}
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                      <span>{project.title}</span>
                      {project.demo && (
                        <ArrowUpRight className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </h3>
                    <p className="text-xs font-mono text-blue-600/80 dark:text-cyan-400/80 mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans line-clamp-3">
                    {project.description}
                  </p>

                  {/* Highlights Bullets */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-200 dark:border-white/5">
                    {project.highlights.slice(0, 3).map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-white/[0.03] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action Links */}
                <div className="pt-5 mt-5 border-t border-slate-200 dark:border-white/5 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => sounds.playClick()}
                        className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/30 transition-all flex items-center gap-1.5 text-xs font-medium"
                        title="GitHub Repository"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Source</span>
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => sounds.playSuccess()}
                        className="px-3 py-1.5 rounded-lg bg-blue-500/10 dark:bg-cyan-500/10 border border-blue-500/30 dark:border-cyan-500/30 text-blue-700 dark:text-cyan-300 hover:bg-blue-500/20 dark:hover:bg-cyan-500/20 transition-all flex items-center gap-1.5 text-xs font-semibold"
                        title="Open Live Web Platform"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live App</span>
                      </a>
                    )}
                  </div>

                  {isBkash && (
                    <button
                      onClick={() => {
                        sounds.playBkashBeep();
                        onOpenBkashSimulator();
                      }}
                      className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:opacity-90 text-xs font-mono font-semibold flex items-center gap-1.5 shadow-sm"
                    >
                      <CreditCard className="w-3.5 h-3.5" />
                      <span>Simulate</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
