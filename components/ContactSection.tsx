"use client";

import { useState } from "react";
import { profile } from "@/lib/data";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  ArrowUpRight,
  Clock,
  Sparkles
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="contact" className="py-12 sm:py-16 scroll-mt-20">
      <div className="flex flex-col gap-8">
        {/* Section Header */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="label-tag text-emerald-400">INITIATE CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--ink)] tracking-tight">
            Let&apos;s Build Something Resilient
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[var(--ink-soft)] max-w-2xl">
            Currently open for full-time engineering roles, high-scale backend contracts, and technical advisory for startups.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Direct Action Card */}
          <div className="md:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-[var(--line-strong)] flex flex-col justify-between gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4">
              <span className="mono text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>DIRECT INQUIRY</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--ink)]">
                Have an ambitious system in mind?
              </h3>
              <p className="text-sm text-[var(--ink-soft)] leading-relaxed">
                Whether you need a high-performance Django REST backend, an AI agent workflow with MCP/n8n, or a scalable multi-tenant architecture, my inbox is open.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={`mailto:${profile.email}`}
                className="btn-primary"
              >
                <Send className="w-4 h-4" />
                <span>Send Direct Email</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="btn-secondary group"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-500 font-medium">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[var(--ink-faint)] group-hover:text-[var(--accent)]" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Contact Details & Channels */}
          <div className="md:col-span-5 flex flex-col gap-4">
            {/* Email Card */}
            <div className="p-4 rounded-xl glass-panel border border-[var(--line)] flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] mono text-[var(--ink-faint)] uppercase block">Email</span>
                  <a href={`mailto:${profile.email}`} className="text-xs sm:text-sm font-semibold text-[var(--ink)] hover:text-[var(--accent)] transition-colors mono">
                    {profile.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-4 rounded-xl glass-panel border border-[var(--line)] flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] mono text-[var(--ink-faint)] uppercase block">Phone / WhatsApp</span>
                  <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="text-xs sm:text-sm font-semibold text-[var(--ink)] hover:text-[var(--accent)] transition-colors mono">
                    {profile.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links Cards */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl glass-panel glass-panel-hover border border-[var(--line)] flex flex-col justify-between gap-3 group"
              >
                <div className="flex items-center justify-between">
                  <GithubIcon className="w-5 h-5 text-[var(--ink-soft)] group-hover:text-[var(--accent)] transition-colors" />
                  <ArrowUpRight className="w-4 h-4 text-[var(--ink-faint)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[var(--ink)] block">GitHub</span>
                  <span className="text-[10px] text-[var(--ink-faint)] mono">@sarojdevkota521</span>
                </div>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl glass-panel glass-panel-hover border border-[var(--line)] flex flex-col justify-between gap-3 group"
              >
                <div className="flex items-center justify-between">
                  <LinkedinIcon className="w-5 h-5 text-[var(--ink-soft)] group-hover:text-[var(--accent)] transition-colors" />
                  <ArrowUpRight className="w-4 h-4 text-[var(--ink-faint)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[var(--ink)] block">LinkedIn</span>
                  <span className="text-[10px] text-[var(--ink-faint)] mono">Saroj Devkota</span>
                </div>
              </a>
            </div>

            {/* Location & Timezone pill */}
            <div className="p-3.5 rounded-xl bg-[var(--bg-panel)] border border-[var(--line)] flex items-center justify-between text-xs mono text-[var(--ink-soft)]">
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>{profile.location}</span>
              </span>
              <span className="text-[11px] text-[var(--ink-faint)]">GMT+5:45</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
