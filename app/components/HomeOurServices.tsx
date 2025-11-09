'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Shield, Pill, UtensilsCrossed, Award, HeartHandshake } from 'lucide-react';
import { Header2, Body1, Header3 } from './common/typography';
import BodyXXL from './common/typography/BodyXXL';

/**
 * Our Services Component
 * Infinite scrolling services section with:
 * - Ten service categories showcasing health benefits
 * - Infinite horizontal scroll animation
 * - Design system colors and typography
 * - Standard 32px (px-8) horizontal padding
 * - Max-width: 1280px
 */

interface ServiceCard {
    id: number;
    title: string;
    icon: React.ReactNode;
    description: string;
}

const services: ServiceCard[] = [
    {
        id: 1,
        title: '1 on 1 lifestyle coaching',
        icon: <Users className="w-8 h-8" />,
        description: 'Personalized coaching for your health goals'
    },
    {
        id: 2,
        title: 'Backed by GP',
        icon: <Shield className="w-8 h-8" />,
        description: 'Professional medical oversight and support'
    },
    {
        id: 3,
        title: 'Modern medical treatments',
        icon: <Pill className="w-8 h-8" />,
        description: 'Latest evidence-based treatment options'
    },
    {
        id: 4,
        title: 'Dietitian-led meal plans',
        icon: <UtensilsCrossed className="w-8 h-8" />,
        description: 'Customized nutrition plans for optimal health'
    },
    {
        id: 5,
        title: 'Accredited doctors',
        icon: <Award className="w-8 h-8" />,
        description: 'Qualified healthcare professionals you can trust'
    },
    {
        id: 6,
        title: 'Supportive community',
        icon: <HeartHandshake className="w-8 h-8" />,
        description: 'Connect with others on the same journey'
    }
];

export default function HomeOurServices() {
    // Duplicate services array for seamless infinite scroll
    const duplicatedServices = [...services, ...services, ...services];

    return (
        <section className="relative bg-brand-terracotta mx-2 sm:mx-4 py-2 sm:py-0 rounded-lg overflow-hidden">
            

            {/* Infinite Scroll Container */}
            <div className="relative">
                {/* Gradient Overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-brand-terracotta to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-brand-terracotta to-transparent z-10 pointer-events-none"></div>

                {/* Scrolling Track */}
                <motion.div
                    className="flex gap-8 sm:gap-4"
                    animate={{
                        x: [0, -1 * (services.length * 150)], // Move by the width of one set
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 20,
                            ease: [0, 0, 1, 1],
                        },
                    }}
                >
                    {duplicatedServices.map((service, index) => (
                        <div
                            key={`${service.id}-${index}`}
                            className="flex-shrink-0 w-auto sm:w-[380px]"
                        >
                            <div className=" flex flex-row items-center justify-center rounded-2xl  transition-shadow duration-300 h-full">
                                {/* Icon */}
                                <div className="w-8 sm:w-16 h-8 sm:h-16 rounded-full flex  items-center justify-center text-brand-light">
                                    {service.icon}
                                </div>

                                {/* Title */}
                                <Body1 className=" text-brand-light ">
                                    {service.title}
                                </Body1>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

