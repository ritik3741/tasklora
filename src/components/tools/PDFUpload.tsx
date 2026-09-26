"use client";

import * as React from "react";
import { Upload, FileText, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface PDFUploadProps {
  onFilesSelected: (files: File[]) => void;
  multiple?: boolean;
  maxFiles?: number;
  accept?: string;
}

export function PDFUpload({ onFilesSelected, multiple = false, maxFiles = 50, accept = "application/pdf" }: PDFUploadProps) {
  const [isDragging, setIsDragging] = React.useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(Array.from(e.target.files));
    }
  };

  const handleFiles = (files: File[]) => {
    const validFiles = files.filter(f => f.type === accept || f.name.toLowerCase().endsWith(".pdf"));
    if (validFiles.length > 0) {
      onFilesSelected(multiple ? validFiles.slice(0, maxFiles) : [validFiles[0]]);
    }
  };

  return (
    <div 
      className={cn(
        "w-full p-8 md:p-12 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center text-center transition-all bg-surface/50 cursor-pointer",
        isDragging ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
      )}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => fileInputRef.current?.click()}
    >
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleChange} 
        accept={accept}
        multiple={multiple}
        className="hidden" 
      />
      
      <div className="w-16 h-16 mb-4 rounded-full bg-primary/10 flex items-center justify-center text-primary">
        <Upload className="w-8 h-8" />
      </div>
      
      <h3 className="text-xl font-bold mb-2">Drag & Drop your PDFs here</h3>
      <p className="text-text/60 mb-6">or tap to browse your files</p>
      
      <button 
        onClick={(e) => { e.stopPropagation(); fileInputRef.current?.click(); }}
        className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors min-h-[44px]"
      >
        Select PDF File{multiple ? "s" : ""}
      </button>
      
      <p className="text-xs text-text/40 mt-4 max-w-sm mx-auto">
        Files are processed securely in your browser and are never uploaded to any server.
      </p>
    </div>
  );
}

export function FileList({ files, onRemove, onReorder }: { 
  files: File[], 
  onRemove?: (index: number) => void,
  onReorder?: (startIndex: number, endIndex: number) => void 
}) {
  return (
    <div className="w-full space-y-2 mt-6">
      {files.map((file, index) => (
        <div key={`${file.name}-${index}`} className="flex items-center justify-between p-3 rounded-lg border border-border bg-background">
          <div className="flex items-center gap-3 overflow-hidden">
            <FileText className="w-5 h-5 text-red-500 shrink-0" />
            <span className="font-medium text-sm truncate">{file.name}</span>
            <span className="text-xs text-text/50 shrink-0">
              {(file.size / 1024 / 1024).toFixed(2)} MB
            </span>
          </div>
          {onRemove && (
            <button 
              onClick={(e) => { e.stopPropagation(); onRemove(index); }}
              className="p-2 min-h-[44px] min-w-[44px] hover:bg-red-500/10 hover:text-red-500 rounded-xl text-text/50 transition-colors flex items-center justify-center"
              title="Remove file"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
