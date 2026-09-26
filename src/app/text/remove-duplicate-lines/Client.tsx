'use client';

import React, { useState, useMemo } from 'react';
import { TextEditor } from '@/components/tools/TextEditor';
import { CopyButton } from '@/components/tools/CopyButton';
import { DownloadButton } from '@/components/tools/DownloadButton';

export default function RemoveDuplicateLinesClient() {
  const [inputText, setInputText] = useState('');
  const [preserveOrder, setPreserveOrder] = useState(true);
  const [caseSensitive, setCaseSensitive] = useState(true);
  
  const [removedCount, setRemovedCount] = useState(0);

  const handleRemoveDuplicates = () => {
    const lines = inputText.split('\n');
    let uniqueLines: string[] = [];
    let count = 0;
    
    if (preserveOrder) {
      const seen = new Set<string>();
      for (const line of lines) {
        const checkLine = caseSensitive ? line : line.toLowerCase();
        if (!seen.has(checkLine)) {
          seen.add(checkLine);
          uniqueLines.push(line);
        } else {
          count++;
        }
      }
    } else {
      // If order doesn't matter, we can just sort and remove or use a Set directly
      const seen = new Set<string>();
      for (const line of lines) {
        const checkLine = caseSensitive ? line : line.toLowerCase();
        if (!seen.has(checkLine)) {
          seen.add(checkLine);
          uniqueLines.push(line);
        } else {
          count++;
        }
      }
      uniqueLines.sort();
    }
    
    setInputText(uniqueLines.join('\n'));
    setRemovedCount(count);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-center bg-muted p-4 rounded-lg">
        <label className="flex items-center gap-2 cursor-pointer">
          <input 
            type="checkbox" 
            checked={preserveOrder} 
            onChange={(e) => setPreserveOrder(e.target.checked)} 
            className="w-4 h-4 rounded text-primary focus:ring-primary"
          />
          <span className="text-sm font-medium">Preserve Order</span>
        </label>
        
        <label className="flex items-center gap-2 cursor-pointer">
          <input 
            type="checkbox" 
            checked={caseSensitive} 
            onChange={(e) => setCaseSensitive(e.target.checked)} 
            className="w-4 h-4 rounded text-primary focus:ring-primary"
          />
          <span className="text-sm font-medium">Case Sensitive</span>
        </label>

        <button 
          onClick={handleRemoveDuplicates}
          className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:opacity-90 ml-auto w-full md:w-auto"
        >
          Remove Duplicates
        </button>
      </div>
      
      {removedCount > 0 && (
        <div className="text-sm text-green-600 font-medium">
          Successfully removed {removedCount} duplicate {removedCount === 1 ? 'line' : 'lines'}.
        </div>
      )}

      <TextEditor
        value={inputText}
        onChange={(e) => { setInputText(e.target.value);
          setRemovedCount(0);
        }}
        placeholder="Paste your list of lines here..."
      />

      <div className="flex gap-4">
        <CopyButton text={inputText} />
        <DownloadButton content={inputText} filename="unique-lines.txt" />
      </div>
    </div>
  );
}
