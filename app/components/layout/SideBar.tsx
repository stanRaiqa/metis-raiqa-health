'use client';

import React, {Component, ReactNode, useState, useEffect, useRef} from 'react';
import { Drawer } from 'vaul';
import {AskRaiqaButton, PrimaryButton, RectangleButton, SecondaryButton} from "@/app/components/common/buttons";
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {useTheme} from "@/app/theming/ThemeProvider";
import {
    Header3,
    Header4,
    Header5,
    Body1,
    Body2,
    Body3,
    Body4,
    Subtitle1, Header6
} from '@/app/components/common/typography';
import { useRouter } from 'next/navigation';
import TertiaryButton from "@/app/components/common/buttons/TertiaryButton";
import {isFeatureEnabled} from "@/app/config/versionConfig";

interface SideBarProps {
    buttonType?: string;
    children: ReactNode;
    initialActiveDrawer?: string | null;
}

export default function SideBar({ buttonType = "primary", children, initialActiveDrawer = null }: SideBarProps) {
    const [activeDrawer, setActiveDrawer] = useState<string | null>(initialActiveDrawer);
    const videoRef = useRef<HTMLVideoElement>(null);
    const { currentTheme } = useTheme();
    const router = useRouter();
    const catalystOrange500 = currentTheme?.["brand colors"]?.raiqa?.['Catalyst Orange']?.["500"] || "#FF6B00";
    const quantumOrchid500 = currentTheme?.["brand colors"]?.raiqa?.['Quantum Orchid']?.["500"] || "#F649C5";

    useEffect(() => {
        // Enhanced video playback for iOS compatibility
        const video = videoRef.current;
        if (video) {
            // Set essential attributes for iOS
            video.playsInline = true;
            video.muted = true;
            video.setAttribute('playsinline', 'true');
            video.setAttribute('webkit-playsinline', 'true');
            
            // Delayed play attempt
            const playPromise = video.play();
            
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    // Handle autoplay restrictions gracefully
                    console.warn("Sidebar video autoplay prevented:", error);
                    
                    // Add user interaction handler to play video
                    const playOnInteraction = () => {
                        video.play().catch(e => {
                            console.warn("Still unable to play sidebar video:", e);
                        });
                    };
                    
                    // Listen for user interaction to play video
                    document.addEventListener('touchstart', playOnInteraction, { once: true });
                    document.addEventListener('click', playOnInteraction, { once: true });
                });
            }
        }
    }, []);

    const handleMainOptionClick = (drawer: string) => {
        setActiveDrawer(drawer);
    };

    const handleBackClick = () => {
        setActiveDrawer(null);
    };

    const handleChatTalkClick = () => {
        router.push('/patient/join');
    };

    const logoContainerStyle = {
        border: "2px solid transparent",
        backgroundImage: `linear-gradient(white, white), linear-gradient(to right, ${quantumOrchid500}, ${catalystOrange500})`,
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
        cursor: "default",
    };

    return (
        <Drawer.Root direction="right" shouldScaleBackground>
            <Drawer.Trigger asChild>
                {buttonType === 'primary' ? (
                    <PrimaryButton>{children}</PrimaryButton>
                ) : buttonType === 'secondary' ? (
                    <SecondaryButton>{children}</SecondaryButton>
                ) : buttonType === 'rectangle' ? (
                    <RectangleButton>{children}</RectangleButton>
                ) : buttonType === 'tertiary' ? (
                    <TertiaryButton>{children}</TertiaryButton>
                ) : buttonType === 'custom' ? (
                    <div className="cursor-pointer">{children}</div>
                ) : (
                    <AskRaiqaButton>{children}</AskRaiqaButton>
                )}
            </Drawer.Trigger>
            <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
                <Drawer.Content
                    className="right-0 top-0 bottom-0 fixed z-50 outline-none w-full sm:w-full lg:w-[40%] flex"
                    style={{ '--initial-transform': 'calc(100% + 8px)' } as React.CSSProperties}
                >
                    <div className="bg-white/50 backdrop-blur-xl h-full w-full grow p-[64px] flex flex-col border border-gray-100 shadow-lg overflow-y-auto">
                        <AnimatePresence mode="wait">
                            {!activeDrawer ? (
                                <motion.div 
                                    key="main-menu"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    transition={{ duration: 0.3 }}
                                    className="h-full flex flex-col gap-3"
                                >
                                    {/* Logo and Header */}
                                    <div className="relative flex justify-center mb-2">
                                        <video
                                            ref={videoRef}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            preload="none"
                                            disablePictureInPicture
                                            className="w-[100px] h-[100px] sm:w-[55px] xl:w-[100px] sm:h-[55px] rounded-full xl:h-[100px] -ml-[18px] sm:-ml-[18px] md:-ml-0 lg:-ml-0"
                                            style={logoContainerStyle}
                                        >
                                            <source src='/images/symbol_not_looped_new.mp4' type="video/mp4" />
                                        </video>
                                    </div>

                                    {/* Intro Text */}
                                    <div className="mb-4 text-center">
                                        <Header5 className="text-[#000936] mb-1">
                                            Raiqa can help you in various different ways..
                                        </Header5>
                                        <Body1 className="text-[#000936]">
                                            with Raiqa you can,
                                        </Body1>
                                    </div>

                                    {/* Main Options */}
                                    <div className="flex flex-col gap-3">
                                        <SidebarOption 
                                            title="Chat with me"
                                            description="Get help with anything by typing."
                                            onClick={handleChatTalkClick}
                                            imageSrc="/images/girl-chatting.png"
                                        />
                                        
                                        <SidebarOption 
                                            title="Talk to me"
                                            description="Get help with anything by talking."
                                            onClick={handleChatTalkClick}
                                            imageSrc="/images/man-chatting.png"
                                        />
                                        
                                        <SidebarOption 
                                            title="Browse Services"
                                            description="Click and select from list of all the services."
                                            onClick={() => handleMainOptionClick('services')}
                                            icon={
                                                <div className="w-12 h-12 rounded-full bg-[#F5F4FC] flex items-center justify-center border border-[rgba(210,206,248,0.3)]">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M22 10V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H14" stroke="#3116C8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M7 9.5H17" stroke="#1BE1EA" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M7 14.5H14" stroke="#1BE1EA" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M17.25 22.25C19.3211 22.25 21 20.5711 21 18.5C21 16.4289 19.3211 14.75 17.25 14.75C15.1789 14.75 13.5 16.4289 13.5 18.5C13.5 20.5711 15.1789 22.25 17.25 22.25Z" stroke="#1BE1EA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M21 21L19.2 19.2" stroke="#1BE1EA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </div>
                                            }
                                        />
                                        
                                        <SidebarOption 
                                            title="Browse Conditions"
                                            description="Click and select from any of the known conditions."
                                            onClick={() => handleMainOptionClick('conditions')}
                                            icon={
                                                <div className="w-12 h-12 rounded-full bg-[#F5F4FC] flex items-center justify-center border border-[rgba(210,206,248,0.3)]">
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12.9 7.93996L15.52 10.56C16.29 11.33 16.29 12.59 15.52 13.36L9 19.87C8.71 20.16 8.35 20.36 7.95 20.44L4.18 21.18C3.78 21.25 3.4 21.16 3.12 20.88C2.84 20.6 2.76 20.22 2.82 19.82L3.58 16.05C3.66 15.65 3.86 15.29 4.15 15L10.67 8.47996C10.67 8.47996 11.95 7.19996 12.9 7.93996Z" stroke="#3116C8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M8.5 14.5L14.5 8.5" stroke="#1BE1EA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                        <path d="M14.36 5.15002L15.23 4.23002C16.52 2.94002 18.6 2.94002 19.89 4.23002C21.18 5.52002 21.18 7.60002 19.89 8.89002L18.92 9.86002" stroke="#1BE1EA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </div>
                                            }
                                        />
                                    </div>
                                </motion.div>
                            ) : activeDrawer === 'services' ? (
                                <motion.div
                                    key="services-menu"
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 100 }}
                                    transition={{ duration: 0.3 }}
                                    className="h-full w-full"
                                >
                                    <ServicesList onBackClick={handleBackClick} onItemClick={() => router.push('/patient/join')} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="conditions-menu"
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 100 }}
                                    transition={{ duration: 0.3 }}
                                    className="h-full w-full"
                                >
                                    <ConditionsList onBackClick={handleBackClick} onItemClick={() => router.push('/patient/join')} />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Close Button */}
                        <Drawer.Close asChild>
                            <button 
                                className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center bg-white border border-gray-200 z-10"
                            >
                                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L13 13M1 13L13 1" stroke="#000936" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </Drawer.Close>
                    </div>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    );
}

