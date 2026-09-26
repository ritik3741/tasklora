import { generateSEO } from '@/lib/seo';
import { ToolLayout } from '@/components/tools/ToolLayout';
import MetaTagGeneratorClient from './MetaTagGeneratorClient';

export const metadata = generateSEO({
  title: 'Free Meta Tag Generator | Tasklora',
  description: 'Create perfectly optimized meta tags for your website with our free Meta Tag Generator. Enhance your SEO and improve search engine visibility instantly.',
  path: '/seo/meta-tag-generator',
});

const faqs = [
  {
    question: "What are meta tags?",
    answer: "Meta tags are snippets of HTML code that describe the content of a web page. They don't appear on the page itself but are included in the page's source code. Search engines use them to understand what the page is about and how to display it in search results."
  },
  {
    question: "Why is the title tag so important?",
    answer: "The title tag is arguably the most important meta tag for SEO. It tells search engines and users what your page is about, and it's what shows up as the clickable link in search engine results pages (SERPs). A well-written title tag can significantly improve your click-through rate."
  },
  {
    question: "Do keywords meta tags still matter for SEO?",
    answer: "Major search engines like Google no longer use the keywords meta tag as a ranking factor. However, some smaller search engines and internal site search engines might still use it. While not critical, including it won't harm your site, though many SEO professionals skip it entirely today."
  },
  {
    question: "What is the ideal length for a meta description?",
    answer: "While search engines don't have a strict character limit, they typically truncate meta descriptions around 155-160 characters. It's best practice to keep your meta descriptions between 150-160 characters to ensure the full message is visible in search results."
  },
  {
    question: "What do 'index' and 'follow' mean in the robots meta tag?",
    answer: "'Index' tells search engines to add the page to their database so it can appear in search results. 'Follow' tells them to crawl the links on that page to discover other pages. You might use 'noindex, nofollow' for private or administrative pages you don't want found via search."
  },
  {
    question: "How do I add these meta tags to my website?",
    answer: "Once generated, you need to copy the HTML code and paste it into the <head> section of your web page's HTML document. If you use a CMS like WordPress, there are often plugins (like Yoast or RankMath) where you can input the title and description directly without touching the code."
  }
];

const content = `
## What is a Meta Tag Generator?

A Meta Tag Generator is a specialized SEO tool designed to help website owners, developers, and marketers easily create the essential HTML meta tags for their web pages. Meta tags are snippets of code hidden in a page's source code that provide critical information to search engines and browsers about the page's content, structure, and behavior. While they aren't visible to human visitors reading your page, they play a foundational role in technical SEO and how your page appears in search engine results pages (SERPs).

Our tool provides an intuitive interface where you simply fill in your page's details—such as the title, description, author, and indexing preferences—and instantly generates the perfectly formatted HTML code ready to be pasted into your website's \`<head>\` section. It also includes a live preview of how your page might look in Google's search results, allowing you to optimize for maximum click-through rates.

## Why Meta Tags Are Crucial for SEO

Despite the evolution of search engine algorithms, meta tags remain a fundamental component of on-page SEO. They serve as the first point of contact between your website and search engine crawlers.

**1. First Impressions in SERPs:** The Title Tag and Meta Description are what users see when your page appears in a Google search. A compelling title and a clear, persuasive description act as your organic advertisement. They are the primary drivers of your Click-Through Rate (CTR). Even if you rank #1, a poor title and description can result in fewer clicks than the #2 or #3 result.

**2. Crawling and Indexing Control:** The Robots meta tag is powerful. It dictates how search engine bots should treat your page. You can instruct them to index the page (include it in search results) or noindex it (keep it out). You can also tell them to follow the links on the page to discover more content or nofollow them. This control is vital for managing your "crawl budget" and keeping thin or private content out of search engines.

**3. Mobile Responsiveness:** The Viewport meta tag is essential in today's mobile-first indexing world. It tells mobile browsers how to scale and display your page on smaller screens. Without a proper viewport tag, your site may appear tiny and unreadable on smartphones, leading to a terrible user experience and significant SEO penalties.

## Best Practices for Writing Meta Tags

To get the most out of our Meta Tag Generator, follow these industry-standard best practices:

### Crafting the Perfect Title Tag
- **Keep it under 60 characters:** Google typically truncates titles longer than 60 characters. Keep it concise to ensure your full message is seen.
- **Front-load primary keywords:** Place your most important keywords towards the beginning of the title.
- **Make it compelling:** Use action words, numbers, or emotional triggers to entice users to click.
- **Include your brand:** It's common practice to append your brand name at the end (e.g., "Primary Keyword - Brand Name").
- **Every page needs a unique title:** Avoid duplicate title tags across your site.

### Writing Effective Meta Descriptions
- **Aim for 150-160 characters:** While there is no strict limit, descriptions are usually truncated around 155 characters on desktop and slightly less on mobile.
- **Write for humans, not bots:** The meta description does not directly impact rankings. Its sole purpose is to drive clicks. Write persuasive, marketing-focused copy.
- **Include a Call to Action (CTA):** Encourage users to click with phrases like "Learn more," "Read our guide," or "Shop now."
- **Match the page intent:** Ensure the description accurately reflects the content users will find on the page to reduce bounce rates.

### Managing Robots Tags
- **Default to Index, Follow:** For most public content, this is the standard setting, allowing search engines to index the page and follow its links.
- **Use Noindex carefully:** Use "noindex" for thank-you pages, admin login screens, internal search results pages, or thin content you don't want clogging up search results.

## How to Use the Tasklora Meta Tag Generator

Using our tool is straightforward and requires no coding knowledge. Follow these simple steps:

1.  **Enter your Page Title:** Type in the main title for your page. Watch the live Search Preview update to see how it will look on Google. Ensure it's compelling and fits within the typical character limits.
2.  **Write your Description:** Craft a persuasive summary of your page's content. Use the preview to check that it isn't being cut off abruptly.
3.  **Add Keywords (Optional):** While modern search engines largely ignore the keywords meta tag, you can add comma-separated terms if your internal site search or older systems require them.
4.  **Specify an Author:** If the page is an article or blog post, you can add the author's name.
5.  **Set Robots Directives:** Choose whether search engines should index the page ("index" or "noindex") and whether they should follow the links on the page ("follow" or "nofollow").
6.  **Review the Viewport:** The default viewport setting (\`width=device-width, initial-scale=1.0\`) is the standard for modern responsive design. Leave this as is unless you have specific requirements.
7.  **Copy and Paste:** Once you are satisfied with the preview, look at the "Generated HTML" section. Copy the entire block of code and paste it into the \`<head>\` section of your HTML document.
`;

export default function MetaTagGeneratorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Meta Tag Generator",
        "url": "https://tasklora.com/seo/meta-tag-generator",
        "description": "Generate HTML meta tags for your website to improve SEO and search engine visibility.",
        "applicationCategory": "SEOApplication",
        "operatingSystem": "All"
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
            "name": "Meta Tag Generator",
            "item": "https://tasklora.com/seo/meta-tag-generator"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ToolLayout
        title="Meta Tag Generator"
        description="Create perfectly optimized meta tags for your website with our free generator. Instantly generate HTML code for titles, descriptions, and robots directives."
        path="/seo/meta-tag-generator"
        content={content}
        faqs={faqs}
      >
        <MetaTagGeneratorClient />
      </ToolLayout>
    </>
  );
}
