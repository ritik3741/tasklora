"use client";

import React, { useState, useEffect } from "react";
import { CodeEditor } from "@/components/tools/CodeEditor";
import { CopyButton } from "@/components/tools/CopyButton";

export function RegexTesterClient() {
  const [regexStr, setRegexStr] = useState("");
  const [testText, setTestText] = useState("");
  const [flags, setFlags] = useState({ g: true, i: false, m: false });
  const [matches, setMatches] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!regexStr) {
      setMatches([]);
      setError(null);
      return;
    }

    try {
      let flagStr = "";
      if (flags.g) flagStr += "g";
      if (flags.i) flagStr += "i";
      if (flags.m) flagStr += "m";

      const regex = new RegExp(regexStr, flagStr);
      const newMatches = [];
      
      let match;
      if (flags.g) {
        let iterations = 0; // prevent infinite loop edge case
        while ((match = regex.exec(testText)) !== null && iterations < 5000) {
          newMatches.push(match);
          if (match.index === regex.lastIndex) {
            regex.lastIndex++;
          }
          iterations++;
        }
      } else {
        match = regex.exec(testText);
        if (match) {
          newMatches.push(match);
        }
      }

      setMatches(newMatches);
      setError(null);
    } catch (err: any) {
      setError(err.message || "Invalid Regular Expression");
      setMatches([]);
    }
  }, [regexStr, testText, flags]);

  const handleFlagChange = (flag: "g" | "i" | "m") => {
    setFlags((prev) => ({ ...prev, [flag]: !prev[flag] }));
  };

  return (
    <div className="space-y-6">
      <div className="bg-surface rounded-xl border border-border p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium text-text mb-2">Regular Expression</label>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <div className="flex-1 flex items-center gap-2 bg-background border border-border rounded-lg px-3 focus-within:ring-2 focus-within:ring-primary focus-within:border-transparent transition-all">
              <span className="text-xl text-text/50">/</span>
              <input
                type="text"
                className="flex-1 w-full py-3 bg-transparent text-text font-mono outline-none"
                placeholder="^([a-z]+)$"
                value={regexStr}
                onChange={(e) => setRegexStr(e.target.value)}
              />
              <span className="text-xl text-text/50">/</span>
            </div>
            <div className="flex bg-background border border-border rounded-lg overflow-hidden shrink-0">
              <button
                className={`px-4 py-3 font-mono text-sm transition-colors ${flags.g ? "bg-primary text-white" : "text-text/70 hover:bg-surface"}`}
                onClick={() => handleFlagChange("g")}
                title="Global search"
              >
                g
              </button>
              <div className="w-px bg-border"></div>
              <button
                className={`px-4 py-3 font-mono text-sm transition-colors ${flags.i ? "bg-primary text-white" : "text-text/70 hover:bg-surface"}`}
                onClick={() => handleFlagChange("i")}
                title="Case-insensitive search"
              >
                i
              </button>
              <div className="w-px bg-border"></div>
              <button
                className={`px-4 py-3 font-mono text-sm transition-colors ${flags.m ? "bg-primary text-white" : "text-text/70 hover:bg-surface"}`}
                onClick={() => handleFlagChange("m")}
                title="Multi-line search"
              >
                m
              </button>
            </div>
          </div>
          {error && <p className="mt-2 text-sm text-red-500 font-medium">{error}</p>}
        </div>

        <div>
          <CodeEditor
            label="Test String"
            placeholder="Enter text to test your regular expression against..."
            value={testText}
            onChange={(e) => setTestText(e.target.value)}
            className="min-h-[150px]"
          />
        </div>
      </div>

      <div className="bg-surface rounded-xl border border-border p-6">
        <h3 className="text-lg font-semibold text-text mb-4">
          Match Results <span className="text-sm font-normal text-text/60 bg-background px-2 py-1 rounded ml-2">{matches.length} {matches.length === 1 ? 'match' : 'matches'}</span>
        </h3>
        
        {matches.length === 0 ? (
          <div className="text-center py-10 text-text/50 bg-background rounded-lg border border-border border-dashed">
            {regexStr ? "No matches found." : "Enter a regular expression to see matches."}
          </div>
        ) : (
          <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
            {matches.map((match, i) => (
              <div key={i} className="bg-background border border-border rounded-lg p-4">
                <div className="flex flex-wrap items-center justify-between mb-3 gap-4 border-b border-border/50 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm text-primary font-semibold">Match {i + 1}</span>
                    <span className="font-mono text-xs text-text/50 bg-surface px-2 py-1 rounded">Index: {match.index}</span>
                  </div>
                  <CopyButton text={match[0]} variant="ghost" className="h-8 text-xs" />
                </div>
                <div className="font-mono text-text bg-surface p-3 rounded-lg mb-4 break-all text-sm shadow-inner border border-border/50">
                  {match[0]}
                </div>
                
                {match.length > 1 && (
                  <div className="space-y-3">
                    <p className="text-xs font-semibold text-text/60 uppercase tracking-wider">Capture Groups</p>
                    <div className="grid gap-2">
                      {Array.from(match).slice(1).map((group, j) => (
                        group !== undefined && (
                          <div key={j} className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm p-2 rounded border border-border/30 bg-surface/30">
                            <span className="text-text/50 font-mono min-w-[70px] text-xs font-medium">Group {j + 1}:</span>
                            <span className="font-mono flex-1 break-all text-text/90">
                              {String(group)}
                            </span>
                            <CopyButton text={String(group)} variant="ghost" className="h-7 text-xs px-2" label="Copy" />
                          </div>
                        )
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
