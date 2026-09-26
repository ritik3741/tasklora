import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  count: number;
  href: string;
}

export function CategoryCard({ title, description, icon: Icon, count, href }: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col p-6 rounded-2xl bg-surface border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
    >
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-sm text-text/70 mb-6 flex-1">{description}</p>
      
      <div className="flex items-center justify-between mt-auto">
        <span className="text-xs font-medium px-2 py-1 rounded-full bg-background border border-border">
          {count} Tools
        </span>
        <span className="flex items-center text-sm font-medium text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          Explore <ArrowRight className="ml-1 w-4 h-4" />
        </span>
      </div>
    </Link>
  );
}
