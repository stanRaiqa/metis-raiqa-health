import { MetadataRoute } from 'next';
import { headers } from 'next/headers';

/**
 * Generate robots.txt rules using Next.js's built-in robots.ts functionality
 * This complements the static robots.txt file but has the advantage of being dynamic
 */
export default function robots(): MetadataRoute.Robots {
  const headersList = headers();
  const host = headersList.get('host') as string;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/admin/',
        '/dashboard/',
        '/cms/',
        '/studio/',
        '/private/',
        '/404',
        '/500',
        '/draft/',
        '/*.json$',
        '/*?*',
        '/contactUsSection'
      ],
    },
    sitemap: `https://${host}/sitemap.xml`,
    host: `https://${host}`,
  };
} 