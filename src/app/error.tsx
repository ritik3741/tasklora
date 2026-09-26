"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service if desired
    console.error("Page error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="w-24 h-24 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mb-8 relative">
        <AlertTriangle className="w-12 h-12" />
      </div>
      
      <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-text">
        Something went wrong!
      </h1>
      
      <p className="text-text/60 max-w-md mx-auto mb-8 text-lg">
        We encountered an unexpected error. Please try again or return to the homepage.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={reset}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
        >
          <RefreshCw className="w-4 h-4" /> Try again
        </button>
        <Link 
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-surface border border-border font-medium hover:border-primary/50 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
