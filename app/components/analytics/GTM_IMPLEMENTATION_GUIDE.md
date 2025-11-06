# GTM Implementation Guide for Raiqa Health

This guide shows you how to implement Google Tag Manager tracking across different pages in your application.

## 🏠 Home Page (`app/page.tsx`)

### Step 1: Import the tracker
```tsx
import HomePageTracker from '@/app/components/analytics/HomePageTracker';
```

### Step 2: Add to your component
```tsx
export default async function HomePage() {
  return (
    <ScrollParallaxProvider intensity={0.3}>
      {/* GTM Tracking */}
      <HomePageTracker />
      
      <main>
        {/* Your existing content */}
      </main>
    </ScrollParallaxProvider>
  );
}
```

## 🏥 Services Page (`app/services/page.tsx`)

### Step 1: Import the tracker
```tsx
import ServicesPageTracker from '@/app/components/analytics/ServicesPageTracker';
```

### Step 2: Add to your component
```tsx
export default async function ServicesPage() {
  return (
    <ScrollParallaxProvider intensity={0.3}>
      <ServiceContextProvider>
        {/* GTM Tracking */}
        <ServicesPageTracker pageTitle="Healthcare Services" />
        
        <main>
          {/* Your existing content */}
        </main>
      </ServiceContextProvider>
    </ScrollParallaxProvider>
  );
}
```

## 📞 Contact Page (`app/contact/page.tsx`)

### Step 1: Create a contact tracker
```tsx
// app/components/analytics/ContactPageTracker.tsx
'use client';

import { useGTM } from '@/app/hooks/useGTM';
import { useEffect } from 'react';

const ContactPageTracker = () => {
  const { trackPageView, trackCustomEvent } = useGTM();

  useEffect(() => {
    trackPageView('/contact', 'Contact Us');
    trackCustomEvent('contact_page_view', {
      page_title: 'Contact Us',
      conversion_funnel: 'contact'
    });
  }, [trackPageView, trackCustomEvent]);

  return null;
};

export default ContactPageTracker;
```

### Step 2: Add to your contact page
```tsx
import ContactPageTracker from '@/app/components/analytics/ContactPageTracker';

export default function ContactPage() {
  return (
    <>
      <ContactPageTracker />
      {/* Your contact page content */}
    </>
  );
}
```

## 👨‍⚕️ Practitioner Pages

### For practitioner-specific pages:
```tsx
// app/components/analytics/PractitionerPageTracker.tsx
'use client';

import { useGTM } from '@/app/hooks/useGTM';
import { useEffect } from 'react';

interface PractitionerPageTrackerProps {
  pageTitle: string;
  pagePath: string;
  practitionerType?: string;
}

const PractitionerPageTracker = ({ 
  pageTitle, 
  pagePath, 
  practitionerType = 'general' 
}: PractitionerPageTrackerProps) => {
  const { trackPageView, trackCustomEvent } = useGTM();

  useEffect(() => {
    trackPageView(pagePath, pageTitle);
    trackCustomEvent('practitioner_page_view', {
      page_title: pageTitle,
      practitioner_type: practitionerType,
      user_segment: 'practitioner'
    });
  }, [trackPageView, trackCustomEvent, pagePath, pageTitle, practitionerType]);

  return null;
};

export default PractitionerPageTracker;
```

## 🧪 Individual Service Pages (`app/services/[slug]/page.tsx`)

### Step 1: Create a service detail tracker
```tsx
// app/components/analytics/ServiceDetailTracker.tsx
'use client';

import { useGTM } from '@/app/hooks/useGTM';
import { useEffect } from 'react';

interface ServiceDetailTrackerProps {
  serviceName: string;
  serviceSlug: string;
  category?: string;
}

const ServiceDetailTracker = ({ 
  serviceName, 
  serviceSlug, 
  category = 'Healthcare' 
}: ServiceDetailTrackerProps) => {
  const { trackPageView, trackServiceView, trackCustomEvent } = useGTM();

  useEffect(() => {
    trackPageView(`/services/${serviceSlug}`, `${serviceName} - Services`);
    trackServiceView(serviceName, category);
    trackCustomEvent('service_detail_view', {
      service_name: serviceName,
      service_slug: serviceSlug,
      category: category,
      page_type: 'service_detail'
    });
  }, [trackPageView, trackServiceView, trackCustomEvent, serviceName, serviceSlug, category]);

  return null;
};

export default ServiceDetailTracker;
```

### Step 2: Add to your service detail page
```tsx
import ServiceDetailTracker from '@/app/components/analytics/ServiceDetailTracker';

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const serviceName = getServiceNameFromSlug(params.slug); // Your logic here
  
  return (
    <>
      <ServiceDetailTracker 
        serviceName={serviceName}
        serviceSlug={params.slug}
        category="Healthcare"
      />
      {/* Your service detail content */}
    </>
  );
}
```

## 🎯 Form Tracking

