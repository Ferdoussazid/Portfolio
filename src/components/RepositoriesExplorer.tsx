"use client";

import React, { useState, useMemo } from "react";
import { 
  Search, 
  ExternalLink, 
  FolderGit2
} from "lucide-react";
import { GithubIcon } from "./Icons";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { sounds } from "./SoundEffects";

export const RepositoriesExplorer: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLang, setSelectedLang] = useState<string>("All");

  const languages = useMemo(() => {
    const set = new Set<string>();
    PORTFOLIO_DATA.allRepositories.forEach((repo) => {
      if (repo.language) set.add(repo.language);
    });
    return ["All", ...Array.from(set)];
  }, []);

  const filteredRepos = useMemo(() => {
    return PORTFOLIO_DATA.allRepositories.filter((repo) => {
      const matchesSearch =
        repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        repo.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (repo.language && repo.language.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesLang =
        selectedLang === "All" || repo.language === selectedLang;

      return matchesSearch && matchesLang;
    });
  }, [searchQuery, selectedLang]);

  const getLangColor = (lang?: string) => {
    switch (lang) {
      case "TypeScript": return "bg-blue-500";
      case "JavaScript": return "bg-yellow-400";
      case "Python": return "bg-emerald-400";
      case "PHP": return "bg-indigo-400";
      case "C# / .NET":
      case "C#": return "bg-blue-600";
      case "Vue": return "bg-emerald-500";
      case "Jupyter Notebook": return "bg-orange-500";
      default: return "bg-slate-400";
    }
  };

  return (
    <section id="repositories" className="py-24 relative overflow-hidden bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-white/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold">
              <GithubIcon className="w-3.5 h-3.5" />
              <span>LIVE GITHUB ECOSYSTEM</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              All 25 Repositories on{" "}
              <a
                href={PORTFOLIO_DATA.personal.socials.githubRepos}
                target="_blank"
                rel="noopener noreferrer"
                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 hover:underline"
              >
                GitHub
              </a>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl">
              Directly indexed from Ferdous Sazid&apos;s GitHub account. Explore open-source projects, machine learning models, payment modules, and coursework.
            </p>
          </div>

          <a
            href={PORTFOLIO_DATA.personal.socials.githubRepos}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sounds.playClick()}
            className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 text-white font-semibold text-xs flex items-center gap-2 transition-all self-start md:self-auto hover:bg-white/10"
          >
            <GithubIcon className="w-4 h-4 text-cyan-400" />
            <span>Open @Ferdoussazid Profile</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>

        {/* Filter & Search Bar */}
        <div className="mt-8 flex flex-col md:flex-row items-center gap-4 justify-between">
          {/* Search Box */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 25 repositories (e.g. bkash, vue, ml, food)..."
              className="w-full pl-10 pr-4 py-2.5 bg-[#090e1f] border border-white/10 rounded-xl text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>

          {/* Language filter pills */}
          <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  sounds.playClick();
                  setSelectedLang(lang);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  selectedLang === lang
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/50 shadow-sm"
                    : "bg-white/[0.03] text-slate-400 hover:text-white border border-white/5"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Active count notice */}
        <div className="mt-4 text-xs font-mono text-slate-400">
          Showing <span className="text-white font-bold">{filteredRepos.length}</span> of {PORTFOLIO_DATA.allRepositories.length} repositories
        </div>

        {/* Repositories Cards Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredRepos.map((repo, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#090e1f]/70 border border-white/10 hover:border-cyan-400/40 transition-all duration-300 flex flex-col justify-between group hover:bg-[#0d152c]/90"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2 min-w-0">
                    <FolderGit2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <h3 className="font-bold text-sm text-white group-hover:text-cyan-300 transition-colors truncate">
                      {repo.name}
                    </h3>
                  </div>
                  {repo.live && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 whitespace-nowrap">
                      LIVE APP
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {repo.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${getLangColor(repo.language)}`} />
                  <span className="text-xs font-mono text-slate-400">
                    {repo.language}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {repo.live && (
                    <a
                      href={repo.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sounds.playSuccess()}
                      className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                      title="Visit Live Application"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sounds.playClick()}
                    className="p-1.5 rounded-lg bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                    title="View GitHub Repository"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
