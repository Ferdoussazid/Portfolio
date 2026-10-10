"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  Sparkles,
  ArrowUpRight
} from "lucide-react";
import confetti from "canvas-confetti";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { sounds } from "./SoundEffects";

export const ContactConsole: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopy = (type: "email" | "phone", text: string) => {
    sounds.playClick();
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    sounds.playClick();

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      sounds.playSuccess();

      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
          colors: ["#2563eb", "#00f5d4", "#10b981"],
        });
      } catch {
        // Ignore
      }
    }, 800);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Soothing Header */}
        <div className="text-center max-w-xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 dark:bg-cyan-500/10 border border-blue-500/20 dark:border-cyan-500/20 text-blue-600 dark:text-cyan-400 text-xs font-mono font-medium">
            <Image src="/logo-mark.png" alt="FS Logo" width={14} height={14} className="w-3.5 h-3.5 object-contain" />
            <span>LET&apos;S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
            For software consulting, fintech integrations, or inquiries regarding Crochethia custom orders.
          </p>
        </div>

        {/* Contact Console Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-3">
            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-white/95 dark:bg-[#080d1c]/80 border border-slate-200/90 dark:border-white/5 hover:border-blue-500/40 dark:hover:border-cyan-500/30 transition-all space-y-2 shadow-xs dark:shadow-none">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-blue-500/10 dark:bg-cyan-500/10 text-blue-600 dark:text-cyan-400">
                  <Mail className="w-4 h-4" />
                </div>
                <button
                  onClick={() => handleCopy("email", PORTFOLIO_DATA.personal.email)}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 text-xs font-mono flex items-center gap-1 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-500 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400 text-[11px]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span className="text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block">Direct Email</span>
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="text-sm font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 transition-colors break-all"
                >
                  {PORTFOLIO_DATA.personal.email}
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-white/95 dark:bg-[#080d1c]/80 border border-slate-200/90 dark:border-white/5 hover:border-blue-500/40 dark:hover:border-cyan-500/30 transition-all space-y-2 shadow-xs dark:shadow-none">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-blue-500/10 dark:bg-cyan-500/10 text-blue-600 dark:text-cyan-400">
                  <Phone className="w-4 h-4" />
                </div>
                <button
                  onClick={() => handleCopy("phone", PORTFOLIO_DATA.personal.rawPhone)}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 text-xs font-mono flex items-center gap-1 transition-colors"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-500 dark:text-emerald-400" />
                      <span className="text-emerald-600 dark:text-emerald-400 text-[11px]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span className="text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block">Phone / WhatsApp</span>
                <a
                  href={`tel:${PORTFOLIO_DATA.personal.rawPhone}`}
                  className="text-sm font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                >
                  {PORTFOLIO_DATA.personal.phone} ({PORTFOLIO_DATA.personal.rawPhone})
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-white/95 dark:bg-[#080d1c]/80 border border-slate-200/90 dark:border-white/5 space-y-1.5 shadow-xs dark:shadow-none">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 w-fit">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block">Location Base</span>
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                {PORTFOLIO_DATA.personal.location}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Jashore, Khulna, Bangladesh • Available for remote and hybrid collaboration worldwide.
              </p>
            </div>

            {/* Profile Links: strictly Email, Git, LinkedIn, Number */}
            <div className="p-5 rounded-2xl bg-white/95 dark:bg-[#080d1c]/80 border border-slate-200/90 dark:border-white/5 space-y-3 shadow-xs dark:shadow-none">
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 font-bold uppercase block">
                Profile Links
              </span>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  onClick={() => sounds.playClick()}
                  className="p-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 hover:border-blue-500/60 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all flex items-center justify-between text-xs font-medium group hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
                    <span>Email</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-cyan-300" />
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sounds.playClick()}
                  className="p-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 hover:border-slate-400 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all flex items-center justify-between text-xs font-medium group hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span className="flex items-center gap-1.5">
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-cyan-300" />
                </a>

                <a
                  href={PORTFOLIO_DATA.personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sounds.playClick()}
                  className="p-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 hover:border-[#0A66C2]/60 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all flex items-center justify-between text-xs font-medium group hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span className="flex items-center gap-1.5">
                    <LinkedinIcon className="w-3.5 h-3.5 text-[#0A66C2]" />
                    <span>LinkedIn</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-cyan-300" />
                </a>

                <a
                  href={`tel:${PORTFOLIO_DATA.personal.rawPhone}`}
                  onClick={() => sounds.playClick()}
                  className="p-2.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 hover:border-emerald-500/60 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all flex items-center justify-between text-xs font-medium group hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>Number</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Dispatch Message Form */}
          <div className="lg:col-span-7">
            <div className="p-7 rounded-2xl bg-white/95 dark:bg-[#080d1c]/80 border border-slate-200/90 dark:border-white/5 shadow-md dark:shadow-xl">
              <div className="pb-4 border-b border-slate-200 dark:border-white/5 mb-5">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Send a Direct Message</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Sends directly to Ferdous Sazid&apos;s personal inbox
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-500 dark:text-emerald-400 mx-auto">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">Message Dispatched!</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
                    Thank you for reaching out! You can also message directly at{" "}
                    <span className="text-blue-600 dark:text-cyan-400 font-mono font-semibold">{PORTFOLIO_DATA.personal.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormState({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="px-5 py-2 rounded-xl bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white text-xs font-semibold hover:bg-slate-200 dark:hover:bg-white/20 transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="text-xs font-mono text-slate-600 dark:text-slate-400 block mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Alex"
                        className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-xs sm:text-sm focus:border-blue-500 dark:focus:border-cyan-400 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono text-slate-600 dark:text-slate-400 block mb-1">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="alex@domain.com"
                        className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-xs sm:text-sm focus:border-blue-500 dark:focus:border-cyan-400 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-600 dark:text-slate-400 block mb-1">
                      Subject / Topic
                    </label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="bKash Integration / Crochethia Custom Order / Project Inquiry"
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-xs sm:text-sm focus:border-blue-500 dark:focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-600 dark:text-slate-400 block mb-1">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Hi Ferdous, I would like to discuss..."
                      className="w-full px-3.5 py-2.5 bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-xs sm:text-sm focus:border-blue-500 dark:focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-4 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.3)] disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Dispatching message...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
