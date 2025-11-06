'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

/**
 * Secondary Button Component
 * Ghost/Outline button for secondary actions
 * Usage: Learn More, Cancel, Secondary CTAs
 */

interface SecondaryButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
  size?: 'small' | 'medium' | 'large';
  variant?: 'outline' | 'ghost';
}

export default function SecondaryButton({
  children,
  onClick,
  href,
  type = 'button',
  disabled = false,
  className = '',
  fullWidth = false,
  size = 'medium',
  variant = 'outline'
}: SecondaryButtonProps) {
  const router = useRouter();

  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-8 py-3 text-lg'
  };

  const variantClasses = {
    outline: 'bg-transparent border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white',
    ghost: 'bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white/20 hover:text-brand-light'
  };

  const baseClasses = `
    inline-flex items-center justify-center
    font-body font-semibold 
    rounded-full 
    transition-all duration-base
    active:scale-95
    disabled:opacity-50 disabled:cursor-not-allowed
    focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;



  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    if (disabled) {
      event.preventDefault();
      return;
    }

    onClick?.(event);

    if (!event.defaultPrevented && href) {
      event.preventDefault();
      router.push(href);
    }
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      className={baseClasses}
    >
      {children}
    </button>
  );
}
