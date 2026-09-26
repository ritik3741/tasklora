"use client";

import * as React from "react";
import { ToolCard } from "@/components/ui/ToolCard";
import { Search, type LucideIcon } from "lucide-react";
import { 
  Tags, SearchCode, MessageCircle, FileJson, Link,
  LayoutList, FileText, Hash, Link2, Key
} from "lucide-react";

interface SEOTool {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  isPopular?: boolean;
}

const tools: SEOTool[] = [
  { title: "Meta Tag Generator", description: "Generate comprehensive HTML meta tags for your website.", icon: Tags, href: "/seo/meta-tag-generator", isPopular: true },
  { title: "Open Graph Generator", description: "Create Facebook and social media Open Graph tags.", icon: SearchCode, href: "/seo/open-graph-generator", isPopular: true },
  { title: "Twitter Card Generator", description: "Design customized Twitter preview cards.", icon: MessageCircle, href: "/seo/twitter-card-generator" },
  { title: "Robots.txt Generator", description: "Create valid robots.txt files for search engine crawlers.", icon: FileText, href: "/seo/robots-generator" },
  { title: "XML Sitemap Generator", description: "Generate valid XML sitemaps for Google and Bing.", icon: LayoutList, href: "/seo/sitemap-generator", isPopular: true },
  { title: "Canonical URL Generator", description: "Create canonical tags to prevent duplicate content.", icon: Link2, href: "/seo/canonical-generator" },
  { title: "FAQ Schema Generator", description: "Generate valid JSON-LD schema for FAQ pages.", icon: FileJson, href: "/seo/faq-schema-generator" },
  { title: "Breadcrumb Schema", description: "Create BreadcrumbList schema for better navigation.", icon: Link, href: "/seo/breadcrumb-schema-generator" },
  { title: "Keyword Density Checker", description: "Analyze keyword frequency and content density.", icon: Key, href: "/seo/keyword-density-checker", isPopular: true },
  { title: "Slug Generator", description: "Create SEO-friendly URL slugs from your titles.", icon: Hash, href: "/seo/slug-generator" },
];

export function SEOToolSearch() {
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
          placeholder="Search SEO tools (e.g. meta, schema, sitemap)..."
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
            No SEO tools found matching "{query}".
          </div>
        )}
      </div>
    </div>
  );
}
