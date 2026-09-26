import { generateSEO } from '@/lib/seo';
import { ToolLayout } from '@/components/tools/ToolLayout';
import WordCounterClient from './WordCounterClient';

export const metadata = generateSEO({
  title: "Word Counter - Free Online Word & Character Counting Tool",
  description: "Count words, characters, sentences, paragraphs, and reading time instantly. A free online word counter tool for writers, students, and professionals.",
  path: "/text/word-counter"
});

const faqs = [
  {
    question: "How does the word counter work?",
    answer: "Our word counter works in real-time as you type or paste text into the editor. It instantly analyzes your text to calculate the number of words, characters (with and without spaces), sentences, paragraphs, and reading time. It also generates a keyword density report based on the frequency of words used."
  },
  {
    question: "Is this word counter free to use?",
    answer: "Yes, our word counter is completely free to use. There are no limits on the amount of text you can analyze, no hidden fees, and no registration required. You can use it as often as you like for all your writing needs."
  },
  {
    question: "Does the word counter store my text?",
    answer: "No, your privacy is our top priority. The word counter operates entirely in your browser using client-side processing. Your text is never sent to our servers, ensuring your documents remain completely private and secure."
  },
  {
    question: "How is reading time calculated?",
    answer: "Reading time is calculated based on an average reading speed of 250 words per minute, which is the standard reading speed for adult readers. The tool divides the total word count by 250 and rounds up to the nearest minute to provide an accurate estimate."
  },
  {
    question: "What is keyword density?",
    answer: "Keyword density refers to the percentage of times a specific word appears in your text compared to the total number of words. Our tool extracts the most frequently used words and displays their count and percentage, helping you optimize your content for SEO or identify repetitive language."
  },
  {
    question: "Can I copy or download my text?",
    answer: "Yes, the tool includes convenient buttons to instantly copy your text to the clipboard or download it as a plain text file (.txt). This makes it easy to save your work or transfer it to another application once you've finished editing and analyzing."
  }
];

