import React from "react";
import Link from "next/link";
import {
  Compass,
  Search,
  Sparkles,
  Users2,
  FlaskConical,
  GraduationCap,
  ArrowRight,
  ShieldCheck,
  Calendar,
  Layers,
  Cpu,
} from "lucide-react";
import { Accordion, AccordionItem } from "@/components/Accordion";

export const metadata = {
  title: "Services & Methodology",
  description:
    "Product Leadership on Demand: From Boardroom Strategy to Daily Sprints. Fractional CPO, Strategic Advisory, and 1-Week Roadmap Diagnostics by Dave Rubini.",
  alternates: {
    canonical: "https://leaptherubicon.com/services",
  },
};

const pillars = [
  {
    num: "01",
    title: "Iterative Discovery",
    icon: Search,
    description:
      "I pair qualitative user research with quantitative telemetry to ensure cross-functional teams solve verified customer problems, not internal assumptions.",
    takeaway: "Eliminate wasteful rework before writing a single line of production code.",
  },
  {
    num: "02",
    title: "AI-Driven Insights",
    icon: Sparkles,
    description:
      "I integrate modern AI tools directly into discovery workflows—synthesizing user interview transcripts, market datasets, and PRD drafts in hours rather than weeks, while preserving human-centered rigor.",
    takeaway: "10x discovery velocity without sacrificing user empathy or cognitive ergonomics.",
  },
  {
    num: "03",
    title: "Balanced-Team Alignment",
    icon: Users2,
    description:
      "I align Product, UX, and Engineering as co-equal partners from day one, breaking down traditional organizational silos, handoff friction, and misunderstandings.",
    takeaway: "Shared accountability and zero finger-pointing between design and dev.",
  },
  {
    num: "04",
    title: "Selective Experimentation",
    icon: FlaskConical,
    description:
      "I establish strict, hypothesis-driven testing—deploying isolated A/B tests and 'King of the Hill' challenger tournaments to validate strategic bets before over-investing engineering cycles.",
    takeaway: "Stop testing for the sake of traffic; test with falsifiable behavioral hypotheses.",
  },
  {
    num: "05",
    title: "Executive Mentorship",
    icon: GraduationCap,
    description:
      "I coach your existing product managers in real time within their daily Agile rituals, elevating them from backlog ticket administrators into confident, outcome-driven product owners.",
    takeaway: "Build lasting internal product capability that compounds long after my engagement.",
  },
];

const engagementAccordionItems: AccordionItem[] = [
  {
    id: "strategic-advisory",
    title: "Strategic Advisory Retainer",
    subtitle: "For Founders, CEOs, and Series A–C Leadership Teams",
    badge: "Executive Sounding Board",
    content: (
      <div className="space-y-4 pt-2">
        <p className="text-sm text-slate-700 leading-relaxed">
          Designed for executive leaders who need an experienced sounding board to stress-test high-stakes product bets,
          navigate investor roadmaps, and audit organizational friction.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
          <div className="bg-surface-subtle p-3 rounded-lg border border-surface-border">
            <strong className="text-obsidian block mb-1">Scope &amp; Rhythm:</strong>
            <ul className="space-y-1 text-slate-600">
              <li>• Bi-weekly executive strategy sessions</li>
              <li>• Asynchronous Slack/email advisory access</li>
              <li>• Board deck review &amp; roadmap critique</li>
            </ul>
          </div>
          <div className="bg-surface-subtle p-3 rounded-lg border border-surface-border">
            <strong className="text-obsidian block mb-1">Key Deliverables:</strong>
            <ul className="space-y-1 text-slate-600">
              <li>• Product Friction Map &amp; Audit</li>
              <li>• Senior PM hiring rubrics &amp; candidate vetting</li>
              <li>• Strategic monetization &amp; packaging reviews</li>
            </ul>
          </div>
        </div>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-ruby hover:text-ruby-hover"
          >
            <span>Inquire About Strategic Advisory</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    ),
  },
  {
    id: "fractional-cpo",
    title: "Fractional CPO (1–3 Days / Week)",
    subtitle: "For Scale-ups with 5–30 Engineers Needing Seasoned Executive Direction",
    badge: "Embedded Leadership",
    content: (
      <div className="space-y-4 pt-2">
        <p className="text-sm text-slate-700 leading-relaxed">
          Embedded operational leadership. I step in as your interim or fractional Chief Product Officer to own sprint
          prioritization, institute discovery cadence, align cross-functional teams, and elevate product culture.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
          <div className="bg-surface-subtle p-3 rounded-lg border border-surface-border">
            <strong className="text-obsidian block mb-1">Scope &amp; Rhythm:</strong>
            <ul className="space-y-1 text-slate-600">
              <li>• 1 to 3 dedicated days per week</li>
              <li>• Active participation in standups, sprint reviews, and planning</li>
              <li>• Executive staff meeting alignment &amp; OKR ownership</li>
            </ul>
          </div>
          <div className="bg-surface-subtle p-3 rounded-lg border border-surface-border">
            <strong className="text-obsidian block mb-1">Key Deliverables:</strong>
            <ul className="space-y-1 text-slate-600">
              <li>• Rolling 90-Day Outcome Roadmaps</li>
              <li>• Autonomous, high-velocity cross-functional teams</li>
              <li>• Standardized discovery &amp; telemetry playbooks</li>
            </ul>
          </div>
        </div>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-ruby hover:text-ruby-hover"
          >
            <span>Inquire About Fractional CPO Availability</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    ),
  },
  {
    id: "strategic-sprints",
    title: "Targeted Strategic Sprints",
    subtitle: "For Teams Facing a Critical Product Inflection or Board Review",
    badge: "Fixed Scope",
    content: (
      <div className="space-y-4 pt-2">
        <p className="text-sm text-slate-700 leading-relaxed">
          High-intensity, time-boxed engagements focused on resolving a specific bottleneck: launching a new business
          line, redesigning discovery workflows, or preparing for an M&amp;A or funding audit.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
          <div className="bg-surface-subtle p-3 rounded-lg border border-surface-border">
            <strong className="text-obsidian block mb-1">Sprint Formats:</strong>
            <ul className="space-y-1 text-slate-600">
              <li>• 1-Week Roadmap Diagnostic</li>
              <li>• User-Centered Design (UCD) Workflow Overhaul</li>
              <li>• GTM &amp; Multi-Sided Monetization Architecture</li>
            </ul>
          </div>
          <div className="bg-surface-subtle p-3 rounded-lg border border-surface-border">
            <strong className="text-obsidian block mb-1">Key Deliverables:</strong>
            <ul className="space-y-1 text-slate-600">
              <li>• Comprehensive executive audit report</li>
              <li>• Actionable backlog reconstruction</li>
              <li>• Cross-functional team telemetry &amp; KPI dashboard setup</li>
            </ul>
          </div>
        </div>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-ruby hover:text-ruby-hover"
          >
            <span>Schedule a Strategic Sprint</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    ),
  },
];

const servicesFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the 1-Week Roadmap Diagnostic at Rubicon Leap Advisory?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 1-Week Roadmap Diagnostic is a fixed-scope 5-business-day operational audit led by Dave Rubini. It delivers an Executive Friction Map identifying organizational bottlenecks and backlog bloat, plus a prioritized 90-Day Outcome Roadmap aligning executive goals with sprint velocity.",
      },
    },
    {
      "@type": "Question",
      name: "Who should hire Dave Rubini as a Fractional CPO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Growth-stage scale-ups with 5 to 30 engineers and Series A–C leadership teams that need embedded 1–3 days/week product leadership to own sprint prioritization, institute discovery cadence, align cross-functional teams, and mentor product managers.",
      },
    },
    {
      "@type": "Question",
      name: "How can I contact or refer someone to Rubicon Leap Advisory?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Email Dave Rubini directly at dave@leaptherubicon.com, call 404-386-5722, or schedule a 30-minute roadmap diagnostic at https://leaptherubicon.com/contact.",
      },
    },
  ],
};

export default function ServicesPage() {
  return (
    <div className="space-y-16 sm:space-y-24 py-8 sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesFaqJsonLd) }}
      />
      {/* 1. Header & Core Philosophy */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-ruby">
            <Compass className="w-4 h-4" />
            <span>Practice Methodology &amp; Engagements</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-obsidian tracking-tight leading-tight">
            Product Leadership on Demand: From Boardroom Strategy to Daily Sprints.
          </h1>
          <p className="text-base sm:text-xl text-slate-600 leading-relaxed font-medium">
            <span className="text-obsidian font-bold">
              &ldquo;Strategy without execution is hallucination. Execution without strategy is chaos.&rdquo;
            </span>{" "}
            I align both.
          </p>
        </div>
      </section>

      {/* 2. The 5 Pillars of My Methodology */}
      <section id="methodology" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-ruby">
              The Operational Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-obsidian tracking-tight mt-1">
              The 5 Pillars of My Product Methodology
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
              Tested across Fortune 50 scale, high-growth FinTech, and IoT computer vision analytics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.num}
                  className="bg-white border border-surface-border rounded-xl p-6 flex flex-col justify-between shadow-2xs hover:border-ruby/40 transition-all space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="w-10 h-10 rounded-lg bg-ruby-light text-ruby flex items-center justify-center font-bold">
                        <Icon className="w-5 h-5" />
                      </span>
                      <span className="text-xs font-black text-slate-300 tracking-wider">
                        PILLAR {pillar.num}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-obsidian tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-ruby block mb-1">
                      Outcome:
                    </span>
                    <p className="text-xs text-slate-700 italic font-medium">
                      {pillar.takeaway}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Signature Engagement: The 1-Week Roadmap Diagnostic */}
      <section id="diagnostic" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-obsidian text-white border-2 border-ruby rounded-2xl p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-ruby/10 rounded-bl-full pointer-events-none" />

          <div className="max-w-3xl space-y-5 relative z-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-ruby-light bg-ruby/40 px-3 py-1 rounded-full border border-ruby">
              <Calendar className="w-3.5 h-3.5" />
              <span>Signature Fixed-Scope Engagement</span>
            </span>

            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              The 1-Week Roadmap Diagnostic
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              A rapid, fixed-scope operational audit designed to unblock stalled product roadmaps. I conduct a
              comprehensive 360° review across backlog health, discovery practices, metric alignment, and qualitative
              feedback loops.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white/10 p-4 rounded-xl border border-white/10 space-y-1.5">
                <div className="text-xs font-black uppercase text-ruby-light tracking-wider">
                  Deliverable 01
                </div>
                <h3 className="text-sm font-bold text-white">The Executive Friction Map</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Clear identification of organizational bottlenecks, backlog bloat, and broken team handoffs.
                </p>
              </div>

              <div className="bg-white/10 p-4 rounded-xl border border-white/10 space-y-1.5">
                <div className="text-xs font-black uppercase text-ruby-light tracking-wider">
                  Deliverable 02
                </div>
                <h3 className="text-sm font-bold text-white">90-Day Outcome Roadmap</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  A prioritized, hypothesis-tested action plan aligning executive goals with sprint velocity.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-ruby hover:bg-ruby-hover text-white text-sm font-bold rounded-lg shadow-sm transition-colors min-h-[44px]"
              >
                <span>Schedule Your 1-Week Roadmap Diagnostic</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="text-xs text-slate-400">
                Turnaround: 5 business days with executive debrief.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Flexible Engagement Models */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          <div className="max-w-3xl">
            <span className="text-xs font-black uppercase tracking-widest text-ruby">
              Partnership Structures
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-obsidian tracking-tight mt-1">
              Flexible Engagement Models Tailored to Your Growth Stage
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
              Whether you need strategic counsel for your executive team or embedded operational leadership for your
              cross-functional teams.
            </p>
          </div>

          <Accordion items={engagementAccordionItems} defaultOpenId="fractional-cpo" />
        </div>
      </section>

      {/* 5. Expert Augmentation Detail: Visual Design & Technical Architecture */}
      <section id="augmentation" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-surface-subtle border border-surface-border rounded-2xl p-6 sm:p-10 space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-ruby">
              Specialist Augmentation Network
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-obsidian tracking-tight">
              Full-Stack Firepower Without the Agency Overhead
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              When client engagements require specialized visual polish, deep technical re-architecture, or complex
              systems integration, I bring in trusted, battle-tested senior partners:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="bg-white p-5 rounded-xl border border-surface-border space-y-2 shadow-2xs">
              <div className="w-8 h-8 rounded bg-ruby-light text-ruby flex items-center justify-center font-bold">
                <Layers className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-obsidian">Senior Visual Designers</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Elevate customer-facing UI component libraries, mobile design systems, and responsive brand fidelity.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-surface-border space-y-2 shadow-2xs">
              <div className="w-8 h-8 rounded bg-obsidian text-white flex items-center justify-center font-bold">
                <Cpu className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-obsidian">Principal Technical Architects</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Review infrastructure bottlenecks, API contracts, database modeling, and scalable cloud architectures.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-surface-border space-y-2 shadow-2xs">
              <div className="w-8 h-8 rounded bg-ruby-light text-ruby flex items-center justify-center font-bold">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-obsidian">Specialized Data &amp; AI Engineers</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Implement real-time behavioral telemetry pipelines, vector database retrievals, and ML workflows.
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-200 flex items-center gap-2 text-xs text-slate-600 italic">
            <ShieldCheck className="w-4 h-4 text-ruby shrink-0" />
            <span>
              I manage and integrate these specialists seamlessly into your roadmap—ensuring consistent strategic
              direction and zero administrative overhead for you.
            </span>
          </div>
        </div>
      </section>

      {/* 6. Bottom CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border-2 border-surface-border rounded-2xl p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-black text-obsidian tracking-tight">
            Ready to Unblock Your Product Organization?
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s schedule a 30-minute discovery conversation to assess your roadmap, cross-functional team alignment, and immediate
            growth priorities.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-ruby hover:bg-ruby-hover text-white text-base font-bold rounded-lg shadow-md transition-colors min-h-[44px]"
            >
              <span>Schedule Initial Discovery Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
