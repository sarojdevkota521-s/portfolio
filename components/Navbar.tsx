"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/lib/data";
import { Menu, X, FileText, ArrowUpRight, Terminal, Layers, Briefcase, Mail } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Overview", href: "#overview", icon: Terminal },
    { label: "Stack", href: "#stack", icon: Layers },
    { label: "Deployments", href: "#deployments", icon: Briefcase },
    { label: "Experience", href: "#experience", icon: Briefcase },
    { label: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 pointer-events-none transition-all duration-300">
      <div
        className={`mx-auto max-w-5xl pointer-events-auto rounded-2xl transition-all duration-300 ${
          scrolled
            ? "glass-panel bg-[var(--nav-bg)] py-2.5 px-4 shadow-xl border border-[var(--line-strong)]"
            : "py-2 px-3 bg-[var(--nav-bg)]/60 backdrop-blur-md border border-[var(--line)]"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Monogram + Status Indicator */}
          <a
            href="#overview"
            className="flex items-center gap-3 group transition-transform active:scale-95"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white font-bold text-sm shadow-md shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-all">
              <span>SD</span>
              <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 border border-[var(--bg)]"></span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-sm tracking-tight text-[var(--ink)] flex items-center gap-1.5">
                {profile.name}
              </span>
              <span className="text-[11px] mono text-[var(--ink-faint)] hidden sm:inline-block">
                Full Stack & Backend
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[var(--bg-panel)]/80 px-2 py-1 rounded-xl border border-[var(--line)]">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 text-xs font-medium text-[var(--ink-soft)] hover:text-[var(--accent)] hover:bg-[var(--accent-soft)] rounded-lg transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2">
            <a
              href={profile.resumeHref}
              download="Saroj_Devkota_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-[var(--bg-panel)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent)] text-[var(--ink)] border border-[var(--line)] transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-[var(--accent)]" />
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>

            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--line)] text-[var(--ink)] hover:bg-[var(--bg-panel)] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-[var(--line)] flex flex-col gap-1 pb-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2 text-sm text-[var(--ink-soft)] hover:text-[var(--accent)] hover:bg-[var(--accent-soft)] rounded-lg transition-colors"
                >
                  <Icon className="w-4 h-4 text-[var(--accent)]" />
                  <span>{item.label}</span>
                </a>
              );
            })}
            <a
              href={profile.resumeHref}
              download="Saroj_Devkota_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 mt-2 px-3 py-2 text-sm font-medium rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
