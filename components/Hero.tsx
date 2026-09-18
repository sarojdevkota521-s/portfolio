"use client";

import { useState } from "react";
import HeroProfileVisual from "@/components/HeroProfileVisual";
import StatusBar from "@/components/StatusBar";
import { profile } from "@/lib/data";
import { 
  ArrowDown, 
  Copy, 
  Check, 
  Mail, 
  Terminal, 
  Server, 
  Cpu, 
  Database,
  ExternalLink
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section id="overview" className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 overflow-hidden">
      {/* Ambient background glows */}
      <div className="ambient-glow-emerald w-[500px] h-[500px] -top-36 left-1/2 -translate-x-1/2 opacity-35" />
      <div className="ambient-glow-cyan w-[350px] h-[350px] top-40 -left-20 opacity-30" />

      <div className="relative z-10 flex flex-col gap-10">
        {/* Top Status & Live Telemetry Strip */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3 sm:px-4 rounded-xl glass-panel border border-[var(--line)]">
          <div className="flex items-center gap-2.5">
            <span className="status-dot-pulse" />
            <span className="text-xs font-semibold tracking-wider uppercase text-[var(--accent)] mono">
              Available for Opportunities
            </span>
          </div>
          <div className="w-full sm:w-auto">
            <StatusBar compact />
          </div>
        </div>

        {/* Main Grid: Headline & Information on left, 3D Object on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          {/* Left Column: Core Value Proposition & Bio */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 text-xs font-medium mono rounded-full bg-[var(--accent-soft)] text-[var(--accent)] border border-[var(--accent)]/20">
                Full Stack & Backend Engineer
              </span>
              <span className="text-xs text-[var(--ink-faint)] mono">
                Python / Django / Next.js
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-[var(--ink)]">
              Building robust <br />
              <span className="text-gradient-emerald">production backends</span> & AI workflows.
            </h1>

            <p className="text-base sm:text-lg leading-relaxed text-[var(--ink-soft)] max-w-xl">
              I specialize in architecting <span className="text-[var(--ink)] font-semibold">Django REST APIs</span>, multi-tenant SaaS architectures, and autonomous <span className="text-[var(--ink)] font-semibold">AI agent workflows (n8n & MCP)</span>. Delivered 5 production-grade platforms with sub-100ms Redis caching, secure payments, and Docker deployment.
            </p>

            {/* Quick CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a href="#deployments" className="btn-primary group">
                <span>Explore Deployments</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="btn-secondary group relative"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-500 font-medium">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[var(--ink-faint)] group-hover:text-[var(--accent)] transition-colors" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass-panel text-[var(--ink-soft)] hover:text-[var(--accent)] hover:border-[var(--accent)]/40 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass-panel text-[var(--ink-soft)] hover:text-[var(--accent)] hover:border-[var(--accent)]/40 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>

            {/* Quick Contact Micro-strip */}
            <div className="flex flex-wrap items-center gap-4 text-xs mono text-[var(--ink-faint)] pt-2">
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-[var(--accent)] transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>{profile.email}</span>
              </a>
              <span>·</span>
              <span>{profile.location}</span>
            </div>
          </div>

          {/* Right Column: Interactive Profile Visual (3D Avatar & Real Photo) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <HeroProfileVisual />
          </div>
        </div>

        {/* Key Architectural Metrics Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4">
          <div className="p-4 rounded-xl glass-panel glass-panel-hover flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--accent)] mono">
                5+
              </span>
              <Server className="w-4 h-4 text-[var(--accent)] opacity-80" />
            </div>
            <span className="text-xs font-semibold text-[var(--ink)]">Production Systems</span>
            <span className="text-[11px] text-[var(--ink-faint)]">ERP, SaaS, AI & Ticketing</span>
          </div>

          <div className="p-4 rounded-xl glass-panel glass-panel-hover flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-cyan-500 mono">
                100%
              </span>
              <Cpu className="w-4 h-4 text-cyan-500 opacity-80" />
            </div>
            <span className="text-xs font-semibold text-[var(--ink)]">Docker & Dokploy</span>
            <span className="text-[11px] text-[var(--ink-faint)]">Production server deployment</span>
          </div>

          <div className="p-4 rounded-xl glass-panel glass-panel-hover flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-purple-400 mono">
                n8n/MCP
              </span>
              <Terminal className="w-4 h-4 text-purple-400 opacity-80" />
            </div>
            <span className="text-xs font-semibold text-[var(--ink)]">Agentic Workflows</span>
            <span className="text-[11px] text-[var(--ink-faint)]">Autonomous AI tool integration</span>
          </div>

          <div className="p-4 rounded-xl glass-panel glass-panel-hover flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-amber-500 mono">
                &lt;100ms
              </span>
              <Database className="w-4 h-4 text-amber-500 opacity-80" />
            </div>
            <span className="text-xs font-semibold text-[var(--ink)]">Redis & Celery</span>
            <span className="text-[11px] text-[var(--ink-faint)]">Async task queues & caching</span>
          </div>
        </div>
      </div>
    </section>
  );
}
