import React from 'react';
import { cn } from '@/lib/utils';

interface RangeSliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
  suffix?: string;
}

export function RangeSlider({ label, value, min, max, step = 1, onChange, suffix }: RangeSliderProps) {
  return (
    <div className="w-full space-y-4">
      <div className="flex justify-between items-center">
        <label className="block text-sm font-medium text-text">
          {label}
        </label>
        <div className="text-primary font-bold">
          {value}{suffix}
        </div>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="w-full h-2 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
      />
      <div className="flex justify-between text-xs text-text/50">
        <span>{min}{suffix}</span>
        <span>{max}{suffix}</span>
      </div>
    </div>
  );
}
