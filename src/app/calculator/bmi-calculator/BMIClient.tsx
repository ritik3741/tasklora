"use client";

import React, { useState, useEffect } from "react";
import { NumberInput } from "@/components/tools/NumberInput";
import { RangeSlider } from "@/components/tools/RangeSlider";

export function BMIClient() {
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  
  // Metric states
  const [heightCm, setHeightCm] = useState<number>(170);
  const [weightKg, setWeightKg] = useState<number>(70);
  
  // Imperial states
  const [heightFt, setHeightFt] = useState<number>(5);
  const [heightIn, setHeightIn] = useState<number>(7);
  const [weightLbs, setWeightLbs] = useState<number>(150);

  const [bmi, setBmi] = useState<number>(0);
  const [category, setCategory] = useState<string>("");
  const [healthyRange, setHealthyRange] = useState<string>("");
  const [color, setColor] = useState<string>("");

  const calculateBMI = React.useCallback(() => {
    let currentBmi = 0;
    let minWeight = 0;
    let maxWeight = 0;

    if (unit === "metric") {
      if (heightCm > 0) {
        const heightM = heightCm / 100;
        currentBmi = weightKg / (heightM * heightM);
        minWeight = 18.5 * (heightM * heightM);
        maxWeight = 24.9 * (heightM * heightM);
      }
    } else {
      const totalInches = (heightFt * 12) + heightIn;
      if (totalInches > 0) {
        currentBmi = (703 * weightLbs) / (totalInches * totalInches);
        minWeight = (18.5 * totalInches * totalInches) / 703;
        maxWeight = (24.9 * totalInches * totalInches) / 703;
      }
    }

    if (currentBmi > 0 && currentBmi < 100) {
      setBmi(parseFloat(currentBmi.toFixed(1)));
      
      let cat = "";
      let col = "";
      if (currentBmi < 18.5) {
        cat = "Underweight";
        col = "#3b82f6"; // blue-500
      } else if (currentBmi < 25) {
        cat = "Normal Weight";
        col = "#22c55e"; // green-500
      } else if (currentBmi < 30) {
        cat = "Overweight";
        col = "#eab308"; // yellow-500
      } else {
        cat = "Obese";
        col = "#ef4444"; // red-500
      }
      setCategory(cat);
      setColor(col);
      
      if (unit === "metric") {
        setHealthyRange(`${minWeight.toFixed(1)} kg - ${maxWeight.toFixed(1)} kg`);
      } else {
        setHealthyRange(`${minWeight.toFixed(1)} lbs - ${maxWeight.toFixed(1)} lbs`);
      }
    } else {
      setBmi(0);
      setCategory("");
      setHealthyRange("");
      setColor("");
    }
  }, [unit, heightCm, weightKg, heightFt, heightIn, weightLbs]);

  useEffect(() => {
    calculateBMI();
  }, [calculateBMI]);

  const getRotation = () => {
    // Range 15 to 35 for gauge mapping (15 = 0 deg, 35 = 180 deg)
    if (bmi === 0) return 0;
    const clampedBmi = Math.max(15, Math.min(35, bmi));
    const percentage = (clampedBmi - 15) / 20;
    return percentage * 180;
  };

  return (
    <div className="bg-surface rounded-2xl shadow-sm border border-border p-6 md:p-8">
      <div className="flex gap-4 mb-8">
        <button
          onClick={() => setUnit("metric")}
          className={`flex-1 py-3 px-4 rounded-xl font-medium transition-colors ${
            unit === "metric" ? "bg-primary text-white" : "bg-background text-text hover:bg-background/80"
          }`}
        >
          Metric (cm / kg)
        </button>
        <button
          onClick={() => setUnit("imperial")}
          className={`flex-1 py-3 px-4 rounded-xl font-medium transition-colors ${
            unit === "imperial" ? "bg-primary text-white" : "bg-background text-text hover:bg-background/80"
          }`}
        >
          Imperial (ft / lbs)
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Inputs */}
        <div className="space-y-8">
          {unit === "metric" ? (
            <>
              <div className="space-y-4">
                <RangeSlider
                  label="Height"
                  value={heightCm}
                  min={100}
                  max={250}
                  onChange={setHeightCm}
                  suffix=" cm"
                />
                <NumberInput
                  label="Height (cm)"
                  value={heightCm}
                  onChange={setHeightCm}
                />
              </div>
              <div className="space-y-4">
                <RangeSlider
                  label="Weight"
                  value={weightKg}
                  min={30}
                  max={200}
                  onChange={setWeightKg}
                  suffix=" kg"
                />
                <NumberInput
                  label="Weight (kg)"
                  value={weightKg}
                  onChange={setWeightKg}
                />
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <RangeSlider
                    label="Height (ft)"
                    value={heightFt}
                    min={3}
                    max={8}
                    onChange={setHeightFt}
                    suffix=" ft"
                  />
                  <NumberInput
                    label="Feet"
                    value={heightFt}
                    onChange={setHeightFt}
                  />
                </div>
                <div className="space-y-4">
                  <RangeSlider
                    label="Height (in)"
                    value={heightIn}
                    min={0}
                    max={11}
                    onChange={setHeightIn}
                    suffix=" in"
                  />
                  <NumberInput
                    label="Inches"
                    value={heightIn}
                    onChange={setHeightIn}
                  />
                </div>
              </div>
              <div className="space-y-4">
                <RangeSlider
                  label="Weight"
                  value={weightLbs}
                  min={50}
                  max={400}
                  onChange={setWeightLbs}
                  suffix=" lbs"
                />
                <NumberInput
                  label="Weight (lbs)"
                  value={weightLbs}
                  onChange={setWeightLbs}
                />
              </div>
            </>
          )}
        </div>

        {/* Right: Results & Gauge */}
        <div className="flex flex-col items-center justify-center bg-background rounded-xl p-8 border border-border">
          <h3 className="text-xl font-bold mb-6 text-text">Your BMI Result</h3>
          
          <div className="relative w-64 h-32 mb-4 overflow-hidden flex justify-center">
            {/* SVG Gauge Background */}
            <svg viewBox="0 0 200 100" className="w-full h-full drop-shadow-md">
              <path d="M 20 100 A 80 80 0 0 1 72 38" fill="none" stroke="#3b82f6" strokeWidth="20" strokeLinecap="butt" />
              <path d="M 72 38 A 80 80 0 0 1 128 38" fill="none" stroke="#22c55e" strokeWidth="20" strokeLinecap="butt" />
              <path d="M 128 38 A 80 80 0 0 1 160 55" fill="none" stroke="#eab308" strokeWidth="20" strokeLinecap="butt" />
              <path d="M 160 55 A 80 80 0 0 1 180 100" fill="none" stroke="#ef4444" strokeWidth="20" strokeLinecap="butt" />
              
              {/* Needle */}
              {bmi > 0 && (
                <g style={{ transform: `rotate(${getRotation()}deg)`, transformOrigin: '100px 100px', transition: 'transform 0.5s ease-out' }}>
                  <path d="M 97 100 L 103 100 L 100 20 Z" fill={color} />
                  <circle cx="100" cy="100" r="8" fill={color} />
                </g>
              )}
            </svg>
          </div>
          
          {bmi > 0 ? (
            <div className="text-center w-full space-y-4">
              <div>
                <div className="text-5xl font-black mb-1" style={{ color }}>
                  {bmi}
                </div>
                <div className="text-xl font-semibold" style={{ color }}>
                  {category}
                </div>
              </div>
              
              <div className="pt-4 border-t border-border w-full flex justify-between text-sm">
                <span className="text-text/70">Healthy Weight Range:</span>
                <span className="font-medium text-text">{healthyRange}</span>
              </div>
            </div>
          ) : (
            <div className="text-center text-text/50">
              Enter your height and weight to see your BMI.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
