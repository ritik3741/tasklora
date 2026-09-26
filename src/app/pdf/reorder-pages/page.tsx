import { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import { ToolLayout } from "@/components/tools/ToolLayout";
import ReorderPagesClient from "./Client";

const title = "Reorder PDF Pages";
const description = "Easily rearrange, move, or delete pages within your PDF document. A free, secure tool that processes files locally in your browser.";
const path = "/pdf/reorder-pages";

export const metadata: Metadata = generateSEO({
  title,
  description,
  path,
});

const faqs = [
  {
    question: "How do I reorder pages in a PDF?",
    answer: "Upload your PDF file, and you will see a visual representation of all the pages. Use the arrows to move pages left or right, or click the delete button to remove a page entirely. Once you are satisfied with the new order, click 'Save PDF' to download the updated document."
  },
  {
    question: "Can I delete pages using this tool?",
    answer: "Yes, our tool allows you to both reorder and delete pages. Each page preview has a trash icon that you can click to remove the page from the final document."
  },
  {
    question: "Is it safe to upload my confidential documents?",
    answer: "Absolutely. We prioritize your privacy. All processing is performed locally in your web browser. Your PDF files are never uploaded to our servers, meaning no one else can access your data."
  },
  {
    question: "Will the formatting of my PDF change after reordering?",
    answer: "No, the tool simply changes the sequence of the pages. The content, formatting, images, and text on each page will remain completely unchanged in the newly generated PDF."
  },
  {
    question: "Is there a limit to the size of the PDF I can reorder?",
    answer: "Since the processing happens in your browser, the limit depends primarily on your device&apos;s memory (RAM). Most modern devices can easily handle PDFs with hundreds of pages and sizes up to 100MB."
  },
  {
    question: "Does this tool work on mobile devices?",
    answer: "Yes! Our Reorder PDF Pages tool is fully responsive and works well on smartphones and tablets. You can easily manage your PDF pages on the go without installing any apps."
  }
];

export default function ReorderPagesPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": title,
    "description": description,
    "url": `https://tasklora.com${path}`,
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://tasklora.com" },
      { "@type": "ListItem", "position": 2, "name": "PDF Tools", "item": "https://tasklora.com/pdf" },
      { "@type": "ListItem", "position": 3, "name": title, "item": `https://tasklora.com${path}` }
    ]
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

  const content = (
    <>
      <h2>What is the Reorder PDF Pages Tool?</h2>
      <p>
        The <strong>Reorder PDF Pages</strong> tool is an intuitive, web-based utility that lets you take full control of your document&apos;s structure. Whether a scanned document was assembled in the wrong order or you simply want to move an appendix to the front, this tool provides a visual, easy-to-use interface for rearranging your PDF pages exactly how you need them.
      </p>
      <p>
        Designed with simplicity and speed in mind, our tool eliminates the need for expensive premium software. It leverages the power of modern web browsers to process your documents instantly and securely, right on your own device.
      </p>

      <h2>Why Reorder Your PDF Pages?</h2>
      <p>
        Documents aren&apos;t always perfect on the first try. Often, you might receive a file that needs restructuring before you can present it to a client or submit it for an assignment. 
      </p>
      <ul>
        <li><strong>Fix Scanning Errors:</strong> Quickly correct pages that were fed into the scanner in the wrong order or upside down.</li>
        <li><strong>Improve Flow:</strong> Rearrange chapters, sections, or presentation slides to create a more logical narrative.</li>
        <li><strong>Customize Documents:</strong> Tailor a large report by moving the most relevant sections to the beginning for specific audiences.</li>
        <li><strong>Remove Clutter:</strong> Easily delete blank pages, outdated information, or irrelevant sections while rearranging the rest.</li>
      </ul>

      <h2>Key Features</h2>
      <p>
        Our tool is built to offer a seamless document management experience with powerful features:
      </p>
      <ul>
        <li><strong>Visual Page Management:</strong> See all your pages at a glance in a grid layout, making it easy to identify and move them.</li>
        <li><strong>Reorder and Delete:</strong> Not only can you change the sequence, but you can also completely remove unwanted pages in the same workflow.</li>
        <li><strong>100% Secure &amp; Private:</strong> All file processing is executed locally in your browser. Your files never leave your computer.</li>
        <li><strong>Lightning Fast:</strong> No waiting for uploads or downloads. Changes are applied instantly.</li>
        <li><strong>Maintains Quality:</strong> Your final document will look exactly like the original, with no loss in quality or resolution.</li>
      </ul>

      <h2>Step-by-Step Guide: How to Reorder Pages</h2>
      <p>
        Organizing your PDF is as easy as 1-2-3. Follow this quick guide to get started:
      </p>
      <ol>
        <li><strong>Upload your document:</strong> Click the upload area to select a PDF from your device, or drag and drop it directly onto the page.</li>
        <li><strong>Rearrange the pages:</strong> Once loaded, you will see a grid of all the pages in your document. Use the arrow buttons on each page block to move it left (earlier in the document) or right (later in the document).</li>
        <li><strong>Remove unwanted pages:</strong> If you spot a page you don&apos;t need, simply click the trash icon on that page to delete it.</li>
        <li><strong>Save your changes:</strong> When you are happy with the new order, click the &quot;Save PDF&quot; button. A new, perfectly organized PDF will be generated and downloaded to your device immediately.</li>
      </ol>

      <h2>Privacy &amp; Security You Can Trust</h2>
      <p>
        When dealing with legal contracts, financial reports, or personal records, security is paramount. Many online PDF tools upload your files to remote servers for processing, putting your sensitive data at risk. 
      </p>
      <p>
        Our Reorder PDF Pages tool is different. It uses advanced client-side processing technology. This means the entire operation happens within the memory of your own web browser. We never upload, store, or have any access to your files. Once you close the tab, all trace of the processing is gone.
      </p>

      <h2>Best Practices for Document Organization</h2>
      <p>
        To ensure your final document is professional and easy to read, consider these tips:
      </p>
      <ul>
        <li><strong>Review the flow:</strong> After reordering, mentally walk through the document to ensure the logical progression makes sense.</li>
        <li><strong>Check page numbers:</strong> Remember that if your original PDF had printed page numbers on the pages themselves, those printed numbers won&apos;t change, even though their physical order in the file has. You may need to add a disclaimer if this causes confusion.</li>
        <li><strong>Save as a new file:</strong> Our tool automatically downloads the result as a new file, ensuring your original document is preserved as a backup.</li>
      </ul>
    </>
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <ToolLayout 
        title={title} 
        description={description} 
        path={path} 
        content={content} 
        faqs={faqs}
      >
        <ReorderPagesClient />
      </ToolLayout>
    </>
  );
}
