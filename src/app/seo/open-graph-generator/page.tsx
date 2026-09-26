import { generateSEO } from '@/lib/seo';
import { ToolLayout } from '@/components/tools/ToolLayout';
import OpenGraphGeneratorClient from './OpenGraphGeneratorClient';

export const metadata = generateSEO({
  title: 'Free Open Graph Generator | Tasklora',
  description: 'Create perfectly formatted Open Graph meta tags for Facebook, LinkedIn, and Twitter. Preview social media cards and optimize your content for sharing.',
  path: '/seo/open-graph-generator',
});

const faqs = [
  {
    question: "What are Open Graph tags?",
    answer: "Open Graph (OG) tags are snippets of code in the <head> section of a webpage that control how URLs are displayed when shared on social media platforms like Facebook, LinkedIn, and Discord. They turn standard links into rich objects with a title, description, and image."
  },
  {
    question: "Do Open Graph tags affect SEO?",
    answer: "While Open Graph tags don't directly impact search engine rankings, they heavily influence social media performance. Better formatting leads to higher click-through rates (CTR) on social platforms, which drives more traffic to your site. Some search engines may also use them to enhance search results."
  },
  {
    question: "What is the recommended size for an Open Graph image?",
    answer: "The optimal size for an Open Graph image is 1200 x 630 pixels, with an aspect ratio of 1.91:1. This size ensures the image looks crisp and is displayed prominently across all major social media networks, especially high-resolution devices."
  },
  {
    question: "Do I need Twitter Cards if I have Open Graph tags?",
    answer: "Twitter (X) falls back to Open Graph tags if specific Twitter Card tags (twitter:card, twitter:title, etc.) are missing. However, it's generally best practice to include both to ensure the best possible rendering and formatting when your links are tweeted."
  },
  {
    question: "What does 'og:type' mean?",
    answer: "The 'og:type' tag specifies the kind of object your webpage represents. The most common type is 'website' for standard web pages. However, you can also use 'article' for blog posts, 'video' for media pages, or 'product' for e-commerce items to give platforms more context."
  },
  {
    question: "Why isn't my Open Graph image updating on Facebook?",
    answer: "Social networks heavily cache Open Graph data. If you change your tags or image, the old data might still show. You need to use Facebook's Sharing Debugger tool to scrape the new URL and force their servers to clear the cache and fetch the updated tags."
  }
];

