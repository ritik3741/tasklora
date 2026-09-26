import { generateSEO } from "@/lib/seo";
import { ToolLayout } from "@/components/tools/ToolLayout";
import SitemapGeneratorClient from "./SitemapGeneratorClient";

const title = "XML Sitemap Generator | Tasklora";
const description = "Instantly generate XML sitemaps for your website. Paste your URLs, set priority and change frequency, and get a ready-to-use sitemap.xml file for search engines.";

export const metadata = generateSEO({
  title,
  description,
});

export default function SitemapGeneratorPage() {
  const content = `
    <h2>What is an XML Sitemap?</h2>
    <p>An XML sitemap is a file that lists a website's essential pages, making sure Google and other search engines can find and crawl them all. It also helps search engines understand your website structure. It contains information about each URL, such as when it was last updated, how often it changes, and how important it is relative to other URLs on the site. Without a proper sitemap, search engines might miss important pages or take longer to index new content.</p>
    <p>The standard format for this file is an XML (Extensible Markup Language) document. This format provides a structured way to outline the content on your site. While traditional HTML sitemaps are designed for human visitors to navigate a website, an XML sitemap is specifically engineered for search engine crawlers like Googlebot and Bingbot.</p>
    
    <h2>Why are XML Sitemaps Important for SEO?</h2>
    <p>XML sitemaps are crucial for SEO for several compelling reasons. First, they ensure that search engines can easily discover and index your web pages. Even if your internal linking is imperfect, a comprehensive sitemap acts as a roadmap, guiding crawlers to every corner of your domain.</p>
    <p>Second, they provide valuable metadata about each page, such as its priority and change frequency. This information helps search engines prioritize their crawling efforts and ensure that your most important pages are indexed quickly and frequently. For instance, a frequently updated blog page might warrant a daily crawl frequency, while an "About Us" page might only need to be checked monthly.</p>
    <p>Moreover, if your website is new, has a massive number of pages, or features a complex architecture, an XML sitemap is especially beneficial. It helps search engines navigate your site more efficiently. Additionally, if you have pages that are not linked from other parts of your site—often referred to as "orphan pages"—an XML sitemap is essentially the only way search engines can reliably discover and index them.</p>
    
    <h2>Best Practices for XML Sitemaps</h2>
    <p>To maximize the SEO benefits of your XML sitemap, it is essential to follow established best practices:</p>
    <ul>
      <li><strong>Keep it up-to-date:</strong> Regularly update your XML sitemap whenever you add, remove, or modify pages on your website. Outdated sitemaps can mislead search engine crawlers and waste your crawl budget.</li>
      <li><strong>Include only canonical URLs:</strong> Ensure that the URLs in your sitemap are canonical URLs. Do not include URLs that redirect (301 or 302), return a 404 error, or require a password to access. This prevents duplicate content issues and keeps your sitemap clean.</li>
      <li><strong>Submit it to search engines:</strong> Actively submit your XML sitemap to Google Search Console and Bing Webmaster Tools. This explicitly tells these platforms where to find your sitemap, rather than waiting for them to discover it naturally via your robots.txt file.</li>
      <li><strong>Limit the size:</strong> XML sitemaps have strict limitations. A single sitemap file must not exceed 50MB uncompressed or contain more than 50,000 URLs. If your website is larger than this, you must split it into multiple smaller sitemaps and use a sitemap index file to group them together.</li>
      <li><strong>Use the correct format:</strong> Strictly adhere to the standard XML sitemap protocol. Ensure tags like <code>&lt;urlset&gt;</code>, <code>&lt;url&gt;</code>, and <code>&lt;loc&gt;</code> are correctly nested and closed.</li>
      <li><strong>Include images and videos selectively:</strong> If your site relies heavily on visual content, consider creating dedicated image or video sitemaps, or adding appropriate extensions to your existing XML sitemap to help search engines understand this media.</li>
    </ul>
    
    <h2>How to Use the XML Sitemap Generator</h2>
    <p>Using our XML Sitemap Generator is easy, intuitive, and designed to save you time. Follow these straightforward steps to generate a compliant sitemap:</p>
    <ol>
      <li><strong>Enter your domain name (Optional):</strong> Start by entering your website's domain name (e.g., https://example.com) in the provided field. This helps the tool construct absolute URLs if you only paste relative paths.</li>
      <li><strong>Paste your URLs:</strong> In the text area, paste the list of URLs you want to include in the sitemap. Make sure to enter exactly one URL per line. The tool will automatically clean up any trailing spaces.</li>
      <li><strong>Set priority and change frequency:</strong> Choose the default priority (ranging from 0.1 to 1.0) and change frequency (such as daily, weekly, monthly, etc.) for the URLs in your sitemap. Remember that these values serve as hints, not absolute directives, for search engine crawlers.</li>
      <li><strong>Generate the sitemap:</strong> Click the "Generate Sitemap" button. The tool will process your input and generate the properly formatted XML code instantly in the output section.</li>
      <li><strong>Copy and deploy:</strong> Review the generated XML code, copy it, and save it as a <code>sitemap.xml</code> file. Upload this file to the root directory of your website (e.g., yourdomain.com/sitemap.xml) and submit the exact URL to Google Search Console.</li>
    </ol>
  `;

  const faqs = [
    {
      question: "What is an XML sitemap?",
      answer: "An XML sitemap is a file that lists the URLs of a website, providing search engines with information about the structure and content of the site. It helps search engines discover and crawl pages more efficiently."
    },
    {
      question: "Do I really need an XML sitemap?",
      answer: "While not strictly required for small sites, an XML sitemap is highly recommended for all websites. It is especially vital for large websites, new websites without many backlinks, or websites with complex navigation structures. It ensures that search engines can easily find and index all your important pages."
    },
    {
      question: "How do I submit my XML sitemap to Google?",
      answer: "You can submit your XML sitemap to Google by logging into Google Search Console, navigating to the 'Sitemaps' report on the left-hand menu, entering the URL of your sitemap (e.g., https://example.com/sitemap.xml), and clicking 'Submit'."
    },
    {
      question: "What is the difference between priority and change frequency in an XML sitemap?",
      answer: "Priority (a value from 0.1 to 1.0) indicates the relative importance of a page compared to other pages on your site, helping search engines decide which pages to index first. Change frequency (e.g., daily, weekly) tells search engines how often the content of a page is expected to be modified. Both metrics are treated as hints by search engines."
    },
    {
      question: "Can I include multiple sitemaps in an XML sitemap index?",
      answer: "Yes. If your website has more than 50,000 URLs or the sitemap file exceeds 50MB, you must split your URLs across multiple XML sitemaps. You can then create a 'sitemap index' file that lists the URLs of all your individual sitemaps, making it easier for search engines to process them."
    },
    {
      question: "How often should I update my XML sitemap?",
      answer: "You should update your XML sitemap whenever you add new content, remove old pages, or make significant modifications to existing pages. For dynamic sites, it is best practice to automate this process so the sitemap is updated in real-time."
    }
  ];

  const breadcrumbs = {
    "@context": "https://schema.org",
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
        "name": "XML Sitemap Generator",
        "item": "https://tasklora.com/seo/sitemap-generator"
      }
    ]
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": title,
    "description": description,
    "applicationCategory": "SEO Tool",
    "operatingSystem": "All",
    "url": "https://tasklora.com/seo/sitemap-generator"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ToolLayout
        title={title}
        description={description}
        path="/seo/sitemap-generator"
        content={content}
        faqs={faqs}
      >
        <SitemapGeneratorClient />
      </ToolLayout>
    </>
  );
}
