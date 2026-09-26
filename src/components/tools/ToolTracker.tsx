"use client";
import { useEffect } from "react";
import { trackToolOpened } from "@/lib/analytics";

export function ToolTracker({ title }: { title: string }) {
  useEffect(() => {
    trackToolOpened(title);
  }, [title]);
  
  return null;
}
