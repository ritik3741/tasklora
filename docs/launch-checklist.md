# Tasklora Launch Checklist

Follow this checklist to take Tasklora from development to a fully functioning production application.

## 1. Domain & DNS
- [ ] Purchase a custom domain name (e.g., `tasklora.com`).
- [ ] Configure DNS settings to point to your hosting provider (Vercel).

## 2. Vercel Deployment
- [ ] Connect your GitHub repository to Vercel.
- [ ] Deploy the `main` branch.
- [ ] Ensure the build command is `npm run build` and framework is `Next.js`.
- [ ] Verify that `vercel.json` and `next.config.ts` are successfully read and caching headers are applied.

## 3. Environment Variables
In the Vercel Dashboard, navigate to **Settings** > **Environment Variables** and add:
- [ ] `NEXT_PUBLIC_SITE_URL` (e.g., `https://tasklora.com`)
- [ ] `NEXT_PUBLIC_GA_MEASUREMENT_ID` (e.g., `G-XXXXXXXXXX`)
- [ ] `NEXT_PUBLIC_ADSENSE_CLIENT` (e.g., `ca-pub-XXXXXXXXXXXXXXXX`)

## 4. Google Analytics
- [ ] Create a property in Google Analytics (GA4).
- [ ] Get the Measurement ID and add it to Vercel (redeploy after adding).
- [ ] Test the integration using GA's **Realtime** dashboard (check for events like `tool_opened`, `search`, etc.).

## 5. Google Search Console & Indexing
- [ ] Add and verify your domain in [Google Search Console](https://search.google.com/search-console).
- [ ] Submit the XML Sitemap URL: `https://tasklora.com/sitemap.xml`.
- [ ] Ensure `robots.txt` is accessible at `https://tasklora.com/robots.txt`.
- [ ] Request indexing for the homepage and major category pages.

## 6. Google AdSense
- [ ] Add the domain to your Google AdSense account.
- [ ] Wait for approval (make sure your Privacy Policy and Contact pages are accurate).
- [ ] Set `NEXT_PUBLIC_ADSENSE_CLIENT` in Vercel to activate the lazy-loaded ad placeholders.

## 7. QA & Performance
- [ ] Test the site on a physical mobile device (Safari and Chrome).
- [ ] Verify PWA installability (look for the install icon in the address bar).
- [ ] Run a Lighthouse Audit on Desktop and Mobile to verify Core Web Vitals (Target: 98+ Performance, 100 SEO).
- [ ] Check console for any missing hydration errors or logger warnings.
