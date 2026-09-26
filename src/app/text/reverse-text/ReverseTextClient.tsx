"use client";

import React, { useState, useMemo } from 'react';
import { TextEditor } from '@/components/tools/TextEditor';
import { CopyButton } from '@/components/tools/CopyButton';
import { DownloadButton } from '@/components/tools/DownloadButton';

export function ReverseTextClient() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<"chars" | "words" | "lines">("chars");

  const output = useMemo(() => {
    if (!input) return "";
    switch (mode) {
      case "chars":
        return input.split('').reverse().join('');
      case "words":
        return input.split(/(\s+)/).reverse().join('');
      case "lines":
        return input.split('\n').reverse().join('\n');
      default:
        return input;
    }
  }, [input, mode]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-4 items-center justify-center p-4 bg-card rounded-xl border border-border">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="reverse-mode"
            value="chars"
            checked={mode === "chars"}
            onChange={() => setMode("chars")}
            className="w-4 h-4 text-primary"
          />
          Reverse Characters
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="reverse-mode"
            value="words"
            checked={mode === "words"}
            onChange={() => setMode("words")}
            className="w-4 h-4 text-primary"
          />
          Reverse Words
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="reverse-mode"
            value="lines"
            checked={mode === "lines"}
            onChange={() => setMode("lines")}
            className="w-4 h-4 text-primary"
          />
          Reverse Lines
        </label>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <TextEditor
            label="Input Text"
            placeholder="Type or paste your text here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="space-y-4">
          <TextEditor
            label="Reversed Text"
            placeholder="Reversed result will appear here..."
            value={output}
            readOnly
          />
          <div className="flex gap-2 justify-end">
            <CopyButton text={output} />
            <DownloadButton content={output} filename="reversed-text.txt" />
          </div>
        </div>
      </div>
    </div>
  );
}
