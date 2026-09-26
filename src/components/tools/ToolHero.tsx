import * as React from "react";
import { Link2 } from "lucide-react";
import { CopyButton } from "./CopyButton";

interface ToolHeroProps {
  title: string;
  description: string;
  path: string;
}

export function ToolHero({ title, description, path }: ToolHeroProps) {
  const url = `https://tasklora.com${path}`;

  return (
    <div className="text-center mb-10">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-text">
        {title}
      </h1>
      <p className="text-lg text-text/60 max-w-2xl mx-auto mb-6">
        {description}
      </p>
      <div className="flex items-center justify-center">
        <CopyButton 
          text={url} 
          variant="secondary" 
          label="Copy Link" 
          className="rounded-full h-9" 
        />
      </div>
    </div>
  );
}
