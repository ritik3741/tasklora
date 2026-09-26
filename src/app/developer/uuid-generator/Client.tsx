"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { CopyButton } from "@/components/tools/CopyButton";
import { DownloadButton } from "@/components/tools/DownloadButton";

export default function UUIDGeneratorClient() {
  const [uuids, setUuids] = useState<string[]>([]);
  const [quantity, setQuantity] = useState<number>(1);

  const generateUuids = () => {
    const qty = Math.max(1, Math.min(100, quantity || 1));
    const newUuids = Array.from({ length: qty }, () => crypto.randomUUID());
    setUuids(newUuids);
  };

  useEffect(() => {
    generateUuids();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-end">
        <div className="space-y-2 flex-1">
          <label htmlFor="quantity" className="text-sm font-medium">
            Quantity (1-100)
          </label>
          <input
            id="quantity"
            type="number"
            min={1}
            max={100}
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            className="w-full px-3 py-2 border border-border rounded-md bg-surface text-text outline-none focus:border-primary"
          />
        </div>
        <Button onClick={generateUuids} className="w-full sm:w-auto">
          Generate New UUIDs
        </Button>
      </div>

      {uuids.length > 0 && (
        <div className="space-y-4">
          <div className="flex justify-between items-center bg-muted/50 p-2 rounded-t-lg border-b">
            <span className="text-sm font-medium ml-2">Generated UUIDs ({uuids.length})</span>
            <div className="flex gap-2">
              <CopyButton text={uuids.join("\n")} label="Copy All" />
              <DownloadButton content={uuids.join("\n")} filename="uuids.txt" />
            </div>
          </div>
          
          <div className="bg-muted p-4 rounded-b-lg max-h-96 overflow-y-auto space-y-2">
            {uuids.map((uuid, index) => (
              <div key={index} className="flex justify-between items-center bg-background p-2 rounded border font-mono text-sm">
                <span>{uuid}</span>
                <CopyButton text={uuid} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
