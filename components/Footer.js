import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] md:text-xs font-mono text-slate-500">
        {/* Left */}
        <div className="font-sans font-bold text-[var(--foreground)] transition-colors duration-300">
          fizi<span className="text-[var(--accent)]">.</span>
        </div>

        {/* Center */}
        <div className="text-center select-text">
          © {new Date().getFullYear()} ENCRYPTED_CORE. ALL RIGHTS RESERVED.
        </div>

        {/* Right */}
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-[var(--accent)] transition-colors cursor-pointer">
            ENCRYPTION POLICY
          </a>
          <a href="#" className="hover:text-[var(--accent)] transition-colors cursor-pointer">
            PGP KEYS
          </a>
        </div>
      </div>
    </footer>
  );
}
