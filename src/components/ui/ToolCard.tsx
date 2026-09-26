import Link from "next/link";
import { Settings2, type LucideIcon } from "lucide-react";

interface ToolCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  href: string;
  isComingSoon?: boolean;
}

export function ToolCard({ title, description, icon: Icon = Settings2, href, isComingSoon = false }: ToolCardProps) {
  const content = (
    <>
      <div className="flex items-start justify-between mb-4">
        <div className="p-2.5 rounded-lg bg-surface border border-border group-hover:border-primary/30 group-hover:bg-primary/5 transition-colors">
          <Icon className="w-5 h-5 text-text group-hover:text-primary transition-colors" />
        </div>
        {isComingSoon && (
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-accent/10 text-accent">
            Coming Soon
          </span>
        )}
      </div>
      <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-sm text-text/60 line-clamp-2 mb-4 h-10">{description}</p>
      
      <div className="mt-auto pt-4 border-t border-border/50">
        <span className="text-xs text-text/40 font-mono truncate block">
          tasklora.com{href}
        </span>
      </div>
    </>
  );

  const className = "group flex flex-col p-5 rounded-xl border border-border bg-background hover:shadow-md transition-all h-full";

  if (isComingSoon) {
    return (
      <div className={className}>
        {content}
      </div>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
