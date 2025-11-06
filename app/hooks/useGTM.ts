'use client';

import { useCallback } from 'react';
import { gtmEvents, trackCustomEvent as pushCustomEventToDataLayer } from '@/app/components/analytics/gtmUtils';

export const useGTM = () => {
  const trackPageView = useCallback((page: string, title?: string) => {
    gtmEvents.pageView(page, title);
  }, []);

  const trackButtonClick = useCallback((buttonName: string, page?: string) => {
    gtmEvents.buttonClick(buttonName, page);
  }, []);

  const trackFormStart = useCallback((formName: string, page?: string) => {
    gtmEvents.formStart(formName, page);
  }, []);

  const trackFormSubmit = useCallback((formName: string, page?: string) => {
    gtmEvents.formSubmit(formName, page);
  }, []);

  const trackPractitionerSearch = useCallback((specialty?: string, location?: string) => {
    gtmEvents.practitionerSearch(specialty, location);
  }, []);

  const trackAppointmentBooking = useCallback((practitionerId?: string, serviceType?: string) => {
    gtmEvents.appointmentBooking(practitionerId, serviceType);
  }, []);

  const trackServiceView = useCallback((serviceName: string, category?: string) => {
    gtmEvents.serviceView(serviceName, category);
  }, []);

  const trackLeadGeneration = useCallback((source: string, formType: string) => {
    gtmEvents.leadGeneration(source, formType);
  }, []);

  const trackUserRegistration = useCallback((userType: 'patient' | 'practitioner') => {
    gtmEvents.userRegistration(userType);
  }, []);

  const trackError = useCallback((errorType: string, errorMessage?: string) => {
    gtmEvents.errorOccurred(errorType, errorMessage);
  }, []);

  const trackCustomEvent = useCallback((eventName: string, parameters: Record<string, any> = {}) => {
    pushCustomEventToDataLayer(eventName, parameters);
  }, []);

  return {
    trackPageView,
    trackButtonClick,
    trackFormStart,
    trackFormSubmit,
    trackPractitionerSearch,
    trackAppointmentBooking,
    trackServiceView,
    trackLeadGeneration,
    trackUserRegistration,
    trackError,
    trackCustomEvent,
  };
}; 