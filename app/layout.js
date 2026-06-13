import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MatrixBg from "@/components/MatrixBg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hafizh Portofolio",
  description: "Portfolio of Muhammad Hafizh - CyberSecurity & Network Engineer, System admin, and Security Enthusiast.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark h-full antialiased scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans min-h-screen flex flex-col justify-between overflow-x-hidden selection:bg-[var(--accent)]/20 selection:text-[var(--foreground)]`}>
        <MatrixBg />
        <Header />
        <main className="flex-1 flex flex-col justify-center items-center w-full z-10 relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
