"use client";

import React, { useState } from 'react';
import { CodeBlock } from '@/components/tools/CodeBlock';

export default function CanonicalGeneratorClient() {
  const [url, setUrl] = useState('');

  const canonicalTag = url ? `<link rel="canonical" href="${url.trim()}" />` : '';

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Generate Canonical Tag</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Target URL</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://example.com/preferred-page"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <p className="mt-2 text-sm text-gray-500">
              Enter the absolute URL of the primary version of your page.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Generated Canonical Tag</h2>
        {url ? (
          <div>
            <p className="text-sm text-gray-600 mb-3">
              Copy this tag and paste it into the <code>&lt;head&gt;</code> section of your HTML document.
            </p>
            <CodeBlock code={canonicalTag} language="html" />
          </div>
        ) : (
          <p className="text-gray-500 italic text-sm border border-dashed border-gray-300 rounded-md p-4 bg-gray-50 text-center">
            Enter a URL above to generate the canonical tag.
          </p>
        )}
      </div>
    </div>
  );
}
