import React from 'react';
import { CopyButton } from './CopyButton';
import { DownloadButton } from './DownloadButton';
import { cn } from '@/lib/utils';

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
  fileName?: string;
}

export function CodeBlock({ code, language = 'html', className, fileName = 'code.html' }: CodeBlockProps) {
  return (
    <div className={cn("rounded-xl overflow-hidden border border-border bg-[#0d1117]", className)}>
      <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-border/50">
        <span className="text-xs font-mono text-gray-400">{language.toUpperCase()}</span>
        <div className="flex gap-2">
          <CopyButton text={code} />
          <DownloadButton 
            content={code} 
            filename={fileName} 
            mimeType="text/plain" 
          />
        </div>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm font-mono text-gray-300 leading-relaxed">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
