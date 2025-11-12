/**
 * Site Route Manifest
 * 
 * This file defines the main routes and navigation structure of the site.
 * It's used for generating site maps, navigation menus, and helps with SEO planning.
 * The weights correspond to priority in navigation and sitemap.
 * 
 * Updated to reflect Metis by Raiqa Health - Medical Weight Loss platform
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
    title: 'Metis - Medical Weight Loss, Made Simple | Doctor-Led Care from $269/month',
    description: 'Personalized medical weight loss treatment with doctor-led care, prescription medication delivery, and ongoing support from licensed Australian doctors. Start your transformation from $269/month. No diets. No confusion. Just real results.',
    weight: 100,
    isIndexable: true,
    changeFrequency: 'weekly'
  },
  {
    path: '/contact',
    title: 'Book a GP Appointment Online Easily with Raiqa Health',
    description: 'Book a GP appointment online through RaiqaHealth\'s virtual care platform in Australia and access quality healthcare from the comfort of your home.',
    weight: 80,
    isIndexable: true,
    changeFrequency: 'monthly'
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy - Metis by Raiqa Health | Medical Weight Loss',
    description: 'Privacy Policy for Metis medical weight loss program. Learn how we collect, use, store, and protect your personal and health information in compliance with Australian Privacy Principles.',
    weight: 30,
    isIndexable: true,
    changeFrequency: 'yearly'
  },
  {
    path: '/terms-conditions',
    title: 'Terms & Conditions - Metis by Raiqa Health | Medical Weight Loss',
    description: 'Terms and Conditions for Metis medical weight loss program. Understand your rights, responsibilities, and our service terms for doctor-led weight management in Australia.',
    weight: 30,
    isIndexable: true,
    changeFrequency: 'yearly'
  },
  {
    path: '/shipping-returns',
    title: 'Shipping, Returns & Cancellations - Metis by Raiqa Health',
    description: 'Shipping, returns, and cancellations policy for Metis medical weight loss program. Learn about delivery times, refund eligibility, and order cancellation process.',
    weight: 25,
    isIndexable: true,
    changeFrequency: 'yearly'
  }
];

export default routes; 