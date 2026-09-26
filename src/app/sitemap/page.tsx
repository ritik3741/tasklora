import { generateSEO } from "@/lib/seo";
import Link from "next/link";

export const metadata = generateSEO({
  title: "Sitemap",
  description: "Navigate through all the tools and pages available on Tasklora.",
  path: "/sitemap",
});

const sitemapData = [
  {
    category: "Main Pages",
    links: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Disclaimer", href: "/disclaimer" },
    ],
  },
  {
    category: "Tool Categories",
    links: [
      { name: "Developer Tools", href: "/developer" },
      { name: "PDF Tools", href: "/pdf" },
      { name: "Text Tools", href: "/text" },
      { name: "Calculators", href: "/calculator" },
      { name: "SEO Tools", href: "/seo" },
    ],
  }
];

export default function SitemapPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">HTML Sitemap</h1>
      
      <p className="text-lg text-text/80 mb-12">
        Looking for a specific page or tool? Use this sitemap to navigate through Tasklora.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
        {sitemapData.map((section) => (
          <div key={section.category}>
            <h2 className="text-2xl font-semibold mb-6 pb-2 border-b border-border">{section.category}</h2>
            <ul className="space-y-3">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-text/80 hover:text-primary hover:underline transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="mt-16 p-6 bg-surface rounded-xl border border-border">
        <p className="text-text/70">
          <strong>Note for search engines:</strong> You can find our XML sitemap at <Link href="/sitemap.xml" className="text-primary hover:underline">tasklora.com/sitemap.xml</Link>.
        </p>
      </div>
    </div>
  );
}
