import * as React from "react";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { ToolHero } from "./ToolHero";
import { AdBanner } from "@/components/ads/AdComponents";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { RelatedTools } from "./RelatedTools";
import { ToolTracker } from "./ToolTracker";

interface ToolLayoutProps {
  title: string;
  description: string;
  path: string;
  children: React.ReactNode;
  content: React.ReactNode;
  faqs: { question: string; answer: string }[];
}

export function ToolLayout({ title, description, path, children, content, faqs }: ToolLayoutProps) {
  const getCategoryFromPath = (path: string) => {
    if (path.startsWith("/developer")) return { label: "Developer Tools", href: "/developer" };
    if (path.startsWith("/pdf")) return { label: "PDF Tools", href: "/pdf" };
    if (path.startsWith("/text")) return { label: "Text Tools", href: "/text" };
    if (path.startsWith("/calculator")) return { label: "Calculator Tools", href: "/calculator" };
    if (path.startsWith("/seo")) return { label: "SEO Tools", href: "/seo" };
    return { label: "Tools", href: "/tools" };
  };

  const breadcrumbs = [
    { label: "Home", href: "/" },
    getCategoryFromPath(path),
    { label: title, href: path },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <ToolTracker title={title} />
      <div className="mb-8">
        <Breadcrumb items={breadcrumbs} />
      </div>

      <ToolHero title={title} description={description} path={path} />

      <div className="mb-12">
        {children}
      </div>

      <div className="my-12">
        <AdBanner />
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none text-text/80 my-16">
        {content}
      </div>

      {faqs.length > 0 && (
        <div className="my-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-text">Frequently Asked Questions</h2>
          <FAQAccordion items={faqs} />
        </div>
      )}

      <RelatedTools currentPath={path} />

      <div className="mt-16 text-center text-sm text-text/50">
        Last updated: {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
      </div>
    </div>
  );
}
