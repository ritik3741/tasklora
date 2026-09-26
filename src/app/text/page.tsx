import { generateSEO } from "@/lib/seo";
import { 
  Type, ShieldCheck, Zap, BookOpen, User, 
  Code2, TrendingUp, PenTool
} from "lucide-react";
import { AdBanner } from "@/components/ads/AdComponents";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { TextToolSearch } from "@/components/tools/TextToolSearch";

export const metadata = generateSEO({
  title: "Free Online Text Tools | Word Counter, Case Converter",
  description: "Count words, convert text cases, remove duplicate lines, generate slugs, clean whitespace, and transform text instantly in your browser.",
  path: "/text",
});

const faqs = [
  { question: "Are these text tools really free?", answer: "Yes, all our text utilities are completely free to use without any hidden fees, subscriptions, or limits." },
  { question: "Is my text data stored on your servers?", answer: "No. Our text tools process your input entirely in your web browser. Your text is never uploaded to any server, ensuring absolute privacy." },
  { question: "Can I process large amounts of text?", answer: "Yes, because processing happens on your local device, the amount of text you can process is only limited by your computer's memory." },
  { question: "Do these tools work offline?", answer: "Once the page is loaded, the actual text processing works without needing an active internet connection since it relies on local JavaScript." },
  { question: "Do I need to install any software?", answer: "No installation is required. Everything runs directly inside modern web browsers like Chrome, Firefox, Safari, or Edge." },
  { question: "Is there a character limit?", answer: "There is no hardcoded character limit. You can paste thousands of lines of text and it will be processed instantly." },
];

export default function TextToolsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative py-24 overflow-hidden bg-surface border-b border-border/50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-6">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Text Tools", href: "/text" }]} />
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-text">Free Online Text Tools</h1>
              <p className="text-xl text-text/70 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Count words, convert text cases, remove duplicate lines, generate slugs, clean whitespace, and transform text instantly.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm font-medium">
                <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                  <ShieldCheck className="w-4 h-4" /> Privacy Friendly
                </div>
                <div className="flex items-center gap-2 bg-background border border-border px-4 py-2 rounded-full">
                  <Zap className="w-4 h-4 text-yellow-500" /> Fast Local Processing
                </div>
                <div className="flex items-center gap-2 bg-background border border-border px-4 py-2 rounded-full">
                  <Type className="w-4 h-4 text-blue-500" /> 10+ Free Utilities
                </div>
              </div>
            </div>
            
            <div className="flex-1 flex justify-center w-full max-w-md relative">
              {/* Typography SVG Illustration */}
              <div className="w-64 h-80 bg-background border border-border rounded-xl shadow-2xl relative -rotate-3 p-6 flex flex-col justify-center items-center overflow-hidden">
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl -z-10"></div>
                
                <span className="text-[120px] leading-none font-serif font-black text-text/10 select-none absolute top-4 left-4">A</span>
                <span className="text-[80px] leading-none font-serif font-black text-text/5 select-none absolute bottom-4 right-4">g</span>
                
                <div className="relative z-10 w-full bg-surface p-4 rounded border border-border shadow-sm mb-4">
                  <div className="h-2 w-3/4 bg-primary/20 rounded mb-2"></div>
                  <div className="h-2 w-full bg-border rounded mb-2"></div>
                  <div className="h-2 w-5/6 bg-border rounded"></div>
                </div>
                <div className="relative z-10 w-full bg-primary text-primary-foreground p-3 rounded font-bold text-center text-sm shadow-md">
                  Format Text
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <TextToolSearch />

        <div className="my-16">
          <AdBanner />
        </div>

        <section className="py-16 border-t border-border/50">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Who are these Text Tools for?</h2>
            <p className="text-text/60 max-w-2xl mx-auto">Built to improve daily workflows for professionals.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-surface border border-border text-center hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 mx-auto bg-purple-500/10 text-purple-500 rounded-xl flex items-center justify-center mb-4">
                <PenTool className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Writers & Authors</h3>
              <p className="text-text/60 text-sm">Track word counts, estimate reading times, and ensure your copy hits exact length requirements.</p>
            </div>
            <div className="p-6 rounded-2xl bg-surface border border-border text-center hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 mx-auto bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Students</h3>
              <p className="text-text/60 text-sm">Easily format essays, clean up pasted citations, and check character limits for applications.</p>
            </div>
            <div className="p-6 rounded-2xl bg-surface border border-border text-center hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 mx-auto bg-green-500/10 text-green-500 rounded-xl flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Developers</h3>
              <p className="text-text/60 text-sm">Remove duplicate lines in logs, sort data alphabetically, or generate clean slugs instantly.</p>
            </div>
            <div className="p-6 rounded-2xl bg-surface border border-border text-center hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 mx-auto bg-orange-500/10 text-orange-500 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">SEO Professionals</h3>
              <p className="text-text/60 text-sm">Check keyword density, adjust title casing for better CTR, and strip out messy whitespace.</p>
            </div>
          </div>
        </section>

        <div className="py-16 border-t border-border/50">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-text/60 max-w-2xl mx-auto">Common questions about our Text utilities.</p>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map(faq => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer
              }
            }))
          })
        }}
      />
    </div>
  );
}
