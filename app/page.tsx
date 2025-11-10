import React from 'react';
import dynamic from 'next/dynamic';
import LoadingSpinner from '@/app/components/common/LoadingSpinner';
import { Metadata } from 'next';
import Script from 'next/script';

// Import GTM tracker
import HomePageTracker from '@/app/components/analytics/HomePageTracker';

// Create a minimal loading placeholder to reduce CLS
const SectionLoader = () => <div className="min-h-[200px] flex items-center justify-center"><LoadingSpinner size="small" className="opacity-60" /></div>;

// Configure loading priorities
// 1. Critical Path: components visible in the initial viewport (HeroSection - loaded normally)
// 2. Near Critical: components just below the fold (HowItWorks, Services) with reduced priority for mobile
// 3. Progressive Loading: using IntersectionObserver for below-fold content



// Comprehensive Australian locations data
const australianLocations = {
  majorCities: [
    'Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Gold Coast', 'Newcastle', 'Canberra', 'Hobart', 'Darwin'
  ],
  states: [
    'New South Wales', 'Victoria', 'Queensland', 'Western Australia', 'South Australia', 'Tasmania', 'Northern Territory', 'Australian Capital Territory'
  ],
  // Major regional towns and cities by state
  regionalTowns: {
    'New South Wales': [
      'Wollongong', 'Central Coast', 'Wagga Wagga', 'Albury', 'Port Macquarie', 'Tamworth', 'Orange', 'Dubbo', 'Coffs Harbour', 'Lismore',
      'Bathurst', 'Armidale', 'Goulburn', 'Queanbeyan', 'Taree', 'Ballina', 'Griffith', 'Broken Hill', 'Nowra', 'Grafton'
    ],
    'Victoria': [
      'Geelong', 'Ballarat', 'Bendigo', 'Melton', 'Mildura', 'Shepparton', 'Melton South', 'Warrnambool', 'Sunbury', 'Traralgon',
      'Wangaratta', 'Morwell', 'Wodonga', 'Ocean Grove', 'Bacchus Marsh', 'Pakenham', 'Frankston', 'Berwick', 'Cranbourne', 'Echuca'
    ],
    'Queensland': [
      'Townsville', 'Cairns', 'Toowoomba', 'Mackay', 'Rockhampton', 'Bundaberg', 'Hervey Bay', 'Gladstone', 'Maryborough', 'Mount Isa',
      'Caboolture', 'Caloundra', 'Maroochydore', 'Noosa', 'Gympie', 'Kingaroy', 'Emerald', 'Bowen', 'Ayr', 'Ingham'
    ],
    'Western Australia': [
      'Bunbury', 'Geraldton', 'Albany', 'Kalgoorlie', 'Broome', 'Port Hedland', 'Karratha', 'Busselton', 'Mandurah', 'Kwinana',
      'Rockingham', 'Joondalup', 'Armadale', 'Midland', 'Fremantle', 'Cockburn', 'Wanneroo', 'Canning Vale', 'Morley', 'Osborne Park'
    ],
    'South Australia': [
      'Mount Gambier', 'Whyalla', 'Murray Bridge', 'Port Augusta', 'Port Pirie', 'Port Lincoln', 'Gawler', 'Victor Harbor', 'Berri', 'Renmark',
      'Millicent', 'Naracoorte', 'Kadina', 'Wallaroo', 'Moonta', 'Clare', 'Peterborough', 'Port Wakefield', 'Mannum', 'Loxton'
    ],
    'Tasmania': [
      'Launceston', 'Devonport', 'Burnie', 'Ulverstone', 'Kingston', 'Sorell', 'Bridgewater', 'New Norfolk', 'Smithton', 'Wynyard',
      'George Town', 'Beauty Point', 'St Helens', 'Scottsdale', 'Deloraine', 'Westbury', 'Longford', 'Campbell Town', 'Oatlands', 'Richmond'
    ],
    'Northern Territory': [
      'Alice Springs', 'Palmerston', 'Katherine', 'Tennant Creek', 'Jabiru', 'Nhulunbuy', 'Jabiru', 'Batchelor', 'Adelaide River', 'Humpty Doo',
      'Berry Springs', 'Howard Springs', 'Girraween', 'Coolalinga', 'Humpty Doo', 'Bees Creek', 'Virginia', 'Holmes', 'Driver', 'Gray'
    ]
  },
  // Major regions and areas
  regions: {
    'New South Wales': [
      'Blue Mountains', 'Hunter Valley', 'Central Coast', 'Illawarra', 'Riverina', 'New England', 'North Coast', 'South Coast', 'Snowy Mountains', 'Outback NSW'
    ],
    'Victoria': [
      'Yarra Valley', 'Mornington Peninsula', 'Great Ocean Road', 'Gippsland', 'High Country', 'Goldfields', 'Grampians', 'Mallee', 'Wimmera', 'Bellarine Peninsula'
    ],
    'Queensland': [
      'Gold Coast Hinterland', 'Sunshine Coast Hinterland', 'Tropical North', 'Whitsundays', 'Capricorn Coast', 'Fraser Coast', 'Darling Downs', 'Outback Queensland', 'Scenic Rim', 'Moreton Bay Islands'
    ],
    'Western Australia': [
      'Margaret River', 'Kimberley', 'Pilbara', 'Great Southern', 'Wheatbelt', 'Mid West', 'Gascoyne', 'Goldfields-Esperance', 'Peel', 'South West'
    ],
    'South Australia': [
      'Barossa Valley', 'Clare Valley', 'Fleurieu Peninsula', 'Yorke Peninsula', 'Eyre Peninsula', 'Riverland', 'Limestone Coast', 'Flinders Ranges', 'Kangaroo Island', 'Murraylands'
    ],
    'Tasmania': [
      'Tasmanian Wilderness', 'East Coast', 'North West Coast', 'Huon Valley', 'Derwent Valley', 'Tamar Valley', 'Freycinet', 'Cradle Mountain', 'West Coast', 'King Island'
    ],
    'Northern Territory': [
      'Top End', 'Central Australia', 'Arnhem Land', 'Kakadu', 'Tiwi Islands', 'Barkly Tableland', 'Victoria River District', 'Gulf Country', 'Daly River', 'Litchfield'
    ]
  }
};

