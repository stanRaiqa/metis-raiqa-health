import React from 'react';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import LoadingSpinner from '@/app/components/common/LoadingSpinner';
import { getPageMetadata } from '@/app/config/metadata';

// Create a minimal loading placeholder to reduce CLS
const SectionLoader = () => <div className="min-h-[200px] flex items-center justify-center"><LoadingSpinner size="small" className="opacity-60" /></div>;

// Configure loading priorities
// 1. Critical Path: Contact form (loaded normally for immediate interaction)
// 2. Progressive Loading: Below-fold content (with ssr: false)

// Import contact form normally for critical interaction
import ContactUs from '@/app/components/ContactUs';

// Components that should load only when in viewport (below fold)
const HomeGetStarted = dynamic(
    () => import('@/app/components/HomeGetStarted'),
    { loading: () => <SectionLoader />, ssr: false }
);

// Add comprehensive metadata
export const metadata: Metadata = getPageMetadata('contact');

export default function ContactPage() {
    return (
        <main className="pt-20">
            {/* Contact Form Section - Critical, loaded immediately */}
            <ContactUs />
            {/* Get Started Section - Lazy Loaded */}
            <HomeGetStarted />
        </main>
    );
}
