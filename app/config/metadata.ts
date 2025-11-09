import { Metadata } from 'next';

// Base metadata configuration
const baseMetadata: Metadata = {
  metadataBase: new URL('https://raiqa.health'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  other: {
    'geo.region': 'AU',
    'geo.placename': 'Australia',
    'geo.position': '-25.2744;133.7751',
    'ICBM': '-25.2744, 133.7751',
  }
};

// Page-specific metadata configurations
export const pageMetadata: Record<string, Metadata> = {
  // Home page
  home: {
    title: 'Metis - Medical Weight Loss, Made Simple | Doctor-Led Care from $269/month',
    description: 'Personalized medical weight loss treatment with doctor-led care, prescription medication delivery, and ongoing support from licensed Australian doctors. Start your transformation from $269/month. No diets. No confusion. Just real results.',
    keywords: 'medical weight loss Australia, doctor prescribed weight loss, weight loss medication Australia, online weight loss doctor, prescription weight loss treatment, medical weight loss program, doctor supervised weight loss, Metis weight loss, telehealth weight loss, weight management program Australia, GLP-1 medication Australia, doctor led weight loss',
    openGraph: {
      title: 'Metis - Medical Weight Loss Made Simple | From $269/month',
      description: 'Doctor-led medical weight loss with personalized treatment plans, prescription medication (if eligible), home delivery, and ongoing support. Transform your health with science-backed care across Australia.',
      url: 'https://raiqa.health',
      siteName: 'Metis by Raiqa Health',
      images: [
        {
          url: 'https://raiqa.health/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Metis - Medical Weight Loss, Made Simple | Doctor-Led Care',
        },
      ],
      locale: 'en_AU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Metis - Medical Weight Loss Made Simple | Doctor-Led Care',
      description: 'Personalized treatment, doctor-led care, and real results starting at $269/month. No diets. No confusion. Just medical care designed around you with licensed Australian doctors.',
      images: ['https://raiqa.health/og-image.png'],
    },
  },

  // About Us page
  about: {
    title: 'AHPRA Compliant Telehealth platform for  GPs, Specialist, Alliedhealth',
    description: 'Join Raiqahealth to connect with a community of GP, specialists and experience practitioner centric digital health platform offering secured telehealth services.',
    keywords: 'about raiqa health practitioner, healthcare practitioner mission, medical practitioner support, healthcare transformation, practitioner platform',
    openGraph: {
      title: 'AHPRA Compliant Telehealth platform for  GPs, Specialist, Alliedhealth',
      description: 'Join Raiqahealth to connect with a community of GP, specialists and experience practitioner centric digital health platform offering secured telehealth services.',
      url: 'https://raiqa.health/about-us',
      siteName: 'Raiqa Health',
      images: [
        {
          url: 'https://raiqa.health/og-image.png',
          width: 1200,
          height: 630,
          alt: 'About Raiqa Health',
        },
      ],
      locale: 'en_AU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About Us - Raiqa Health | Our Mission to Transform Healthcare',
      description: 'Learn about Raiqa Health\'s mission to transform healthcare in Australia.',
      images: ['https://raiqa.health/og-image.png'],
    },
  },

  // Contact page
  contact: {
    title: 'Book a GP Appointment Online Easily with Raiqa Health',
    description: 'Book a GP appointment online through RaiqaHealth’s virtual care platform in Australia and access quality healthcare from the comfort of your home.',
    keywords: 'contact Raiqa Health, healthcare support, healthcare partnerships, healthcare inquiries',
    openGraph: {
      title: 'Book a GP Appointment Online Easily with Raiqa Health',
      description: 'Book a GP appointment online through RaiqaHealth’s virtual care platform in Australia and access quality healthcare from the comfort of your home.',
      url: 'https://raiqa.health/contact',
      siteName: 'Raiqa Health',
      images: [
        {
          url: 'https://raiqa.health/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Contact Raiqa Health',
        },
      ],
      locale: 'en_AU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Contact Us - Raiqa Health | Get in Touch',
      description: 'Contact Raiqa Health for support, partnerships, or inquiries.',
      images: ['https://raiqa.health/og-image.png'],
    },
  },

  // Services page
  services: {
    title: 'Comprehensive Digital Healthcare for everyone in Australia',
    description: 'Access expert GP-led care from home with our telehealth platform, covering women’s health, mental health, weight loss, sexual health, skin and oral care.',
    keywords: 'healthcare services, medical services, doctor appointments, healthcare practitioners, medical appointments',
    openGraph: {
      title: 'Comprehensive Digital Healthcare for everyone in Australia',
      description: 'Access expert GP-led care from home with our telehealth platform, covering women’s health, mental health, weight loss, sexual health, skin and oral care.',
      url: 'https://raiqa.health/services',
      siteName: 'Raiqa Health',
      images: [
        {
          url: 'https://raiqa.health/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Healthcare Services',
        },
      ],
      locale: 'en_AU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Healthcare Services - Raiqa Health | Find Medical Services Near You',
      description: 'Discover comprehensive healthcare services available through Raiqa Health.',
      images: ['https://raiqa.health/og-image.png'],
    },
  },

  // Practitioner page
  practitioner: {
    title: 'High Burnout rates drive GPs, specialist to join telehealth.',
    description: 'Raiqa telehealth offer data secured, AHPRA compliant digital healthcare platform for practitioner to practice with a good practice management software.',
    keywords: 'healthcare practitioners, medical practitioners, join healthcare marketplace, healthcare platform, medical services listing',
    openGraph: {
      title: 'High Burnout rates drive GPs, specialist to join telehealth.',
      description: 'Raiqa telehealth offer data secured, AHPRA compliant digital healthcare platform for practitioner to practice with a good practice management software.',
      url: 'https://raiqa.health/practitioner',
      siteName: 'Raiqa Health',
      images: [
        {
          url: 'https://raiqa.health/og-image.png',
          width: 1200,
          height: 630,
          alt: 'For Healthcare Practitioners',
        },
      ],
      locale: 'en_AU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'For Healthcare Practitioners - Raiqa Health | Join Our Marketplace',
      description: 'Join Raiqa Health\'s healthcare marketplace as a practitioner.',
      images: ['https://raiqa.health/og-image.png'],
    },
  },

  // How it works page
  howItWorks: {
    title: 'RaiqaAI | Telehealth consultation from anywhere, anytime.',
    description: 'RaiqaHealth provides telehealth across Australia with trusted AHPRA-compliant GPs. Our AI symptom matcher connects you to the right GP from home.',
    keywords: 'how Raiqa Health works, healthcare booking process, medical appointment booking, healthcare platform process',
    openGraph: {
      title: 'RaiqaAI | Telehealth consultation from anywhere, anytime.',
      description: 'RaiqaHealth provides telehealth across Australia with trusted AHPRA-compliant GPs. Our AI symptom matcher connects you to the right GP from home.',
      url: 'https://raiqa.health/how-it-works',
      siteName: 'Raiqa Health',
      images: [
        {
          url: 'https://raiqa.health/og-image.png',
          width: 1200,
          height: 630,
          alt: 'How Raiqa Health Works',
        },
      ],
      locale: 'en_AU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'How It Works - Raiqa Health | Simple Healthcare Booking Process',
      description: 'Learn how Raiqa Health works. Our simple process connects healthcare practitioners with patients.',
      images: ['https://raiqa.health/og-image.png'],
    },
  },

  // Help center page
  helpCenter: {
    title: 'How RaiqaAI transforms Patient healthcare & Consultations',
    description: 'RaiqaHealth makes it simple to book telehealth appointments and online GP consultations, giving you easy access to quality care from the comfort of your home.',
    keywords: 'Raiqa Health help, healthcare platform support, medical booking help, healthcare FAQ',
    openGraph: {
      title: 'How RaiqaAI transforms Patient healthcare & Consultations',
      description: 'RaiqaHealth makes it simple to book telehealth appointments and online GP consultations, giving you easy access to quality care from the comfort of your home.',
      url: 'https://raiqa.health/help-center',
      siteName: 'Raiqa Health',
      images: [
        {
          url: 'https://raiqa.health/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Help Center',
        },
      ],
      locale: 'en_AU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Help Center - Raiqa Health | Support & Resources',
      description: 'Get help and support from Raiqa Health. Find answers to frequently asked questions.',
      images: ['https://raiqa.health/og-image.png'],
    },
  },

  // Privacy policy page
  privacy: {
    title: 'Raiqa Telehealth | Secured data and patient privacy is maintained',
    description: 'Raiqahealth protects the patient and practitioner data completely. Come and avail first 200 FREE consultation for patients for limited time period.',
    keywords: 'Raiqa Health privacy policy, healthcare privacy, medical data protection, privacy protection',
    openGraph: {
      title: 'Raiqa Telehealth | Secured data and patient privacy is maintained',
      description: 'Raiqahealth protects the patient and practitioner data completely. Come and avail first 200 FREE consultation for patients for limited time period.',
      url: 'https://raiqa.health/privacy-policy',
      siteName: 'Raiqa Health',
      images: [
        {
          url: 'https://raiqa.health/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Privacy Policy',
        },
      ],
      locale: 'en_AU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Privacy Policy - Raiqa Health | Your Privacy Matters',
      description: 'Read Raiqa Health\'s privacy policy to understand how we protect your personal information.',
      images: ['https://raiqa.health/og-image.png'],
    },
  },

  // Terms page
  terms: {
    title: 'Terms of Service - Raiqa Health | Platform Terms & Conditions',
    description: 'Review Raiqa Health\'s terms of service to understand the conditions for using our healthcare marketplace platform.',
    keywords: 'Raiqa Health terms, healthcare platform terms, medical marketplace terms, terms of service',
    openGraph: {
      title: 'Terms of Service - Raiqa Health | Platform Terms & Conditions',
      description: 'Review Raiqa Health\'s terms of service to understand the conditions for using our healthcare marketplace platform.',
      url: 'https://raiqa.health/terms',
      siteName: 'Raiqa Health',
      images: [
        {
          url: 'https://raiqa.health/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Terms of Service',
        },
      ],
      locale: 'en_AU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Terms of Service - Raiqa Health | Platform Terms & Conditions',
      description: 'Review Raiqa Health\'s terms of service to understand the conditions for using our platform.',
      images: ['https://raiqa.health/og-image.png'],
    },
  },

  // Cookies page
  cookies: {
    title: 'Cookie Policy - Raiqa Health | How We Use Cookies',
    description: 'Learn about Raiqa Health\'s cookie policy and how we use cookies to improve your experience on our healthcare platform.',
    keywords: 'Raiqa Health cookies, healthcare platform cookies, cookie policy, website cookies',
    openGraph: {
      title: 'Cookie Policy - Raiqa Health | How We Use Cookies',
      description: 'Learn about Raiqa Health\'s cookie policy and how we use cookies to improve your experience on our healthcare platform.',
      url: 'https://raiqa.health/cookies',
      siteName: 'Raiqa Health',
      images: [
        {
          url: 'https://raiqa.health/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Cookie Policy',
        },
      ],
      locale: 'en_AU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Cookie Policy - Raiqa Health | How We Use Cookies',
      description: 'Learn about Raiqa Health\'s cookie policy and how we use cookies.',
      images: ['https://raiqa.health/og-image.png'],
    },
  },

  // Posts page
  posts: {
    title: 'Raiqa Health Blogs on Women’s, Men’s, Mental & Sexual Health',
    description: 'Explore Raiqa Health blogs on women’s health, men’s health, mental health, and sexual health. Get trusted insights and guidance tailored to patient needs',
    keywords: 'healthcare posts, medical content, health updates, medical posts, healthcare news',
    openGraph: {
      title: 'Raiqa Health Blogs on Women’s, Men’s, Mental & Sexual Health',
      description: 'Explore Raiqa Health blogs on women’s health, men’s health, mental health, and sexual health. Get trusted insights and guidance tailored to patient needs',
      url: 'https://raiqa.health/posts',
      siteName: 'Raiqa Health',
      images: [
        {
          url: 'https://raiqa.health/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Healthcare Posts',
        },
      ],
      locale: 'en_AU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Healthcare Posts - Raiqa Health | Latest Medical Content',
      description: 'Discover the latest healthcare posts and medical content from Raiqa Health.',
      images: ['https://raiqa.health/og-image.png'],
    },
  },

  // Assistant page
  assistant: {
    title: 'Transforming Care: Voice Assistant as Your AI Health Agent',
    description: 'Raiqa’s voice assistant matches your symptoms with the right practitioner and books your appointment instantly - fast, accurate, and fully secure.',
    keywords: 'AI healthcare assistant, medical AI, healthcare chatbot, medical guidance, healthcare support',
    openGraph: {
      title: 'Transforming Care: Voice Assistant as Your AI Health Agent',
      description: 'Raiqa’s voice assistant matches your symptoms with the right practitioner and books your appointment instantly - fast, accurate, and fully secure.',
      url: 'https://raiqa.health/assistant',
      siteName: 'Raiqa Health',
      images: [
        {
          url: 'https://raiqa.health/og-image.png',
          width: 1200,
          height: 630,
          alt: 'AI Healthcare Assistant',
        },
      ],
      locale: 'en_AU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'AI Healthcare Assistant - Raiqa Health | Smart Medical Support',
      description: 'Experience Raiqa Health\'s AI-powered healthcare assistant.',
      images: ['https://raiqa.health/og-image.png'],
    },
  },

  // Blog page
  blog: {
    title: 'Healthcare Blog - Raiqa Health | Medical Insights & News',
    description: 'Read the latest healthcare insights, medical news, and health tips from Raiqa Health. Stay informed about healthcare trends and best practices.',
    keywords: 'healthcare blog, medical insights, health news, medical tips, healthcare articles',
    openGraph: {
      title: 'Healthcare Blog - Raiqa Health | Medical Insights & News',
      description: 'Read the latest healthcare insights, medical news, and health tips from Raiqa Health. Stay informed about healthcare trends and best practices.',
      url: 'https://raiqa.health/blog',
      siteName: 'Raiqa Health',
      images: [
        {
          url: 'https://raiqa.health/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Healthcare Blog',
        },
      ],
      locale: 'en_AU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Healthcare Blog - Raiqa Health | Medical Insights & News',
      description: 'Read the latest healthcare insights, medical news, and health tips from Raiqa Health.',
      images: ['https://raiqa.health/og-image.png'],
    },
  },

  // Articles page
  articles: {
    title: 'Healthcare Articles - Raiqa Health | Medical Resources',
    description: 'Explore comprehensive healthcare articles and medical resources from Raiqa Health. Find expert insights on various health topics and conditions.',
    keywords: 'healthcare articles, medical resources, health information, medical insights, healthcare education',
    openGraph: {
      title: 'Healthcare Articles - Raiqa Health | Medical Resources',
      description: 'Explore comprehensive healthcare articles and medical resources from Raiqa Health. Find expert insights on various health topics and conditions.',
      url: 'https://raiqa.health/articles',
      siteName: 'Raiqa Health',
      images: [
        {
          url: 'https://raiqa.health/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Healthcare Articles',
        },
      ],
      locale: 'en_AU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Healthcare Articles - Raiqa Health | Medical Resources',
      description: 'Explore comprehensive healthcare articles and medical resources from Raiqa Health.',
      images: ['https://raiqa.health/og-image.png'],
    },
  },

  // Practitioner AI Assistants page
  practitionerAiAssistants: {
    title: 'AI Assistants for Healthcare Practitioners - Raiqa Health | Smart Medical Tools',
    description: 'Discover AI-powered assistants designed specifically for healthcare practitioners. Streamline your practice with intelligent tools for clinical support, patient management, and administrative tasks.',
    keywords: 'AI assistants for healthcare practitioners, medical AI tools, clinical AI support, healthcare practitioner AI, medical practice automation',
    openGraph: {
      title: 'AI Assistants for Healthcare Practitioners - Raiqa Health | Smart Medical Tools',
      description: 'Discover AI-powered assistants designed specifically for healthcare practitioners. Streamline your practice with intelligent tools for clinical support, patient management, and administrative tasks.',
      url: 'https://raiqa.health/practitioner/ai-assistants',
      siteName: 'Raiqa Health',
      images: [
        {
          url: 'https://raiqa.health/og-image.png',
          width: 1200,
          height: 630,
          alt: 'AI Assistants for Healthcare Practitioners',
        },
      ],
      locale: 'en_AU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'AI Assistants for Healthcare Practitioners - Raiqa Health | Smart Medical Tools',
      description: 'Discover AI-powered assistants designed specifically for healthcare practitioners.',
      images: ['https://raiqa.health/og-image.png'],
    },
  },

  // Practitioner Clinical Assistant page
  practitionerClinicalAssistant: {
    title: 'How Clinical Assistants Support Doctors with Real-Time Care',
    description: 'Discover how a clinical assistant helps doctors with documentation, decision support, and patient insights in real time for better care delivery.',
    keywords: 'clinical assistant healthcare, medical AI clinical support, healthcare practitioner clinical tools, medical decision support, clinical AI assistant',
    openGraph: {
      title: 'How Clinical Assistants Support Doctors with Real-Time Care',
      description: 'Discover how a clinical assistant helps doctors with documentation, decision support, and patient insights in real time for better care delivery.',
      url: 'https://raiqa.health/practitioner/clinical-assistant',
      siteName: 'Raiqa Health',
      images: [
        {
          url: 'https://raiqa.health/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Clinical Assistant for Healthcare Practitioners',
        },
      ],
      locale: 'en_AU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Clinical Assistant for Healthcare Practitioners - Raiqa Health | Clinical Support AI',
      description: 'Enhance your clinical practice with our AI-powered clinical assistant.',
      images: ['https://raiqa.health/og-image.png'],
    },
  },

  // Practitioner Knowledge Assistant page
  practitionerKnowledgeAssistant: {
    title: 'How Knowledge Assistants Help GPs Access Data Instantly',
    description: 'Learn how a knowledge assistant helps GPs access clinical guidelines, research, and protocols instantly to make faster, clearer care decisions.',
    keywords: 'knowledge assistant healthcare, medical knowledge AI, healthcare practitioner knowledge tools, medical research assistant, healthcare knowledge base',
    openGraph: {
      title: 'How Knowledge Assistants Help GPs Access Data Instantly',
      description: 'Learn how a knowledge assistant helps GPs access clinical guidelines, research, and protocols instantly to make faster, clearer care decisions.',
      url: 'https://raiqa.health/practitioner/knowledge-assistant',
      siteName: 'Raiqa Health',
      images: [
        {
          url: 'https://raiqa.health/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Knowledge Assistant for Healthcare Practitioners',
        },
      ],
      locale: 'en_AU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Knowledge Assistant for Healthcare Practitioners - Raiqa Health | Medical Knowledge AI',
      description: 'Access comprehensive medical knowledge and research with our AI-powered knowledge assistant.',
      images: ['https://raiqa.health/og-image.png'],
    },
  },

  // Practitioner Receptionist page
  practitionerReceptionist: {
    title: 'How Virtual Receptionists Help GPs Manage Admin & Care',
    description: 'Discover how a virtual receptionist helps GPs reduce admin work, streamline patient care, manage bookings, and improve practice efficiency.',
    keywords: 'AI receptionist healthcare, virtual medical receptionist, healthcare practitioner receptionist, medical practice automation, AI patient scheduling',
    openGraph: {
      title: 'How Virtual Receptionists Help GPs Manage Admin & Care',
      description: 'Discover how a virtual receptionist helps GPs reduce admin work, streamline patient care, manage bookings, and improve practice efficiency.',
      url: 'https://raiqa.health/practitioner/receptionist',
      siteName: 'Raiqa Health',
      images: [
        {
          url: 'https://raiqa.health/og-image.png',
          width: 1200,
          height: 630,
          alt: 'AI Receptionist for Healthcare Practitioners',
        },
      ],
      locale: 'en_AU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'AI Receptionist for Healthcare Practitioners - Raiqa Health | Virtual Medical Receptionist',
      description: 'Transform your practice with our AI-powered virtual receptionist.',
      images: ['https://raiqa.health/og-image.png'],
    },
  },

  // Practitioner Supervisor page
  practitionerSupervisor: {
    title: 'AI Supervisor for Healthcare Practitioners - Raiqa Health | Practice Management AI',
    description: 'Optimize your healthcare practice with our AI supervisor. Monitor performance, manage workflows, and improve patient care outcomes.',
    keywords: 'AI supervisor healthcare, practice management AI, healthcare practitioner supervisor, medical practice optimization, healthcare workflow management',
    openGraph: {
      title: 'AI Supervisor for Healthcare Practitioners - Raiqa Health | Practice Management AI',
      description: 'Optimize your healthcare practice with our AI supervisor. Monitor performance, manage workflows, and improve patient care outcomes.',
      url: 'https://raiqa.health/practitioner/supervisor',
      siteName: 'Raiqa Health',
      images: [
        {
          url: 'https://raiqa.health/og-image.png',
          width: 1200,
          height: 630,
          alt: 'AI Supervisor for Healthcare Practitioners',
        },
      ],
      locale: 'en_AU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'AI Supervisor for Healthcare Practitioners - Raiqa Health | Practice Management AI',
      description: 'Optimize your healthcare practice with our AI supervisor.',
      images: ['https://raiqa.health/og-image.png'],
    },
  },

  // Practitioner My Raiqa page
  practitionerMyRaiqa: {
    title: 'My Raiqa - Healthcare Practitioner Dashboard - Raiqa Health | Practice Management',
    description: 'Access your personalized Raiqa Health dashboard. Manage your practice, view analytics, and optimize your healthcare services.',
    keywords: 'my raiqa healthcare, practitioner dashboard, healthcare practice management, medical practice analytics, healthcare practitioner portal',
    openGraph: {
      title: 'My Raiqa - Healthcare Practitioner Dashboard - Raiqa Health | Practice Management',
      description: 'Access your personalized Raiqa Health dashboard. Manage your practice, view analytics, and optimize your healthcare services.',
      url: 'https://raiqa.health/practitioner/my-raiqa',
      siteName: 'Raiqa Health',
      images: [
        {
          url: 'https://raiqa.health/og-image.png',
          width: 1200,
          height: 630,
          alt: 'My Raiqa - Healthcare Practitioner Dashboard',
        },
      ],
      locale: 'en_AU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'My Raiqa - Healthcare Practitioner Dashboard - Raiqa Health | Practice Management',
      description: 'Access your personalized Raiqa Health dashboard.',
      images: ['https://raiqa.health/og-image.png'],
    },
  },

  // Practitioner Resources page
  practitionerResources: {
    title: 'Healthcare Practitioner Resources - Raiqa Health | Medical Practice Resources',
    description: 'Access comprehensive resources for healthcare practitioners. Find guides, tools, and support to enhance your medical practice.',
    keywords: 'healthcare practitioner resources, medical practice resources, healthcare guides, medical tools, practitioner support',
    openGraph: {
      title: 'Healthcare Practitioner Resources - Raiqa Health | Medical Practice Resources',
      description: 'Access comprehensive resources for healthcare practitioners. Find guides, tools, and support to enhance your medical practice.',
      url: 'https://raiqa.health/practitioner/resources',
      siteName: 'Raiqa Health',
      images: [
        {
          url: 'https://raiqa.health/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Healthcare Practitioner Resources',
        },
      ],
      locale: 'en_AU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Healthcare Practitioner Resources - Raiqa Health | Medical Practice Resources',
      description: 'Access comprehensive resources for healthcare practitioners.',
      images: ['https://raiqa.health/og-image.png'],
    },
  },

  // Practitioner Join page
  practitionerJoin: {
    title: 'Join Raiqa Health as a Healthcare Practitioner - Raiqa Health | Practitioner Registration',
    description: 'Join Raiqa Health\'s healthcare marketplace as a practitioner. Start listing your services and connecting with patients across Australia.',
    keywords: 'join raiqa health practitioner, healthcare practitioner registration, medical practitioner signup, healthcare marketplace join, practitioner onboarding',
    openGraph: {
      title: 'Join Raiqa Health as a Healthcare Practitioner - Raiqa Health | Practitioner Registration',
      description: 'Join Raiqa Health\'s healthcare marketplace as a practitioner. Start listing your services and connecting with patients across Australia.',
      url: 'https://raiqa.health/practitioner/join',
      siteName: 'Raiqa Health',
      images: [
        {
          url: 'https://raiqa.health/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Join Raiqa Health as a Healthcare Practitioner',
        },
      ],
      locale: 'en_AU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Join Raiqa Health as a Healthcare Practitioner - Raiqa Health | Practitioner Registration',
      description: 'Join Raiqa Health\'s healthcare marketplace as a practitioner.',
      images: ['https://raiqa.health/og-image.png'],
    },
  },

  // Practitioner Connect page
  practitionerConnect: {
    title: 'Connect with Raiqa Health - Healthcare Practitioner Support - Raiqa Health',
    description: 'Connect with Raiqa Health for practitioner support, partnerships, and collaboration opportunities. Get in touch with our healthcare team.',
    keywords: 'connect raiqa health practitioner, healthcare practitioner support, medical practitioner partnership, healthcare collaboration, practitioner contact',
    openGraph: {
      title: 'Connect with Raiqa Health - Healthcare Practitioner Support - Raiqa Health',
      description: 'Connect with Raiqa Health for practitioner support, partnerships, and collaboration opportunities. Get in touch with our healthcare team.',
      url: 'https://raiqa.health/practitioner/connect',
      siteName: 'Raiqa Health',
      images: [
        {
          url: 'https://raiqa.health/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Connect with Raiqa Health - Healthcare Practitioner Support',
        },
      ],
      locale: 'en_AU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Connect with Raiqa Health - Healthcare Practitioner Support - Raiqa Health',
      description: 'Connect with Raiqa Health for practitioner support, partnerships, and collaboration opportunities.',
      images: ['https://raiqa.health/og-image.png'],
    },
  },

  // Practitioner Contact page
  practitionerContact: {
    title: 'Contact Raiqa Health - Healthcare Practitioner Support - Raiqa Health',
    description: 'Contact Raiqa Health for healthcare practitioner support, inquiries, and assistance. Our team is here to help you succeed.',
    keywords: 'contact raiqa health practitioner, healthcare practitioner support, medical practitioner contact, healthcare inquiries, practitioner assistance',
    openGraph: {
      title: 'Contact Raiqa Health - Healthcare Practitioner Support - Raiqa Health',
      description: 'Contact Raiqa Health for healthcare practitioner support, inquiries, and assistance. Our team is here to help you succeed.',
      url: 'https://raiqa.health/practitioner/contact',
      siteName: 'Raiqa Health',
      images: [
        {
          url: 'https://raiqa.health/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Contact Raiqa Health - Healthcare Practitioner Support',
        },
      ],
      locale: 'en_AU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Contact Raiqa Health - Healthcare Practitioner Support - Raiqa Health',
      description: 'Contact Raiqa Health for healthcare practitioner support, inquiries, and assistance.',
      images: ['https://raiqa.health/og-image.png'],
    },
  },

  // Practitioner About Us page
  practitionerAboutUs: {
    title: 'AHPRA Compliant Telehealth platform for  GPs, Specialist, Alliedhealth',
    description: 'Join Raiqahealth to connect with a community of GP, specialists and experience practitioner centric digital health platform offering secured telehealth services.',
    keywords: 'about raiqa health practitioner, healthcare practitioner mission, medical practitioner support, healthcare transformation, practitioner platform',
    openGraph: {
      title: 'AHPRA Compliant Telehealth platform for  GPs, Specialist, Alliedhealth',
      description: 'Join Raiqahealth to connect with a community of GP, specialists and experience practitioner centric digital health platform offering secured telehealth services.',
      url: 'https://raiqa.health/practitioner/about-us',
      siteName: 'Raiqa Health',
      images: [
        {
          url: 'https://raiqa.health/og-image.png',
          width: 1200,
          height: 630,
          alt: 'About Raiqa Health for Healthcare Practitioners',
        },
      ],
      locale: 'en_AU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About Raiqa Health for Healthcare Practitioners - Raiqa Health | Our Mission',
      description: 'Learn about Raiqa Health\'s mission to support healthcare practitioners.',
      images: ['https://raiqa.health/og-image.png'],
    },
  },

  // Practitioner Assistant page
  practitionerAssistant: {
    title: 'AI Assistant for Healthcare Practitioners - Raiqa Health | Medical Practice AI',
    description: 'Enhance your healthcare practice with our comprehensive AI assistant. Get intelligent support for clinical tasks, patient management, and practice optimization.',
    keywords: 'AI assistant healthcare practitioner, medical practice AI, healthcare practitioner assistant, medical AI support, practice optimization AI',
    openGraph: {
      title: 'AI Assistant for Healthcare Practitioners - Raiqa Health | Medical Practice AI',
      description: 'Enhance your healthcare practice with our comprehensive AI assistant. Get intelligent support for clinical tasks, patient management, and practice optimization.',
      url: 'https://raiqa.health/practitioner/assistant',
      siteName: 'Raiqa Health',
      images: [
        {
          url: 'https://raiqa.health/og-image.png',
          width: 1200,
          height: 630,
          alt: 'AI Assistant for Healthcare Practitioners',
        },
      ],
      locale: 'en_AU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'AI Assistant for Healthcare Practitioners - Raiqa Health | Medical Practice AI',
      description: 'Enhance your healthcare practice with our comprehensive AI assistant.',
      images: ['https://raiqa.health/og-image.png'],
    },
  },

  // Practitioner General page
  practitionerGeneral: {
    title: 'General Information for Healthcare Practitioners - Raiqa Health | Practitioner Guide',
    description: 'Access general information and resources for healthcare practitioners. Learn about our platform, services, and how to optimize your practice.',
    keywords: 'general information healthcare practitioner, medical practitioner guide, healthcare platform information, practitioner resources, medical practice guide',
    openGraph: {
      title: 'General Information for Healthcare Practitioners - Raiqa Health | Practitioner Guide',
      description: 'Access general information and resources for healthcare practitioners. Learn about our platform, services, and how to optimize your practice.',
      url: 'https://raiqa.health/practitioner/general',
      siteName: 'Raiqa Health',
      images: [
        {
          url: 'https://raiqa.health/og-image.png',
          width: 1200,
          height: 630,
          alt: 'General Information for Healthcare Practitioners',
        },
      ],
      locale: 'en_AU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'General Information for Healthcare Practitioners - Raiqa Health | Practitioner Guide',
      description: 'Access general information and resources for healthcare practitioners.',
      images: ['https://raiqa.health/og-image.png'],
    },
  },
};

// Function to merge base metadata with page-specific metadata
export function getPageMetadata(pageKey: string): Metadata {
  const pageMeta = pageMetadata[pageKey];
  if (!pageMeta) {
    console.warn(`No metadata found for page: ${pageKey}`);
    return baseMetadata;
  }
  
  return {
    ...baseMetadata,
    ...pageMeta,
  };
}

// Function to generate dynamic metadata for service pages
export function getServiceMetadata(serviceName: string, serviceDescription: string): Metadata {
  return {
    ...baseMetadata,
    title: `${serviceName} - Raiqa Health | Healthcare Services`,
    description: `${serviceDescription} Book appointments with qualified healthcare practitioners through Raiqa Health's marketplace platform.`,
    keywords: `${serviceName.toLowerCase()}, healthcare services, medical appointments, ${serviceName.toLowerCase()} booking`,
    openGraph: {
      title: `${serviceName} - Raiqa Health | Healthcare Services`,
      description: `${serviceDescription} Book appointments with qualified healthcare practitioners through Raiqa Health's marketplace platform.`,
      url: `https://raiqa.health/services/${serviceName.toLowerCase().replace(/\s+/g, '-')}`,
      siteName: 'Raiqa Health',
      images: [
        {
          url: 'https://raiqa.health/og-image.png',
          width: 1200,
          height: 630,
          alt: `${serviceName} Services`,
        },
      ],
      locale: 'en_AU',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${serviceName} - Raiqa Health | Healthcare Services`,
      description: `${serviceDescription} Book appointments with qualified healthcare practitioners.`,
      images: ['https://raiqa.health/og-image.png'],
    },
  };
}

// Function to generate dynamic metadata for blog/article pages
export function getArticleMetadata(title: string, description: string, slug: string): Metadata {
  return {
    ...baseMetadata,
    title: `${title} - Raiqa Health Blog`,
    description,
    keywords: `${title.toLowerCase()}, healthcare, medical, health tips, ${title.toLowerCase().split(' ').slice(0, 3).join(', ')}`,
    openGraph: {
      title: `${title} - Raiqa Health Blog`,
      description,
      url: `https://raiqa.health/blog/${slug}`,
      siteName: 'Raiqa Health',
      images: [
        {
          url: 'https://raiqa.health/og-image.png',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_AU',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} - Raiqa Health Blog`,
      description,
      images: ['https://raiqa.health/og-image.png'],
    },
  };
}
