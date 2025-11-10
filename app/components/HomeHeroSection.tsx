'use client';

import React from 'react';
import Image from 'next/image';
import { Header1, Header5, Caption, Header6, Body1, Header2 } from './common/typography';
import HeroSection from './layout/HeroSection';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { bookingBaseUrl } from '../enum';

/**
 * Home Hero Section Component
 * Uses the reusable HeroSection component with home page specific content
 * 
 * @note All section components should use px-8 (32px) for consistent horizontal padding
 */

interface HomeHeroSectionProps {
    title?: string;
    subtitle?: string;
    ctaTextPrimary?: string;
    ctaTextSecondary?: string;
    imageSrc?: string;
    imageAlt?: string;
}
interface TreatmentCard {
    id: string;
    title: string;
    href: string;
    image: string;
    color: string;
}

const treatmentCards: TreatmentCard[] = [

    {
        id: 'hair-loss',
        title: 'Hair loss',
        href: '/hair-care',
        image: '/images/Hair_loss_Treatment.jpg',
        color: 'bg-gradient-to-br from-orange-100 to-orange-200'
    },
    {
        id: 'weight-loss',
        title: 'Weight loss',
        href: '/weight-loss',
        image: '/images/Skin_Care.jpg',
        color: 'bg-gradient-to-br from-purple-100 to-purple-200'
    },
    {
        id: 'sexual-health',
        title: 'Sexual health',
        href: '/sexual-health',
        image: '/images/Hero_Image.jpg',
        color: 'bg-gradient-to-br from-yellow-100 to-yellow-200'
    }
];


export default function HomeHeroSection({
    title = "Medical Weight Loss, Made Simple.",
    subtitle = "Personalized treatment, doctor-led care, and real results, starting at $269/month. No diets. No confusion. Just a medical approach designed around you.",
    ctaTextPrimary = "Get Started",
    ctaTextSecondary = "View Plans",
    imageSrc = "/images/MetisHeroImage.webp",
    imageAlt = "Healthcare professional"
}: HomeHeroSectionProps) {


 

    return (
        <HeroSection
            title={
                <Header2 className="text-brand-light !font-medium ">
                    {title.split(',')[0]}<br />
                    {title.split(',')[1]}
                </Header2>
            }
            description={subtitle}
            primaryButtonText={ctaTextPrimary}
            primaryButtonHref={bookingBaseUrl+"/form/metis/medical-weight-loss"}
            secondaryButtonText={ctaTextSecondary}
            secondaryButtonHref="#how-it-works"
            imageSrc={imageSrc}
            imageAlt={imageAlt}
        />
    );
}