import { getPageMetadata } from '@/app/config/metadata';

// Import only the critical first component normally
import HeroSection from './components/HomeHeroSection';
import SubscriptionPlans from './components/layout/SubscriptionPlans';

// Optimize for mobile - use more aggressive lazy-loading strategy
// Near Critical: components just below the fold (with ssr: true for SEO)
const HomeOurServices = dynamic(
  () => import('./components/HomeOurServices'),
  { loading: () => <SectionLoader />, ssr: true }
);

const HomeHowItWorks = dynamic(
  () => import('./components/HomeHowItWorks'),
  { loading: () => <SectionLoader />, ssr: true }
);

// Components that should load only when in viewport (below fold)
const HomeAboutUs = dynamic(
  () => import('./components/HomeAboutUs'),
  { loading: () => <SectionLoader />, ssr: false }
);

const MetisBrandVideo = dynamic(
  () => import('./components/MetisBrandVideo'),
  { loading: () => <SectionLoader />, ssr: false }
);

const HomeClinicalInfo = dynamic(
  () => import('./components/HomeClinicalInfo'),
  { loading: () => <SectionLoader />, ssr: false }
);

const HomeFAQs = dynamic(
  () => import('./components/HomeFAQs'),
  { loading: () => <SectionLoader />, ssr: false }
);

const HomeGetStarted = dynamic(
  () => import('./components/HomeGetStarted'),
  { loading: () => <SectionLoader />, ssr: false }
);

const HomeContinuousCare = dynamic(
  () => import('./components/HomeContinuousCare'),
  { loading: () => <SectionLoader />, ssr: false }
);

