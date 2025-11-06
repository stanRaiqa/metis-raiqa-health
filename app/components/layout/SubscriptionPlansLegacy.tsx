'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PrimaryButton, SecondaryButton } from '../common/buttons';
import { Header2, Body1, Body2, Header3, Header4, Body3 } from '../common/typography';
import { CheckCircle } from 'lucide-react';

/**
 * Legacy Subscription Plans Component
 * Displays subscription tiers with pricing options
 * Used by alpha haircare, skincare, and sexual health pages
 * 
 * Features:
 * - Flexible plan configuration through props
 * - Supports popular badge
 * - Primary/Secondary button variants
 * - Standard 32px (px-8) horizontal padding
 * - Max-width: 1280px
 */

export interface PricingTier {
    monthly: number;
}

export interface SubscriptionPlan {
    id: string;
    name: string;
    badge: string;
    description: string;
    pricing: PricingTier;
    features: string[];
    icon: React.ReactNode;
    popular?: boolean;
    buttonText: string;
    buttonLink: string;
}

interface SubscriptionPlansLegacyProps {
    // Header content
    title?: string;
    subtitle?: string;
    
    // Plans data
    plans: SubscriptionPlan[];
    
    // Footer content
    additionalInfo?: React.ReactNode;
    showAdditionalInfo?: boolean;
    
    // Styling options
    sectionId?: string;
    backgroundColor?: string;
    titleClassName?: string;
    subtitleClassName?: string;
}

export default function SubscriptionPlansLegacy({
    title = "Choose your right plan!",
    subtitle = "Select from best plans, ensuring a perfect match. Need more or less? Customize your subscription for a seamless fit!",
    plans,
    additionalInfo,
    showAdditionalInfo = true,
    sectionId = "subscription",
    backgroundColor = "bg-gradient-to-b from-brand-light to-white",
    titleClassName = "text-brand-dark text-center",
    subtitleClassName = "text-brand-steel max-w-2xl mx-auto text-center"
}: SubscriptionPlansLegacyProps) {
    const getPriceForPeriod = (plan: SubscriptionPlan): number => {
        return plan.pricing.monthly;
    };

    // Default additional info if not provided
    const defaultAdditionalInfo = (
        <>
            <Body2 className="text-brand-steel">
                All plans include free shipping and can be cancelled or paused anytime.
            </Body2>
            <Body2 className="text-brand-steel mt-2">
                Need a custom plan? <a href="/contact" className="text-brand-primary font-semibold hover:underline">Contact us</a>
            </Body2>
        </>
    );

    return (
        <section className={`relative ${backgroundColor} border-b border-brand-neutral py-16 lg:py-24`} id={sectionId}>
            {/* Container with standard 32px padding */}
            <div className="max-w-[1280px] mx-auto px-8">
                {/* Header */}
                {(title || subtitle) && (
                    <div className="flex flex-col items-center justify-center mb-4 lg:mb-8 space-y-4">
                        {title && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <Header3 className={titleClassName}>
                                    {title}
                                </Header3>
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

                {/* Pricing Cards */}
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
                            {/* Popular Badge */}
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                                    <div className="bg-brand-primary text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                                        Most Popular
                                    </div>
                                </div>
                            )}

                            {/* Card */}
                            <div
                                className={`relative h-full bg-white rounded-lg p-6 lg:p-8 transition-all duration-300 hover:shadow-sm flex flex-col ${
                                    plan.popular ? 'border-2 border-brand-primary' : 'border border-gray-200'
                                }`}
                            >
                                {/* Badge */}
                                <div className="inline-block">
                                    <span className="bg-brand-primary/10 text-brand-primary py-1.5 rounded-full text-sm font-semibold">
                                        {plan.badge}
                                    </span>
                                </div>

                                {/* Plan Name with Icon */}
                                <div className="flex items-center gap-3 mb-3">
                                    <Header4 className="text-2xl font-bold text-brand-dark">
                                        {plan.name}
                                    </Header4>
                                    <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                                        {plan.icon}
                                    </div>
                                </div>

                                {/* Description */}
                                <Body2 className="text-brand-steel min-h-[60px]">
                                    {plan.description}
                                </Body2>

                                {/* Pricing */}
                                <div className="pb-3 border-b border-brand-neutral">
                                    <div className="flex items-baseline gap-2">
                                        <Header3>
                                            ${getPriceForPeriod(plan)}
                                        </Header3>
                                        <Body3>/month</Body3>
                                    </div>
                                </div>

                                {/* Features List */}
                                <div className="space-y-3 mb-8 mt-3 flex-grow">
                                    {plan.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                                            <Body2 className="text-brand-steel">{feature}</Body2>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <div className="mt-auto">
                                    {plan.popular ? (
                                        <PrimaryButton
                                            size="medium"
                                            href={plan.buttonLink}
                                            className="w-full"
                                        >
                                            {plan.buttonText}
                                        </PrimaryButton>
                                    ) : (
                                        <SecondaryButton
                                            size="medium"
                                            href={plan.buttonLink}
                                            className="w-full"
                                        >
                                            {plan.buttonText}
                                        </SecondaryButton>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Info */}
                {showAdditionalInfo && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="mt-12 text-center"
                    >
                        {additionalInfo || defaultAdditionalInfo}
                    </motion.div>
                )}
            </div>
        </section>
    );
}

