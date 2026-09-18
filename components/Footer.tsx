"use client";

import { profile } from "@/lib/data";
import { ArrowUp, Heart, Terminal } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-20 border-t border-[var(--line)] py-12 relative">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Brand & Identity */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-700 text-white font-bold text-xs">
            <span>SD</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm text-[var(--ink)]">
              {profile.name}
            </span>
            <span className="text-xs text-[var(--ink-faint)] mono">
              Production Full Stack & Backend Engineer
            </span>
          </div>
        </div>

        {/* Quick Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg glass-panel hover:border-emerald-500/40 text-xs text-[var(--ink-soft)] hover:text-[var(--accent)] transition-colors cursor-pointer"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Copyright & Tech Stack Credits */}
      <div className="mt-8 pt-6 border-t border-[var(--line)] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs mono text-[var(--ink-faint)]">
        <p>
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="flex items-center gap-1.5">
          <Terminal className="w-3.5 h-3.5 text-emerald-400" />
          <span>Engineered with Next.js, Three.js & Tailwind</span>
        </p>
      </div>
    </footer>
  );
}
