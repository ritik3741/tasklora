import { generateSEO } from "@/lib/seo";
import { ShieldCheck, Zap, WifiOff, HardDrive } from "lucide-react";
import { AdBanner } from "@/components/ads/AdComponents";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { PDFToolSearch } from "@/components/tools/PDFToolSearch";

export const metadata = generateSEO({
  title: "Free Online PDF Tools | Compress, Merge, Split",
  description: "Compress, merge, split, rotate, organize, and convert PDF files securely in your browser. No uploads, fast, and free.",
  path: "/pdf",
});

const faqs = [
  { question: "Are these PDF tools really free?", answer: "Yes, all our PDF utilities are completely free to use without any hidden fees, subscriptions, or watermarks." },
  { question: "Do you store my PDF files?", answer: "No. Our tools process your PDF files entirely in your web browser. Your files are never uploaded to any server, ensuring absolute privacy." },
  { question: "Can I process large PDF files?", answer: "Yes, because processing happens on your local device, file size is only limited by your computer's RAM, not by internet upload speeds." },
  { question: "Do these tools work offline?", answer: "Once the page is loaded, the actual PDF processing works without needing an active internet connection since it relies on JavaScript within your browser." },
  { question: "Is my original PDF file modified?", answer: "No, your original file remains untouched. The tool creates a new processed PDF file which you then download." },
  { question: "Do I need to install any software?", answer: "No installation is required. Everything runs directly inside modern web browsers like Chrome, Firefox, Safari, or Edge." },
];

export default function PDFToolsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative py-24 overflow-hidden bg-surface border-b border-border/50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-6">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "PDF Tools", href: "/pdf" }]} />
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-text">Free Online PDF Tools</h1>
              <p className="text-xl text-text/70 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Compress, merge, split, rotate, organize, and convert PDF files securely in your browser.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm font-medium">
                <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                  <ShieldCheck className="w-4 h-4" /> 100% Browser Based
                </div>
                <div className="flex items-center gap-2 bg-background border border-border px-4 py-2 rounded-full">
                  <Zap className="w-4 h-4 text-yellow-500" /> Fast Local Processing
                </div>
                <div className="flex items-center gap-2 bg-background border border-border px-4 py-2 rounded-full">
                  <WifiOff className="w-4 h-4 text-green-500" /> No Upload Required
                </div>
              </div>
            </div>
            
            <div className="flex-1 flex justify-center w-full max-w-md relative">
              {/* Abstract PDF Illustration */}
              <div className="w-64 h-80 bg-background border border-border rounded-xl shadow-2xl relative rotate-3 p-6 flex flex-col">
                <div className="w-12 h-12 bg-red-500 text-white rounded-lg flex items-center justify-center font-bold text-xl mb-6 shadow-md shadow-red-500/20">
                  PDF
                </div>
                <div className="space-y-3 flex-1">
                  <div className="h-4 bg-surface rounded w-3/4"></div>
                  <div className="h-4 bg-surface rounded w-full"></div>
                  <div className="h-4 bg-surface rounded w-5/6"></div>
                  <div className="h-4 bg-surface rounded w-full"></div>
                  <div className="h-4 bg-surface rounded w-2/3"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-red-500/10 rounded-full blur-2xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <PDFToolSearch />

        <div className="my-16">
          <AdBanner />
        </div>

        <section className="py-16 border-t border-border/50">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Browser-Based Processing?</h2>
            <p className="text-text/60 max-w-2xl mx-auto">Experience the next generation of online tools.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-surface border border-border text-center">
              <div className="w-12 h-12 mx-auto bg-green-500/10 text-green-500 rounded-xl flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Absolute Privacy</h3>
              <p className="text-text/60 text-sm">Files never leave your device. All processing happens locally in your memory.</p>
            </div>
            <div className="p-6 rounded-2xl bg-surface border border-border text-center">
              <div className="w-12 h-12 mx-auto bg-yellow-500/10 text-yellow-500 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Lightning Fast</h3>
              <p className="text-text/60 text-sm">No waiting for large files to upload or download over slow internet connections.</p>
            </div>
            <div className="p-6 rounded-2xl bg-surface border border-border text-center">
              <div className="w-12 h-12 mx-auto bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mb-4">
                <WifiOff className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Offline Capability</h3>
              <p className="text-text/60 text-sm">Once the page loads, you can safely disconnect and still process your PDFs.</p>
            </div>
            <div className="p-6 rounded-2xl bg-surface border border-border text-center">
              <div className="w-12 h-12 mx-auto bg-purple-500/10 text-purple-500 rounded-xl flex items-center justify-center mb-4">
                <HardDrive className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">No Size Limits</h3>
              <p className="text-text/60 text-sm">Process massive PDF files limited only by your computer's available memory.</p>
            </div>
          </div>
        </section>

        <div className="py-16 border-t border-border/50">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-text/60 max-w-2xl mx-auto">Common questions about our PDF utilities.</p>
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
