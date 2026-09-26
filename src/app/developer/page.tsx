import { generateSEO } from "@/lib/seo";
import { Terminal, Braces, CheckCircle, Hash, Lock, FileJson, Link as LinkIcon, Regex } from "lucide-react";
import { ToolCard } from "@/components/ui/ToolCard";
import { AdSidebar, AdBanner } from "@/components/ads/AdComponents";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import Link from "next/link";

export const metadata = generateSEO({
  title: "Free Online Developer Tools",
  description: "Format JSON, generate UUIDs, decode JWTs, encode Base64, hash text, test regular expressions, and access powerful browser-based developer utilities.",
  path: "/developer",
});

const tools = [
  { title: "JSON Formatter", description: "Format and beautify your JSON data instantly with syntax highlighting.", icon: Braces, href: "/developer/json-formatter" },
  { title: "JSON Validator", description: "Validate your JSON code and find syntax errors quickly.", icon: CheckCircle, href: "/developer/json-validator" },
  { title: "Base64 Encoder", description: "Encode text or data to Base64 format securely in your browser.", icon: Lock, href: "/developer/base64-encoder" },
  { title: "Base64 Decoder", description: "Decode Base64 strings back to their original text or binary format.", icon: Lock, href: "/developer/base64-decoder" },
  { title: "UUID Generator", description: "Generate universally unique identifiers (UUIDs) version 4 instantly.", icon: Hash, href: "/developer/uuid-generator" },
  { title: "JWT Decoder", description: "Decode JSON Web Tokens (JWT) to view their payload and header claims.", icon: FileJson, href: "/developer/jwt-decoder" },
  { title: "SHA256 Generator", description: "Generate SHA-256 cryptographic hashes from text.", icon: Hash, href: "/developer/sha256-generator" },
  { title: "URL Encoder", description: "Encode URL components safely.", icon: LinkIcon, href: "/developer/url-encoder" },
  { title: "URL Decoder", description: "Decode URL-encoded strings back to text.", icon: LinkIcon, href: "/developer/url-decoder" },
  { title: "Regex Tester", description: "Test and debug regular expressions with live highlighting.", icon: Regex, href: "/developer/regex-tester" },
];

const popularSearches = [
  "JSON Formatter", "UUID Generator", "JWT Decoder", 
  "Base64 Encoder", "SHA256 Generator", "Regex Tester"
];

const faqs = [
  { question: "Are these developer tools secure?", answer: "Yes. All our developer tools operate entirely on the client side (in your web browser). Your data is never sent to or stored on our servers." },
  { question: "Can I format large JSON files?", answer: "Yes, our JSON formatter can handle large files, limited only by your browser's memory capacity." },
  { question: "Do you store JWT payloads?", answer: "No. JWT decoding happens instantly in your browser using JavaScript. No tokens are transmitted over the network." },
  { question: "Are the UUIDs generated cryptographically secure?", answer: "Yes, our UUID v4 generator uses the browser's native Crypto API (`crypto.randomUUID()`) ensuring high-quality randomness." },
  { question: "Can I use these tools offline?", answer: "While the tools run in the browser, you currently need an internet connection to load the initial page assets." },
  { question: "Is there an API available for these tools?", answer: "Currently, Tasklora provides these tools as web-based utilities only. We do not offer a public API." }
];

export default function DeveloperToolsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative py-20 overflow-hidden bg-surface border-b border-border/50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-6">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Developer Tools", href: "/developer" }]} />
          </div>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-primary/10 text-primary rounded-2xl shadow-sm">
              <Terminal className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Free Online Developer Tools</h1>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 rounded bg-background border border-border text-xs font-semibold">{tools.length} Tools</span>
              </div>
            </div>
          </div>
          <p className="text-xl text-text/70 max-w-3xl leading-relaxed">
            Format JSON, generate UUIDs, decode JWTs, encode Base64, hash text, test regular expressions, and access powerful browser-based developer utilities.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="text-sm font-semibold text-text/50 uppercase tracking-wider mb-4">Popular Searches</h2>
          <div className="flex flex-wrap gap-2">
            {popularSearches.map(term => (
              <Link key={term} href={`/?q=${encodeURIComponent(term)}`} className="px-4 py-2 rounded-full bg-surface border border-border hover:border-primary/50 hover:text-primary transition-colors text-sm font-medium">
                {term}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 h-fit">
            {tools.map((tool) => (
              <ToolCard key={tool.title} {...tool} isComingSoon={false} />
            ))}
          </div>
          <div className="w-full lg:w-[300px] shrink-0 space-y-6">
            <AdSidebar />
          </div>
        </div>
        
        <AdBanner />

        <div className="py-16 border-t border-border/50 mt-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-text/60 max-w-2xl mx-auto">Common questions about our developer tools.</p>
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
