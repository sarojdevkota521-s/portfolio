"use client";

import { experienceLog } from "@/lib/data";
import { Briefcase, Calendar, Building2, CheckCircle, Award } from "lucide-react";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-12 sm:py-16 scroll-mt-20">
      <div className="flex flex-col gap-8">
        {/* Section Header */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-purple-500" />
            <span className="label-tag text-purple-400">TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--ink)] tracking-tight">
            Work Experience & Milestones
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[var(--ink-soft)] max-w-2xl">
            Demonstrated ability to move from business requirements to live production infrastructure at startup velocity.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-[var(--line-strong)] space-y-10 my-2">
          {experienceLog.map((item, idx) => (
            <div key={item.hash} className="relative group">
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex items-center justify-center w-6 h-6 rounded-full bg-[var(--bg)] border-2 border-emerald-500 shadow-sm group-hover:scale-110 transition-transform">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>

              {/* Experience Card */}
              <div className="glass-panel glass-panel-hover p-6 rounded-2xl border border-[var(--line)] flex flex-col gap-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-semibold text-[var(--accent)] uppercase mono">
                      {item.org}
                    </span>
                  </div>

                  <span className="mono text-xs px-2.5 py-1 rounded-full bg-[var(--bg-panel)] text-[var(--ink-faint)] border border-[var(--line)] flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 text-[var(--accent)]" />
                    <span>{item.date}</span>
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[var(--ink)]">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-[var(--ink-soft)]">
                  {item.body}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-[var(--line)]">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="mono text-[11px] px-2.5 py-0.5 rounded-md bg-[var(--bg-panel)] text-[var(--ink-faint)] border border-[var(--line)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
