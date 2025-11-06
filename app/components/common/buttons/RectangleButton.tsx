'use client';

import React, { ButtonHTMLAttributes, ReactNode, CSSProperties } from 'react';
import { useTheme } from '../../../theming/ThemeProvider';
import Link from "next/link";
import {Link as SanityLink} from "@/sanity.types";
import {Url} from "node:url";
import {linkResolver} from "@/sanity/lib/utils";

interface RectangleButtonProps {
    children: ReactNode;
    className?: string;
    size?: 'small' | 'medium' | 'large';
    fullWidth?: boolean;
    href?: SanityLink;
}

export const RectangleButton = ({
                                           children,
                                           className = '',
                                           size = 'medium',
                                           fullWidth = false,
                                           ...props
                                       }: RectangleButtonProps) => {
    const { currentTheme } = useTheme();
    const primaryButtonUrl = linkResolver(props.href) || '/';

    // Determine padding based on size
    const getPadding = () => {
        switch (size) {
            case 'small':
                return '12px 26px';
            case 'large':
                return '16px 40px';
            default:
                return '14px 35px';
        }
    };

    // Define our custom button class name to apply the gradient border
    const buttonClassName = `
    ${className} 
    gradient-border-button
  `;

    // Define the button styles
    const buttonStyles: CSSProperties = {
        backgroundColor: currentTheme.colors?.primary,
        color: currentTheme.colors?.["secondary-border"],
        padding: getPadding(),
        fontSize: currentTheme.typography?.components?.Buttons?.sm?.["font-size"],
        fontWeight: currentTheme.typography?.components?.Buttons?.sm?.["font-weight"],
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        width: fullWidth ? '100%' : 'auto',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        borderRadius: currentTheme["border radius"]?.lg,
        // The border is handled in the ::before pseudo-element via CSS class
        border: 'none',
    };

    // Create a style tag to inject the gradient border CSS
    const healthPurple300 = currentTheme?.["brand colors"]?.health?.Purple?.["300"] || "#806EEE";
    const primaryColor = currentTheme.colors?.primary || "#4299E1";

    return (
        <>
            <style jsx>{`
        .gradient-border-button {
          position: relative;
          z-index: 0;
        }
        
        .gradient-border-button::before {
          content: '';
          position: absolute;
          z-index: -1;
          inset: 0;
          padding: 2px;
          border-radius: ${currentTheme["border radius"]?.lg}px;
          background: linear-gradient(to bottom, ${healthPurple300}, ${primaryColor});
          -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }
        
        .gradient-border-button:hover {
          background-color: ${currentTheme.colors?.background};
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        
        .gradient-border-button:focus {
          outline: none;
          box-shadow: 0 0 0 3px ${currentTheme.colors?.secondary}80;
        }
      `}</style>

            <button
                className={buttonClassName}
                style={buttonStyles}
                {...props}
            >
                <Link href={primaryButtonUrl}>
                    {children}
                </Link>
            </button>
        </>
    );
};

export default RectangleButton;