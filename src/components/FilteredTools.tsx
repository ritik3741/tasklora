"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { ToolCard } from "@/components/ui/ToolCard";
import { AdInline } from "@/components/ads/AdComponents";

interface ToolIndexItem {
  title: string;
  description: string;
  url: string;
  category: string;
  keywords: string[];
}

export function FilteredTools() {
  const searchParams = useSearchParams();
  const [query, setQuery] = React.useState(searchParams.get("q") || "");
  const [tools, setTools] = React.useState<ToolIndexItem[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("/search-index.json")
      .then((res) => res.json())
      .then((data) => {
        setTools(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  React.useEffect(() => {
    const handleSearchUpdated = () => {
      const urlParams = new URLSearchParams(window.location.search);
      setQuery(urlParams.get("q") || "");
    };
    
    handleSearchUpdated();
    window.addEventListener("search-updated", handleSearchUpdated);
    window.addEventListener("popstate", handleSearchUpdated);
    
    return () => {
      window.removeEventListener("search-updated", handleSearchUpdated);
      window.removeEventListener("popstate", handleSearchUpdated);
    };
  }, []);

  // Basic fuzzy search algorithm
  const fuzzyMatch = (str: string, pattern: string) => {
    let i = 0, j = 0;
    while (i < str.length && j < pattern.length) {
      if (str[i].toLowerCase() === pattern[j].toLowerCase()) j++;
      i++;
    }
    return j === pattern.length;
  };

  const filteredTools = React.useMemo(() => {
    if (!query) {
      const popularUrls = [
        "/developer/json-formatter",
        "/calculator/currency-converter",
        "/calculator/gst-calculator",
        "/pdf/pdf-compressor",
        "/text/word-counter",
        "/seo/meta-tag-generator",
        "/developer/uuid-generator",
        "/text/case-converter"
      ];
      return tools.filter(t => popularUrls.includes(t.url));
    }
    const lowerQ = query.toLowerCase();
    
    // Log search event
    import("@/lib/analytics").then(({ trackSearchPerformed }) => {
      trackSearchPerformed(lowerQ);
    });

    const results = tools.filter((t) => {
      // Exact substring matches first
      if (
        t.title.toLowerCase().includes(lowerQ) ||
        t.description.toLowerCase().includes(lowerQ) ||
        t.category.toLowerCase().includes(lowerQ) ||
        t.keywords?.some(k => k.toLowerCase().includes(lowerQ))
      ) {
        return true;
      }
      
      // Fallback to fuzzy match on title and keywords
      return fuzzyMatch(t.title, lowerQ) || t.keywords?.some(k => fuzzyMatch(k, lowerQ));
    });

    return results;
  }, [query, tools]);

  if (loading) {
    return <div className="h-64 flex items-center justify-center animate-pulse bg-surface/50 rounded-2xl">Loading tools...</div>;
  }

  if (query && filteredTools.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-xl text-text/60">No tools found matching &quot;{query}&quot;.</p>
        <button 
          onClick={() => {
            window.history.pushState(null, "", "/");
            window.dispatchEvent(new Event("search-updated"));
          }}
          className="mt-4 text-primary hover:underline font-medium"
        >
          Clear search
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredTools.slice(0, 8).map((tool) => (
          <ToolCard
            key={tool.url}
            title={tool.title}
            description={tool.description}
            href={tool.url}
          />
        ))}
      </div>
      
      {filteredTools.length > 8 && (
        <>
          <div className="my-8">
            <AdInline />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTools.slice(8).map((tool) => (
              <ToolCard
                key={tool.url}
                title={tool.title}
                description={tool.description}
                href={tool.url}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}
