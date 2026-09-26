"use client";

import * as React from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { SearchBar } from "@/components/ui/SearchBar";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const categories = [
  { name: "Developer Tools", href: "/developer" },
  { name: "PDF Tools", href: "/pdf" },
  { name: "Text Tools", href: "/text" },
  { name: "Calculators", href: "/calculator" },
  { name: "SEO Tools", href: "/seo" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-200 border-b border-transparent bg-background/80 backdrop-blur-md safe-pt",
          isScrolled && "border-border shadow-sm py-2",
          !isScrolled && "py-4"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2 group min-h-[44px] min-w-[44px]">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:bg-primary/90 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-5 h-5 text-white">
                  <rect width="256" height="256" fill="none"/>
                  <line x1="80" y1="104" x2="176" y2="104" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <line x1="80" y1="152" x2="176" y2="152" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </div>
              <span className="font-bold text-xl tracking-tight hidden sm:inline-block">
                Tasklora
              </span>
            </Link>
          </div>

          <div className="hidden md:flex flex-1 max-w-md mx-6">
            <React.Suspense fallback={<div className="h-10 w-full rounded-full bg-surface animate-pulse" />}>
              <SearchBar />
            </React.Suspense>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <button
                className="flex items-center gap-1 text-sm font-medium text-text hover:text-primary transition-colors min-h-[44px] px-2"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
              >
                Categories <ChevronDown className="w-4 h-4" />
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 rounded-xl border border-border bg-background shadow-lg overflow-hidden py-1 animate-in fade-in zoom-in-95">
                  {categories.map((cat) => (
                    <Link
                      key={cat.href}
                      href={cat.href}
                      className="block px-4 py-3 text-sm text-text hover:bg-surface hover:text-primary transition-colors min-h-[44px]"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <ThemeToggle />
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="min-h-[44px] min-w-[44px]"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Slide-out Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-background/80 backdrop-blur-sm animate-in fade-in"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Drawer */}
          <div className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-background border-l border-border shadow-2xl animate-in slide-in-from-right flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-border safe-pt">
              <span className="font-bold text-xl tracking-tight">Menu</span>
              <Button
                variant="ghost"
                size="icon"
                className="min-h-[44px] min-w-[44px]"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>
            
            <div className="p-4 flex-1 overflow-y-auto safe-pb">
              <div className="mb-8">
                <React.Suspense fallback={<div className="h-12 w-full rounded-full bg-surface animate-pulse" />}>
                  <SearchBar />
                </React.Suspense>
              </div>
              
              <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold text-text/60 uppercase tracking-wider mb-2 px-2">
                  Categories
                </span>
                {categories.map((cat) => (
                  <Link
                    key={cat.href}
                    href={cat.href}
                    className="flex items-center justify-between text-text hover:text-primary hover:bg-surface/50 p-4 rounded-xl transition-colors font-medium min-h-[56px]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {cat.name}
                    <ArrowRight className="w-4 h-4 text-text/40" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
