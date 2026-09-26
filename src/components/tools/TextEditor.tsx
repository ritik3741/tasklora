import React from 'react';
import { cn } from '@/lib/utils';

interface TextEditorProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  wrapperClassName?: string;
}

export const TextEditor = React.forwardRef<HTMLTextAreaElement, TextEditorProps>(
  ({ className, label, error, wrapperClassName, ...props }, ref) => {
    return (
      <div className={cn("w-full space-y-2", wrapperClassName)}>
        {label && (
          <label className="block text-sm font-medium text-text">
            {label}
          </label>
        )}
        <div className="relative">
          <textarea
            ref={ref}
            className={cn(
              "w-full min-h-[300px] p-4 rounded-xl border border-border bg-background text-text",
              "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent",
              "resize-y font-mono text-sm leading-relaxed transition-all",
              error && "border-red-500 focus:ring-red-500/50",
              className
            )}
            {...props}
          />
        </div>
        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
      </div>
    );
  }
);

TextEditor.displayName = 'TextEditor';
