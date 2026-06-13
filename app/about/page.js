"use client";

import Image from "next/image";

export default function About() {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 md:px-12 py-10 space-y-10 font-mono select-text text-[var(--foreground)] transition-colors duration-300">

      {/* Top Profile Section */}
      <div className="flex flex-col items-center justify-center space-y-4">
        {/* Circular Avatar with glowing green ring */}
        <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full p-1 border-2 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)] bg-[var(--card-bg)]">
          <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-900">
            <Image
              src="/profile.jpg"
              alt="Muhammad Hafizh Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Badges status */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-[10px] md:text-xs text-emerald-600 dark:text-emerald-400 font-semibold select-none">
          <span>[ ID: FZZYY ]</span>
          <span className="text-slate-400 dark:text-slate-700">|</span>
          <span>[ STATUS ACTIVE ]</span>
          <span className="text-slate-400 dark:text-slate-700">|</span>
          <span>[ ROLE CS UNDERGRAD ]</span>
        </div>
      </div>

      {/* 01. BIOGRAPHICAL SUMMARY */}
      <section className="space-y-3">
        <h2 className="text-xs md:text-sm font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase select-none">
          01. BIOGRAPHICAL_SUMMARY
        </h2>
        <div className="p-5 md:p-7 rounded border border-[var(--border-color)] bg-[var(--card-bg)] text-xs md:text-sm leading-relaxed text-[var(--foreground)] transition-all duration-300">
          <p className="mb-4">
            I am an undergraduate student majoring in <span className="text-emerald-600 dark:text-emerald-400 font-bold">Informatics Engineering</span> at <span className="text-emerald-600 dark:text-emerald-400 font-bold">Universitas Padjadjaran</span>. My interest lies heavily in <span className="text-emerald-600 dark:text-emerald-400 font-bold">CyberSecurity, Network Infrastructure</span>, and <span className="text-emerald-600 dark:text-emerald-400 font-bold">Backend Development</span>, driven by a deep curiosity about system hardening, networking protocols, and securing data flows.
          </p>
          <p>
            With experience designing enterprise network architectures and implementing machine learning algorithms, I enjoy bridging the gap between infrastructure configuration and application security auditing.
          </p>
        </div>
      </section>

      {/* 02. EDUCATION & ACADEMIC RECORDS */}
      <section className="space-y-3">
        <h2 className="text-xs md:text-sm font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase select-none">
          02. EDUCATION_HISTORY
        </h2>
        <div className="p-5 md:p-7 rounded border border-[var(--border-color)] bg-[var(--card-bg)] text-xs md:text-sm leading-relaxed text-[var(--foreground)] space-y-6 transition-all duration-300">

          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-emerald-600 dark:text-emerald-400">
              <span>Universitas Padjadjaran</span>
              <span className="text-[10px] md:text-xs text-slate-500 font-normal">Sumedang, Indonesia | 2023 – Present</span>
            </div>
            <p className="text-[11px] md:text-xs font-semibold">Undergraduate Student — Pursuing a Bachelor of Science in Informatics Engineering</p>
            <p className="text-slate-500 dark:text-slate-400 text-[11px] md:text-xs pl-4 border-l border-emerald-500/30">
              • Academic Performance: Consistent "A" grades in core subjects: Computer Networks, Artificial Intelligence, Operating Systems, Database Systems II, and Logic Informatics.
            </p>
          </div>

          <div className="space-y-2 border-t border-[var(--border-color)] pt-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-emerald-600 dark:text-emerald-400">
              <span>MAN Insan Cendekia Kota Batam</span>
              <span className="text-[10px] md:text-xs text-slate-500 font-normal">Batam, Indonesia | 2020 – 2023</span>
            </div>
            <p className="text-[11px] md:text-xs font-semibold">Natural Sciences Stream (High School Graduate)</p>
          </div>

        </div>
      </section>

      {/* 03. TECHNICAL ARSENAL */}
      <section className="space-y-3">
        <h2 className="text-xs md:text-sm font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase select-none">
          03. TECHNICAL_ARSENAL
        </h2>
        <div className="p-5 md:p-6 rounded border border-[var(--border-color)] bg-[var(--card-bg)] grid grid-cols-1 md:grid-cols-3 gap-6 text-[11px] md:text-xs transition-all duration-300">

          {/* Column 1: Core Skills */}
          <div className="space-y-3">
            <h3 className="text-emerald-600 dark:text-emerald-400 font-bold border-b border-[var(--border-color)] pb-1 uppercase tracking-wider select-none">
              Core Skills
            </h3>
            <ul className="space-y-1.5 text-[var(--foreground)]">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 select-none">•</span>
                <span>Network Infrastructure</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 select-none">•</span>
                <span>Threat Detection</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 select-none">•</span>
                <span>Backend Logic</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 select-none">•</span>
                <span>AI Development</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 select-none">•</span>
                <span>Linux Administration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 select-none">•</span>
                <span>SQL Databases</span>
              </li>
            </ul>
          </div>

          {/* Column 2: Languages & Frameworks */}
          <div className="space-y-3">
            <h3 className="text-emerald-600 dark:text-emerald-400 font-bold border-b border-[var(--border-color)] pb-1 uppercase tracking-wider select-none">
              Dev stack
            </h3>
            <ul className="space-y-1.5 text-[var(--foreground)]">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 select-none">•</span>
                <span>Python</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 select-none">•</span>
                <span>C++ / PHP</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 select-none">•</span>
                <span>Next.js / React</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 select-none">•</span>
                <span>TypeScript</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 select-none">•</span>
                <span>Node.js / Express</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 select-none">•</span>
                <span>FastAPI / REST API</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Tools & Platforms */}
          <div className="space-y-3">
            <h3 className="text-emerald-600 dark:text-emerald-400 font-bold border-b border-[var(--border-color)] pb-1 uppercase tracking-wider select-none">
              Tools &amp; Systems
            </h3>
            <ul className="space-y-1.5 text-[var(--foreground)]">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 select-none">•</span>
                <span>Cisco Packet Tracer</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 select-none">•</span>
                <span>Wireshark</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 select-none">•</span>
                <span>Nmap</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 select-none">•</span>
                <span>Docker</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 select-none">•</span>
                <span>Git / CLI</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 select-none">•</span>
                <span>LaTeX</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* 04. CERTIFICATIONS & CREDENTIALS */}
      <section className="space-y-3">
        <h2 className="text-xs md:text-sm font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase select-none">
          04. CERTIFICATIONS_&amp;_BADGES
        </h2>
        <div className="p-5 md:p-7 rounded border border-[var(--border-color)] bg-[var(--card-bg)] text-xs leading-relaxed text-[var(--foreground)] space-y-6 transition-all duration-300">

          <div className="space-y-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-emerald-600 dark:text-emerald-400 font-bold">
              <span>Cisco Networking Academy — Networking Basics</span>
              <span className="text-[10px] text-slate-500 font-normal">Issued Jan 2026</span>
            </div>
            <p className="pl-4 text-slate-500 dark:text-slate-400 text-[11px] md:text-xs">
              Credential validation for core network parameters, IP routing, subnet masks, and dynamic routing architectures.
            </p>
          </div>

          <div className="space-y-1 border-t border-[var(--border-color)] pt-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-emerald-600 dark:text-emerald-400 font-bold">
              <span>Cisco Networking Academy — Introduction to Cybersecurity</span>
              <span className="text-[10px] text-slate-500 font-normal">Issued Dec 2025</span>
            </div>
            <p className="pl-4 text-slate-500 dark:text-slate-400 text-[11px] md:text-xs">
              Credential validation for threat classification, defense methodologies, cryptography, and server hardening concepts.
            </p>
          </div>

          <div className="space-y-1 border-t border-[var(--border-color)] pt-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-emerald-600 dark:text-emerald-400 font-bold">
              <span>Samsung Innovation Campus (SIC) Batch 6 — AI Specialization</span>
              <span className="text-[10px] text-slate-500 font-normal">Issued April 2025</span>
            </div>
            <p className="pl-4 text-slate-500 dark:text-slate-400 text-[11px] md:text-xs">
              Completion of Stage 3 Artificial Intelligence specialization, focusing on machine learning algorithms, NLP, and neural networks.
            </p>
          </div>

        </div>
      </section>

      {/* 05. LEADERSHIP & ORGANIZATION */}
      <section className="space-y-3">
        <h2 className="text-xs md:text-sm font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase select-none">
          05. LEADERSHIP_EXPERIENCES
        </h2>
        <div className="p-5 md:p-7 rounded border border-[var(--border-color)] bg-[var(--card-bg)] text-xs leading-relaxed text-[var(--foreground)] space-y-6 transition-all duration-300">

          <div className="space-y-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-emerald-600 dark:text-emerald-400">
              <span>Chairman — Paguyuban Putra Putri MIPA Unpad</span>
              <span className="text-[10px] text-slate-500 font-normal">Nov 2024 – Dec 2025</span>
            </div>
            <p className="pl-4 text-slate-500 dark:text-slate-400 text-[11px] md:text-xs">
              Directed the faculty’s premier ambassador organization, overseeing member development and brand positioning.
            </p>
          </div>

          <div className="space-y-1 border-t border-[var(--border-color)] pt-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-emerald-600 dark:text-emerald-400">
              <span>Project Manager — Putra Putri MIPA 2025</span>
              <span className="text-[10px] text-slate-500 font-normal">Aug 2025 – Nov 2025</span>
            </div>
            <p className="pl-4 text-slate-500 dark:text-slate-400 text-[11px] md:text-xs">
              Orchestrated the full project lifecycle of the 2025 ambassador pageant, leading a cross-functional team of 20+ members.
            </p>
          </div>

          <div className="space-y-1 border-t border-[var(--border-color)] pt-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between font-bold text-emerald-600 dark:text-emerald-400">
              <span>Staff of Bureau of Organizational Development — BE Himatif Unpad</span>
              <span className="text-[10px] text-slate-500 font-normal">Mar 2024 – Dec 2025</span>
            </div>
            <p className="pl-4 text-slate-500 dark:text-slate-400 text-[11px] md:text-xs">
              Responsible for coordinating the Seminar Keorganisasian (2024) and executing internal social media branding strategies (2025).
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
