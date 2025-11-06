'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { PrimaryButton } from '../common/buttons';
import { Header2, Body1, Body2, Header1, Header3, Subtitle1, Subtitle2 } from '../common/typography';
import { Check } from 'lucide-react';

/**
 * Subscription Plans Component
 * Displays simple, transparent pricing with all-inclusive features
 * 
 * Features:
 * - Two-column layout (image + content)
 * - Clear pricing display
 * - Feature list with checkmarks
 * - Standard 32px (px-8) horizontal padding
 * - Max-width: 1280px
 */

export default function SubscriptionPlans() {
    const router = useRouter();

    const features = [
        'Doctor consultation',
        'Prescription medication',
        'Home delivery (same day in metros)',
        'Unlimited expert support'
    ];

    return (
        <section id="subscription" className="relative bg-brand-neutral py-16 mx-4 rounded-xl lg:py-24 overflow-hidden border-t border-brand-neutral-light">
            <div className="max-w-[1280px] mx-auto px-8">
                {/* Main Content - Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 lg:mb-24">
                    
                    {/* Left - Pricing Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                    >
                        {/* Pricing Tag */}
                        <p className="font-body text-base text-brand-forest italic mb-2">
                            Pricing
                        </p>

                        {/* Heading */}
                        <Header2 className="text-brand-dark !font-medium !leading-tight">
                            Simple. Transparent.<br/> All-Inclusive.
                        </Header2>

                        {/* Price */}
                        <div className="flex items-baseline gap-2 py-2">
                            <Header3 className="text-brand-primary !font-bold">
                                $269
                            </Header3>
                            <Body1 className="text-brand-steel font-medium">
                                /month - everything covered.
                            </Body1>
                        </div>

                        {/* Features List */}
                        <div className="space-y-2">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-3"
                                >
                                    <div className="w-6 h-6 rounded-full bg-brand-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Check className="w-4 h-4 text-white" strokeWidth={3} />
                                    </div>
                                    <p className="text-brand-dark font-body text-base">
                                        {feature}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Additional Info */}
                        <div className="">
                            <Body2 className="text-brand-steel">
                                Need more details about your specific case or dosage?
                            </Body2>
                            <Body2 className="text-brand-steel mt-1">
                                Contact our team and we&apos;ll guide you through it.
                            </Body2>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-2">
                            <PrimaryButton 
                                onClick={() => router.push('/get-started')}
                                className="group"
                            >
                                <span className="flex items-center gap-2">
                                    Start Your Journey for $269
                                    <span className="transition-transform group-hover:translate-x-1">→</span>
                                </span>
                            </PrimaryButton>
                        </div>
                    </motion.div>

                    {/* Right - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative w-full aspect-[3/4] max-h-[600px] rounded-3xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/doctor.jpg"
                                alt="Healthcare Professional"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

