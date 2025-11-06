'use client';

import React from 'react';
import { ClipboardList, CreditCard, MessageSquare, Package } from 'lucide-react';
import Howitworks, { ScrollStep } from '@/app/components/layout/Howitworks';

/**
 * Hair Care How It Works Component
 * Uses the reusable ServiceHowItWorks component with hair-care-specific data
 * 
 * @note All section components should use px-8 (32px) for consistent horizontal padding
 */

const haircareTreatmentSteps: ScrollStep[] = [
    {
        id: 1,
        title: 'Quiz',
        subtitle: 'Assess Your Hair Loss',
        description: 'Complete a quick 5-minute assessment about your hair loss pattern, medical history, and treatment goals.',
        benefits: [
            'Quick 5-minute assessment',
            'Personalized recommendations',
            '100% secure and confidential',
            'No commitment required'
        ],
        imageSrc: '/images/Hair_loss_Treatment.jpg',
        imageAlt: 'Hair loss assessment quiz',
        icon: <ClipboardList className="w-6 h-6" />,
        buttonText: 'Start Your Quiz',
        buttonLink: '/get-started'
    },
    {
        id: 2,
        title: 'Subscription',
        subtitle: 'Choose Your Treatment Plan',
        description: 'Select a personalized hair restoration plan that fits your needs, budget, and lifestyle.',
        benefits: [
            'Flexible subscription options',
            'Personalized treatment plans',
            'Cancel or pause anytime',
            'Affordable monthly pricing'
        ],
        imageSrc: '/images/Skin_Care.jpg',
        imageAlt: 'Hair care subscription plans',
        icon: <CreditCard className="w-6 h-6" />,
        buttonText: 'View Plans',
        buttonLink: '#subscription'
    },
    {
        id: 3,
        title: 'Consultation',
        subtitle: 'Connect With Hair Loss Experts',
        description: 'Connect with licensed doctors who specialize in hair loss through secure video or messaging.',
        benefits: [
            'Licensed hair loss specialists',
            'Secure video consultations',
            'Direct messaging with doctors',
            'Ongoing support and monitoring'
        ],
        imageSrc: '/images/doctor.jpg',
        imageAlt: 'Doctor consultation',
        icon: <MessageSquare className="w-6 h-6" />,
        buttonText: 'Learn More',
        buttonLink: '/get-started'
    },
    {
        id: 4,
        title: 'Delivered to you',
        subtitle: 'Get Your Treatment',
        description: 'Receive your personalized hair loss treatment delivered discreetly to your doorstep.',
        benefits: [
            'Fast, discreet shipping',
            'Delivered to your door',
            'Auto-refills available',
            'Track your order easily'
        ],
        imageSrc: '/images/Hero_Image.jpg',
        imageAlt: 'Treatment delivery',
        icon: <Package className="w-6 h-6" />,
        buttonText: 'Get Started',
        buttonLink: '/get-started'
    }
];

export default function HaircareHowItWorks() {
    return (
        <Howitworks
            id="how-it-works"
            heading="Find Your Treatment Plan"
            subheading="Choose Your Path"
            introText="Whether you’re looking to prevent hair loss, regrow hair, or both, we have a personalized solution for you."
            steps={haircareTreatmentSteps}
            bgColor="bg-brand-light"
            showServiceHowItWorks
        />
    );
}

