"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const [theme, setTheme] = useState("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    if (savedTheme === "light") {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "light") {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    }
  };

  const getPageName = () => {
    if (pathname === "/") return "home";
    return pathname.replace("/", "");
  };

  const navLinks = [
    { label: "./home", href: "/" },
    { label: "./about", href: "/about" },
    { label: "./projects", href: "/projects" },
    { label: "./contact", href: "/contact" },
  ];

  return (
    <header className="w-full bg-transparent border-b border-[var(--border-color)] relative z-40 select-none transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 h-20 flex items-center justify-between gap-2">
        
        {/* Zsh-like Prompt Logo */}
        <Link href="/" className="flex items-center gap-1 cursor-pointer font-mono text-[10px] sm:text-xs md:text-sm tracking-tight shrink-0">
          <span className={`${styles.greenDot} mr-1`}></span>
          <span className="text-emerald-500 font-bold hidden sm:inline">fizi@portofolio:~/</span>
          <span className="text-emerald-500 font-bold sm:hidden">fizi:~/</span>
          <span className="text-[var(--foreground)] transition-colors duration-300">{getPageName()}</span>
        </Link>

        {/* Navigation & Theme Toggle */}
        <div className="flex items-center gap-3 sm:gap-6 md:gap-10">
          <nav className="flex items-center gap-2.5 sm:gap-4 md:gap-8 text-[10px] sm:text-xs md:text-sm font-mono">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-1 cursor-pointer transition-colors ${
                    isActive ? "text-[var(--accent)]" : "text-slate-500 hover:text-[var(--foreground)]"
                  }`}
                >
                  {link.label}
                  {isActive && <span className={styles.activeUnderline}></span>}
                </Link>
              );
            })}
          </nav>

          {/* Theme Toggle switch */}
          {mounted && (
            <div className="flex items-center gap-2 font-mono text-[10px] md:text-xs">
              <div 
                onClick={toggleTheme} 
                className={styles.toggleCapsule}
                title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                <div className={`${styles.toggleThumb} ${theme === "light" ? styles.thumbLight : styles.thumbDark}`}></div>
              </div>
              <span className="text-slate-500 uppercase tracking-wider font-semibold min-w-[35px] text-left hidden sm:inline">
                {theme}
              </span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

