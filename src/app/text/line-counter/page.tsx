import React from 'react';
import { Metadata } from 'next';
import { generateSEO } from '@/lib/seo';
import { ToolLayout } from '@/components/tools/ToolLayout';
import { LineCounterClient } from './LineCounterClient';

const title = "Line Counter | Free Online Tool to Count Lines in Text";
const description = "Instantly count the total lines, empty lines, and non-empty lines in your text. Find the longest and shortest lines online for free.";
const path = "/text/line-counter";

export const metadata: Metadata = generateSEO({ title, description, path });

export default function LineCounterPage() {
  const content = (
    <>
      <p>
        Welcome to the <strong>Line Counter</strong> tool, your go-to utility for analyzing the structural breakdown of any text document, snippet of code, or large dataset. This simple yet highly effective application provides you with immediate metrics regarding the lines in your text, which can be invaluable for programmers, writers, data analysts, and editors.
      </p>

      <h2>Why Use a Line Counter?</h2>
      <p>
        You might wonder why counting lines is important when word processors already give you a word count. The truth is, in many technical and professional fields, the number of lines is a critical metric:
      </p>
      <ul>
        <li><strong>Software Development:</strong> Programmers often evaluate the complexity and scale of a script by its "Lines of Code" (LOC). Knowing the ratio of empty lines to non-empty lines can also help evaluate code formatting and readability.</li>
        <li><strong>Data Analysis:</strong> When dealing with large CSV files, log files, or text datasets, the number of lines usually corresponds exactly to the number of records or data entries. This tool lets you quickly verify if a dataset has the expected number of records before you import it into a database.</li>
        <li><strong>Writing and Poetry:</strong> For poets and scriptwriters, line counts dictate structure. Stanzas and script pages require precise formatting, and keeping track of lines is essential.</li>
        <li><strong>Billing and Translation:</strong> Freelance translators or transcriptionists are frequently paid on a per-line basis. This tool provides an accurate count to help generate invoices.</li>
      </ul>

      <h2>Features of Our Line Counter</h2>
      <p>
        Our Line Counter does much more than just tell you how many lines are in a document. It breaks down the text to give you a comprehensive statistical overview:
      </p>
      <ul>
        <li><strong>Total Lines:</strong> The absolute number of lines in your text, including empty ones.</li>
        <li><strong>Non-Empty Lines:</strong> The number of lines that contain at least one character (excluding whitespace-only lines). This is particularly useful for getting an accurate LOC count.</li>
        <li><strong>Empty Lines:</strong> The number of blank lines in your text. A high number of empty lines might indicate poor formatting or excessive spacing.</li>
        <li><strong>Longest Line:</strong> Displays the character length of the longest line in your document. Useful for ensuring your code or text doesn't exceed a specific margin (e.g., the standard 80-character limit in coding).</li>
        <li><strong>Shortest Line:</strong> Displays the character length of the shortest line in your document.</li>
        <li><strong>Privacy First:</strong> Your text is processed entirely within your browser. We do not store, track, or save any of your input.</li>
      </ul>

      <h2>Step-by-Step Guide on How to Use the Tool</h2>
      <p>
        Getting your line statistics is as easy as one, two, three. Here is how you can use the Line Counter efficiently:
      </p>
      <ol>
        <li><strong>Input Your Text:</strong> Copy the text, code, or data from your source file and paste it into the large input box provided.</li>
        <li><strong>View Instant Statistics:</strong> As soon as you paste the text, the stats panel at the top will automatically update. There are no buttons to click; the processing happens in real time.</li>
        <li><strong>Analyze the Data:</strong> Review the total lines, empty lines, and line length metrics. If you need to make adjustments, you can edit the text directly in the box, and the stats will update dynamically.</li>
        <li><strong>Copy or Download:</strong> Once you are done, you can use the convenient "Copy" or "Download" buttons to save the text back to your device.</li>
      </ol>

      <h2>Best Practices for Analyzing Text Metrics</h2>
      <p>
        To make the most out of this tool, consider these best practices depending on your specific use case:
      </p>
      <ul>
        <li><strong>For Programmers:</strong> Use the "Longest Line" metric to enforce style guides. If your longest line exceeds 100 characters, it might be time to refactor or enable word wrap in your editor.</li>
        <li><strong>For Data Scientists:</strong> Always compare the "Total Lines" with the "Non-Empty Lines." If there is a discrepancy in a CSV file, it means you have trailing blank lines that could cause null-entry errors during database ingestion.</li>
        <li><strong>For Writers:</strong> Monitor your empty lines. Consistent spacing is key to professional formatting. If the number of empty lines seems disproportionately high, you may have double-spaced paragraphs inadvertently.</li>
      </ul>

      <h2>Common Mistakes to Avoid</h2>
      <p>
        Even with a simple tool, users can sometimes misinterpret the data. Here are a few common pitfalls:
      </p>
      <ul>
        <li><strong>Confusing Blank Lines with Spaces:</strong> A line containing a single space or tab is considered "Empty" by our advanced algorithm because it doesn't contain visible text, but some basic text editors might count it as a non-empty line. Keep this in mind when comparing metrics across different software.</li>
        <li><strong>Ignoring Word Wrap:</strong> The tool counts hard line breaks (Enter/Return key presses). If you paste text that visually wraps in your notepad but doesn't have hard breaks, the tool will count it as a single, very long line.</li>
        <li><strong>Pasting Binary Files:</strong> This tool is designed for plain text. Pasting binary data (like raw image data or compiled executables) will result in inaccurate counts and may freeze your browser due to extreme line lengths.</li>
      </ul>
    </>
  );

  const faqs = [
    {
      question: "Is the Line Counter tool free?",
      answer: "Yes, our Line Counter is completely free to use with no hidden costs, ads, or limitations on how many times you can use it."
    },
    {
      question: "Does this tool work offline?",
      answer: "Because it relies on client-side JavaScript, once the page is loaded, it can function even if you momentarily lose internet connection, provided you don't refresh the page."
    },
    {
      question: "Are my files uploaded to your servers?",
      answer: "No. All text processing occurs locally within your own browser. We do not transmit or store any of the text you paste into the tool."
    },
    {
      question: "How does it determine an 'Empty Line'?",
      answer: "An empty line is defined as a line that contains absolutely no characters, or only whitespace characters (like spaces and tabs). If a line is just a space, it counts as empty."
    },
    {
      question: "Is there a limit to how much text I can paste?",
      answer: "The only limit is your device's memory and browser capacity. However, pasting extremely large files (e.g., hundreds of megabytes) might cause your browser to slow down."
    },
    {
      question: "What does 'Longest Line' measure?",
      answer: "It measures the total number of characters (including spaces) in the single longest unbroken line of text before a hard line break occurs."
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Line Counter Tool",
              url: `https://tasklora.com${path}`,
              description,
              applicationCategory: "UtilityApplication",
              operatingSystem: "Any",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://tasklora.com"
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Text Tools",
                  item: "https://tasklora.com/text"
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Line Counter",
                  item: `https://tasklora.com${path}`
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map(faq => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer
                }
              }))
            }
          ])
        }}
      />
      <ToolLayout
        title={title}
        description={description}
        path={path}
        content={content}
        faqs={faqs}
      >
        <LineCounterClient />
      </ToolLayout>
    </>
  );
}
