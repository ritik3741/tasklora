import React from "react";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { generateSEO } from "@/lib/seo";
import Client from "./Client";

export const metadata = generateSEO({
  title: "PDF Metadata Editor - View and Edit PDF Properties",
  description: "Free online tool to edit PDF metadata. Easily change PDF Title, Author, Subject, Keywords, and Creator properties securely in your browser.",
  path: "/pdf/pdf-metadata-editor"
});

const faqs = [
  {
    question: "What is PDF metadata?",
    answer: "PDF metadata includes hidden document properties such as the Title, Author, Subject, Keywords, and Creator. These details help operating systems, search engines, and document management systems identify, index, and organize your files properly."
  },
  {
    question: "Is this metadata editor free?",
    answer: "Yes, our PDF Metadata Editor is completely free to use. There are no restrictions, no software to download, and no hidden charges."
  },
  {
    question: "Are my PDF files uploaded to your servers?",
    answer: "No. All processing is done securely within your web browser. Your files remain strictly on your device, ensuring complete privacy and security for your sensitive documents."
  },
  {
    question: "Can I remove metadata entirely?",
    answer: "Yes, you can simply clear the text fields for any property you wish to remove (like Author or Title) and then save the document. The resulting PDF will have those properties stripped out."
  },
  {
    question: "Will editing metadata affect the PDF content?",
    answer: "No, editing the metadata only changes the hidden document properties. The actual visual content, layout, text, and images within the PDF will remain completely unchanged."
  },
  {
    question: "Which metadata fields can I edit?",
    answer: "Our tool allows you to modify the most common and important PDF properties: Title, Author, Subject, Keywords, and Creator."
  }
];

export default function PDFMetadataEditorPage() {
  const content = (
    <>
      <h2>What is the PDF Metadata Editor?</h2>
      <p>
        The <strong>PDF Metadata Editor</strong> is a powerful, free online utility designed to help you view, modify, or remove the hidden properties embedded within your PDF documents. Every PDF file contains metadata—information about the file itself—such as the document's Title, the Author's name, Subject matter, Keywords, and the software Creator. With our tool, you can effortlessly manage these properties directly from your web browser, ensuring your files are accurately labeled and optimized for search and archiving.
      </p>

      <h2>Why Edit PDF Metadata?</h2>
      <p>
        Metadata plays a crucial role in how files are organized and discovered. Here are a few reasons why you might need to use a PDF metadata editor:
      </p>
      <ul>
        <li><strong>Professional Presentation:</strong> When sharing documents with clients or publishing them online, having clean and accurate metadata (like a correct Title and Author) looks much more professional than leaving default or blank fields.</li>
        <li><strong>Privacy Protection:</strong> Sometimes PDF files retain personal or sensitive information in the Author or Creator fields. Editing or removing this metadata helps protect your identity and privacy before sharing a file publicly.</li>
        <li><strong>Search Engine Optimization (SEO):</strong> If you host PDFs on a website, search engines like Google read the PDF metadata. Optimizing the Title and Keywords can significantly improve the document's search visibility.</li>
        <li><strong>Document Organization:</strong> Adding Subjects and Keywords helps document management systems (DMS) correctly index and sort your files, making them easier to find later.</li>
      </ul>

      <h2>Features of Our Tool</h2>
      <p>
        Our PDF Metadata Editor provides a straightforward, user-friendly interface with several key features:
      </p>
      <ul>
        <li><strong>View Existing Properties:</strong> As soon as you upload your PDF, the tool reads and displays the current metadata, so you know exactly what is embedded in the file.</li>
        <li><strong>Edit Core Fields:</strong> Easily update the Title, Author, Subject, Keywords, and Creator fields.</li>
        <li><strong>100% Browser-Based Processing:</strong> We prioritize your privacy. The editing process occurs entirely on your device using Client-Side technology. Your files are never uploaded to a remote server.</li>
        <li><strong>Instant Download:</strong> Once you've made your changes, saving and downloading the updated PDF is instantaneous.</li>
      </ul>

      <h2>Step-by-step Guide: How to Edit PDF Metadata</h2>
      <ol>
        <li><strong>Upload File:</strong> Click on the upload zone or drag and drop the PDF you wish to edit.</li>
        <li><strong>Review Current Metadata:</strong> The tool will automatically parse the file and fill the input fields with any existing metadata properties.</li>
        <li><strong>Modify Properties:</strong> Type your new information into the Title, Author, Subject, Keywords, or Creator fields. If you wish to delete a property, simply leave the field blank.</li>
        <li><strong>Save and Download:</strong> Click the "Save Metadata & Download" button. Your updated document will be processed locally and downloaded to your computer immediately.</li>
      </ol>

      <h2>Privacy & Security Assured</h2>
      <p>
        We know that documents often contain confidential information. Our PDF Metadata Editor is built utilizing modern web technologies that allow all file processing to occur in the client (your browser). We do not store, view, or transfer your files to any external server. You can edit the metadata of highly sensitive documents with the assurance that your data remains strictly on your device.
      </p>

      <h2>Best Practices for PDF Metadata</h2>
      <p>
        When preparing a PDF for public release, always verify the metadata. Keep titles descriptive but concise. Use relevant keywords separated by commas to aid in searchability. Finally, ensure the Author field reflects the organization or the intended publisher rather than an individual's personal computer account name, which is a common error when exporting documents from word processors.
      </p>
    </>
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "PDF Metadata Editor",
    "description": "View and edit PDF metadata properties securely in your browser.",
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
        "name": "PDF Metadata Editor",
        "item": "https://tasklora.com/pdf/pdf-metadata-editor"
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
      title="PDF Metadata Editor"
      description="View and edit PDF Title, Author, Subject, and Keywords. Fast, free, and completely secure in your browser."
      path="/pdf/pdf-metadata-editor"
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
