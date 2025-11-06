'use client';

import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Header1, Header5, Body3 } from '../../../common/typography';
import HeroSection from '../../../layout/HeroSection';

/**
 * Hair Loss Hero Section Component
 * Uses the reusable HeroSection component with skincare-specific content
 * 
 * @note All section components should use px-8 (32px) for consistent horizontal padding
 */

interface SkincareHeroSectionProps {
    imageSrc?: string;
    imageAlt?: string;
}

export default function SkincareHeroSection({
    imageSrc = "/images/Skin_Care.jpg",
    imageAlt = "Hair loss treatment for men"
}: SkincareHeroSectionProps) {
    return (
        <HeroSection
            title={
                <Header1 className="text-white font-semibold">
                    Effective<br />
                    hair loss treatment.
                </Header1>
            }
            description="The most effective solutions to keep and regrow hair, sorted over the phone and delivered direct and discreet. Real results seen by thousands of men."
            primaryButtonText="Take the Quiz"
            primaryButtonHref="/get-started?treatment=hair-loss"
            secondaryButtonText="View Plans"
            secondaryButtonHref="#subscription"
            imageSrc={imageSrc}
            imageAlt={imageAlt}
            overlayContent={
                <div className="absolute bottom-6 left-6 right-6 bg-white rounded-xl p-4 shadow-lg">
                    <Header5 className="text-brand-dark">
                        Start Your Journey
                    </Header5>
                    <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                            <Body3>Clinically Proven</Body3>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                            <Body3>Doctor Prescribed</Body3>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                            <Body3>100% Confidential</Body3>
                        </div>
                        <div className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-1" />
                            <Body3>Ongoing Support</Body3>
                        </div>
                    </div>
                </div>
            }
        />
    );
}

