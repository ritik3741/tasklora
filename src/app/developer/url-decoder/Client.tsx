"use client";

import React, { useState } from "react";
import { CodeEditor } from "@/components/tools/CodeEditor";
import { CopyButton } from "@/components/tools/CopyButton";

export function UrlDecoderClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const handleDecode = (text: string) => {
    setInput(text);
    if (!text) {
      setOutput("");
      setError("");
      return;
    }
    try {
      setOutput(decodeURIComponent(text));
      setError("");
    } catch (err) {
      setError("Invalid URL encoded string.");
      setOutput("");
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <CodeEditor
            label="URL Encoded String"
            placeholder="Enter encoded URL string here..."
            value={input}
            onChange={(e) => handleDecode(e.target.value)}
            error={error}
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-semibold text-text">Decoded Output</label>
            <CopyButton text={output} variant="ghost" className="h-8 text-xs" />
          </div>
          <CodeEditor
            placeholder="Decoded text will appear here..."
            value={output}
            readOnly
            className="bg-surface"
          />
        </div>
      </div>
    </div>
  );
}
