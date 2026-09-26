import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center text-sm font-medium text-text/60">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center">
              {index === 0 ? (
                <Link href={item.href} className="hover:text-primary transition-colors flex items-center">
                  <Home className="w-4 h-4 mr-1" />
                  <span className="sr-only">Home</span>
                </Link>
              ) : (
                <Link
                  href={item.href}
                  className={`hover:text-primary transition-colors ${
                    isLast ? "text-text pointer-events-none" : ""
                  }`}
                  aria-current={isLast ? "page" : undefined}
                >
                  {item.label}
                </Link>
              )}
              {!isLast && <ChevronRight className="w-4 h-4 mx-1 text-border" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