### For contact forms, booking forms, etc.:
```tsx
// In your form component
import { useGTM } from '@/app/hooks/useGTM';

const ContactForm = () => {
  const { trackFormStart, trackFormSubmit, trackLeadGeneration } = useGTM();

  const handleFormStart = () => {
    trackFormStart('contact_form', '/contact');
  };

  const handleFormSubmit = (formData: any) => {
    trackFormSubmit('contact_form', '/contact');
    trackLeadGeneration('contact_form', 'contact_page');
    
    // Track specific form data
    trackCustomEvent('contact_form_submitted', {
      form_type: 'contact',
      user_email: formData.email,
      user_name: formData.name,
      message_length: formData.message?.length || 0
    });
  };

  return (
    <form onFocus={handleFormStart} onSubmit={handleFormSubmit}>
      {/* Your form fields */}
    </form>
  );
};
```

## 🔍 Search and Filter Tracking

### For search functionality:
```tsx
const SearchComponent = () => {
  const { trackPractitionerSearch, trackCustomEvent } = useGTM();

  const handleSearch = (searchTerm: string, filters: any) => {
    trackPractitionerSearch(searchTerm, filters.location);
    trackCustomEvent('search_performed', {
      search_term: searchTerm,
      filters: filters,
      results_count: results.length
    });
  };

  return (
    <SearchInput onSearch={handleSearch} />
  );
};
```

## 🛒 Booking and Conversion Tracking

### For appointment booking:
```tsx
const BookingComponent = () => {
  const { trackAppointmentBooking, trackCustomEvent } = useGTM();

  const handleBooking = (practitionerId: string, serviceType: string, price: number) => {
    trackAppointmentBooking(practitionerId, serviceType);
    trackCustomEvent('booking_initiated', {
      practitioner_id: practitionerId,
      service_type: serviceType,
      price: price,
      booking_step: 'initiated'
    });
  };

  return (
    <button onClick={() => handleBooking('practitioner_123', 'consultation', 150)}>
      Book Appointment
    </button>
  );
};
```

## 📊 Error Tracking

### For error handling:
```tsx
const ErrorBoundary = () => {
  const { trackError } = useGTM();

  const handleError = (error: Error, errorInfo: any) => {
    trackError('react_error', error.message);
    trackCustomEvent('error_occurred', {
      error_type: 'react_error',
      error_message: error.message,
      error_stack: error.stack,
      component_stack: errorInfo.componentStack
    });
  };

  return (
    <ErrorBoundary onError={handleError}>
      {/* Your app content */}
    </ErrorBoundary>
  );
};
```

## 🎯 Button Click Tracking

### For important buttons:
```tsx
const CTAButton = () => {
  const { trackButtonClick } = useGTM();

  const handleClick = () => {
    trackButtonClick('cta_button', window.location.pathname);
    // Your button logic
  };

  return (
    <button onClick={handleClick}>
      Get Started
    </button>
  );
};
```

## 📱 Mobile App Tracking

### For mobile app downloads:
```tsx
const MobileAppSection = () => {
  const { trackButtonClick, trackCustomEvent } = useGTM();

  const handleAppDownload = (platform: 'ios' | 'android') => {
    trackButtonClick('download_app', '/mobile-app');
    trackCustomEvent('app_download_initiated', {
      platform: platform,
      download_source: 'website'
    });
  };

  return (
    <div>
      <button onClick={() => handleAppDownload('ios')}>
        Download for iOS
      </button>
      <button onClick={() => handleAppDownload('android')}>
        Download for Android
      </button>
    </div>
  );
};
```

## 🔄 Page Transition Tracking

### For SPA navigation:
```tsx
// In your layout or router
import { usePathname } from 'next/navigation';
import { useGTM } from '@/app/hooks/useGTM';

const PageTransitionTracker = () => {
  const pathname = usePathname();
  const { trackPageView } = useGTM();

  useEffect(() => {
    trackPageView(pathname, document.title);
  }, [pathname, trackPageView]);

  return null;
};
```

## 📈 Analytics Dashboard Events

### For admin/analytics pages:
```tsx
const AnalyticsPage = () => {
  const { trackCustomEvent } = useGTM();

  useEffect(() => {
    trackCustomEvent('analytics_page_view', {
      page_type: 'analytics',
      user_role: 'admin',
      dashboard_type: 'overview'
    });
  }, [trackCustomEvent]);

  return (
    <div>
      {/* Your analytics dashboard */}
    </div>
  );
};
```

## 🎯 Best Practices

1. **Consistent Naming**: Use consistent event names across your application
2. **Data Layer**: Always use the data layer for passing data to GTM
3. **Performance**: Don't overload with too many events - focus on business value
4. **Testing**: Always test in GTM Preview mode before publishing
5. **Documentation**: Keep track of all custom events and their purposes

## 🔧 Testing Your Implementation

1. **Browser Console**: Check `window.dataLayer` for events
2. **GTM Preview**: Use GTM's Preview mode to see events in real-time
3. **Development Mode**: Set `NODE_ENV=development` to see console logs
4. **Event Validation**: Verify events are firing with correct data

## 📊 GTM Container Setup

In your GTM container (`GTM-P8LRKQ2Q`), create triggers for:
- `page_view`
- `button_click`
- `form_submit`
- `practitioner_search`
- `appointment_booking`
- `service_view`
- `lead_generation`
- `user_registration`
- `error_occurred`
- `homepage_view`
- `contact_page_view`
- `practitioner_page_view`
- `service_detail_view`
- `search_performed`
- `booking_initiated`
- `app_download_initiated`
- `analytics_page_view`

This comprehensive implementation will give you detailed insights into user behavior across your healthcare platform! 