import React from "react";
import { TrendingUp, Building2, Clock, Award } from "lucide-react";

interface MetricItem {
  value: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const metrics: MetricItem[] = [
  {
    value: "$0 → $300M",
    label: "Retail Media Hypergrowth",
    description:
      "Scaled ad revenue from inception as a founding team member of Orange Apron Media at The Home Depot.",
    icon: TrendingUp,
  },
  {
    value: "600+",
    label: "Financial Institutions",
    description:
      "Directed product roadmaps for hosted web/CMS and cash management platforms across Intuit Financial Services.",
    icon: Building2,
  },
  {
    value: "20+ Years",
    label: "Player-Coach Leadership",
    description:
      "Hands-on product leadership across enterprise e-commerce, IoT computer vision analytics, and FinTech.",
    icon: Clock,
  },
  {
    value: "ADPList100 & ATV",
    label: "Global Product Mentor & Advisor",
    description:
      "Recognized in the Top 100 Most Influential Product Mentors globally; active Advisor to tech founders at Atlanta Tech Village.",
    icon: Award,
  },
];

export function MetricGrid() {
  return (
    <section className="w-full" aria-label="Key Career Metrics and Proof Points">
      {/* 2x2 on mobile (<640px) and 4x1 on desktop (sm:grid-cols-2 lg:grid-cols-4) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        {metrics.map((metric, idx) => {
          const Icon = metric.icon;
          return (
            <div
              key={idx}
              className="bg-white border border-surface-border rounded-xl p-4 sm:p-5 flex flex-col justify-between shadow-2xs hover:border-ruby/40 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="p-2 rounded-lg bg-ruby-light text-ruby group-hover:bg-ruby group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </span>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400">
                    Proof Point 0{idx + 1}
                  </span>
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-ruby mb-1">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-obsidian mb-1.5 leading-snug">
                  {metric.label}
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pt-1 border-t border-slate-100">
                {metric.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
