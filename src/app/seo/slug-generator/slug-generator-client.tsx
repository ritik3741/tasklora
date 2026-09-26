"use client";

import React, { useState, useMemo } from 'react';
import { CodeBlock } from '@/components/tools/CodeBlock';

const stopWords = new Set(["a", "an", "and", "are", "as", "at", "be", "but", "by", "for", "if", "in", "into", "is", "it", "no", "not", "of", "on", "or", "such", "that", "the", "their", "then", "there", "these", "they", "this", "to", "was", "will", "with"]);

function generateSlug(text: string, removeStopWords: boolean): string {
  // Normalize unicode
  let slug = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  
  // Lowercase
  slug = slug.toLowerCase();
  
  // Replace symbols with spaces to simplify word extraction
  slug = slug.replace(/[^a-z0-9\s-]/g, '');
  
  if (removeStopWords) {
    const words = slug.split(/\s+/);
    slug = words.filter(word => !stopWords.has(word)).join(' ');
  }
  
  // Replace spaces and hyphens with single hyphen
  slug = slug.replace(/[\s-]+/g, '-');
  slug = slug.replace(/^-+|-+$/g, '');
  
  return slug;
}

export default function SlugGeneratorClient() {
  const [input, setInput] = useState('');
  const [removeStop, setRemoveStop] = useState(true);

  const slug = useMemo(() => {
    if (!input.trim()) return '';
    return generateSlug(input, removeStop);
  }, [input, removeStop]);

  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="title-input" className="block text-sm font-medium mb-2">Enter your title or text:</label>
        <input
          id="title-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-700"
          placeholder="e.g., How to Build a Next.js App in 2024!"
        />
      </div>

      <div className="flex items-center space-x-2">
        <input 
          type="checkbox" 
          id="remove-stopwords" 
          checked={removeStop}
          onChange={(e) => setRemoveStop(e.target.checked)}
          className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4"
        />
        <label htmlFor="remove-stopwords" className="text-sm cursor-pointer">Remove stop words (e.g., a, the, and)</label>
      </div>

      {slug && (
        <div className="pt-4">
          <p className="block text-sm font-medium mb-2">Generated URL Slug:</p>
          <CodeBlock code={slug} language="text" fileName="slug.txt" />
        </div>
      )}
    </div>
  );
}
