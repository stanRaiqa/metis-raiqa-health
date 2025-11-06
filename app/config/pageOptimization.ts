/**
 * Configuration file for page optimization settings
 * Controls which components are preloaded vs. lazy loaded
 */

export const pageOptimizationConfig = {
  // Components that will be preloaded (critical path)
  preload: ['homeHeroSection'],
  
  // Components that will be lazy-loaded
  lazyLoad: [
    'howItWorks',
    'servicesSection',
    'featuresSection',
    'mobileAppSection',
    'patientStories',
    'whyRaiqa',
    'faqSection',
    'bookAppointment',
    'practitionerRedirect'
  ],
  
  // Components that should not use SSR (typically below-the-fold content)
  noSSR: [
    'patientStories',
    'whyRaiqa',
    'faqSection',
    'bookAppointment',
    'practitionerRedirect'
  ],
  
  // Default image loading quality settings
  imageQuality: {
    critical: 80,  // Higher quality for above-the-fold images
    standard: 65,  // Medium quality for most images
    background: 50 // Lower quality for background elements
  }
};

export default pageOptimizationConfig; 