"use client";

import React, { useState } from "react";
import { Monitor, Bot, CheckCircle2 } from "lucide-react";

interface ComparisonStage {
  stage: string;
  stageNumber: string;
  wimp: {
    title: string;
    description: string;
    bottleneck: string;
  };
  ambient: {
    title: string;
    description: string;
    advantage: string;
  };
}

const stages: ComparisonStage[] = [
  {
    stage: "Discovery",
    stageNumber: "01",
    wimp: {
      title: "Destination URLs & Keyword Ads",
      description:
        "Top-of-funnel display ads and keyword bidding driving human traffic to static destination URLs and landing pages.",
      bottleneck: "Chasing on-site pageviews and escalating customer acquisition costs (CAC).",
    },
    ambient: {
      title: "Structured Feeds & Vector Embeddings",
      description:
        "Structured product feeds, vector embeddings, and API endpoints optimized for autonomous AI agent ingestion and retrieval.",
      advantage: "Capturing customer intent in the stream before a shopper ever lands on a web browser.",
    },
  },
  {
    stage: "Consideration",
    stageNumber: "02",
    wimp: {
      title: "Category Pages & Tab Overload",
      description:
        "Shoppers manually browse category taxonomy, filter facets, read through reviews, and compare across dozens of open browser tabs.",
      bottleneck: "High cognitive friction leading to abandoned carts and decision fatigue.",
    },
    ambient: {
      title: "Agent Synthesis & Curated Shortlists",
      description:
        "Autonomous AI agents cross-reference real-time reviews, stock telemetry, and specifications, presenting instant curated shortlists.",
      advantage: "Zero-friction decision support matching exact customer context and constraints.",
    },
  },
  {
    stage: "Conversion",
    stageNumber: "03",
    wimp: {
      title: "Rigid Multi-Step Web Checkout",
      description:
        "Rigid 4-step on-site checkout flows burdened with repetitive form fields, address verification, and CRO urgency patterns.",
      bottleneck: "Funnel drop-off at every form transition and forced authentication gate.",
    },
    ambient: {
      title: "Tokenized Agent Transactions",
      description:
        "Tokenized, frictionless transactions executed by the user's trusted AI agent with explicit user biometric approval.",
      advantage: "One-click authorized fulfillment with near-zero friction and verified intent.",
    },
  },
];

export function AmbientToggle() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <div className="w-full bg-white border border-surface-border rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-surface-border gap-4">
        <div>
          <span className="text-[11px] font-black uppercase tracking-widest text-ruby">
            Interactive Paradigm Comparison
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-obsidian tracking-tight mt-1">
            WIMP Paradigm vs. Ambient Commerce
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            How the 40-year linear web funnel is flattening into an ambient stream of intent.
          </p>
        </div>

        {/* Stage Selector Pills (Minimum 44x44px touch targets) */}
        <div
          className="flex items-center gap-1.5 p-1 bg-surface-subtle rounded-xl border border-surface-border self-start sm:self-auto"
          role="tablist"
          aria-label="Journey Stage Selector"
        >
          {stages.map((stg, idx) => (
            <button
              key={stg.stage}
              role="tab"
              aria-selected={activeStage === idx}
              onClick={() => setActiveStage(idx)}
              className={`min-h-[44px] px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeStage === idx
                  ? "bg-ruby text-white shadow-xs"
                  : "text-slate-600 hover:text-obsidian hover:bg-slate-200/60"
              }`}
            >
              <span>{stg.stageNumber}.</span>
              <span>{stg.stage}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Comparison Display */}
      <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* WIMP Column */}
        <div className="bg-surface-subtle border border-surface-border rounded-xl p-5 sm:p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">
                <Monitor className="w-4 h-4 text-slate-400" />
                Legacy Web Funnel (WIMP)
              </span>
              <span className="text-[10px] bg-slate-200 text-slate-700 font-bold px-2 py-0.5 rounded">
                Stage {stages[activeStage].stageNumber}
              </span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-obsidian mb-2">
              {stages[activeStage].wimp.title}
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              {stages[activeStage].wimp.description}
            </p>
          </div>

          <div className="pt-3 border-t border-slate-200/80">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
              System Bottleneck:
            </span>
            <p className="text-xs font-medium text-slate-700 bg-white/80 p-2.5 rounded border border-slate-200">
              {stages[activeStage].wimp.bottleneck}
            </p>
          </div>
        </div>

        {/* Ambient Column */}
        <div className="bg-ruby-light/30 border-2 border-ruby/30 rounded-xl p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-ruby/5 rounded-bl-full pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-ruby">
                <Bot className="w-4 h-4 text-ruby" />
                Ambient Stream (Agent-Enlightened)
              </span>
              <span className="text-[10px] bg-ruby text-white font-black px-2 py-0.5 rounded">
                Next-Gen
              </span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-obsidian mb-2">
              {stages[activeStage].ambient.title}
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              {stages[activeStage].ambient.description}
            </p>
          </div>

          <div className="pt-3 border-t border-ruby/20">
            <span className="text-[11px] font-bold uppercase tracking-wider text-ruby block mb-1">
              Strategic Advantage:
            </span>
            <p className="text-xs font-medium text-obsidian bg-white p-2.5 rounded border border-ruby/30 shadow-2xs">
              {stages[activeStage].ambient.advantage}
            </p>
          </div>
        </div>
      </div>

      {/* Strategic Takeaway Bar */}
      <div className="mt-6 pt-5 border-t border-surface-border flex items-start gap-3 bg-surface-subtle p-4 rounded-xl text-xs sm:text-sm text-slate-700 leading-relaxed">
        <CheckCircle2 className="w-5 h-5 text-ruby shrink-0 mt-0.5" />
        <div>
          <strong className="text-obsidian font-bold">The Strategic Reality:</strong> In an ambient commerce
          ecosystem, your job is no longer to trap traffic on a destination website. Your job is to win intent in the
          stream, adapt your telemetry for off-site interactions, and carry forward what remains essential from 40
          years of human-centered UX design.
        </div>
      </div>
    </div>
  );
}
