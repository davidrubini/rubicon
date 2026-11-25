import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-obsidian text-slate-300 border-t border-obsidian-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Top Section: Brand Statement & Tagline */}
        <div className="border-b border-obsidian-light pb-10 mb-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-ruby flex items-center justify-center text-white font-extrabold text-sm tracking-tight border border-ruby-border">
                R<span className="font-black text-xs">²</span>
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                RUBICON LEAP <span className="text-slate-400 font-light">ADVISORY</span>
              </span>
            </div>
            <p className="text-xs uppercase tracking-widest text-ruby font-bold">
              Strategic Product Management & Fractional CPO Practice
            </p>
            <p className="text-base sm:text-lg text-slate-200 font-medium italic pt-2 max-w-xl leading-relaxed">
              &ldquo;Strategy without execution is hallucination. Execution without strategy is chaos.&rdquo;
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:justify-end gap-3 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-ruby hover:bg-ruby-hover text-white text-sm font-semibold rounded-lg shadow-sm transition-colors min-h-[44px]"
            >
              <span>Schedule 30-Min Diagnostic</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-sm">
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Practice</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services & Engagement Models
                </Link>
              </li>
              <li>
                <Link href="/services#methodology" className="hover:text-white transition-colors">
                  5-Pillar Methodology
                </Link>
              </li>
              <li>
                <Link href="/services#diagnostic" className="hover:text-white transition-colors">
                  2-Week Roadmap Diagnostic
                </Link>
              </li>
              <li>
                <Link href="/services#augmentation" className="hover:text-white transition-colors">
                  Specialist Network Scale
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Points of View</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/insights#ambient-commerce" className="hover:text-white transition-colors">
                  Ambient Commerce & Stream
                </Link>
              </li>
              <li>
                <Link href="/insights#physical-digital" className="hover:text-white transition-colors">
                  Physical-Digital Convergence
                </Link>
              </li>
              <li>
                <Link href="/insights#retail-media" className="hover:text-white transition-colors">
                  Multi-Sided Platform Scale
                </Link>
              </li>
              <li>
                <Link href="/insights#experimentation" className="hover:text-white transition-colors">
                  Selective Experimentation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Leadership</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Dave Rubini
                </Link>
              </li>
              <li>
                <Link href="/about#player-coach" className="hover:text-white transition-colors">
                  The Player-Coach Model
                </Link>
              </li>
              <li>
                <Link href="/about#experience" className="hover:text-white transition-colors">
                  Career Milestones
                </Link>
              </li>
              <li>
                <Link href="/about#credentials" className="hover:text-white transition-colors">
                  Tufts & Columbia Credentials
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Connect</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Booking
                </Link>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/daverubini/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://daverubini.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-white transition-colors"
                >
                  <span>Dave&apos;s Substack</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </li>
              <li>
                <a href="tel:4043865722" className="hover:text-white transition-colors">
                  Direct: 404-386-5722
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-obsidian-light text-xs text-slate-400 space-y-3">
          <p className="leading-relaxed">
            <strong className="text-slate-300">Legal Disclaimer:</strong> Rubicon Leap Advisory is a specialized
            product management and strategy consulting practice led by Dave Rubini.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
            <p>
              <strong className="text-slate-300">Footprint:</strong> Virtual-first & globally flexible — partnering
              remotely across client time zones.
            </p>
            <p>© 2026 Rubicon Leap Advisory. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
