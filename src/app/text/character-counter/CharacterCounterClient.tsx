"use client";

import React, { useState, useMemo } from 'react';
import { TextEditor } from '@/components/tools/TextEditor';
import { StatsPanel } from '@/components/tools/StatsPanel';
import { CopyButton } from '@/components/tools/CopyButton';
import { DownloadButton } from '@/components/tools/DownloadButton';

export default function CharacterCounterClient() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const chars = text.length;
    const charsNoSpaces = text.replace(/\s+/g, '').length;
    const bytes = new Blob([text]).size;

    return [
      { label: "Characters", value: chars, highlight: true },
      { label: "Without Spaces", value: charsNoSpaces, highlight: true },
      { label: "Bytes (UTF-8)", value: bytes },
    ];
  }, [text]);

  return (
    <div className="space-y-6">
      <StatsPanel stats={stats} />
      
      <div className="relative">
        <TextEditor 
          value={text} 
          onChange={(e) => setText(e.target.value)}
          placeholder="Type or paste your text here to count characters and bytes..."
          className="min-h-[300px]"
        />
      </div>

      <div className="flex flex-wrap gap-2 justify-end">
        <CopyButton text={text} />
        <DownloadButton content={text} filename="character-count.txt" />
        <button 
          onClick={() => setText("")}
          className="px-4 py-2 text-sm font-medium border border-border rounded-md hover:bg-surface text-text transition-colors"
        >
          Clear
        </button>
      </div>
    </div>
  );
}
