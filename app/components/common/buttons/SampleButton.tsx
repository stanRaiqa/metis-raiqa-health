import React, { CSSProperties } from 'react';
import Link from 'next/link';
import { useTheme } from '@/app/theming/ThemeProvider';

interface SampleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  href?: string;
}

// Simple link resolver for the button
const linkResolver = (href: string | undefined): string => {
  if (!href) return '/';
  return href;
};

export const SampleButton = ({
  children,
  className = '',
  size = 'medium',
  fullWidth = false,
  ...props
}: SampleButtonProps) => {
  const { currentTheme } = useTheme();
  const primaryColor = currentTheme.colors?.primary;
  const healthPurple100 = currentTheme?.["brand colors"]?.health?.Blue?.["500"];
  const quantumOrchid500 = currentTheme?.["brand colors"]?.raiqa?.['Quantum Orchid']?.["500"];
  const catalystOrange500 = currentTheme?.["brand colors"]?.raiqa?.['Catalyst Orange']?.["500"];
  const buttonUrl = linkResolver(props.href);

  // Determine padding based on size
  const getPadding = () => {
    switch (size) {
      case 'small':
        return '8px 16px';
      case 'large':
        return '14px 28px';
      default:
        return '10px 20px';
    }
  };

  // Define our custom button class name
  const buttonClassName = `
    ${className} 
    gradient-border-button
  `;

  // Define the button styles
  const buttonStyles: CSSProperties = {
    backgroundColor: 'transparent',
    color: primaryColor,
    padding: getPadding(),
    fontSize: currentTheme.typography?.components?.Buttons?.sm?.["font-size"] || '14px',
    fontWeight: currentTheme.typography?.components?.Buttons?.sm?.["font-weight"] || 600,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    width: fullWidth ? '100%' : 'auto',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    position: 'relative',
    borderRadius: '64px',
    border: 'none',
    overflow: 'hidden',
  };

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
          border-radius: 64px;
          background: linear-gradient(to right, ${quantumOrchid500}, ${primaryColor}, ${quantumOrchid500});
          background-size: 300% 100%;
          -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          transition: all 0.5s ease;
        }
        
        .gradient-border-button:hover::before {
          background-position: 100% 0;
          animation: gradient-shift 2s linear infinite;
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }
        
        .gradient-border-button:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .gradient-border-button:focus {
          outline: none;
          box-shadow: 0 0 0 3px ${primaryColor}40;
        }
      `}</style>

      <button
        className={buttonClassName}
        style={buttonStyles}
        {...props}
      >
        {props.href ? (
          <Link href={buttonUrl}>
            {children}
          </Link>
        ) : (
          children
        )}
      </button>
    </>
  );
};

export default SampleButton;
