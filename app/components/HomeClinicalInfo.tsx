'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Header2, Header3, Body1, Header4 } from './common/typography';

/**
 * Clinical Info / Testimonials Section Component
 * Features:
 * - Clean testimonial cards with quotation marks
 * - Navigation carousel
 * - Modern wellness brand design
 * - Standard 32px (px-8) horizontal padding
 */

interface Testimonial {
    id: number;
    name: string;
    location: string;
    testimonial: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Emily R.",
        location: "Sydney, NSW",
        testimonial: "Raiqa Health team really helped me reclaim my energy. I've never felt better than before!"
    },
    {
        id: 2,
        name: "James K.",
        location: "Melbourne, VIC",
        testimonial: "Raiqa Health programs are so easy to follow, the results are incredible. A step toward better health!"
    },
    {
        id: 3,
        name: "Sarah M.",
        location: "Brisbane, QLD",
        testimonial: "The personalized approach made all the difference. My wellness journey has been truly transformative with their support."
    },
    {
        id: 4,
        name: "David L.",
        location: "Perth, WA",
        testimonial: "Professional, caring, and results-driven. The team at Raiqa Health helped me achieve my health goals faster than I expected."
    }
];

interface TestimonialCardProps {
    testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
    return (
        <div className="bg-brand-sage rounded-2xl p-8 lg:p-10  flex flex-col h-[350px] lg:h-[400px]">
            {/* Quotation Mark */}
            <div className="text-7xl lg:text-8xl font-black text-brand-dark leading-none flex-shrink-0 -mt-2">
                &ldquo;&rdquo;
            </div>

            {/* Testimonial Text */}
            <Header4 className="text-brand-dark !font-normal flex-1 overflow-hidden">
                {testimonial.testimonial}
            </Header4>

            {/* Author Info */}
            <div className="pt-4 border-t border-gray-200 flex-shrink-0">
                <p className="font-body text-sm text-brand-steel">
                    – {testimonial.name}, {testimonial.location}
                </p>
            </div>
        </div>
    );
};

export default function HomeClinicalInfo() {
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);

    const handleNext = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const cardWidth = container.querySelector('.testimonial-card')?.clientWidth || 0;
            const gap = window.innerWidth >= 1024 ? 32 : 24; // lg:gap-8 : gap-6
            container.scrollBy({
                left: cardWidth + gap,
                behavior: 'smooth'
            });
        }
    };

    const handlePrev = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const cardWidth = container.querySelector('.testimonial-card')?.clientWidth || 0;
            const gap = window.innerWidth >= 1024 ? 32 : 24; // lg:gap-8 : gap-6
            container.scrollBy({
                left: -(cardWidth + gap),
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="relative bg-brand-neutral-light py-16  mx-4 rounded-2xl overflow-hidden">
            {/* Container with 32px horizontal padding (px-8) as design system standard */}
            <div className="max-w-[1280px] mx-auto px-8">
                
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-4 lg:mb-6 gap-6">
                    {/* Left - Subtitle */}
                    <motion.p 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="font-body text-base text-brand-forest italic"
                    >
                        - More wellness insights
                    </motion.p>

                    {/* Right - Main Heading */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="lg:text-right"
                    >
                        <Header2 className="text-brand-dark !font-medium !leading-tight">
                            Real people, real results.
                        </Header2>
                    </motion.div>
                </div>

                {/* Testimonials Horizontal Scroll */}
                <div className="relative -mx-8 px-8 overflow-hidden">
                    <div 
                        ref={scrollContainerRef}
                        className="flex gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory mb-2 scrollbar-hide pb-4 scroll-smooth"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="testimonial-card flex-shrink-0 w-[85%] sm:w-[70%] lg:w-[calc(50%-16px)] snap-start">
                                <TestimonialCard testimonial={testimonial} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Navigation */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-gray-300">
                    {/* CTA Text */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="font-heading text-lg text-brand-dark"
                    >
                        Join the modern wellness community today
                    </motion.p>

                    {/* Navigation Arrows */}
                    <div className="flex gap-4">
                        <button
                            onClick={handlePrev}
                            className="w-12 h-12 rounded-full border border-brand-dark flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary hover:text-white transition-all duration-300"
                            aria-label="Previous testimonials"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="w-12 h-12 rounded-full border border-brand-dark flex items-center justify-center hover:bg-brand-primary hover:border-brand-primary hover:text-white transition-all duration-300"
                            aria-label="Next testimonials"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Hide scrollbar and enable smooth scrolling */}
            <style jsx>{`
                .scrollbar-hide {
                    -webkit-overflow-scrolling: touch;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scroll-smooth {
                    scroll-behavior: smooth;
                }
            `}</style>
        </section>
    );
}

