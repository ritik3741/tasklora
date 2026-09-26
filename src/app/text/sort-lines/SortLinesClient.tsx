"use client";

import React, { useState, useMemo } from 'react';
import { TextEditor } from '@/components/tools/TextEditor';
import { CopyButton } from '@/components/tools/CopyButton';
import { DownloadButton } from '@/components/tools/DownloadButton';

type SortOrder = "az" | "za" | "num-asc" | "num-desc" | "random";

const shuffleArray = (array: string[]) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export function SortLinesClient() {
  const [input, setInput] = useState("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("az");
  const [removeDuplicates, setRemoveDuplicates] = useState(false);
  const [ignoreCase, setIgnoreCase] = useState(true);

  const output = useMemo(() => {
    if (!input) return "";
    
    let lines = input.split('\n');

    if (removeDuplicates) {
      if (ignoreCase) {
        const seen = new Set<string>();
        lines = lines.filter(line => {
          const lower = line.toLowerCase();
          if (seen.has(lower)) return false;
          seen.add(lower);
          return true;
        });
      } else {
        lines = Array.from(new Set(lines));
      }
    }

    if (sortOrder === "random") {
      return shuffleArray(lines).join('\n');
    }

    lines.sort((a, b) => {
      const valA = ignoreCase ? a.toLowerCase() : a;
      const valB = ignoreCase ? b.toLowerCase() : b;

      if (sortOrder === "num-asc" || sortOrder === "num-desc") {
        const numA = parseFloat(valA.match(/-?\d+(\.\d+)?/)?.[0] || "0");
        const numB = parseFloat(valB.match(/-?\d+(\.\d+)?/)?.[0] || "0");
        
        const isNumA = !isNaN(numA);
        const isNumB = !isNaN(numB);

        if (isNumA && isNumB && numA !== numB) {
          return sortOrder === "num-asc" ? numA - numB : numB - numA;
        } else if (isNumA && !isNumB) {
          return sortOrder === "num-asc" ? -1 : 1;
        } else if (!isNumA && isNumB) {
          return sortOrder === "num-asc" ? 1 : -1;
        }
      }

      if (valA < valB) return sortOrder === "az" || sortOrder === "num-asc" ? -1 : 1;
      if (valA > valB) return sortOrder === "az" || sortOrder === "num-asc" ? 1 : -1;
      return 0;
    });

    return lines.join('\n');
  }, [input, sortOrder, removeDuplicates, ignoreCase]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 p-4 bg-card rounded-xl border border-border">
        
        <div className="flex flex-wrap gap-4 items-center">
          <span className="font-semibold text-sm">Sort Order:</span>
          <label className="flex items-center gap-2 cursor-pointer text-sm">
            <input type="radio" name="sort-order" value="az" checked={sortOrder === "az"} onChange={() => setSortOrder("az")} className="w-4 h-4 text-primary" />
            Alphabetical (A-Z)
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-sm">
            <input type="radio" name="sort-order" value="za" checked={sortOrder === "za"} onChange={() => setSortOrder("za")} className="w-4 h-4 text-primary" />
            Alphabetical (Z-A)
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-sm">
            <input type="radio" name="sort-order" value="num-asc" checked={sortOrder === "num-asc"} onChange={() => setSortOrder("num-asc")} className="w-4 h-4 text-primary" />
            Numerical (Low-High)
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-sm">
            <input type="radio" name="sort-order" value="num-desc" checked={sortOrder === "num-desc"} onChange={() => setSortOrder("num-desc")} className="w-4 h-4 text-primary" />
            Numerical (High-Low)
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-sm">
            <input type="radio" name="sort-order" value="random" checked={sortOrder === "random"} onChange={() => setSortOrder("random")} className="w-4 h-4 text-primary" />
            Random Shuffle
          </label>
        </div>

        <div className="flex flex-wrap gap-6 items-center pt-2 border-t border-border">
          <span className="font-semibold text-sm">Options:</span>
          <label className="flex items-center gap-2 cursor-pointer text-sm">
            <input type="checkbox" checked={removeDuplicates} onChange={(e) => setRemoveDuplicates(e.target.checked)} className="w-4 h-4 text-primary rounded" />
            Remove Duplicates
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-sm">
            <input type="checkbox" checked={ignoreCase} onChange={(e) => setIgnoreCase(e.target.checked)} className="w-4 h-4 text-primary rounded" />
            Ignore Case
          </label>
        </div>

      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <TextEditor
            label="Input List"
            placeholder="Paste your lines of text here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="space-y-4">
          <TextEditor
            label="Sorted List"
            placeholder="Sorted lines will appear here..."
            value={output}
            readOnly
          />
          <div className="flex gap-2 justify-end">
            <CopyButton text={output} />
            <DownloadButton content={output} filename="sorted-lines.txt" />
          </div>
        </div>
      </div>
    </div>
  );
}
