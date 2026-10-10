"use client";

import React from "react";
import { 
  Award, 
  Star, 
  CheckCircle2,
  ExternalLink,
  Calendar,
  GraduationCap
} from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { sounds } from "./SoundEffects";

export const AcademicHonors: React.FC = () => {
  const edu = PORTFOLIO_DATA.education[0];
  const awards = PORTFOLIO_DATA.deansListAwards;

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-300 text-xs font-mono font-medium">
            <Award className="w-3.5 h-3.5" />
            <span>ACADEMIC DISTINCTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Education &amp; Dean&apos;s List Honors
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
            Continuous academic excellence at AIUB recognized through 4 consecutive Dean&apos;s List Awards.
          </p>
        </div>

        {/* Degree Summary Card */}
        <div className="rounded-3xl bg-white/95 dark:bg-gradient-to-br dark:from-[#080d1c]/90 dark:via-[#0d162a]/70 dark:to-[#070b16]/90 border border-slate-200/90 dark:border-white/5 p-7 sm:p-9 backdrop-blur-md mb-8 shadow-md dark:shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Degree & Honors */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-700 dark:text-blue-300 text-xs font-mono font-medium">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>AIUB ALUMNUS</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/25 text-blue-700 dark:text-cyan-300 text-xs font-mono font-bold">
                  {edu.score}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 text-xs font-mono">
                  {edu.period}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {edu.degree}
                </h3>
                <p className="text-sm font-mono text-blue-600 dark:text-cyan-400 mt-1">
                  {edu.institution} • {edu.major}
                </p>
              </div>

              <div className="space-y-2 pt-2">
                {edu.highlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: AIUB Distinction Badge */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-100/90 dark:bg-black/40 border border-slate-200 dark:border-white/5 text-center space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500 dark:text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.15)]">
                <Star className="w-7 h-7 fill-amber-500 dark:fill-amber-400" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  4x Dean&apos;s List Honor
                </h4>
                <p className="text-xs font-mono text-amber-600 dark:text-amber-400 mt-0.5 font-semibold">
                  3.91 Final CGPA
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  Verified credential certificates provided below
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Serially Attached Dean's List Awards */}
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-white/5">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-700 dark:text-slate-300">
              <span className="w-2 h-2 rounded-full bg-amber-500 dark:bg-amber-400 animate-pulse" />
              <span className="font-bold tracking-wider uppercase text-amber-600 dark:text-amber-300">
                Dean&apos;s List Honor Certificates (Attached Serially)
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
              4 Official Certificates
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {awards.map((award) => (
              <div
                key={award.serial}
                className="group p-5 rounded-2xl bg-white/95 dark:bg-[#080d1c]/80 border border-slate-200/90 dark:border-white/5 hover:border-blue-500/40 dark:hover:border-cyan-500/30 transition-all duration-300 backdrop-blur-md flex flex-col justify-between space-y-4 shadow-sm dark:shadow-md"
              >
                <div>
                  {/* Serial & Year Pill */}
                  <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-200 dark:border-white/5">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-700 dark:text-amber-300 text-xs font-mono font-bold">
                        Award #{String(award.serial).padStart(2, "0")}
                      </span>
                      <span className="flex items-center gap-1 text-xs font-mono text-slate-500 dark:text-slate-400">
                        <Calendar className="w-3 h-3 text-blue-600 dark:text-cyan-400" />
                        <span>Year {award.calendarYear}</span>
                      </span>
                    </div>

                    {award.gpa && (
                      <span className={`px-2.5 py-0.5 rounded-md text-xs font-mono font-bold flex items-center gap-1 ${
                        award.gpa === "4.00"
                          ? "bg-cyan-500/15 border border-cyan-500/30 text-blue-700 dark:text-cyan-300 shadow-xs"
                          : "bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300"
                      }`}>
                        <span>{award.gpa} GPA</span>
                        {award.gpa === "4.00" && <span className="text-[10px] text-amber-500 dark:text-amber-400">★</span>}
                      </span>
                    )}
                  </div>

                  {/* Title & Semester */}
                  <div className="pt-3 space-y-1">
                    <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                      {award.title}
                    </h4>
                    <p className="text-xs font-mono text-blue-600 dark:text-cyan-400">
                      Semester: {award.semester}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                      {award.description}
                    </p>
                  </div>
                </div>

                {/* Direct Google Drive Certificate Link */}
                <div className="pt-2">
                  <a
                    href={award.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sounds.playClick()}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-slate-100/90 dark:bg-white/[0.03] hover:bg-blue-500/10 dark:hover:bg-cyan-500/10 border border-slate-200 dark:border-white/5 hover:border-blue-500/30 dark:hover:border-cyan-500/30 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-cyan-200 transition-all flex items-center justify-between group/link"
                  >
                    <span className="flex items-center gap-2">
                      <Award className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
                      <span>View Verified Certificate</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover/link:text-blue-600 dark:group-hover/link:text-cyan-300 transition-colors" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
