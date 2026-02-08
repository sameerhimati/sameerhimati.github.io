"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-cream/80 backdrop-blur-sm border-b border-cream-dark/50">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold text-ink hover:text-accent transition-colors">
          sameer himati
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#projects" className="text-ink-light hover:text-ink transition-colors text-sm">
            Projects
          </Link>
          <Link href="/blog" className="text-ink-light hover:text-ink transition-colors text-sm">
            Blog
          </Link>
          <Link href="/#about" className="text-ink-light hover:text-ink transition-colors text-sm">
            About
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-ink-light hover:text-ink"
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-cream border-b border-cream-dark/50 px-6 pb-4">
          <div className="flex flex-col gap-3">
            <Link
              href="/#projects"
              className="text-ink-light hover:text-ink transition-colors text-sm"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/blog"
              className="text-ink-light hover:text-ink transition-colors text-sm"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/#about"
              className="text-ink-light hover:text-ink transition-colors text-sm"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
