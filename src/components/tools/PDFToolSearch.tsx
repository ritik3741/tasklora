"use client";

import * as React from "react";
import { ToolCard } from "@/components/ui/ToolCard";
import { Search, type LucideIcon } from "lucide-react";

import { 
  FileDown, Layers, SplitSquareHorizontal, RefreshCw, 
  ListOrdered, FileOutput, Baseline, Tags
} from "lucide-react";

interface PDFTool {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  isPopular?: boolean;
}

const tools: PDFTool[] = [
  { title: "PDF Compressor", description: "Reduce PDF file size without losing quality.", icon: FileDown, href: "/pdf/pdf-compressor", isPopular: true },
  { title: "Merge PDF", description: "Combine multiple PDF files into one document.", icon: Layers, href: "/pdf/merge-pdf", isPopular: true },
  { title: "Split PDF", description: "Extract pages from your PDF or split it into pieces.", icon: SplitSquareHorizontal, href: "/pdf/split-pdf" },
  { title: "Rotate PDF", description: "Rotate PDF pages 90°, 180°, or 270° instantly.", icon: RefreshCw, href: "/pdf/rotate-pdf" },
  { title: "Reorder Pages", description: "Drag and drop to reorder or delete PDF pages.", icon: ListOrdered, href: "/pdf/reorder-pages" },
  { title: "Extract Pages", description: "Extract specific pages or ranges into a new PDF.", icon: FileOutput, href: "/pdf/extract-pages" },
  { title: "Add Page Numbers", description: "Add customizable page numbers to your PDFs.", icon: Baseline, href: "/pdf/add-page-numbers" },
  { title: "PDF Metadata Editor", description: "Edit PDF properties like author, title, and keywords.", icon: Tags, href: "/pdf/pdf-metadata-editor" },
];

export function PDFToolSearch() {
  const [query, setQuery] = React.useState("");

  const filteredTools = React.useMemo(() => {
    if (!query) return tools;
    const lowerQ = query.toLowerCase();
    return tools.filter(
      t => t.title.toLowerCase().includes(lowerQ) || t.description.toLowerCase().includes(lowerQ)
    );
  }, [query, tools]);

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
          placeholder="Search PDF tools (e.g. merge, compress, split)..."
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
            No PDF tools found matching "{query}".
          </div>
        )}
      </div>
    </div>
  );
}
