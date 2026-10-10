"use client";

import React from "react";
import { 
  CreditCard, 
  ShieldCheck, 
  Terminal, 
  Zap, 
  Lock, 
  Server, 
  Play
} from "lucide-react";
import { sounds } from "./SoundEffects";

export const BkashFintechSection: React.FC<{ onOpenBkashSimulator: () => void }> = ({ onOpenBkashSimulator }) => {
  const integrationPlatforms = [
    { name: "Node.js & Express", count: "12+ Integrations", desc: "Async promise-driven payment handlers & webhooks" },
    { name: "NestJS Microservices", count: "8+ Integrations", desc: "Injectable bKash service with guards and JWT validation" },
    { name: "Laravel (PHP)", count: "6+ Integrations", desc: "Custom artisan packages and controller routing" },
    { name: "Python / Flask", count: "2+ Integrations", desc: "Requests-based tokenized API endpoints" },
    { name: "WordPress / WooCommerce", count: "4+ Integrations", desc: "Custom payment gateway plugin hooks and callbacks" },
  ];

  const features = [
    {
      title: "Tokenized with Agreement",
      desc: "Architected recurring and one-click tokenized agreement flows, reducing checkout friction for frequent users.",
      icon: ShieldCheck,
      color: "text-cyan-400",
    },
    {
      title: "Automated Token Refresh",
      desc: "Implemented background cron & proactive expiration checks for Grant Token (3600s TTL) with zero auth failures.",
      icon: Zap,
      color: "text-cyan-400",
    },
    {
      title: "Cryptographic Webhook Auditing",
      desc: "Enforced SHA256 signature verification and idempotent database transactions to prevent double-spending.",
      icon: Lock,
      color: "text-blue-400",
    },
    {
      title: "Resilient Network Fallback",
      desc: "Automated Query Payment and reconciliation queues handling cellular carrier packet loss and client disconnects.",
      icon: Server,
      color: "text-emerald-400",
    },
  ];

  return (
    <section id="fintech" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-cyan-400 text-xs font-mono font-semibold">
            <CreditCard className="w-3.5 h-3.5" />
            <span>FLAGSHIP FINTECH SPECIALIZATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            bKash Payment Gateway Integration in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 glow-text-cyan">
              30+ Production Platforms
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            As a core developer on Hyper Systems LTD&apos;s bKash integration team, I engineer bulletproof, tokenized financial pipelines processing transactions securely at scale.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => {
            const IconComponent = feat.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-md group hover:bg-white/[0.04]"
              >
                <div className={`p-3 rounded-xl bg-white/5 w-fit ${feat.color} group-hover:scale-110 transition-transform mb-4`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Interactive Interactive Sandbox Banner */}
        <div className="mt-12 rounded-3xl p-8 bg-gradient-to-br from-[#070e22] via-[#0d1633] to-[#060a17] border border-cyan-500/40 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-blue-600 text-white">
                  LIVE INTERACTIVE DEMO
                </span>
                <span className="text-xs font-mono text-emerald-400">Sandbox v1.2.0 Ready</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Test the Tokenized Checkout Lifecycle Directly
              </h3>
              <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                Experience how payment intents, access tokens, and webhook transactions execute in real-time. Inspect request headers, raw JSON bodies, and transaction hashes generated live.
              </p>

              {/* Supported Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {["Node.js", "NestJS", "Laravel", "Python", "PHP", "WordPress", "Webhooks", "PostgreSQL"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-black/40 border border-white/10 text-xs font-mono text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={() => {
                  sounds.playBkashBeep();
                  onOpenBkashSimulator();
                }}
                className="w-full py-4 px-6 rounded-2xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_35px_rgba(37,99,235,0.5)] group"
              >
                <Play className="w-4 h-4 fill-white group-hover:scale-125 transition-transform" />
                <span>Launch bKash Terminal</span>
              </button>

              <a
                href="https://github.com/Ferdoussazid/Complete-Bkash"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sounds.playClick()}
                className="w-full py-3.5 px-6 rounded-2xl font-semibold text-xs text-slate-300 bg-white/5 border border-white/10 hover:border-white/30 hover:text-white transition-all text-center flex items-center justify-center gap-2"
              >
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>View Complete-Bkash on GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Integration Breakdown Grid */}
        <div className="mt-12">
          <h4 className="text-sm font-mono uppercase tracking-wider text-slate-400 mb-6 text-center">
            Multi-Platform Deployment Breakdown (30+ Deployments)
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {integrationPlatforms.map((plat, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-black/40 border border-white/5 hover:border-cyan-500/30 transition-all flex items-start justify-between"
              >
                <div>
                  <h5 className="font-semibold text-sm text-white">{plat.name}</h5>
                  <p className="text-xs text-slate-400 mt-0.5">{plat.desc}</p>
                </div>
                <span className="px-2 py-1 rounded text-[11px] font-mono font-bold bg-blue-500/10 text-cyan-300 whitespace-nowrap ml-2">
                  {plat.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
