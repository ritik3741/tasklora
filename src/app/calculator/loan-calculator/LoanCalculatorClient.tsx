"use client";

import React, { useState } from "react";
import { NumberInput } from "@/components/tools/NumberInput";
import { RangeSlider } from "@/components/tools/RangeSlider";

export function LoanCalculatorClient() {
  const [principal, setPrincipal] = useState<number>(50000);
  const [interestRate, setInterestRate] = useState<number>(5.5);
  const [years, setYears] = useState<number>(5);

  // Calculations
  const p = principal > 0 ? principal : 0;
  const r = interestRate > 0 ? interestRate / 100 / 12 : 0;
  const n = years > 0 ? years * 12 : 0;

  let monthlyPayment = 0;
  let totalPayment = 0;
  let totalInterest = 0;

  if (r === 0) {
    if (n > 0) {
      monthlyPayment = p / n;
      totalPayment = p;
    }
  } else if (n > 0) {
    monthlyPayment = p * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    totalPayment = monthlyPayment * n;
    totalInterest = totalPayment - p;
  }

  // Avoid NaNs if inputs are zero or cleared
  if (isNaN(monthlyPayment) || !isFinite(monthlyPayment)) monthlyPayment = 0;
  if (isNaN(totalPayment) || !isFinite(totalPayment)) totalPayment = 0;
  if (isNaN(totalInterest) || !isFinite(totalInterest)) totalInterest = 0;

  // SVG Donut Chart Logic
  const size = 200;
  const strokeWidth = 24;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  
  const principalPercentage = totalPayment > 0 ? (p / totalPayment) : 1;
  const interestPercentage = totalPayment > 0 ? (totalInterest / totalPayment) : 0;
  
  const principalDasharray = `${circumference * principalPercentage} ${circumference}`;
  const interestDasharray = `${circumference * interestPercentage} ${circumference}`;
  const interestDashoffset = -circumference * principalPercentage;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-7 space-y-6 bg-surface p-6 rounded-2xl border border-border shadow-sm">
        <h3 className="text-xl font-semibold mb-4 text-text">Loan Details</h3>
        
        <NumberInput
          label="Loan Amount (Principal)"
          value={principal || ""}
          onChange={(v) => setPrincipal(v)}
          prefix="$"
          min={0}
        />
        
        <RangeSlider
          label="Interest Rate (Yearly)"
          value={interestRate}
          min={0}
          max={30}
          step={0.1}
          onChange={(v) => setInterestRate(v)}
          suffix="%"
        />

        <RangeSlider
          label="Loan Duration"
          value={years}
          min={1}
          max={40}
          onChange={(v) => setYears(v)}
          suffix=" Years"
        />
        
        <div className="pt-4 mt-6 border-t border-border">
          <p className="text-sm text-text/70">
            Adjust the values above to instantly recalculate your monthly payment and total costs. The calculations assume a fixed interest rate and monthly compounding.
          </p>
        </div>
      </div>

      <div className="lg:col-span-5 space-y-6">
        <div className="bg-primary/5 p-6 rounded-2xl border border-primary/20 shadow-sm">
          <h3 className="text-xl font-semibold mb-6 text-text">Payment Summary</h3>
          
          <div className="space-y-4">
            <div className="pb-4 border-b border-border">
              <span className="block text-text/70 font-medium mb-1">Estimated Monthly Payment</span>
              <span className="text-4xl font-bold text-primary">${monthlyPayment.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between items-center py-2">
              <span className="text-text/70 font-medium">Total Principal</span>
              <span className="text-lg text-text font-semibold">${p.toFixed(2)}</span>
            </div>

            <div className="flex justify-between items-center py-2">
              <span className="text-text/70 font-medium">Total Interest Paid</span>
              <span className="text-lg text-orange-500 font-semibold">${totalInterest.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between items-center pt-2 border-t border-border mt-2">
              <span className="text-lg font-bold text-text">Total Cost of Loan</span>
              <span className="text-xl font-bold text-text">${totalPayment.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="bg-surface p-6 rounded-2xl border border-border shadow-sm flex flex-col items-center">
          <h4 className="text-sm font-medium text-text/70 mb-6">Payment Breakdown</h4>
          <div className="relative w-[200px] h-[200px]">
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
              {/* Principal Circle */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth={strokeWidth}
                strokeDasharray={principalDasharray}
                className="transition-all duration-500"
                transform={`rotate(-90 ${size/2} ${size/2})`}
              />
              {/* Interest Circle */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke="#f97316" /* orange-500 */
                strokeWidth={strokeWidth}
                strokeDasharray={interestDasharray}
                strokeDashoffset={interestDashoffset}
                className="transition-all duration-500"
                transform={`rotate(-90 ${size/2} ${size/2})`}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-xs text-text/50 font-medium uppercase tracking-wider">Total</span>
              <span className="text-sm font-bold text-text">${totalPayment >= 1000000 ? (totalPayment/1000000).toFixed(2) + 'M' : (totalPayment >= 1000 ? (totalPayment/1000).toFixed(1) + 'k' : totalPayment.toFixed(0))}</span>
            </div>
          </div>
          <div className="flex gap-4 mt-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span className="text-text/80">Principal ({(principalPercentage * 100).toFixed(1)}%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-500"></div>
              <span className="text-text/80">Interest ({(interestPercentage * 100).toFixed(1)}%)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
