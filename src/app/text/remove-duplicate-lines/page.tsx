import { generateSEO } from '@/lib/seo';
import { ToolLayout } from '@/components/tools/ToolLayout';
import RemoveDuplicateLinesClient from './Client';
import Script from 'next/script';

export const metadata = generateSEO({
  title: 'Remove Duplicate Lines Tool | Clean Lists & Text Instantly',
  description: 'Easily remove duplicate lines from your text. Features include preserve order, case-sensitive filtering, and instant output. Try our free duplicate remover tool.',
  path: '/text/remove-duplicate-lines',
});

const content = `
## Introduction
Welcome to the Remove Duplicate Lines tool, your ultimate companion for organizing, cleaning, and managing large blocks of text. Whether you are dealing with a massive mailing list, cleaning up raw data, sorting through code arrays, or just organizing your notes, duplicate entries can be a massive headache. Our tool simplifies this process by allowing you to instantly identify and remove duplicate lines with precision.

## Why Use a Duplicate Line Remover?
Handling text data manually is prone to human error. Attempting to spot duplicates line-by-line across hundreds or thousands of lines is not only time-consuming but nearly impossible to do perfectly. Here is why you should use a dedicated tool:
- **Save Time:** Instantly clean up your lists instead of spending hours manually reviewing them.
- **Data Integrity:** Ensure that your datasets, emails, or user lists are accurate and contain no redundancies.
- **Efficiency:** Clean data makes your downstream processes—whether that's a mail merge, a database import, or a code execution—run smoother and faster.

## Features
Our Remove Duplicate Lines tool is packed with features designed to give you complete control over how your text is processed:
- **Instant Removal:** Paste your text, click a button, and watch the duplicates vanish instantly.
- **Preserve Order:** By default, our tool maintains the original order of your lines. If you toggle this off, it will sort the resulting unique lines alphabetically.
- **Case Sensitivity:** Choose whether "Apple" and "apple" should be treated as the same word (case-insensitive) or as two distinct entries (case-sensitive).
- **Line Count Tracking:** The tool visually displays exactly how many duplicate lines were successfully identified and removed from your original text.
- **Copy & Download:** Easily copy your cleaned list to your clipboard or download it directly as a text file for safekeeping.

## Step-by-Step Guide
1. **Input Your List:** Copy the text or list you want to clean and paste it into the main text editor area.
2. **Configure Settings:** Choose your preferences. Check 'Preserve Order' if you want the first occurrence of each line to stay in its original position. Check 'Case Sensitive' if capitalization matters.
3. **Execute:** Click the "Remove Duplicates" button.
4. **Review Results:** The text area will update with your clean list, and a small indicator will tell you how many lines were removed.
5. **Export:** Use the 'Copy' button to copy the result, or click 'Download' to save the unique lines directly to your computer.

## Best Practices
- **Standardize Whitespace First:** Sometimes lines appear unique simply because one has a trailing space. Consider trimming whitespace before using the duplicate remover if you are dealing with very messy data.
- **Case Sensitivity for Emails:** If you are cleaning an email list, you should usually turn *off* case sensitivity, as "User@Email.com" and "user@email.com" are the exact same destination.
- **Backup Original Data:** Always keep a raw copy of your original dataset before overwriting it with the cleaned version, just in case you need to reference the original format.

## Common Mistakes
- **Assuming Empty Lines Are Ignored:** If your text has multiple empty lines, the tool will treat them as duplicates of the first empty line and remove the rest. Be aware of this if you use empty lines for spacing.
- **Forgetting Case Sensitivity:** As mentioned, leaving case sensitivity on when cleaning emails or generic tags might leave duplicates in your list. Always double-check this setting based on your data type.
- **Not Checking the Removed Count:** The removed count is a great sanity check. If you expected to remove 10 duplicates but the tool removed 500, you might have accidentally pasted the wrong data or chosen the wrong settings.
`;

const faqs = [
  { question: 'Does this tool save my data?', answer: 'No, all the processing is done completely in your browser on the client side. We do not store or transmit your text to any servers.' },
  { question: 'What does "Preserve Order" do?', answer: 'When "Preserve Order" is checked, the tool keeps the unique lines in the exact sequence they first appeared. If unchecked, it will sort the final list alphabetically.' },
  { question: 'How does the case-sensitive toggle work?', answer: 'If case-sensitive is checked, "Word" and "word" are treated as two different lines. If unchecked, they are treated as duplicates and only the first one is kept.' },
  { question: 'Is there a limit to how many lines I can process?', answer: 'Because the tool runs in your browser, the limit depends on your device memory. However, it can easily handle tens of thousands of lines instantly.' },
  { question: 'Does it remove empty lines?', answer: 'It will treat multiple empty lines as duplicates and reduce them to a single empty line.' },
  { question: 'Can I export the cleaned list?', answer: 'Yes, you can easily copy the result to your clipboard or download it as a .txt file using the buttons provided below the editor.' }
];

export default function RemoveDuplicateLinesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://tasklora.com/" },
      { "@type": "ListItem", "position": 2, "name": "Text Tools", "item": "https://tasklora.com/text" },
      { "@type": "ListItem", "position": 3, "name": "Remove Duplicate Lines", "item": "https://tasklora.com/text/remove-duplicate-lines" }
    ]
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Remove Duplicate Lines Tool",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "All",
    "description": "Easily remove duplicate lines from your text with options for case sensitivity and order preservation.",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
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
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="webapp-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <ToolLayout
        title="Remove Duplicate Lines"
        description="Clean up lists and text by instantly removing duplicate lines."
        path="/text/remove-duplicate-lines"
        content={content}
        faqs={faqs}
      >
        <RemoveDuplicateLinesClient />
      </ToolLayout>
    </>
  );
}
