"use client";

import { useEffect, useRef } from "react";
import styles from "./MatrixBg.module.css";

export default function MatrixBg() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;
    
    // Set size
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const charList = "01$#@%&*+=?<>{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const fontSize = 13;
    let columns = Math.floor(width / fontSize);
    let drops = Array(columns).fill(1);

    const draw = () => {
      const isLight = document.documentElement.classList.contains("light");
      
      // Semi-transparent color to create trailing effect (matching background hex)
      ctx.fillStyle = isLight ? "rgba(247, 249, 251, 0.08)" : "rgba(18, 20, 20, 0.05)";
      ctx.fillRect(0, 0, width, height);

      // Character color (Cyan accent themed)
      ctx.fillStyle = isLight ? "rgba(0, 103, 125, 0.2)" : "rgba(0, 240, 255, 0.25)";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = charList[Math.floor(Math.random() * charList.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Draw character
        ctx.fillText(char, x, y);

        // Reset drop to top if it reaches the bottom
        if (y > height && Math.random() > 0.98) {
          drops[i] = 0;
        }

        // Increment drop speed
        drops[i]++;
      }
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / fontSize);
      drops = Array(columns).fill(1);
    };

    window.addEventListener("resize", handleResize);

    // Run matrix rain loop at ~30 FPS
    const interval = setInterval(draw, 35);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={styles.canvas}
    />
  );
}
