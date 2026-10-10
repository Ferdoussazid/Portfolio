"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Volume2,
  VolumeX,
  Menu,
  X,
  CreditCard,
  Phone,
  Sun,
  Moon
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { sounds } from "./SoundEffects";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { useTheme } from "./ThemeProvider";

export const Navbar: React.FC<{ onOpenBkashSimulator: () => void }> = ({ onOpenBkashSimulator }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAudioMuted, setIsAudioMuted] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("#hero");
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { label: "About", href: "#hero" },
    { label: "Crochethia", href: "#crochethia" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const sections = ["hero", "crochethia", "projects", "experience", "skills", "education", "contact"];

    const handleScrollSpy = () => {
      setIsScrolled(window.scrollY > 20);

      // Smooth active section tracking
      const scrollPos = window.scrollY + 160;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(`#${sections[i]}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  const handleSoundToggle = () => {
    const muted = sounds.toggleMute();
    setIsAudioMuted(muted);
  };

  const handleThemeToggle = () => {
    sounds.playClick();
    toggleTheme();
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    sounds.playClick();
    setMobileMenuOpen(false);
    setActiveSection(href);

    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarOffset = 80;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarOffset;
      window.scrollTo({
        top: Math.max(0, targetPosition),
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? "bg-white/90 dark:bg-[#050813]/90 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/5 py-3 shadow-sm dark:shadow-lg"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="#hero"
            onClick={(e) => handleNavClick(e as unknown as React.MouseEvent<HTMLAnchorElement>, "#hero")}
            className="flex items-center gap-2.5 group focus:outline-none transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
          >
            <div className="w-8 h-8 rounded-xl bg-white dark:bg-white/[0.08] border border-slate-200/90 dark:border-white/10 p-1 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-2 shadow-xs overflow-hidden">
              <Image
                src="/logo-mark.png"
                alt="FS Logo"
                width={32}
                height={32}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div>
              <span className="font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors text-sm">
                {PORTFOLIO_DATA.personal.shortName}
              </span>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                Owner @ Crochethia • Jashore
              </p>
            </div>
          </Link>

          {/* Desktop Navigation with Smooth Animated Elements */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-200/50 dark:bg-white/[0.02] border border-slate-300/60 dark:border-white/5 rounded-full p-1 backdrop-blur-md relative transition-all duration-300">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3.5 py-1.5 text-xs rounded-full transition-all duration-200 font-medium hover:scale-105 active:scale-95 hover:-translate-y-0.5 ${
                    isActive
                      ? "text-blue-700 dark:text-cyan-300 bg-white dark:bg-cyan-500/15 shadow-sm font-semibold border border-slate-200 dark:border-cyan-500/30 scale-105"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-white/5 border border-transparent"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Action Tools with Micro-Animations */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Interactive bKash Demo Trigger */}
            <button
              onClick={() => {
                sounds.playBkashBeep();
                onOpenBkashSimulator();
              }}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-500/10 dark:bg-cyan-500/10 text-blue-600 dark:text-cyan-300 border border-blue-500/25 dark:border-cyan-500/25 hover:bg-blue-500/20 dark:hover:bg-cyan-500/20 transition-all duration-200 flex items-center gap-1.5 hover:scale-105 active:scale-95 hover:-translate-y-0.5 hover:shadow-md cursor-pointer"
              title="Test the bKash Tokenized Checkout Simulator"
            >
              <CreditCard className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400 transition-transform group-hover:scale-110" />
              <span>bKash Demo</span>
            </button>

            {/* Light / Dark Mode Toggle */}
            <button
              onClick={handleThemeToggle}
              className="p-2 rounded-lg border border-slate-200 dark:border-white/5 bg-slate-100 dark:bg-white/5 text-amber-500 dark:text-cyan-400 hover:bg-slate-200 dark:hover:bg-white/10 transition-all duration-200 shadow-xs hover:scale-110 active:scale-90 hover:-translate-y-0.5 hover:rotate-12 cursor-pointer"
              title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle theme mode"
            >
              {theme === "dark" ? (
                <Sun className="w-3.5 h-3.5 text-amber-400 transition-transform duration-300" />
              ) : (
                <Moon className="w-3.5 h-3.5 text-slate-700 transition-transform duration-300" />
              )}
            </button>

            {/* Sound FX Toggle */}
            <button
              onClick={handleSoundToggle}
              className={`p-2 rounded-lg border transition-all duration-200 hover:scale-110 active:scale-90 hover:-translate-y-0.5 cursor-pointer ${
                isAudioMuted
                  ? "bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/5 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                  : "bg-blue-500/10 dark:bg-cyan-500/10 border-blue-500/30 dark:border-cyan-500/30 text-blue-600 dark:text-cyan-400 shadow-xs"
              }`}
              title={isAudioMuted ? "Enable Sound FX" : "Mute Sound FX"}
            >
              {isAudioMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>

            {/* GitHub Profile */}
            <a
              href={PORTFOLIO_DATA.personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sounds.playClick()}
              className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-all duration-200 hover:scale-110 active:scale-90 hover:-translate-y-0.5 hover:shadow-xs"
              title="GitHub Profile"
            >
              <GithubIcon className="w-3.5 h-3.5" />
            </a>

            {/* LinkedIn Profile */}
            <a
              href={PORTFOLIO_DATA.personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => sounds.playClick()}
              className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-slate-700 dark:text-slate-300 hover:text-[#0A66C2] hover:bg-slate-200 dark:hover:bg-white/10 transition-all duration-200 hover:scale-110 active:scale-90 hover:-translate-y-0.5 hover:shadow-xs"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
            </a>

            {/* Get in Touch Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:opacity-95 transition-all duration-200 shadow-xs hover:scale-105 active:scale-95 hover:-translate-y-0.5 hover:shadow-md"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button with Micro-Animations */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Mobile Theme Toggle */}
            <button
              onClick={handleThemeToggle}
              className="p-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-amber-500 dark:text-cyan-400 transition-all duration-200 hover:scale-110 active:scale-90 hover:rotate-12"
              aria-label="Toggle theme mode"
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            <button
              onClick={() => {
                sounds.playBkashBeep();
                onOpenBkashSimulator();
              }}
              className="px-2.5 py-1 text-xs font-semibold rounded-md bg-blue-500/10 dark:bg-cyan-500/10 text-blue-600 dark:text-cyan-300 border border-blue-500/30 dark:border-cyan-500/30 transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Demo
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-200 hover:scale-110 active:scale-90"
              aria-label="Open mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer with Smooth Micro-Animations */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-200 dark:border-white/5 bg-white/95 dark:bg-[#070b16]/95 backdrop-blur-2xl rounded-2xl p-4 border border-slate-200 dark:border-white/10 shadow-xl space-y-2 animate-fade-in">
            <div className="grid grid-cols-2 gap-1 pb-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3 py-2 text-xs font-medium rounded-lg transition-all duration-200 hover:translate-x-1 hover:scale-[1.02] active:scale-95 ${
                      isActive
                        ? "text-blue-700 dark:text-cyan-300 bg-blue-500/10 dark:bg-cyan-500/15 font-semibold"
                        : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-200 dark:border-white/5">
              <button
                onClick={handleSoundToggle}
                className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-300 px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                {isAudioMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-cyan-400" />}
                <span>{isAudioMuted ? "Sound: Off" : "Sound: On"}</span>
              </button>

              <a
                href={`tel:${PORTFOLIO_DATA.personal.rawPhone}`}
                onClick={() => sounds.playClick()}
                className="flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 px-2.5 py-1.5 rounded-lg bg-emerald-500/10 dark:bg-emerald-500/10 border border-emerald-500/20 dark:border-emerald-500/20 font-medium transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{PORTFOLIO_DATA.personal.phone}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
