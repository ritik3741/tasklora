"use client";

import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

// Real production ad integration (without publisher ID)
function AdSenseUnit({
  className,
  format = "auto",
  responsive = "true",
  style
}: {
  className?: string;
  format?: string;
  responsive?: string;
  style?: React.CSSProperties;
}) {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error("AdSense error", e);
    }
  }, []);

  const adClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "ca-pub-XXXXXXXXXXXXXXXX";

  return (
    <ins
      className={`adsbygoogle ${className || ""}`}
      style={style || { display: "block" }}
      data-ad-client={adClient}
      data-ad-slot="XXXXXXXXXX"
      data-ad-format={format}
      data-full-width-responsive={responsive}
    />
  );
}

// Lazy loaded ad container to prevent CLS
export function AdContainer({
  type,
  className,
}: {
  type: "banner" | "sidebar" | "inline";
  className?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // Load before scrolling into view
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Dimensions to prevent CLS
  const heights = {
    banner: "min-h-[100px] md:min-h-[250px]",
    sidebar: "min-h-[600px]",
    inline: "min-h-[250px]",
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "w-full bg-surface/50 border border-border/50 rounded-xl overflow-hidden flex flex-col items-center justify-center my-6 relative",
        heights[type],
        className
      )}
      aria-hidden="true"
    >
      <span className="absolute text-xs text-text/20 font-medium uppercase tracking-widest pointer-events-none">
        Advertisement
      </span>
      {isVisible && <AdSenseUnit format="fluid" style={{ display: "block", width: "100%", height: "100%" }} />}
    </div>
  );
}

export function AdBanner({ className }: { className?: string }) {
  return <AdContainer type="banner" className={className} />;
}

export function AdSidebar({ className }: { className?: string }) {
  return <AdContainer type="sidebar" className={className} />;
}

export function AdInline({ className }: { className?: string }) {
  return <AdContainer type="inline" className={className} />;
}
