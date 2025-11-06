'use client';

import React from 'react';
import Link from 'next/link';
import { Header5, Body2 } from '../../components/common/typography';

interface ServiceCard {
    title: string;
    description: string;
    link: string;
    icon: React.ReactNode;
    gradient: string;
}

interface ServiceCardsGridProps {
    services: ServiceCard[];
    animate: boolean;
}

export default function ServiceCardsGrid({ services, animate }: ServiceCardsGridProps) {
    return (
        <div className="flex flex-wrap justify-center items-stretch gap-8 mb-12">
            {services.map((service, index) => (
                <Link
                    href={service.link}
                    key={index}
                    className="group relative w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
                    style={{
                        transform: `translateY(${animate ? '0' : '60px'})`,
                        opacity: animate ? 1 : 0,
                        transition: `transform 0.8s cubic-bezier(0.33, 1, 0.68, 1) ${0.2 + index * 0.1}s, opacity 0.8s ease ${0.2 + index * 0.1}s`,
                    }}
                >
                    <div
                        className="relative p-8 rounded-xl transition-all duration-300 h-full overflow-hidden hover:shadow-md group-hover:border-brand-lavender bg-gradient-to-br from-brand-light via-brand-secondary to-brand-neutral-light"
                        style={{
                            border: '1px solid var(--color-neutral)',
                            backdropFilter: 'blur(10px)',
                        }}
                    >
                        <div className="relative z-10">
                            {/* Icon */}
                            <div
                                className="w-16 h-16 rounded-lg mb-6 flex items-center justify-center bg-brand-primary transform transition-all duration-300 group-hover:scale-105"
                            >
                                {service.icon}
                            </div>

                            {/* Title */}
                            <Header5 className="mb-4 transition-colors !font-medium duration-300">
                                {service.title}
                            </Header5>

                            {/* Divider */}
                            <div
                                className="w-12 h-0.5 rounded-full mb-4 transition-all duration-500 group-hover:w-full"
                                style={{
                                    background: service.gradient,
                                }}
                            />

                            {/* Description */}
                            <Body2 className="transition-colors text-brand-dark duration-300 mb-6">
                                
                                    {service.description}
                              
                            </Body2>

                            {/* Call to action */}
                            <div className="flex items-center gap-2 transition-all text-brand-primary duration-300 group-hover:gap-4">
                                <span
                                    style={{
                                        fontWeight: '600',
                                        fontSize: '0.95rem'
                                    }}
                                >
                                    Learn More
                                </span>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="var(--color-primary)"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="transition-transform duration-300 group-hover:translate-x-2"
                                >
                                    <path d="M5 12h14" />
                                    <path d="m12 5 7 7-7 7" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
