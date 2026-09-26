"use client";

import React, { useEffect, useState } from "react";
import { ToolCard } from "@/components/ui/ToolCard";

interface RelatedToolsProps {
  currentPath: string;
}

interface ToolIndexItem {
  title: string;
  description: string;
  url: string;
  category: string;
}

export function RelatedTools({ currentPath }: RelatedToolsProps) {
  const [related, setRelated] = useState<ToolIndexItem[]>([]);
  const [visited, setVisited] = useState<ToolIndexItem[]>([]);

  useEffect(() => {
    // 1. Fetch search index
    fetch("/search-index.json")
      .then(res => res.json())
      .then((tools: ToolIndexItem[]) => {
        // Track current visit
        const currentTool = tools.find(t => t.url === currentPath);
        
        try {
          const stored = JSON.parse(localStorage.getItem("tasklora_visited") || "[]") as string[];
          let newVisited = [...stored];
          
          if (currentTool) {
            newVisited = stored.filter(url => url !== currentPath);
            newVisited.unshift(currentPath);
            if (newVisited.length > 5) newVisited.pop();
            localStorage.setItem("tasklora_visited", JSON.stringify(newVisited));
          }

          // Generate related list
          const currentCategory = currentTool?.category || "";
          
          // Same category
          let pool = tools.filter(t => t.category === currentCategory && t.url !== currentPath);
          
          // If not enough, add other categories
          if (pool.length < 6) {
            pool = [...pool, ...tools.filter(t => t.category !== currentCategory && t.url !== currentPath)];
          }

          setRelated(pool.slice(0, 6));

          // Map visited URLs to tool objects
          const visitedTools = newVisited
            .filter(url => url !== currentPath)
            .map(url => tools.find(t => t.url === url))
            .filter(Boolean) as ToolIndexItem[];
            
          setVisited(visitedTools);

        } catch (e) {
          console.error("RelatedTools error", e);
        }
      });
  }, [currentPath]);

  if (related.length === 0) return null;

  return (
    <div className="my-16 space-y-12">
      {visited.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-6 text-text">Recently Visited</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visited.map((tool) => (
              <ToolCard key={`visited-${tool.url}`} title={tool.title} description={tool.description} href={tool.url} />
            ))}
          </div>
        </div>
      )}
      
      <div>
        <h2 className="text-2xl font-bold mb-6 text-text">Related Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((tool) => (
            <ToolCard key={`related-${tool.url}`} title={tool.title} description={tool.description} href={tool.url} />
          ))}
        </div>
      </div>
    </div>
  );
}
