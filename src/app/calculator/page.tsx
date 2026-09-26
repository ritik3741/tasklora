import { generateSEO } from "@/lib/seo";
import { 
  Calculator, Zap, Smartphone, ShieldCheck, Target
} from "lucide-react";
import { AdBanner } from "@/components/ads/AdComponents";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { CalculatorToolSearch } from "@/components/tools/CalculatorToolSearch";

export const metadata = generateSEO({
  title: "Free Online Calculators | GST, EMI, Age & BMI",
  description: "Calculate GST, EMI, SIP returns, age, percentage, BMI, discounts, loans, and more using fast browser-based calculators.",
  path: "/calculator",
});

const faqs = [
  { question: "Are these calculators completely free?", answer: "Yes, all our calculators are 100% free to use with no hidden costs or limits." },
  { question: "Do you store my financial data?", answer: "No. All calculations are performed locally in your web browser. We do not track, store, or upload your financial inputs." },
  { question: "Are the formulas used accurate?", answer: "Yes, we use standardized, industry-accepted formulas for all our calculators, ensuring high precision and accuracy." },
  { question: "Do these work on mobile?", answer: "Absolutely! Every calculator is fully responsive and optimized for mobile devices, tablets, and desktops." },
  { question: "Is the currency converter live?", answer: "To ensure 100% offline functionality and privacy, our currency converter acts as a reference tool where you can manually input the exact exchange rate you want to use." },
  { question: "Can I download the results?", answer: "Many of our calculators offer a copy or download option so you can save your results or amortization schedules for later." },
];

export default function CalculatorToolsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative py-24 overflow-hidden bg-surface border-b border-border/50">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-6">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Calculator Tools", href: "/calculator" }]} />
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight text-text">Free Online Calculators</h1>
              <p className="text-xl text-text/70 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Calculate GST, EMI, SIP returns, age, percentage, BMI, discounts, loans, and more using fast browser-based calculators.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm font-medium">
                <div className="flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
                  <Zap className="w-4 h-4 text-yellow-500" /> Instant Results
                </div>
                <div className="flex items-center gap-2 bg-background border border-border px-4 py-2 rounded-full">
                  <Calculator className="w-4 h-4 text-blue-500" /> 20+ Calculators
                </div>
                <div className="flex items-center gap-2 bg-background border border-border px-4 py-2 rounded-full">
                  <ShieldCheck className="w-4 h-4 text-green-500" /> 100% Free
                </div>
              </div>
            </div>
            
            <div className="flex-1 flex justify-center w-full max-w-md relative">
              {/* Math SVG Illustration */}
              <div className="w-64 h-80 bg-background border border-border rounded-xl shadow-2xl relative rotate-3 p-6 flex flex-col justify-center items-center overflow-hidden">
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -z-10"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-green-500/10 rounded-full blur-2xl -z-10"></div>
                
                <span className="text-[120px] leading-none font-sans font-black text-text/10 select-none absolute top-4 left-4">%</span>
                <span className="text-[80px] leading-none font-sans font-black text-text/5 select-none absolute bottom-4 right-4">±</span>
                
                <div className="relative z-10 w-full bg-surface p-4 rounded border border-border shadow-sm mb-4">
                  <div className="h-4 w-3/4 bg-primary/20 rounded mb-2"></div>
                  <div className="flex justify-between items-end mt-4">
                    <div className="w-4 h-8 bg-blue-500/80 rounded-t"></div>
                    <div className="w-4 h-12 bg-blue-500/80 rounded-t"></div>
                    <div className="w-4 h-16 bg-blue-500/80 rounded-t"></div>
                    <div className="w-4 h-24 bg-primary rounded-t"></div>
                  </div>
                </div>
                <div className="relative z-10 w-full bg-primary text-primary-foreground p-3 rounded font-bold text-center text-sm shadow-md">
                  Calculate
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <CalculatorToolSearch />

        <div className="my-16">
          <AdBanner />
        </div>

        <section className="py-16 border-t border-border/50">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why use our Calculators?</h2>
            <p className="text-text/60 max-w-2xl mx-auto">Engineered for speed, accuracy, and privacy.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-surface border border-border text-center hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 mx-auto bg-yellow-500/10 text-yellow-500 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Instant Calculations</h3>
              <p className="text-text/60 text-sm">Powered by modern web technologies, results update in real-time as you type.</p>
            </div>
            <div className="p-6 rounded-2xl bg-surface border border-border text-center hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 mx-auto bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Mobile Friendly</h3>
              <p className="text-text/60 text-sm">Beautiful interfaces designed specifically to work flawlessly on phones and tablets.</p>
            </div>
            <div className="p-6 rounded-2xl bg-surface border border-border text-center hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 mx-auto bg-green-500/10 text-green-500 rounded-xl flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Privacy First</h3>
              <p className="text-text/60 text-sm">Your financial inputs never leave your device. We do not store or track any data.</p>
            </div>
            <div className="p-6 rounded-2xl bg-surface border border-border text-center hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 mx-auto bg-purple-500/10 text-purple-500 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Accurate Formulas</h3>
              <p className="text-text/60 text-sm">We use standardized mathematical formulas to ensure exact, reliable results.</p>
            </div>
          </div>
        </section>

        <div className="py-16 border-t border-border/50">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-text/60 max-w-2xl mx-auto">Common questions about our calculator tools.</p>
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
