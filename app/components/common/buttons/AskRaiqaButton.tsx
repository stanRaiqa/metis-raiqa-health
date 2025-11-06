'use client';

import React, {ButtonHTMLAttributes, ReactNode, CSSProperties, useRef, useEffect} from 'react';
import Link from "next/link";
import Image from "next/image";
import { Link as SanityLink } from "@/sanity.types";
import { linkResolver } from "@/sanity/lib/utils";
import { useTheme } from "@/app/theming/ThemeProvider";

interface AskRaiqaButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
  fullWidth?: boolean;
  href?: SanityLink;
  imageUrl?: string;
  size?: string;
}

export const AskRaiqaButton = ({
  children = "Ask Raiqa",
  className = '',
  fullWidth = false,
  size = 'medium',
  imageUrl = "/images/Frame 10123132.png", // Default image path
  ...props
}: AskRaiqaButtonProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { currentTheme } = useTheme();
  const buttonUrl = (props.href?.linkType == "href" ? (linkResolver(props.href) || '/') : props.href?.linkType == "slug" ? (props.href?.slug?.includes("/") ? props.href?.slug : "/"+props.href?.slug) : props.href) || "/";
  
  // Get theme colors
  const blue700 = currentTheme?.["brand colors"]?.health?.Blue?.["700"] || "#806EEE";
  const purple200 = currentTheme?.["brand colors"]?.health?.Purple?.["200"] || "#A699F4";
  const purple400 = currentTheme?.["brand colors"]?.health?.Purple?.["400"] || "#6A55E8";
  const teal500 = currentTheme?.["brand colors"]?.health?.Teal?.["500"] || "#0AB6B6";
  const primaryColor = currentTheme.colors?.primary || "#4299E1";
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
          console.warn("Video autoplay prevented:", error);
          
          // Add user interaction handler to play video
          const playOnInteraction = () => {
            video.play().catch(e => {
              console.warn("Still unable to play video:", e);
            });
          };
          
          // Listen for user interaction to play video
          document.addEventListener('touchstart', playOnInteraction, { once: true });
          document.addEventListener('click', playOnInteraction, { once: true });
        });
      }
    }
  }, []);

  const getPadding = () => {
    switch (size) {
      case 'small':
        return '4px 20px';
      case 'large':
        return '6px 28px';
      default:
        return '5px 24px';
    }
  };

  // Define our custom button class name to apply the gradient border
  const buttonClassName = `
    ${className} 
    font-neulis-sans h-14 sm:h-14 md:h-12 lg:h-12 xl:h-14 relative inline-flex
  `;


  const buttonStyles: CSSProperties = {
    borderRadius: "64px",
    fontWeight: "500",
    backgroundColor: blue700,
    color: "white",
    padding: getPadding(),
    border: "3px solid white",
    position: "relative",
    whiteSpace: "nowrap",
    alignItems: "center"
  }

  const triangleStyles: CSSProperties = {
    content: '""',
    position: "absolute",
    top: 0,
    right: 0,
    width: "100%",
    height: "100%",
    background: `linear-gradient(to bottom right, ${primaryColor} 50%, transparent 50%)`,
    zIndex: 0,
    pointerEvents: "none",
    borderRadius: "64px",
  }

  const videoBorderStyles: CSSProperties = {
    borderRadius: "64px",
    border: "2px solid transparent",
    backgroundImage: `linear-gradient(white, white), linear-gradient(to right, ${quantumOrchid500}, ${catalystOrange500})`,
    backgroundOrigin: "border-box",
    backgroundClip: "padding-box, border-box",
    cursor: "default",
  };

  return(
      <button style={buttonStyles} className={buttonClassName} {...props}>
        <div style={triangleStyles}></div>
        <div className="flex items-center h-0 overflow-visible relative z-10">
          <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              disablePictureInPicture
              className="w-[40px] h-[40px] sm:w-[55px] xl:w-[65px] sm:h-[55px] xl:h-[65px] -ml-[18px] sm:-ml-[18px] md:-ml-0 lg:-ml-0"
              style={videoBorderStyles}
          >
            <source src='/images/symbol_not_looped_new.mp4' type="video/mp4" />
          </video>

          <div className="ml-2 mr-2 sm:ml-3 sm:mr-3 whitespace-nowrap text-base sm:text-lg font-medium">
            {children}
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="sm:w-6 sm:h-6 bi bi-play"
               viewBox="0 0 16 16" style={{color: teal500}}>
            <path
                d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z"/>
          </svg>
        </div>
      </button>
  )
};

export default AskRaiqaButton; 