import * as React from "react";
import { cn } from "@/lib/utils";

interface CodeEditorProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const CodeEditor = React.forwardRef<HTMLTextAreaElement, CodeEditorProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-2">
        {label && <label className="text-sm font-semibold text-text">{label}</label>}
        <textarea
          ref={ref}
          className={cn(
            "w-full min-h-[200px] p-4 rounded-xl border bg-surface/50 font-mono text-sm leading-relaxed resize-y focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all",
            error ? "border-red-500 focus:ring-red-500/50" : "border-border",
            className
          )}
          spellCheck={false}
          {...props}
        />
        {error && <p className="text-sm text-red-500 font-medium">{error}</p>}
      </div>
    );
  }
);
CodeEditor.displayName = "CodeEditor";
