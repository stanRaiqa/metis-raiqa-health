'use client';

import React from 'react';

/**
 * Icon Button Component
 * Square/circular button for icon-only actions
 * Usage: Menu toggles, close buttons, social icons
 */

interface IconButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'ghost';
  shape?: 'square' | 'circle';
  ariaLabel: string;
}

export default function IconButton({
  children,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  size = 'medium',
  variant = 'ghost',
  shape = 'circle',
  ariaLabel
}: IconButtonProps) {
  const sizeClasses = {
    small: 'w-8 h-8 p-1.5',
    medium: 'w-10 h-10 p-2',
    large: 'w-12 h-12 p-2.5'
  };

  const variantClasses = {
    primary: 'bg-brand-primary text-white hover:bg-brand-primary-dark',
    secondary: 'bg-brand-steel text-white hover:bg-brand-dark',
    ghost: 'bg-transparent text-brand-dark hover:bg-brand-neutral-light'
  };

  const shapeClasses = {
    square: 'rounded-lg',
    circle: 'rounded-full'
  };

  const baseClasses = `
    inline-flex items-center justify-center
    transition-all duration-base
    active:scale-95
    disabled:opacity-50 disabled:cursor-not-allowed
    focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${shapeClasses[shape]}
    ${className}
  `;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

