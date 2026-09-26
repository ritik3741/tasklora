import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Privacy Policy",
  description: "Privacy Policy for Tasklora. Learn how we protect your data.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="space-y-8 text-text/80 leading-relaxed">
        <p>Last updated: January 1, 2026</p>

        <section>
          <h2 className="text-2xl font-semibold text-text mb-4">1. Data Processing</h2>
          <p>
            At Tasklora, we prioritize your privacy. The vast majority of our tools operate entirely on the client side (in your browser). This means that when you format JSON, generate UUIDs, or calculate data, the processing happens on your device. We do not upload, store, or transmit your input data to our servers.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-text mb-4">2. Information Collection</h2>
          <p>
            We do not require you to create an account or provide personal information to use our tools. We may collect basic, anonymous analytics data (such as page views and browser type) to improve our services and user experience.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-text mb-4">3. Cookies and Advertising</h2>
          <p>
            We use third-party advertising partners (such as Google AdSense) to serve ads on our website. These partners may use cookies to serve personalized ads based on your visit to Tasklora and other websites on the internet. You can opt out of personalized advertising by visiting the ad settings provided by these networks.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-text mb-4">4. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-text mb-4">5. Changes to This Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
          </p>
        </section>
      </div>
    </div>
  );
}
