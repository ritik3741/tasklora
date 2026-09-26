import React from "react";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { generateSEO } from "@/lib/seo";
import Client from "./Client";

export const metadata = generateSEO({
  title: "Add Page Numbers to PDF Free",
  description: "Easily add page numbers to your PDF documents online for free. Choose the position, starting number, and instantly download the updated PDF securely in your browser.",
  path: "/pdf/add-page-numbers"
});

const faqs = [
  {
    question: "How do I add page numbers to a PDF?",
    answer: "Simply upload your PDF file, choose the desired position for the page numbers (e.g., bottom-center, top-right), set the starting number, and click 'Add Page Numbers'. The tool will process your file instantly."
  },
  {
    question: "Is it secure to use this tool?",
    answer: "Yes, completely! This tool processes your PDF entirely within your browser. We never upload your files to any external server, ensuring maximum privacy and security for your sensitive documents."
  },
  {
    question: "Can I choose where the page numbers appear?",
    answer: "Absolutely. You can select from various positions, including top-left, top-center, top-right, bottom-left, bottom-center, and bottom-right to suit your document's formatting."
  },
  {
    question: "Does it cost anything to use?",
    answer: "No, our Add Page Numbers to PDF tool is 100% free to use. There are no hidden fees, subscriptions, or watermarks added to your downloaded files."
  },
  {
    question: "Can I set a custom starting number?",
    answer: "Yes! If you are appending a PDF to an existing document, you can set the starting page number to any value you need (e.g., start numbering at 15)."
  },
  {
    question: "Do I need to install any software?",
    answer: "No installation is required. This is a web-based utility that works directly in your modern web browser on any operating system (Windows, Mac, Linux) and mobile devices."
  }
];

export default function AddPageNumbersPage() {
  const content = (
    <>
      <h2>What is the Add Page Numbers to PDF Tool?</h2>
      <p>
        The <strong>Add Page Numbers to PDF</strong> tool by Tasklora is a fast, reliable, and completely free online utility that lets you insert page numbers into your PDF documents. Whether you have a lengthy report, an academic paper, or a legal document, having clear page numbers is essential for readability and referencing. With our tool, you can easily customize the placement and starting number of your pages without needing expensive desktop software like Adobe Acrobat.
      </p>

      <h2>Why Use Our Page Numbering Tool?</h2>
      <p>
        Adding page numbers manually to a PDF can be a frustrating and time-consuming process if you don't have the right tools. Our utility simplifies this task by providing a seamless, browser-based experience.
      </p>
      <ul>
        <li><strong>Completely Free:</strong> We do not charge any fees or add annoying watermarks to your processed PDFs.</li>
        <li><strong>Instant Processing:</strong> Because the tool works locally in your browser, the processing happens almost instantly, without the wait times associated with uploading and downloading large files to a remote server.</li>
        <li><strong>User-Friendly Interface:</strong> You don't need technical skills. A simple upload, a few clicks, and you're ready to download your updated file.</li>
      </ul>

      <h2>Key Features</h2>
      <p>Our tool is packed with features designed to give you flexibility and control over how your page numbers appear:</p>
      <ul>
        <li><strong>Customizable Positions:</strong> Choose exactly where you want the numbers to appear. Options include Top Left, Top Center, Top Right, Bottom Left, Bottom Center, and Bottom Right.</li>
        <li><strong>Custom Starting Number:</strong> If you're merging documents or continuing a chapter, you can start the page numbering at any specific number (e.g., starting at page 10).</li>
        <li><strong>Universal Compatibility:</strong> Works flawlessly on any device with a modern web browser, including Chrome, Safari, Firefox, and Edge.</li>
      </ul>

      <h2>Step-by-step Guide: How to Add Page Numbers</h2>
      <p>Follow these simple steps to number your PDF pages:</p>
      <ol>
        <li><strong>Upload your PDF:</strong> Click the upload area or drag and drop your PDF file into the designated box.</li>
        <li><strong>Select Position:</strong> Use the dropdown menu to choose where the page number should be placed on each page.</li>
        <li><strong>Set Start Number:</strong> Enter the number you want the first page to display (default is 1).</li>
        <li><strong>Apply and Download:</strong> Click the "Add Page Numbers" button. The tool will process your document in seconds and prompt you to download the updated PDF.</li>
      </ol>

      <h2>Privacy & Security</h2>
      <p>
        We understand that your documents may contain sensitive, personal, or confidential business information. That is why our <strong>Add Page Numbers</strong> tool is built with a privacy-first approach. All file processing is performed locally on your device using Client-Side JavaScript (specifically the <code>pdf-lib</code> library). Your files never leave your computer, they are not uploaded to our servers, and they are not stored in any database. You have complete control and peace of mind.
      </p>

      <h2>Best Practices for PDF Formatting</h2>
      <p>
        When adding page numbers to professional documents, it's generally best practice to place them in the bottom center or bottom right corner. Ensure that your document doesn't have important content or images occupying those specific margin areas to prevent the numbers from overlapping with your text. If you're printing double-sided (duplex), you might want to consider the binding margins, although centering the page numbers is usually the safest and most universally accepted approach.
      </p>
    </>
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Add Page Numbers to PDF",
    "description": "Easily add page numbers to your PDF documents online for free securely in your browser.",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
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
        "name": "PDF Tools",
        "item": "https://tasklora.com/pdf"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Add Page Numbers",
        "item": "https://tasklora.com/pdf/add-page-numbers"
      }
    ]
  };

  const faqLd = {
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
    <ToolLayout
      title="Add Page Numbers to PDF"
      description="Add page numbers to your PDF files securely in your browser. Choose position and starting number for free."
      path="/pdf/add-page-numbers"
      content={content}
      faqs={faqs}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      
      <Client />
    </ToolLayout>
  );
}
