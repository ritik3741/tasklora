"use client";

import { useState, useEffect } from "react";
import { CopyButton } from "@/components/tools/CopyButton";

export default function SHA256GeneratorClient() {
  const [inputText, setInputText] = useState("");
  const [hashOutput, setHashOutput] = useState("");

  useEffect(() => {
    const generateHash = async () => {
      if (!inputText) {
        setHashOutput("");
        return;
      }
      try {
        const msgUint8 = new TextEncoder().encode(inputText);
        const hashBuffer = await crypto.subtle.digest("SHA-256", msgUint8);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
        setHashOutput(hashHex);
      } catch (err) {
        console.error("Failed to generate hash", err);
      }
    };

    generateHash();
  }, [inputText]);

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium">Input Text</label>
          <span className="text-xs text-muted-foreground">
            {inputText.length} characters
          </span>
        </div>
        <textarea
          className="w-full min-h-[150px] p-3 rounded-md border bg-background text-sm"
          placeholder="Type or paste your text here to generate a SHA-256 hash..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">SHA-256 Hash Output</label>
        <div className="relative">
          <div className="w-full p-4 rounded-md border bg-muted font-mono text-sm break-all min-h-[60px] flex items-center">
            {hashOutput || <span className="text-muted-foreground">Hash will appear here...</span>}
          </div>
          {hashOutput && (
            <div className="absolute top-3 right-3">
              <CopyButton text={hashOutput} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
