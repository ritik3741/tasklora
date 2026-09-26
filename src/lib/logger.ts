/**
 * Universal Error Logger
 * Captures critical application errors without exposing stack traces to the UI.
 * In a real production scenario, this could be wired to Sentry, Datadog, or LogRocket.
 */

type ErrorContext = {
  [key: string]: any;
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

  apiError(endpoint: string, error: any, context?: ErrorContext) {
    this.logError("API_ERROR", `Failed to fetch from ${endpoint}: ${error.message || error}`, context);
  }

  pdfError(action: string, error: any, context?: ErrorContext) {
    this.logError("PDF_ERROR", `Failed during PDF ${action}: ${error.message || error}`, context);
  }

  parseError(format: "JSON" | "JWT" | "Regex", error: any, context?: ErrorContext) {
    this.logError("PARSE_ERROR", `Invalid ${format} structure: ${error.message || error}`, context);
  }

  timeoutError(service: string, context?: ErrorContext) {
    this.logError("TIMEOUT_ERROR", `${service} connection timed out.`, context);
  }
}

export const logger = new Logger();
