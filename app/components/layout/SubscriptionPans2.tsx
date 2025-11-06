'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Header2, Header3, Body1, Body2, Header4 } from '../common/typography';
import Image from 'next/image';

/**
 * Modern Subscription Plans Component (Image-based Design)
 * Displays subscription tiers with images and modern pill-style badges
 * 
 * Features:
 * - Image header for each plan
 * - Popular badge overlay
 * - Pill-style feature tags
 * - "Start quiz" CTA with arrow
 * - "From $X /month" pricing format
 * 
 * @example
 * <SubscriptionPlans2
 *   title="Hair Loss Treatment Plans"
 *   plans={haircarePlansData}
 * />
 */

export interface SubscriptionPlan2 {
    id: string;
    name: string;
    image: string;
    imageAlt: string;
    badges: string[];
    pills: string[];
    description: string;
    pricing: {
        from: number;
    };
    popular?: boolean;
    quizLink: string;
}

interface SubscriptionPlans2Props {
    // Header content
    title?: string;
    subtitle?: string;

    // Plans data
    plans: SubscriptionPlan2[];

    // Styling options
    sectionId?: string;
    backgroundColor?: string;
    titleClassName?: string;
    subtitleClassName?: string;
}

export default function SubscriptionPlans2({
    title,
    subtitle,
    plans,
    sectionId = "subscription-plans",
    backgroundColor = "bg-white",
    titleClassName = "text-brand-dark text-center",
    subtitleClassName = "text-brand-steel max-w-2xl mx-auto text-center"
}: SubscriptionPlans2Props) {
    return (
        <section className={`relative ${backgroundColor} py-16 lg:py-24`} id={sectionId}>
            {/* Container with standard 32px padding */}
            <div className="max-w-[1280px] mx-auto px-8">
                {/* Header */}
                {(title || subtitle) && (
                    <div className="flex flex-col items-center justify-center mb-12 lg:mb-16 space-y-4">
                        {title && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <Header2 className={titleClassName}>
                                    {title}
                                </Header2>
                            </motion.div>
                        )}

                        {subtitle && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Body1 className={subtitleClassName}>
                                    {subtitle}
                                </Body1>
                            </motion.div>
                        )}
                    </div>
                )}

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            {/* Card */}
                            <div className={`relative h-full p-4 bg-white rounded-xl overflow-hidden transition-all duration-300 flex flex-col border gap-4 ${plan.popular ? 'border-brand-teal' : 'border-gray-100'}`}>
                                {/* Image Section */}
                                <div className="relative w-full aspect-[5/3] overflow-hidden rounded-lg">
                                    <Image
                                        src={plan.image}
                                        alt={plan.imageAlt}
                                        fill
                                        className="object-cover"
                                    />

                                    {/* Popular Badge Overlay */}
                                    {plan.popular && (
                                        <div className="absolute top-4 left-4 z-10">
                                            <div className="bg-brand-teal text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                                                <span className="text-white">★</span>
                                                Most popular
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Content Section */}
                                <div className="flex flex-col px-2 flex-grow">
                                    {/* Plan Name */}
                                    <Header4 className="text-brand-primary-dark mb-4">
                                        {plan.name}
                                    </Header4>

                                    {/* Feature Badges */}
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {plan.badges.map((badge, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1.5 bg-white border border-brand-teal text-brand-dark text-sm rounded-md"
                                            >
                                                {badge}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Info Pills */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {plan.pills.map((pill, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1.5 bg-white border border-gray-300 text-brand-steel text-sm rounded-md"
                                            >
                                                {pill}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Description */}
                                    <Body2 className="text-brand-steel mb-6 flex-grow">
                                        {plan.description}
                                    </Body2>

                                    {/* Start Quiz Link */}
                                    <a
                                        href={plan.quizLink}
                                        className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:gap-3 transition-all duration-300 mb-6 group"
                                    >
                                        <span>Start quiz</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </a>

                                    {/* Pricing */}
                                    <div className="pt-4 border-t border-gray-100">
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-3xl font-bold text-brand-dark">
                                                ${plan.pricing.from}
                                            </span>
                                            <span className="text-brand-steel text-base">
                                                /month
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Example data structure for reference
export const exampleHaircarePlans: SubscriptionPlan2[] = [
    {
        id: 'prevention-regrowth',
        name: 'Prevention & regrowth',
        image: '/images/haircare-plan-1.jpg',
        imageAlt: 'Hair loss prevention and regrowth treatment',
        badges: ['Best for thinning & receding hairlines'],
        pills: ['See results in 3-6 months', 'Tablet or spray'],
        description: 'These treatment options combine two active ingredients available in tablet or spray form. Our health practitioners tailor each plan, with personalised dosages to suit your hair loss stage, lifestyle, and goals, ensuring optimal results.',
        pricing: { from: 45 },
        popular: true,
        quizLink: '/haircare/quiz'
    },
    {
        id: 'prevention-only',
        name: 'Prevention only',
        image: '/images/haircare-plan-2.jpg',
        imageAlt: 'Hair loss prevention treatment',
        badges: ['Best for early thinning & receding hairlines'],
        pills: ['See results in 3-6 months', 'Tablet or spray'],
        description: 'Designed to strengthen hair and prevent further loss, these formulations address early thinning with a single active ingredient in tablet or spray form. Customisable and tailored to your hair loss stage, lifestyle, and goals, they offer a flexible solution for healthy hair.',
        pricing: { from: 24 },
        popular: false,
        quizLink: '/haircare/quiz'
    },
    {
        id: 'clinic-treatments',
        name: 'Hair loss clinic treatments',
        image: '/images/haircare-plan-3.jpg',
        imageAlt: 'Advanced hair loss clinic treatments',
        badges: ['Best for advanced thinning & receding'],
        pills: ['Tablet, spray or combined option', 'See results in 3-6 months'],
        description: 'Our advanced hair regrowth options, similar to in-clinic treatments, combine two powerful ingredients in tablets, spray, or both to target hair loss from multiple angles. Each plan is tailored to your needs, with add-on vitamins and specialised shampoo options to further support.',
        pricing: { from: 56 },
        popular: false,
        quizLink: '/haircare/quiz'
    }
];

