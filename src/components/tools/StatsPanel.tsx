import React from 'react';
import { cn } from '@/lib/utils';

export interface StatItem {
  label: string;
  value: string | number;
  highlight?: boolean;
}

interface StatsPanelProps {
  stats: StatItem[];
  className?: string;
}

export function StatsPanel({ stats, className }: StatsPanelProps) {
  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-4", className)}>
      {stats.map((stat, i) => (
        <div 
          key={i} 
          className={cn(
            "p-4 rounded-xl border flex flex-col items-center justify-center text-center transition-all",
            stat.highlight 
              ? "bg-primary/10 border-primary/20 text-primary" 
              : "bg-surface border-border text-text"
          )}
        >
          <span className={cn(
            "text-2xl font-bold mb-1",
            stat.highlight ? "text-primary" : "text-text"
          )}>
            {stat.value}
          </span>
          <span className="text-xs text-text/60 font-medium uppercase tracking-wider">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
