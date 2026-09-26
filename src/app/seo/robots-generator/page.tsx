import { generateSEO } from "@/lib/seo";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { RobotsClient } from "./RobotsClient";
import Script from "next/script";

export const metadata = generateSEO({
  title: "Robots.txt Generator | Tasklora",
  description: "Easily generate a valid robots.txt file for your website to control search engine crawlers. Specify allowed/disallowed paths, sitemaps, and crawl delays.",
  path: "/seo/robots-generator",
});

const content = (
  <>
    <h2>What is a robots.txt File?</h2>
    <p>
      A <code>robots.txt</code> file is a simple text file placed in the root directory of your website. It uses the Robots Exclusion Protocol to communicate with web crawlers (like Googlebot or Bingbot), instructing them on which areas of your site they are allowed or disallowed to scan and index.
    </p>
    <p>
      Think of it as a set of traffic rules for search engines. By setting these rules, you help crawlers prioritize the important pages of your site, saving your "crawl budget" and preventing sensitive, duplicate, or irrelevant pages (like admin panels or internal search results) from appearing in search engine results.
    </p>

    <h2>Why is robots.txt Important for SEO?</h2>
    <p>
      Properly configuring your robots.txt file is a foundational technical SEO practice. While it doesn't directly boost your rankings, a misconfigured file can completely remove your site from search results. Conversely, a well-optimized file offers several benefits:
    </p>
    <ul>
      <li><strong>Optimizing Crawl Budget:</strong> Search engines allocate limited resources to crawl your site. By blocking unimportant paths (e.g., tags, parameter-heavy URLs), you ensure they spend time indexing your valuable content.</li>
      <li><strong>Preventing Duplicate Content Issues:</strong> You can block crawlers from indexing printable versions of pages or dynamically generated sorting URLs, preventing duplicate content penalties.</li>
      <li><strong>Protecting Server Resources:</strong> Aggressive crawlers can slow down your site. Blocking bad bots or setting a crawl delay can reduce unnecessary server load.</li>
      <li><strong>Highlighting Your Sitemap:</strong> You can declare the location of your XML sitemap directly in the robots.txt file, making it easier for search engines to discover all your pages.</li>
    </ul>

    <h2>Best Practices for Creating robots.txt</h2>
    <p>Keep these best practices in mind to avoid common pitfalls:</p>
    <ul>
      <li><strong>Don't Block Essential Files:</strong> Ensure you are not accidentally disallowing access to CSS, JavaScript, or image files that search engines need to properly render and understand your page layout.</li>
      <li><strong>Be Careful with Disallow: / :</strong> A single slash means "disallow the entire site." Only use this for staging environments or sites under construction, never for a live, public website.</li>
      <li><strong>It's Not for Security:</strong> <code>robots.txt</code> is a public file. Anyone can read it. Do not use it to hide sensitive information, passwords, or admin URLs. Use server-level password protection (like htaccess) for real security.</li>
      <li><strong>Validate Before Deployment:</strong> Always use a robots.txt testing tool (like the one in Google Search Console) to verify your syntax before uploading the file to your root directory.</li>
    </ul>

    <h2>How to Use the Robots.txt Generator</h2>
    <p>
      Generating a perfectly formatted robots.txt file is easy with our tool. Just follow these steps:
    </p>
    <ol>
      <li><strong>Select User-Agent:</strong> The default is <code>*</code> (all bots). If you want to target a specific crawler (e.g., Googlebot), enter it here.</li>
      <li><strong>Set Global Access:</strong> Choose whether to allow all crawlers or block them entirely as a baseline rule.</li>
      <li><strong>Add Disallow Paths:</strong> Enter the relative URLs of directories or pages you want to hide from search engines, one per line (e.g., <code>/wp-admin/</code> or <code>/private/</code>).</li>
      <li><strong>Sitemap URL:</strong> Provide the absolute URL to your XML sitemap (e.g., <code>https://yoursite.com/sitemap.xml</code>) to help search engines find it easily.</li>
      <li><strong>Crawl Delay (Optional):</strong> If bots are overloading your server, specify a delay (in seconds) between their requests. Note that Googlebot largely ignores this, but others like Bingbot respect it.</li>
      <li><strong>Copy Code:</strong> The tool will instantly generate your valid <code>robots.txt</code> syntax. Copy it and save it as a text file in the root of your domain.</li>
    </ol>
  </>
);

const faqs = [
  {
    question: "Where do I put my robots.txt file?",
    answer: "Your robots.txt file must be placed in the top-level directory (the root) of your website. For example, if your domain is https://www.example.com, the file must be accessible exactly at https://www.example.com/robots.txt."
  },
  {
    question: "Does robots.txt stop my pages from being indexed?",
    answer: "No, not completely. A 'Disallow' directive stops a search engine from crawling a page, but if another site links to that page, Google might still index the URL (though usually without a description). To truly prevent indexing, you should use the 'noindex' meta tag on the page itself."
  },
  {
    question: "What does User-agent: * mean?",
    answer: "The asterisk (*) is a wildcard that applies the rules that follow to all web crawlers and bots. If you want to set specific rules for a particular bot (like Googlebot or Bingbot), you would create a separate section starting with User-agent: Googlebot."
  },
  {
    question: "Why include a Sitemap in the robots.txt?",
    answer: "Including the Sitemap directive (e.g., Sitemap: https://yoursite.com/sitemap.xml) is a widely supported shortcut that tells search engines exactly where your sitemap is located, accelerating the discovery of all your important URLs without them having to guess the path."
  },
  {
    question: "Can I use wildcard characters in my Disallow paths?",
    answer: "Yes, most major search engines support the use of wildcards. You can use an asterisk (*) to match any sequence of characters (e.g., Disallow: /*.pdf to block all PDF files) and a dollar sign ($) to signify the end of a URL (e.g., Disallow: /private/$)."
  },
  {
    question: "What is a Crawl-delay and should I use it?",
    answer: "Crawl-delay instructs bots on how many seconds to wait between successive requests to your server. It's useful if aggressive bots are slowing down your site. However, Google largely ignores this directive (preferring Google Search Console settings instead), though Bing and Yahoo do respect it."
  }
];

export default function RobotsGeneratorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Robots.txt Generator",
        "description": "Easily generate a valid robots.txt file for your website to control search engine crawlers.",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "All",
        "url": "https://tasklora.com/seo/robots-generator",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://tasklora.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "SEO Tools",
            "item": "https://tasklora.com/seo"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Robots.txt Generator",
            "item": "https://tasklora.com/seo/robots-generator"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <>
      <Script
        id="schema-robots-generator"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ToolLayout
        title="Robots.txt Generator"
        description="Generate a valid robots.txt file to control how search engines crawl and index your website."
        path="/seo/robots-generator"
        content={content}
        faqs={faqs}
      >
        <RobotsClient />
      </ToolLayout>
    </>
  );
}
