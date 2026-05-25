"use client";

import { useEffect, useRef, useState } from "react";

type Line = {
  kind: "input" | "output" | "system" | "error";
  text: string;
};

const BOOT_LINES: Line[] = [
  { kind: "system", text: "OnCollision Studio :: command interface v1.0" },
  { kind: "system", text: "Type 'help' for available commands. Press ESC or type 'exit' to close." },
  { kind: "system", text: "" },
];

export default function Terminal() {
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState<Line[]>(BOOT_LINES);
  const [input, setInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Toggle terminal with ~ or `
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // Don't intercept when user is typing in a real input/textarea
      const target = e.target as HTMLElement;
      const isTyping =
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable;

      if ((e.key === "~" || e.key === "`") && !isTyping) {
        e.preventDefault();
        setOpen((prev) => !prev);
      } else if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Focus input when terminal opens
  useEffect(() => {
    if (open) {
      // Small timeout so the focus lands after the open animation begins
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  // Auto-scroll to bottom on new lines
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  function runCommand(raw: string) {
    const cmd = raw.trim().toLowerCase();
    const newLines: Line[] = [{ kind: "input", text: `> ${raw}` }];

    if (cmd === "") {
      // nothing — just push the prompt echo
    } else if (cmd === "help" || cmd === "?") {
      newLines.push(
        { kind: "output", text: "Available commands:" },
        { kind: "output", text: "  help          show this list" },
        { kind: "output", text: "  whoami        about OnCollision Studio" },
        { kind: "output", text: "  velocity      details on PROJECT: VELOCITY" },
        { kind: "output", text: "  roadmap       what's coming next" },
        { kind: "output", text: "  team          who's behind the studio" },
        { kind: "output", text: "  socials       where to find us" },
        { kind: "output", text: "  contact       send us a message" },
        { kind: "output", text: "  clear         clear the terminal" },
        { kind: "output", text: "  exit          close the terminal (or press ESC)" },
        { kind: "output", text: "" },
        { kind: "system", text: "Hint: there are commands not listed here. Try typing things." },
      );
    } else if (cmd === "whoami") {
      newLines.push(
        { kind: "output", text: "OnCollision Studio" },
        { kind: "output", text: "Independent game studio. Mobile-first FPS." },
        { kind: "output", text: "Founded by gamers. Built for gamers." },
        { kind: "output", text: "Currently developing: PROJECT: VELOCITY." },
      );
    } else if (cmd === "velocity" || cmd === "project velocity") {
      newLines.push(
        { kind: "output", text: "PROJECT: VELOCITY" },
        { kind: "output", text: "  Status:   In Development" },
        { kind: "output", text: "  Genre:    Mobile FPS, competitive" },
        { kind: "output", text: "  Engine:   Unity" },
        { kind: "output", text: "  Focus:    Speed. Skill. Movement." },
        { kind: "output", text: "" },
        { kind: "output", text: "Futuristic weapons. Movement-driven combat." },
        { kind: "output", text: "Built for players who want depth on mobile." },
      );
    } else if (cmd === "roadmap") {
      newLines.push(
        { kind: "output", text: "[ ✓ ] Alpha 0.01  — Weapon system prototype" },
        { kind: "output", text: "[ ✓ ] Alpha 0.02  — Movement tuning" },
        { kind: "output", text: "[ ▸ ] Alpha 0.03  — HUD overhaul (in progress)" },
        { kind: "output", text: "[   ] Alpha 0.04  — First playable map" },
        { kind: "output", text: "[   ] Closed Beta — TBA" },
        { kind: "output", text: "[   ] Launch       — TBA" },
      );
    } else if (cmd === "team") {
      newLines.push(
        { kind: "output", text: "Currently:" },
        { kind: "output", text: "  Eli Elad Machluf  — CEO / Developer" },
        { kind: "output", text: "" },
        { kind: "system", text: "We're growing. Reach out via contact." },
      );
    } else if (cmd === "socials") {
      newLines.push(
        { kind: "output", text: "Instagram: instagram.com/oncollisionstudio" },
        { kind: "output", text: "GitHub:    github.com/oncollisionstudios" },
        { kind: "output", text: "Discord:   coming soon" },
        { kind: "output", text: "YouTube:   coming soon" },
      );
    } else if (cmd === "contact") {
      newLines.push(
        { kind: "output", text: "Opening contact form..." },
      );
      setTimeout(() => {
        setOpen(false);
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }, 600);
    } else if (cmd === "clear" || cmd === "cls") {
      setHistory(BOOT_LINES);
      setInput("");
      return;
    } else if (cmd === "exit" || cmd === "quit" || cmd === "close") {
      newLines.push({ kind: "output", text: "Closing." });
      setTimeout(() => setOpen(false), 200);
    } else if (cmd === "sudo") {
      newLines.push({
        kind: "error",
        text: "Nice try. You're not root here.",
      });
    } else if (cmd === "ls" || cmd === "dir") {
      newLines.push(
        { kind: "output", text: "games/        team/         devlog/       press/" },
        { kind: "output", text: "about/        contact/      privacy/      .secrets/" },
      );
    } else if (cmd === "cat .secrets" || cmd === "cat .secrets/" || cmd === "ls .secrets") {
      newLines.push(
        { kind: "system", text: "Access denied. Or is it?" },
        { kind: "output", text: "..." },
        { kind: "output", text: "you found the easter egg :)" },
        { kind: "output", text: "" },
        { kind: "output", text: "PROJECT: VELOCITY codename was originally 'PROJECT: COLLIDE'." },
        { kind: "output", text: "We changed it because it sounded too aggressive." },
      );
    } else if (cmd === "hello" || cmd === "hi" || cmd === "hey") {
      newLines.push({ kind: "output", text: "hey :)" });
    } else if (cmd === "rm -rf /" || cmd === "rm -rf") {
      newLines.push(
        { kind: "error", text: "Deleting everything..." },
        { kind: "output", text: "..." },
        { kind: "output", text: "..." },
        { kind: "system", text: "Just kidding. We have backups." },
      );
    } else if (cmd === "matrix") {
      newLines.push({
        kind: "output",
        text: "There is no spoon.",
      });
    } else if (cmd === "konami") {
      newLines.push({
        kind: "system",
        text: "↑ ↑ ↓ ↓ ← → ← → B A — try it on the page sometime",
      });
    } else if (cmd === "credits") {
      newLines.push(
        { kind: "output", text: "Site:       Built by Eli with Claude" },
        { kind: "output", text: "Fonts:      Rajdhani (Google Fonts)" },
        { kind: "output", text: "Hosting:    Vercel" },
        { kind: "output", text: "Code:       Next.js + TypeScript + Tailwind" },
      );
    } else {
      newLines.push({
        kind: "error",
        text: `Unknown command: '${raw}'. Type 'help' for available commands.`,
      });
    }

    setHistory((h) => [...h, ...newLines, { kind: "output", text: "" }]);
    setCommandHistory((ch) => [...ch, raw]);
    setHistoryIndex(-1);
    setInput("");
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      runCommand(input);
    } else if (e.key === "ArrowUp") {
      // Walk back through previous commands
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const next = historyIndex === -1
        ? commandHistory.length - 1
        : Math.max(0, historyIndex - 1);
      setHistoryIndex(next);
      setInput(commandHistory[next]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const next = historyIndex + 1;
      if (next >= commandHistory.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(next);
        setInput(commandHistory[next]);
      }
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-end md:items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="terminal-window w-full max-w-3xl h-[70vh] md:h-[60vh] bg-black/95 border border-cyan-500/50 rounded-xl shadow-2xl overflow-hidden flex flex-col"
        style={{
          boxShadow: "0 0 60px rgba(0, 183, 255, 0.25), 0 0 0 1px rgba(0, 183, 255, 0.3)",
        }}
      >
        {/* Title bar */}
        <div className="flex items-center justify-between bg-zinc-900/95 border-b border-cyan-500/30 px-4 py-2">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-amber-500/70" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
          </div>
          <div className="text-cyan-300/80 text-sm tracking-widest font-mono">
            oncollision :: terminal
          </div>
          <button
            onClick={() => setOpen(false)}
            className="text-gray-500 hover:text-cyan-400 transition text-sm"
            aria-label="Close terminal"
          >
            ESC
          </button>
        </div>

        {/* Output area */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-4 font-mono text-sm md:text-base leading-relaxed"
          onClick={() => inputRef.current?.focus()}
        >
          {history.map((line, i) => (
            <div
              key={i}
              className={
                line.kind === "input"
                  ? "text-cyan-300"
                  : line.kind === "error"
                  ? "text-red-400"
                  : line.kind === "system"
                  ? "text-amber-400/80"
                  : "text-gray-300"
              }
            >
              {line.text || "\u00A0"}
            </div>
          ))}

          {/* Active prompt */}
          <div className="flex items-center text-cyan-300 mt-1">
            <span className="mr-2">{">"}</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              spellCheck={false}
              autoCapitalize="off"
              autoComplete="off"
              autoCorrect="off"
              className="flex-1 bg-transparent outline-none text-cyan-100 caret-cyan-400"
              aria-label="Terminal input"
            />
          </div>
        </div>
      </div>
    </div>
  );
}