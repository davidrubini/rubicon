import React from "react";
import Link from "next/link";
import { ArrowRight, Compass, ShieldCheck, Cpu, Users, Layers, Sparkles } from "lucide-react";
import { MetricGrid } from "@/components/MetricGrid";

export default function HomePage() {
  return (
    <div className="space-y-16 sm:space-y-24 py-8 sm:py-12">
      {/* 1. Hero Section (Above the Fold) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full space-y-6">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-ruby/30 bg-ruby-light/60 text-ruby text-xs font-black uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-ruby animate-pulse" />
            <span>Rubicon Leap Advisory | Strategic Product Management & Fractional CPO</span>
          </div>

          {/* Headline H1 */}
          <h1 className="text-[clamp(14px,3.85vw,45px)] font-black text-obsidian tracking-tight leading-[1.15]">
            <span className="block whitespace-nowrap">
              Strategy Without Execution Is Hallucination.
            </span>
            <span className="block whitespace-nowrap">
              Execution Without Strategy Is Chaos.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-xl text-slate-600 leading-relaxed max-w-3xl">
            I help growth-stage technology ventures and enterprise leaders bridge high-level product vision with
            hands-on sprint delivery. Combining User-Centered Design (UCD), AI-driven insights, and Agile discipline
            to align C-suites, engineering velocity, and measurable customer value.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-ruby hover:bg-ruby-hover text-white text-base font-bold rounded-lg shadow-md transition-all min-h-[44px]"
            >
              <span>Schedule a 30-Minute Roadmap Diagnostic</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/insights"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-surface-subtle hover:bg-slate-200/70 text-obsidian text-base font-bold rounded-lg border border-surface-border transition-colors min-h-[44px]"
            >
              <span>Explore Points of View on Digital Ecosystems</span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Proof Points: Metric Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <MetricGrid />
      </section>

      {/* 3. The Diagnosis: Why Product Initiatives Stall */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-surface-subtle border border-surface-border rounded-2xl p-6 sm:p-10 space-y-8">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-ruby">
              The Root Cause Analysis
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-obsidian tracking-tight mt-1">
              Why Product Initiatives Stall at the Complexity Ceiling
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="bg-white border border-surface-border rounded-xl p-5 shadow-2xs space-y-3">
              <div className="text-xs font-black uppercase tracking-wider text-ruby flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-ruby"></span>
                <span>1 Big Thing</span>
              </div>
              <h3 className="text-base font-bold text-obsidian">
                The Trap Between Pure Strategy & Pure Execution
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Most product organizations get trapped between two extremes: pure strategy that never ships, or pure
                execution that ships the wrong things. Strategy without execution produces elegant slide decks that
                gather dust. Execution without strategy produces &ldquo;feature factories&rdquo;—cross-functional teams burning through
                story points on time, but missing revenue, retention, and strategic differentiation.
              </p>
            </div>

            <div className="bg-white border border-surface-border rounded-xl p-5 shadow-2xs space-y-3">
              <div className="text-xs font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                <span>Why It Matters</span>
              </div>
              <h3 className="text-base font-bold text-obsidian">
                The Executive Bottleneck & Feature Factory Cycle
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                This disconnect creates the &ldquo;complexity ceiling.&rdquo; When every roadmap decision requires CEO
                sign-off, the executive suite becomes the bottleneck. Product teams lose customer empathy, backlogs
                become dumping grounds for internal opinions, and leadership wonders why massive R&amp;D investments
                aren&apos;t driving commercial growth.
              </p>
            </div>

            <div className="bg-white border-2 border-ruby/40 rounded-xl p-5 shadow-2xs space-y-3 bg-ruby-light/20">
              <div className="text-xs font-black uppercase tracking-wider text-ruby flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-ruby" />
                <span>The Fix</span>
              </div>
              <h3 className="text-base font-bold text-obsidian">
                A Decisive Operational Shift
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                A decisive shift: rigorous qualitative discovery upfront, disciplined hypothesis testing in the
                middle, and autonomous sprint execution at the finish line. I bridge your boardroom horizon with cross-functional team
                telemetry so product managers lead with verified conviction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Origin Story: The Rubicon Metaphor (49 BC) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-obsidian text-white border-2 border-ruby rounded-2xl p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-ruby/10 rounded-bl-full pointer-events-none" />

          <div className="max-w-3xl space-y-5 relative z-10">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-ruby-light bg-ruby/40 px-3 py-1 rounded-full border border-ruby">
              <Compass className="w-3.5 h-3.5" />
              <span>The Rubicon Metaphor (49 BC)</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              <em className="italic">&ldquo;Alea Iacta Est&rdquo;</em> — The Die Is Cast.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              In 49 BC, Julius Caesar marched his 13th Legion to the banks of the Rubicon—a shallow stream separating
              Cisalpine Gaul from Roman Italy. Crossing the river was an irreversible act of defiance and commitment:
              <em>&ldquo;The die is cast.&rdquo;</em> There was no turning back, no incremental hedging, and no
              retreat.
            </p>

            <div className="pt-4 border-t border-slate-700/80">
              <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                The Product Parallel for Technology Leaders
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                For modern technology leadership, crossing your Rubicon means making an uncompromising commitment to
                strategic clarity. It means stepping off the riverbank of indecision, eliminating low-impact backlog
                clutter, and taking decisive action to transform your product organization into an autonomous,
                outcome-driven growth engine.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 bg-ruby hover:bg-ruby-hover text-white text-sm font-bold rounded-lg shadow-sm transition-colors min-h-[44px]"
              >
                <span>Are You Ready to Take the Leap?</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. The Operating Model: Solo Principal + Vetted Specialist Network */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-widest text-ruby">
              The Operating Model
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-obsidian tracking-tight mt-1">
              Embedded Player-Coach + On-Demand Specialist Scale
            </h2>
            <p className="text-base text-slate-600 mt-2 leading-relaxed">
              How I deliver single-point executive accountability while giving you the full-stack firepower of a
              specialized cross-functional team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left: The Player-Coach Principal */}
            <div className="bg-white border-2 border-surface-border rounded-xl p-6 sm:p-8 space-y-4 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-ruby-light text-ruby flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-obsidian">
                Dedicated Player-Coach Leadership
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Traditional big-firm consultancies drop generic frameworks and leave implementation to overwhelmed
                client teams. Freelance contractors execute tickets in isolation without understanding your business
                model or investor milestones.
              </p>
              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                I operate as an embedded Player-Coach. You get my personal, dedicated focus at both the leadership
                table and the cross-functional team level. I partner directly with your founders, executives, engineers, and designers
                to answer the two most vital questions in software: <em>what to build, and why.</em>
              </p>
            </div>

            {/* Right: The On-Demand Specialist Network */}
            <div className="bg-surface-subtle border-2 border-surface-border rounded-xl p-6 sm:p-8 space-y-4 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-obsidian text-white flex items-center justify-center font-bold">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-obsidian">
                Selective Partner Network for Full-Stack Scale
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                While I lead strategy, discovery, and product execution directly, complex initiatives sometimes
                require specialized firepower. Rather than forcing you into an expensive agency contract, I tap into
                my vetted network of proven senior specialists:
              </p>
              <ul className="text-xs sm:text-sm text-slate-700 space-y-2 pt-1">
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-ruby shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-obsidian">High-Fidelity Visual &amp; Brand Designers:</strong> Customer-facing
                    polish, design systems, and mobile UI excellence.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Cpu className="w-4 h-4 text-ruby shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-obsidian">Enterprise Technical Architects:</strong> Cloud scalability,
                    data modeling, and API governance.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-ruby shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-obsidian">Specialized Engineers:</strong> Deep integrations and modern AI
                    workflow telemetry pipelines.
                  </span>
                </li>
              </ul>
              <p className="text-xs text-slate-500 italic pt-2 border-t border-slate-200">
                You get an agile, high-caliber cross-functional team assembled specifically for your challenge—with
                single-point leadership accountability from me.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Bottom Call to Action */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-surface-subtle border border-surface-border rounded-2xl p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-black text-obsidian tracking-tight">
            Stop Standing on the Riverbank. Take the Leap.
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Whether you need an embedded Fractional CPO to unblock your cross-functional team velocity, an advisory retainer to
            stress-test your product bets, or a 1-Week Roadmap Diagnostic, let&apos;s connect.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-ruby hover:bg-ruby-hover text-white text-base font-bold rounded-lg shadow-md transition-colors min-h-[44px]"
            >
              <span>Schedule a 30-Minute Roadmap Diagnostic</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
