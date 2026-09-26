import { generateSEO } from '@/lib/seo';
import { ToolLayout } from '@/components/tools/ToolLayout';
import ClientSplitPDF from './Client';

const toolName = 'Split PDF';
const toolDescription = 'Split PDF files into separate pages or extract specific page ranges securely and instantly in your browser. No files are uploaded to our servers.';
const path = '/pdf/split-pdf';

export const metadata = generateSEO({
  title: `${toolName} - Free Online PDF Splitter`,
  description: toolDescription,
  path: path,
});

const content = `
## What is the Split PDF Tool?
The Split PDF tool is a fast, secure, and user-friendly web application designed to help you separate pages of a PDF document or extract specific page ranges into new PDF files. Whether you have a massive report and only need a few pages, or you want to break down a large document into individual pages, this tool provides a seamless experience directly within your browser.

## Why Use Our PDF Splitter?
In today's digital age, dealing with large, cumbersome PDF files is a common challenge. Sending a 100-page document when only 5 pages are relevant is inefficient and can cause confusion. Our Split PDF tool offers several compelling reasons to make it your go-to solution:

- **Browser-Based Processing:** All splitting operations are performed locally on your device. This means your files never leave your computer, ensuring maximum privacy and security.
- **Lightning Fast:** Because there are no server uploads or downloads, the process is nearly instantaneous, regardless of your internet connection speed.
- **Custom Ranges:** You have complete control over how you want to split your document. Extract a single page, multiple specific pages, or continuous ranges.
- **Cost-Free:** Access premium PDF manipulation features without any subscriptions or hidden fees.
- **No Installation Required:** Avoid cluttering your device with bulky software. Our tool is accessible from any modern web browser on virtually any operating system.

## Key Features
- **Total Page Visibility:** Instantly view the total number of pages in your uploaded PDF, making it easy to determine your desired extraction ranges.
- **Flexible Range Selection:** Use intuitive syntax (e.g., "1-5", "3,7,9", or combinations) to specify exactly what you need.
- **Instant Download:** Once processed, your new PDF file is immediately ready for download to your device.
- **Secure File Handling:** We utilize modern web technologies to ensure your data remains strictly on your machine.
- **Clean User Interface:** Enjoy a distraction-free, intuitive design that guides you through the process step-by-step.

## Step-by-Step Guide: How to Split a PDF
Using our tool is incredibly straightforward. Follow these simple steps to split your PDF:

1. **Upload Your PDF:** Click the upload area or drag and drop your target PDF file into the designated zone.
2. **Review Document Details:** Once loaded, the tool will display the file name and the total number of pages in the document.
3. **Specify Your Range:** In the provided input field, enter the pages you wish to extract. For example, entering '1-3' will create a new PDF containing the first three pages.
4. **Initiate Split:** Click the 'Split PDF' button. Our client-side engine will quickly process your request.
5. **Download the Result:** The newly created PDF file will automatically prompt for download. Save it to your preferred location.

## Privacy & Security Considerations
When dealing with sensitive documents such as financial statements, legal contracts, or personal records, security is paramount. Traditional online PDF tools often require you to upload your files to external servers, posing a significant risk of data breaches or unauthorized access.

Our Split PDF tool completely eliminates this risk by leveraging advanced client-side processing using the \`pdf-lib\` library. Your document is read, processed, and the new file is generated entirely within your browser's memory. We do not store, track, or have access to any content within your PDFs. Once you close the tab, the data vanishes.

## Best Practices for Splitting PDFs
- **Verify Page Numbers:** Always double-check the logical page numbers against the physical page numbers in the document. Sometimes, a PDF might have introductory pages (i, ii, iii) that affect the numerical sequence.
- **Keep Originals Safe:** The tool creates a new file rather than modifying the original. However, it's always good practice to keep backups of your original, unedited documents.
- **Use Clear Naming Conventions:** When downloading the split file, rename it immediately to reflect its contents (e.g., "Annual_Report_Q1_Summary.pdf") to maintain organization.
- **Batch Processing Limits:** While our tool is powerful, extremely large PDFs (e.g., thousands of pages) might require significant memory on your device. Ensure your browser is up-to-date and your system has sufficient RAM for optimal performance.
`;

const faqs = [
  {
    question: "Is it safe to split sensitive PDFs using this tool?",
    answer: "Absolutely. Our tool processes the PDF entirely within your web browser. Your files are never uploaded to any external server, ensuring 100% privacy and security for your sensitive documents."
  },
  {
    question: "Do I need to install any software to use this splitter?",
    answer: "No, there is no software installation required. Our tool is a web-based application that runs directly in your browser, making it accessible from any device with an internet connection."
  },
  {
    question: "How do I extract a specific range of pages?",
    answer: "After uploading your PDF, simply enter the desired page range in the input field. For example, typing '2-5' will extract pages 2, 3, 4, and 5 into a new PDF document."
  },
  {
    question: "Can I extract multiple non-consecutive pages?",
    answer: "Currently, you can specify a continuous range (like 1-5). For complex non-consecutive extractions, you may need to perform multiple splits or use an advanced desktop editor, although we are continually adding new features."
  },
  {
    question: "Is there a file size limit for splitting?",
    answer: "Since the processing happens on your device, the file size limit is primarily determined by your browser's available memory. Most modern devices can easily handle PDFs up to 50MB or more."
  },
  {
    question: "Is this tool completely free to use?",
    answer: "Yes, our Split PDF tool is completely free. There are no hidden charges, subscription fees, or watermarks added to your resulting documents."
  }
];

export default function SplitPDFPage() {
  const schemaWebApplication = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": toolName,
    "url": `https://tasklora.com${path}`,
    "description": toolDescription,
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript",
  };

  const schemaBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://tasklora.com"
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
        "name": toolName,
        "item": `https://tasklora.com${path}`
      }
    ]
  };

  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebApplication) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
      />
      <ToolLayout
        title={toolName}
        description={toolDescription}
        path={path}
        content={content}
        faqs={faqs}
      >
        <ClientSplitPDF />
      </ToolLayout>
    </>
  );
}
