"use client";

import React, { useState } from "react";
import { CodeEditor } from "@/components/tools/CodeEditor";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export function JsonValidatorClient() {
  const [input, setInput] = useState("");
  const [validationResult, setValidationResult] = useState<{
    isValid: boolean;
    message: string;
    line?: number;
  } | null>(null);

  const validateJson = () => {
    if (!input.trim()) {
      setValidationResult(null);
      return;
    }
    
    try {
      JSON.parse(input);
      setValidationResult({ isValid: true, message: "Valid JSON! Your JSON data is structurally sound." });
    } catch (e: any) {
      let msg = e.message || "Invalid JSON";
      let lineNum = undefined;
      
      // Attempt to extract position/line from common error messages
      // Chrome/Node: "Unexpected token o in JSON at position 12"
      const posMatch = msg.match(/at position (\d+)/);
      if (posMatch) {
        const pos = parseInt(posMatch[1], 10);
        const upToError = input.substring(0, pos);
        lineNum = upToError.split("\n").length;
        msg = `${msg} (Line ${lineNum})`;
      } else {
        // Firefox: "JSON.parse: expected property name or '}' at line 2 column 3 of the JSON data"
        const lineMatch = msg.match(/line (\d+)/i);
        if (lineMatch) {
          lineNum = parseInt(lineMatch[1], 10);
        }
      }

      setValidationResult({ isValid: false, message: msg, line: lineNum });
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="w-full">
        <CodeEditor
          label="JSON to Validate"
          placeholder="Paste your JSON string here..."
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            if (validationResult) setValidationResult(null); // Clear result on change
          }}
          className={validationResult && !validationResult.isValid ? "border-red-500" : ""}
        />
        
        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={validateJson}
            className="px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-md hover:bg-primary/90 transition-colors"
          >
            Validate JSON
          </button>
          
          <button
            onClick={() => { setInput(""); setValidationResult(null); }}
            className="px-4 py-2 bg-secondary text-secondary-foreground font-semibold rounded-md hover:bg-secondary/90 transition-colors"
          >
            Clear
          </button>
        </div>
      </div>

      {validationResult && (
        <div className={`p-4 rounded-xl border ${validationResult.isValid ? 'bg-green-500/10 border-green-500' : 'bg-red-500/10 border-red-500'}`}>
          <div className="flex items-start gap-3">
            {validationResult.isValid ? (
              <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
            )}
            <div>
              <h3 className={`font-semibold ${validationResult.isValid ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                {validationResult.isValid ? "Success!" : "Validation Error"}
              </h3>
              <p className="text-text/80 mt-1">{validationResult.message}</p>
              {!validationResult.isValid && validationResult.line && (
                <p className="text-sm font-mono bg-red-500/20 text-red-700 dark:text-red-300 px-2 py-1 rounded mt-2 inline-block">
                  Error detected around line {validationResult.line}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
