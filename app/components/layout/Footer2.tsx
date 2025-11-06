'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {Body1, Body2, Body3} from "../common/typography";
import {usePathname} from "next/navigation";
import {FooterItems} from "../../enum"
import {useTheme} from "@/app/theming/ThemeProvider";

export default function Footer2() {
  const {currentTheme} = useTheme()
  const bgColor = currentTheme?.["brand colors"]?.health?.Purple?.["900"];
  const pathname = usePathname();
  let firstPathSegment = pathname?.split('/')[1] || '';
  const isPractitioner = firstPathSegment === 'practitioner';
  // const filteredFooterItems = FooterItems.filter(item => (isPractitioner ? item.category == 'practitioner' : item.category == 'patient') || item.category == 'both');
  const filteredFooterItems = isPractitioner ? FooterItems.filter(item => ( item.category == 'practitioner'|| item.category == 'both')) : FooterItems.filter(item => ( item.category == 'patient'|| item.category == 'both'));
  return (
    <footer className="py-6 px-4 sm:py-8 sm:px-6" style={{backgroundColor: bgColor}}>
      <div className="container">
        {/* Logo and Links Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-4 sm:mb-6">
          {/* Logo */}
          <div className="mb-4 sm:mb-0 flex flex-col sm:flex-row lg:flex-col items-center">
            <Image
              src="/images/footer_logo.png"
              alt="Raiqa Health Logo"
              width={120}
              height={96}
              priority={false}
              className="h-20 w-auto xl:h-28"
            />
            <Body2 className="text-[#F5F4FC]">Your health, simplified</Body2>
          </div>
          
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-sm md:text-base">
            {filteredFooterItems.map((item, index) => (
              <Link 
                key={index} 
                href={item.link}
                className="text-[#F5F4FC] font-neulis-sans hover:opacity-80 transition-opacity"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Divider */}
        <div className="h-px bg-white/20 mb-6" />
        
        {/* Address and Contact Details */}
        <div className="flex flex-col items-center mb-6">
          <div className="max-w-2xl mx-auto text-center">
            <Body2 className="text-[#F5F4FC] mb-4 text-base">
              Lobby 1, Level 2/76 Skyring Terrace, Newstead QLD 4006
            </Body2>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#F5F4FC"/>
                  <path d="M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z" fill="#F5F4FC"/>
                </svg>
                <Body2 className="text-[#F5F4FC]">ABN: 56 682 310 818</Body2>
              </div>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM19.6 8.25L12.53 12.67C12.21 12.87 11.79 12.87 11.47 12.67L4.4 8.25C4.15 8.09 4 7.82 4 7.53C4 6.86 4.73 6.46 5.3 6.81L12 11L18.7 6.81C19.27 6.46 20 6.86 20 7.53C20 7.82 19.85 8.09 19.6 8.25Z" fill="#F5F4FC"/>
                </svg>
                <Body2 className="text-[#F5F4FC]">support@raiqa.health</Body2>
              </div>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.13 14.7 15.74 14.79 15.47 15.06L13.9 17.03C11.07 15.68 8.42 13.13 7.01 10.2L8.96 8.54C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z" fill="#F5F4FC"/>
                </svg>
                <Body2 className="text-[#F5F4FC]">1300 0RAIQA</Body2>
              </div>
            </div>
             <Body3 className="text-[#F5F4FC] mt-4 text-base">
               For emergency or urgent medical help, call 000
             </Body3>
             
             {/* Divider */}
             <div className="h-0.5 bg-white my-6" />
             
             {/* LegitScript Verification */}
             <div className="flex flex-col items-center mt-6 mb-4">
               <Body2 className="text-white mb-2">
                 Certified By
               </Body2>
               <a 
                 href="https://www.legitscript.com/websites/?checker_keywords=raiqa.health" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 title="Verify LegitScript Approval for www.raiqa.health"
                 className="hover:opacity-80 transition-opacity"
               >
                 <Image 
                   src="https://static.legitscript.com/seals/44496772.png" 
                   alt="Verify Approval for www.raiqa.health" 
                   width={73} 
                   height={79}
                   className="w-16 h-auto sm:w-18 md:w-20 lg:w-[73px]"
                 />
               </a>
             </div>
          </div>
        </div>
        
        {/* Copyright and Social Row */}
        <div className="flex flex-col sm:flex-row items-center text-center justify-between">
          {/* Copyright */}
          <Body2 className="text-[#F5F4FC] mb-3 sm:mb-0 text-xs sm:text-sm opacity-80">
            © 2025 Raiqa Health. All rights reserved.
          </Body2>
          
          {/* Social Icons */}
          <div className="flex gap-3">
            <Link href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61575972839309" aria-label="Facebook" className="w-7 h-7 rounded-full border border-[#ABA1F5] flex items-center justify-center hover:opacity-80 transition-opacity">
              <svg width="7" height="14" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.11163 3.29509H9.92331V0.139742C9.61075 0.0967442 8.53581 0 7.28393 0C4.67183 0 2.88248 1.643 2.88248 4.66274V7.44186H0V10.9693H2.88248V19.845H6.41654V10.9701H9.18243L9.6215 7.44269H6.41571V5.01251C6.41654 3.99297 6.69106 3.29509 8.11163 3.29509Z" fill="#F5F4FC"/>
              </svg>
            </Link>
            <Link href="https://www.linkedin.com/company/raiqa-ai-health/" aria-label="LinkedIn" className="w-7 h-7 rounded-full border border-[#ABA1F5] flex items-center justify-center hover:opacity-80 transition-opacity">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#F5F4FC"/>
              </svg>
            </Link>
            <Link href="https://x.com/RaiqaHealth" aria-label="Twitter" className="w-7 h-7 rounded-full border border-[#ABA1F5] flex items-center justify-center hover:opacity-80 transition-opacity">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153ZM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644Z" fill="#F5F4FC"/>
              </svg>
            </Link>
            <Link href="https://www.instagram.com/raiqahealth" aria-label="Instagram" className="w-7 h-7 rounded-full border border-[#ABA1F5] flex items-center justify-center hover:opacity-80 transition-opacity">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill="#F5F4FC"/>
              </svg>
            </Link>
            <Link href="https://www.tiktok.com/@raiqahealth" aria-label="TikTok" className="w-7 h-7 rounded-full border border-[#ABA1F5] flex items-center justify-center hover:opacity-80 transition-opacity">
              <svg width="12" height="14" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.25 0C9.31 0 10.37 0 11.43 0C11.46 0.12 11.49 0.23 11.52 0.35C11.58 1.35 11.88 2.27 12.42 3.08C12.96 3.89 13.68 4.47 14.56 4.84C14.62 4.87 14.68 4.89 14.75 4.92C14.75 5.98 14.75 7.04 14.75 8.1C14.67 8.1 14.59 8.11 14.51 8.1C13.26 7.95 12.13 7.45 11.1 6.63C10.96 6.53 10.83 6.43 10.68 6.31C10.68 6.39 10.68 6.45 10.68 6.51C10.68 9.25 10.68 11.99 10.68 14.73C10.68 16.03 10.14 17.04 9.05 17.71C8.27 18.2 7.41 18.37 6.5 18.21C5.27 17.99 4.33 17.36 3.7 16.23C3.33 15.56 3.18 14.83 3.25 14.07C3.36 12.78 3.97 11.81 5.09 11.16C5.82 10.74 6.61 10.59 7.44 10.69C7.55 10.7 7.66 10.73 7.78 10.75C7.78 11.27 7.78 11.78 7.78 12.32C7.67 12.29 7.58 12.27 7.48 12.24C6.89 12.08 6.32 12.11 5.78 12.37C5.23 12.63 4.85 13.05 4.68 13.65C4.52 14.19 4.56 14.73 4.82 15.24C5.26 16.07 6.07 16.44 6.91 16.22C7.41 16.09 7.77 15.76 7.97 15.28C8.02 15.16 8.05 15.03 8.05 14.9C8.06 11.67 8.06 8.44 8.06 5.21C8.06 5.11 8.06 5.01 8.06 4.91C8.13 4.91 8.18 4.91 8.24 4.91C9.11 4.91 9.99 4.91 10.86 4.91C10.94 4.91 10.95 4.88 10.91 4.81C10.72 4.47 10.55 4.12 10.4 3.76C10.08 3.02 9.95 2.25 9.96 1.45C9.96 1.25 9.98 1.05 10 0.86C10.01 0.75 9.98 0.7 9.87 0.7C9.37 0.7 8.87 0.7 8.38 0.7C8.34 0.7 8.3 0.7 8.25 0.7C8.25 0.46 8.25 0.23 8.25 0Z" fill="#F5F4FC"/>
              </svg>
            </Link>
            <Link href="https://www.youtube.com/@RaiqaHealth" aria-label="YouTube" className="w-7 h-7 rounded-full border border-[#ABA1F5] flex items-center justify-center hover:opacity-80 transition-opacity">
              <svg width="14" height="10" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.5 4.21C23.5 4.21 23.26 2.59 22.51 1.84C21.57 0.86 20.52 0.86 20.05 0.8C16.76 0.56 12 0.56 12 0.56C12 0.56 7.24 0.56 3.95 0.8C3.48 0.86 2.43 0.86 1.49 1.84C0.74 2.59 0.5 4.21 0.5 4.21C0.5 4.21 0.25 6.13 0.25 8.03V9.81C0.25 11.72 0.5 13.63 0.5 13.63C0.5 13.63 0.74 15.26 1.49 16C2.43 16.98 3.66 16.95 4.2 17.05C6.1 17.23 12 17.27 12 17.27C12 17.27 16.76 17.26 20.05 17.03C20.52 16.97 21.57 16.97 22.51 15.99C23.26 15.25 23.5 13.62 23.5 13.62C23.5 13.62 23.75 11.71 23.75 9.8V8.03C23.75 6.12 23.5 4.21 23.5 4.21ZM9.62 11.8V5.5L15.87 8.65L9.62 11.8Z" fill="#F5F4FC"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
