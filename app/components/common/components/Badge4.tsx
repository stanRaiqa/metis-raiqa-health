'use client';

import React, { ReactNode } from 'react';
import { useTheme } from '../../../theming/ThemeProvider';

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge4({ children, className = '' }: BadgeProps) {

  const styles = {
    background: 'linear-gradient(128deg, var(--Neural-Saffron-500, #FFA537) 0%, var(--Catalyst-Orange-500, #FF7139) 25%, var(--Neural-Pulse-500, #FD2C3F) 50%, var(--Visionary-Violet-500, #FF2185) 75%, var(--Quantum-Orchid-500, #B830E1) 100%)',
    color: 'white',
    display: 'inline-block',
    fontSize: '13px', // text-xs
    padding: '0.1rem 0.5rem',
    borderRadius: '0.3rem',
    letterSpacing: '0.05em', // tracking-widest
  };

  return (
    <span className={`${className} font-neulis-sans`} style={styles}>
      {children}
    </span>
  );
} 