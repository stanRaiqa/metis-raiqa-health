declare global {
  interface Window {
    dataLayer: any[];
  }
}

// Initialize dataLayer if it doesn't exist
const initDataLayer = () => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
  }
};

// Push events to GTM dataLayer
export const pushToDataLayer = (event: any) => {
  if (typeof window !== 'undefined') {
    initDataLayer();
    window.dataLayer.push(event);
  }
};

// Common GTM events for healthcare platform
export const gtmEvents = {
  // Page view tracking
  pageView: (page: string, title?: string) => {
    pushToDataLayer({
      event: 'page_view',
      page_path: page,
      page_title: title,
      platform: 'raiqa_health'
    });
  },

  // User interaction events
  buttonClick: (buttonName: string, page?: string) => {
    pushToDataLayer({
      event: 'button_click',
      button_name: buttonName,
      page_path: page || window.location.pathname,
      platform: 'raiqa_health'
    });
  },

  // Form interactions
  formStart: (formName: string, page?: string) => {
    pushToDataLayer({
      event: 'form_start',
      form_name: formName,
      page_path: page || window.location.pathname,
      platform: 'raiqa_health'
    });
  },

  formSubmit: (formName: string, page?: string) => {
    pushToDataLayer({
      event: 'form_submit',
      form_name: formName,
      page_path: page || window.location.pathname,
      platform: 'raiqa_health'
    });
  },

  // Healthcare specific events
  practitionerSearch: (specialty?: string, location?: string) => {
    pushToDataLayer({
      event: 'practitioner_search',
      specialty: specialty,
      location: location,
      platform: 'raiqa_health'
    });
  },

  appointmentBooking: (practitionerId?: string, serviceType?: string) => {
    pushToDataLayer({
      event: 'appointment_booking',
      practitioner_id: practitionerId,
      service_type: serviceType,
      platform: 'raiqa_health'
    });
  },

  serviceView: (serviceName: string, category?: string) => {
    pushToDataLayer({
      event: 'service_view',
      service_name: serviceName,
      service_category: category,
      platform: 'raiqa_health'
    });
  },

  // Conversion events
  leadGeneration: (source: string, formType: string) => {
    pushToDataLayer({
      event: 'lead_generation',
      lead_source: source,
      form_type: formType,
      platform: 'raiqa_health'
    });
  },

  // User journey events
  userRegistration: (userType: 'patient' | 'practitioner') => {
    pushToDataLayer({
      event: 'user_registration',
      user_type: userType,
      platform: 'raiqa_health'
    });
  },

  // Error tracking
  errorOccurred: (errorType: string, errorMessage?: string) => {
    pushToDataLayer({
      event: 'error_occurred',
      error_type: errorType,
      error_message: errorMessage,
      page_path: window.location.pathname,
      platform: 'raiqa_health'
    });
  }
};

// Custom event helper
export const trackCustomEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  pushToDataLayer({
    event: eventName,
    ...parameters,
    platform: 'raiqa_health',
    timestamp: new Date().toISOString()
  });
}; 