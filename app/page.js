"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  const [history, setHistory] = useState([
    { type: "welcome", title: "WELCOME", subtitle: "" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isInteractive, setIsInteractive] = useState(false);
  const [currentTypedCmd, setCurrentTypedCmd] = useState("");
  const [activePromptIndex, setActivePromptIndex] = useState(0);
  const [systemReadyLog, setSystemReadyLog] = useState(true);

  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  // Preloaded command sequences based on your personal credentials
  const preloadedPrompts = [
    {
      cmd: "whoami",
      output: { type: "output", text: "Muhammad Hafizh" }
    },
    {
      cmd: "cat role.txt",
      output: { type: "output", text: "CyberSecurity & Network Engineer" }
    },
    {
      cmd: "cat location.txt",
      output: { type: "output", text: "Bandung, Indonesia" }
    },
    {
      cmd: "cat bio.txt",
      output: { type: "output", text: "Cyber Security Engineer | Network Engineer | Backend Developer" }
    },
    {
      cmd: "ls ./links",
      output: { type: "output", text: "github/  linkedin/  email/", isLinks: true }
    },
    {
      cmd: "status --availability",
      output: { type: "status", text: "Open to new opportunities" }
    }
  ];

  const commands = {
    help: {
      desc: "show this menu",
      exec: () => [
        "Available commands:",
        "  help        - show this menu",
        "  about       - who am I",
        "  skills      - tech stack",
        "  projects    - go to projects page",
        "  resume      - download/view CV/resume PDF",
        // "  laporan     - view Medan Empire Warnet report PDF",
        "  posts       - show technical logs",
        "  profile     - go to profile page",
        "  contact     - get in touch",
        "  clear       - clear terminal",
      ],
    },
    about: {
      desc: "who am I",
      exec: () => [
        "Name: Muhammad Hafizh",
        "Location: Bandung, Indonesia",
        "Bio: Cyber Security Engineer | Network Engineer | Backend Developer"
      ]
    },
    skills: {
      desc: "tech stack",
      exec: () => [
        "Development : Next.js, React, TypeScript, Node.js, Python",
        "Security    : Penetration Testing, Linux, Infrastructure, API Security",
        "Tools       : AWS, Docker, Wireshark, Nmap, Kali Linux"
      ]
    },
    projects: {
      desc: "go to projects page",
      exec: () => {
        setTimeout(() => { window.location.href = "/projects"; }, 500);
        return ["Navigating to /projects..."];
      }
    },
    resume: {
      desc: "download or view my professional CV/resume",
      exec: () => {
        setTimeout(() => { window.open("/resume.pdf", "_blank"); }, 500);
        return ["Opening resume.pdf in a new tab..."];
      }
    },
    laporan: {
      desc: "download my Medan Empire Warnet network design report",
      exec: () => {
        setTimeout(() => { window.open("/laporan-warnet.pdf", "_blank"); }, 500);
        return ["Opening Laporan Akhir Medan Empire Warnet.pdf in a new tab..."];
      }
    },
    profile: {
      desc: "go to profile page",
      exec: () => {
        setTimeout(() => { window.location.href = "/about"; }, 500);
        return ["Navigating to /about..."];
      }
    },
    posts: {
      desc: "show technical logs",
      exec: () => [
        "Encrypted Logs:",
        "  - LOG_003: Hardening Linux Remote Access (SSH & UFW)",
        "  - LOG_002: Vectorizing Sentiment Classifier Models (SVM)",
        "  - LOG_001: Decoupling Route Propagation (OSPF)"
      ]
    },
    contact: {
      desc: "get in touch",
      exec: () => {
        setTimeout(() => { window.location.href = "/contact"; }, 500);
        return ["Navigating to /contact..."];
      }
    }
  };

  // Pre-loading typewriter simulation
  useEffect(() => {
    // Hide system ready log after 1.2s
    const readyTimer = setTimeout(() => {
      setSystemReadyLog(false);
    }, 1200);

    return () => clearTimeout(readyTimer);
  }, []);

  useEffect(() => {
    if (systemReadyLog) return;
    if (activePromptIndex >= preloadedPrompts.length) {
      // Finished typing preloaded prompts, append comment and make interactive
      setHistory((prev) => [
        ...prev,
        { type: "comment", text: "# Use 'help' for command list" }
      ]);
      setIsInteractive(true);
      return;
    }

    const currentPrompt = preloadedPrompts[activePromptIndex];
    let charIdx = 0;
    setCurrentTypedCmd("");

    const typingInterval = setInterval(() => {
      if (charIdx < currentPrompt.cmd.length) {
        setCurrentTypedCmd((prev) => prev + currentPrompt.cmd[charIdx]);
        charIdx++;
      } else {
        clearInterval(typingInterval);

        // Push typed command and its output to history
        setTimeout(() => {
          setHistory((prev) => [
            ...prev,
            { type: "input", cmd: currentPrompt.cmd },
            currentPrompt.output
          ]);
          setCurrentTypedCmd("");
          setActivePromptIndex((prev) => prev + 1);
        }, 300);
      }
    }, 60);

    return () => clearInterval(typingInterval);
  }, [systemReadyLog, activePromptIndex]);

  const handleCommand = (cmdText) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    // Add command to history
    const updatedHistory = [...history, { type: "input", cmd: cmdText }];

    if (trimmed === "clear") {
      setHistory([]);
      setInputValue("");
      return;
    }

    // CD routing navigation helpers
    if (trimmed === "cd /about" || trimmed === "cd about" || trimmed === "cd /profile" || trimmed === "cd profile") {
      window.location.href = "/about";
      return;
    }
    if (trimmed === "cd /projects" || trimmed === "cd projects") {
      window.location.href = "/projects";
      return;
    }
    if (trimmed === "cd /contact" || trimmed === "cd contact") {
      window.location.href = "/contact";
      return;
    }

    // Exact matching commands
    if (commands[trimmed]) {
      const output = commands[trimmed].exec();
      setHistory([
        ...updatedHistory,
        ...output.map((line) => ({ type: "output", text: line }))
      ]);
    } else if (trimmed === "whoami") {
      setHistory([...updatedHistory, { type: "output", text: "Muhammad Hafizh" }]);
    } else if (trimmed === "cat role.txt") {
      setHistory([...updatedHistory, { type: "output", text: "CyberSecurity & Network Engineer" }]);
    } else if (trimmed === "cat location.txt") {
      setHistory([...updatedHistory, { type: "output", text: "Bandung, Indonesia" }]);
    } else if (trimmed === "cat bio.txt") {
      setHistory([...updatedHistory, { type: "output", text: "Cyber Security Engineer | Network Engineer | Backend Developer" }]);
    } else if (trimmed === "ls" || trimmed === "ls ./links") {
      setHistory([...updatedHistory, { type: "output", text: "github/  linkedin/  email/", isLinks: true }]);
    } else if (trimmed === "status --availability") {
      setHistory([...updatedHistory, { type: "status", text: "Open to new opportunities" }]);
    } else {
      setHistory([
        ...updatedHistory,
        { type: "error", text: `Command not recognized: '${trimmed}'. Type 'help' to see valid prompts.` }
      ]);
    }

    setInputValue("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(inputValue);
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, currentTypedCmd, systemReadyLog]);

  const focusTerminal = () => {
    if (isInteractive) {
      inputRef.current?.focus();
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-6 md:px-12 py-10 flex flex-col items-center justify-center min-h-[calc(100vh-10rem)]">

      {/* INITIALIZING LOG */}
      <div
        className={`text-center font-mono text-xs md:text-sm tracking-[0.2em] text-[var(--accent)] opacity-60 mb-6 transition-all duration-700 select-none ${systemReadyLog ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none absolute"
          }`}
      >
        [SYSTEM_READY] INITIALIZING_PORTFOLIO
      </div>

      {/* Terminal Card Window */}
      <div
        onClick={focusTerminal}
        className={`${styles.terminalCard} ${systemReadyLog ? "opacity-0 translate-y-8 pointer-events-none" : "opacity-100 translate-y-0"
          }`}
      >

        {/* Terminal Header */}
        <div className={styles.terminalHeader}>
          {/* macOS Control Dots */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]/90"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]/90"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]/90"></div>
          </div>

          {/* Terminal Title */}
          <div className="text-[11px] md:text-xs font-mono text-slate-500">
            portfolio – Muhammad Hafizh Fenaldi
          </div>

          {/* Connection Indicator */}
          <div className="flex items-center gap-1.5 text-[10px] md:text-xs font-mono text-[var(--accent)] transition-colors duration-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]"></span>
            </span>
            <span>CONNECTED</span>
          </div>
        </div>

        {/* Terminal Screen / Input-Output Body */}
        <div className={`scanlines ${styles.terminalScreen}`}>

          {history.map((line, idx) => {
            if (line.type === "welcome") {
              return (
                <div key={idx} className="pb-2">
                  <h2 className={`${styles.welcomeTitle} select-text`}>
                    {line.title}
                  </h2>
                  {line.subtitle && (
                    <p className={`${styles.welcomeSubtitle} select-text`}>
                      {line.subtitle}
                    </p>
                  )}
                </div>
              );
            }
            if (line.type === "input") {
              return (
                <div key={idx} className="select-text">
                  <span className={styles.promptSymbol}>$ </span>
                  <span className="text-[var(--foreground)]">{line.cmd}</span>
                </div>
              );
            }
            if (line.type === "output") {
              if (line.isLinks) {
                return (
                  <div key={idx} className={`${styles.textOutput} flex items-center gap-4 flex-wrap`}>
                    <a
                      href="https://github.com/OoguroRYuya"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.textOutputLink} hover:underline cursor-pointer`}
                    >
                      github/
                    </a>
                    <a
                      href="https://www.linkedin.com/in/muhammad-hafizh-fenaldi/?locale=en"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.textOutputLink} hover:underline cursor-pointer`}
                    >
                      linkedin/
                    </a>
                    <a
                      href="mailto:mhafizfenaldhie2904@gmail.com"
                      className={`${styles.textOutputLink} hover:underline cursor-pointer`}
                    >
                      email/
                    </a>
                  </div>
                );
              }
              return (
                <p
                  key={idx}
                  className={styles.textOutput}
                >
                  {line.text}
                </p>
              );
            }
            if (line.type === "status") {
              return (
                <div key={idx} className={styles.statusLine}>
                  <span className={styles.statusDot}>[●]</span>
                  <span>{line.text}</span>
                </div>
              );
            }
            if (line.type === "comment") {
              return (
                <p key={idx} className={styles.commentLine}>
                  {line.text}
                </p>
              );
            }
            if (line.type === "error") {
              return (
                <p key={idx} className={styles.errorLine}>
                  {line.text}
                </p>
              );
            }
            return null;
          })}

          {/* Typing Simulation Line */}
          {!isInteractive && currentTypedCmd && (
            <div className="select-none">
              <span className={styles.promptSymbol}>$ </span>
              <span className="text-[var(--foreground)]">{currentTypedCmd}</span>
              <span className={styles.cursor}></span>
            </div>
          )}

          <div ref={terminalEndRef} />

          {/* Form Input Line */}
          {isInteractive && (
            <form onSubmit={handleSubmit} className="flex items-center select-none pt-2 animate-fade-in">
              <span className={styles.promptSymbol}>$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 bg-transparent border-0 outline-none text-[var(--foreground)] font-mono caret-[var(--accent)]"
                autoFocus
                autoComplete="off"
                spellCheck="false"
                placeholder="Type 'help'..."
              />
            </form>
          )}

        </div>

        {/* Terminal Footer Bar */}
        <div className={styles.terminalFooter}>
          {/* Status */}
          <div>[SYSTEM_READY]</div>

          {/* Footer Navigation Links */}
          <div className="flex items-center gap-4 md:gap-6">
            <Link href="/projects" className="hover:text-[var(--accent)] transition-colors cursor-pointer">
              ./projects
            </Link>
            <Link href="/about" className="hover:text-[var(--accent)] transition-colors cursor-pointer">
              ./about
            </Link>
            <Link href="/contact" className="hover:text-[var(--accent)] transition-colors cursor-pointer">
              ./contact
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
