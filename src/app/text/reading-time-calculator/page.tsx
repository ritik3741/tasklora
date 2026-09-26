import React from 'react';
import { generateSEO } from '@/lib/seo';
import { ToolLayout } from '@/components/tools/ToolLayout';
import ReadingTimeClient from './ReadingTimeClient';

export const metadata = generateSEO({
  title: 'Reading Time Calculator | Estimate Reading & Speaking Time',
  description: 'Calculate the estimated reading time and speaking time for any text. Adjust reading speed (WPM) and analyze the reading level of your content.',
  path: '/text/reading-time-calculator',
});

const content = `
## Introduction to Reading Time
In today's fast-paced digital world, respecting your audience's time is crucial. The Reading Time Calculator is a powerful tool designed to help writers, marketers, and public speakers estimate exactly how long it will take an average person to read or speak a piece of text. By providing this information upfront, you can improve user engagement and set clear expectations for your readers.

## Why Use a Reading Time Calculator?
Adding a "read time" estimate to your articles or blog posts has become a standard practice across the web, popularized by platforms like Medium. 

Here are the primary reasons you should use a reading time calculator:
1. **Improved User Experience**: Readers appreciate knowing what they are committing to before they start reading. A simple "5 min read" badge can significantly reduce bounce rates.
2. **Better Engagement**: Users are more likely to commit to an article if they know they have the time to finish it.
3. **Speech Preparation**: If you are preparing a speech, presentation, or podcast script, knowing the speaking time is essential for pacing and scheduling.
4. **Content Optimization**: By analyzing the reading level alongside the time, you can tailor your content to match the preferences and abilities of your target audience.

## Features of Our Calculator
Our Reading Time Calculator goes beyond simple word counts, offering a comprehensive suite of features:
- **Live Calculation**: Get instant estimates as you type or paste your text into the editor.
- **Adjustable WPM**: Not everyone reads at the same speed. Adjust the Words Per Minute (WPM) setting to see how long it takes a slow, average, or fast reader to consume your content. The default is set to 250 WPM, which is the average adult reading speed.
- **Speaking Time Estimation**: Automatically calculates how long it will take to read the text aloud, based on an average speaking rate of 130 WPM.
- **Reading Level Analysis**: Provides a quick estimate of the text's complexity (e.g., 8th Grade, College Level) to help you gauge readability.

## Step-by-Step Guide
Using the tool is quick and easy:
1. **Input Your Content**: Paste your article, script, or document into the main text editor.
2. **Set Your Reading Speed**: Use the dropdown menu above the editor to select a reading speed (200 WPM for slow, 250 WPM for average, 300 WPM for fast).
3. **Review the Stats**: Look at the statistics panel below the editor. You will see the total word count, estimated reading time, estimated speaking time, and the approximate reading level.
4. **Adjust as Needed**: If your content is too long for your desired format, you can edit the text directly in the box and watch the stats update in real-time.

## Best Practices for Content Length
- **Blog Posts**: For general blog posts, a reading time of 3-7 minutes (roughly 800-1,800 words) is often considered the sweet spot for engagement and SEO.
- **Long-Form Content**: In-depth guides or whitepapers can take 10-20 minutes to read. Ensure you break up the text with headings, images, and bullet points to keep the reader engaged.
- **Speeches and Presentations**: Aim for slightly under your allotted time. If you have a 10-minute slot, prepare about 8-9 minutes of material (around 1,000-1,100 words) to allow for pauses and natural pacing.

## Common Mistakes to Avoid
- **Ignoring Readability**: A short reading time doesn\'t guarantee engagement if the text is incredibly dense or complex. Always consider the reading level alongside the time.
- **Rushing Speeches**: Don't try to cram a 15-minute script into a 10-minute presentation by talking faster. It will frustrate your audience. Edit the content down instead.
- **Forgetting Mobile Users**: Mobile readers often skim. If your reading time is high, ensure your formatting is highly scannable with clear subheadings.
`;

const faqs = [
  {
    question: 'How is reading time calculated?',
    answer: 'Reading time is calculated by dividing the total word count of your text by an average reading speed. By default, this tool uses 250 Words Per Minute (WPM), which is standard for adult readers.'
  },
  {
    question: 'What is the average reading speed?',
    answer: 'The average adult reads at about 200 to 250 Words Per Minute (WPM) when reading on a screen.'
  },
  {
    question: 'How is speaking time different from reading time?',
    answer: 'People speak slower than they read silently. The average conversational speaking rate is around 130 to 150 WPM. This tool uses 130 WPM to calculate speaking time.'
  },
  {
    question: 'What does the reading level indicate?',
    answer: 'The reading level estimates the education level required to easily understand the text, based on sentence length and word complexity (syllables). Lower grades mean the text is easier to read.'
  },
  {
    question: 'Does formatting affect reading time?',
    answer: 'Technically, no; formatting doesn\'t change the word count. However, good formatting (bullet points, short paragraphs) makes text easier to skim, which can reduce the actual time a user spends on the page.'
  },
  {
    question: 'Should I put the reading time on my blog posts?',
    answer: 'Yes! Many users appreciate knowing the time commitment upfront. It can improve user experience and help reduce your bounce rate.'
  }
];

export default function ReadingTimePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name: 'Reading Time Calculator',
        description: 'Calculate the estimated reading time and speaking time for any text.',
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'All',
        url: 'https://tasklora.com/text/reading-time-calculator',
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
            name: 'Reading Time Calculator',
            item: 'https://tasklora.com/text/reading-time-calculator'
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
        title="Reading Time Calculator"
        description="Calculate estimated reading and speaking times instantly. Analyze text readability and adjust WPM to match your audience."
        path="/text/reading-time-calculator"
        content={content}
        faqs={faqs}
      >
        <ReadingTimeClient />
      </ToolLayout>
    </>
  );
}
