'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import GoogleAnalytics from './GoogleAnalytics';
import GoogleTagManager from './GoogleTagManager';
import VercelAnalyticsWrapper from './VercelAnalytics';
import { SpeedInsights } from '@vercel/speed-insights/react';
import SEOTracker from './SEOTracker';
import MetaPixel from './MetaPixel';
import type { BeforeSend } from '@vercel/analytics/react';
import Hotjar from './Hotjar';
import Clarity from './Clarity';

// Analytics context and provider types
type AnalyticsContextType = {
  trackEvent: (name: string, params?: Record<string, any>) => void;
  trackMetaPixelEvent: (eventName: string, parameters?: Record<string, any>) => void;
};

type AnalyticsProviderProps = {
  children?: ReactNode;
  googleAnalyticsId?: string;
  gtmId?: string;
  gtmEnabled?: boolean;
  metaPixelId?: string;
  metaPixelEnabled?: boolean;
  vercelAnalyticsEnabled?: boolean;
  speedInsightsEnabled?: boolean;
  seoTrackerEnabled?: boolean;
  vercelDebug?: boolean;
  vercelMode?: 'auto' | 'development' | 'production';
  vercelBeforeSend?: BeforeSend;
  hotjarEnabled?: boolean;
  hotjarSiteId?: string | number;
  hotjarScriptVersion?: string | number;
  clarityEnabled?: boolean;
  clarityProjectId?: string;
};

// Create a context for accessing analytics tracking functions
const AnalyticsContext = createContext<AnalyticsContextType>({
  trackEvent: () => {}, // Default no-op function
  trackMetaPixelEvent: () => {}, // Default no-op function
});

// Custom hook for accessing analytics functions
export const useAnalyticsContext = () => useContext(AnalyticsContext);

/**
 * Combined Analytics Provider that includes:
 * - Google Analytics (GA4)
 * - Vercel Analytics
 * - Vercel Speed Insights
 * - SEO Tracker
 * 
 * This component also provides a context for tracking events from any component.
 */
export function AnalyticsProvider({
  children,
  googleAnalyticsId,
  gtmId,
  gtmEnabled = true,
  metaPixelId,
  metaPixelEnabled = true,
  vercelAnalyticsEnabled = true,
  speedInsightsEnabled = true,
  seoTrackerEnabled = true,
  vercelDebug = false,
  vercelMode = 'auto',
  vercelBeforeSend,
  hotjarEnabled = true,
  hotjarSiteId,
  hotjarScriptVersion = 6,
  clarityEnabled = true,
  clarityProjectId,
}: AnalyticsProviderProps) {
  // Combined track event function that sends events to all analytics services
  const trackEvent = (name: string, params?: Record<string, any>) => {
    // Track in Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', name, params);
    }
    
    // You could add other analytics services here
    if (vercelDebug) {
      console.log('Analytics event:', name, params);
    }
  };

  // Meta Pixel event tracking function
  const trackMetaPixelEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', eventName, parameters);
    }
    
    if (vercelDebug) {
      console.log('Meta Pixel event:', eventName, parameters);
    }
  };

  return (
    <AnalyticsContext.Provider value={{ trackEvent, trackMetaPixelEvent }}>
      {children}
      
      {/* Google Analytics */}
      {googleAnalyticsId && <GoogleAnalytics />}
      
      {/* Google Tag Manager */}
      {gtmEnabled && gtmId && <GoogleTagManager gtmId={gtmId} />}
      
      {/* Vercel Analytics */}
      {vercelAnalyticsEnabled && (
        <VercelAnalyticsWrapper 
          debug={vercelDebug}
          mode={vercelMode}
          beforeSend={vercelBeforeSend}
        />
      )}
      
      {/* Vercel Speed Insights */}
      {speedInsightsEnabled && <SpeedInsights />}
      
      {/* SEO Performance Tracker */}
      {seoTrackerEnabled && <SEOTracker />}
      
      {/* Meta Pixel */}
      {metaPixelEnabled && metaPixelId && <MetaPixel pixelId={metaPixelId} enabled={metaPixelEnabled} />}

      {/* Hotjar */}
      {hotjarEnabled && hotjarSiteId && (
        <Hotjar siteId={hotjarSiteId} scriptVersion={hotjarScriptVersion} enabled={hotjarEnabled} />
      )}

      {/* Microsoft Clarity */}
      {clarityEnabled && clarityProjectId && (
        <Clarity projectId={clarityProjectId} enabled={clarityEnabled} />
      )}
    </AnalyticsContext.Provider>
  );
}

export default AnalyticsProvider; 