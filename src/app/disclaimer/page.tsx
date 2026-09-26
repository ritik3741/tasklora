import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Disclaimer",
  description: "Disclaimer for the tools and information provided on Tasklora.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Disclaimer</h1>
      
      <div className="space-y-6 text-text/80 leading-relaxed">
        <p>Last updated: January 1, 2026</p>
        
        <p>
          The information and tools provided by Tasklora ("we," "us," or "our") on our website are for general informational and utility purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information or tool on the Site.
        </p>
        
        <h2 className="text-2xl font-semibold text-text mt-8 mb-4">No Professional Advice</h2>
        <p>
          The tools provided on this website, including but not limited to calculators (such as GST or EMI calculators) and SEO tools, do not constitute financial, legal, tax, or professional advice. You should not rely on the information provided by these tools as a substitute for professional consultation. We recommend consulting with qualified professionals before making any decisions based on the output of our tools.
        </p>
        
        <h2 className="text-2xl font-semibold text-text mt-8 mb-4">No Liability</h2>
        <p>
          Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or our tools or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.
        </p>
        
        <h2 className="text-2xl font-semibold text-text mt-8 mb-4">External Links</h2>
        <p>
          The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
        </p>
      </div>
    </div>
  );
}
