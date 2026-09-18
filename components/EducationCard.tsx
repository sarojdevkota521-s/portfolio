"use client";

import { education } from "@/lib/data";
import { GraduationCap, Award, Calendar, BookOpen } from "lucide-react";

export default function EducationCard() {
  return (
    <section id="education" className="py-8 scroll-mt-20">
      <div className="flex flex-col gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="label-tag text-amber-400">ACADEMICS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--ink)] tracking-tight">
            Education & Foundation
          </h2>
        </div>

        <div className="glass-panel glass-panel-hover p-6 rounded-2xl border border-[var(--line)] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20 shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-lg font-bold text-[var(--ink)]">
                {education.degree}
              </h3>
              <p className="text-sm text-[var(--ink-soft)] mt-0.5">
                {education.school}
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-2 text-xs mono text-[var(--ink-faint)]">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[var(--accent)]" />
                  <span>{education.period}</span>
                </span>
                <span>·</span>
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <Award className="w-3.5 h-3.5" />
                  <span>{education.detail}</span>
                </span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[var(--bg-panel)] border border-[var(--line)] text-xs text-[var(--ink-soft)] max-w-xs self-start sm:self-auto">
            <span className="font-semibold text-[var(--ink)] block mb-1">Curriculum Highlights:</span>
            Enterprise Systems, Database Management, Data Structures, Software Engineering, and Web Technologies.
          </div>
        </div>
      </div>
    </section>
  );
}
