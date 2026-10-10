"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { 
  CreditCard, 
  ArrowRight, 
  ShoppingBag,
  Mail,
  Phone
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { sounds } from "./SoundEffects";

export const HeroSection: React.FC<{ onOpenBkashSimulator: () => void }> = ({ onOpenBkashSimulator }) => {
  const roles = [
    "Owner & Founder @ Crochethia",
    "Fintech & bKash Gateway Specialist",
    "AIUB Software Engineering (CGPA 3.91)",
    "Full-Stack & Machine Learning Developer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Bio & Highlights */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Soothing Status & Brand Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-200/60 dark:bg-white/[0.04] border border-slate-300/80 dark:border-white/10 backdrop-blur-md shadow-xs">
              <Image
                src="/logo-mark.png"
                alt="FS"
                width={16}
                height={16}
                className="w-4 h-4 object-contain rounded-xs"
              />
              <span className="text-slate-300 dark:text-slate-600">•</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 dark:bg-emerald-400" />
              </span>
              <span className="text-xs font-mono text-slate-700 dark:text-slate-300">
                Founder @ Crochethia • Jashore, Khulna, Bangladesh
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                MD. Ferdous{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 dark:from-cyan-300 dark:via-blue-400 dark:to-teal-300">
                  Sazid
                </span>
              </h1>

              {/* Dynamic Role Subtitle */}
              <div className="h-8 flex items-center justify-center lg:justify-start">
                <span className="text-sm sm:text-base font-mono text-blue-600 dark:text-cyan-400 font-medium tracking-wide">
                  {roles[roleIndex]}
                </span>
              </div>
            </div>

            {/* Soothing Bio Description */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed font-sans">
              Software Engineer graduated from <strong>AIUB</strong> (CGPA 3.91, 4x Dean&apos;s List). Engineered high-throughput <strong>bKash Tokenized Payment Gateways</strong> across 30+ client platforms at Hyper Systems LTD. Currently the Owner and Founder at{" "}
              <a href="#crochethia" className="text-blue-600 dark:text-cyan-300 underline underline-offset-4 decoration-blue-500/40 dark:decoration-cyan-400/40 hover:decoration-blue-600 dark:hover:decoration-cyan-400 font-semibold">
                Crochethia
              </a>
              , an artisanal crochet business based in Jashore, Khulna, Bangladesh.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              {/* bKash Demo Trigger */}
              <button
                onClick={() => {
                  sounds.playBkashBeep();
                  onOpenBkashSimulator();
                }}
                className="px-5 py-3 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all shadow-[0_0_25px_rgba(37,99,235,0.35)] flex items-center gap-2 group"
              >
                <CreditCard className="w-4 h-4 text-white" />
                <span>bKash Simulator Demo</span>
              </button>

              {/* Crochethia Feature Link */}
              <a
                href="#crochethia"
                onClick={() => sounds.playClick()}
                className="px-5 py-3 rounded-xl font-semibold text-xs text-blue-700 dark:text-cyan-300 bg-blue-500/10 dark:bg-cyan-500/10 border border-blue-500/30 dark:border-cyan-500/30 hover:bg-blue-500/20 dark:hover:bg-cyan-500/20 transition-all flex items-center gap-2 shadow-xs"
              >
                <ShoppingBag className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                <span>Crochethia Venture</span>
              </a>

              {/* Curated Projects */}
              <a
                href="#projects"
                onClick={() => sounds.playClick()}
                className="px-5 py-3 rounded-xl font-medium text-xs text-slate-700 dark:text-slate-300 bg-slate-200/60 dark:bg-white/5 border border-slate-300 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/20 hover:text-slate-900 dark:hover:text-white transition-all flex items-center gap-1.5 shadow-xs"
              >
                <span>Curated Projects</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
              </a>
            </div>

            {/* Profile Links Row: Only email, git, linked in, number */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2 text-slate-600 dark:text-slate-400 text-xs font-mono">
              {/* Email */}
              <a
                href={PORTFOLIO_DATA.personal.socials.email}
                onClick={() => sounds.playClick()}
                className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-cyan-300 hover:scale-105 active:scale-95 transition-all duration-200"
                title="Send Email"
              >
                <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
                <span>{PORTFOLIO_DATA.personal.email}</span>
              </a>

              <span>•</span>

              {/* Git */}
              <a
                href={PORTFOLIO_DATA.personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sounds.playClick()}
                className="flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white hover:scale-105 active:scale-95 transition-all duration-200"
                title="GitHub Profile"
              >
                <GithubIcon className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />
                <span>GitHub</span>
              </a>

              <span>•</span>

              {/* LinkedIn */}
              <a
                href={PORTFOLIO_DATA.personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sounds.playClick()}
                className="flex items-center gap-1.5 hover:text-[#0A66C2] hover:scale-105 active:scale-95 transition-all duration-200"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[#0A66C2]" />
                <span>LinkedIn</span>
              </a>

              <span>•</span>

              {/* Number */}
              <a
                href={`tel:${PORTFOLIO_DATA.personal.rawPhone}`}
                onClick={() => sounds.playClick()}
                className="flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400 hover:scale-105 active:scale-95 transition-all duration-200"
                title="Direct Phone / WhatsApp"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>{PORTFOLIO_DATA.personal.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Serene Minimal Avatar Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
              {/* Soothing Soft Radial Halo */}
              <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-2xl pointer-events-none" />

              {/* Avatar Frame */}
              <div className="relative w-56 h-56 sm:w-60 sm:h-60 rounded-3xl p-1.5 bg-gradient-to-br from-blue-600/40 via-cyan-500/30 to-slate-800/60 border border-white/10 shadow-2xl overflow-hidden group">
                {/* Official Brand Logo Badge */}
                <div className="absolute top-3 right-3 z-20 w-8 h-8 rounded-xl bg-white/95 dark:bg-[#070c1a]/95 border border-slate-200/90 dark:border-white/15 p-1 shadow-md flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/logo-mark.png"
                    alt="FS Official Logo"
                    width={24}
                    height={24}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-[#060a15]">
                  <Image
                    src={PORTFOLIO_DATA.personal.avatar}
                    alt={PORTFOLIO_DATA.personal.name}
                    fill
                    sizes="(max-width: 768px) 240px, 280px"
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Subtle Verified Indicator */}
              <div className="absolute -bottom-2 px-3.5 py-1 rounded-full bg-[#090e1f] border border-cyan-400/40 text-[11px] font-mono text-cyan-300 font-semibold shadow-lg">
                Software Engineer • Founder
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Stats Row */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {PORTFOLIO_DATA.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white dark:bg-white/[0.02] border border-slate-200/80 dark:border-white/5 hover:border-blue-500/40 dark:hover:border-cyan-500/30 transition-all backdrop-blur-sm shadow-xs dark:shadow-none"
            >
              <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-0.5">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono mt-0.5 truncate">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
