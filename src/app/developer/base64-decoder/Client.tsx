"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import { DownloadButton } from "@/components/tools/DownloadButton";
import { CodeEditor } from "@/components/tools/CodeEditor";

export default function Base64DecoderClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!input) {
      setOutput("");
      setError("");
      return;
    }
    
    try {
      // Decode Base64 safely supporting UTF-8
      const binaryString = atob(input);
      const bytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
          bytes[i] = binaryString.charCodeAt(i);
      }
      const decoded = new TextDecoder("utf-8", { fatal: true }).decode(bytes);
      setOutput(decoded);
      setError("");
    } catch (e) {
      setError("Invalid Base64 string");
      setOutput("");
    }
  }, [input]);

  const handleClear = () => {
    setInput("");
    setOutput("");
    setError("");
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-medium">Base64 Input</label>
        <CodeEditor
          value={input}
          onChange={(e) => setInput(e.target.value.trim())}
          placeholder="Enter Base64 string to decode..."
          className="min-h-[150px]"
          error={error}
        />
        {input && (
           <div className="flex justify-end gap-2 mt-2">
               <Button variant="outline" onClick={handleClear}>Clear</Button>
           </div>
        )}
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium">Text Output</label>
          <span className="text-xs text-muted-foreground">{output.length} characters</span>
        </div>
        <CodeEditor
          value={output}
          readOnly
          placeholder="Decoded text will appear here..."
          className="min-h-[150px] bg-muted/50"
        />
        <div className="flex justify-end gap-2 mt-2">
          <CopyButton text={output} />
          <DownloadButton content={output} filename="decoded-text.txt" />
        </div>
      </div>
    </div>
  );
}
