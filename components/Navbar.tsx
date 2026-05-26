"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-zinc-950/70 border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          Task<span className="text-indigo-600">Flow</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="hover:text-indigo-600">Features</a>
          <a href="#pricing" className="hover:text-indigo-600">Pricing</a>
          <a href="#faq" className="hover:text-indigo-600">FAQ</a>
          <a href="#contact" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}