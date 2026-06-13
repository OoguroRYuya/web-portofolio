"use client";

import { useState } from "react";
import { Send, CheckCircle2, ShieldAlert, Mail } from "lucide-react";

// Custom SVG Icons for GitHub and LinkedIn to avoid missing brand icons in standard Lucide package
const GithubIcon = ({ size = 16, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 16, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: null, message: "" });
  const [logs, setLogs] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const executeTransmission = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Error: Mandatory security fields missing." });
      return;
    }

    setLoading(true);
    setStatus({ type: null, message: "" });
    setLogs([]);

    // Simulated terminal encryption & dispatch sequence
    const logSteps = [
      "Initializing secure handshakes...",
      "Generating ephemeral Diffie-Hellman encryption keys...",
      "Encrypting payload content with AES-GCM-256...",
      "Establishing connection tunnel to operator gateway...",
      "Routing packet blocks through local proxies...",
      "Transmission payload successfully dispatched!",
    ];

    for (let i = 0; i < logSteps.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 350));
      setLogs((prev) => [...prev, `[LOG_${i + 1}] ${logSteps[i]}`]);
    }

    setLoading(false);
    setStatus({ type: "success", message: "Secure packet sent successfully!" });

    // Open local email client pre-filled with the message details
    const mailtoUrl = `mailto:mhafizfenaldhie2904@gmail.com?subject=${encodeURIComponent(formData.subject || "Connection Request")}&body=${encodeURIComponent(`Sender Name: ${formData.name}\nSender Email: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoUrl;

    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-hafizh-fenaldi/?locale=en", icon: LinkedinIcon, desc: "Professional network updates & experience log." },
    { name: "GitHub", href: "https://github.com/OoguroRYuya", icon: GithubIcon, desc: "Source codes repositories & audit logs." },
    { name: "Email Address", href: "mailto:mhafizfenaldhie2904@gmail.com", icon: Mail, desc: "Direct operator connection channel." },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-6 md:px-12 py-12 space-y-10 text-[var(--foreground)] transition-colors duration-300">

      {/* Title */}
      <div className="space-y-1 text-center md:text-left select-none">
        <h1 className="text-2xl md:text-3xl font-black text-[var(--foreground)] tracking-wide uppercase font-mono flex items-center justify-center md:justify-start gap-2">
          <span>CONNECT_PORT</span>
          <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20">
            PORT_443
          </span>
        </h1>
        <p className="text-xs font-mono text-slate-500">&gt; opening email transmission port...</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 font-mono">

        {/* Contact Form: 3 cols on desktop */}
        <div className="md:col-span-3 space-y-4">
          <form onSubmit={executeTransmission} className="space-y-4 p-5 md:p-6 rounded-lg theme-card border border-[var(--border-color)]">

            {/* Status alerts */}
            {status.message && (
              <div
                className={`p-3 rounded-lg text-xs flex items-center gap-2 border ${status.type === "success"
                  ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
                  : "bg-rose-500/10 border-rose-500/30 text-rose-600 dark:text-rose-400"
                  }`}
              >
                {status.type === "success" ? <CheckCircle2 size={14} /> : <ShieldAlert size={14} />}
                <span>{status.message}</span>
              </div>
            )}

            {/* Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-[10px] text-slate-500 uppercase select-none">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={loading}
                  className="px-3 py-2 text-xs rounded bg-[var(--background)] border border-[var(--border-color)] focus:border-[var(--accent)]/30 focus:outline-none text-[var(--foreground)] transition-colors"
                  placeholder="Enter name"
                  autoComplete="off"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[10px] text-slate-500 uppercase select-none">Your Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={loading}
                  className="px-3 py-2 text-xs rounded bg-[var(--background)] border border-[var(--border-color)] focus:border-[var(--accent)]/30 focus:outline-none text-[var(--foreground)] transition-colors"
                  placeholder="Enter your email"
                  autoComplete="off"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[10px] text-slate-500 uppercase select-none">Subject Topic</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                disabled={loading}
                className="px-3 py-2 text-xs rounded bg-[var(--background)] border border-[var(--border-color)] focus:border-[var(--accent)]/30 focus:outline-none text-[var(--foreground)] transition-colors"
                placeholder="Topic subject"
                autoComplete="off"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[10px] text-slate-500 uppercase select-none">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                disabled={loading}
                rows={4}
                className="px-3 py-2 text-xs rounded bg-[var(--background)] border border-[var(--border-color)] focus:border-[var(--accent)]/30 focus:outline-none text-[var(--foreground)] resize-none transition-colors"
                placeholder="Write your message..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded bg-[var(--accent)] hover:opacity-90 text-white dark:text-slate-950 font-bold text-xs transition-all cursor-pointer disabled:opacity-50"
            >
              <Send size={12} />
              <span>DISPATCH ENCRYPTED PACKET</span>
            </button>
          </form>

          {/* Secure logs output stream */}
          {(logs.length > 0 || loading) && (
            <div className="p-4 rounded-lg bg-[var(--terminal-bg)] border border-[var(--border-color)] text-[10px] space-y-1 text-[var(--terminal-text)] leading-normal max-h-40 overflow-y-auto transition-colors duration-300">
              {logs.map((log, idx) => (
                <div key={idx} className="animate-fade-in">{log}</div>
              ))}
              {loading && <div className="text-slate-500 animate-pulse">&gt; transmitting data streams...</div>}
            </div>
          )}

        </div>

        {/* Sidebar details: 2 cols on desktop */}
        <div className="md:col-span-2 space-y-4">
          <div className="p-5 rounded-lg theme-card border border-[var(--border-color)] space-y-4">
            <h3 className="text-xs font-bold text-[var(--foreground)] uppercase tracking-widest select-none">
              // ALTERNATE_PORTALS
            </h3>

            <div className="space-y-4 text-xs">
              {socialLinks.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group space-y-1 p-2 rounded hover:bg-[var(--background)]/50 border border-transparent hover:border-[var(--border-color)] transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-2 font-bold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                      <Icon size={13} className="text-[var(--accent)]" />
                      <span>{link.name}</span>
                    </div>
                    <p className="text-[10px] text-slate-500 group-hover:text-slate-400 transition-colors">
                      {link.desc}
                    </p>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
