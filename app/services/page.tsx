'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import LoadingSpinner from '../components/common/LoadingSpinner';
import {
    Header2,
    Body1,
    Body2,
} from '../components/common/typography';

// Create a minimal loading placeholder to reduce CLS
const SectionLoader = () => <div className="min-h-[200px] flex items-center justify-center"><LoadingSpinner size="small" className="opacity-60" /></div>;

// Configure loading priorities
// 1. Critical Path: Hero section and background effects (loaded normally)
// 2. Near Critical: Service cards grid (with ssr: false for client component)
// 3. Progressive Loading: Bottom CTA section (below fold, ssr: false)

interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
}

interface ServiceCard {
    title: string;
    description: string;
    link: string;
    icon: React.ReactNode;
    gradient: string;
}

// Lazy load components below the fold
const ServiceCardsGrid = dynamic(
    () => import('./components/ServiceCardsGrid'),
    { 
        loading: () => <SectionLoader />, 
        ssr: false 
    }
);

const ServicePageCTA = dynamic(
    () => import('./components/ServicePageCTA'),
    { 
        loading: () => <SectionLoader />, 
        ssr: false 
    }
);

export default function ServicePage() {
    const [animate, setAnimate] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Particle animation state
    const [particles] = useState<Particle[]>(() =>
        Array.from({ length: 40 }, () => ({
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 4 + 1,
            speedX: (Math.random() - 0.5) * 0.2,
            speedY: (Math.random() - 0.5) * 0.2,
            opacity: Math.random() * 0.4 + 0.1
        }))
    );

    // Used for parallax effect
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX / window.innerWidth,
                y: e.clientY / window.innerHeight
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Initial load animation
    useEffect(() => {
        setTimeout(() => setAnimate(true), 100);
    }, []);

    // Particle animation loop
    useEffect(() => {
        const animateParticles = () => {
            const particleElements = document.querySelectorAll('.service-particle');

            particles.forEach((particle, index) => {
                if (particleElements[index]) {
                    particle.x += particle.speedX;
                    particle.y += particle.speedY;

                    if (particle.x > 100) particle.x = 0;
                    if (particle.x < 0) particle.x = 100;
                    if (particle.y > 100) particle.y = 0;
                    if (particle.y < 0) particle.y = 100;

                    const el = particleElements[index] as HTMLElement;
                    el.style.left = `${particle.x}%`;
                    el.style.top = `${particle.y}%`;
                }
            });

            animationFrameId = requestAnimationFrame(animateParticles);
        };

        let animationFrameId = requestAnimationFrame(animateParticles);
        return () => cancelAnimationFrame(animationFrameId);
    }, [particles]);

    // Parallax movement values
    const parallaxX = (mousePosition.x - 0.5) * 20;
    const parallaxY = (mousePosition.y - 0.5) * 20;

    // Service cards data
    const services: ServiceCard[] = [
        {
            title: 'Skincare',
            description: 'Professional dermatological care for all skin types, including acne treatment, anti-aging solutions, and customized skincare routines.',
            link: '/services/skin-care',
            gradient: 'linear-gradient(135deg, var(--color-primary-dark), var(--color-cta))',
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="9" cy="10" r="1.5" fill="white" />
                    <circle cx="15" cy="10" r="1.5" fill="white" />
                    <path d="M8 15c1 1.5 3 2.5 4 2.5s3-1 4-2.5" />
                    <path d="M12 2C6.5 2 2 6.5 2 12" />
                </svg>
            )
        },
        {
            title: 'Hair Care',
            description: 'Advanced hair restoration treatments and therapies tailored to address various types of hair concerns and promote healthy hair growth.',
            link: '/services/hair-care',
            gradient: 'linear-gradient(135deg, var(--color-cta), var(--color-secondary-1))',
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2c-1.5 0-2.5 1-2.5 2.5S10.5 7 12 7s2.5-1 2.5-2.5S13.5 2 12 2z" />
                    <path d="M8 4c-1.5 0-2.5 1-2.5 2.5S6.5 9 8 9s2.5-1 2.5-2.5S9.5 4 8 4z" />
                    <path d="M16 4c-1.5 0-2.5 1-2.5 2.5S14.5 9 16 9s2.5-1 2.5-2.5S17.5 4 16 4z" />
                    <path d="M12 7v10" />
                    <path d="M8 9v8" />
                    <path d="M16 9v8" />
                    <circle cx="12" cy="19" r="3" fill="white" />
                </svg>
            )
        },
        {
            title: 'Sexual Health',
            description: 'Confidential and comprehensive sexual health services including fertility support, contraception, and overall wellness.',
            link: '/services/sexual-health',
            gradient: 'linear-gradient(135deg, var(--color-secondary-1), var(--color-primary))',
            icon: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    <path d="M12 6v5" />
                    <path d="M9.5 8.5h5" />
                </svg>
            )
        }
    ];

    return (
        <div
            className="min-h-screen py-10 px-8 overflow-hidden mt-20"
            style={{
                background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(var(--color-primary-rgb), 0.08), rgba(255, 255, 255, 0.95))`,
                color: 'var(--color-base-dark)',
                position: 'relative'
            }}
        >
            {/* Moving background particles */}
            {particles.map((particle, index) => (
                <div
                    key={index}
                    className="service-particle absolute rounded-full pointer-events-none"
                    style={{
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        background: index % 3 === 0 ? 'var(--color-primary)' : index % 3 === 1 ? 'var(--color-secondary-1)' : 'var(--color-cta)',
                        opacity: particle.opacity,
                        filter: 'blur(1px)',
                        zIndex: 0
                    }}
                />
            ))}

            {/* Floating gradient orbs */}
            <div
                className="absolute opacity-15 rounded-full pointer-events-none animate-float-slow"
                style={{
                    width: '400px',
                    height: '400px',
                    left: '10%',
                    top: '15%',
                    background: 'radial-gradient(circle at center, var(--color-primary), transparent 70%)',
                    transform: `translate(${parallaxX * 0.3}px, ${parallaxY * 0.3}px)`,
                    zIndex: 0
                }}
            />
            <div
                className="absolute opacity-15 rounded-full pointer-events-none animate-float-medium"
                style={{
                    width: '350px',
                    height: '350px',
                    right: '10%',
                    bottom: '10%',
                    background: 'radial-gradient(circle at center, var(--color-secondary-1), transparent 70%)',
                    transform: `translate(${-parallaxX * 0.2}px, ${-parallaxY * 0.2}px)`,
                    zIndex: 0
                }}
            />
            <div
                className="absolute opacity-15 rounded-full pointer-events-none animate-float-fast"
                style={{
                    width: '300px',
                    height: '300px',
                    right: '20%',
                    top: '20%',
                    background: 'radial-gradient(circle at center, var(--color-cta), transparent 70%)',
                    transform: `translate(${-parallaxX * 0.4}px, ${-parallaxY * 0.4}px)`,
                    zIndex: 0
                }}
            />

            {/* Main Content */}
            <div className={`max-w-[1280px] mx-auto relative z-10 transition-all duration-1000 transform ${animate ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>

                {/* Hero Section */}
                <div className="text-center flex flex-col items-center gap-3 mb-6">
                    <div
                        className="inline-block px-6 py-2 rounded-full"
                        style={{
                            background: 'linear-gradient(135deg, rgba(var(--color-primary-rgb), 0.15), rgba(var(--color-secondary-1-rgb), 0.15))',
                            border: '1px solid rgba(var(--color-primary-rgb), 0.3)'
                        }}
                    >
                        <Body2 className="text-brand-primary">

                            Choose Your Health Journey

                        </Body2>
                    </div>

                    <Header2 className=" !text-brand-primary !font-medium">
                        Our Healthcare Services
                    </Header2>


                    <Body1 className="max-w-3xl mx-auto">
                        <span >
                            Select the service that best fits your health needs. Our expert team provides
                            personalized care and support.
                        </span>
                    </Body1>
                </div>

                {/* Service Cards Grid - Lazy Loaded */}
                <ServiceCardsGrid services={services} animate={animate} />

                {/* Bottom CTA Section - Lazy Loaded */}
                <ServicePageCTA animate={animate} />
            </div>

            {/* Global animations */}
            <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
        
        .animate-pulse {
          animation: pulse 4s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.25; }
        }
      `}</style>
        </div>
    );
}

