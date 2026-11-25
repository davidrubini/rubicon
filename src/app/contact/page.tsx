import React from "react";
import {
  Compass,
  Phone,
  Mail,
  Calendar,
  Clock,
  Globe,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.78a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
    </svg>
  );
}

export const metadata = {
  title: "Contact & Booking | Schedule a 30-Minute Roadmap Diagnostic",
  description:
    "Connect directly with Dave Rubini at Rubicon Leap Advisory. Schedule a 30-minute diagnostic call, call 404-386-5722, or email drubini@gmail.com.",
};

export default function ContactPage() {
  return (
    <div className="space-y-16 sm:space-y-20 py-8 sm:py-12">
      {/* 1. Header */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-ruby">
            <Compass className="w-4 h-4" />
            <span>Direct Principal Access</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-obsidian tracking-tight leading-tight">
            Are You Ready to Cross the Rubicon?
          </h1>
          <p className="text-base sm:text-xl text-slate-600 leading-relaxed font-medium">
            Stop standing on the riverbank of product indecision. Whether you need an embedded Fractional CPO to unblock
            your roadmap, an advisory retainer to stress-test your product bets, or a 2-Week Roadmap Diagnostic to get
            your squads aligned, let&apos;s connect.
          </p>
        </div>
      </section>

      {/* 2. Contact Channels & Scheduler Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Action Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-lg font-bold text-obsidian">Direct Communication Channels</h2>

            {/* Direct Phone */}
            <a
              href="tel:4043865722"
              className="block bg-white border border-surface-border rounded-xl p-5 hover:border-ruby shadow-2xs transition-all group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-ruby-light text-ruby flex items-center justify-center font-bold group-hover:bg-ruby group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 block">
                      Single-Tap Mobile Dial
                    </span>
                    <span className="text-base font-bold text-obsidian group-hover:text-ruby transition-colors">
                      404-386-5722
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-ruby transition-colors" />
              </div>
              <p className="text-xs text-slate-500 mt-2.5 pt-2.5 border-t border-slate-100">
                Direct mobile line to Dave Rubini. Available during standard business hours.
              </p>
            </a>

            {/* Direct Email */}
            <a
              href="mailto:drubini@gmail.com"
              className="block bg-white border border-surface-border rounded-xl p-5 hover:border-ruby shadow-2xs transition-all group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-ruby-light text-ruby flex items-center justify-center font-bold group-hover:bg-ruby group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 block">
                      Direct Principal Email
                    </span>
                    <span className="text-base font-bold text-obsidian group-hover:text-ruby transition-colors">
                      drubini@gmail.com
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-ruby transition-colors" />
              </div>
              <p className="text-xs text-slate-500 mt-2.5 pt-2.5 border-t border-slate-100">
                Domain alias: <code className="text-slate-700">dave@leaptherubicon.com</code>. Replies typically within 24
                hours.
              </p>
            </a>

            {/* Executive LinkedIn */}
            <a
              href="https://linkedin.com/in/daverubini/"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border border-surface-border rounded-xl p-5 hover:border-ruby shadow-2xs transition-all group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-obsidian text-white flex items-center justify-center font-bold group-hover:bg-ruby transition-colors">
                    <LinkedInIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400 block">
                      Executive Profile
                    </span>
                    <span className="text-base font-bold text-obsidian group-hover:text-ruby transition-colors">
                      linkedin.com/in/daverubini
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-ruby transition-colors" />
              </div>
              <p className="text-xs text-slate-500 mt-2.5 pt-2.5 border-t border-slate-100">
                Connect for professional updates, publications, and network introductions.
              </p>
            </a>

            {/* Practice Availability Badge */}
            <div className="bg-surface-subtle border border-surface-border rounded-xl p-4 flex items-start gap-3">
              <Globe className="w-5 h-5 text-ruby shrink-0 mt-0.5" />
              <div className="text-xs text-slate-600 leading-relaxed">
                <strong className="text-obsidian block mb-0.5">Practice Availability:</strong>
                Partnering remotely and friction-free with technology ventures and product squads worldwide.
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Scheduler Card */}
          <div className="lg:col-span-7">
            <div className="bg-white border-2 border-surface-border rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              <div className="border-b border-surface-border pb-5 space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-ruby">
                  <Calendar className="w-4 h-4" />
                  <span>Calendar Booking</span>
                </div>
                <h2 className="text-2xl font-black text-obsidian tracking-tight">
                  Book a 30-Minute Roadmap Diagnostic
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Select a convenient time on my calendar below to discuss your product organization, bottlenecks, and
                  immediate strategic priorities.
                </p>
              </div>

              {/* Interactive Calendar Embed / Placeholder Container */}
              <div className="bg-surface-subtle border border-surface-border rounded-xl p-6 text-center space-y-5">
                <div className="w-12 h-12 rounded-full bg-ruby-light text-ruby mx-auto flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="max-w-md mx-auto space-y-2">
                  <h3 className="text-base font-bold text-obsidian">
                    Ready for a High-Signal Roadmap Diagnostic?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Choose an open slot directly via Calendly or reach out by email. I review all materials in advance
                    to ensure our 30 minutes are focused and actionable.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href="https://calendly.com/daverubini/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-ruby hover:bg-ruby-hover text-white text-sm font-bold rounded-lg shadow-sm transition-colors min-h-[44px]"
                  >
                    <span>Open Calendar in New Window</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                <div className="pt-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left text-xs text-slate-600">
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-ruby shrink-0 mt-0.5" />
                    <span>No pitch decks or pressure</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-ruby shrink-0 mt-0.5" />
                    <span>Direct principal conversation</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-ruby shrink-0 mt-0.5" />
                    <span>Immediate tactical takeaway</span>
                  </div>
                </div>
              </div>

              {/* Preparation Advice */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1.5">
                <span className="font-bold text-obsidian block">How to Prepare:</span>
                <p>
                  Bring 1 or 2 specific challenges currently facing your team: a contentious roadmap priority, an
                  upcoming board presentation, or squad delivery friction. We will dissect the problem collaboratively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
