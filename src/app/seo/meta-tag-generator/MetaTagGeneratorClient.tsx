'use client';

import React, { useState } from 'react';
import { CodeBlock } from '@/components/tools/CodeBlock';

export default function MetaTagGeneratorClient() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [keywords, setKeywords] = useState('');
  const [author, setAuthor] = useState('');
  const [robotsIndex, setRobotsIndex] = useState('index');
  const [robotsFollow, setRobotsFollow] = useState('follow');
  const [viewport, setViewport] = useState('width=device-width, initial-scale=1.0');

  const generateCode = () => {
    let code = '';
    if (title) code += `<title>${title}</title>\n`;
    if (description) code += `<meta name="description" content="${description}">\n`;
    if (keywords) code += `<meta name="keywords" content="${keywords}">\n`;
    if (author) code += `<meta name="author" content="${author}">\n`;
    code += `<meta name="robots" content="${robotsIndex}, ${robotsFollow}">\n`;
    if (viewport) code += `<meta name="viewport" content="${viewport}">\n`;
    
    return code;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
        <div>
          <label className="block text-sm font-medium mb-1">Page Title</label>
          <input
            type="text"
            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 focus:ring focus:ring-blue-500 focus:border-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Best SEO Tools 2026"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 focus:ring focus:ring-blue-500 focus:border-blue-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="A brief description of your page"
            rows={3}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Keywords (comma separated)</label>
          <input
            type="text"
            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 focus:ring focus:ring-blue-500 focus:border-blue-500"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="seo, tools, meta"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Author</label>
          <input
            type="text"
            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 focus:ring focus:ring-blue-500 focus:border-blue-500"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="John Doe"
          />
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Robots Index</label>
            <select
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 focus:ring focus:ring-blue-500 focus:border-blue-500"
              value={robotsIndex}
              onChange={(e) => setRobotsIndex(e.target.value)}
            >
              <option value="index">index (Default)</option>
              <option value="noindex">noindex</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium mb-1">Robots Follow</label>
            <select
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 focus:ring focus:ring-blue-500 focus:border-blue-500"
              value={robotsFollow}
              onChange={(e) => setRobotsFollow(e.target.value)}
            >
              <option value="follow">follow (Default)</option>
              <option value="nofollow">nofollow</option>
            </select>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Viewport</label>
          <input
            type="text"
            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 focus:ring focus:ring-blue-500 focus:border-blue-500"
            value={viewport}
            onChange={(e) => setViewport(e.target.value)}
            placeholder="width=device-width, initial-scale=1.0"
          />
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Generated HTML</h3>
          <CodeBlock code={generateCode()} language="html" />
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Google Search Preview</h3>
          <div className="p-4 border rounded bg-white max-w-[600px] font-sans">
            <div className="text-sm text-gray-800 flex items-center mb-1">
              <span className="truncate">https://example.com</span>
              <span className="mx-1">›</span>
              <span className="truncate">your-page</span>
            </div>
            <div className="text-xl text-[#1a0dab] hover:underline cursor-pointer truncate font-medium mb-1">
              {title || 'Example Page Title - Please Enter A Title'}
            </div>
            <div className="text-sm text-[#4d5156] line-clamp-2">
              {description || 'This is an example description of how your page might appear in Google search results. Add a description to preview it here.'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
