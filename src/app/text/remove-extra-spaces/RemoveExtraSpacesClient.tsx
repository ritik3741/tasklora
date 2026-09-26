"use client";

import React, { useState, useMemo } from 'react';
import { TextEditor } from '@/components/tools/TextEditor';
import { CopyButton } from '@/components/tools/CopyButton';
import { DownloadButton } from '@/components/tools/DownloadButton';

export function RemoveExtraSpacesClient() {
  const [input, setInput] = useState("");
  const [trimLines, setTrimLines] = useState(true);
  const [removeDoubleSpaces, setRemoveDoubleSpaces] = useState(true);
  const [removeBlankLines, setRemoveBlankLines] = useState(true);
  const [normalizeWhitespace, setNormalizeWhitespace] = useState(false);

  const output = useMemo(() => {
    let result = input;

    if (normalizeWhitespace) {
      // Replaces all whitespace characters (including newlines and tabs) with a single space
      result = result.replace(/\s+/g, ' ').trim();
    } else {
      let lines = result.split('\n');

      if (trimLines) {
        lines = lines.map(line => line.trim());
      }

      if (removeDoubleSpaces) {
        lines = lines.map(line => line.replace(/ {2,}/g, ' '));
      }

      if (removeBlankLines) {
        lines = lines.filter(line => line.length > 0);
      }

      result = lines.join('\n');
    }

    return result;
  }, [input, trimLines, removeDoubleSpaces, removeBlankLines, normalizeWhitespace]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Input Text</h3>
          <TextEditor
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste your text here to remove extra spaces..."
          />
        </div>
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">Cleaned Text</h3>
            <div className="flex space-x-2">
              <CopyButton text={output} variant="outline" />
              <DownloadButton content={output} filename="cleaned-text.txt" variant="outline" />
            </div>
          </div>
          <TextEditor
            value={output}
            readOnly
            placeholder="Cleaned text will appear here..."
          />
        </div>
      </div>

      <div className="p-4 rounded-xl border border-border bg-surface">
        <h4 className="font-semibold mb-4">Options</h4>
        <div className="flex flex-wrap gap-4">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={trimLines}
              onChange={(e) => {
                setTrimLines(e.target.checked);
                if (e.target.checked && normalizeWhitespace) setNormalizeWhitespace(false);
              }}
              className="rounded border-border text-primary focus:ring-primary"
            />
            <span>Trim Lines (Start & End)</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={removeDoubleSpaces}
              onChange={(e) => {
                setRemoveDoubleSpaces(e.target.checked);
                if (e.target.checked && normalizeWhitespace) setNormalizeWhitespace(false);
              }}
              className="rounded border-border text-primary focus:ring-primary"
            />
            <span>Remove Double Spaces</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={removeBlankLines}
              onChange={(e) => {
                setRemoveBlankLines(e.target.checked);
                if (e.target.checked && normalizeWhitespace) setNormalizeWhitespace(false);
              }}
              className="rounded border-border text-primary focus:ring-primary"
            />
            <span>Remove Blank Lines</span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={normalizeWhitespace}
              onChange={(e) => {
                setNormalizeWhitespace(e.target.checked);
                if (e.target.checked) {
                  setTrimLines(false);
                  setRemoveDoubleSpaces(false);
                  setRemoveBlankLines(false);
                }
              }}
              className="rounded border-border text-primary focus:ring-primary"
            />
            <span>Normalize All Whitespace (Removes Newlines)</span>
          </label>
        </div>
      </div>
    </div>
  );
}
