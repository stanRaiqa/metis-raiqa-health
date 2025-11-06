'use client';

import React, { ButtonHTMLAttributes, ReactNode, CSSProperties } from 'react';
import Link from "next/link";
import {Link as SanityLink} from "@/sanity.types";
import {linkResolver} from "@/sanity/lib/utils";
import {useTheme} from "@/app/theming/ThemeProvider";
import { useRouter } from 'next/navigation';

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    size?: 'small' | 'medium' | 'large';
    fullWidth?: boolean;
    href?: SanityLink;
}

export const BrandButton = ({
                                  children,
                                  className = '',
                                  size = 'medium',
                                  fullWidth = false,
                                  ...props
                              }: PrimaryButtonProps) => {
    const router = useRouter();
    const { currentTheme } = useTheme();
    const primaryButtonUrl = (props.href?.linkType == "href" ?  (linkResolver(props.href) || '/') : props.href?.linkType == "slug" ? (props.href?.slug?.includes("/") ? props.href?.slug : "/"+props.href?.slug) : props.href) || "/";
    const teal500 = currentTheme?.["brand colors"]?.health?.Teal?.["500"];
    const purple200 = currentTheme?.["brand colors"]?.health?.Purple?.["200"];
    const purple300 = currentTheme?.["brand colors"]?.health?.Purple?.["300"];
    const purple400 = currentTheme?.["brand colors"]?.health?.Purple?.["400"];

    const catalystOrange500 = currentTheme?.["brand colors"]?.raiqa?.['Catalyst Orange']?.["500"];

    // Determine padding based on size
    const getPadding = () => {
        switch (size) {
            case 'small':
                return '8px 20px';
            case 'large':
                return '10px 30px';
            default:
                return '10px 30px';
        }
    };

    // Define our custom button class name to apply the gradient border
    const buttonClassName = `
    ${className} 
    gradient-border-button font-neulis-sans h-12
  `;

    // Define the button styles to match the provided design
    const buttonStyles: CSSProperties = {
        background: 'linear-gradient(269deg, #3116C8 0%, #5A43D9 34%, #3116C8 100%)',
        color: '#F5F4FC',
        padding: '16px 24px',
        fontSize: 18,
        fontFamily: 'DM Sans, sans-serif',
        fontWeight: 600,
        lineHeight: '20px',
        wordWrap: 'break-word',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        width: fullWidth ? '100%' : 'auto',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.25)',
        position: 'relative',
        borderRadius: 64,
        border: 'none',
    };

    // Create a style tag to inject the gradient border CSS
    const healthPurple300 = currentTheme?.["brand colors"]?.health?.Purple?.["300"] || "#806EEE";
    const primaryColor = currentTheme.colors?.primary || "#4299E1";

    // Handle button click
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (props.href && !props.onClick) {
            e.preventDefault();
            router.push(primaryButtonUrl as string);
        }

        // Call the original onClick if provided
        props.onClick?.(e);
    };

    return (
        <button
            className={buttonClassName}
            style={buttonStyles}
            onClick={handleClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default BrandButton;