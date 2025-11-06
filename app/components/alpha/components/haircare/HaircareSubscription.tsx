'use client';

import React from 'react';
import { Shield, TrendingUp, Sparkles } from 'lucide-react';
import SubscriptionPlansLegacy, { SubscriptionPlan } from '../../../layout/SubscriptionPlansLegacy';

/**
 * Hair Care Subscription Plans Component
 * Uses the reusable SubscriptionPlans component with hair-care-specific data
 * 
 * @note All section components should use px-8 (32px) for consistent horizontal padding
 */

const haircareSubscriptionPlans: SubscriptionPlan[] = [
    {
        id: 'hair-essential',
        name: 'Essential',
        badge: 'Starter',
        description: 'Perfect for early-stage hair loss or prevention. Get started with proven treatments.',
        pricing: {
            monthly: 45
        },
        features: [
            'Topical treatment (Minoxidil)',
            'Monthly prescription delivery',
            'Online doctor consultations',
            'Basic progress tracking',
            'Email support',
            'Cancel anytime'
        ],
        icon: <Shield className="w-6 h-6" />,
        buttonText: 'Get Started',
        buttonLink: '/get-started?plan=hair-essential'
    },
    {
        id: 'hair-advanced',
        name: 'Advanced',
        badge: 'Most Popular',
        description: 'Our most popular plan. Combines multiple treatments for maximum hair regrowth results.',
        pricing: {
            monthly: 85
        },
        features: [
            'Oral medication (Finasteride)',
            'Topical treatment (Minoxidil)',
            'Priority doctor consultations',
            'Advanced progress tracking',
            'Priority chat & email support',
            'Personalized treatment plans',
            'Monthly progress reviews',
            'Free shipping'
        ],
        icon: <TrendingUp className="w-6 h-6" />,
        popular: true,
        buttonText: 'Get Started',
        buttonLink: '/get-started?plan=hair-advanced'
    },
    {
        id: 'hair-complete',
        name: 'Complete',
        badge: 'Premium',
        description: 'Comprehensive hair restoration with premium treatments and dedicated support.',
        pricing: {
            monthly: 135
        },
        features: [
            'Oral medication (Finasteride)',
            'Topical treatment (Minoxidil)',
            'DHT-blocking supplements',
            'Biotin & vitamin complex',
            'Unlimited doctor consultations',
            'Advanced progress analytics',
            '24/7 priority support',
            'Fully customized treatment',
            'Weekly progress reviews',
            'Dedicated care coordinator',
            'Free express shipping'
        ],
        icon: <Sparkles className="w-6 h-6" />,
        buttonText: 'Get Started',
        buttonLink: '/get-started?plan=hair-complete'
    }
];

export default function HaircareSubscription() {
    return (
        <SubscriptionPlansLegacy
            title="Choose your hair restoration plan"
            subtitle="Select the perfect plan for your hair loss stage. All plans include doctor consultations and can be adjusted as needed."
            plans={haircareSubscriptionPlans}
        />
    );
}

