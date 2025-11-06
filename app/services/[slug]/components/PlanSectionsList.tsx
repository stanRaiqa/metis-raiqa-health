'use client';

import React from 'react';
import AsideSection from '@/app/components/common/AsideSection';

interface PlanSection {
    subtitle: string;
    heading: string;
    description: string;
    pricing: number;
    features: string[];
    imageSrc: string;
    imageAlt: string;
    imagePosition: 'left' | 'right';
    ctaText: string;
    ctaLink: string;
    backgroundColor: string;
    reverseOnMobile: boolean;
    gradientFalse: boolean;
}

interface PlanSectionsListProps {
    planSections: PlanSection[];
}

export default function PlanSectionsList({ planSections }: PlanSectionsListProps) {
    return (
        <div className="space-y-0">
            {planSections.map((plan, index) => (
                <AsideSection
                    key={index}
                    subtitle={plan.subtitle}
                    heading={plan.heading}
                    body={
                        <div className="space-y-4">
                            <p className="font-body text-brand-steel">
                                {plan.description}
                            </p>
                            <div className="space-y-3">
                                <p className="font-body text-brand-steel font-semibold">
                                    ${plan.pricing}/month
                                </p>
                                <ul className="space-y-2">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start">
                                            <span className="text-brand-primary mr-2">✓</span>
                                            <span className="font-body text-brand-steel">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    }
                    imageSrc={plan.imageSrc}
                    imageAlt={plan.imageAlt}
                    imagePosition={plan.imagePosition}
                    ctaText={plan.ctaText}
                    ctaLink={plan.ctaLink}
                    backgroundColor={plan.backgroundColor}
                    reverseOnMobile={plan.reverseOnMobile}
                    gradientFalse={plan.gradientFalse}
                />
            ))}
        </div>
    );
}
