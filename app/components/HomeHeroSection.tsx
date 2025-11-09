'use client';

import React from 'react';
import Image from 'next/image';
import { Header1, Header5, Caption, Header6, Body1, Header2 } from './common/typography';
import HeroSection from './layout/HeroSection';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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
    imageSrc = "/images/Metis_Hero_image.jpg",
    imageAlt = "Healthcare professional"
}: HomeHeroSectionProps) {
    // Get tomorrow's date dynamically
    const getTomorrowDate = () => {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        const month = tomorrow.toLocaleDateString('en-US', { month: 'short' });
        const day = tomorrow.getDate();
        return `${month} ${day}`;
    };

    const tomorrowDate = getTomorrowDate();

    // Custom overlay card content for home page
    // const overlayContent = (
    //     <div className="absolute bottom-6 left-6 right-6 bg-brand-light bg-opacity-20 rounded-2xl p-4 shadow-lg overflow-hidden">
    //         <div className="flex flex-col sm:flex-row gap-1 sm:gap-0 items-start sm:items-center justify-between">

    //             <motion.div
    //                 initial={{ opacity: 0, y: 30 }}
    //                 animate={{ opacity: 1, y: 0 }}
    //                 transition={{ duration: 0.6, delay: 0.2 }}
    //                 className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-"
    //             >
    //                 {treatmentCards.map((card, index) => (
    //                     <motion.div
    //                         key={card.id}
    //                         initial={{ opacity: 0, y: 20 }}
    //                         animate={{ opacity: 1, y: 0 }}
    //                         transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
    //                     >
    //                         <Link href={card.href}>
    //                             <div className="group relative bg-brand-primary-dark rounded-xl p-2 lg:p-4 hover:shadow-2xl transition-all duration-300 cursor-pointer h-auto flex w-full flex-col justify-between items-center gap-2">
    //                                 {/* Pill Image */}
    //                                 <div className="flex items-center justify-start gap-4 w-full">
    //                                     <div className={`${card.color} rounded-xl p-1 lg:p-2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12 shadow-md`}>
    //                                         <div className="relative w-8 h-8 lg:w-12 lg:h-12">
    //                                             <Image
    //                                                 src={card.image}
    //                                                 alt={`${card.title} treatment`}
    //                                                 fill
    //                                                 className="object-cover rounded-lg"
    //                                             />
    //                                         </div>
    //                                     </div>
    //                                     {/* Title */}

    //                                 </div>
    //                                 <div className='flex items-center justify-start w-full gap-2'>
    //                                     <span className='text-brand-light text-[#12px] text-nowrap font-semibold'>
    //                                         {card.title}
    //                                     </span>
    //                                     {/* Arrow Button */}
    //                                         <div className=" rounded-full  flex items-center justify-center transition-all duration-300 group-hover:scale-110 ">
    //                                             <ArrowRight className="w-5 h-5 text-brand-light  transition-colors duration-300" />
    //                                         </div>
    //                                 </div>
    //                             </div>
    //                         </Link>
    //                     </motion.div>
    //                 ))}
    //             </motion.div>
    //         </div>
    //     </div>
    // );
    const overlayContent = (
        <div className="absolute bottom-6 left-6 right-6 bg-white rounded-xl p-4 shadow-lg">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 items-start sm:items-center justify-between">
                <div>
                    <Header5 className="font-medium">
                        Your schedule this week
                    </Header5>
                    <div className="flex -space-x-2 mt-2">
                        <div className="w-8 h-8 rounded-full border-2  bg-brand-steel border-white overflow-hidden relative">
                            <Image
                                src="/images/avatar-1.png"
                                alt="Patient avatar"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="w-8 h-8 rounded-full border-2 bg-brand-teal border-white overflow-hidden relative">
                            <Image
                                src="/images/avatar-2.jpg"
                                alt="Patient avatar"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="w-8 h-8 rounded-full border-2 bg-brand-ice border-white overflow-hidden relative">
                            <Image
                                src="/images/avatar-3.jpg"
                                alt="Patient avatar"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="w-8 h-8 rounded-full bg-brand-primary border-2 z-20 border-white flex items-center justify-center text-white text-xs font-semibold">
                            +8
                        </div>
                    </div>
                </div>
                <div className="bg-brand-teal flex w-full sm:w-auto sm:flex-col items-center justify-between sm:justify-center rounded-lg p-3 text-right">
                    <div className="w-8 h-8 rounded-full border-2 bg-brand-ice border-white overflow-hidden relative">
                        <Image
                            src="/images/doctor.jpg"
                            alt="Doctor avatar"
                            fill
                            className="object-cover"
                            loading='lazy'
                        />
                    </div>
                    <div className='flex flex-col items-start sm:items-center w-auto'>
                        <Caption className="text-brand-light whitespace-nowrap">Dr. John Doe</Caption>
                        <hr className="hidden sm:block border-brand-primary-light" />
                        <div className="flex gap-1 items-center">
                            <Caption className="text-brand-light">Date:</Caption>
                            <Caption className="text-brand-light whitespace-nowrap">{tomorrowDate}</Caption>
                        </div>
                        <div className="flex gap-1 items-center justify-center">
                            <Caption className="text-brand-light">Time:</Caption>
                            <Caption className="text-brand-light whitespace-nowrap">10:00 am</Caption>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );

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
            primaryButtonHref="/get-started"
            secondaryButtonText={ctaTextSecondary}
            secondaryButtonHref="#how-it-works"
            imageSrc={imageSrc}
            imageAlt={imageAlt}
            overlayContent={
                <>
                    {/* {overlayContent} */}
                </>
            }
        />
    );
}

