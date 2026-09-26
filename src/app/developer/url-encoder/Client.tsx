"use client";

import React, { useState } from "react";
import { CodeEditor } from "@/components/tools/CodeEditor";
import { CopyButton } from "@/components/tools/CopyButton";
import { Button } from "@/components/ui/Button";
import { ArrowRightLeft } from "lucide-react";

export function UrlEncoderClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleEncode = (text: string) => {
    setInput(text);
    try {
      setOutput(encodeURIComponent(text));
    } catch (error) {
      setOutput("Error encoding text.");
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <CodeEditor
            label="Input String"
            placeholder="Enter text to URL encode..."
            value={input}
            onChange={(e) => handleEncode(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-semibold text-text">URL Encoded Output</label>
            <CopyButton text={output} variant="ghost" className="h-8 text-xs" />
          </div>
          <CodeEditor
            placeholder="Encoded URL will appear here..."
            value={output}
            readOnly
            className="bg-surface"
          />
        </div>
      </div>
    </div>
  );
}
