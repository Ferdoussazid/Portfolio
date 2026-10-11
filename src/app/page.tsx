"use client";

import React, { useState } from "react";
import { CyberCanvasBackground } from "@/components/CyberCanvasBackground";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { CrochethiaShowcase } from "@/components/CrochethiaShowcase";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { SkillsMatrix } from "@/components/SkillsMatrix";
import { AcademicHonors } from "@/components/AcademicHonors";
import { ContactConsole } from "@/components/ContactConsole";
import { Footer } from "@/components/Footer";
import { BkashSimulatorModal } from "@/components/BkashSimulatorModal";
import { FancyCursor } from "@/components/FancyCursor";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function Home() {
  const [isBkashModalOpen, setIsBkashModalOpen] = useState(false);

  return (
    <main className="relative min-h-screen bg-slate-50 text-slate-900 dark:bg-[#050813] dark:text-slate-100 selection:bg-blue-600/30 selection:text-white overflow-hidden transition-colors duration-300">
      {/* Soothing Gentle Background Canvas */}
      <CyberCanvasBackground />

      {/* Fancy Minimal Interactive Cursor */}
      <FancyCursor />

      {/* Main Navigation Bar */}
      <Navbar onOpenBkashSimulator={() => setIsBkashModalOpen(true)} />

      {/* Main Minimal Flow with Smooth Scroll Entrance Animations */}
      <div className="relative z-10 space-y-4">
        {/* 1. Hero Overview */}
        <HeroSection onOpenBkashSimulator={() => setIsBkashModalOpen(true)} />

        {/* 2. Crochethia Spotlight: Business Venture based in Bangladesh */}
        <ScrollReveal delay={50}>
          <CrochethiaShowcase />
        </ScrollReveal>

        {/* 3. Curated Engineering Projects: bKash, Thousand Shades, Transaction Validation, iMBD & ML */}
        <ScrollReveal delay={50}>
          <ProjectShowcase onOpenBkashSimulator={() => setIsBkashModalOpen(true)} />
        </ScrollReveal>

        {/* 4. Career Experience & Leadership */}
        <ScrollReveal delay={50}>
          <ExperienceTimeline />
        </ScrollReveal>

        {/* 5. Core Technical Skillset */}
        <ScrollReveal delay={50}>
          <SkillsMatrix />
        </ScrollReveal>

        {/* 6. Education */}
        <ScrollReveal delay={50}>
          <AcademicHonors />
        </ScrollReveal>

        {/* 7. Direct Contact & Dispatch Console */}
        <ScrollReveal delay={50}>
          <ContactConsole />
        </ScrollReveal>

        {/* 8. Footer */}
        <ScrollReveal delay={30}>
          <Footer />
        </ScrollReveal>
      </div>

      {/* Interactive bKash Tokenized Checkout Simulator Modal */}
      <BkashSimulatorModal
        isOpen={isBkashModalOpen}
        onClose={() => setIsBkashModalOpen(false)}
      />
    </main>
  );
}
