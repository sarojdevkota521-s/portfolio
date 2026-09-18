"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft, Maximize2 } from "lucide-react";
import { profile, projects, skillGroups } from "@/lib/data";

type CommandOutput = {
  command: string;
  output: React.ReactNode;
};

export default function TerminalConsole() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: "saroj --status",
      output: (
        <div className="space-y-1 text-emerald-400">
          <p className="font-semibold">⚡ SAROJ DEVKOTA [SYSTEM v2.5 OPERATIONAL]</p>
          <p className="text-[var(--ink-soft)]">
            Full Stack Developer specializing in Django REST, Multi-tenant Architectures, and AI Agents (MCP/n8n).
          </p>
          <p className="text-xs text-[var(--ink-faint)]">
            Tip: Click the command tags below or type &apos;help&apos; for available commands.
          </p>
        </div>
      ),
    },
  ]);
  const [cmdHistory, setCmdHistory] = useState<string[]>(["saroj --status"]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const executeCommand = (cmdStr: string) => {
    const raw = cmdStr.trim().toLowerCase();
    if (!raw) return;

    setCmdHistory((prev) => [...prev, raw]);
    setHistoryIndex(-1);

    if (raw === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    let response: React.ReactNode;

    switch (raw) {
      case "help":
        response = (
          <div className="space-y-1 text-xs">
            <p className="text-[var(--ink)] font-semibold">Available system commands:</p>
            <p><span className="text-emerald-400 font-mono">about</span> - Background & engineering principles</p>
            <p><span className="text-emerald-400 font-mono">skills</span> - Stack & technical capabilities</p>
            <p><span className="text-emerald-400 font-mono">projects</span> - Deployed production platforms</p>
            <p><span className="text-emerald-400 font-mono">contact</span> - Contact endpoints & social handles</p>
            <p><span className="text-emerald-400 font-mono">hire</span> - Why work with Saroj</p>
            <p><span className="text-emerald-400 font-mono">clear</span> - Clear the terminal output</p>
          </div>
        );
        break;

      case "about":
        response = (
          <div className="space-y-2 text-xs text-[var(--ink-soft)] leading-relaxed">
            <p className="text-[var(--ink)] font-medium">Philosophy: Production Reliability & Pragmatic Architecture</p>
            <p>{profile.summary}</p>
            <p className="text-emerald-400">Location: {profile.location} · Available globally for remote & onsite roles.</p>
          </div>
        );
        break;

      case "skills":
        response = (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs py-1">
            {skillGroups.slice(0, 4).map((group) => (
              <div key={group.tag} className="p-2 rounded bg-black/20 border border-white/5">
                <span className="text-emerald-400 font-mono font-semibold uppercase">{group.label}:</span>
                <p className="text-[var(--ink-soft)] mt-0.5">{group.items.join(", ")}</p>
              </div>
            ))}
          </div>
        );
        break;

      case "projects":
        response = (
          <div className="space-y-2 text-xs">
            <p className="text-[var(--ink)] font-semibold">Live Production Systems ({projects.length}):</p>
            {projects.slice(0, 4).map((p) => (
              <div key={p.id} className="border-l-2 border-emerald-500/50 pl-2 py-0.5">
                <span className="font-semibold text-emerald-400">{p.name}</span>
                <span className="text-[var(--ink-faint)] ml-2">[{p.stack.slice(0, 3).join(", ")}]</span>
                <p className="text-[var(--ink-soft)] text-[11px]">{p.summary}</p>
              </div>
            ))}
          </div>
        );
        break;

      case "contact":
        response = (
          <div className="space-y-1 text-xs">
            <p><span className="text-emerald-400">Email:</span> <a href={`mailto:${profile.email}`} className="underline">{profile.email}</a></p>
            <p><span className="text-emerald-400">Phone:</span> {profile.phone}</p>
            <p><span className="text-emerald-400">GitHub:</span> <a href={profile.github} target="_blank" rel="noreferrer" className="underline">{profile.githubLabel}</a></p>
            <p><span className="text-emerald-400">LinkedIn:</span> <a href={profile.linkedin} target="_blank" rel="noreferrer" className="underline">{profile.linkedinLabel}</a></p>
          </div>
        );
        break;

      case "hire":
        response = (
          <div className="space-y-1 text-xs text-[var(--ink-soft)] bg-emerald-950/20 p-2.5 rounded border border-emerald-500/20">
            <p className="text-emerald-400 font-bold">🚀 READY FOR PRODUCTION DEPLOYMENT</p>
            <p>✓ Shipped 5 production systems in fast-paced startup environment</p>
            <p>✓ Hands-on Docker/Dokploy infrastructure management</p>
            <p>✓ Autonomous AI-agent integrations (MCP server + n8n automation)</p>
            <p>✓ Direct cross-department startup business operations acumen</p>
          </div>
        );
        break;

      default:
        response = (
          <p className="text-xs text-red-400">
            command not found: &apos;{raw}&apos;. Type <span className="text-emerald-400 font-mono">help</span> to view available commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmdStr, output: response }]);
    setInput("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const nextIdx = historyIndex === -1 ? cmdHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIdx);
      setInput(cmdHistory[nextIdx]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIdx = historyIndex + 1;
      if (nextIdx >= cmdHistory.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(nextIdx);
        setInput(cmdHistory[nextIdx]);
      }
    }
  };

  const quickCommands = ["about", "skills", "projects", "hire", "contact", "clear"];

  return (
    <div className="relative rounded-2xl overflow-hidden glass-panel border border-[var(--line-strong)] shadow-xl font-mono">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[var(--bg-panel)] border-b border-[var(--line)]">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          <span className="ml-3 text-xs text-[var(--ink-soft)] flex items-center gap-1.5 font-sans font-medium">
            <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
            <span>saroj@production-node:~</span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden sm:inline-block text-[11px] text-[var(--ink-faint)]">
            zsh / bash
          </span>
        </div>
      </div>

      {/* Terminal Body */}
      <div
        className="p-4 sm:p-5 max-h-[300px] overflow-y-auto space-y-4 scrollbar-thin text-xs sm:text-sm bg-[var(--bg)]/90"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1.5">
            <div className="flex items-center gap-2 text-[var(--accent)] font-semibold">
              <span className="text-emerald-400">➜</span>
              <span className="text-[var(--ink-faint)]">~</span>
              <span className="text-[var(--ink)]">{item.command}</span>
            </div>
            <div className="pl-4">{item.output}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Terminal Input Form */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 px-4 py-3 bg-[var(--bg-panel)] border-t border-[var(--line)]"
      >
        <span className="text-emerald-400 font-bold">➜</span>
        <span className="text-[var(--ink-faint)] text-xs">~</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="type a command (e.g. 'hire', 'projects', 'skills')..."
          className="flex-1 bg-transparent border-none outline-none text-xs sm:text-sm text-[var(--ink)] placeholder:text-[var(--ink-faint)]"
        />
        <button
          type="submit"
          className="p-1.5 rounded-lg bg-[var(--accent-soft)] hover:bg-[var(--accent)] hover:text-white text-[var(--accent)] transition-colors"
          title="Run command"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </form>

      {/* Quick Clickable Action Chips */}
      <div className="px-4 py-2.5 bg-[var(--bg)]/60 border-t border-[var(--line)] flex items-center gap-2 flex-wrap">
        <span className="text-[11px] text-[var(--ink-faint)] flex items-center gap-1 font-sans">
          <Sparkles className="w-3 h-3 text-emerald-400" />
          <span>Quick Run:</span>
        </span>
        {quickCommands.map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => executeCommand(cmd)}
            className="px-2.5 py-0.5 text-[11px] rounded-md bg-[var(--bg-panel)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent)] text-[var(--ink-soft)] border border-[var(--line)] transition-colors cursor-pointer"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
}
