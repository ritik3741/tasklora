"use client";

import React, { useState, useEffect } from 'react';
import { TextEditor } from '@/components/tools/TextEditor';
import { StatsPanel } from '@/components/tools/StatsPanel';
import { CopyButton } from '@/components/tools/CopyButton';
import { DownloadButton } from '@/components/tools/DownloadButton';

const STOP_WORDS = new Set(['a', 'an', 'and', 'are', 'as', 'at', 'be', 'but', 'by', 'for', 'if', 'in', 'into', 'is', 'it', 'no', 'not', 'of', 'on', 'or', 'such', 'that', 'the', 'their', 'then', 'there', 'these', 'they', 'this', 'to', 'was', 'will', 'with']);

export default function SlugGeneratorClient() {
  const [text, setText] = useState('');
  const [slug, setSlug] = useState('');
  const [lowercase, setLowercase] = useState(true);
  const [removeStopWords, setRemoveStopWords] = useState(true);

  useEffect(() => {
    let newSlug = text;
    if (lowercase) {
      newSlug = newSlug.toLowerCase();
    }
    
    // Replace non-alphanumeric characters with spaces to tokenize
    newSlug = newSlug.replace(/[^a-zA-Z0-9\s-]/g, ' ');

    let words = newSlug.split(/\s+/).filter(Boolean);

    if (removeStopWords) {
      words = words.filter(word => !STOP_WORDS.has(word.toLowerCase()));
    }

    newSlug = words.join('-');
    setSlug(newSlug);
  }, [text, lowercase, removeStopWords]);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Input Title/Text</label>
          <TextEditor
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter your title or text here..."
            className="h-32"
          />
          
          <div className="mt-4 flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={lowercase}
                onChange={(e) => setLowercase(e.target.checked)}
                className="rounded border-gray-300"
              />
              <span className="text-sm">Lowercase</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={removeStopWords}
                onChange={(e) => setRemoveStopWords(e.target.checked)}
                className="rounded border-gray-300"
              />
              <span className="text-sm">Remove Stop Words</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Generated Slug</label>
          <div className="w-full h-32 p-3 border rounded bg-gray-50 overflow-auto break-all">
            {slug || 'your-slug-will-appear-here'}
          </div>
          
          <div className="mt-4 flex gap-2">
            <CopyButton text={slug} />
            <DownloadButton content={slug} filename="slug.txt" />
          </div>
        </div>
      </div>

      <StatsPanel
        stats={[
          { label: 'Words in Slug', value: slug ? slug.split('-').length : 0, highlight: false },
          { label: 'Characters', value: slug.length, highlight: slug.length > 50 },
        ]}
      />
    </div>
  );
}
