"use client";

import React, { useState, useEffect } from "react";
import { NumberInput } from "@/components/tools/NumberInput";

export function PercentageClient() {
  const [mode, setMode] = useState<"percentageOf" | "whatPercentage" | "change">("percentageOf");
  const [x, setX] = useState<number | string>("");
  const [y, setY] = useState<number | string>("");
  const [result, setResult] = useState<string>("");

  const calculate = React.useCallback(() => {
    const numX = parseFloat(String(x));
    const numY = parseFloat(String(y));

    if (isNaN(numX) || isNaN(numY)) {
      setResult("");
      return;
    }

    if (mode === "percentageOf") {
      // What is X% of Y?
      const res = (numX / 100) * numY;
      setResult(`${numX}% of ${numY} is ${res}`);
    } else if (mode === "whatPercentage") {
      // X is what % of Y?
      if (numY === 0) {
        setResult("Cannot divide by zero");
      } else {
        const res = (numX / numY) * 100;
        setResult(`${numX} is ${res.toFixed(2)}% of ${numY}`);
      }
    } else if (mode === "change") {
      // % change from X to Y
      if (numX === 0) {
        setResult("Cannot calculate percentage change from zero");
      } else {
        const res = ((numY - numX) / numX) * 100;
        if (res > 0) {
          setResult(`${res.toFixed(2)}% increase`);
        } else if (res < 0) {
          setResult(`${Math.abs(res).toFixed(2)}% decrease`);
        } else {
          setResult(`0% change`);
        }
      }
    }
  }, [mode, x, y]);

  useEffect(() => {
    calculate();
  }, [calculate]);

  return (
    <div className="bg-surface rounded-2xl shadow-sm border border-border p-6 md:p-8">
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <button
          onClick={() => setMode("percentageOf")}
          className={`flex-1 py-3 px-4 rounded-xl font-medium transition-colors ${
            mode === "percentageOf" ? "bg-primary text-white" : "bg-background text-text hover:bg-background/80"
          }`}
        >
          What is X% of Y?
        </button>
        <button
          onClick={() => setMode("whatPercentage")}
          className={`flex-1 py-3 px-4 rounded-xl font-medium transition-colors ${
            mode === "whatPercentage" ? "bg-primary text-white" : "bg-background text-text hover:bg-background/80"
          }`}
        >
          X is what % of Y?
        </button>
        <button
          onClick={() => setMode("change")}
          className={`flex-1 py-3 px-4 rounded-xl font-medium transition-colors ${
            mode === "change" ? "bg-primary text-white" : "bg-background text-text hover:bg-background/80"
          }`}
        >
          % Change
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <NumberInput
          label={
            mode === "percentageOf" ? "Percentage (X%)" : 
            mode === "whatPercentage" ? "Value (X)" : 
            "Original Value (X)"
          }
          value={x}
          onChange={(val) => setX(val)}
          placeholder="Enter X"
        />
        <NumberInput
          label={
            mode === "percentageOf" ? "Value (Y)" : 
            mode === "whatPercentage" ? "Total Value (Y)" : 
            "New Value (Y)"
          }
          value={y}
          onChange={(val) => setY(val)}
          placeholder="Enter Y"
        />
      </div>

      <div className="bg-background rounded-xl p-6 text-center">
        <h3 className="text-lg font-medium text-text/70 mb-2">Result</h3>
        <div className="text-3xl md:text-4xl font-bold text-primary">
          {result || "Enter values to calculate"}
        </div>
      </div>
    </div>
  );
}
