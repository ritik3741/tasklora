"use client";

import React, { useState } from "react";
import { CodeEditor } from "@/components/tools/CodeEditor";
import { CopyButton } from "@/components/tools/CopyButton";

interface DecodedJwt {
  header: any;
  payload: any;
  isValid: boolean;
  error?: string;
}

export function JwtDecoderClient() {
  const [token, setToken] = useState("");
  const [decoded, setDecoded] = useState<DecodedJwt | null>(null);

  const decodeJwt = (jwt: string) => {
    setToken(jwt);
    if (!jwt.trim()) {
      setDecoded(null);
      return;
    }

    try {
      const parts = jwt.split(".");
      if (parts.length !== 3) {
        throw new Error("JWT must have 3 parts");
      }

      const header = JSON.parse(atob(parts[0]));
      const payload = JSON.parse(atob(parts[1]));

      setDecoded({
        header,
        payload,
        isValid: true,
      });
    } catch (error: any) {
      import("@/lib/logger").then((m) => m.logger.parseError("JWT", error));
      setDecoded({
        header: null,
        payload: null,
        isValid: false,
        error: "Invalid JWT token structure or encoding.",
      });
    }
  };

  const formatDate = (unix: number) => {
    if (!unix) return "N/A";
    const date = new Date(unix * 1000);
    return date.toLocaleString();
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <CodeEditor
          label="JWT Token"
          placeholder="Paste your JWT token here (ey...)"
          value={token}
          onChange={(e) => decodeJwt(e.target.value)}
          error={decoded?.isValid === false ? decoded.error : undefined}
          className="h-32"
        />
      </div>

      {decoded && decoded.isValid && (
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-text">Header (Algorithm & Type)</label>
                <CopyButton text={JSON.stringify(decoded.header, null, 2)} variant="ghost" className="h-8 text-xs" />
              </div>
              <CodeEditor
                value={JSON.stringify(decoded.header, null, 2)}
                readOnly
                className="bg-surface h-48"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-text">Payload (Data)</label>
                <CopyButton text={JSON.stringify(decoded.payload, null, 2)} variant="ghost" className="h-8 text-xs" />
              </div>
              <CodeEditor
                value={JSON.stringify(decoded.payload, null, 2)}
                readOnly
                className="bg-surface h-96"
              />
            </div>
          </div>
        </div>
      )}

      {decoded?.isValid && decoded.payload && (
        <div className="mt-6 p-4 bg-surface rounded-xl border border-border">
          <h3 className="font-semibold mb-4 text-text">Token Information</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-text/70 block">Issued At (iat)</span>
              <span className="font-mono">{formatDate(decoded.payload.iat)}</span>
            </div>
            <div>
              <span className="text-text/70 block">Expiration (exp)</span>
              <span className="font-mono">{formatDate(decoded.payload.exp)}</span>
            </div>
            <div>
              <span className="text-text/70 block">Issuer (iss)</span>
              <span className="font-mono">{decoded.payload.iss || "N/A"}</span>
            </div>
            <div>
              <span className="text-text/70 block">Subject (sub)</span>
              <span className="font-mono">{decoded.payload.sub || "N/A"}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
