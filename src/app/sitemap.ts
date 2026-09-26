import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tasklora.com';
  
  const staticPages = [
    { url: '', priority: 1.0 },
    { url: '/about', priority: 0.8 },
    { url: '/contact', priority: 0.8 },
    { url: '/privacy-policy', priority: 0.5 },
    { url: '/disclaimer', priority: 0.5 },
  ];

  const categories = [
    '/developer',
    '/pdf',
    '/text',
    '/calculator',
    '/seo',
  ];

  const staticRoutes: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: page.priority,
  }));

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  let toolRoutes: MetadataRoute.Sitemap = [];
  try {
    const searchIndexData = fs.readFileSync(
      path.join(process.cwd(), 'public', 'search-index.json'),
      'utf-8'
    );
    const tools = JSON.parse(searchIndexData);
    
    toolRoutes = tools.map((tool: any) => ({
      url: `${baseUrl}${tool.url}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    }));
  } catch (error) {
    console.error("Failed to load search index for sitemap generation", error);
  }

  return [...staticRoutes, ...categoryRoutes, ...toolRoutes];
}