// Generate location-specific metadata with comprehensive keywords for medical weight loss
export const metadata: Metadata = {
  ...getPageMetadata('home'),
  keywords: [
    'medical weight loss Australia',
    'doctor prescribed weight loss',
    'weight loss medication Australia',
    'online weight loss doctor',
    'prescription weight loss treatment',
    'medical weight loss program',
    'doctor supervised weight loss',
    'Metis weight loss',
    'telehealth weight loss',
    'weight management program Australia',
    'GLP-1 medication Australia',
    'doctor led weight loss',
    'weight loss prescription online',
    'medical weight loss medication',
    'weight loss doctor online Australia',
    'obesity treatment Australia',
    'medical weight management',
    'weight loss telehealth',
    'prescription weight loss pills Australia',
    'doctor weight loss program',
    ...australianLocations.majorCities.map(city => `medical weight loss ${city}`),
    ...australianLocations.states.map(state => `weight loss doctor ${state}`),
    ...australianLocations.majorCities.map(city => `weight loss medication ${city}`),
    'weight loss treatment online',
    'medical weight loss clinic',
    'online weight loss consultation',
    'weight loss doctor consultation',
    'medical weight loss telehealth',
    'weight loss program $269',
    'affordable weight loss treatment',
    'weight loss home delivery',
    'weight loss medication delivery'
  ].join(', '),
  openGraph: {
    ...getPageMetadata('home').openGraph,
    description: `Transform your health with Metis by Raiqa Health. Doctor-led medical weight loss with personalized treatment plans, prescription medication (if eligible), home delivery, and ongoing support across ${australianLocations.majorCities.join(', ')} and regional Australia. Start your journey from $269/month.`,
  },
  twitter: {
    ...getPageMetadata('home').twitter,
    description: `Transform your health with Metis by Raiqa Health. Doctor-led medical weight loss with personalized treatment plans, prescription medication (if eligible), home delivery, and ongoing support across ${australianLocations.majorCities.join(', ')} and regional Australia. Start your journey from $269/month.`,
  },
};

// Enhanced structured data for medical weight loss
const structuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Metis by Raiqa Health - Medical Weight Loss",
  "url": "https://raiqa.health",
  "description": "Doctor-led medical weight loss program with personalized treatment plans, prescription medication (if eligible), and ongoing support from licensed Australian doctors.",
  "potentialAction": [
    {
      "@type": "ViewAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://raiqa.health/#how-it-works"
      },
      "name": "How It Works"
    },
    {
      "@type": "ViewAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://raiqa.health/#subscription"
      },
      "name": "View Plans & Pricing"
    },
    {
      "@type": "RegisterAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://raiqa.health/#get-started"
      },
      "name": "Start Your Journey"
    }
  ],
  "areaServed": {
    "@type": "Country",
    "name": "Australia",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "AU"
    }
  },
  "location": [
    ...australianLocations.majorCities.map(city => ({
      "@type": "City",
      "name": city,
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "AU"
      }
    })),
    ...Object.entries(australianLocations.regionalTowns).flatMap(([state, towns]) =>
      towns.map(town => ({
        "@type": "City",
        "name": town,
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "AU",
          "addressRegion": state
        }
      }))
    )
  ],
  "serviceArea": [
    ...australianLocations.states.map(state => ({
      "@type": "State",
      "name": state,
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "AU"
      }
    })),
    ...Object.entries(australianLocations.regions).flatMap(([state, regions]) =>
      regions.map(region => ({
        "@type": "Place",
        "name": region,
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "AU",
          "addressRegion": state
        }
      }))
    )
  ]
};

