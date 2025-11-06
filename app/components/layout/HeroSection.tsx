'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Header1 } from '../common/typography';

/**
 * Reusable Hero Section Component
 * Modern full-bleed hero section inspired by wellness brands:
 * - Full background image with gradient overlay (dark at bottom)
 * - Content positioned at bottom-left
 * - Large bold heading (5xl-8xl responsive)
 * - Description text above heading
 * - Underlined link-style CTA with arrow
 * - Optional icon/overlay content at top
 * - "(Scroll for more)" indicator on bottom-right
 * - Rounded corners with padding from edges
 * 
 * @example
 * // Hero with icon overlay
 * <HeroSection
 *   title="Reimagine wellness"
 *   description="New era of health and well-being with innovative solutions tailored to your lifestyle."
 *   primaryButtonText="Explore our services"
 *   primaryButtonHref="/services"
 *   imageSrc="/images/Hero_Image.jpg"
 *   overlayContent={
 *     <svg className="w-12 h-12 text-white" viewBox="0 0 24 24">
 *       <!-- Icon SVG content -->
 *     </svg>
 *   }
 * />
 */

interface HeroSectionProps {
    // Content
    title: string | React.ReactNode;
    description: string;

    // CTAs
    primaryButtonText?: string;
    primaryButtonHref?: string;
    secondaryButtonText?: string;
    secondaryButtonHref?: string;
    showSecondaryButton?: boolean;

    // Image
    imageSrc?: string;
    imageAlt?: string;

    // Optional overlay content on image (pass complete JSX)
    overlayContent?: React.ReactNode;

    // Styling options
    titleClassName?: string;
    descriptionClassName?: string;
}

export default function HeroSection({
    title,
    description,
    primaryButtonText = "Get Started",
    primaryButtonHref = "/get-started",
    secondaryButtonText = "Learn More",
    secondaryButtonHref = "#",
    showSecondaryButton = true,
    imageSrc = "/images/Metis_Hero_image.jpg",
    imageAlt = "Healthcare",
    overlayContent,
    titleClassName = "text-white font-bold",
    descriptionClassName = "text-white/90 max-w-lg"
}: HeroSectionProps) {
    const router = useRouter();
    return (
        <section 
            className="relative min-h-[calc(100vh-80px)] !max-h-[1200px] mx-4 mb-4 rounded-2xl flex items-end overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${imageSrc})` }}
        >
            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent z-0"></div>

            {/* Top Overlay Content (Icon) */}
            {overlayContent && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute top-10 left-10 z-10"
                >
                    {overlayContent}
                </motion.div>
            )}

            {/* Container */}
            <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 pb-12 sm:pb-16 lg:pb-4">
                <div className="max-w-[1280px] mx-auto">
                    <div className="grid grid-cols-1  gap-0 items-end">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-7 space-y-6"
                        >
                            {/* Small Description Above Title */}
                            <p className={`text-base sm:text-lg leading-relaxed ${descriptionClassName}`}>
                                {description}
                            </p>

                            {/* Main Heading */}
                            {typeof title === 'string' ? (
                                <Header1 className={`text-light leading-none tracking-tight ${titleClassName}`}>
                                    {title}
                                </Header1>
                            ) : (
                                <div className={titleClassName}>
                                    {title}
                                </div>
                            )}

                            {/* CTA Link */}
                            <div className="pt-4">
                                <button
                                    onClick={() => router.push(primaryButtonHref)}
                                    className="group inline-flex items-center gap-3 text-white text-lg font-medium border-b-2 border-white pb-2 hover:border-brand-mint transition-colors duration-300"
                                >
                                    {primaryButtonText}
                                    <motion.svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="transition-transform duration-300 group-hover:translate-x-2"
                                    >
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </motion.svg>
                                </button>
                            </div>
                        </motion.div>

                        {/* Right - Scroll indicator */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ 
                                opacity: 1,
                                y: [0, -10, 0]
                            }}
                            transition={{ 
                                opacity: { duration: 0.6, delay: 0.3 },
                                y: { 
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }}
                            className="lg:col-span-5 flex justify-end items-end"
                        >
                            <button
                                onClick={() => {
                                    window.scrollTo({
                                        top: window.innerHeight,
                                        behavior: 'smooth'
                                    });
                                }}
                                className="text-white/70 hover:text-white text-sm transition-colors duration-300 cursor-pointer"
                            >
                                (Scroll for more)
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

