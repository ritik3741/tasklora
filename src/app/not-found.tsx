import Link from 'next/link';
import { Search } from 'lucide-react';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: "Page Not Found",
  description: "The page you are looking for could not be found.",
  path: "/404",
});

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-8 relative">
        <Search className="w-12 h-12" />
        <div className="absolute -bottom-2 -right-2 bg-background border border-border w-10 h-10 rounded-full flex items-center justify-center text-red-500 font-bold text-xl">
          ?
        </div>
      </div>
      
      <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4 text-text">
        404
      </h1>
      
      <h2 className="text-2xl font-semibold mb-4">
        Page Not Found
      </h2>
      
      <p className="text-text/60 max-w-md mx-auto mb-8 text-lg">
        We searched high and low, but couldn't find the page you're looking for. It might have been moved or deleted.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Link 
          href="/"
          className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
        >
          Return Home
        </Link>
        <Link 
          href="/seo"
          className="px-6 py-3 rounded-xl bg-surface border border-border font-medium hover:border-primary/50 transition-colors"
        >
          Explore SEO Tools
        </Link>
      </div>
    </div>
  );
}
