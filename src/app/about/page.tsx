import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "About Us",
  description: "Learn more about Tasklora, our mission, and the team behind the 100+ free online developer tools.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">About Tasklora</h1>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p className="text-xl text-text/80 mb-8 leading-relaxed">
          Tasklora is a premium collection of fast, privacy-friendly online utilities for developers, students, marketers, and businesses.
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-text/70 leading-relaxed mb-4">
              We believe that powerful tools should be accessible to everyone, anywhere, at any time. Our mission is to provide high-quality, completely free utilities that run quickly and securely in your browser.
            </p>
            <p className="text-text/70 leading-relaxed">
              Whether you are a developer formatting JSON, a student counting words for an essay, or a business owner calculating GST, Tasklora is built to make your everyday tasks easier.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-4">Privacy First</h2>
            <p className="text-text/70 leading-relaxed mb-4">
              We respect your privacy. Unlike many other online tools, Tasklora is designed to process your data locally in your browser whenever possible. This means your sensitive code, texts, and files never leave your device.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-4">Why Tasklora?</h2>
            <ul className="list-disc pl-6 space-y-3 text-text/70">
              <li><strong>Lightning Fast:</strong> Client-side processing ensures instant results.</li>
              <li><strong>Completely Free:</strong> No paywalls, no subscriptions, no registration required.</li>
              <li><strong>Clean Interface:</strong> A minimal, distraction-free design focused on getting things done.</li>
              <li><strong>Always Growing:</strong> We are constantly adding new tools based on community feedback.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
