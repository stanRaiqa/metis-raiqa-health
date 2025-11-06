'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Image from 'next/image';
import { PrimaryButton } from '../../../common/buttons';
import { Header2, Header3, Header4, Body1, Body2 } from '../../../common/typography';
import { Shield, TrendingUp, CheckCircle, Package, ClipboardList, CreditCard, MessageSquare } from 'lucide-react';
import BodyLG from '@/app/components/common/typography/BodyLG';
import Howitworks, { ScrollStep } from '@/app/components/layout/Howitworks';

/**
 * Sexual Health How It Works Component
 * Sticky scroll reveal section showing three treatment options:
 * - Prevention Details
 * - Growth Details  
 * - Complete Care Details
 * 
 * Features:
 * - Content scrolls on left
 * - Images stack and reveal on right as you scroll
 * - Standard 32px (px-8) horizontal padding
 * - Max-width: 1280px
 * 
 * @note All section components should use px-8 (32px) for consistent horizontal padding
 */


const sexualHealthTreatmentSteps: ScrollStep[] = [
    {
        id: 1,
        title: 'Quiz',
        subtitle: 'Tell Us About Your Health',
        description: 'Complete a quick health assessment to help us understand your needs and concerns.',
        benefits: [
            'Quick 5-minute assessment',
            'Personalized to your needs',
            'Secure and confidential',
            'No commitment required'
        ],
        imageSrc: '/images/Hair_loss_Treatment.jpg',
        imageAlt: 'Health assessment quiz',
        icon: <ClipboardList className="w-6 h-6" />,
        buttonText: 'Start Your Quiz',
        buttonLink: '/get-started'
    },
    {
        id: 2,
        title: 'Subscription',
        subtitle: 'Choose Your Plan',
        description: 'Choose a personalized treatment plan that fits your needs and lifestyle.',
        benefits: [
            'Flexible subscription options',
            'Personalized treatment plans',
            'Cancel or pause anytime',
            'Affordable monthly pricing'
        ],
        imageSrc: '/images/Skin_care.jpg',
        imageAlt: 'Treatment subscription plans',
        icon: <CreditCard className="w-6 h-6" />,
        buttonText: 'View Plans',
        buttonLink: '/get-started'
    },
    {
        id: 3,
        title: 'Consultation',
        subtitle: 'Connect With Your Doctor',
        description: 'Connect with your doctor through secure video or messaging for ongoing support.',
        benefits: [
            'Secure video consultations',
            'Direct messaging with doctors',
            'Ongoing support and monitoring',
            'Expert medical guidance'
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
        subtitle: 'Receive Your Treatment',
        description: 'Receive your personalized treatment plan and products right at your doorstep.',
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

export default function SexualHealthHowItWorks() {
    const [activeCard, setActiveCard] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = sexualHealthTreatmentSteps.map((_, index) => index / sexualHealthTreatmentSteps.length);
        const closestBreakpointIndex = cardsBreakpoints.reduce(
            (acc, breakpoint, index) => {
                const distance = Math.abs(latest - breakpoint);
                if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                    return index;
                }
                return acc;
            },
            0
        );
        setActiveCard(closestBreakpointIndex);
    });

    return (

        <Howitworks
            id="how-it-works"
            heading="Find Your Treatment Plan"
            subheading="Choose Your Path"
            introText="Whether you’re looking to prevent sexual health issues, grow sexual health, or both, we have a personalized solution for you."
            steps={sexualHealthTreatmentSteps}
            bgColor="bg-brand-light"
            showServiceHowItWorks
        />
    );
}