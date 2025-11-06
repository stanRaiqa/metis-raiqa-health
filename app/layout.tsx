import "./globals.css";
import { ThemeProvider } from './theming/ThemeProvider';
import { poppins, inter as interFont, spaceGrotesk } from './fonts';

import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { VisualEditing, toPlainText } from "next-sanity";
import { Toaster } from "sonner";
import Script from "next/script";

// import DraftModeToast from "@/app/components/DraftModeToast"; // File does not exist
import * as demo from "@/sanity/lib/demo";
import { sanityFetch } from "@/sanity/lib/live";
// import { SanityLive } from "@/sanity/lib/live"; // Disabled to prevent live events API calls
import { settingsQuery } from "@/sanity/lib/queries";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";
// import { handleError } from "./client-utils"; // Only needed if SanityLive is enabled
import React, {Suspense} from "react";

// Import dynamic component to avoid SSR issues
import dynamic from 'next/dynamic';
import { LayoutProvider } from './context/LayoutContext';
import HeaderFooterController from './components/layout/HeaderFooterController';
// import PageReveal from "@/app/components/PageReveal"; // File does not exist
import PatientHeroContentProvider from "@/app/utils/providers/patientHeroContentProvider";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Dynamically import the ScrollToTopButton to avoid SSR issues
const ScrollToTopButton = dynamic(
    () => import('./components/common/components/ScrollToTopButton'),
    { ssr: false }
);

// Dynamically import the AnalyticsProvider to avoid SSR issues
const AnalyticsProvider = dynamic(
    () => import('./components/analytics/AnalyticsProvider'),
    { ssr: false }
);

/**
 * Generate metadata for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */
export async function generateMetadata(): Promise<Metadata> {
  const { data: settings } = await sanityFetch({
    query: settingsQuery,
    stega: false,
  });
  const title = settings?.title || demo.title;
  const description = settings?.description || demo.description;

  const ogImage = resolveOpenGraphImage(settings?.ogImage);
  let metadataBase: URL | undefined = undefined;
  try {
    metadataBase = settings?.ogImage?.metadataBase
        ? new URL(settings.ogImage.metadataBase)
        : undefined;
  } catch {
    // ignore
  }
  return {
    metadataBase,
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    description: toPlainText(description),
    openGraph: {
      title: title,
      description: toPlainText(description),
      url: 'https://raiqa.health',
      siteName: 'Raiqa Health',
      images: ogImage ? [ogImage] : [],
      locale: 'en_AU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: toPlainText(description),
      images: ogImage ? [ogImage] : [],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
    alternates: {
      canonical: 'https://raiqa.health',
    },
    other: {
      'geo.region': 'AU',
      'geo.placename': 'Australia',
      'geo.position': '-25.2744;133.7751',
      'ICBM': '-25.2744, 133.7751',
    }
  };
}


export default async function RootLayout({
                                           children,
                                         }: {
  children: React.ReactNode;
}) {
  const { isEnabled: isDraftMode } = await draftMode();

  return (
      <html lang="en" className={`${poppins.variable} ${interFont.variable} ${spaceGrotesk.variable} bg-white text-black scroll-smooth`}>
      <head>
        {/* Preload key resources to improve performance */}
       
        
        {/* Google Ads Conversion Tracking */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17408080846"
          strategy="afterInteractive"
        />
        <Script id="google-ads-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17408080846');
          `}
        </Script>
        
        
      </head>
      <body>
      {/* Google Tag Manager (noscript) - keep immediately after opening body */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID || 'GTM-P8LRKQ2Q'}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
      <ThemeProvider>
        <PatientHeroContentProvider>
        <LayoutProvider>
          <section className="min-h-screen">
            {/* The <Toaster> component is responsible for rendering toast notifications used in /app/client-utils.ts */}
            <Toaster />
            {isDraftMode && (
                <>
                  {/* <DraftModeToast /> */}
                  {/*  Enable Visual Editing, only to be rendered when Draft Mode is enabled */}
                  <VisualEditing />
                </>
            )}
            {/* The <SanityLive> component is responsible for making all sanityFetch calls in your application live, so should always be rendered. */}
            {/* Disabled SanityLive to prevent live events API calls */}
            {/* <SanityLive onError={handleError} /> */}
            
            <HeaderFooterController
              headerComponent={<Suspense>{process.env.WEBSITE_VERSION == "BETA" || process.env.WEBSITE_VERSION == "Preview" ?
                  <Navbar /> : null}
              </Suspense>}
              footerComponent={
                <Suspense>
                  {/*{process.env.WEBSITE_VERSION == "BETA" || process.env.WEBSITE_VERSION == "ALPHA" ?*/}
                  {/*  <Footer2/> : */}
                  <Footer/>
                </Suspense>
              }
            >
              <main>{children}</main>
            </HeaderFooterController>
          </section>
          
          {/* All analytics in one component */}
          <AnalyticsProvider 
            googleAnalyticsId={process.env.NEXT_PUBLIC_GA_ID || 'G-2N4VB0HJ24'}
            gtmId={process.env.NEXT_PUBLIC_GTM_ID || 'GTM-P8LRKQ2Q'}
            gtmEnabled={true}
            metaPixelId={process.env.NEXT_PUBLIC_META_PIXEL_ID || '1053250110280625'}
            metaPixelEnabled={true}
            vercelAnalyticsEnabled={true}
            speedInsightsEnabled={true}
            seoTrackerEnabled={true}
            vercelDebug={process.env.NODE_ENV === 'development'}
            hotjarEnabled={process.env.NEXT_PUBLIC_HOTJAR_ENABLED === 'true'}
            hotjarSiteId={process.env.NEXT_PUBLIC_HOTJAR_SITE_ID || '6496824'}
            hotjarScriptVersion={process.env.NEXT_PUBLIC_HOTJAR_SV || '6'}
            clarityEnabled={process.env.NEXT_PUBLIC_CLARITY_ENABLED === 'true'}
            clarityProjectId={process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID || 'sx1p0w0l4k'}
          />
          
          <ScrollToTopButton />
          {/*<TeamsChatWidget />*/}
        </LayoutProvider>
        </PatientHeroContentProvider>
      </ThemeProvider>
      </body>
      </html>
  );
}
