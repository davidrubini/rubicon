import React from "react";
import Link from "next/link";
import {
  Compass,
  GraduationCap,
  Award,
  Building2,
  Globe,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
} from "lucide-react";
import { Accordion, AccordionItem } from "@/components/Accordion";

export const metadata = {
  title: "About Dave Rubini | AI-Enlightened, Human-Centered Product Leader",
  description:
    "Player-Coach product leader with 20+ years scaling digital ecosystems. Columbia MBA, Tufts Human Factors, Home Depot, Brickstream, Intuit, and Atlanta Tech Village Advisor.",
};

const careerAccordionItems: AccordionItem[] = [
  {
    id: "home-depot",
    title: "The Home Depot — Browse Journeys & Retail Media",
    subtitle: "Senior Manager, Online Product Management (2 Promotions)",
    period: "Nov 2016 – Mar 2026",
    badge: "Enterprise Scale",
    content: (
      <div className="space-y-3 pt-2 text-sm text-slate-700 leading-relaxed">
        <ul className="space-y-2 list-disc list-outside pl-4 text-xs sm:text-sm">
          <li>
            Directly managed 6 product managers and cross-functional balanced Agile squads across Home Décor, Bath,
            Flooring, Appliances, and enterprise SEO.
          </li>
          <li>
            Implemented pioneering GenAI discovery and 3D visualization capabilities to simplify complex remodeling and
            high-consideration shopper journeys.
          </li>
          <li>
            Founding team member of <strong className="text-obsidian">Orange Apron Media (Retail Media+)</strong>, scaling
            ad revenue from $0 to $300M through high-performing product listing ads and intent monetization.
          </li>
          <li>
            Led the strategic definition and enterprise launch of Contentful CMS, Online Recommendations engines, and
            global Header Navigation across Home Depot&apos;s digital storefront.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "brickstream",
    title: "Brickstream (Acquired by Point Grey / FLIR Systems)",
    subtitle: "Director, Product Management — IoT Computer Vision Analytics",
    period: "Apr 2013 – Oct 2016",
    badge: "IoT & Analytics",
    content: (
      <div className="space-y-3 pt-2 text-sm text-slate-700 leading-relaxed">
        <ul className="space-y-2 list-disc list-outside pl-4 text-xs sm:text-sm">
          <li>
            Owned the global product roadmap for IoT computer vision stereo sensors and in-store shopper analytics
            platforms.
          </li>
          <li>
            Enabled premier international retailers to measure in-store behavioral telemetry—dwell time, queue lengths,
            pathing, and conversion—with online-analytics precision.
          </li>
          <li>
            Supported strategic platform integration through acquisition by Point Grey / FLIR Systems.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "intuit",
    title: "Intuit Financial Services (Acquired by NCR)",
    subtitle: "Product Management & Customer Experience (CX) Leader",
    period: "Jun 2002 – Mar 2013",
    badge: "FinTech & CMS",
    content: (
      <div className="space-y-3 pt-2 text-sm text-slate-700 leading-relaxed">
        <ul className="space-y-2 list-disc list-outside pl-4 text-xs sm:text-sm">
          <li>
            Directed product roadmaps for Magnet Cash Management and Digital Insight hosted CMS platforms serving over
            600 financial institutions.
          </li>
          <li>
            Championed and institutionalized User-Centered Design (UCD) across engineering practices, establishing
            usability benchmarks and rapid customer prototyping cycles.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "early-foundation",
    title: "Henry Dreyfuss Associates & NCR Corporation",
    subtitle: "Human Factors Specialist / Industrial & Interactive Design",
    period: "Early Career",
    badge: "Human Factors",
    content: (
      <div className="space-y-3 pt-2 text-sm text-slate-700 leading-relaxed">
        <ul className="space-y-2 list-disc list-outside pl-4 text-xs sm:text-sm">
          <li>
            Established early foundational expertise in cognitive ergonomics, user psychology, and hardware/software
            interactive design.
          </li>
          <li>
            Created a Strategic Discovery Process adopted by premier global retailers and financial institutions to
            evaluate user mental models.
          </li>
        </ul>
      </div>
    ),
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-16 sm:space-y-24 py-8 sm:py-12">
      {/* 1. Profile Header */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-ruby">
            <Compass className="w-4 h-4" />
            <span>Principal Background &amp; Philosophy</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-obsidian tracking-tight leading-tight">
            Dave Rubini — AI-Enlightened, Human-Centered Product Leader
          </h1>
          <p className="text-base sm:text-xl text-slate-600 leading-relaxed font-medium">
            Bridging executive boardroom strategy with hands-on squad delivery across physical and digital ecosystems.
          </p>
        </div>
      </section>

      {/* 2. Core Philosophy & Player-Coach Mentality */}
      <section id="player-coach" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-surface-subtle border border-surface-border rounded-2xl p-6 sm:p-8 space-y-4">
              <span className="text-xs font-black uppercase tracking-wider text-ruby block">
                1 Big Thing: Grounded Ambition
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-obsidian">
                20+ Years Scaling Digital &amp; Physical Ecosystems
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                I am a product management leader and advisor with 20+ years of experience scaling physical and digital
                commerce ecosystems. I bridge executive boardroom strategy with hands-on squad delivery—equally
                comfortable presenting to board directors and debugging user stories with engineers.
              </p>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <h3 className="text-lg font-bold text-obsidian">The Player-Coach Mentality</h3>
              <p>
                I believe the best product leadership is active, empathetic, and accountable. I do not sit in an ivory
                tower dispensing abstract frameworks. I embed directly within your team—facilitating discovery
                interviews, analyzing telemetry, stress-testing roadmaps, and mentoring product managers in real time so
                your organization builds lasting internal capability.
              </p>
              <p>
                My philosophy of <strong className="text-obsidian">&ldquo;Grounded Ambition&rdquo;</strong> balances an
                expansive strategic horizon (Columbia MBA, $300M retail media, ambient commerce) with solid operational
                grounding (Tufts Human Factors Engineering, cognitive ergonomics, behavioral telemetry, and Agile
                delivery).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-ruby-light/30 border border-ruby/30 flex items-start gap-3 text-xs sm:text-sm text-slate-700">
              <Globe className="w-5 h-5 text-ruby shrink-0 mt-0.5" />
              <div>
                <strong className="text-obsidian block mb-0.5">Operating Footprint: Virtual-First &amp; Globally Flexible</strong>
                Rubicon Leap Advisory operates as a modern distributed practice, partnering seamlessly with product
                squads and executive leadership teams across client time zones.
              </div>
            </div>
          </div>

          {/* Right Column: Credentials Sidebar */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white border-2 border-surface-border rounded-xl p-6 shadow-2xs space-y-5">
              <h3 className="text-sm font-black uppercase tracking-wider text-obsidian border-b border-slate-100 pb-3">
                Education &amp; Community Credentials
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-ruby-light text-ruby shrink-0 mt-0.5">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-obsidian">Columbia Business School</h4>
                    <p className="text-slate-600">MBA in Marketing &amp; Management of Innovation</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-ruby-light text-ruby shrink-0 mt-0.5">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-obsidian">Tufts University</h4>
                    <p className="text-slate-600">
                      BS in Engineering Psychology / Human Factors Engineering (<em>magna cum laude</em>)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-obsidian text-white shrink-0 mt-0.5">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-obsidian">Atlanta Tech Village</h4>
                    <p className="text-slate-600">
                      Advisor (Jan 2025 – Present) to tech founders at the 3rd largest innovation hub in the USA
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded bg-obsidian text-white shrink-0 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-obsidian">ADPList100 Recognition</h4>
                    <p className="text-slate-600">
                      Product &amp; UX Mentor (Feb 2023 – Present); recognized on the Top 100 Most Influential Mentors
                      globally (April 2024)
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <a
                  href="https://linkedin.com/in/daverubini/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-obsidian rounded-lg font-bold text-xs transition-colors min-h-[44px]"
                >
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Verified Career Milestones */}
      <section id="experience" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-widest text-ruby">
              Executive Track Record
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-obsidian tracking-tight mt-1">
              Verified Career Milestones
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              Proven impact across retail media hypergrowth, enterprise CMS platforms, and IoT computer vision analytics.
            </p>
          </div>

          <Accordion items={careerAccordionItems} defaultOpenId="home-depot" />
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-surface-subtle border border-surface-border rounded-2xl p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-obsidian tracking-tight">
            Let&apos;s Build Something Resilient Together.
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Whether you are navigating an executive product inflection, preparing for your next funding round, or need an
            embedded leader to unblock squad delivery.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-ruby hover:bg-ruby-hover text-white text-base font-bold rounded-lg shadow-md transition-colors min-h-[44px]"
            >
              <span>Schedule a Conversation with Dave</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
