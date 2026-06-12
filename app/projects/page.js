"use client";

import Image from "next/image";
import { ExternalLink, Shield, Cpu, Code, Terminal, Layers, Globe, ArrowUpRight, FileText } from "lucide-react";
import GithubActivity from "@/components/GithubActivity";

export default function Projects() {
  const projectsList = [
    // {
    //   id: "PROJ_01",
    //   title: "Warnet Medan Empire: 3-Tier Network Architecture",
    //   category: "Network Security",
    //   desc: "Designed and simulated a secure hierarchical 3-Tier topology in Cisco Packet Tracer. Features 5 LAN subnets, inter-VLAN trunking via HWIC-4ESW, NAT overload, stateless IPv6 address allocation, OSPF, and strict ACL-based SSH terminal protection. Laporan Akhir available.",
    //   tags: ["Cisco Packet Tracer", "OSPF Routing", "IPv6 SLAAC", "SSH ACLs", "NAT Overload"],
    //   icon: Shield,
    //   isLarge: true,
    //   image: "/network.png",
    //   link: "/laporan-warnet.pdf",
    // },
    {
      id: "PROJ_02",
      title: "RasaNusantara Recipe Discovery Platform",
      category: "Web Application",
      desc: "Developed a cultural recipe explorer and discovery platform utilizing TypeScript. Designed clean interactive views for navigating and searching regional dishes.",
      tags: ["TypeScript", "Next.js", "React", "Tailwind CSS"],
      icon: Globe,
      isLarge: false,
      link: "https://github.com/OoguroRYuya/RasaNusantara",
    },
    {
      id: "PROJ_03",
      title: "Infiltra-VR Soil Infiltration Simulation",
      category: "Unity / VR",
      desc: "Developed an immersive Virtual Reality environment in Unity 3D to visualize underground water absorption rates through distinct soil profiles.",
      tags: ["Unity 3D", "C# Scripts", "VR Dev", "SDG 13"],
      icon: Layers,
      isLarge: false,
      link: "https://github.com/luthfiarsd/Infiltra-VR",
    },
    {
      id: "PROJ_04",
      title: "Datware_Tunas Analytics Engine",
      category: "Data Processing",
      desc: "Created a Python-based utility engine for parsing, processing, and aggregating hierarchical organizational database records.",
      tags: ["Python", "Data Analysis", "CLI Tool", "JSON Parsing"],
      icon: Cpu,
      isLarge: false,
      link: "https://github.com/OoguroRYuya/Datware_Tunas",
    },
    {
      id: "PROJ_05",
      title: "LangkahLegal Portal",
      category: "Web Application",
      desc: "A collaborative platform providing simplified legal guidance, document auditing tools, and interactive walkthroughs for licensing procedures. Deployed at: langkahlegal.vercel.app",
      tags: ["JavaScript", "React", "Node.js", "LegalTech"],
      icon: Code,
      isLarge: false,
      link: "https://github.com/LangkahLegal/LangkahLegal",
    },
    {
      id: "PROJ_06",
      title: "Color Picker Utility",
      category: "Desktop App",
      desc: "A desktop color picker built with Python and Tkinter, featuring custom hexadecimal, RGB, and HSL conversions, palette generation, and clipboard history.",
      tags: ["Python", "Tkinter", "GUI", "Desktop Tool"],
      icon: Terminal,
      isLarge: false,
      link: "https://github.com/OoguroRYuya/ColorPicker",
    },
    {
      id: "PROJ_07",
      title: "230006-Kripto25 Cryptography Shell",
      category: "Cryptography",
      desc: "Developed custom implementations of symmetric/asymmetric cryptographic ciphers, hashing protocols, and key exchanges to audit security parameters.",
      tags: ["Python", "Ciphers", "Hashing", "CTF"],
      icon: Shield,
      isLarge: false,
      link: "https://github.com/OoguroRYuya/230006-Kripto25",
    },
    {
      id: "PROJ_08",
      title: "Neuro AI Platform",
      category: "Artificial Intelligence",
      desc: "Collaborative AI research platform designed for running, tuning, and monitoring neuro-symbolic reasoning models and neural networks.",
      tags: ["Python", "PyTorch", "Neural Networks", "Reasoning Models"],
      icon: Cpu,
      isLarge: false,
      link: "https://github.com/neuroAIPIPP/NeuroAI",
    },
    {
      id: "PROJ_09",
      title: "KaryaKita Showcase Platform",
      category: "Web Application",
      desc: "Digital portfolio and creative showcase platform allowing local creators, artists, and developers to display work and manage commissions.",
      tags: ["React", "Express.js", "MongoDB", "Creative Showcase"],
      icon: Globe,
      isLarge: false,
      link: "https://github.com/OoguroRYuya/Karya-Kita",
    },
    {
      id: "PROJ_10",
      title: "Weather Prediction Machine Learning Model",
      category: "Machine Learning",
      desc: "Constructed a weather prediction and forecasting machine learning model using Python. Cleaned historical climate records, analyzed correlation matrices, and trained classification and regression models.",
      tags: ["Python", "Scikit-Learn", "Pandas", "Forecasting"],
      icon: Cpu,
      isLarge: true,
      accuracy: "91.2%",
      link: "https://github.com/Skywalks567/WeatherPrediction",
    },
    {
      id: "PROJ_11",
      title: "Ikeh Furniture E-Commerce Platform",
      category: "Web Application",
      desc: "E-commerce platform prototype for furniture cataloguing, cart management, and order checkout tracking, built with PHP/Laravel.",
      tags: ["PHP", "Laravel", "MySQL", "Bootstrap"],
      icon: Layers,
      isLarge: false,
      link: "https://github.com/OoguroRYuya/Kelompok-3-Ikeh-Furniture",
    },
    // {
    //   id: "PROJ_12",
    //   title: "Coworking Space Network Infrastructure",
    //   category: "Network Management",
    //   desc: "Designed and simulated a high-availability infrastructure layout using Cisco Packet Tracer, optimizing dynamic bandwidth allocation and isolated tenant WiFi access zones.",
    //   tags: ["Cisco Packet Tracer", "VLANs", "WLAN Security", "Bandwidth Management"],
    //   icon: Shield,
    //   isLarge: false,
    //   link: "https://github.com/OoguroRYuya",
    // },
    // {
    //   id: "PROJ_13",
    //   title: "Advanced Campus Network Implementation",
    //   category: "Network Security",
    //   desc: "Developed a secure hierarchical campus network topology featuring inter-department VLAN routing, dynamic DHCP scopes, and custom firewall ACL rules.",
    //   tags: ["Cisco Packet Tracer", "DHCP Pools", "Inter-VLAN", "Firewall ACLs"],
    //   icon: Layers,
    //   isLarge: false,
    //   link: "https://github.com/OoguroRYuya",
    // },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-6 md:px-12 py-10 space-y-8 font-mono text-[var(--foreground)] transition-colors duration-300">

      {/* Page Title & Status */}
      <div className="space-y-1 text-center md:text-left select-none">
        <h1 className="text-2xl md:text-3xl font-black text-[var(--foreground)] tracking-wide uppercase flex items-center justify-center md:justify-start gap-2">
          <span>PROJECTS_BENTO</span>
          <span className="text-xs font-mono font-medium px-2 py-0.5 rounded bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20">
            SYSTEM_ACTIVE
          </span>
        </h1>
        <p className="text-xs text-slate-500">&gt; mapping bento grids database manifest...</p>

        {/* Document Downloads Section */}
        <div className="flex flex-wrap gap-3 pt-4 justify-center md:justify-start">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg border border-[var(--accent)]/30 bg-[var(--accent)]/5 hover:bg-[var(--accent)]/15 text-[var(--accent)] font-bold text-[10px] tracking-wider transition-all flex items-center gap-1.5"
          >
            <FileText size={12} />
            <span>DOWNLOAD_CV_RESUME.PDF</span>
          </a>
          <a
            href="/laporan-warnet.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/5 hover:bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-bold text-[10px] tracking-wider transition-all flex items-center gap-1.5"
          >
            <FileText size={12} />
            <span>MEDAN_EMPIRE_REPORT.PDF</span>
          </a>
        </div>
      </div>

      {/* Bento Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
        {projectsList.map((project) => {
          const Icon = project.icon;
          return (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 rounded-2xl theme-card border border-[var(--border-color)] hover:border-[var(--accent)]/50 hover:shadow-[0_10px_35px_var(--accent-glow)] transition-all duration-300 flex flex-col justify-between group overflow-hidden relative decoration-none ${project.isLarge ? "md:col-span-2 md:row-span-1" : "col-span-1"
                }`}
            >
              {/* Soft background glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--accent)]/0 rounded-full blur-3xl group-hover:bg-[var(--accent)]/5 transition-all pointer-events-none"></div>

              <div className="space-y-4">
                {/* Card Top: ID & Category */}
                <div className="flex items-center justify-between text-[10px] text-slate-500">
                  <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[var(--accent)]">
                    <Icon size={12} />
                    <span>{project.category}</span>
                  </div>
                  <span>{project.id}</span>
                </div>

                {/* Card Title & Link */}
                <h3 className="text-sm md:text-base font-bold text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors flex items-center gap-1.5">
                  <span>{project.title}</span>
                  <ExternalLink size={13} className="text-slate-500 group-hover:text-[var(--accent)] transition-colors" />
                </h3>

                {/* Large Project Specific Section: Image Row */}
                {project.isLarge && project.image && (
                  <div className="relative w-full h-40 rounded-xl overflow-hidden border border-[var(--border-color)] bg-black my-2">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                  </div>
                )}

                {/* Description */}
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl select-text">
                  {project.desc}
                </p>

                {/* Accuracy specific indicator for Machine learning */}
                {project.accuracy && (
                  <div className="p-3 rounded-lg bg-[var(--terminal-bg)]/80 border border-[var(--border-color)] space-y-1.5 my-2">
                    <div className="flex items-center justify-between text-[9px] font-mono text-slate-500">
                      <span>CLASSIFICATION ACCURACY</span>
                      <span className="text-[var(--accent)] font-bold">{project.accuracy}</span>
                    </div>
                    <div className="w-full bg-[var(--background)] h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[var(--accent)] h-full w-[91.2%] rounded-full shadow-[0_0_8px_var(--accent-glow)]"></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 mt-auto">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[9px] px-2 py-0.5 rounded bg-[var(--terminal-bg)] text-slate-500 border border-[var(--border-color)] group-hover:border-[var(--accent)]/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          );
        })}
      </div>

      {/* GitHub Contributions & Activity Monitor */}
      <div className="border-t border-[var(--border-color)] pt-10">
        <GithubActivity />
      </div>

    </div>
  );
}
