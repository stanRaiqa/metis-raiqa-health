'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Header1, Body1, Header6 } from './common/typography';
import Link from 'next/link';
import Header from './layout/Header';

/**
 * Home Hero Section 2 Component
 * Modern hero section with treatment cards
 * - Large heading with gradient background
 * - Treatment cards grid
 * - Fully responsive design
 * - Standard 32px (px-8) horizontal padding
 * 
 * @note All section components should use px-8 (32px) for consistent horizontal padding
 */

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

export default function HomeHeroSection2() {
    return (
        <section className="relative bg-gradient-to-b from-brand-primary via-brand-primary to-brand-steel min-h-[calc(100vh-80px)] flex items-center overflow-hidden">
            {/* Container with 32px horizontal padding (px-8) as design system standard */}
            <div className="max-w-[1280px] mx-auto px-8 py-12 lg:py-20 w-full">
                {/* Hero Content */}
                <div className="text-center mb-4 lg:mb-8">
                    {/* Main Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Header1 className="text-white font-bold text-left">
                            Better healthcare,<br />
                            <span className="text-[#1b1f89]">for the boys</span>
                            {/* <span className="text-brand-light">for the boys</span> */}
                        </Header1>
                    </motion.div>
                    <hr className="my-4 border-brand-neutral" />
                    {/* Subtitle */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className='flex justify-start items-start w-full'
                    >
                        <Body1 className='text-brand-light'>
                            Get simple treatment for sensitive issues. Online and discreet.
                        </Body1>
                    </motion.div>
                </div>


                {/* Treatment Cards Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
                >
                    {treatmentCards.map((card, index) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        >
                            <Link href={card.href}>
                                <div className="group relative bg-white rounded-2xl p-2 lg:p-4 hover:shadow-2xl transition-all duration-300 cursor-pointer h-auto flex w-full justify-between items-center">
                                    {/* Pill Image */}
                                    <div className="flex items-center justify-start gap-4 w-full">
                                        <div className={`${card.color} rounded-2xl p-3 lg:p-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 shadow-md`}>
                                            <div className="relative w-12 h-12 lg:w-16 lg:h-16">
                                                <Image
                                                    src={card.image}
                                                    alt={`${card.title} treatment`}
                                                    fill
                                                    className="object-cover rounded-lg"
                                                />
                                            </div>
                                        </div>
                                        {/* Title */}
                                        <Header6 >
                                            {card.title}
                                        </Header6>
                                    </div>


                                    {/* Arrow Button */}
                                    <div className="flex justify-start mt-4">
                                        <div className="w-10 h-10 rounded-full bg-brand-ice flex items-center justify-center group-hover:bg-brand-primary transition-all duration-300 group-hover:scale-110 shadow-sm">
                                            <ArrowRight className="w-5 h-5 text-brand-primary group-hover:text-white transition-colors duration-300" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none overflow-hidden">
                <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-40 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>
        </section>
    );
}
