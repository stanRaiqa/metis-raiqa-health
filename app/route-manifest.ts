/**
 * Site Route Manifest
 * 
 * This file defines the main routes and navigation structure of the site.
 * It's used for generating site maps, navigation menus, and helps with SEO planning.
 * The weights correspond to priority in navigation and sitemap.
 */

export type RouteDefinition = {
  path: string;
  title: string;
  description: string;
  weight: number;
  children?: RouteDefinition[];
  isIndexable?: boolean;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  isExternal?: boolean;
  externalUrl?: string;
};

const routes: RouteDefinition[] = [
  {
    path: '/',
    title: 'Home',
    description: 'Raiqa Health - Healthcare Marketplace Platform for Australian Practitioners & Patients',
    weight: 100,
    isIndexable: true,
    changeFrequency: 'weekly'
  },
  {
    path: '/about-us',
    title: 'About Us',
    description: 'Learn about Raiqa Health and our mission to transform healthcare in Australia',
    weight: 90,
    isIndexable: true,
    changeFrequency: 'monthly'
  },
  {
    path: '/how-it-works',
    title: 'How It Works',
    description: 'Learn how Raiqa Health connects healthcare practitioners with patients across Australia',
    weight: 90,
    isIndexable: true,
    changeFrequency: 'monthly'
  },
  {
    path: '/practitioner',
    title: 'For Practitioners',
    description: 'Join Raiqa Health as a healthcare practitioner and grow your practice',
    weight: 85,
    isIndexable: true,
    changeFrequency: 'weekly'
  },
  {
    path: '/patient',
    title: 'For Patients',
    description: 'Find and book healthcare services across Australia with Raiqa Health',
    weight: 85,
    isIndexable: true,
    changeFrequency: 'weekly'
  },
  {
    path: '/blog',
    title: 'Blog',
    description: 'Healthcare insights, news and updates from Raiqa Health',
    weight: 80,
    isIndexable: true,
    changeFrequency: 'weekly',
    children: [] // Dynamically generated from blog posts
  },
  {
    path: '/contact',
    title: 'Contact Us',
    description: 'Get in touch with the Raiqa Health team',
    weight: 70,
    isIndexable: true,
    changeFrequency: 'monthly'
  },
  {
    path: '/locations',
    title: 'Locations',
    description: 'Healthcare services across Australia',
    weight: 60,
    isIndexable: true,
    changeFrequency: 'weekly',
    children: [
      {
        path: '/locations/sydney',
        title: 'Sydney',
        description: 'Healthcare practitioners in Sydney',
        weight: 59,
        isIndexable: true,
        changeFrequency: 'weekly'
      },
      {
        path: '/locations/melbourne',
        title: 'Melbourne',
        description: 'Healthcare practitioners in Melbourne',
        weight: 59,
        isIndexable: true,
        changeFrequency: 'weekly'
      },
      {
        path: '/locations/brisbane',
        title: 'Brisbane',
        description: 'Healthcare practitioners in Brisbane',
        weight: 59,
        isIndexable: true,
        changeFrequency: 'weekly'
      },
      // Additional locations would be defined here
    ]
  },
  {
    path: '/marketplace-terms-and-conditions',
    title: 'Terms of Service',
    description: 'Terms and conditions for using Raiqa Health',
    weight: 20,
    isIndexable: true,
    changeFrequency: 'yearly'
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy',
    description: 'Privacy policy for Raiqa Health',
    weight: 20,
    isIndexable: true,
    changeFrequency: 'yearly'
  }
];

export default routes; 