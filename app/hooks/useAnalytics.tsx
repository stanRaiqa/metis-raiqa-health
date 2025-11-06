'use client';

import { useCallback } from 'react';
import { trackEvent, trackPatientEvent, trackPractitionerEvent } from '../components/analytics/GoogleAnalytics';

/**
 * Custom hook for analytics tracking in components
 * 
 * Provides easy access to tracking functions with proper types
 */
export function useAnalytics() {
  // General event tracking
  const track = useCallback((
    action: string,
    category: string,
    label?: string,
    value?: number
  ) => {
    trackEvent(action, category, label, value);
  }, []);

  // Track practitioner-related events
  const trackPractitioner = useCallback((
    action: 'view' | 'interest' | 'contact' | 'information_request',
    params?: Record<string, any>
  ) => {
    trackPractitionerEvent(action, params);
  }, []);

  // Track patient-related events
  const trackPatient = useCallback((
    action: 'view' | 'information_request' | 'contact' | 'search',
    params?: Record<string, any>
  ) => {
    trackPatientEvent(action, params);
  }, []);

  // Track content engagement
  const trackContentEngagement = useCallback((params: {
    content_type: 'how_it_works' | 'features' | 'services' | 'faq' | 'about';
    section_id?: string;
    engagement_type: 'view' | 'click' | 'scroll' | 'time_spent';
    duration?: number;
  }) => {
    trackEvent(
      'content_engagement', 
      params.content_type,
      params.section_id,
      params.duration
    );
  }, []);

  // Track search functionality when implemented
  const trackSearch = useCallback((params: {
    query?: string;
    filters?: Record<string, any>;
    results_count?: number;
    location?: string;
  }) => {
    trackPatientEvent('search', {
      ...params,
      timestamp: new Date().toISOString()
    });
  }, []);

  return {
    track,
    trackPractitioner,
    trackPatient,
    trackContentEngagement,
    trackSearch
  };
}

export default useAnalytics; 