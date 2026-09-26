import React from 'react';
import { generateSEO } from '@/lib/seo';
import { ToolLayout } from '@/components/tools/ToolLayout';
import SlugGeneratorClient from './slug-generator-client';

export const metadata = generateSEO({
  title: 'SEO URL Slug Generator | Create Clean URLs',
  description: 'Generate clean, SEO-friendly URL slugs from any text or title. Supports stop word removal, unicode normalization, and symbol filtering.',
  path: '/seo/slug-generator',
});

const faqs = [
  {
    question: "What is a URL slug?",
    answer: "A URL slug is the exact part of a URL that identifies a specific page on a website in an easy-to-read form. For example, in the URL 'example.com/blog/seo-tips', 'seo-tips' is the slug."
  },
  {
    question: "Why should I remove stop words from my slugs?",
    answer: "Removing stop words (like 'a', 'the', 'and') keeps your URLs concise and focused on the main keywords. Shorter, keyword-rich URLs are often easier for users to read and can be slightly more beneficial for search engine optimization."
  },
  {
    question: "Does this tool support multiple languages?",
    answer: "Yes, the tool utilizes Unicode normalization to convert accented characters (like 'é' or 'ñ') into standard ASCII characters ('e' or 'n'). This ensures your slugs remain readable and URL-safe across different languages."
  },
  {
    question: "How long should a URL slug be?",
    answer: "It's best to keep your slugs short and descriptive, typically around 3 to 5 words. Avoid long, sentence-like URLs, as they can be truncated in search results and are harder to share."
  },
  {
    question: "Are hyphens better than underscores in URLs?",
    answer: "Yes, search engines like Google treat hyphens (-) as word separators, while underscores (_) are not always recognized as separators. Always use hyphens to separate words in your URL slugs."
  },
  {
    question: "Can I edit the generated slug?",
    answer: "The tool generates a slug automatically based on your input. If you want to change it, you can alter your input text or simply copy the generated slug and make manual adjustments before using it in your CMS."
  }
];

const content = `
## The Importance of SEO-Friendly URL Slugs

A URL slug is more than just a web address; it's a critical component of your site's on-page SEO and user experience. A well-crafted slug provides both search engines and human readers with an immediate understanding of what a page is about. Our SEO URL Slug Generator simplifies the process of creating clean, optimized slugs from any title or text.

When search engines crawl your website, they look at the URL structure to gather context. A messy URL filled with special characters, parameters, or unnecessary words can confuse crawlers and deter users from clicking your link. By generating a concise, keyword-focused slug, you improve your chances of ranking higher and increasing your click-through rate (CTR).

## Best Practices for Creating URL Slugs

Creating the perfect URL slug involves a few key principles. Following these best practices will help you maximize your SEO efforts:

1. **Keep it Short and Simple:** Aim for a slug that is 3 to 5 words long. Shorter URLs are easier to read, share, and remember. They are also less likely to get cut off in search engine result pages (SERPs).
2. **Use Target Keywords:** Include the primary keyword for the page within the slug. This provides a strong relevance signal to search engines.
3. **Use Hyphens to Separate Words:** Always use hyphens (-) rather than underscores (_) or spaces. Search engines recognize hyphens as word separators, helping them read the individual words in your slug.
4. **Remove Stop Words:** Words like "a", "an", "the", "and", "or", and "but" add unnecessary length to your URL without providing much SEO value. Our tool automatically offers an option to filter these out.
5. **Use Lowercase Letters:** Web servers can be case-sensitive, which means "Page-Slug" and "page-slug" might be treated as two different URLs, leading to 404 errors or duplicate content issues. Always use lowercase letters.
6. **Future-Proof Your URLs:** Avoid including years or numbers that might change. For example, instead of "best-seo-tools-2024", use "best-seo-tools". This allows you to update the content next year without changing the URL and risking broken links or lost authority.

## How to Use the URL Slug Generator

Our tool is designed to be quick and intuitive:

1. **Enter Your Text:** Type or paste your article title, product name, or any text into the input field.
2. **Toggle Stop Words:** Decide whether you want to remove common stop words. We recommend keeping this option checked for cleaner, more focused slugs.
3. **Copy the Result:** The tool will instantly process your text—converting it to lowercase, normalizing special characters, removing punctuation, and replacing spaces with hyphens. The final slug is presented in a code block for easy copying.
4. **Implement:** Paste the generated slug into your Content Management System (CMS) or web framework routing setup.

By making our SEO URL Slug Generator a regular part of your publishing workflow, you can ensure that every page you create follows SEO best practices, helping you build a technically sound and user-friendly website.
`;

export default function SlugGeneratorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "SEO Slug Generator",
        "url": "https://tasklora.com/seo/slug-generator",
        "applicationCategory": "SEOApplication",
        "operatingSystem": "All",
        "description": "Generate clean, SEO-friendly URL slugs by removing symbols, standardizing text, and eliminating stop words."
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
            "name": "Slug Generator",
            "item": "https://tasklora.com/seo/slug-generator"
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ToolLayout
        title="SEO URL Slug Generator"
        description="Create clean, SEO-friendly URL slugs instantly. Convert titles to optimized URLs with stop-word removal and unicode support."
        path="/seo/slug-generator"
        content={content}
        faqs={faqs}
      >
        <SlugGeneratorClient />
      </ToolLayout>
    </>
  );
}
