'use client';

import { useGTM } from '@/app/hooks/useGTM';
import { useEffect } from 'react';

interface PageTrackingTemplateProps {
  pagePath: string;
  pageTitle: string;
  pageType: 'home' | 'services' | 'about' | 'contact' | 'practitioner' | 'patient' | 'custom';
  customData?: Record<string, any>;
}

const PageTrackingTemplate = ({ 
  pagePath, 
  pageTitle, 
  pageType, 
  customData = {} 
}: PageTrackingTemplateProps) => {
  const { 
    trackPageView, 
    trackCustomEvent 
  } = useGTM();

  useEffect(() => {
    // Track basic page view
    trackPageView(pagePath, pageTitle);
    
    // Track page-specific events based on page type
    switch (pageType) {
      case 'home':
        trackCustomEvent('homepage_view', {
          page_title: pageTitle,
          ...customData
        });
        break;
        
      case 'services':
        trackCustomEvent('services_page_view', {
          page_title: pageTitle,
          ...customData
        });
        break;
        
      case 'about':
        trackCustomEvent('about_page_view', {
          page_title: pageTitle,
          ...customData
        });
        break;
        
      case 'contact':
        trackCustomEvent('contact_page_view', {
          page_title: pageTitle,
          ...customData
        });
        break;
        
      case 'practitioner':
        trackCustomEvent('practitioner_page_view', {
          page_title: pageTitle,
          ...customData
        });
        break;
        
      case 'patient':
        trackCustomEvent('patient_page_view', {
          page_title: pageTitle,
          ...customData
        });
        break;
        
      case 'custom':
        trackCustomEvent('custom_page_view', {
          page_title: pageTitle,
          page_type: 'custom',
          ...customData
        });
        break;
    }
    
    console.log(`GTM: ${pageType} page tracked - ${pageTitle}`);
  }, [trackPageView, trackCustomEvent, pagePath, pageTitle, pageType, customData]);

  return null; // This component doesn't render anything
};

export default PageTrackingTemplate; 