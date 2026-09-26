'use client';

import React, { useState } from 'react';
import { TextEditor } from '@/components/tools/TextEditor';
import { CopyButton } from '@/components/tools/CopyButton';
import { DownloadButton } from '@/components/tools/DownloadButton';

export default function CaseConverterClient() {
  const [inputText, setInputText] = useState('');

  const toSentenceCase = (str: string) => {
    return str.replace(/(^\s*\w|[\.\!\?]\s*\w)/g, (c) => c.toUpperCase());
  };

  const toTitleCase = (str: string) => {
    return str.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  const toCapitalizeEachWord = (str: string) => {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const toToggleCase = (str: string) => {
    return str.split('').map(c => {
      return c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();
    }).join('');
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button onClick={() => setInputText(toSentenceCase(inputText))} className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:opacity-90">Sentence case</button>
        <button onClick={() => setInputText(inputText.toLowerCase())} className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:opacity-90">lowercase</button>
        <button onClick={() => setInputText(inputText.toUpperCase())} className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:opacity-90">UPPERCASE</button>
        <button onClick={() => setInputText(toCapitalizeEachWord(inputText))} className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:opacity-90">Capitalize Each Word</button>
        <button onClick={() => setInputText(toToggleCase(inputText))} className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:opacity-90">tOGGLE cASE</button>
        <button onClick={() => setInputText(toTitleCase(inputText))} className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:opacity-90">Title Case</button>
      </div>

      <TextEditor
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Type or paste your text here..."
      />

      <div className="flex gap-4">
        <CopyButton text={inputText} />
        <DownloadButton content={inputText} filename="converted-text.txt" />
      </div>
    </div>
  );
}
