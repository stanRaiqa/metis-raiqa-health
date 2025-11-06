'use client';

import React from 'react';
import { Shield, TrendingUp, Sparkles } from 'lucide-react';
import SubscriptionPlansLegacy, { SubscriptionPlan } from '../../../layout/SubscriptionPlansLegacy';

/**
 * Sexual Health Subscription Plans Component
 * Uses the reusable SubscriptionPlans component with skincare-specific data
 * 
 * @note All section components should use px-8 (32px) for consistent horizontal padding
 */

const sexualHealthSubscriptionPlans: SubscriptionPlan[] = [
    {
        id: 'prevention',
        name: 'Prevention',
        badge: 'Essential',
        description: 'For individuals who want to maintain their health and prevent future issues.',
        pricing: {
            monthly: 49
        },
        features: [
            'Monthly prescription delivery',
            'Online doctor consultations',
            'Basic progress tracking',
            'Email support',
            'Treatment adjustments'
        ],
        icon: <Shield className="w-6 h-6" />,
        buttonText: 'Get Started',
        buttonLink: '/get-started?plan=prevention'
    },
    {
        id: 'growth',
        name: 'Growth',
        badge: 'Popular',
        description: 'Suitable for those seeking active treatment and visible results.',
        pricing: {
            monthly: 79
        },
        features: [
            'Advanced prescription treatment',
            'Priority doctor consultations',
            'Detailed progress tracking',
            'Priority email & chat support',
            'Personalized treatment plans',
            'Monthly progress reviews'
        ],
        icon: <TrendingUp className="w-6 h-6" />,
        popular: true,
        buttonText: 'Get Started',
        buttonLink: '/get-started?plan=growth'
    },
    {
        id: 'complete-care',
        name: 'Complete Care',
        badge: 'Premium',
        description: 'Ideal for comprehensive treatment with maximum support and customization.',
        pricing: {
            monthly: 129
        },
        features: [
            'Premium treatment protocols',
            'Unlimited doctor consultations',
            'Advanced progress analytics',
            '24/7 priority support',
            'Fully customized treatment plans',
            'Weekly progress reviews',
            'Dedicated care coordinator',
            'Free additional treatments'
        ],
        icon: <Sparkles className="w-6 h-6" />,
        buttonText: 'Get Started',
        buttonLink: '/get-started?plan=complete-care'
    }
];

export default function SexualHealthSubscription() {
    return (
        <SubscriptionPlansLegacy
            title="Choose your right plan!"
            subtitle="Select from best plans, ensuring a perfect match. Need more or less? Customize your subscription for a seamless fit!"
            plans={sexualHealthSubscriptionPlans}
        />
    );
}

