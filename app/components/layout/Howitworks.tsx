'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { PrimaryButton } from '@/app/components/common/buttons';
import { Header2, Header3, Body1, Body2 } from '@/app/components/common/typography';
import BodyLG from '@/app/components/common/typography/BodyLG';

export interface ScrollStep {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    benefits: string[];
    imageSrc: string;
    imageAlt: string;
    icon: React.ReactNode;
    buttonText: string;
    buttonLink: string;
}

interface StickyScrollSectionProps {
    id?: string;
    heading?: string;
    subheading?: string;
    introText?: string;
    steps: ScrollStep[];
    bgColor?: string;
    showServiceHowItWorks?: boolean;
}

/**
 * Reusable StickyScrollSection Component
 * --------------------------------------
 * Displays a left scrollable section and right sticky stacked images.
 * Accepts dynamic data through props.
 */
export default function Howitworks({
    id = 'sticky-section',
    heading = 'Dynamic Section',
    subheading = 'Choose Your Path',
    introText,
    steps,
    bgColor = 'bg-brand-light',
    showServiceHowItWorks = false
}: StickyScrollSectionProps) {
    const [activeCard, setActiveCard] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        const breakpoints = steps.map((_, index) => index / steps.length);
        const closestIndex = breakpoints.reduce((acc, point, index) => {
            const distance = Math.abs(latest - point);
            return distance < Math.abs(latest - breakpoints[acc]) ? index : acc;
        }, 0);
        setActiveCard(closestIndex);
    });

    return (
        <section className={`relative ${bgColor} py-16 lg:py-24`} id={id}>
            <div className="max-w-[1280px] mx-auto px-8">
                {/* Header */}
                <div className="flex flex-col items-center justify-center mb-12 lg:mb-16 space-y-4">
                    {subheading && (
                        <motion.p
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="font-body text-sm font-medium text-brand-steel uppercase tracking-wider"
                        >
                            {subheading}
                        </motion.p>
                    )}

                    {heading && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Header2 className="text-brand-dark text-center">{heading}</Header2>
                        </motion.div>
                    )}

                    {introText && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Body1 className="text-brand-steel max-w-2xl mx-auto text-center">
                                {introText}
                            </Body1>
                        </motion.div>
                    )}
                </div>

                {/* Sticky Scroll Content */}
                <div ref={containerRef} className="relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Left Side - Scrolling Content */}
                        <div className="space-y-16 lg:space-y-32">
                            {steps.map((step) => (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true, margin: '-100px' }}
                                    className="min-h-[400px] lg:min-h-[500px]"
                                >
                                    <div className="bg-white p-6 lg:p-8 border-y border-brand-neutral transition-shadow duration-300">
                                        <div className="flex items-end justify-between">
                                            <div className="flex flex-col items-left gap-4">
                                                <div className="flex items-center gap-2">
                                                    <Header3 className="text-brand-dark mb-2">{step.title}</Header3>
                                                    <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                                                        {step.icon}
                                                    </div>
                                                </div>
                                                <BodyLG className="text-brand-steel font-normal mb-4">
                                                    {step.subtitle}
                                                </BodyLG>
                                            </div>
                                            <div className="text-[120px] font-bold text-brand-steel opacity-10 leading-none pointer-events-none z-0">
                                                {step.id}
                                            </div>
                                        </div>

                                        <Body2 className="text-brand-steel mb-6">{step.description}</Body2>

                                        <div className="space-y-3 mb-8">
                                            {step.benefits.map((benefit, idx) => (
                                                <div key={idx} className="flex items-start gap-3">
                                                    <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                                                    <Body2 className="text-brand-steel">{benefit}</Body2>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Mobile Image */}
                                        <div className="lg:hidden relative aspect-[4/3] w-full rounded-xl overflow-hidden mb-6">
                                            <Image src={step.imageSrc} alt={step.imageAlt} fill className="object-cover" />
                                        </div>

                                        {/* CTA Button */}
                                        <PrimaryButton size="medium" href={step.buttonLink} className="w-full sm:w-auto">
                                            {step.buttonText}
                                        </PrimaryButton>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Right Side - Sticky Images */}
                        <div className="hidden lg:block relative">
                            <div className="sticky top-36 h-[500px]">
                                {steps.map((step, index) => (
                                    <motion.div
                                        key={step.id}
                                        className="absolute inset-0"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{
                                            opacity: activeCard >= index ? 1 : 0,
                                            scale: activeCard >= index ? 1 : 0.95,
                                            zIndex: activeCard === index ? 10 : index,
                                        }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <div className="relative h-full w-full rounded-2xl overflow-hidden">
                                            <Image src={step.imageSrc} alt={step.imageAlt} fill className="object-cover" />
                                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#00000080] to-transparent flex items-end">
                                                <div className="p-8">
                                                    <Header3 className="text-white mb-2">{step.title}</Header3>
                                                    <Body2 className="text-white/90">{step.subtitle}</Body2>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showServiceHowItWorks && (
                <div className="mt-16">
                    {/* Lazy load or import dynamically if needed */}
                    {/* <ServiceHowItWorks /> */}
                </div>
            )}
        </section>
    );
}
