import { MetadataRoute } from "next";
import { sanityFetch } from "@/sanity/lib/live";
import { sitemapData } from "@/sanity/lib/queries";
import { headers } from "next/headers";

/**
 * This file creates a sitemap (sitemap.xml) for the application.
 * Optimized for healthcare marketplace with Australian location data.
 */

// Define the change frequency type
type ChangeFrequency = 
  | "always"
  | "hourly" 
  | "daily" 
  | "weekly" 
  | "monthly" 
  | "yearly" 
  | "never";

// Australian locations data - major cities
const australianCities = [
  'Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 
  'Gold Coast', 'Newcastle', 'Canberra', 'Hobart', 'Darwin'
];

// Main site sections with priorities
const mainSections = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' as ChangeFrequency },
  { path: 'about-us', priority: 0.9, changeFrequency: 'monthly' as ChangeFrequency },
  { path: 'how-it-works', priority: 0.9, changeFrequency: 'monthly' as ChangeFrequency },
  { path: 'practitioner', priority: 0.9, changeFrequency: 'weekly' as ChangeFrequency },
  { path: 'patient', priority: 0.9, changeFrequency: 'weekly' as ChangeFrequency },
  { path: 'blog', priority: 0.8, changeFrequency: 'weekly' as ChangeFrequency },
  { path: 'contact', priority: 0.7, changeFrequency: 'monthly' as ChangeFrequency },
  { path: 'terms', priority: 0.5, changeFrequency: 'yearly' as ChangeFrequency },
  { path: 'privacy-policy', priority: 0.5, changeFrequency: 'yearly' as ChangeFrequency },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch dynamic content from Sanity
  const allPostsAndPages = await sanityFetch({
    query: sitemapData,
  });
  
  const headersList = await headers();
  const host = headersList.get("host") as string;
  const baseUrl = `https://${host}`;
  
  const sitemap: MetadataRoute.Sitemap = [];
  
  // Add main sections
  for (const section of mainSections) {
    sitemap.push({
      url: section.path ? `${baseUrl}/${section.path}` : baseUrl,
      lastModified: new Date(),
      priority: section.priority,
      changeFrequency: section.changeFrequency,
    });
  }

  // Add location-based pages 
  // These would be created dynamically when you implement location pages
  for (const city of australianCities) {
    sitemap.push({
      url: `${baseUrl}/locations/${city.toLowerCase().replace(/\s+/g, '-')}`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: 'weekly',
    });
  }

  // Add dynamic content from Sanity
  if (allPostsAndPages?.data?.length) {
    let priority: number;
    let changeFrequency: ChangeFrequency;
    let url: string;

    for (const item of allPostsAndPages.data) {
      switch (item._type) {
        case "page":
          priority = 0.8;
          changeFrequency = "monthly";
          url = `${baseUrl}/${item.slug}`;
          break;
        case "post":
          priority = 0.7;
          changeFrequency = "weekly";
          url = `${baseUrl}/blog/${item.slug}`;
          break;
        default:
          continue;
      }
      
      sitemap.push({
        url,
        lastModified: item._updatedAt || new Date(),
        priority,
        changeFrequency,
      });
    }
  }

  return sitemap;
}
