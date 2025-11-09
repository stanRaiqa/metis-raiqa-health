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

// Generate location-specific metadata with comprehensive keywords
export const metadata: Metadata = {
  ...getPageMetadata('home'),
  keywords: [
    'healthcare marketplace Australia',
    'healthcare platform like HotDoc',
    'medical marketplace platform',
    'healthcare practitioner marketplace',
    'doctor booking platform',
    'healthcare service marketplace',
    'medical practitioner marketplace',
    'healthcare booking marketplace',
    'healthcare marketplace platform',
    'medical service marketplace',
    ...australianLocations.majorCities.map(city => `healthcare marketplace ${city}`),
    ...Object.values(australianLocations.regionalTowns).flat().map(town => `healthcare marketplace ${town}`),
    ...Object.values(australianLocations.regions).flat().map(region => `healthcare marketplace ${region}`),
    'healthcare practitioner platform',
    'medical service platform',
    'healthcare marketplace like Airtasker',
    'healthcare booking like HotDoc',
    'online medical marketplace',
    'healthcare service platform',
    'medical practitioner platform',
    'healthcare marketplace for practitioners',
    'healthcare marketplace for patients'
  ].join(', '),
  openGraph: {
    ...getPageMetadata('home').openGraph,
    description: `Join Australia's leading healthcare marketplace platform. Healthcare practitioners can list their services and patients can book appointments instantly across ${australianLocations.majorCities.join(', ')} and regional areas. Similar to HotDoc and InstantScripts, but with a marketplace model like Airtasker.`,
  },
  twitter: {
    ...getPageMetadata('home').twitter,
    description: `Join Australia's leading healthcare marketplace platform. Healthcare practitioners can list their services and patients can book appointments instantly across ${australianLocations.majorCities.join(', ')} and regional areas. Similar to HotDoc and InstantScripts, but with a marketplace model like Airtasker.`,
  },
};

// Enhanced structured data with analytics tracking integration
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Raiqa Health",
  "url": "https://raiqa.health",
  "potentialAction": [
    {
      "@type": "SearchAction",
      "target": "https://raiqa.health/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    {
      "@type": "ViewAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://raiqa.health/practitioners"
      },
      "name": "For Practitioners"
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

// Enhanced marketplace business structured data with trackingSpecification
const localBusinessData = {
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "Service"],
  "name": "Raiqa Health",
  "image": "https://raiqa.health/logo.png",
  "description": "Australia's leading healthcare marketplace platform connecting healthcare practitioners with patients. Similar to HotDoc and InstantScripts, but with a marketplace model like Airtasker.",
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
    "name": "Healthcare Marketplace Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Healthcare Practitioner Marketplace",
          "description": "Join our marketplace to list your healthcare services and connect with patients across Australia"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Patient Booking Platform",
          "description": "Book appointments with healthcare practitioners across Australia, including major cities, regional towns, and remote areas"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Healthcare Service Marketplace",
          "description": "Find and book healthcare services from verified practitioners across Australia"
        }
      }
    ]
  },
  "provider": {
    "@type": "Organization",
    "name": "Raiqa Health",
    "description": "Healthcare marketplace platform connecting practitioners and patients across Australia"
  },
  "audience": [
    {
      "@type": "Audience",
      "audienceType": "Healthcare Practitioners",
      "description": "Medical professionals looking to list their services and connect with patients"
    },
    {
      "@type": "Audience",
      "audienceType": "Patients",
      "description": "People seeking healthcare services and appointments across Australia"
    }
  ],
  "serviceType": [
    "Healthcare Marketplace",
    "Medical Booking Platform",
    "Practitioner Directory",
    "Healthcare Service Platform"
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
