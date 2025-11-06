'use client';

import { useEffect } from 'react';
import { trackEvent } from './GoogleAnalytics';
import { usePathname, useSearchParams } from 'next/navigation';

/**
 * A component that tracks important SEO metrics
 * including page load time, navigation timing, and user engagement
 */
const SEOTracker = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Skip tracking in development environment
    if (process.env.NODE_ENV === 'development') return;

    const trackPageLoadTime = () => {
      if (typeof window === 'undefined') return;

      // Get performance metrics
      const navigation = window.performance?.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (!navigation) return;

      // Calculate key metrics
      const loadTime = navigation.loadEventEnd - navigation.startTime;
      const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.startTime;
      const firstContentfulPaint = window.performance?.getEntriesByName('first-contentful-paint')[0]?.startTime || 0;

      // Track page load performance
      trackEvent('page_performance', 'seo', pathname, Math.round(loadTime));

      // Track detailed performance
      window.gtag?.('event', 'web_vitals', {
        page_path: pathname,
        load_time: Math.round(loadTime),
        dom_content_loaded: Math.round(domContentLoaded),
        first_contentful_paint: Math.round(firstContentfulPaint)
      });
    };

    // Track the page view with SEO data
    const trackPageView = () => {
      // Get the referrer if any
      const referrer = document.referrer;
      const referrerDomain = referrer ? new URL(referrer).hostname : '';
      
      // Track organic search traffic
      const isFromSearch = referrerDomain.includes('google') || 
                           referrerDomain.includes('bing') || 
                           referrerDomain.includes('yahoo');
      
      // Track UTM parameters
      const utmSource = searchParams.get('utm_source') || '';
      const utmMedium = searchParams.get('utm_medium') || '';
      const utmCampaign = searchParams.get('utm_campaign') || '';
      
      // Track SEO data
      window.gtag?.('event', 'page_view_seo', {
        page_path: pathname,
        page_title: document.title,
        referrer: referrer,
        referrer_domain: referrerDomain,
        is_organic_search: isFromSearch,
        utm_source: utmSource,
        utm_medium: utmMedium,
        utm_campaign: utmCampaign
      });
    };

    // Track user engagement
    const trackEngagement = () => {
      let startTime = Date.now();
      let scrollDepth = 0;
      
      const handleScroll = () => {
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPosition = window.scrollY;
        const currentScrollDepth = Math.round((scrollPosition / documentHeight) * 100);
        
        if (currentScrollDepth > scrollDepth && currentScrollDepth % 25 === 0) {
          scrollDepth = currentScrollDepth;
          trackEvent('scroll_depth', 'engagement', `${scrollDepth}%`);
        }
      };

      const trackTimeOnPage = () => {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        trackEvent('time_on_page', 'engagement', pathname, timeSpent);
      };

      // Set up event listeners
      window.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('beforeunload', trackTimeOnPage);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('beforeunload', trackTimeOnPage);
      };
    };

    // Run all trackers
    window.addEventListener('load', trackPageLoadTime);
    trackPageView();
    const cleanup = trackEngagement();

    return () => {
      window.removeEventListener('load', trackPageLoadTime);
      cleanup?.();
    };
  }, [pathname, searchParams]);

  return null; // This component doesn't render anything
};

export default SEOTracker; 