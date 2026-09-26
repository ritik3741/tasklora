import React from 'react';
import { cn } from '@/lib/utils';

interface NumberInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label: string;
  value: number | string;
  onChange: (value: number) => void;
  icon?: React.ReactNode;
  suffix?: string;
  prefix?: string;
  error?: string;
}

export function NumberInput({ 
  label, value, onChange, icon, suffix, prefix, error, className, ...props 
}: NumberInputProps) {
  return (
    <div className="w-full space-y-2">
      <label className="block text-sm font-medium text-text">
        {label}
      </label>
      <div className="relative flex items-center">
        {icon && (
          <div className="absolute left-3 text-text/50">
            {icon}
          </div>
        )}
        {prefix && (
          <div className="absolute left-3 text-text/50 font-medium">
            {prefix}
          </div>
        )}
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
          className={cn(
            "w-full h-12 rounded-xl border border-border bg-surface text-text px-4 transition-all",
            "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent",
            (icon || prefix) && "pl-10",
            suffix && "pr-12",
            error && "border-red-500 focus:ring-red-500/50",
            className
          )}
          {...props}
        />
        {suffix && (
          <div className="absolute right-4 text-text/50 font-medium">
            {suffix}
          </div>
        )}
      </div>
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
}
