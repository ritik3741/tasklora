"use client";

import * as React from "react";
import { ToolCard } from "@/components/ui/ToolCard";
import { Search, type LucideIcon } from "lucide-react";
import { 
  Calculator, PieChart, TrendingUp, CalendarDays, Percent, 
  Activity, Tag, CreditCard, Banknote, Coins
} from "lucide-react";

interface CalculatorTool {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  isPopular?: boolean;
}

const tools: CalculatorTool[] = [
  { title: "GST Calculator", description: "Calculate GST exclusive and inclusive amounts instantly.", icon: Calculator, href: "/calculator/gst-calculator", isPopular: true },
  { title: "EMI Calculator", description: "Calculate monthly EMI and view loan repayment schedules.", icon: PieChart, href: "/calculator/emi-calculator", isPopular: true },
  { title: "SIP Calculator", description: "Calculate mutual fund SIP returns and wealth gained.", icon: TrendingUp, href: "/calculator/sip-calculator", isPopular: true },
  { title: "Age Calculator", description: "Calculate exact age in years, months, and days.", icon: CalendarDays, href: "/calculator/age-calculator" },
  { title: "Percentage Calculator", description: "Find percentages, increases, and decreases instantly.", icon: Percent, href: "/calculator/percentage-calculator" },
  { title: "BMI Calculator", description: "Calculate Body Mass Index and find your ideal weight.", icon: Activity, href: "/calculator/bmi-calculator" },
  { title: "Discount Calculator", description: "Calculate final price after discounts and taxes.", icon: Tag, href: "/calculator/discount-calculator" },
  { title: "Loan Calculator", description: "Estimate loan costs, monthly payments, and total interest.", icon: CreditCard, href: "/calculator/loan-calculator" },
  { title: "Compound Interest", description: "Calculate future value with compound interest.", icon: Banknote, href: "/calculator/compound-interest-calculator" },
  { title: "Currency Converter", description: "Offline converter with customizable exchange rates.", icon: Coins, href: "/calculator/currency-converter" },
];

export function CalculatorToolSearch() {
  const [query, setQuery] = React.useState("");

  const filteredTools = React.useMemo(() => {
    if (!query) return tools;
    const lowerQ = query.toLowerCase();
    return tools.filter(
      t => t.title.toLowerCase().includes(lowerQ) || t.description.toLowerCase().includes(lowerQ)
    );
  }, [query]);

  return (
    <div>
      <div className="relative max-w-2xl mx-auto mb-12">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="w-5 h-5 text-text/40" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search calculators (e.g. gst, emi, bmi)..."
          className="w-full pl-12 pr-4 py-4 rounded-full border border-border bg-surface text-lg focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredTools.length > 0 ? (
          filteredTools.map((tool) => (
            <div key={tool.title} className="relative">
              {tool.isPopular && (
                <span className="absolute -top-3 -right-2 z-10 px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-red-500 text-white rounded-full shadow-sm">
                  Popular
                </span>
              )}
              <ToolCard 
                title={tool.title}
                description={tool.description}
                icon={tool.icon}
                href={tool.href}
                isComingSoon={false}
              />
            </div>
          ))
        ) : (
          <div className="col-span-full py-12 text-center text-text/60">
            No calculators found matching "{query}".
          </div>
        )}
      </div>
    </div>
  );
}
