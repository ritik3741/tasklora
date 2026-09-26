/**
 * Universal Error Logger
 * Captures critical application errors without exposing stack traces to the UI.
 * In a real production scenario, this could be wired to Sentry, Datadog, or LogRocket.
 */

type ErrorContext = {
  [key: string]: unknown;
};

class Logger {
  private logError(type: string, message: string, context?: ErrorContext) {
    // In development, log to console for debugging
    if (process.env.NODE_ENV !== "production") {
      console.error(`[${type}] ${message}`, context || "");
    }
    
    // In production, we would send this to an external service here
    // Example: Sentry.captureException(new Error(message), { extra: context })
  }

  apiError(endpoint: string, error: Error | unknown, context?: ErrorContext) {
    const msg = error instanceof Error ? error.message : String(error);
    this.logError("API_ERROR", `Failed to fetch from ${endpoint}: ${msg}`, context);
  }

  pdfError(action: string, error: Error | unknown, context?: ErrorContext) {
    const msg = error instanceof Error ? error.message : String(error);
    this.logError("PDF_ERROR", `Failed during PDF ${action}: ${msg}`, context);
  }

  parseError(format: "JSON" | "JWT" | "Regex", error: Error | unknown, context?: ErrorContext) {
    const msg = error instanceof Error ? error.message : String(error);
    this.logError("PARSE_ERROR", `Invalid ${format} structure: ${msg}`, context);
  }

  timeoutError(service: string, context?: ErrorContext) {
    this.logError("TIMEOUT_ERROR", `${service} connection timed out.`, context);
  }
}

export const logger = new Logger();
