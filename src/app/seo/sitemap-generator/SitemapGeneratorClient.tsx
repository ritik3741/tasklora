"use client";

import React, { useState } from 'react';
import { CodeBlock } from '@/components/tools/CodeBlock';

export default function SitemapGeneratorClient() {
  const [domain, setDomain] = useState('');
  const [urls, setUrls] = useState('');
  const [priority, setPriority] = useState('0.5');
  const [changeFreq, setChangeFreq] = useState('monthly');
  const [xmlOutput, setXmlOutput] = useState('');

  const generateSitemap = () => {
    const urlList = urls.split('\n').map(u => u.trim()).filter(u => u.length > 0);
    
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

    const baseDomain = domain.trim().replace(/\/$/, '');

    urlList.forEach(urlPath => {
      let finalUrl = urlPath;
      if (baseDomain && !urlPath.startsWith('http')) {
        finalUrl = `${baseDomain}/${urlPath.replace(/^\//, '')}`;
      }

      xml += `  <url>\n`;
      xml += `    <loc>${finalUrl}</loc>\n`;
      
      const today = new Date().toISOString().split('T')[0];
      xml += `    <lastmod>${today}</lastmod>\n`;
      
      if (changeFreq !== 'none') {
        xml += `    <changefreq>${changeFreq}</changefreq>\n`;
      }
      
      if (priority !== 'none') {
        xml += `    <priority>${priority}</priority>\n`;
      }
      
      xml += `  </url>\n`;
    });

    xml += `</urlset>`;
    setXmlOutput(xml);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Sitemap Configuration</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Domain (Optional, for absolute URLs)</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://example.com"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">URLs (One per line)</label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[150px]"
              placeholder="/\n/about\n/contact"
              value={urls}
              onChange={(e) => setUrls(e.target.value)}
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Default Priority</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="none">None</option>
                <option value="0.1">0.1</option>
                <option value="0.2">0.2</option>
                <option value="0.3">0.3</option>
                <option value="0.4">0.4</option>
                <option value="0.5">0.5</option>
                <option value="0.6">0.6</option>
                <option value="0.7">0.7</option>
                <option value="0.8">0.8</option>
                <option value="0.9">0.9</option>
                <option value="1.0">1.0</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Default Change Frequency</label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={changeFreq}
                onChange={(e) => setChangeFreq(e.target.value)}
              >
                <option value="none">None</option>
                <option value="always">Always</option>
                <option value="hourly">Hourly</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
                <option value="never">Never</option>
              </select>
            </div>
          </div>

          <button
            onClick={generateSitemap}
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Generate Sitemap
          </button>
        </div>
      </div>

      {xmlOutput && (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Generated sitemap.xml</h2>
          <CodeBlock code={xmlOutput} language="xml" fileName="sitemap.xml" />
        </div>
      )}
    </div>
  );
}
