import * as React from "react";
import Link from "next/link";
import { Suspense } from "react";
import { 
  Terminal, FileText, Type, Calculator, Search, 
  Zap, Shield, Gift
} from "lucide-react";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { FilteredTools } from "@/components/FilteredTools";
import { Button } from "@/components/ui/Button";
import { AdBanner } from "@/components/ads/AdComponents";

const categories = [
  { title: "Developer Tools", description: "Format, validate, and convert code instantly.", icon: Terminal, count: 45, href: "/developer" },
  { title: "PDF Tools", description: "Compress, merge, split, and convert PDF files.", icon: FileText, count: 12, href: "/pdf" },
  { title: "Text Tools", description: "Count words, change case, and manipulate text.", icon: Type, count: 28, href: "/text" },
  { title: "Calculators", description: "Calculate GST, age, EMI, and more instantly.", icon: Calculator, count: 15, href: "/calculator" },
  { title: "SEO Tools", description: "Analyze meta tags, generate sitemaps, and more.", icon: Search, count: 10, href: "/seo" },
];

const faqs = [
  { question: "Is Tasklora free?", answer: "Yes, Tasklora is completely free to use. There are no hidden charges, subscriptions, or premium tiers. All tools are accessible to everyone." },
  { question: "Do I need an account?", answer: "No account or registration is required. You can start using all the tools immediately without signing up or providing any personal information." },
  { question: "Are my files uploaded to your servers?", answer: "No. Tasklora is built with a privacy-first approach. Most tools, including file converters and formatters, process data directly in your browser. Your data never leaves your device." },
  { question: "Does it work on mobile?", answer: "Absolutely! Tasklora is fully responsive and designed to work seamlessly on desktop, tablet, and mobile devices." },
  { question: "Is it safe to use?", answer: "Yes, it is completely safe. Since everything runs locally in your browser, there is no risk of your sensitive data (like JSON files, JWT tokens, or PDFs) being intercepted or stored." },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">100+ Free Online Tools</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-text/80 mb-8 max-w-3xl mx-auto">
            For Developers, Students & Businesses
          </h2>
          <p className="text-lg text-text/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Format JSON, compress PDFs, calculate GST, generate UUIDs, count words, and access dozens of privacy-friendly browser-based tools without signing up.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" asChild>
              <Link href="#popular-tools">Explore Tools</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#categories">Browse Categories</Link>
            </Button>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-3">
            {["JSON Formatter", "PDF Compressor", "UUID Generator", "GST Calculator", "Word Counter"].map((keyword) => (
              <span key={keyword} className="px-4 py-2 rounded-full bg-surface border border-border text-sm font-medium text-text/80 hover:border-primary/50 hover:text-primary transition-colors cursor-default">
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </section>

      <AdBanner />

      {/* Categories Section */}
      <section id="categories" className="py-24 bg-surface/50 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse by Category</h2>
            <p className="text-text/60 max-w-2xl mx-auto">Find the perfect tool for your needs from our carefully curated collections.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.title} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Tools Section */}
      <section id="popular-tools" className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Tools</h2>
              <p className="text-text/60 max-w-2xl">Our most frequently used utilities by the community.</p>
            </div>
            <Button variant="ghost" asChild>
              <Link href="/developer">View all developer tools &rarr;</Link>
            </Button>
          </div>
          
          <Suspense fallback={<div className="h-[400px] flex items-center justify-center">Loading tools...</div>}>
            <FilteredTools />
          </Suspense>
        </div>
      </section>

      {/* Why Tasklora Section */}
      <section className="py-24 bg-surface/50 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Tasklora?</h2>
            <p className="text-text/60 max-w-2xl mx-auto">Built with modern web technologies to provide the best user experience.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 rounded-2xl bg-background border border-border hover:shadow-lg transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Zap className="w-32 h-32" />
              </div>
              <div className="w-14 h-14 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-6">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Lightning Fast</h3>
              <p className="text-text/70 leading-relaxed">Everything runs directly in your browser. No server round-trips mean instant results for most operations.</p>
            </div>
            <div className="p-8 rounded-2xl bg-background border border-border hover:shadow-lg transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Shield className="w-32 h-32" />
              </div>
              <div className="w-14 h-14 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-6">
                <Shield className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Privacy First</h3>
              <p className="text-text/70 leading-relaxed">Your data never leaves your device. We don't store your files, logs, or sensitive information on our servers.</p>
            </div>
            <div className="p-8 rounded-2xl bg-background border border-border hover:shadow-lg transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Gift className="w-32 h-32" />
              </div>
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <Gift className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Completely Free</h3>
              <p className="text-text/70 leading-relaxed">Unlimited usage with no registration required. Enjoy all our premium tools without paying a dime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-text/60 max-w-2xl mx-auto">Got questions? We've got answers.</p>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>
      
      <AdBanner />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Tasklora",
            url: "https://tasklora.com",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://tasklora.com/?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
    </div>
  );
}