const content = `
## What is an Open Graph Generator?

An Open Graph Generator is a specialized digital tool designed to help creators, marketers, and developers craft the precise HTML meta tags required to optimize how webpages appear when shared on social media networks. Originally introduced by Facebook in 2010, the Open Graph protocol enables any webpage to become a "rich object" within a social graph.

When you paste a link into a Facebook post, a LinkedIn update, a Discord chat, or even an iMessage, you typically see a neatly formatted "card" featuring an image, a bold title, and a short description. This doesn't happen by magic; the social platform's scraper is looking for specific Open Graph (\`og:\`) meta tags in the webpage's code to construct that card. 

Our Open Graph Generator simplifies this process. Instead of manually writing the code, you simply fill out a form with your page's title, description, URL, and image link. The tool instantly generates the correct HTML markup and provides a visual preview of what the card will look like in a user's feed, ensuring your content looks professional and engaging before you hit publish.

## Why Open Graph Tags Matter for Engagement

In today's digital landscape, a significant portion of web traffic is driven by social sharing and messaging apps. Without Open Graph tags, social platforms have to guess what content to display. They might pull the first random image they find on the page (like a tiny logo or a generic icon) and grab a confusing snippet of text.

**1. Increased Click-Through Rates (CTR):** The primary benefit of using Open Graph tags is a dramatic increase in CTR. A large, compelling image paired with a well-crafted title and description takes up more screen real estate in a social feed. It grabs attention, conveys the value of the link immediately, and entices users to click. Links optimized with Open Graph tags consistently outperform plain text links.

**2. Brand Consistency and Professionalism:** When users share your content, you want it to reflect well on your brand. A broken, unformatted link looks spammy or unprofessional. By defining the exact image, title, and site name, you control the narrative and ensure a consistent, polished brand experience across the web, no matter who is sharing your URL.

**3. Context and Clarity:** By utilizing specific tags like \`og:type\`, you provide context. You tell the platform whether the link is a standard website, a detailed news article, a profile, or a video. This helps the platform render the card in the most appropriate format and helps users understand what they are about to click on.

## Best Practices for Open Graph Optimization

To maximize the impact of your social shares, keep these best practices in mind when generating your Open Graph tags:

### Optimizing the Open Graph Title (\`og:title\`)
- **Keep it concise:** Aim for 40-60 characters. If it's too long, it will get truncated (cut off with an ellipsis), losing its impact.
- **Make it catchy:** Unlike your SEO title tag, which might be heavily keyword-focused, your \`og:title\` should be written purely for human engagement. Think of it as a headline designed to spark curiosity.
- **Avoid brand repetition:** You typically don't need to append your site name to the end of the \`og:title\` because the \`og:site_name\` tag handles that.

### Crafting the Open Graph Description (\`og:description\`)
- **Focus on the hook:** You have about 2-4 sentences (roughly 65-300 characters, though it varies wildly by platform and device) to convince someone to click.
- **Don't just copy the SEO meta description:** While they can be similar, the \`og:description\` should be more conversational and focused on the immediate value the user will get by clicking the link on social media.
- **Keep the most important information first:** Because truncation is common, ensure the core message is at the very beginning of the description.

### Selecting the Perfect Open Graph Image (\`og:image\`)
- **Size matters:** This is arguably the most critical element. Always use an image that is at least **1200 x 630 pixels** (a 1.91:1 ratio). This ensures the image is rendered as a large, high-resolution hero image rather than a tiny thumbnail.
- **Keep it visual:** Avoid cluttering the image with too much text, as it will be hard to read on mobile devices. Use high-quality, eye-catching photography or clean, branded graphics.
- **File size:** Keep the image file size under 5MB (ideal is under 1MB) to ensure platforms can quickly scrape and cache the image.

## How to Use the Tasklora Open Graph Generator

Creating your social media tags is fast and easy with our tool. Here is the step-by-step process:

1.  **Enter the OG Title:** Type the headline you want to appear on the social media card. Watch the live preview update in real-time.
2.  **Write the OG Description:** Add a short, engaging summary that complements the title and gives users a reason to click.
3.  **Provide the Canonical URL:** Enter the exact URL of the page you are generating tags for. Ensure it includes the \`https://\` protocol.
4.  **Add the Image URL:** Paste the direct URL to the image you want featured. Remember the 1200x630 pixel rule! The preview card will immediately show you if the image looks good.
5.  **Set the Site Name:** Enter the overall name of your website or brand (e.g., "Tasklora").
6.  **Select the Type:** Choose the most appropriate format. For most pages, "website" is perfect. For blog posts, choose "article".
7.  **Copy and Deploy:** Once the preview looks perfect, copy the HTML code generated in the box below the form. Paste this code directly into the \`<head>\` section of your webpage's HTML. 
8.  **Test It:** After deploying the code to your live site, use the Facebook Sharing Debugger or the LinkedIn Post Inspector to scrape the URL and verify that the platforms are reading your new tags correctly.
`;

export default function OpenGraphGeneratorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Open Graph Generator",
        "url": "https://tasklora.com/seo/open-graph-generator",
        "description": "Generate perfect Open Graph meta tags to optimize how your website looks when shared on social media platforms.",
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
            "name": "Open Graph Generator",
            "item": "https://tasklora.com/seo/open-graph-generator"
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
        title="Open Graph Generator"
        description="Create perfectly formatted Open Graph tags to control how your content appears on social media. Maximize engagement and click-through rates."
        path="/seo/open-graph-generator"
        content={content}
        faqs={faqs}
      >
        <OpenGraphGeneratorClient />
      </ToolLayout>
    </>
  );
}
