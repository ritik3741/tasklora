# Tasklora — 100+ Free Online Tools

Tasklora is a premium, fully responsive, and privacy-focused utility website built for developers, students, and businesses. It features over 100 browser-based tools, including PDF compression, JSON formatting, SEO generators, and advanced calculators. 

All processing happens **100% locally in the browser**. No backend, no databases, and no external tracking APIs (except Google Analytics).

## 🚀 Features

- **Blazing Fast**: Built on Next.js 16 (App Router) and optimized with Turbopack.
- **Privacy-First**: Zero server-side file uploads or data storage.
- **Mobile-First**: Fully responsive with safe-area padding and swipeable touch targets.
- **PWA Ready**: Installable offline support with a Service Worker.
- **AdSense Optimized**: Zero CLS (Cumulative Layout Shift) ad placeholders.
- **SEO Mastered**: Dynamic sitemaps, JSON-LD Schema generation, canonical tags, and strict robots configuration.

---

## 📦 Installation

Ensure you have [Node.js](https://nodejs.org/) (v20+) installed.

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/tasklora.git
   cd tasklora
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Setup environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Add your `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_GA_MEASUREMENT_ID`.

---

## 🛠 Development

To start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗 Build & Production

To generate a fully optimized production build:

```bash
npm run build
```

To test the production build locally:

```bash
npm run start
```

---

## 🚀 Deployment (Vercel)

Tasklora is fully optimized for zero-config deployment on Vercel.

1. Push your code to GitHub.
2. Import the project in your Vercel Dashboard.
3. Add the following **Environment Variables** in Vercel:
   - `NEXT_PUBLIC_SITE_URL`: `https://your-domain.com`
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID`: `G-XXXXXXXXXX`
4. Click **Deploy**. 

Vercel will automatically read the `vercel.json` and `next.config.ts` configurations to apply aggressive edge caching, gzip/brotli compression, and security headers.

---

## 🌍 Environment Variables

All variables are public (prefixed with `NEXT_PUBLIC_`) so they are exposed to the browser for static generation.

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | The canonical root URL of the project (e.g., `https://tasklora.com`). Crucial for SEO and sitemaps. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Your Google Analytics 4 stream ID. Leave blank if not using GA. |

---

## 📁 Project Structure

```text
├── next.config.ts          # Next.js optimization configuration
├── vercel.json             # Vercel deployment edge headers
├── public/                 # Static assets (favicons, manifests, sw.js)
│   └── search-index.json   # Static database driving internal search & sitemap
└── src/
    ├── app/                # Next.js 16 App Router pages
    │   ├── api/            # Serverless Edge proxies (Currency API)
    │   ├── calculator/     # Calculator tools module
    │   ├── developer/      # Developer tools module
    │   ├── pdf/            # PDF tools module
    │   ├── seo/            # SEO tools module
    │   └── text/           # Text tools module
    ├── components/         # Reusable React components
    │   ├── layout/         # Header, Footer, and Nav drawers
    │   ├── tools/          # Core tool UI (Uploaders, Code Editors, Layouts)
    │   ├── ui/             # Core design system elements (Buttons, Inputs)
    │   └── ads/            # AdSense placeholders with IntersectionObserver
    ├── hooks/              # Custom React hooks
    ├── lib/                # Utility logic (SEO Schema Generators, GA Tracking)
    └── proxy.ts            # Security Proxy (replaces middleware.ts)
```

---

## ♿ Accessibility (WCAG AA)

Tasklora has been rigorously audited for accessibility:
- Semantic HTML and ARIA labels.
- Keyboard-only navigation support.
- Fully visible focus indicators for all interactive elements.
- Accessible color contrast for dark and light modes.
