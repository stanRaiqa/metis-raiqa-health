'use client';

import { useGTM } from '@/app/hooks/useGTM';
import { useEffect } from 'react';

interface ServicesPageTrackerProps {
  pageTitle?: string;
}

const ServicesPageTracker = ({ pageTitle = 'Services Page' }: ServicesPageTrackerProps) => {
  const { trackPageView, trackServiceView } = useGTM();

  useEffect(() => {
    // Track page view when component mounts
    trackPageView('/services', pageTitle);
    
    // Track general services page view
    trackServiceView('All Services', 'Healthcare');
    
    // You can add more specific tracking here based on the page content
    console.log('GTM: Services page tracked');
  }, [trackPageView, trackServiceView, pageTitle]);

  return null; // This component doesn't render anything
};

export default ServicesPageTracker; 