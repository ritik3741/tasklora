"use client";

import React, { useState } from "react";
import { NumberInput } from "@/components/tools/NumberInput";
import { RangeSlider } from "@/components/tools/RangeSlider";

export function EMIClient() {
  const [loanAmount, setLoanAmount] = useState<number>(10000);
  const [interestRate, setInterestRate] = useState<number>(7.5);
  const [tenure, setTenure] = useState<number>(5);
  const [tenureType, setTenureType] = useState<"years" | "months">("years");

  const calculateEMI = () => {
    if (loanAmount <= 0 || interestRate <= 0 || tenure <= 0) {
      return {
        emi: 0,
        totalInterest: 0,
        totalPayment: 0,
        principalPercentage: 100,
        interestPercentage: 0,
      };
    }

    const principal = loanAmount;
    const ratePerMonth = interestRate / 12 / 100;
    const timeInMonths = tenureType === "years" ? tenure * 12 : tenure;

    const emi =
      (principal * ratePerMonth * Math.pow(1 + ratePerMonth, timeInMonths)) /
      (Math.pow(1 + ratePerMonth, timeInMonths) - 1);
      
    const totalPayment = emi * timeInMonths;
    const totalInterest = totalPayment - principal;

    const principalPercentage = (principal / totalPayment) * 100;
    const interestPercentage = (totalInterest / totalPayment) * 100;

    return {
      emi: emi.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      principalPercentage,
      interestPercentage,
    };
  };

  const results = calculateEMI();

  // Simple SVG Pie Chart parameters
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const principalStroke = (results.principalPercentage / 100) * circumference;
  const interestStroke = circumference - principalStroke;

  return (
    <div className="bg-surface rounded-2xl border border-border p-6 md:p-8 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <NumberInput
            label="Loan Amount"
            value={loanAmount}
            onChange={setLoanAmount}
            prefix="$"
            min={0}
          />

          <RangeSlider
            label="Interest Rate"
            value={interestRate}
            min={1}
            max={30}
            step={0.1}
            onChange={setInterestRate}
            suffix="%"
          />

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="block text-sm font-medium text-text">Loan Tenure</label>
            </div>
            <div className="flex gap-4 mb-4">
              <button
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium border transition-colors ${tenureType === "years" ? "bg-primary/10 border-primary text-primary" : "bg-surface border-border text-text hover:bg-background"}`}
                onClick={() => setTenureType("years")}
              >
                Years
              </button>
              <button
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium border transition-colors ${tenureType === "months" ? "bg-primary/10 border-primary text-primary" : "bg-surface border-border text-text hover:bg-background"}`}
                onClick={() => setTenureType("months")}
              >
                Months
              </button>
            </div>
            
            <RangeSlider
              label={`Tenure (${tenureType})`}
              value={tenure}
              min={1}
              max={tenureType === "years" ? 30 : 360}
              onChange={setTenure}
              suffix={` ${tenureType === "years" ? "Yr" : "Mo"}`}
            />
          </div>
        </div>

        <div className="bg-background rounded-xl p-6 flex flex-col justify-center border border-border">
          <h3 className="text-xl font-semibold mb-6 text-center text-text">EMI Details</h3>
          
          <div className="flex justify-center mb-6">
            <div className="relative w-40 h-40">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                <circle
                  cx="60"
                  cy="60"
                  r={radius}
                  fill="transparent"
                  stroke="currentColor"
                  className="text-primary/20"
                  strokeWidth="20"
                />
                <circle
                  cx="60"
                  cy="60"
                  r={radius}
                  fill="transparent"
                  stroke="currentColor"
                  className="text-primary"
                  strokeWidth="20"
                  strokeDasharray={`${principalStroke} ${circumference}`}
                  strokeDashoffset="0"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-sm text-text/70">Monthly EMI</span>
                <span className="text-lg font-bold text-primary">${results.emi}</span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-4 mb-6 text-sm justify-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span className="text-text/80">Principal</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary/20"></div>
              <span className="text-text/80">Interest</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center pb-4 border-b border-border">
              <span className="text-text/70">Principal Amount:</span>
              <span className="text-lg font-medium">${loanAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-border">
              <span className="text-text/70">Total Interest:</span>
              <span className="text-lg font-medium">${results.totalInterest}</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="text-lg font-semibold text-text">Total Payment:</span>
              <span className="text-xl font-bold text-text">${results.totalPayment}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
