"use client";

import { skillGroups } from "@/lib/data";
import { 
  Code2, 
  Server, 
  Layout, 
  Database, 
  Container, 
  Workflow, 
  Settings,
  Flame
} from "lucide-react";

export default function TechStack() {
  const getGroupIcon = (tag: string) => {
    switch (tag) {
      case "lang":
        return Code2;
      case "backend":
        return Server;
      case "frontend":
        return Layout;
      case "data":
        return Database;
      case "devops":
        return Container;
      case "integrations":
        return Workflow;
      default:
        return Settings;
    }
  };

  return (
    <section id="stack" className="py-12 sm:py-16 scroll-mt-20">
      <div className="flex flex-col gap-8">
        {/* Section Header */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-500" />
            <span className="label-tag text-cyan-400">CORE COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--ink)] tracking-tight">
            Technical Stack & Ecosystem
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[var(--ink-soft)] max-w-2xl">
            A battle-tested set of technologies used in high-volume production, distributed workflows, and cloud-native deployments.
          </p>
        </div>

        {/* Featured Specializations Callout Strip */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 border border-emerald-500/20 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-400">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[var(--ink)]">Primary Architecture Focus</h3>
              <p className="text-xs text-[var(--ink-soft)]">
                Django REST Framework · Multi-tenant SaaS · Model Context Protocol (MCP) · n8n Automation
              </p>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-semibold shadow-sm">
            Production Ready
          </span>
        </div>

        {/* Stack Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group) => {
            const Icon = getGroupIcon(group.tag);
            return (
              <div
                key={group.tag}
                className="glass-panel glass-panel-hover p-5 rounded-2xl border border-[var(--line)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="p-2 rounded-lg bg-[var(--bg-panel)] text-[var(--accent)] border border-[var(--line)]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-sm text-[var(--ink)] tracking-tight">
                      {group.label}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="mono text-xs px-2.5 py-1 rounded-lg bg-[var(--bg-panel)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent)] text-[var(--ink-soft)] border border-[var(--line)] transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[var(--line)] flex items-center justify-between text-[11px] mono text-[var(--ink-faint)]">
                  <span>{group.items.length} technologies</span>
                  <span className="text-[var(--accent)]">● ACTIVE</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
