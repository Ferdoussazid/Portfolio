"use client";

import React from "react";
import {
  Sparkles,
  MapPin,
  Calendar,
  ArrowUpRight,
  ShoppingBag,
  Clock,
  CheckCircle2
} from "lucide-react";
import { FacebookIcon, InstagramIcon } from "./Icons";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { sounds } from "./SoundEffects";

export const CrochethiaShowcase: React.FC = () => {
  const { crochethia } = PORTFOLIO_DATA.personal;

  return (
    <section id="crochethia" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Soothing Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 dark:bg-cyan-500/10 border border-blue-500/20 dark:border-cyan-500/20 text-blue-600 dark:text-cyan-400 text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BUSINESS VENTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Co-Founder &amp; Co-Owner at{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 dark:from-cyan-300 dark:via-blue-400 dark:to-teal-300">
              Crochethia
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Handcrafted artisanal crochet &amp; fiber art business founded on November 1, 2025, operating from Jashore, Khulna, Bangladesh.
          </p>
        </div>

        {/* Featured Business Card */}
        <div className="rounded-3xl bg-white/95 dark:bg-gradient-to-br dark:from-[#080e1d]/90 dark:via-[#0d162c]/80 dark:to-[#070b16]/90 border border-slate-200/90 dark:border-cyan-500/20 p-8 sm:p-10 backdrop-blur-xl shadow-lg dark:shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Radial Highlight */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-blue-500/10 dark:bg-blue-600/20 text-blue-700 dark:text-cyan-300 border border-blue-500/30 text-xs font-mono font-bold flex items-center gap-1.5">
                  <ShoppingBag className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
                  <span>Crochet Business • Bangladesh</span>
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 text-xs font-mono flex items-center gap-1.5">
                  <Clock className="w-3 h-3" />
                  <span>Founded Nov 1, 2025</span>
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Crochethia
                </h3>
                <p className="text-sm font-mono text-blue-600 dark:text-cyan-400 mt-0.5">
                  {crochethia.tagline}
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                {crochethia.description}
              </p>

              {/* Location & Ownership Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-100/90 dark:bg-black/40 border border-slate-200 dark:border-white/5">
                  <MapPin className="w-4 h-4 text-blue-600 dark:text-cyan-400 shrink-0" />
                  <span>Jashore, Khulna, Bangladesh</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-100/90 dark:bg-black/40 border border-slate-200 dark:border-white/5">
                  <Calendar className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>Active Business Owner</span>
                </div>
              </div>

              {/* Core Offerings */}
              <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-white/5">
                {[
                  "Custom-made wearable crochet accessories & artisanal fiber designs",
                  "Direct-to-consumer client commissions with worldwide delivery capability",
                  "Currently engineering the dedicated Crochethia e-commerce web platform",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Connect / Social Actions */}
            <div className="lg:col-span-5 flex flex-col gap-4 bg-slate-100/80 dark:bg-black/40 p-6 sm:p-7 rounded-2xl border border-slate-200 dark:border-white/5">
              <div className="text-center sm:text-left space-y-1">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block font-semibold">
                  Official Channels
                </span>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  Connect with Crochethia
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Follow for latest handmade collections, custom orders, and brand announcements.
                </p>
              </div>

              {/* Facebook Link */}
              <a
                href={crochethia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sounds.playClick()}
                className="p-3.5 rounded-xl bg-slate-200/50 dark:bg-white/[0.03] border border-slate-300/70 dark:border-white/10 hover:border-blue-500/50 dark:hover:border-cyan-500/40 hover:bg-slate-200/80 dark:hover:bg-white/[0.06] transition-all duration-200 flex items-center justify-between group hover:scale-[1.01] active:scale-[0.99]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 dark:bg-blue-600/20 text-blue-600 dark:text-cyan-400 flex items-center justify-center transition-transform group-hover:scale-105">
                    <FacebookIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-slate-800 dark:text-slate-200 block group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                      Facebook Page
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      @crochethia.official
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Instagram Link */}
              <a
                href={crochethia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sounds.playClick()}
                className="p-3.5 rounded-xl bg-slate-200/50 dark:bg-white/[0.03] border border-slate-300/70 dark:border-white/10 hover:border-cyan-500/50 dark:hover:border-cyan-500/40 hover:bg-slate-200/80 dark:hover:bg-white/[0.06] transition-all duration-200 flex items-center justify-between group hover:scale-[1.01] active:scale-[0.99]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-300 flex items-center justify-center transition-transform group-hover:scale-105">
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-slate-800 dark:text-slate-200 block group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                      Instagram Profile
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      @crochethia.official
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* E-Commerce Status Banner */}
              <div className="p-3.5 rounded-xl bg-blue-500/10 dark:bg-cyan-500/10 border border-blue-500/25 dark:border-cyan-500/25 flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 dark:bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600 dark:bg-cyan-500" />
                </span>
                <div className="text-xs">
                  <span className="font-bold text-slate-900 dark:text-white block">E-Commerce Website</span>
                  <span className="text-[11px] font-mono text-blue-700 dark:text-cyan-300">
                    Currently under active development • Coming Soon
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
