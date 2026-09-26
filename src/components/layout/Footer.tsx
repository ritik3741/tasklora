import Link from "next/link";
import { cn } from "@/lib/utils";

const footerLinks = {
  categories: [
    { name: "Developer", href: "/developer" },
    { name: "PDF", href: "/pdf" },
    { name: "Text", href: "/text" },
    { name: "Calculator", href: "/calculator" },
    { name: "SEO", href: "/seo" },
  ],
  popular: [
    { name: "JSON Formatter", href: "/developer/json-formatter" },
    { name: "GST Calculator", href: "/calculator/gst" },
    { name: "UUID Generator", href: "/developer/uuid" },
    { name: "Word Counter", href: "/text/word-counter" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Disclaimer", href: "/disclaimer" },
    { name: "Sitemap", href: "/sitemap.xml" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-semibold text-text mb-4">Categories</h3>
            <ul className="space-y-3">
              {footerLinks.categories.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-text/70 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-text mb-4">Popular Tools</h3>
            <ul className="space-y-3">
              {footerLinks.popular.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-text/70 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-text mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-text/70 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-text mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-text/70 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">T</span>
            </div>
            <span className="font-bold text-lg tracking-tight">Tasklora</span>
          </div>
          <p className="text-sm text-text/60">
            © 2026 Tasklora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
