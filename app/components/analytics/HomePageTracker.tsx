'use client';

import { useGTM } from '@/app/hooks/useGTM';
import { useEffect } from 'react';

const HomePageTracker = () => {
  const { trackPageView, trackCustomEvent } = useGTM();

  useEffect(() => {
    // Track homepage view
    trackPageView('/', 'Raiqa Health - Home');
    
    // Track homepage-specific events
    trackCustomEvent('homepage_view', {
      page_title: 'Raiqa Health - Home',
      platform: 'raiqa_health',
      user_journey: 'landing'
    });
    
    console.log('GTM: Homepage tracked');
  }, [trackPageView, trackCustomEvent]);

  return null; // This component doesn't render anything
};

export default HomePageTracker; 