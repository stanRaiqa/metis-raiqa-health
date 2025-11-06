'use client';

import React from 'react';
import { Header4, Body1 } from '../../components/common/typography';
import { PrimaryButton } from '../../components/common/buttons';

interface ServicePageCTAProps {
    animate: boolean;
}

export default function ServicePageCTA({ animate }: ServicePageCTAProps) {
    return (
        <div
            className="text-center p-12 rounded-3xl"
            style={{
                background: 'linear-gradient(135deg, rgba(var(--color-primary-rgb), 0.1), rgba(var(--color-secondary-1-rgb), 0.1))',
                border: '1px solid rgba(var(--color-primary-rgb), 0.2)',
                transform: `translateY(${animate ? '0' : '40px'})`,
                opacity: animate ? 1 : 0,
                transition: 'transform 1s cubic-bezier(0.33, 1, 0.68, 1) 0.8s, opacity 1s ease 0.8s',
            }}
        >
            <Header4 className="mb-4">
                Not sure which service you need?
            </Header4>
            <Body1 className="mb-6">
                <span >
                    Our healthcare professionals are here to guide you. <br />Get personalized recommendations
                    based on your specific health concerns.
                </span>
            </Body1>
            <PrimaryButton
                href="/contact"
                className="inline-block px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
                Contact Our Team
            </PrimaryButton>
        </div>
    );
}
