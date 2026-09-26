import { generateSEO } from "@/lib/seo";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { TwitterCardClient } from "./TwitterCardClient";
import Script from "next/script";

export const metadata = generateSEO({
  title: "Twitter Card Generator | Tasklora",
  description: "Create perfectly formatted Twitter Card meta tags for your website. Preview and generate tags for summary or large image cards to optimize social sharing.",
  path: "/seo/twitter-card-generator",
});

const content = (
  <>
    <h2>What is a Twitter Card?</h2>
    <p>
      A Twitter Card is a set of HTML meta tags added to a web page's head section that allows Twitter (now X) to display a rich preview when the page is shared. Instead of a simple text link, users see a formatted card containing a title, description, image, and other relevant information. This dramatically improves the visibility and click-through rate (CTR) of your shared content on social media.
    </p>
    <p>
      There are different types of Twitter Cards, but the most common for standard web pages and blog posts are the <strong>Summary Card</strong> and the <strong>Summary Card with Large Image</strong>. By explicitly defining these tags, you retain control over how your brand is presented across the platform.
    </p>

    <h2>Why Are Twitter Cards Important for SEO?</h2>
    <p>
      While Twitter Card meta tags themselves don't directly influence traditional search engine rankings (like Google), they play a vital role in your broader off-page SEO and digital marketing strategy. Here's why they matter:
    </p>
    <ul>
      <li><strong>Increased Click-Through Rates (CTR):</strong> Rich media (images and structured text) takes up more real estate on the feed and attracts more attention than standard text URLs. Higher engagement often leads to more shares and organic backlinks over time.</li>
      <li><strong>Brand Consistency:</strong> By controlling the title, description, and image, you ensure your content is represented accurately and professionally, avoiding poorly cropped automatic thumbnails or irrelevant text snippets.</li>
      <li><strong>Improved User Experience:</strong> Clear and engaging previews set accurate expectations for users before they click, reducing bounce rates once they land on your site.</li>
    </ul>

    <h2>Twitter Card Best Practices</h2>
    <p>To maximize the impact of your Twitter Cards, keep these best practices in mind:</p>
    <ul>
      <li><strong>Optimize Your Images:</strong> For a Summary Card with Large Image, use a minimum resolution of 300x157 pixels (ideally 1200x628 or 1200x600 for high quality), maintaining an aspect ratio close to 2:1. For standard Summary Cards, a 1:1 aspect ratio (min 144x144 pixels) works best. Compress images to keep file sizes under 5MB.</li>
      <li><strong>Write Compelling Titles:</strong> Keep titles concise (under 70 characters) so they aren't truncated on smaller screens. Make them punchy and descriptive.</li>
      <li><strong>Craft Engaging Descriptions:</strong> You have up to 200 characters, but keeping it around 150 ensures it displays fully across most devices. Don't just repeat the title—offer additional context or a hook that encourages the user to click.</li>
      <li><strong>Include Handles:</strong> Always specify the site handle (e.g., @YourBrand) and, when applicable, the creator's handle (e.g., @AuthorName). This builds authority and helps attribute content correctly.</li>
      <li><strong>Test Your Cards:</strong> Always validate your tags using Twitter's Card Validator before publishing to ensure everything looks exactly as intended.</li>
    </ul>

    <h2>How to Use the Twitter Card Generator</h2>
    <p>
      Using our free Twitter Card Generator is incredibly straightforward. Follow these steps to generate and implement your meta tags:
    </p>
    <ol>
      <li><strong>Select Card Type:</strong> Choose between "Summary" (smaller, square image) and "Summary Large Image" (wider, prominent image) based on your content strategy.</li>
      <li><strong>Enter Details:</strong> Fill in the Title, Description, and the direct URL to your featured image.</li>
      <li><strong>Add Handles (Optional but Recommended):</strong> Input your website's main Twitter handle (Site Handle) and the author's handle (Creator Handle).</li>
      <li><strong>Preview:</strong> Watch the live visual preview update instantly to see exactly how your card will appear on a real Twitter feed.</li>
      <li><strong>Copy and Paste:</strong> Once satisfied, copy the generated HTML code from the code block and paste it into the <code>&lt;head&gt;</code> section of your webpage.</li>
    </ol>
  </>
);

const faqs = [
  {
    question: "What is the difference between a Summary Card and a Summary Card with Large Image?",
    answer: "A standard Summary Card displays a small square thumbnail image next to the title and description, making it subtle and space-efficient. A Summary Card with Large Image features a prominent, full-width rectangular image above the title and description, which is generally more eye-catching and yields higher click-through rates for visual content like blog posts and articles."
  },
  {
    question: "Do Twitter Cards impact Google SEO?",
    answer: "Not directly. Google does not use Twitter Card tags for ranking purposes. However, they indirectly benefit SEO by increasing social media engagement, driving more traffic to your site, and potentially leading to more organic backlinks as your content gets shared more widely."
  },
  {
    question: "What size should my Twitter Card image be?",
    answer: "For a Summary Card with Large Image, the recommended size is 1200x628 pixels (or a 2:1 aspect ratio), with a minimum size of 300x157 pixels. For a regular Summary Card, use a square image (1:1 aspect ratio) with a minimum size of 144x144 pixels. The image file must be less than 5MB."
  },
  {
    question: "Where do I put the generated meta tags?",
    answer: "The generated HTML meta tags must be placed within the <head> section of your webpage's HTML code. If you're using a CMS like WordPress, there are often plugins (like Yoast or RankMath) that can insert these for you, or you can add them manually to your theme's header file."
  },
  {
    question: "Why isn't my Twitter Card showing up when I share my link?",
    answer: "If your card isn't appearing, ensure your meta tags are correctly placed in the <head> section and that your image URLs are absolute (e.g., https://yoursite.com/image.jpg), not relative. Also, verify that your site isn't blocking Twitter's crawler in your robots.txt file. You can use Twitter's Card Validator tool to debug issues."
  },
  {
    question: "Can I use Open Graph tags instead of Twitter Card tags?",
    answer: "Yes, Twitter is capable of falling back to Open Graph (og:) tags if specific Twitter tags (twitter:) are missing. However, relying solely on Open Graph limits your control over Twitter-specific features (like specifying the card type or the creator's handle). It's best practice to include both sets of tags for optimal performance across all platforms."
  }
];

export default function TwitterCardGeneratorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Twitter Card Generator",
        "description": "Create and preview perfectly formatted Twitter Card meta tags for your website.",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "All",
        "url": "https://tasklora.com/seo/twitter-card-generator",
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
            "name": "Twitter Card Generator",
            "item": "https://tasklora.com/seo/twitter-card-generator"
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
        id="schema-twitter-card"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ToolLayout
        title="Twitter Card Generator"
        description="Create perfectly formatted Twitter Card meta tags. Preview your card and optimize for social sharing."
        path="/seo/twitter-card-generator"
        content={content}
        faqs={faqs}
      >
        <TwitterCardClient />
      </ToolLayout>
    </>
  );
}
