"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

function formatKathmanduTime(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kathmandu",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(date);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "00";
  return `${get("hour")}:${get("minute")}:${get("second")}`;
}

function formatKathmanduDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kathmandu",
    weekday: "short",
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(date);
}

function formatUptime(ms: number) {
  if (ms < 0) return "00d 00h 00m 00s";
  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const months = Math.floor(days / 30);
  const remDays = days % 30;

  if (months > 0) {
    return `${months}mo ${remDays}d ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;
  }
  return `${pad(days)}d ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`;
}

export default function StatusBar({ compact = false }: { compact?: boolean }) {
  const [now, setNow] = useState<Date>(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const uptimeMs = now ? now.getTime() - new Date(profile.careerStart).getTime() : 0;

  return (
    <div
      className={`mono flex flex-wrap items-center gap-x-5 gap-y-1.5 ${
        compact ? "text-[11px]" : "text-xs sm:text-[13px]"
      }`}
      style={{ color: "var(--ink-soft)" }}
      suppressHydrationWarning
    >
      <span className="flex items-center gap-2">
        <span className="status-dot" aria-hidden />
        <span style={{ color: "var(--accent)" }} className="font-medium tracking-wide">
          SYSTEM OPERATIONAL
        </span>
      </span>

      <span className="hidden sm:inline opacity-40">|</span>

      <span suppressHydrationWarning>
        <span style={{ color: "var(--ink-faint)" }}>KATHMANDU · </span>
        {formatKathmanduDate(now)} · {formatKathmanduTime(now)} NPT
      </span>

      <span className="hidden sm:inline opacity-40">|</span>

      <span suppressHydrationWarning>
        <span style={{ color: "var(--ink-faint)" }}>UPTIME · </span>
        {formatUptime(uptimeMs)}
      </span>
    </div>
  );
}
