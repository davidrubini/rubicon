import React from "react";
import {
  Compass,
  Bot,
  Building,
  DollarSign,
  FlaskConical,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { AmbientToggle } from "@/components/AmbientToggle";

export const metadata = {
  title: "Points of View on Digital Ecosystems & Product Craft",
  description:
    "Pragmatic, research-backed perspectives on ambient commerce, physical-digital convergence, platform monetization, and selective experimentation by Dave Rubini.",
};

export default function InsightsPage() {
  return (
    <div className="space-y-16 sm:space-y-24 py-8 sm:py-12">
      {/* 1. Header */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-ruby">
            <Compass className="w-4 h-4" />
            <span>Thought Leadership &amp; Applied Research</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-obsidian tracking-tight leading-tight">
            Points of View on Digital Ecosystems &amp; Product Craft
          </h1>
          <p className="text-base sm:text-xl text-slate-600 leading-relaxed font-medium">
            Pragmatic, research-backed perspectives on ambient commerce, physical-digital convergence, platform
            monetization, and selective experimentation.
          </p>
        </div>
      </section>

      {/* 2. Pillar 1: Ambient Commerce & the Changing E-Commerce Shopping Funnel */}
      <section id="ambient-commerce" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-ruby">
              <Bot className="w-4 h-4" />
              <span>Core Thesis 01</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-obsidian tracking-tight">
              Ambient Commerce &amp; the Changing E-Commerce Shopping Funnel
            </h2>

            <div className="space-y-4 pt-2">
              <div className="bg-surface-subtle p-5 rounded-xl border border-surface-border">
                <span className="text-xs font-black uppercase tracking-wider text-ruby block mb-1">
                  1 Big Thing
                </span>
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                  The traditional e-commerce shopping funnel is fundamentally changing. Since the dawn of e-commerce
                  decades ago, product teams have optimized linear web funnels (
                  <em>Awareness → Consideration → Conversion</em>) built around the WIMP paradigm—Windows, Icons, Menus,
                  and Pointers. As commerce increasingly takes place through off-site AI assistants, conversational
                  agents, and embedded ambient intent, that linear funnel flattens into an ambient stream.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-surface-border">
                <span className="text-xs font-black uppercase tracking-wider text-slate-500 block mb-1">
                  Why It Matters
                </span>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Consumer intent is being captured off-site by AI assistants, autonomous shopping agents, and
                  conversational interfaces long before a shopper ever lands on your product detail page (PDP). Winning
                  requires shifting from chasing on-site pageviews to winning intent in the stream—optimizing structured
                  data, vector embeddings, and API endpoints while preserving core human-centered design principles.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive WIMP vs Ambient Toggle Component */}
          <AmbientToggle />
        </div>
      </section>

      {/* 3. Pillar 2: Physical-Digital Convergence & High-Consideration Journeys */}
      <section id="physical-digital" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-surface-subtle border border-surface-border rounded-2xl p-6 sm:p-10 lg:p-12 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-ruby">
            <Building className="w-4 h-4" />
            <span>Core Thesis 02</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-obsidian tracking-tight">
            Physical-Digital Convergence &amp; High-Consideration Journeys
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="bg-white p-6 rounded-xl border border-surface-border space-y-3 shadow-2xs">
              <span className="text-xs font-black uppercase tracking-wider text-ruby block">
                1 Big Thing: Unified Operational Intelligence
              </span>
              <p className="text-sm text-slate-600 leading-relaxed">
                Physical retail environments and digital storefronts must share a unified operational intelligence.
                During my leadership at Brickstream, I directed IoT computer vision sensors and analytics platforms that
                allowed physical retailers to measure in-store shopper behaviors with the same analytical precision as
                digital funnels. Bridging in-store behavior with digital interfaces unlocks massive conversion and
                personalization advantages.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-surface-border space-y-3 shadow-2xs">
              <span className="text-xs font-black uppercase tracking-wider text-slate-500 block">
                Between the Lines: Remodeling &amp; Considered Discovery
              </span>
              <p className="text-sm text-slate-600 leading-relaxed">
                High-consideration purchases (Home Décor, Bath, Flooring, Major Appliances) cannot be reduced to simple
                impulse-buy funnels. By integrating GenAI and 3D visualization tools with location, context, and shopper
                persona personalization, customer friction is reduced, empowering shoppers to become inspired,
                informed, and confident in complex purchase decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Pillar 3: Multi-Sided Monetization & Modern Platform Scale */}
      <section id="retail-media" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-ruby">
            <DollarSign className="w-4 h-4" />
            <span>Core Thesis 03</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-obsidian tracking-tight">
            Multi-Sided Monetization &amp; Modern Platform Scale
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="bg-white border-2 border-surface-border rounded-xl p-6 sm:p-8 space-y-3 shadow-2xs">
              <span className="text-xs font-black uppercase tracking-wider text-ruby block">
                1 Big Thing: Sustainable Monetization
              </span>
              <h3 className="text-base sm:text-lg font-bold text-obsidian">
                Retail Media Must Enhance Customer Discovery
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Sustainable monetization must enhance customer discovery, not compromise it. As a founding team member
                of Orange Apron Media (Retail Media+) at The Home Depot, I helped scale retail media advertising from
                $0 to $300M in ad revenue by pairing high-performing product listing ads (PLA) and display media with deep
                customer browse intent.
              </p>
            </div>

            <div className="bg-white border-2 border-surface-border rounded-xl p-6 sm:p-8 space-y-3 shadow-2xs">
              <span className="text-xs font-black uppercase tracking-wider text-slate-500 block">
                How It Works: Decoupled Architecture
              </span>
              <h3 className="text-base sm:text-lg font-bold text-obsidian">
                Modern Decoupled CMS &amp; Web Infrastructure
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Ecosystem scale requires decoupled, modern infrastructure. From launching enterprise Contentful CMS to
                modernize digital storefronts, to directing hosted web platforms serving 600+ financial institutions at
                Intuit, platform leadership depends on balancing commercial viability with user-centered rigor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Pillar 4: Selective, Hypothesis-Driven Experimentation */}
      <section id="experimentation" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-obsidian text-white border border-obsidian-light rounded-2xl p-6 sm:p-10 lg:p-12 space-y-6 shadow-xl">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-ruby-light bg-ruby/40 px-3 py-1 rounded-full border border-ruby">
            <FlaskConical className="w-3.5 h-3.5" />
            <span>Core Thesis 04</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Selective, Hypothesis-Driven Experimentation
          </h2>

          <div className="max-w-3xl space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            <p>
              <strong className="text-white">1 Big Thing:</strong> Stop testing just because you have traffic. A/B
              testing without a rigorous, falsifiable hypothesis is statistical gambling.
            </p>
            <p>
              I help teams institute structured experimentation protocols—using isolated A/B tests to validate
              high-conviction bets and &ldquo;King of the Hill&rdquo; challenger tournaments (champion vs. challengers) to
              optimize critical commercial real estate. Every test must prove or disprove a specific psychological or
              functional hypothesis before committing engineering resources.
            </p>
          </div>

          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="bg-white/10 p-4 rounded-lg border border-white/10">
              <span className="font-bold text-ruby-light uppercase tracking-wider block mb-1">
                Hypothesis Protocol:
              </span>
              <p className="text-slate-300">
                Identify the psychological barrier, isolate the variable, define minimum detectable effect (MDE), and
                verify statistical significance.
              </p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg border border-white/10">
              <span className="font-bold text-ruby-light uppercase tracking-wider block mb-1">
                Tournament Architecture:
              </span>
              <p className="text-slate-300">
                Pit new UX variations against the reigning champion design, promoting only validated winners to 100%
                production traffic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Substack Publication Callout */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-ruby-light/40 border-2 border-ruby/30 rounded-2xl p-8 sm:p-12 text-center space-y-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-ruby bg-white px-3 py-1 rounded-full border border-ruby/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Weekly Strategic Essays</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-obsidian tracking-tight">
            Read Dave&apos;s Weekly Product Analysis on Substack
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Want tactical frameworks, human-centered product principles, and unfiltered perspectives on digital
            ecosystems? Subscribe to my weekly newsletter for technology product leaders and startup founders.
          </p>
          <div className="pt-2">
            <a
              href="https://daverubini.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-ruby hover:bg-ruby-hover text-white text-base font-bold rounded-lg shadow-md transition-colors min-h-[44px]"
            >
              <span>Subscribe to Dave&apos;s Substack</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
