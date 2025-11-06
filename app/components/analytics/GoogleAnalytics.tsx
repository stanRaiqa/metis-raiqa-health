'use client';

import Script from 'next/script'
import { memo, useEffect } from 'react'

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Default GA ID
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-2N4VB0HJ24';

// Helper function to track custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};

// Health marketplace specific events
export const trackPractitionerEvent = (
  action: 'view' | 'interest' | 'contact' | 'information_request',
  params?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', `practitioner_${action}`, {
      ...params,
      platform: 'web'
    });
  }
};

export const trackPatientEvent = (
  action: 'view' | 'information_request' | 'contact' | 'search',
  params?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', `patient_${action}`, {
      ...params,
      platform: 'web'
    });
  }
};

const GoogleAnalytics = memo(() => {
  // Track page views
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', GA_ID, {
          page_path: url,
        });
      }
    };

    // Add event listeners for route changes
    document.addEventListener('routeChangeComplete', (e: any) => handleRouteChange(e.detail.url));
    
    return () => {
      document.removeEventListener('routeChangeComplete', (e: any) => handleRouteChange(e.detail.url));
    };
  }, []);
  
  return (
    <>
      {/* External GTM Script */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      
      {/* Initialization Script */}
      <Script
        id="ga-init"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
            send_page_view: true,
            health_platform: 'raiqa',
            user_properties: {
              platform_type: 'healthcare_marketplace'
            }
          });
        `}
      </Script>
    </>
  )
})

GoogleAnalytics.displayName = 'GoogleAnalytics'

export default GoogleAnalytics 