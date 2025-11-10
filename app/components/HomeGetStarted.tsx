'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PrimaryButton, SecondaryButton } from './common/buttons';
import { Body2, Body3, Header2, Header3, Header4, Overline } from './common/typography';
import { useRouter } from 'next/navigation';
import { bookingBaseUrl } from '../enum';

/**
 * Get Started CTA Section Component
 * Features:
 * - Compelling call-to-action with gradient background
 * - Primary and secondary CTA buttons
 * - Fully responsive layout
 * - Design system colors and typography
 * - Standard 32px (px-8) horizontal padding
 * - Max-width: 1280px
 */

interface HomeGetStartedProps {
    overline?: string;
    heading?: string;
    primaryButtonText?: string;
    primaryButtonLink?: string;
    secondaryButtonText?: string;
    secondaryButtonLink?: string;
}

export default function HomeGetStarted({
    overline = "Ready to take control?",
    heading = "Ready to Take Control of Your Health?",
    primaryButtonText = "Get Started Now →",
    primaryButtonLink = bookingBaseUrl + "/form/metis/medical-weight-loss",
    secondaryButtonText = "See pricing",
    secondaryButtonLink = "#subscription"
}: HomeGetStartedProps) {
    const router = useRouter();
    return (
        <section className="relative bg-brand-primary mx-4 rounded-lg  py-6 lg:py-12 overflow-hidden">
            {/* Background Pattern/Decoration */}
            {/* <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div> */}

            {/* Container with standard 32px padding */}
            <div className="max-w-[1280px] mx-auto px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-start md:items-center justify-between gap-8">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1"
                    >
                        {/* Overline */}
                        <Body3 className="text-white/90 italic mb-4 r">
                            {overline}
                        </Body3>

                        {/* Main Heading */}
                        <Header3 className="text-white !font-medium max-w-2xl">
                            Your transformation starts here.
                        </Header3>
                    </motion.div>

                    {/* Right CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4 flex-shrink-0"
                    >
                        {/* Secondary Button */}
                        

                        {/* Primary Button */}
                        <PrimaryButton
                            size="large"
                           href={primaryButtonLink} theme='dark' className='border-white'>
                            {primaryButtonText}
                        </PrimaryButton>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