// Enhanced medical weight loss business structured data
const localBusinessData = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "MedicalOrganization"],
  "name": "Metis by Raiqa Health",
  "image": "https://raiqa.health/logo.png",
  "description": "Doctor-led medical weight loss program providing personalized treatment plans, prescription medication (if eligible), home delivery, and ongoing support from licensed Australian doctors. Starting at $269/month.",
  "sameAs": [
    "https://facebook.com/raiqahealth",
    "https://twitter.com/raiqahealth",
    "https://linkedin.com/company/raiqa-health",
    "https://instagram.com/raiqahealth"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "AU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-25.2744",
    "longitude": "133.7751"
  },
  "areaServed": [
    ...australianLocations.states.map(state => ({
      "@type": "State",
      "name": state
    })),
    ...Object.entries(australianLocations.regions).flatMap(([state, regions]) =>
      regions.map(region => ({
        "@type": "Place",
        "name": region,
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "AU",
          "addressRegion": state
        }
      }))
    )
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Medical Weight Loss Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "MedicalTherapy",
          "name": "Medical Weight Loss Program",
          "description": "Comprehensive medical weight loss program with doctor-led care, personalized treatment plans, and prescription medication (if eligible)",
          "price": "269",
          "priceCurrency": "AUD",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "269",
            "priceCurrency": "AUD",
            "billingPeriod": "Month"
          }
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Online Doctor Consultation",
          "description": "Private video consultation with licensed Australian doctors for medical weight loss assessment and treatment planning"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Medication Home Delivery",
          "description": "Discreet home delivery of prescription weight loss medication with same-day delivery in metro areas and 1-3 days for regional areas"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Ongoing Support & Monthly Refills",
          "description": "Unlimited expert support, monthly doctor reviews, progress tracking, and automatic refills after medical review"
        }
      }
    ]
  },
  "provider": {
    "@type": "MedicalOrganization",
    "name": "Metis by Raiqa Health",
    "description": "Doctor-led medical weight loss program providing personalized care across Australia",
    "medicalSpecialty": "Weight Management"
  },
  "audience": [
    {
      "@type": "PatientsAudience",
      "audienceType": "Medical Weight Loss Patients",
      "description": "Individuals seeking doctor-supervised medical weight loss treatment with prescription medication and ongoing support",
      "suggestedMinAge": 18
    }
  ],
  "serviceType": [
    "Medical Weight Loss",
    "Weight Management Program",
    "Telehealth Weight Loss",
    "Prescription Weight Loss Treatment",
    "Doctor-Led Weight Loss"
  ],
  "medicalSpecialty": [
    "Weight Management",
    "Obesity Medicine",
    "Preventive Medicine",
    "Endocrinology"
  ],
  "trackingSpecification": {
    "@type": "TrackingSpecification",
    "trackingType": "GA4",
    "trackingIdentifier": "${process.env.NEXT_PUBLIC_GA_ID}"
  }
};

export default async function HomePage() {
  // Pre-fetch the hero content

  // Coming soon message for disabled features
  const ComingSoon = () => (
    <div className="py-16 px-4 bg-gray-50 text-center rounded-lg shadow-inner">
      <h3 className="text-xl font-medium text-gray-800">Coming Soon</h3>
      <p className="mt-2 text-gray-600">This feature will be available in upcoming versions.</p>
    </div>
  );

  return (
    <React.Fragment>
      {/* GTM Tracking */}
      <HomePageTracker />

      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Script
        id="local-business-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />

      {/* Version indicator in development environment */}
      {/*{process.env.NODE_ENV === 'development' && (*/}
      {/*  <div className="fixed top-24 right-4 z-50">*/}
      {/*    <VersionIndicator showFullText={true} />*/}
      {/*  </div>*/}
      {/*)}*/}

      {/* Main Content - Add pt-20 to account for fixed navbar height (80px) */}
      <main className="pt-20">
        <HeroSection />
        <HomeOurServices />
        <HomeAboutUs />
        <HomeHowItWorks />
        <MetisBrandVideo />
        <SubscriptionPlans/>
        <HomeContinuousCare/>
        <HomeClinicalInfo/>
        <HomeFAQs/>
        <HomeGetStarted/>
      </main>

    </React.Fragment>
  );
}
