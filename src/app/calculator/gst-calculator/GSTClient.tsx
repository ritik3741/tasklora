"use client";

import React, { useState } from "react";
import { NumberInput } from "@/components/tools/NumberInput";
import { RangeSlider } from "@/components/tools/RangeSlider";

export function GSTClient() {
  const [amount, setAmount] = useState<number>(1000);
  const [rate, setRate] = useState<number>(18);
  const [mode, setMode] = useState<"exclusive" | "inclusive">("exclusive");
  const [customRate, setCustomRate] = useState<boolean>(false);

  const gstRates = [3, 5, 12, 18, 28];

  const calculateGST = () => {
    let gstAmount = 0;
    let finalAmount = 0;
    let original = amount;

    if (mode === "exclusive") {
      gstAmount = (amount * rate) / 100;
      finalAmount = amount + gstAmount;
    } else {
      gstAmount = amount - (amount * (100 / (100 + rate)));
      original = amount - gstAmount;
      finalAmount = amount;
    }

    return {
      gstAmount: gstAmount.toFixed(2),
      finalAmount: finalAmount.toFixed(2),
      originalAmount: original.toFixed(2),
    };
  };

  const results = calculateGST();

  return (
    <div className="bg-surface rounded-2xl border border-border p-6 md:p-8 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <NumberInput
            label="Amount"
            value={amount}
            onChange={setAmount}
            prefix="$"
            min={0}
          />
          
          <div className="space-y-2">
            <label className="block text-sm font-medium text-text">GST Mode</label>
            <div className="flex bg-background rounded-xl p-1 border border-border">
              <button
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${mode === "exclusive" ? "bg-primary text-primary-foreground shadow-sm" : "text-text/70 hover:text-text"}`}
                onClick={() => setMode("exclusive")}
              >
                Exclusive (Add GST)
              </button>
              <button
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${mode === "inclusive" ? "bg-primary text-primary-foreground shadow-sm" : "text-text/70 hover:text-text"}`}
                onClick={() => setMode("inclusive")}
              >
                Inclusive (Remove GST)
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="block text-sm font-medium text-text">GST Rate (%)</label>
              <button 
                onClick={() => setCustomRate(!customRate)}
                className="text-xs text-primary hover:underline"
              >
                {customRate ? "Use Standard Rates" : "Custom Rate"}
              </button>
            </div>
            
            {customRate ? (
              <RangeSlider
                label="Custom GST Rate"
                value={rate}
                min={0}
                max={100}
                onChange={setRate}
                suffix="%"
              />
            ) : (
              <div className="flex flex-wrap gap-2">
                {gstRates.map(r => (
                  <button
                    key={r}
                    onClick={() => setRate(r)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${rate === r ? "bg-primary/10 border-primary text-primary" : "bg-surface border-border text-text hover:bg-background"}`}
                  >
                    {r}%
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="bg-background rounded-xl p-6 flex flex-col justify-center border border-border">
          <h3 className="text-xl font-semibold mb-6 text-center text-text">Calculation Results</h3>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-4 border-b border-border">
              <span className="text-text/70">Original Amount:</span>
              <span className="text-lg font-medium">${results.originalAmount}</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-border">
              <span className="text-text/70">GST Rate:</span>
              <span className="text-lg font-medium">{rate}%</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-border">
              <span className="text-text/70">GST Amount:</span>
              <span className="text-lg font-medium text-primary">${results.gstAmount}</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-lg font-semibold text-text">Total Amount:</span>
              <span className="text-2xl font-bold text-text">${results.finalAmount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
