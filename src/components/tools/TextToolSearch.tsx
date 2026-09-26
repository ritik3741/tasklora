"use client";

import * as React from "react";
import { ToolCard } from "@/components/ui/ToolCard";
import { Search, type LucideIcon } from "lucide-react";
import { 
  FileText, Hash, Type, Scissors, AlignLeft,
  ListOrdered, Link as LinkIcon, Clock, ArrowRightLeft, SortAsc
} from "lucide-react";

interface TextTool {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  isPopular?: boolean;
}

const tools: TextTool[] = [
  { title: "Word Counter", description: "Count words, characters, sentences, and reading time.", icon: FileText, href: "/text/word-counter", isPopular: true },
  { title: "Character Counter", description: "Track character limits, bytes, and spaces in real-time.", icon: Hash, href: "/text/character-counter" },
  { title: "Case Converter", description: "Change text to UPPERCASE, lowercase, Title Case, etc.", icon: Type, href: "/text/case-converter", isPopular: true },
  { title: "Remove Duplicate Lines", description: "Clean up lists by removing repeated lines instantly.", icon: Scissors, href: "/text/remove-duplicate-lines" },
  { title: "Remove Extra Spaces", description: "Trim lines and normalize whitespace in your text.", icon: AlignLeft, href: "/text/remove-extra-spaces" },
  { title: "Line Counter", description: "Count total lines, empty lines, and find the longest line.", icon: ListOrdered, href: "/text/line-counter" },
  { title: "Slug Generator", description: "Create SEO-friendly URL slugs from any text or title.", icon: LinkIcon, href: "/text/slug-generator" },
  { title: "Reading Time Calculator", description: "Estimate reading and speaking time based on WPM.", icon: Clock, href: "/text/reading-time-calculator" },
  { title: "Reverse Text", description: "Reverse characters, words, or sentences instantly.", icon: ArrowRightLeft, href: "/text/reverse-text" },
  { title: "Sort Lines", description: "Sort text alphabetically, numerically, or randomize.", icon: SortAsc, href: "/text/sort-lines" },
];

export function TextToolSearch() {
  const [query, setQuery] = React.useState("");

  const filteredTools = React.useMemo(() => {
    if (!query) return tools;
    const lowerQ = query.toLowerCase();
    return tools.filter(
      t => t.title.toLowerCase().includes(lowerQ) || t.description.toLowerCase().includes(lowerQ)
    );
  }, [query]);

  return (
    <div>
      <div className="relative max-w-2xl mx-auto mb-12">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="w-5 h-5 text-text/40" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search text tools (e.g. word, sort, case)..."
          className="w-full pl-12 pr-4 py-4 rounded-full border border-border bg-surface text-lg focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredTools.length > 0 ? (
          filteredTools.map((tool) => (
            <div key={tool.title} className="relative">
              {tool.isPopular && (
                <span className="absolute -top-3 -right-2 z-10 px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-red-500 text-white rounded-full shadow-sm">
                  Popular
                </span>
              )}
              <ToolCard 
                title={tool.title}
                description={tool.description}
                icon={tool.icon}
                href={tool.href}
                isComingSoon={false}
              />
            </div>
          ))
        ) : (
          <div className="col-span-full py-12 text-center text-text/60">
            No text tools found matching "{query}".
          </div>
        )}
      </div>
    </div>
  );
}
