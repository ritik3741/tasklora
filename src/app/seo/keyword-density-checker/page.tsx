import React from 'react';
import { generateSEO } from '@/lib/seo';
import { ToolLayout } from '@/components/tools/ToolLayout';
import KeywordDensityClient from './keyword-density-client';

export const metadata = generateSEO({
  title: 'Free Keyword Density Checker | SEO Tool',
  description: 'Analyze your content with our free Keyword Density Checker. Calculate keyword frequency, total words, reading time, and optimize your SEO content.',
  path: '/seo/keyword-density-checker',
});

const faqs = [
  {
    question: "What is keyword density in SEO?",
    answer: "Keyword density is the percentage of times a specific keyword or phrase appears on a web page compared to the total number of words. It is used by search engines to understand the topic of a page. While there is no perfect percentage, maintaining a natural balance is essential to avoid keyword stuffing."
  },
  {
    question: "What is the ideal keyword density?",
    answer: "Most SEO experts recommend a keyword density between 1% and 3%. This means the target keyword appears 1 to 3 times for every 100 words. However, search engines now prioritize content quality, natural language, and semantic relevance over strict keyword frequency."
  },
  {
    question: "Does this tool exclude stop words?",
    answer: "Yes, our Keyword Density Checker automatically excludes common stop words (such as 'the', 'is', 'at', 'which', and 'on') to provide a more accurate analysis of the meaningful keywords driving your SEO."
  },
  {
    question: "How does keyword stuffing affect SEO?",
    answer: "Keyword stuffing—overloading a webpage with keywords in an unnatural way—can harm your search rankings. Search engines like Google may penalize pages for this practice. It's always best to write naturally for your audience while integrating keywords thoughtfully."
  },
  {
    question: "Can I use this tool for multiple keywords?",
    answer: "This tool currently analyzes single-word (unigram) frequencies. By identifying the top individual words, you can get a broad sense of the topics covered. Future updates may include multi-word phrase (n-gram) analysis."
  },
  {
    question: "Is the reading time estimate accurate?",
    answer: "The reading time is estimated based on an average reading speed of 200 words per minute. It serves as a helpful baseline for understanding how long it might take a user to consume your content."
  }
];

const content = `
## What is a Keyword Density Checker?

A Keyword Density Checker is an essential SEO tool that helps you analyze the frequency of keywords in your text. By determining the percentage of times a word appears in relation to the total word count, you can optimize your content for search engines without over-optimizing or "keyword stuffing."

In the early days of SEO, high keyword density was often a shortcut to better rankings. Today, search engines use sophisticated algorithms to understand semantic relevance and context. However, knowing your keyword density remains a foundational step to ensure search engines correctly identify your page's primary topics.

## Best Practices for Keyword Optimization

When optimizing your content, keeping keyword density in mind is only part of the strategy. Consider these best practices:

1. **Write for Humans First:** Always prioritize readability and user experience. If a keyword feels forced, remove it or rephrase the sentence. Natural language flows better and keeps readers engaged.
2. **Target a 1% to 3% Density:** Aim for a sweet spot where your target keyword appears enough times to be recognized but not so frequently that it disrupts the reading experience.
3. **Use LSI Keywords:** Latent Semantic Indexing (LSI) keywords are related terms and synonyms. Instead of repeating the same exact keyword, use variations to build a rich, contextual topic profile.
4. **Optimize Key Areas:** Ensure your primary keyword is present in the title tag, meta description, H1 heading, and within the first 100 words of the content.
5. **Analyze the Competition:** Look at the top-ranking pages for your target keyword. Tools like our Keyword Density Checker can help you analyze competitor content to understand their optimization strategy.

## How to Use This Tool

Using our Keyword Density Checker is fast and straightforward:

1. **Paste Your Content:** Copy the text of your article, blog post, or webpage and paste it into the text area provided above.
2. **Review the Stats:** The tool will instantly calculate the total word count and estimate the reading time.
3. **Analyze Top Keywords:** Scroll down to view the table of the top 20 most frequently used words. The tool automatically filters out common stop words to highlight the terms that matter most.
4. **Adjust Your Content:** Based on the results, you may choose to add more occurrences of your target keyword or replace overused words with synonyms.

By regularly checking your content, you can maintain a healthy balance that appeals to both search engines and your audience. Whether you are drafting a new blog post, updating a product description, or reviewing landing page copy, our tool provides actionable insights to improve your on-page SEO.
`;

export default function KeywordDensityCheckerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Keyword Density Checker",
        "url": "https://tasklora.com/seo/keyword-density-checker",
        "applicationCategory": "SEOApplication",
        "operatingSystem": "All",
        "description": "Analyze keyword density, word count, and reading time for SEO content."
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
            "name": "Keyword Density Checker",
            "item": "https://tasklora.com/seo/keyword-density-checker"
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
        title="Keyword Density Checker"
        description="Analyze your article's keyword density, frequency, and reading time instantly."
        path="/seo/keyword-density-checker"
        content={content}
        faqs={faqs}
      >
        <KeywordDensityClient />
      </ToolLayout>
    </>
  );
}