interface SidebarOptionProps {
    title: string;
    description: string;
    onClick: () => void;
    icon?: React.ReactNode;
    imageSrc?: string;
}

function SidebarOption({ title, description, onClick, icon, imageSrc }: SidebarOptionProps) {
    return (
        <button
            onClick={onClick}
            className="flex items-center gap-3 bg-white/80 backdrop-blur-md p-[24px] rounded-2xl border border-white shadow-sm hover:shadow-md transition-all"
        >
            {imageSrc ? (
                <Image 
                    src={imageSrc} 
                    alt={title}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                />
            ) : icon || (
                <div className="w-12 h-12 rounded-full bg-[#F5F4FC] flex items-center justify-center border border-[rgba(210,206,248,0.3)]">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1BE1EA] via-[#3116C8] to-[#1C03FF]"></div>
                </div>
            )}
            <div className="text-left">
                <Header6 className="text-[#000205]">{title}</Header6>
                <Body1 className="text-[#0F172A]">{description}</Body1>
            </div>
        </button>
    );
}

interface BackButtonProps {
    onBackClick: () => void;
    onItemClick: () => void;
}

function ServicesList({ onBackClick, onItemClick }: BackButtonProps) {
    const useRoutingFormButton = isFeatureEnabled("useRoutingFormButton");
    return (

        <div className="h-full flex flex-col">
            <div className="flex items-center mb-4">
                <button 
                    onClick={onBackClick}
                    className="flex items-center gap-2 text-[#000936] font-medium"
                >
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.8332 10H4.1665" stroke="#000936" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9.99984 15.8334L4.1665 10.0001L9.99984 4.16675" stroke="#000936" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <Body3>Back</Body3>
                </button>
            </div>

            <Header4 className="text-[#000936] mb-4">Our Services</Header4>
            
            <div className="flex flex-col gap-2 overflow-y-auto">
                {["General Consultations", "Specialist Referrals", "Health Check-ups", "Preventive Care", 
                "Mental Health Support", "Chronic Disease Management", "Telemedicine", "Wellness Programs", 
                "Women's Health", "Men's Health", "Pediatric Care"].map((service, index) => (

                        useRoutingFormButton ?
                            <button
                                key={index}
                                className="text-left p-3 bg-white/80 rounded-xl shadow-sm hover:shadow-md transition-all"
                                data-cal-namespace="exerc"
                                data-cal-link="forms/64437f21-23ec-462e-9deb-06201774b2b1"
                                data-cal-origin="https://connect-qa.raiqa.health"
                                data-cal-config='{"layout":"month_view","theme":"light"}'
                            >
                                <Body1 className="font-medium text-[#000936]">{service}</Body1>
                            </button> :
                            <button
                                key={index}
                                className="text-left p-3 bg-white/80 rounded-xl shadow-sm hover:shadow-md transition-all"
                                onClick={onItemClick}
                            >
                                <Body1 className="font-medium text-[#000936]">{service}</Body1>
                            </button>


                ))}
            </div>
        </div>
    );
}

function ConditionsList({ onBackClick, onItemClick }: BackButtonProps) {
    return (
        <div className="h-full flex flex-col">
            <div className="flex items-center mb-4">
                <button 
                    onClick={onBackClick}
                    className="flex items-center gap-2 text-[#000936] font-medium"
                >
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.8332 10H4.1665" stroke="#000936" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9.99984 15.8334L4.1665 10.0001L9.99984 4.16675" stroke="#000936" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <Body3>Back</Body3>
                </button>
            </div>

            <Header4 className="text-[#000936] mb-4">Common Conditions</Header4>
            
            <div className="flex flex-col gap-2 overflow-y-auto">
                {["Diabetes", "Hypertension", "Asthma", "Allergies", "Arthritis", 
                "Depression", "Anxiety", "Heart Disease", "COPD", "Migraines", 
                "Back Pain", "Obesity", "Thyroid Disorders"].map((condition, index) => (
                    <button 
                        key={index}
                        className="text-left p-3 bg-white/80 rounded-xl shadow-sm hover:shadow-md transition-all"
                        onClick={onItemClick}
                    >
                        <Body1 className="font-medium text-[#000936]">{condition}</Body1>
                    </button>
                ))}
            </div>
        </div>
    );
}

