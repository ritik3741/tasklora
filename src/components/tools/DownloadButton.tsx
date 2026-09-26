"use client";

import * as React from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { trackDownloadAction } from "@/lib/analytics";
import { cn } from "@/lib/utils";

interface DownloadButtonProps {
  content: string | Blob | Uint8Array;
  filename: string;
  mimeType?: string;
  className?: string;
  variant?: "default" | "outline" | "ghost" | "secondary";
  label?: string;
  toolName?: string;
}

export function DownloadButton({ 
  content, 
  filename, 
  mimeType = "text/plain", 
  className, 
  variant = "outline",
  label = "Download",
  toolName = "Unknown Tool"
}: DownloadButtonProps) {
  const handleDownload = () => {
    if (!content) return;
    
    let blob: Blob;
    if (content instanceof Blob) {
      blob = content;
    } else if (typeof content === "string") {
      blob = new Blob([content], { type: mimeType });
    } else {
      blob = new Blob([new Uint8Array(content)], { type: mimeType });
    }

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    trackDownloadAction(toolName);
  };

  return (
    <Button variant={variant} className={cn("w-full sm:w-auto min-h-[44px]", className)} onClick={handleDownload} disabled={!content}>
      <Download className="w-4 h-4 mr-2" />
      {label}
    </Button>
  );
}
