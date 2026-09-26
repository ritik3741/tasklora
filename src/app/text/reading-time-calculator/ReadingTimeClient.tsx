"use client";

import React, { useState, useEffect } from 'react';
import { TextEditor } from '@/components/tools/TextEditor';
import { StatsPanel } from '@/components/tools/StatsPanel';

function estimateReadingLevel(text: string) {
  if (!text.trim()) return 'N/A';
  
  const words = text.match(/\b[-?(\w+)?]+\b/gi) || [];
  const sentences = text.split(/[.?!]+/).filter(Boolean);
  const syllables = words.reduce((count, word) => {
    word = word.toLowerCase();
    if (word.length <= 3) return count + 1;
    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
    word = word.replace(/^y/, '');
    const syll = word.match(/[aeiouy]{1,2}/g);
    return count + (syll ? syll.length : 1);
  }, 0);

  if (words.length === 0 || sentences.length === 0) return 'N/A';

  // Flesch-Kincaid Grade Level
  const gradeLevel = 0.39 * (words.length / sentences.length) + 11.8 * (syllables / words.length) - 15.59;
  
  if (gradeLevel < 6) return 'Easy (5th Grade)';
  if (gradeLevel < 8) return 'Average (8th Grade)';
  if (gradeLevel < 10) return 'Intermediate (10th Grade)';
  if (gradeLevel < 12) return 'High School (12th Grade)';
  return 'College Level';
}

export default function ReadingTimeClient() {
  const [text, setText] = useState('');
  const [wpm, setWpm] = useState(250);
  
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const readingTimeMins = Math.ceil(words / wpm) || 0;
  const speakingTimeMins = Math.ceil(words / 130) || 0; // standard speaking rate
  const level = estimateReadingLevel(text);

  return (
    <div className="space-y-6">
      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="block text-sm font-medium">Input Text</label>
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600">Reading Speed (WPM):</label>
            <select 
              value={wpm} 
              onChange={(e) => setWpm(Number(e.target.value))}
              className="border rounded p-1 text-sm"
            >
              <option value="200">200 (Slow)</option>
              <option value="250">250 (Average)</option>
              <option value="300">300 (Fast)</option>
            </select>
          </div>
        </div>
        <TextEditor
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste your article or text here to calculate reading time..."
          className="h-64"
        />
      </div>

      <StatsPanel
        stats={[
          { label: 'Word Count', value: words, highlight: false },
          { label: 'Reading Time', value: `${readingTimeMins} min`, highlight: true },
          { label: 'Speaking Time', value: `${speakingTimeMins} min`, highlight: false },
          { label: 'Reading Level', value: level, highlight: false },
        ]}
      />
    </div>
  );
}
