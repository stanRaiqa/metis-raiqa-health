import { MetadataRoute } from 'next';
import { headers } from 'next/headers';

/**
 * Generate robots.txt rules using Next.js's built-in robots.ts functionality
 * Comprehensive rules for medical weight loss website security and SEO
 */
export default function robots(): MetadataRoute.Robots {
  const headersList = headers();
  const host = headersList.get('host') as string;

  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/about-us',
          '/how-it-works',
          '/contact',
          '/services',
          '/blog',
          '/privacy-policy',
          '/terms-conditions',
          '/shipping-returns',
          '/cookie-policy',
          '/*.css$',
          '/*.js$',
          '/*.jpg$',
          '/*.jpeg$',
          '/*.png$',
          '/*.webp$',
          '/*.svg$',
          '/*.woff$',
          '/*.woff2$',
        ],
        disallow: [
          // API Routes
          '/api/',
          
          // Admin & Dashboard Routes
          '/admin/',
          '/dashboard/',
          
          // CMS & Studio Routes
          '/cms/',
          '/studio/',
          
          // Authentication Routes
          '/auth/',
          '/login/',
          '/register/',
          '/signup/',
          '/signin/',
          
          // Private & Internal Routes
          '/private/',
          '/internal/',
          
          // Error Pages
          '/404',
          '/500',
          '/error',
          
          // Draft & Preview Routes
          '/draft/',
          '/preview/',
          
          // Example & Showcase Pages (Development)
          '/example/',
          '/showcase/',
          '/components/example/',
          
          // Internal Sections
          '/contactUsSection',
          
          // Query Parameters (to avoid duplicate content)
          '/*?*',
          '/*&',
          
          // File Types
          '/*.json$',
          '/*.xml$',
          '/*.txt$',
          
          // User Data & Profiles
          '/user/',
          '/profile/',
          '/account/',
          '/settings/',
          
          // Payment & Checkout (if applicable)
          '/checkout/',
          '/payment/',
          '/cart/',
          
          // Search Results (to avoid thin content)
          '/search?',
          '/search/',
          
          // Alpha/Beta Features
          '/alpha/',
          '/beta/',
          
          // Alternative Homepage
          '/homepage-2',
          
          // Version & Internal Tools
          '/version/',
          '/_next/',
          '/static/',
        ],
        crawlDelay: 1,
      },
      // Special rules for Google
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/dashboard/',
          '/private/',
          '/*?*',
          '/example/',
        ],
      },
      // Block AI scrapers/bots if desired
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'CCBot',
          'anthropic-ai',
          'Claude-Web'
        ],
        disallow: ['/'],
      },
    ],
    sitemap: `https://${host}/sitemap.xml`,
    host: `https://${host}`,
  };
} 