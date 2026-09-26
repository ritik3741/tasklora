"use client";

import { useEffect } from "react";
import { WifiOff, Home } from "lucide-react";
import Link from "next/link";

export default function OfflinePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="w-24 h-24 bg-surface border border-border rounded-full flex items-center justify-center mb-8">
        <WifiOff className="w-10 h-10 text-text/40" />
      </div>
      
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        You are offline
      </h1>
      
      <p className="text-text/60 max-w-md mx-auto mb-8 text-lg">
        It looks like you've lost your internet connection. Some tools might still work if they are fully loaded, but navigating to new pages requires a connection.
      </p>
      
      <button 
        onClick={() => window.location.reload()}
        className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
      >
        Try Again
      </button>
    </div>
  );
}
