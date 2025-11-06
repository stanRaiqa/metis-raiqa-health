'use client';

import React, { ReactNode } from 'react';
import { useTheme } from '../../../theming/ThemeProvider';

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({ children, className = '' }: BadgeProps) {
  const { currentTheme } = useTheme();

  const styles = {
    backgroundColor: currentTheme?.["brand colors"]?.health?.Purple?.["100"], // Adding 20% opacity
    color: currentTheme.colors?.primary,
    display: 'inline-block',
    fontSize: '0.75rem', // text-xs
    fontWeight: 'bold',
    padding: '0.1rem 0.3rem', // px-2 py-1
    borderRadius: '0.25rem', // rounded
    letterSpacing: '0.05em', // tracking-widest
  };

  return (
    <div className={className} style={styles}>
      {children}
    </div>
  );
} 