import { Poppins, Inter, Space_Grotesk } from 'next/font/google';

// Headings: Poppins (Bold / Semi-Bold)
// Usage: Titles, CTA lines
export const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

// Body: Inter (Regular / Medium)
// Usage: Product info, details
export const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

// Numbers & Tech Data: Space Grotesk (Medium)
// Usage: Metrics, packaging highlights
export const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
}); 