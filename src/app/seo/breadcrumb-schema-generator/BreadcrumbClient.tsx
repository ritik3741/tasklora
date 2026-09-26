"use client";

import React, { useState, useMemo } from "react";
import { CodeBlock } from "@/components/tools/CodeBlock";

export default function BreadcrumbClient() {
  const [breadcrumbs, setBreadcrumbs] = useState([
    { name: "Home", url: "https://example.com" },
    { name: "Category", url: "https://example.com/category" },
  ]);

  const addBreadcrumb = () => {
    setBreadcrumbs([...breadcrumbs, { name: "", url: "" }]);
  };

  const removeBreadcrumb = (index: number) => {
    setBreadcrumbs(breadcrumbs.filter((_, i) => i !== index));
  };

  const updateBreadcrumb = (index: number, field: "name" | "url", value: string) => {
    const newBreadcrumbs = [...breadcrumbs];
    newBreadcrumbs[index][field] = value;
    setBreadcrumbs(newBreadcrumbs);
  };

  const jsonLd = useMemo(() => {
    const validBreadcrumbs = breadcrumbs.filter((bc) => bc.name.trim() && bc.url.trim());
    
    if (validBreadcrumbs.length === 0) {
      return "{\n  \"//\": \"Add breadcrumb links to generate JSON-LD schema\"\n}";
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: validBreadcrumbs.map((bc, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: bc.name,
        item: bc.url,
      })),
    };

    return JSON.stringify(schema, null, 2);
  }, [breadcrumbs]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(jsonLd);
    alert("Copied to clipboard!");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">Breadcrumb Links</h2>
          <p className="text-sm text-gray-600 mb-4">
            Enter your breadcrumb hierarchy below, starting from the root (Home) down to the current page. The JSON-LD schema updates automatically.
          </p>
        </div>
        
        {breadcrumbs.map((bc, index) => (
          <div key={index} className="p-4 bg-gray-50 border rounded-lg space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-medium">Level {index + 1}</span>
              {breadcrumbs.length > 1 && (
                <button
                  onClick={() => removeBreadcrumb(index)}
                  className="text-red-600 text-sm hover:underline"
                >
                  Remove
                </button>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Page Name</label>
              <input
                type="text"
                value={bc.name}
                onChange={(e) => updateBreadcrumb(index, "name", e.target.value)}
                placeholder="e.g., Home"
                className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Page URL</label>
              <input
                type="url"
                value={bc.url}
                onChange={(e) => updateBreadcrumb(index, "url", e.target.value)}
                placeholder="e.g., https://example.com"
                className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        ))}
        
        <button
          onClick={addBreadcrumb}
          className="w-full py-2 bg-gray-100 hover:bg-gray-200 border border-gray-300 text-gray-800 font-medium rounded transition"
        >
          + Add Next Level
        </button>
      </div>
      
      <div className="space-y-4 h-full flex flex-col">
        <h2 className="text-xl font-semibold">Generated JSON-LD Schema</h2>
        <div className="flex-grow flex flex-col rounded-lg border overflow-hidden">
          <div className="bg-gray-800 text-gray-200 p-2 flex justify-between items-center text-sm">
            <span>JSON</span>
            <button 
              onClick={copyToClipboard}
              className="bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded transition"
            >
              Copy Code
            </button>
          </div>
          <div className="flex-grow overflow-auto bg-gray-900 p-4">
             <CodeBlock code={jsonLd} language="json" />
          </div>
        </div>
      </div>
    </div>
  );
}
