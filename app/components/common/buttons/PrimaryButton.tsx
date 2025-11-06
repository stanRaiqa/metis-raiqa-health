'use client';

import React from 'react';
import Link from 'next/link';

/**
 * Primary Button Component
 * Main CTA button using Ice Blue from design system
 * Usage: Primary actions, Get Started, Sign Up, etc.
 */

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
  size?: 'small' | 'medium' | 'large';
  theme?: 'light' | 'dark';
}

export default function PrimaryButton({
  children,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  fullWidth = false,
  size = 'medium',
  theme = 'light'
}: PrimaryButtonProps) {
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-2.5 text-base',
    large: 'px-8 py-3 text-lg'
  };

  const themeClasses = {
    dark: 'bg-brand-light text-brand-primary border-2 border-brand-light hover:border-brand-light',
    light: 'bg-brand-primary text-brand-light border-2 border-brand-primary hover:bg-transparent hover:shadow-lg hover:text-brand-primary'
  };

  const baseClasses = `
    inline-flex items-center justify-center
    ${themeClasses[theme]}
    font-body font-medium 
    rounded-full 
    transition-all duration-base
    hover:bg-transparent hover:shadow-lg hover:text-brand-light
    active:scale-100
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
    focus:outline-none focus:ring-2 focus:ring-brand-ice focus:ring-offset-2
    ${sizeClasses[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;


  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
    >
      {children}
    </button>
  );
}
