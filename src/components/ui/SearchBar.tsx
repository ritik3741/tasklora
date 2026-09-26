"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [query, setQuery] = React.useState(searchParams.get("q") || "");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    
    // If not on homepage, navigate to homepage with query
    if (pathname !== "/") {
      if (val.trim()) {
        router.push(`/?q=${encodeURIComponent(val)}`);
      }
    } else {
      // Update URL without full reload on homepage
      const params = new URLSearchParams(searchParams.toString());
      if (val) {
        params.set("q", val);
      } else {
        params.delete("q");
      }
      window.history.pushState(null, "", `/?${params.toString()}`);
      // Dispatch a custom event so other components can listen
      window.dispatchEvent(new Event("search-updated"));
    }
  };

  React.useEffect(() => {
    setQuery(searchParams.get("q") || "");
  }, [searchParams]);

  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-text/50">
        <Search className="w-4 h-4" />
      </div>
      <input
        type="search"
        value={query}
        onChange={handleSearch}
        className="w-full h-10 pl-10 pr-4 rounded-full bg-surface border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm placeholder:text-text/50"
        placeholder="Search for tools... (e.g., JSON)"
      />
    </div>
  );
}
