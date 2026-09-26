"use client";

import React, { useState } from "react";
import { CodeEditor } from "@/components/tools/CodeEditor";
import { CopyButton } from "@/components/tools/CopyButton";
import { DownloadButton } from "@/components/tools/DownloadButton";

export function JsonFormatterClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [indent, setIndent] = useState<string>("2");
  const [error, setError] = useState<string>("");

  const formatJson = () => {
    if (!input.trim()) {
      setOutput("");
      setError("");
      return;
    }
    try {
      const parsed = JSON.parse(input);
      let space = 2;
      if (indent === "4") space = 4;
      if (indent === "tab") space = "\t" as any;
      const formatted = JSON.stringify(parsed, null, space);
      setOutput(formatted);
      setError("");
      import("@/lib/analytics").then((m) => m.trackJsonFormat("format"));
    } catch (e: any) {
      import("@/lib/logger").then((m) => m.logger.parseError("JSON", e));
      setError(e.message || "Invalid JSON");
      setOutput("");
    }
  };

  const minifyJson = () => {
    if (!input.trim()) {
      setOutput("");
      setError("");
      return;
    }
    try {
      const parsed = JSON.parse(input);
      const minified = JSON.stringify(parsed);
      setOutput(minified);
      setError("");
      import("@/lib/analytics").then((m) => m.trackJsonFormat("minify"));
    } catch (e: any) {
      import("@/lib/logger").then((m) => m.logger.parseError("JSON", e));
      setError(e.message || "Invalid JSON");
      setOutput("");
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 flex flex-col gap-2">
          <CodeEditor
            label="Input JSON"
            placeholder="Paste your JSON here..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            error={error}
          />
          <div className="flex flex-wrap gap-2 items-center mt-2">
            <select
              className="bg-surface/50 border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 text-text"
              value={indent}
              onChange={(e) => setIndent(e.target.value)}
            >
              <option value="2">2 Spaces</option>
              <option value="4">4 Spaces</option>
              <option value="tab">Tabs</option>
            </select>
            <button
              onClick={formatJson}
              className="px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors"
            >
              Format / Prettify
            </button>
            <button
              onClick={minifyJson}
              className="px-4 py-2 bg-secondary text-secondary-foreground font-semibold rounded-md hover:bg-secondary/90 transition-colors"
            >
              Minify
            </button>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-2">
          <CodeEditor
            label="Output JSON"
            placeholder="Result will appear here..."
            value={output}
            readOnly
            className="bg-surface/30"
          />
          <div className="flex flex-wrap gap-2 mt-2">
            <CopyButton text={output} variant="outline" />
            <DownloadButton content={output} filename="formatted.json" mimeType="application/json" variant="outline" />
          </div>
        </div>
      </div>
    </div>
  );
}
