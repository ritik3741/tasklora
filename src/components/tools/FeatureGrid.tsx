import * as React from "react";
import { CheckCircle2 } from "lucide-react";

interface Feature {
  title: string;
  description: string;
}

export function FeatureGrid({ features }: { features: Feature[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
      {features.map((feature, i) => (
        <div key={i} className="flex gap-4 p-5 rounded-xl border border-border bg-surface">
          <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
          <div>
            <h3 className="font-semibold mb-1">{feature.title}</h3>
            <p className="text-sm text-text/70">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
