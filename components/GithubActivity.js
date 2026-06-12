"use client";

import React, { useState, useEffect, useMemo } from "react";
import { GitCommit, GitBranch, Terminal, ExternalLink } from "lucide-react";
import localData from "../public/github-contributions.json";

// Map contribution level strings to numeric values (0-4)
const getLevelFromLevelStr = (levelStr) => {
  switch (levelStr) {
    case "NONE": return 0;
    case "FIRST_QUARTILE": return 1;
    case "SECOND_QUARTILE": return 2;
    case "THIRD_QUARTILE": return 3;
    case "FOURTH_QUARTILE": return 4;
    default: return 0;
  }
};

// Compute month labels based on the Wednesday of each week column
const getMonthLabelsForRolling = (columns) => {
  if (!columns || columns.length === 0) return [];
  const labels = [];
  let lastMonth = -1;
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
  columns.forEach((col, colIdx) => {
    // Check Wednesday (index 3) of this week column
    const midWeekDay = col[3];
    if (!midWeekDay) return;
    const date = new Date(midWeekDay.date);
    const month = date.getMonth();
    
    if (month !== lastMonth) {
      labels.push({ name: monthNames[month], col: colIdx });
      lastMonth = month;
    }
  });
  return labels;
};

const getTooltipText = (dateStr, count) => {
  const date = new Date(dateStr);
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const formattedDate = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  
  if (count === 0) return `No contributions on ${formattedDate}`;
  return `${count} contribution${count > 1 ? "s" : ""} on ${formattedDate}`;
};

