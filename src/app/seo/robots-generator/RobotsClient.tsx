"use client";

import React, { useState } from "react";
import { CodeBlock } from "@/components/tools/CodeBlock";

export function RobotsClient() {
  const [userAgent, setUserAgent] = useState("*");
  const [allowAll, setAllowAll] = useState(true);
  const [disallowPaths, setDisallowPaths] = useState("/cgi-bin/\n/wp-admin/\n/private/");
  const [sitemapUrl, setSitemapUrl] = useState("https://www.example.com/sitemap.xml");
  const [crawlDelay, setCrawlDelay] = useState("");

  const generateCode = () => {
    let output = `User-agent: ${userAgent}\n`;
    
    if (!allowAll) {
      output += `Disallow: /\n`;
    } else {
      const paths = disallowPaths
        .split('\n')
        .map(p => p.trim())
        .filter(p => p.length > 0);
        
      if (paths.length > 0) {
        paths.forEach(path => {
          output += `Disallow: ${path}\n`;
        });
      } else {
        output += `Disallow: \n`;
      }
    }

    if (crawlDelay) {
      output += `Crawl-delay: ${crawlDelay}\n`;
    }

    if (sitemapUrl) {
      output += `\nSitemap: ${sitemapUrl}\n`;
    }

    return output;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Form Section */}
      <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
        <h3 className="text-xl font-bold mb-4 text-text">Configuration</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text/80 mb-1">User-agent</label>
            <input 
              type="text" 
              value={userAgent} 
              onChange={(e) => setUserAgent(e.target.value)}
              className="w-full bg-background border border-border rounded-lg px-4 py-2 text-text focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="*"
            />
            <p className="text-xs text-text/50 mt-1">Default is * (all bots). E.g., Googlebot, Bingbot.</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-text/80 mb-2">Default Access</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="radio" 
                  checked={allowAll}
                  onChange={() => setAllowAll(true)}
                  className="w-4 h-4 text-primary focus:ring-primary bg-background border-border"
                />
                <span className="text-sm text-text">Allow All (Default)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="radio" 
                  checked={!allowAll}
                  onChange={() => setAllowAll(false)}
                  className="w-4 h-4 text-primary focus:ring-primary bg-background border-border"
                />
                <span className="text-sm text-text">Disallow All (Block Site)</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-text/80 mb-1">Disallow Paths (One per line)</label>
            <textarea 
              value={disallowPaths} 
              onChange={(e) => setDisallowPaths(e.target.value)}
              disabled={!allowAll}
              rows={4}
              className="w-full bg-background border border-border rounded-lg px-4 py-2 text-text focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50"
              placeholder="/private/&#10;/wp-admin/"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text/80 mb-1">Sitemap URL (Optional)</label>
            <input 
              type="text" 
              value={sitemapUrl} 
              onChange={(e) => setSitemapUrl(e.target.value)}
              className="w-full bg-background border border-border rounded-lg px-4 py-2 text-text focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="https://www.example.com/sitemap.xml"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text/80 mb-1">Crawl Delay (Optional)</label>
            <input 
              type="number" 
              value={crawlDelay} 
              onChange={(e) => setCrawlDelay(e.target.value)}
              min="0"
              className="w-full bg-background border border-border rounded-lg px-4 py-2 text-text focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="e.g., 10 (seconds)"
            />
          </div>
        </div>
      </div>

      {/* Code Section */}
      <div className="space-y-6">
        <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
          <h3 className="text-xl font-bold mb-4 text-text">Generated robots.txt</h3>
          <p className="text-sm text-text/70 mb-4">
            Copy the text below and save it as <code>robots.txt</code> in the root directory of your website.
          </p>
          <CodeBlock 
            code={generateCode()} 
            language="plaintext" 
            fileName="robots.txt"
          />
        </div>
      </div>
    </div>
  );
}
