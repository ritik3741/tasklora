"use client";

import React, { useState, useMemo } from 'react';
import { NumberInput } from '@/components/tools/NumberInput';
import { RangeSlider } from '@/components/tools/RangeSlider';

export default function SIPCalculatorClient() {
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(5000);
  const [expectedReturn, setExpectedReturn] = useState<number>(12);
  const [years, setYears] = useState<number>(10);

  const results = useMemo(() => {
    const P = monthlyInvestment;
    const i = expectedReturn / 12 / 100;
    const n = years * 12;

    let M = 0;
    if (i === 0) {
      M = P * n;
    } else {
      M = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    }

    const investedAmount = P * n;
    const wealthGained = M - investedAmount;

    return {
      investedAmount: Math.round(investedAmount),
      wealthGained: Math.round(wealthGained),
      totalValue: Math.round(M)
    };
  }, [monthlyInvestment, expectedReturn, years]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  // Pie chart calculation
  const total = results.totalValue || 1;
  const investedPercent = (results.investedAmount / total) * 100;
  const gainedPercent = (results.wealthGained / total) * 100;

  // SVG Circle specs
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const investedStroke = (investedPercent / 100) * circumference;
  const gainedStroke = (gainedPercent / 100) * circumference;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-surface p-6 rounded-2xl border border-border">
      {/* Inputs */}
      <div className="space-y-6">
        <div>
          <NumberInput
            label="Monthly Investment"
            value={monthlyInvestment}
            onChange={setMonthlyInvestment}
            prefix="₹"
            min={100}
            step={100}
          />
          <div className="mt-4">
            <RangeSlider
              label=""
              value={monthlyInvestment}
              onChange={setMonthlyInvestment}
              min={500}
              max={100000}
              step={500}
            />
          </div>
        </div>

        <div>
          <NumberInput
            label="Expected Return Rate (p.a)"
            value={expectedReturn}
            onChange={setExpectedReturn}
            suffix="%"
            min={1}
            max={30}
            step={0.1}
          />
          <div className="mt-4">
            <RangeSlider
              label=""
              value={expectedReturn}
              onChange={setExpectedReturn}
              min={1}
              max={30}
              step={0.5}
              suffix="%"
            />
          </div>
        </div>

        <div>
          <NumberInput
            label="Time Period"
            value={years}
            onChange={setYears}
            suffix="Yr"
            min={1}
            max={40}
            step={1}
          />
          <div className="mt-4">
            <RangeSlider
              label=""
              value={years}
              onChange={setYears}
              min={1}
              max={40}
              step={1}
              suffix=" Yr"
            />
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="flex flex-col items-center justify-center space-y-8 bg-background p-6 rounded-xl border border-border">
        
        {/* Simple SVG Donut Chart */}
        <div className="relative flex items-center justify-center w-48 h-48">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="96"
              cy="96"
              r={radius}
              fill="transparent"
              stroke="#e2e8f0"
              strokeWidth="24"
            />
            {results.wealthGained > 0 && (
              <circle
                cx="96"
                cy="96"
                r={radius}
                fill="transparent"
                stroke="#10b981"
                strokeWidth="24"
                strokeDasharray={`${gainedStroke} ${circumference}`}
                strokeDashoffset="0"
                className="transition-all duration-1000 ease-in-out"
              />
            )}
            {results.investedAmount > 0 && (
              <circle
                cx="96"
                cy="96"
                r={radius}
                fill="transparent"
                stroke="#3b82f6"
                strokeWidth="24"
                strokeDasharray={`${investedStroke} ${circumference}`}
                strokeDashoffset={-gainedStroke}
                className="transition-all duration-1000 ease-in-out"
              />
            )}
          </svg>
          <div className="absolute flex flex-col items-center justify-center text-center">
            <span className="text-xs text-text/60">Total Value</span>
            <span className="text-lg font-bold text-text">
              {formatCurrency(results.totalValue)}
            </span>
          </div>
        </div>

        <div className="w-full space-y-4">
          <div className="flex justify-between items-center py-2 border-b border-border">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span className="text-sm text-text/80">Invested Amount</span>
            </div>
            <span className="font-semibold">{formatCurrency(results.investedAmount)}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-border">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-sm text-text/80">Est. Returns</span>
            </div>
            <span className="font-semibold">{formatCurrency(results.wealthGained)}</span>
          </div>
          <div className="flex justify-between items-center py-2 text-lg font-bold">
            <span>Total Value</span>
            <span className="text-primary">{formatCurrency(results.totalValue)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
