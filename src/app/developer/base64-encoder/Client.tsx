"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import { DownloadButton } from "@/components/tools/DownloadButton";
import { CodeEditor } from "@/components/tools/CodeEditor";

export default function Base64EncoderClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  useEffect(() => {
    if (!input) {
      setOutput("");
      return;
    }
    try {
      // Encode as UTF-8
      const uint8Array = new TextEncoder().encode(input);
      let binary = '';
      const len = uint8Array.byteLength;
      for (let i = 0; i < len; i++) {
          binary += String.fromCharCode(uint8Array[i]);
      }
      const encoded = btoa(binary);
      setOutput(encoded);
    } catch (e) {
      setOutput("");
    }
  }, [input]);

  const handleClear = () => {
    setInput("");
    setOutput("");
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium">Text Input</label>
          <span className="text-xs text-muted-foreground">{input.length} characters</span>
        </div>
        <CodeEditor
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text to encode to Base64..."
          className="min-h-[150px]"
        />
        {input && (
           <div className="flex justify-end gap-2 mt-2">
               <Button variant="outline" onClick={handleClear}>Clear</Button>
           </div>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Base64 Output</label>
        <CodeEditor
          value={output}
          readOnly
          placeholder="Base64 encoded output will appear here..."
          className="min-h-[150px] bg-muted/50"
        />
        <div className="flex justify-end gap-2 mt-2">
          <CopyButton text={output} />
          <DownloadButton content={output} filename="encoded-base64.txt" />
        </div>
      </div>
    </div>
  );
}
