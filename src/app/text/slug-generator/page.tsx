import React from 'react';
import { generateSEO } from '@/lib/seo';
import { ToolLayout } from '@/components/tools/ToolLayout';
import SlugGeneratorClient from './SlugGeneratorClient';

export const metadata = generateSEO({
  title: 'SEO Slug Generator | Create Clean URLs',
  description: 'Generate clean, SEO-friendly URL slugs from your text or titles. Automatically remove stop words and format for optimal search engine visibility.',
  path: '/text/slug-generator',
});

const content = `
## Introduction to URL Slug Generation
A URL slug is the exact part of a web address that comes after the domain name and identifies a specific page on a website. In the context of SEO (Search Engine Optimization), having a clean, readable, and keyword-rich slug is incredibly important. Our free SEO Slug Generator tool allows you to convert any title or string of text into a perfectly formatted URL slug in seconds.

## Why Use an SEO Slug Generator?
When you create a new blog post, article, or product page, content management systems (CMS) often auto-generate the slug based on your title. While convenient, these auto-generated URLs frequently contain unnecessary words (stop words), special characters, and uppercase letters that can make the URL long and difficult to read. 

Using a dedicated slug generator ensures that your URLs are:
1. **Clean and Readable**: Easily understood by both humans and search engines.
2. **Optimized for Keywords**: By removing filler words, you ensure that the most important keywords stand out.
3. **Standardized**: Maintaining a consistent URL structure across your website improves overall site architecture.
4. **Easier to Share**: Short, clean URLs look better when shared on social media or in emails.

## Features of Our Slug Generator
Our tool is designed with simplicity and effectiveness in mind, offering several key features:
- **Instant Conversion**: Type or paste your title, and the slug is generated in real-time.
- **Stop Word Removal**: Automatically strips out common filler words like 'a', 'an', 'the', 'and', etc., keeping the slug concise.
- **Lowercase Enforcement**: Converts all letters to lowercase to prevent 404 errors caused by case sensitivity on some web servers.
- **Special Character Handling**: Removes punctuation and special characters, replacing spaces with hyphens (the standard separator for URLs).
- **One-Click Copy & Export**: Easily copy your generated slug to the clipboard or download it as a text file for your records.

## Step-by-Step Guide
Using the SEO Slug Generator is incredibly straightforward:
1. **Input Your Text**: Start by typing or pasting your page title, article headline, or desired phrase into the input box.
2. **Adjust Settings**: Use the checkboxes to customize the output. You can choose whether to force lowercase letters (highly recommended) and whether to remove common stop words.
3. **Review the Slug**: The tool will instantly display the generated slug in the adjacent box.
4. **Copy or Download**: Once you're satisfied with the result, click the "Copy" button to save it to your clipboard, or "Download" to save it as a text file.

## Best Practices for SEO Slugs
To get the most out of your URL slugs, consider following these industry best practices:
- **Keep it Short**: Aim for 3-5 words. Shorter URLs are easier to read, share, and remember.
- **Include Target Keywords**: Make sure your primary keyword is present in the slug.
- **Use Hyphens, Not Underscores**: Search engines like Google treat hyphens as space separators, while underscores are often treated as part of a word.
- **Avoid Dates**: Unless you run a news site, avoid putting dates or years in the slug. This makes it easier to update the content in the future without changing the URL and setting up redirects.
- **Match the Intent**: The slug should accurately reflect the content of the page so users know what to expect before clicking.

## Common Mistakes to Avoid
- **Overstuffing Keywords**: Don't cram every possible keyword into the slug. It looks spammy and can harm your rankings.
- **Changing Slugs Unnecessarily**: Once a page is published and indexed, avoid changing the slug. If you must change it, ensure you set up a proper 301 redirect from the old URL to the new one to preserve SEO value.
- **Using Unreadable Characters**: Stick to alphanumeric characters and hyphens. Avoid symbols, emojis, or non-Latin characters unless specifically required for a localized site.
`;

const faqs = [
  {
    question: 'What is a URL slug?',
    answer: 'A URL slug is the part of a web address that comes at the very end and identifies a specific page on a website. For example, in "example.com/blog/my-post", "my-post" is the slug.'
  },
  {
    question: 'Why are hyphens used in slugs instead of underscores?',
    answer: 'Search engines like Google read hyphens as word separators. Underscores are often read as joining characters, so "my_post" might be read as "mypost", which is less ideal for SEO.'
  },
  {
    question: 'Should I remove stop words from my slugs?',
    answer: 'Generally, yes. Removing stop words like "a", "the", and "and" makes your URL shorter, cleaner, and helps emphasize the important keywords.'
  },
  {
    question: 'Is it bad to have long URLs?',
    answer: 'While long URLs won\'t necessarily ruin your SEO, shorter URLs are generally preferred. They are easier for users to read, share, and remember, and they keep the focus on your primary keywords.'
  },
  {
    question: 'Can I change the slug of an existing page?',
    answer: 'You can, but you must implement a 301 redirect from the old URL to the new one. Otherwise, any existing links to the old URL will break (resulting in a 404 error) and you will lose the SEO value those links provided.'
  },
  {
    question: 'Does capitalization matter in URLs?',
    answer: 'Yes, on some servers (like Linux/Unix), URLs are case-sensitive. It is a universal best practice to use only lowercase letters in URLs to avoid confusion and potential 404 errors.'
  }
];

export default function SlugGeneratorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name: 'SEO Slug Generator',
        description: 'Generate clean, SEO-friendly URL slugs from your text or titles.',
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'All',
        url: 'https://tasklora.com/text/slug-generator',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://tasklora.com/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Text Tools',
            item: 'https://tasklora.com/text'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'SEO Slug Generator',
            item: 'https://tasklora.com/text/slug-generator'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
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
        title="SEO Slug Generator"
        description="Create clean, SEO-optimized URL slugs instantly. Remove stop words, convert to lowercase, and format for best search engine visibility."
        path="/text/slug-generator"
        content={content}
        faqs={faqs}
      >
        <SlugGeneratorClient />
      </ToolLayout>
    </>
  );
}