const content = (
  <div className="space-y-6">
    <section>
      <h2>Comprehensive Word and Character Counting Tool</h2>
      <p>
        In today's fast-paced digital landscape, keeping track of word counts and character limits is essential for a wide range of professionals, from freelance writers and content creators to students and social media managers. Whether you are drafting a comprehensive essay, preparing an engaging blog post, formulating a concise tweet, or optimizing an article for search engines, adhering to specific length constraints is often a critical requirement. Our advanced, entirely free online Word Counter tool is meticulously designed to provide you with instantaneous, highly accurate statistics about your text, ensuring that you meet all your writing goals with ease and precision.
      </p>
      <p>
        Beyond a simple word count, our tool offers an in-depth textual analysis. It calculates the total number of characters (both with and without spaces), the number of sentences, and the total paragraphs. It even estimates the reading time, a crucial metric for online publishers aiming to keep their audience engaged. Furthermore, the built-in keyword density checker empowers SEO specialists to analyze their content's focus and ensure optimal keyword distribution without falling into the trap of keyword stuffing.
      </p>
    </section>

    <section>
      <h2>Why Use Our Word Counter?</h2>
      <p>
        There are numerous compelling reasons to integrate our Word Counter into your daily writing workflow. First and foremost is the real-time feedback it provides. As you type or paste your content into the editor, the statistics update instantaneously, allowing you to monitor your progress seamlessly without having to click any buttons or refresh the page. This immediate responsiveness is crucial for maintaining your writing momentum and focus.
      </p>
      <p>
        Secondly, our tool is incredibly versatile and user-friendly. It requires no installation, no registration, and no subscription fees. It is accessible directly from your web browser, making it compatible with any device, be it a desktop computer, a tablet, or a smartphone. Whether you are a student working on a strict assignment limit, a journalist adhering to a publisher's word count guidelines, or an SEO professional optimizing meta descriptions, our tool provides the precise data you need.
      </p>
      <p>
        Most importantly, we prioritize your privacy and data security. Our Word Counter operates entirely on the client side, meaning that your text is processed directly within your browser. We do not store, save, or transmit your documents to any external servers. Your confidential business proposals, private journal entries, and unpublished manuscripts remain completely secure and strictly under your control.
      </p>
    </section>

    <section>
      <h2>Key Features</h2>
      <ul>
        <li><strong>Real-Time Word and Character Counts:</strong> Get instant metrics on words and characters (both including and excluding spaces) as you type.</li>
        <li><strong>Sentence and Paragraph Tracking:</strong> Understand the structure of your writing by monitoring the number of sentences and paragraphs.</li>
        <li><strong>Estimated Reading Time:</strong> Gauge how long it will take an average reader to consume your content, based on an industry-standard 250 words per minute.</li>
        <li><strong>Keyword Density Analysis:</strong> Automatically identify the most frequently used words in your text, complete with their frequency and percentage, to aid in SEO optimization and improve vocabulary variety.</li>
        <li><strong>One-Click Copy and Download:</strong> Easily copy your finalized text to the clipboard or download it as a standard .txt file for offline storage or sharing.</li>
        <li><strong>100% Privacy-Focused:</strong> All text analysis happens locally on your device, ensuring maximum confidentiality and security for your work.</li>
      </ul>
    </section>

    <section>
      <h2>Step-by-Step Guide on How to Use the Tool</h2>
      <p>
        Using our Word Counter is incredibly intuitive and requires no technical expertise. Here is a simple step-by-step guide to get the most out of our tool:
      </p>
      <ol>
        <li><strong>Input Your Text:</strong> Begin by either typing your content directly into the provided text editor or pasting pre-written text from your clipboard (using Ctrl+V or Cmd+V).</li>
        <li><strong>View Instant Statistics:</strong> As soon as your text is in the editor, look at the statistics panel above. You will immediately see the updated counts for words, characters, sentences, paragraphs, and the estimated reading time.</li>
        <li><strong>Analyze Keyword Density:</strong> Scroll below the text editor to view the dynamically generated keyword density table. This will show you the top words you have used, which is particularly useful for SEO or spotting repetitive phrasing.</li>
        <li><strong>Edit and Refine:</strong> Use the real-time feedback to adjust your text. If you need to cut down your word count or expand your paragraphs, you can edit directly in the tool and watch the numbers adjust instantly.</li>
        <li><strong>Export Your Work:</strong> Once you are satisfied with your text, use the "Copy" button to save it to your clipboard for easy pasting into your CMS or word processor, or click the "Download" button to save it as a local text file.</li>
        <li><strong>Clear the Editor:</strong> When you are ready to start a new document, simply click the "Clear" button to empty the editor and reset all statistics.</li>
      </ol>
    </section>

    <section>
      <h2>Best Practices for Writing with Word Limits</h2>
      <p>
        Writing to a specific length constraint can be challenging, but mastering this skill is essential for effective communication. Here are some best practices to help you write more concisely and powerfully.
      </p>
      <p>
        When you need to reduce your word count, focus on eliminating "filler" words and redundant phrases. Words like "very," "really," "just," and "actually" rarely add substance to a sentence and can usually be removed. Additionally, try substituting weak verbs and adverbs with strong, precise action verbs. For example, instead of writing "ran quickly," write "sprinted." This not only reduces your word count but also makes your writing more vivid and impactful.
      </p>
      <p>
        Conversely, if you need to increase your word count, avoid simply adding fluff. Instead, expand on your ideas by providing more detailed examples, case studies, or deeper analysis. Ensure that every new sentence adds value and clarity to your overall argument, rather than just taking up space.
      </p>
    </section>

    <section>
      <h2>Common Mistakes to Avoid</h2>
      <p>
        While using a word counter is straightforward, there are a few common pitfalls to keep in mind. One frequent mistake is obsessing over the exact word count at the expense of content quality. Remember that the primary goal of your writing should be to convey your message clearly and engagingly, not just to hit a numerical target.
      </p>
      <p>
        Another mistake, particularly for SEO content creators, is keyword stuffing. While our keyword density tool is excellent for ensuring you have included your target phrases, overusing them can harm your search engine rankings and make your text unnatural to read. Aim for a natural, conversational flow, using keywords contextually rather than forcing them into every paragraph. Let the word counter guide your editing process, but always prioritize readability and value for your audience.
      </p>
    </section>
  </div>
);

export default function WordCounterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "name": "Word Counter",
        "url": "https://tasklora.com/text/word-counter",
        "applicationCategory": "UtilityApplication",
        "operatingSystem": "All",
        "offers": {
          "@type": "Offer",
          "price": "0.00",
          "priceCurrency": "USD"
        }
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
            "name": "Text Tools",
            "item": "https://tasklora.com/text"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Word Counter",
            "item": "https://tasklora.com/text/word-counter"
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
        title="Word Counter"
        description="Instantly count words, characters, sentences, and paragraphs in your text with real-time statistics and keyword density analysis."
        path="/text/word-counter"
        faqs={faqs}
        content={content}
      >
        <WordCounterClient />
      </ToolLayout>
    </>
  );
}
