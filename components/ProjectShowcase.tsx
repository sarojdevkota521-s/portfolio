"use client";

import { useState } from "react";
import { projects, Project } from "@/lib/data";
import { 
  Layers, 
  ExternalLink, 
  CheckCircle2, 
  ChevronRight, 
  Sparkles, 
  Server, 
  ShieldCheck, 
  Zap,
  X
} from "lucide-react";

export default function ProjectShowcase() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterCategories = [
    { id: "all", label: "All Systems" },
    { id: "saas", label: "Multi-tenant & ERP" },
    { id: "ai", label: "AI & Automation" },
    { id: "core", label: "APIs & Payments" },
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "saas") {
      return project.id === "restaurant-erp" || project.id === "hostel-saas";
    }
    if (activeFilter === "ai") {
      return project.id === "jobryn";
    }
    if (activeFilter === "core") {
      return project.id === "himalayan-frequency" || project.id === "trial-management" || project.id === "news-portal";
    }
    return true;
  });

  return (
    <section id="deployments" className="py-12 sm:py-16 scroll-mt-20">
      <div className="flex flex-col gap-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="label-tag text-emerald-400">ENGINEERING DEPLOYMENTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--ink)] tracking-tight">
              Production Systems & Platforms
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[var(--ink-soft)] max-w-2xl">
              High-availability backends, multi-tenant enterprise software, and automated AI agent systems delivered for production operations.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex items-center gap-1.5 p-1 bg-[var(--bg-panel)] rounded-xl border border-[var(--line)] self-start sm:self-auto overflow-x-auto max-w-full">
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  activeFilter === cat.id
                    ? "bg-[var(--accent)] text-white shadow-md shadow-emerald-500/20"
                    : "text-[var(--ink-soft)] hover:text-[var(--ink)] hover:bg-[var(--line)]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover flex flex-col justify-between p-6 rounded-2xl border border-[var(--line)] hover:border-emerald-500/40 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Subtle card ambient top glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full pointer-events-none transition-opacity group-hover:opacity-100" />

              <div>
                {/* Header: Title & Status */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs mono text-[var(--ink-faint)] mt-0.5">
                      {project.period} · {project.role}
                    </p>
                  </div>

                  <span
                    className={`mono text-[10px] uppercase font-semibold px-2.5 py-1 rounded-full border flex items-center gap-1.5 shrink-0 ${
                      project.status === "live"
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                        : "bg-slate-500/10 text-[var(--ink-faint)] border-[var(--line)]"
                    }`}
                  >
                    {project.status === "live" && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    )}
                    <span>{project.status}</span>
                  </span>
                </div>

                {/* Summary */}
                <p className="text-sm text-[var(--ink-soft)] leading-relaxed mb-4">
                  {project.summary}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 mb-6">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[var(--ink-soft)]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom: Stack badges & Deep Dive Button */}
              <div className="pt-4 border-t border-[var(--line)] flex flex-col gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="mono text-[11px] px-2.5 py-0.5 rounded-md bg-[var(--bg-panel)] text-[var(--ink-soft)] border border-[var(--line)] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-[var(--accent)] hover:underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>System Architecture Breakdown</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Architectural Deep-Dive Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-2xl rounded-2xl glass-panel bg-[var(--bg-elevated)] p-6 sm:p-8 border border-[var(--line-strong)] shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-[var(--bg-panel)] text-[var(--ink-soft)] hover:text-[var(--ink)] border border-[var(--line)] transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="mono text-[11px] uppercase text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                  {selectedProject.status.toUpperCase()} SYSTEM
                </span>
                <span className="text-xs text-[var(--ink-faint)] mono">{selectedProject.period}</span>
              </div>
              <h3 className="text-2xl font-bold text-[var(--ink)]">{selectedProject.name}</h3>
              <p className="text-sm text-[var(--accent)] font-medium mt-0.5">{selectedProject.role}</p>
            </div>

            {/* Summary */}
            <div className="p-4 rounded-xl bg-[var(--bg-panel)] border border-[var(--line)] text-sm text-[var(--ink-soft)] leading-relaxed">
              {selectedProject.summary}
            </div>

            {/* Architecture Highlights */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--ink-faint)] mono flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5 text-emerald-400" />
                <span>Key Engineering Solutions</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedProject.highlights.map((h, i) => (
                  <div key={i} className="p-3 rounded-xl border border-[var(--line)] bg-[var(--bg)] text-xs text-[var(--ink-soft)] flex items-start gap-2">
                    <Zap className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Matrix */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--ink-faint)] mono flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Production Stack</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.stack.map((s) => (
                  <span key={s} className="px-3 py-1 text-xs mono rounded-lg bg-[var(--accent-soft)] text-[var(--accent)] border border-[var(--accent)]/20 font-semibold">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-[var(--line)] flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="btn-primary"
              >
                Close Breakdown
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
