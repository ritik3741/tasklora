import { generateSEO } from "@/lib/seo";
import { 
  Search, TrendingUp, Share2, Zap, Globe
} from "lucide-react";
import { AdBanner } from "@/components/ads/AdComponents";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { SEOToolSearch } from "@/components/tools/SEOToolSearch";

export const metadata = generateSEO({
  title: "Free Online SEO Tools | Meta Tags, Schema & XML Sitemaps",
  description: "Generate meta tags, Open Graph tags, robots.txt, XML sitemaps, canonical URLs, schema markup, and optimize websites with browser-based SEO utilities.",
  path: "/seo",
});

const faqs = [
  { question: "Are these SEO tools completely free?", answer: "Yes, all our SEO tools are 100% free to use with no hidden costs or limits." },
  { question: "Do you store my website data?", answer: "No. All generation and calculations are performed locally in your web browser. We do not track, store, or upload your inputs." },
  { question: "Is the generated schema code valid?", answer: "Yes, our Schema generators produce valid JSON-LD code that complies with Google's structured data guidelines." },
  { question: "Why is SEO important?", answer: "SEO (Search Engine Optimization) ensures your website is visible to users searching for your content on Google, Bing, and other search engines." },
  { question: "Do these work on mobile?", answer: "Absolutely! Every tool is fully responsive and optimized for mobile devices, tablets, and desktops." },
];

export default function SEOToolsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative py-24 overflow-hidden bg-surface border-b border-border/50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-6">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "SEO Tools", href: "/seo" }]} />
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-text">Free Online SEO Tools</h1>
              <p className="text-xl text-text/70 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Generate meta tags, Open Graph tags, robots.txt, XML sitemaps, schema markup, and optimize websites with browser-based SEO utilities.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm font-medium">
                <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                  <Globe className="w-4 h-4 text-blue-500" /> 12+ SEO Tools
                </div>
                <div className="flex items-center gap-2 bg-background border border-border px-4 py-2 rounded-full">
                  <Zap className="w-4 h-4 text-yellow-500" /> Browser Based
                </div>
                <div className="flex items-center gap-2 bg-background border border-border px-4 py-2 rounded-full">
                  <Search className="w-4 h-4 text-green-500" /> Search Engine Friendly
                </div>
              </div>
            </div>
            
            <div className="flex-1 flex justify-center w-full max-w-md relative">
              {/* SEO SVG Illustration */}
              <div className="w-64 h-80 bg-background border border-border rounded-xl shadow-2xl relative rotate-3 p-6 flex flex-col items-center overflow-hidden">
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -z-10"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-green-500/10 rounded-full blur-2xl -z-10"></div>
                
                <span className="text-[120px] leading-none font-sans font-black text-text/5 select-none absolute top-4 left-4">&lt;&gt;</span>
                <span className="text-[80px] leading-none font-sans font-black text-text/5 select-none absolute bottom-4 right-4">{"{ }"}</span>
                
                <div className="w-full mb-4 mt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Search className="w-5 h-5 text-primary" />
                    <div className="h-2 flex-1 bg-border rounded-full"></div>
                  </div>
                  <div className="bg-surface border border-border rounded p-3 shadow-sm">
                    <div className="h-3 w-3/4 bg-blue-500/80 rounded mb-2"></div>
                    <div className="h-2 w-full bg-text/20 rounded mb-1"></div>
                    <div className="h-2 w-5/6 bg-text/20 rounded"></div>
                  </div>
                </div>
                
                <div className="w-full flex items-end gap-2 h-16 justify-center">
                  <div className="w-4 h-8 bg-border rounded-t"></div>
                  <div className="w-4 h-10 bg-border rounded-t"></div>
                  <div className="w-4 h-12 bg-border rounded-t"></div>
                  <div className="w-4 h-16 bg-primary rounded-t"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <SEOToolSearch />

        <div className="my-16">
          <AdBanner />
        </div>

        <section className="py-16 border-t border-border/50">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why SEO Matters</h2>
            <p className="text-text/60 max-w-2xl mx-auto">Optimize your website to reach more users and grow your business.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-surface border border-border text-center hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 mx-auto bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Better Rankings</h3>
              <p className="text-text/60 text-sm">Improve your visibility on Google and Bing to drive organic traffic.</p>
            </div>
            <div className="p-6 rounded-2xl bg-surface border border-border text-center hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 mx-auto bg-yellow-500/10 text-yellow-500 rounded-xl flex items-center justify-center mb-4">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Rich Results</h3>
              <p className="text-text/60 text-sm">Use schema markup to display enhanced snippets in search results.</p>
            </div>
            <div className="p-6 rounded-2xl bg-surface border border-border text-center hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 mx-auto bg-green-500/10 text-green-500 rounded-xl flex items-center justify-center mb-4">
                <Share2 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Social Sharing</h3>
              <p className="text-text/60 text-sm">Optimize Open Graph and Twitter Cards for beautiful social media links.</p>
            </div>
            <div className="p-6 rounded-2xl bg-surface border border-border text-center hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 mx-auto bg-purple-500/10 text-purple-500 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Faster Indexing</h3>
              <p className="text-text/60 text-sm">Generate valid sitemaps and robots.txt to help crawlers discover your content.</p>
            </div>
          </div>
        </section>

        <div className="py-16 border-t border-border/50">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-text/60 max-w-2xl mx-auto">Common questions about our SEO tools.</p>
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
