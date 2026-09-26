"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border border-border rounded-xl bg-surface overflow-hidden transition-all duration-200"
          >
            <button
              className="w-full flex items-center justify-between p-4 sm:p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-lg">{item.question}</span>
              <ChevronDown
                className={cn("w-5 h-5 text-text/50 transition-transform duration-200", {
                  "rotate-180": isOpen,
                })}
              />
            </button>
            <div
              className={cn("overflow-hidden transition-all duration-200", {
                "max-h-96 opacity-100": isOpen,
                "max-h-0 opacity-0": !isOpen,
              })}
            >
              <div className="p-4 sm:p-6 pt-0 text-text/80 leading-relaxed border-t border-border/50">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
