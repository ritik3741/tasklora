"use client";

import React, { useState } from "react";
import { NumberInput } from "@/components/tools/NumberInput";
import { RangeSlider } from "@/components/tools/RangeSlider";
import { StatsPanel } from "@/components/tools/StatsPanel";

export function CompoundInterestClient() {
  const [principal, setPrincipal] = useState<number>(10000);
  const [rate, setRate] = useState<number>(5);
  const [time, setTime] = useState<number>(10);
  const [frequency, setFrequency] = useState<number>(12);

  const calculateCompoundInterest = () => {
    const p = principal;
    const r = rate / 100;
    const t = time;
    const n = frequency;

    const futureValue = p * Math.pow(1 + r / n, n * t);
    const interestEarned = futureValue - p;

    return {
      futureValue: futureValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      interestEarned: interestEarned.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      totalPrincipal: p.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
    };
  };

  const results = calculateCompoundInterest();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-surface border border-border p-6 rounded-2xl space-y-6 shadow-sm">
        <h3 className="text-xl font-bold text-text mb-4">Input Parameters</h3>
        
        <NumberInput
          label="Principal Amount"
          prefix="$"
          value={principal}
          onChange={(val) => setPrincipal(val)}
          min={0}
        />

        <RangeSlider
          label="Interest Rate"
          value={rate}
          onChange={(val) => setRate(val)}
          min={0}
          max={30}
          step={0.1}
          suffix="%"
        />
        
        <NumberInput
          label="Interest Rate (%)"
          suffix="%"
          value={rate}
          onChange={(val) => setRate(val)}
          min={0}
          max={100}
        />

        <RangeSlider
          label="Time Period"
          value={time}
          onChange={(val) => setTime(val)}
          min={1}
          max={50}
          step={1}
          suffix=" Years"
        />
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-text">
            Compounding Frequency
          </label>
          <select
            value={frequency}
            onChange={(e) => setFrequency(Number(e.target.value))}
            className="w-full h-12 rounded-xl border border-border bg-background text-text px-4 focus:ring-2 focus:ring-primary/50 outline-none"
          >
            <option value={365}>Daily (365/year)</option>
            <option value={12}>Monthly (12/year)</option>
            <option value={4}>Quarterly (4/year)</option>
            <option value={2}>Semi-Annually (2/year)</option>
            <option value={1}>Annually (1/year)</option>
          </select>
        </div>
      </div>

      <div className="space-y-6">
        <StatsPanel
          stats={[
            { label: "Future Value", value: `$${results.futureValue}` },
            { label: "Interest Earned", value: `$${results.interestEarned}`, highlight: true },
            { label: "Total Principal", value: `$${results.totalPrincipal}` }
          ]}
        />
      </div>
    </div>
  );
}
