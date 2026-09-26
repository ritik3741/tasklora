"use client";

import React, { useState, useMemo } from 'react';
import { TextEditor } from '@/components/tools/TextEditor';
import { StatsPanel, StatItem } from '@/components/tools/StatsPanel';
import { CopyButton } from '@/components/tools/CopyButton';
import { DownloadButton } from '@/components/tools/DownloadButton';

export function LineCounterClient() {
  const [input, setInput] = useState("");

  const stats = useMemo<StatItem[]>(() => {
    if (!input) {
      return [
        { label: "Total Lines", value: 0, highlight: true },
        { label: "Non-Empty Lines", value: 0 },
        { label: "Empty Lines", value: 0 },
        { label: "Longest Line", value: 0 },
        { label: "Shortest Line", value: 0 }
      ];
    }

    const lines = input.split('\n');
    const totalLines = lines.length;
    
    let emptyLines = 0;
    let nonEmptyLines = 0;
    let longestLine = 0;
    let shortestLine = Number.MAX_SAFE_INTEGER;

    lines.forEach(line => {
      if (line.trim().length === 0) {
        emptyLines++;
      } else {
        nonEmptyLines++;
      }
      
      const len = line.length;
      if (len > longestLine) longestLine = len;
      if (len < shortestLine) shortestLine = len;
    });

    if (shortestLine === Number.MAX_SAFE_INTEGER) shortestLine = 0;

    return [
      { label: "Total Lines", value: totalLines, highlight: true },
      { label: "Non-Empty Lines", value: nonEmptyLines },
      { label: "Empty Lines", value: emptyLines },
      { label: "Longest Line", value: longestLine },
      { label: "Shortest Line", value: shortestLine }
    ];
  }, [input]);

  return (
    <div className="space-y-6">
      <StatsPanel stats={stats} />

      <div className="bg-surface border border-border rounded-xl p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Your Text</h3>
          <div className="flex space-x-2">
            <CopyButton text={input} variant="outline" />
            <DownloadButton content={input} filename="text-file.txt" variant="outline" />
          </div>
        </div>
        <TextEditor
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste your text here to count lines..."
          className="min-h-[400px]"
        />
      </div>
    </div>
  );
}
