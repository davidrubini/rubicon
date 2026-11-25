"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Phone, Mail } from "lucide-react";

export function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile drawer on route change
  useEffect(() => {
    setIsDrawerOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  const navLinks = [
    { href: "/services", label: "Services & Methodology" },
    { href: "/insights", label: "Points of View" },
    { href: "/about", label: "About Dave" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 h-16 w-full bg-white/95 backdrop-blur-md border-b border-surface-border">
      <div className="max-w-6xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand Wordmark */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-ruby rounded-md py-1"
          aria-label="Rubicon Leap Advisory Home"
        >
          <div className="w-8 h-8 rounded-lg bg-obsidian flex items-center justify-center text-white font-extrabold text-sm tracking-tight border border-obsidian-light shadow-2xs group-hover:bg-obsidian-light transition-colors">
            R<span className="text-ruby font-black text-xs">²</span>
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-black tracking-tight text-obsidian flex items-center gap-1.5 leading-tight">
              RUBICON LEAP
            </span>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-ruby inline-block"></span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase leading-none">
                ADVISORY
              </span>
            </div>
          </div>
        </Link>

        {/* Center: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                  active
                    ? "text-ruby bg-ruby-light font-bold"
                    : "text-slate-600 hover:text-obsidian hover:bg-slate-100/70"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-2.5">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-ruby hover:bg-ruby-hover text-white text-sm font-semibold rounded-md shadow-2xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ruby-border cursor-pointer min-h-[44px]"
          >
            <span>Let&apos;s Talk</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          {/* Mobile Drawer Trigger (Minimum 44x44px touch target) */}
          <button
            type="button"
            onClick={() => setIsDrawerOpen(true)}
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-md border border-slate-200 text-obsidian hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ruby cursor-pointer"
            aria-label="Open navigation menu"
            aria-expanded={isDrawerOpen}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 md:hidden animate-in fade-in duration-200">
          <div
            className="fixed inset-0 bg-obsidian/60 backdrop-blur-xs"
            onClick={() => setIsDrawerOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Slide-out Container */}
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-white shadow-2xl flex flex-col z-50 animate-in slide-in-from-right duration-200">
            {/* Drawer Header */}
            <div className="h-16 px-5 border-b border-surface-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded bg-obsidian flex items-center justify-center text-white font-extrabold text-xs">
                  R<span className="text-ruby text-[10px]">²</span>
                </div>
                <span className="font-extrabold text-sm text-obsidian">RUBICON LEAP</span>
              </div>
              <button
                type="button"
                onClick={() => setIsDrawerOpen(false)}
                className="w-11 h-11 flex items-center justify-center rounded-md text-slate-500 hover:text-obsidian hover:bg-slate-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ruby cursor-pointer"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Links */}
            <nav className="p-5 space-y-1 flex-1 overflow-y-auto" aria-label="Mobile Navigation">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsDrawerOpen(false)}
                    className={`flex items-center justify-between px-3.5 py-3 rounded-lg text-base font-semibold min-h-[44px] transition-colors ${
                      active
                        ? "text-ruby bg-ruby-light font-bold"
                        : "text-slate-700 hover:text-obsidian hover:bg-slate-50"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-50" />
                  </Link>
                );
              })}

              <div className="pt-6 mt-6 border-t border-slate-100 space-y-3">
                <Link
                  href="/contact"
                  onClick={() => setIsDrawerOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-ruby hover:bg-ruby-hover text-white text-base font-semibold rounded-lg shadow-sm transition-colors min-h-[44px]"
                >
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="pt-4 text-xs text-slate-500 space-y-2">
                  <a
                    href="tel:4043865722"
                    className="flex items-center gap-2 text-slate-600 hover:text-ruby py-1 font-medium min-h-[44px]"
                  >
                    <Phone className="w-4 h-4 text-ruby shrink-0" />
                    <span>404-386-5722</span>
                  </a>
                  <a
                    href="mailto:drubini@gmail.com"
                    className="flex items-center gap-2 text-slate-600 hover:text-ruby py-1 font-medium min-h-[44px]"
                  >
                    <Mail className="w-4 h-4 text-ruby shrink-0" />
                    <span>drubini@gmail.com</span>
                  </a>
                </div>
              </div>
            </nav>

            {/* Drawer Footer Tagline */}
            <div className="p-5 border-t border-slate-100 bg-surface-subtle">
              <p className="text-[11px] text-slate-500 italic leading-relaxed">
                &ldquo;Strategy without execution is hallucination. Execution without strategy is chaos.&rdquo;
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
