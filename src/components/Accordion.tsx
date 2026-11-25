"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface AccordionItem {
  id: string;
  title: string;
  subtitle?: string;
  period?: string;
  badge?: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string;
  allowMultiple?: boolean;
}

export function Accordion({ items, defaultOpenId, allowMultiple = false }: AccordionProps) {
  const [openIds, setOpenIds] = useState<Set<string>>(
    new Set(defaultOpenId ? [defaultOpenId] : [items[0]?.id].filter(Boolean))
  );

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="space-y-3 w-full">
      {items.map((item) => {
        const isOpen = openIds.has(item.id);
        return (
          <div
            key={item.id}
            className={`border rounded-xl transition-all duration-200 overflow-hidden bg-white ${
              isOpen ? "border-ruby shadow-xs" : "border-surface-border hover:border-slate-300"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(item.id)}
              className="w-full text-left px-5 py-4 min-h-[44px] flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ruby"
              aria-expanded={isOpen}
            >
              <div className="flex-1 pr-2">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  {item.badge && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-ruby bg-ruby-light px-2 py-0.5 rounded">
                      {item.badge}
                    </span>
                  )}
                  {item.period && (
                    <span className="text-xs font-semibold text-slate-500">{item.period}</span>
                  )}
                </div>
                <h4 className="text-base sm:text-lg font-bold text-obsidian leading-snug">
                  {item.title}
                </h4>
                {item.subtitle && (
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5">{item.subtitle}</p>
                )}
              </div>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                  isOpen ? "bg-ruby text-white rotate-180" : "bg-slate-100 text-slate-600"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-sm text-slate-600 border-t border-slate-100 animate-in fade-in duration-150">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
