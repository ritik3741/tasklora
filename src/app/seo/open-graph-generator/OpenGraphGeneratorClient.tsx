'use client';

import React, { useState } from 'react';
import { CodeBlock } from '@/components/tools/CodeBlock';

export default function OpenGraphGeneratorClient() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [siteName, setSiteName] = useState('');
  const [type, setType] = useState('website');

  const generateCode = () => {
    let code = '';
    if (title) code += `<meta property="og:title" content="${title}">\n`;
    if (description) code += `<meta property="og:description" content="${description}">\n`;
    if (url) code += `<meta property="og:url" content="${url}">\n`;
    if (imageUrl) code += `<meta property="og:image" content="${imageUrl}">\n`;
    if (siteName) code += `<meta property="og:site_name" content="${siteName}">\n`;
    if (type) code += `<meta property="og:type" content="${type}">\n`;
    
    return code;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
        <div>
          <label className="block text-sm font-medium mb-1">OG Title</label>
          <input
            type="text"
            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 focus:ring focus:ring-blue-500 focus:border-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title of your content"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">OG Description</label>
          <textarea
            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 focus:ring focus:ring-blue-500 focus:border-blue-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="A brief description of your content"
            rows={3}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Canonical URL</label>
          <input
            type="url"
            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 focus:ring focus:ring-blue-500 focus:border-blue-500"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com/page"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Image URL</label>
          <input
            type="url"
            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 focus:ring focus:ring-blue-500 focus:border-blue-500"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="https://example.com/image.jpg"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Site Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 focus:ring focus:ring-blue-500 focus:border-blue-500"
            value={siteName}
            onChange={(e) => setSiteName(e.target.value)}
            placeholder="Your Website Name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Type</label>
          <select
            className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 focus:ring focus:ring-blue-500 focus:border-blue-500"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="website">website</option>
            <option value="article">article</option>
            <option value="profile">profile</option>
            <option value="book">book</option>
            <option value="video.movie">video.movie</option>
          </select>
        </div>
      </div>
      
      <div className="space-y-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Generated HTML</h3>
          <CodeBlock code={generateCode()} language="html" />
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Social Media Preview</h3>
          <div className="border border-gray-300 dark:border-gray-600 rounded overflow-hidden max-w-[500px] bg-[#f0f2f5] dark:bg-gray-900">
            {imageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={imageUrl} alt="Preview" className="w-full h-auto aspect-video object-cover bg-gray-200" />
            ) : (
              <div className="w-full aspect-video bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-500">
                No image provided
              </div>
            )}
            <div className="p-3 bg-[#f0f2f5] dark:bg-gray-800">
              <div className="text-xs text-gray-500 uppercase mb-1 truncate">
                {url ? (url.startsWith('http') ? new URL(url).hostname : url) : 'example.com'}
              </div>
              <div className="font-semibold text-gray-900 dark:text-gray-100 text-sm mb-1 line-clamp-2">
                {title || 'Example Open Graph Title'}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1">
                {description || 'This is an example description of your Open Graph preview card.'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
