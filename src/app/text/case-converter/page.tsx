import { generateSEO } from '@/lib/seo';
import { ToolLayout } from '@/components/tools/ToolLayout';
import CaseConverterClient from './Client';
import Head from 'next/head';
import Script from 'next/script';

export const metadata = generateSEO({
  title: 'Case Converter Tool | Convert Text to Upper, Lower, Title Case',
  description: 'Easily convert text to UPPERCASE, lowercase, Title Case, Sentence case, and more with our free online case converter tool.',
  path: '/text/case-converter',
});

const content = `
## Introduction
Welcome to the Case Converter Tool, the ultimate solution for transforming your text into any desired letter case format instantly. Whether you accidentally left the caps lock on, or you need to format your essay, article, or code in a specific case, our tool is here to help. With a single click, you can convert between uppercase, lowercase, title case, sentence case, and more.

## Why Use a Case Converter?
Formatting text manually can be a tedious and error-prone process, especially for large documents. A case converter tool saves you time and ensures consistency across your writing. 
- **Efficiency:** Instantly transform paragraphs or pages of text without retyping.
- **Accuracy:** Prevent typos that often occur when manually rewriting text.
- **Standardization:** Ensure your titles, headings, and sentences follow the correct grammatical or stylistic rules.

## Features
Our Case Converter Tool offers a comprehensive set of features:
- **UPPERCASE:** Converts all letters in the text to uppercase.
- **lowercase:** Converts all letters to lowercase.
- **Title Case:** Capitalizes the first letter of most words, ideal for book titles, blog post headings, and article titles.
- **Sentence case:** Capitalizes the first letter of each sentence, following standard grammatical rules.
- **Capitalize Each Word:** Capitalizes the first letter of every single word.
- **Toggle Case:** Inverts the case of each letter (e.g., changes 'a' to 'A' and 'B' to 'b').

## Step-by-Step Guide
1. **Input Your Text:** Paste the text you want to convert into the large text area provided on the screen.
2. **Select Case Format:** Click on one of the case formatting buttons (UPPERCASE, lowercase, Title Case, etc.) based on your needs.
3. **Review the Output:** The text in the editor will instantly update to reflect the selected case.
4. **Copy or Download:** Once you are satisfied with the result, use the 'Copy' button to copy the text to your clipboard, or the 'Download' button to save it as a text file to your device.

## Best Practices
- **Proofread:** Always review your text after conversion, especially when using Title Case or Sentence case, as algorithms may not catch every stylistic nuance (e.g., proper nouns, acronyms).
- **Use Sentence Case for Readability:** Long blocks of text are easiest to read in sentence case. Avoid using all uppercase for body paragraphs as it can appear aggressive and is difficult to read.
- **Follow Style Guides:** When writing professional or academic content, ensure your case formatting aligns with the relevant style guide (e.g., APA, MLA, Chicago).

## Common Mistakes
- **Overusing Uppercase:** Writing entirely in uppercase is often perceived as shouting and can deter readers. Use it sparingly for emphasis or specific acronyms.
- **Ignoring Proper Nouns in Lowercase:** If you convert a whole text to lowercase, remember to manually capitalize proper nouns like names of people, places, and brands.
- **Inconsistent Title Case:** Different style guides have different rules for which words to capitalize in a title (e.g., short prepositions). Be mindful of these rules if your work requires strict adherence to a specific style.
`;

const faqs = [
  { question: 'What is a case converter?', answer: 'A case converter is a tool that automatically changes the letter casing of text to formats like uppercase, lowercase, or title case.' },
  { question: 'Is the case converter tool free to use?', answer: 'Yes, our case converter tool is completely free and requires no registration or installation.' },
  { question: 'How do I change text to uppercase?', answer: 'Simply paste your text into the editor and click the "UPPERCASE" button. All letters will instantly become uppercase.' },
  { question: 'What is Sentence case?', answer: 'Sentence case capitalizes only the first letter of the first word in a sentence, along with any proper nouns, similar to standard written English.' },
  { question: 'Can I download the converted text?', answer: 'Yes, you can easily download the converted text as a .txt file by clicking the "Download" button.' },
  { question: 'Does the tool store my text?', answer: 'No, all conversions are processed securely on your client side, meaning your text is never stored on our servers.' }
];

export default function CaseConverterPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://tasklora.com/" },
      { "@type": "ListItem", "position": 2, "name": "Text Tools", "item": "https://tasklora.com/text" },
      { "@type": "ListItem", "position": 3, "name": "Case Converter", "item": "https://tasklora.com/text/case-converter" }
    ]
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Case Converter Tool",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "All",
    "description": "Easily convert text to UPPERCASE, lowercase, Title Case, Sentence case, and more.",
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
        title="Case Converter Tool"
        description="Convert your text to UPPERCASE, lowercase, Title Case, and more."
        path="/text/case-converter"
        content={content}
        faqs={faqs}
      >
        <CaseConverterClient />
      </ToolLayout>
    </>
  );
}
