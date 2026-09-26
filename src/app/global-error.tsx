"use client";

import { Inter } from "next/font/google";
import { AlertTriangle, RefreshCw } from "lucide-react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: 'swap' });

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} min-h-screen bg-background font-sans antialiased flex flex-col items-center justify-center text-center p-4`}>
        <div className="w-24 h-24 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mb-8 relative">
          <AlertTriangle className="w-12 h-12" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-text">
          Critical Error
        </h1>
        
        <p className="text-text/60 max-w-md mx-auto mb-8 text-lg">
          A critical system error occurred. Our team has been notified.
        </p>
        
        <button
          onClick={() => window.location.reload()}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
        >
          <RefreshCw className="w-4 h-4" /> Reload application
        </button>
      </body>
    </html>
  );
}
