"use client";
import * as React from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { trackCopyAction } from "@/lib/analytics";
import { cn } from "@/lib/utils";

interface CopyButtonProps {
  text: string;
  className?: string;
  variant?: "default" | "outline" | "ghost" | "secondary";
  label?: string;
  toolName?: string;
}

export function CopyButton({ text, className, variant = "outline", label = "Copy", toolName = "Unknown Tool" }: CopyButtonProps) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      trackCopyAction(toolName);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <Button variant={variant} className={cn("w-full sm:w-auto min-h-[44px]", className)} onClick={handleCopy} disabled={!text}>
      {copied ? <Check className="w-4 h-4 mr-2 text-green-500" /> : <Copy className="w-4 h-4 mr-2" />}
      {copied ? "Copied!" : label}
    </Button>
  );
}
