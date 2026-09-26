import { generateSEO } from "@/lib/seo";
import { ToolLayout } from "@/components/tools/ToolLayout";
import CanonicalGeneratorClient from "./CanonicalGeneratorClient";

const title = "Canonical URL Generator | Tasklora";
const description = "Easily generate canonical URL meta tags for your web pages to prevent duplicate content issues and improve your SEO efforts.";

export const metadata = generateSEO({
  title,
  description,
});

export default function CanonicalGeneratorPage() {
  const content = `
    <h2>What is a Canonical URL?</h2>
    <p>A canonical URL is a snippet of HTML code (<code>&lt;link rel="canonical" href="..."&gt;</code>) that helps webmasters prevent duplicate content issues in search engine optimization. It tells search engines like Google and Bing which version of a URL you want to appear in search results when multiple URLs contain identical or very similar content.</p>
    <p>When you have multiple pages with the same or highly similar content, search engines might get confused about which page to index and rank. This confusion can lead to your link equity (or ranking power) being split across multiple URLs, effectively diluting the SEO value of each individual page. By explicitly specifying a canonical URL, you consolidate this link equity into a single, preferred URL. This ensures that search engines know exactly which page you consider authoritative and prioritize it accordingly in search results.</p>
    
    <h2>Why is a Canonical URL Important for SEO?</h2>
    <p>Canonical URLs are critical for maintaining a clean, optimized website structure and maximizing your search engine rankings. Here are the primary reasons why they matter profoundly for your SEO strategy:</p>
    <ul>
      <li><strong>Prevent Duplicate Content Issues:</strong> Search engines penalize or ignore websites with excessive duplicate content. Canonical tags help you avoid algorithmic downgrades by clearly indicating the primary version of a page, thereby resolving duplicate content conflicts gracefully.</li>
      <li><strong>Consolidate Link Equity:</strong> If multiple URLs link to different versions of the same content (e.g., through varied parameters or session IDs), a canonical tag consolidates all those inbound links into a single, stronger URL. This concentrated authority significantly improves its ranking potential.</li>
      <li><strong>Improve Crawl Efficiency:</strong> Search engine bots have a limited "crawl budget"—the amount of time they are willing to spend crawling your site. By pointing them directly to your canonical URLs, you ensure they spend their valuable time indexing your most important pages rather than wasting resources on duplicates or variations.</li>
      <li><strong>Control the Search Results:</strong> You get to decide exactly which version of your page appears in search results. This provides a better, more consistent experience for your users and ensures they land on the highest-quality version of your content.</li>
    </ul>
    
    <h2>Common Scenarios for Using Canonical Tags</h2>
    <p>There are several common situations where implementing a canonical tag is not just helpful, but highly recommended:</p>
    <ul>
      <li><strong>URL Parameters and Filters:</strong> E-commerce sites often use URL parameters for sorting or filtering products (e.g., <code>?sort=price-high</code>, <code>?color=red</code>). These parameters create infinite, dynamic URLs for the same core product page. A canonical tag pointing to the base URL (without parameters) is absolutely necessary here.</li>
      <li><strong>HTTP vs. HTTPS and WWW vs. non-WWW:</strong> If your site is accessible via both HTTP and HTTPS, or with and without the "www" prefix, search engines technically view these as distinct, different pages. A canonical tag helps unify them, although permanent 301 redirects are also strongly advised in this scenario.</li>
      <li><strong>Print Versions and Mobile Sites:</strong> If you offer a printer-friendly version of a page on a separate URL, or maintain a distinct mobile site (e.g., <code>m.example.com</code>), you should use a canonical tag pointing back to the standard desktop page to consolidate signals.</li>
      <li><strong>Syndicated Content:</strong> If you publish an article on your own blog and then syndicate it to a larger platform (like Medium, LinkedIn, or an industry publication), the syndicated version must include a cross-domain canonical tag pointing back to your original article. This ensures you receive the SEO credit and the original piece ranks.</li>
    </ul>
    
    <h2>Best Practices for Implementing Canonical URLs</h2>
    <p>To get the most out of your canonical tags and avoid potentially disastrous SEO mistakes, keep these best practices top of mind:</p>
    <ul>
      <li><strong>Use Absolute URLs:</strong> Always use the full URL path, including the protocol (e.g., <code>https://example.com/category/page</code> instead of just <code>/category/page</code>). Using relative URLs can lead to parsing errors and unintended canonicalization if accessed via different paths.</li>
      <li><strong>Self-Referencing Canonical Tags:</strong> It is a widely accepted best practice to include a self-referencing canonical tag on all your pages. This means the page <code>https://example.com/about</code> would have a canonical tag pointing exactly to itself. This safeguards against potential issues if the URL is ever accidentally appended with tracking parameters (like UTM tags).</li>
      <li><strong>Be Consistent with Internal Links:</strong> Ensure your internal linking structure matches your canonical URLs. Don't link to a non-canonical version of a page internally, as this sends mixed, conflicting signals to search engine crawlers.</li>
      <li><strong>Don't Mix Canonicalization Methods:</strong> Stick to one primary method. The <code>&lt;link rel="canonical"&gt;</code> tag in the HTML head is the most reliable. Avoid mixing it with HTTP headers or XML sitemap signals in a way that creates conflicts.</li>
      <li><strong>Ensure the Canonical URL is Accessible:</strong> The URL you point to must return a clean 200 OK HTTP status code. Never point a canonical tag to a 404 (Not Found) or 301 (Redirected) page, as this will result in the canonical tag being ignored.</li>
    </ul>
    
    <h2>How to Use This Canonical URL Generator</h2>
    <p>Generating a flawless, properly formatted canonical tag for your web page is simple with our tool. Follow these steps:</p>
    <ol>
      <li><strong>Enter the Preferred URL:</strong> In the input field below, enter the absolute URL that you want to be the primary, authoritative version of the page. Double-check that you include the correct protocol (usually "https://"). Example: <code>https://yourdomain.com/category/product-name</code>.</li>
      <li><strong>Review the Generated Code:</strong> As you type, the tool will automatically generate the correct, standardized HTML <code>&lt;link rel="canonical"&gt;</code> tag in the code block provided below the input.</li>
      <li><strong>Copy the Code:</strong> Click the copy button provided within the code block, or manually highlight and copy the generated HTML tag.</li>
      <li><strong>Implement on Your Website:</strong> Paste this tag directly into the <code>&lt;head&gt;</code> section of the HTML document for all duplicate or alternate versions of the page. If it's a self-referencing canonical, place it in the <code>&lt;head&gt;</code> of the preferred page itself, as close to the top as possible.</li>
    </ol>
  `;

  const faqs = [
    {
      question: "What is the primary purpose of a canonical URL?",
      answer: "A canonical URL tells search engines which version of a page is the master or preferred version. This is crucial for resolving duplicate content issues, as it consolidates link equity and ensures the correct, authoritative page appears in search results."
    },
    {
      question: "Where exactly should the canonical tag be placed in my HTML?",
      answer: "The canonical tag (e.g., <link rel='canonical' href='...'>) must be placed within the <head> section of your HTML document. If it is placed anywhere within the <body>, search engines will completely ignore it."
    },
    {
      question: "Is it okay to use relative URLs in canonical tags?",
      answer: "No, it is highly discouraged. You should always use absolute URLs (including the protocol, like https://, and the full domain) in canonical tags. Using relative URLs can lead to severe errors, especially if your site is accessible via different paths or protocols."
    },
    {
      question: "Can a canonical tag span across different domains?",
      answer: "Yes, you can absolutely use cross-domain canonical tags. This is often necessary when content is syndicated across different websites. The platform publishing the syndicated content should include a canonical tag pointing back to the original article on your domain."
    },
    {
      question: "What happens if I point a canonical tag to a broken page or a redirect?",
      answer: "If you point a canonical tag to a page that returns a 404 error, a 500 error, or a 301/302 redirect, search engines will likely ignore the tag entirely. The canonical URL must point to a live, indexable page that returns a 200 OK status code."
    },
    {
      question: "Do I need a canonical tag if my page doesn't have any known duplicates?",
      answer: "Yes, it is considered an industry best practice to use a 'self-referencing' canonical tag on every single page of your website. This acts defensively, preventing future duplicate content issues if the URL is ever accessed with unexpected tracking parameters, affiliate IDs, or session variables."
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
        "name": "Canonical URL Generator",
        "item": "https://tasklora.com/seo/canonical-generator"
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
    "url": "https://tasklora.com/seo/canonical-generator"
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
        path="/seo/canonical-generator"
        content={content}
        faqs={faqs}
      >
        <CanonicalGeneratorClient />
      </ToolLayout>
    </>
  );
}
