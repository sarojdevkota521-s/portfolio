"use client";

import { useState, useRef, MouseEvent } from "react";
import Image from "next/image";
import { Sparkles, Camera, Layers, ShieldCheck, Terminal } from "lucide-react";

type VisualMode = "3d" | "photo";

export default function HeroProfileVisual() {
  const [mode, setMode] = useState<VisualMode>("photo");
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // 3D tilt calculation
  const rotateY = isHovered ? mousePos.x * 16 : 0;
  const rotateX = isHovered ? -mousePos.y * 16 : 0;
  const glareX = (mousePos.x + 0.5) * 100;
  const glareY = (mousePos.y + 0.5) * 100;

  return (
    <div className="w-full relative flex flex-col items-center justify-center select-none">
      {/* Ambient background glows */}
      <div className="ambient-glow-emerald w-[340px] h-[340px] -top-10 -right-10 opacity-70 pointer-events-none" />
      <div className="ambient-glow-cyan w-[300px] h-[300px] -bottom-10 -left-10 opacity-60 pointer-events-none" />

      {/* Main 3D Card Container with Perspective */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: "1000px",
        }}
        className="w-full max-w-[430px] relative transition-transform duration-200 ease-out"
      >
        <div
          style={{
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
            transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
          }}
          className="relative rounded-3xl overflow-hidden glass-panel border border-[var(--line-strong)] shadow-2xl p-2.5 backdrop-blur-xl group"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-[var(--line)] text-xs mono text-[var(--ink-faint)]">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 text-[10px] uppercase tracking-wider text-[var(--ink-soft)] flex items-center gap-1">
                <Terminal className="w-3 h-3 text-[var(--accent)]" />
                <span>saroj.dev / visual</span>
              </span>
            </div>

            {/* Mode Switcher Tabs */}
            <div className="flex items-center gap-1 p-0.5 rounded-lg bg-[var(--bg)] border border-[var(--line)]">
              <button
                onClick={() => setMode("3d")}
                className={`px-2 py-0.5 rounded-md text-[11px] font-medium flex items-center gap-1 transition-all ${
                  mode === "3d"
                    ? "bg-[var(--accent)] text-white shadow-sm"
                    : "text-[var(--ink-faint)] hover:text-[var(--ink)]"
                }`}
                title="View 3D Studio Avatar"
              >
                <Sparkles className="w-3 h-3" />
                <span>3D Avatar</span>
              </button>

              <button
                onClick={() => setMode("photo")}
                className={`px-2 py-0.5 rounded-md text-[11px] font-medium flex items-center gap-1 transition-all ${
                  mode === "photo"
                    ? "bg-[var(--accent)] text-white shadow-sm"
                    : "text-[var(--ink-faint)] hover:text-[var(--ink)]"
                }`}
                title="View Authentic Photograph"
              >
                <Camera className="w-3 h-3" />
                <span>Real Photo</span>
              </button>
            </div>
          </div>

          {/* Portrait Image Frame */}
          <div className="relative w-full aspect-[927/1024] rounded-2xl overflow-hidden bg-black/20 mt-2 shadow-inner">
            {/* 3D Avatar Image */}
            <div
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                mode === "3d" ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <Image
                src="/images/saroj_3d.jpg"
                alt="Saroj Devkota 3D Avatar"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Real Photograph Image */}
            <div
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                mode === "photo" ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <Image
                src="/images/saroj_photo.jpg"
                alt="Saroj Devkota Photo"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 450px"
                className="object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Dynamic Interactive Light Glare Sheen */}
            {isHovered && (
              <div
                style={{
                  background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 65%)`,
                }}
                className="absolute inset-0 pointer-events-none z-20 mix-blend-overlay transition-opacity duration-200"
              />
            )}

            {/* Subtle Vignette & Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none z-15" />

            {/* Floating Live Tech Telemetry on Image */}
            <div className="absolute top-3 left-3 z-20 flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full text-[10px] mono font-semibold tracking-wider bg-black/50 text-emerald-400 border border-emerald-500/30 backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {mode === "3d" ? "3D AVATAR · STUDIO" : "REAL PHOTO · ORIGINAL"}
              </span>
            </div>

            {/* Quick Toggle Floating Button (Bottom-Right) */}
            <button
              onClick={() => setMode(mode === "3d" ? "photo" : "3d")}
              className="absolute bottom-3 right-3 z-20 px-3 py-1.5 rounded-xl bg-black/60 hover:bg-black/80 text-white text-xs mono border border-white/20 backdrop-blur-md flex items-center gap-1.5 transition-all shadow-xl hover:scale-105 active:scale-95"
              title={`Switch to ${mode === "3d" ? "Real Photo" : "3D Avatar"}`}
            >
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-[11px] font-medium">
                Switch to {mode === "3d" ? "Photo" : "3D"}
              </span>
            </button>

            {/* Identity Badge Overlay (Bottom-Left) */}
            <div className="absolute bottom-3 left-3 z-20 pointer-events-none flex flex-col gap-0.5 text-white">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold tracking-tight drop-shadow-md">
                  Saroj Devkota
                </span>
                <ShieldCheck className="w-4 h-4 text-emerald-400 drop-shadow" />
              </div>
              <span className="text-[11px] text-white/80 mono drop-shadow">
                Full Stack & Backend Engineer
              </span>
            </div>
          </div>

          {/* Footer Interactive Hint */}
          <div className="flex items-center justify-between px-3 pt-2.5 pb-1 text-[11px] mono text-[var(--ink-faint)]">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              <span className="text-[10px] tracking-wide">
                {isHovered ? "3D TILT ACTIVE · MOVE CURSOR" : "HOVER FOR 3D PERSPECTIVE"}
              </span>
            </div>
            <span className="text-[10px] text-[var(--accent)] font-medium">
              SAROJ.PORTFOLIO
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
