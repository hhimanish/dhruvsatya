import { MetadataRoute } from 'next'
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thecpt.co.in';

  // Read insights
  let insights = [];
  try {
    const filePath = path.join(process.cwd(), 'content', 'insights.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    insights = JSON.parse(fileContents);
  } catch (e) {
    console.error("Failed to read insights for sitemap");
  }

  const staticRoutes = [
    '', '/about', '/solutions', '/solutions/organizations', '/solutions/leaders',
    '/solutions/institutions', '/programs', '/method', '/founder', '/impact',
    '/analyzer', '/insights', '/contact', '/privacy', '/terms', '/sitemap'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const dynamicRoutes = insights.map((insight: any) => ({
    url: `${baseUrl}/insights/${insight.id}`,
    lastModified: new Date(insight.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
