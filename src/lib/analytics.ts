export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// log specific events
export const logEvent = (action: string, category: string, label: string, value?: number) => {
  if (typeof window !== "undefined" && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// specific tracking functions requested
export const trackToolOpened = (toolName: string) => {
  logEvent("tool_opened", "Tools", toolName);
};

export const trackSearchPerformed = (query: string) => {
  logEvent("search", "Navigation", query);
};

export const trackCopyAction = (toolName: string) => {
  logEvent("copy_button", "Interaction", toolName);
};

export const trackDownloadAction = (toolName: string) => {
  logEvent("download_button", "Interaction", toolName);
};

export const trackCurrencyConversion = (from: string, to: string) => {
  logEvent("currency_conversion", "Tools", `${from}_to_${to}`);
};

export const trackPdfMerge = (fileCount: number) => {
  logEvent("pdf_merged", "Tools", "PDF Merge", fileCount);
};

export const trackJsonFormat = (action: "format" | "minify") => {
  logEvent("json_formatted", "Tools", action);
};