export default function GithubActivity() {
  const [hoveredCell, setHoveredCell] = useState(null);
  const [data, setData] = useState(localData);

  useEffect(() => {
    // Fetch fresh live data from the GitHub scraper API
    fetch("https://github-contributions-api.deno.dev/OoguroRYuya.json")
      .then((res) => {
        if (!res.ok) throw new Error("HTTP error " + res.status);
        return res.json();
      })
      .then((json) => {
        if (json && json.contributions && json.contributions.length > 0) {
          setData(json);
        }
      })
      .catch((err) => {
        console.warn("Failed to fetch live GitHub contributions, using local data fallback:", err);
      });
  }, []);

  const totalContributions = data.totalContributions || 95;
  const grid = data.contributions || [];

  // Generate dynamic month labels based on the loaded calendar data
  const monthLabels = useMemo(() => {
    return getMonthLabelsForRolling(grid);
  }, [grid]);

  const weekdays = ["", "Mon", "", "Wed", "", "Fri", ""];

  // Exclude unpad and asprak from activity stats
  const commitsList = [
    { repo: "OoguroRYuya/RasaNusantara", count: 7, relative: 100 },
    { repo: "OoguroRYuya/web-portofolio", count: 4, relative: 57 },
    { repo: "OoguroRYuya/Datware_Tunas", count: 2, relative: 28 },
    { repo: "luthfiarsd/Infiltra-VR", count: 2, relative: 28 },
    { repo: "LangkahLegal/LangkahLegal", count: 1, relative: 14 },
  ];

  const reposCreated = [
    { repo: "OoguroRYuya/web-portofolio", date: "Jun 11" },
    { repo: "OoguroRYuya/RasaNusantara", date: "May 22", lang: "TypeScript", langColor: "bg-blue-500" },
    { repo: "OoguroRYuya/Datware_Tunas", date: "Jun 2", lang: "Python", langColor: "bg-blue-500" },
  ];

  return (
    <div className="w-full space-y-8">
      
      {/* Section Header */}
      <div className="space-y-1 text-center md:text-left select-none">
        <h2 className="text-xl md:text-2xl font-black text-[var(--foreground)] tracking-wide uppercase flex items-center justify-center md:justify-start gap-2">
          <span>02. GITHUB_MONITOR</span>
          <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            {totalContributions}_CONTRIBUTIONS
          </span>
        </h2>
        <p className="text-xs text-slate-500">&gt; querying activity logs from node server...</p>
      </div>

      {/* Bento Grid layout for Github items */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Calendar Card (Spans 2 cols on desktop) */}
        <div className="lg:col-span-2 p-5 md:p-6 rounded-2xl theme-card border border-[var(--border-color)] flex flex-col justify-between space-y-4 overflow-hidden relative">
          
          <div className="flex items-center justify-between select-none">
            <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase flex items-center gap-1.5">
              <Terminal size={12} className="text-[var(--accent)]" />
              <span>Contribution Calendar (Last Year)</span>
            </span>
            <a 
              href="https://github.com/OoguroRYuya" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[10px] font-bold text-[var(--accent)] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>PROFILE_LINK</span>
              <ExternalLink size={10} />
            </a>
          </div>

          <div className="text-xs md:text-sm font-semibold select-text text-slate-700 dark:text-slate-300">
            {totalContributions} contributions in the last year
          </div>

          {/* Grid Wrapper with hidden horizontal scrollbar */}
          <div className="w-full overflow-x-auto no-scrollbar py-2">
            <div className="min-w-[650px] relative font-mono text-[9px]">
              
              {/* Months labels row */}
              <div className="flex pl-8 mb-1.5 select-none text-slate-400 dark:text-slate-600">
                {Array.from({ length: 53 }).map((_, colIdx) => {
                  const month = monthLabels.find((m) => m.col === colIdx);
                  return (
                    <div 
                      key={colIdx} 
                      className="w-[10px] mr-[3px] shrink-0 text-left"
                      style={{ visibility: month ? "visible" : "hidden" }}
                    >
                      {month ? month.name : ""}
                    </div>
                  );
                })}
              </div>

              {/* Calendar Grid + Weekdays Labels */}
              <div className="flex">
                {/* Weekdays column labels */}
                <div className="w-8 shrink-0 flex flex-col select-none text-slate-400 dark:text-slate-600">
                  {weekdays.map((day, rowIdx) => (
                    <div key={rowIdx} className="h-[10px] mb-[3px] flex items-center justify-start">
                      {day}
                    </div>
                  ))}
                </div>

                {/* Contribution Cells */}
                <div className="flex">
                  {grid.map((colCells, colIdx) => (
                    <div key={colIdx} className="flex flex-col mr-[3px] shrink-0">
                      {colCells.map((cell, rowIdx) => {
                        const level = getLevelFromLevelStr(cell.contributionLevel);
                        
                        // Theme-responsive color classes based on level
                        const colorClasses = [
                          "bg-slate-200/60 dark:bg-slate-900 border-transparent", // level 0 (empty)
                          "bg-emerald-200 dark:bg-emerald-950 border-transparent", // level 1
                          "bg-emerald-400 dark:bg-emerald-800 border-transparent", // level 2
                          "bg-emerald-600 dark:bg-emerald-600 border-transparent", // level 3
                          "bg-emerald-800 dark:bg-emerald-400 border-transparent", // level 4
                        ];

                        return (
                          <div
                            key={rowIdx}
                            onMouseEnter={() => setHoveredCell({ col: colIdx, row: rowIdx, date: cell.date, count: cell.contributionCount, level })}
                            onMouseLeave={() => setHoveredCell(null)}
                            className={`w-[10px] h-[10px] mb-[3px] rounded-[1.5px] border cursor-crosshair transition-all duration-100 hover:scale-115 hover:shadow-[0_0_6px_rgba(16,185,129,0.5)] ${
                              colorClasses[level]
                            }`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Tooltip bubble */}
              {hoveredCell && (
                <div 
                  className="absolute z-50 px-2 py-1 rounded bg-slate-950 border border-emerald-500/30 text-[9px] text-emerald-400 font-bold shadow-lg pointer-events-none -translate-x-1/2 -translate-y-full"
                  style={{
                    left: `${Math.max(40, hoveredCell.col * 13 + 36)}px`,
                    top: `${hoveredCell.row * 13 + 15}px`,
                  }}
                >
                  {getTooltipText(hoveredCell.date, hoveredCell.count)}
                </div>
              )}

            </div>
          </div>

          {/* Calendar Footer / Legend */}
          <div className="flex items-center justify-between text-[10px] text-slate-500 select-none pt-2 border-t border-[var(--border-color)]">
            <a 
              href="https://github.com/OoguroRYuya"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--accent)] transition-colors"
            >
              Learn how we count contributions
            </a>
            
            {/* Legend indicators */}
            <div className="flex items-center gap-1.5">
              <span>Less</span>
              <div className="w-[10px] h-[10px] rounded-[1.5px] bg-slate-200/60 dark:bg-slate-900" />
              <div className="w-[10px] h-[10px] rounded-[1.5px] bg-emerald-200 dark:bg-emerald-950" />
              <div className="w-[10px] h-[10px] rounded-[1.5px] bg-emerald-400 dark:bg-emerald-800" />
              <div className="w-[10px] h-[10px] rounded-[1.5px] bg-emerald-600 dark:bg-emerald-600" />
              <div className="w-[10px] h-[10px] rounded-[1.5px] bg-emerald-800 dark:bg-emerald-400" />
              <span>More</span>
            </div>
          </div>

        </div>

        {/* Activity feed sidebar (1 col) */}
        <div className="p-5 md:p-6 rounded-2xl theme-card border border-[var(--border-color)] flex flex-col justify-between space-y-4 font-mono transition-all duration-300">
          
          <div className="space-y-4">
            <div className="text-[10px] font-bold tracking-wider text-slate-500 uppercase select-none flex items-center gap-1.5">
              <Terminal size={12} className="text-[var(--accent)]" />
              <span>Contribution Activity</span>
            </div>

            <div className="space-y-4">
              
              {/* Commits Section */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[11px] font-bold text-[var(--foreground)] select-none">
                  <GitCommit size={14} className="text-emerald-500 shrink-0" />
                  <span>Created commits in {commitsList.length} repos</span>
                </div>
                
                {/* Repos relative contribution list */}
                <div className="space-y-2 pl-6">
                  {commitsList.map((item, idx) => (
                    <div key={idx} className="space-y-1 select-text">
                      <div className="flex items-center justify-between text-[10px]">
                        <a
                          href={`https://github.com/${item.repo}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-slate-600 dark:text-slate-400 hover:text-[var(--accent)] hover:underline truncate mr-2 cursor-pointer"
                        >
                          {item.repo}
                        </a>
                        <span className="text-slate-500 shrink-0">{item.count} commits</span>
                      </div>
                      {/* Bar indicator */}
                      <div className="w-full bg-slate-200/50 dark:bg-slate-900 h-1 rounded-full overflow-hidden select-none">
                        <div 
                          className="bg-emerald-500 h-full rounded-full"
                          style={{ width: `${item.relative}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Repos created Section */}
              <div className="space-y-2 border-t border-[var(--border-color)] pt-3 select-none">
                <div className="flex items-center gap-2 text-[11px] font-bold text-[var(--foreground)]">
                  <GitBranch size={14} className="text-emerald-500 shrink-0" />
                  <span>Created {reposCreated.length} repositories</span>
                </div>

                <div className="space-y-2 pl-6 select-text">
                  {reposCreated.map((repo, idx) => (
                    <div key={idx} className="flex items-center justify-between text-[10px]">
                      <div className="flex items-center gap-2 truncate">
                        <a
                          href={`https://github.com/${repo.repo}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-slate-600 dark:text-slate-400 hover:text-[var(--accent)] hover:underline truncate cursor-pointer"
                        >
                          {repo.repo}
                        </a>
                        {repo.lang && (
                          <div className="flex items-center gap-1 shrink-0 select-none">
                            <div className={`w-2 h-2 rounded-full ${repo.langColor}`} />
                            <span className="text-slate-500 text-[9px]">{repo.lang}</span>
                          </div>
                        )}
                      </div>
                      <span className="text-slate-500 pl-2 shrink-0">{repo.date}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          <div className="text-[10px] text-slate-500 border-t border-[var(--border-color)] pt-3 select-none">
            June 2026 logs stream
          </div>

        </div>

      </div>

    </div>
  );
}
