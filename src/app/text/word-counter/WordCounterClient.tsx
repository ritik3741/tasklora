"use client";

import React, { useState, useMemo } from 'react';
import { TextEditor } from '@/components/tools/TextEditor';
import { StatsPanel } from '@/components/tools/StatsPanel';
import { CopyButton } from '@/components/tools/CopyButton';
import { DownloadButton } from '@/components/tools/DownloadButton';

export default function WordCounterClient() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const trimmedText = text.trim();
    const words = trimmedText ? trimmedText.split(/\s+/).length : 0;
    const chars = text.length;
    const charsNoSpaces = text.replace(/\s+/g, '').length;
    const paragraphs = trimmedText ? text.split(/\n+/).filter(p => p.trim().length > 0).length : 0;
    const sentences = trimmedText ? text.split(/[.!?]+/).filter(s => s.trim().length > 0).length : 0;
    const readingTime = Math.max(1, Math.ceil(words / 250));

    return [
      { label: "Words", value: words, highlight: true },
      { label: "Characters", value: chars, highlight: true },
      { label: "Without Spaces", value: charsNoSpaces },
      { label: "Paragraphs", value: paragraphs },
      { label: "Sentences", value: sentences },
      { label: "Reading Time", value: `${readingTime} min` },
    ];
  }, [text]);

  const keywordDensity = useMemo(() => {
    if (!text.trim()) return [];
    const wordsArr = text.toLowerCase().match(/\b\w+\b/g) || [];
    const counts: Record<string, number> = {};
    const total = wordsArr.length;
    if (total === 0) return [];
    
    wordsArr.forEach(w => { counts[w] = (counts[w] || 0) + 1; });
    
    const sorted = Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);
      
    return sorted.map(([word, count]) => ({
      word,
      count,
      percentage: ((count / total) * 100).toFixed(1)
    }));
  }, [text]);

  return (
    <div className="space-y-6">
      <StatsPanel stats={stats} />
      
      <div className="relative">
        <TextEditor 
          value={text} 
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste your text here to see word count and text statistics..."
          className="min-h-[300px]"
        />
      </div>

      <div className="flex flex-wrap gap-2 justify-end">
        <CopyButton text={text} />
        <DownloadButton content={text} filename="text-content.txt" />
        <button 
          onClick={() => setText("")}
          className="px-4 py-2 text-sm font-medium border border-border rounded-md hover:bg-surface text-text transition-colors"
        >
          Clear
        </button>
      </div>

      {keywordDensity.length > 0 && (
        <div className="mt-8 p-6 bg-surface border border-border rounded-xl">
          <h3 className="text-xl font-bold mb-4 text-text">Keyword Density</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border text-sm text-text/60">
                  <th className="pb-2 font-medium">Keyword</th>
                  <th className="pb-2 font-medium">Count</th>
                  <th className="pb-2 font-medium">Percentage</th>
                </tr>
              </thead>
              <tbody>
                {keywordDensity.map((item, i) => (
                  <tr key={i} className="border-b border-border/50 last:border-0">
                    <td className="py-2 text-text font-medium">{item.word}</td>
                    <td className="py-2 text-text/80">{item.count}</td>
                    <td className="py-2 text-text/80">{item.percentage}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
