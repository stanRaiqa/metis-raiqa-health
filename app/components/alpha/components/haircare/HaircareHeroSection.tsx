'use client';

import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Header1, Header5, Body3 } from '../../../common/typography';
import HeroSection from '../../../layout/HeroSection';

/**
 * Hair Care Hero Section Component
 * Uses the reusable HeroSection component with hair-care-specific content
 * 
 * @note All section components should use px-8 (32px) for consistent horizontal padding
 */

interface HaircareHeroSectionProps {
    imageSrc?: string;
    imageAlt?: string;
}

export default function HaircareHeroSection({
    imageSrc = "/images/Hair_loss_Treatment.jpg",
    imageAlt = "Hair care treatment for men"
}: HaircareHeroSectionProps) {
    return (
        <HeroSection
            title={
                <Header1 className="text-white font-semibold">
                    Regrow your confidence,<br />
                    reclaim your hair.
                </Header1>
            }
            description="Clinically proven hair loss treatments prescribed by real doctors. Discreet delivery, personalized plans, and real results trusted by thousands of men."
            primaryButtonText="Take the Quiz"
            primaryButtonHref="/get-started?treatment=hair-care"
            secondaryButtonText="View Plans"
            secondaryButtonHref="#subscription"
            imageSrc={imageSrc}
            imageAlt={imageAlt}
            overlayContent={
                <div className="absolute bottom-6 left-6 right-6 bg-white rounded-xl p-4 shadow-lg">
                    <Header5 className="text-brand-dark">
                        Why Choose Us?
                    </Header5>
                    <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                            <Body3>FDA Approved</Body3>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                            <Body3>Expert Doctors</Body3>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                            <Body3>Discreet Delivery</Body3>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                            <Body3>Real Results</Body3>
                        </div>
                    </div>
                </div>
            }
        />
    );
}

