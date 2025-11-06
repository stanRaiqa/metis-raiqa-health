'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

/**
 * Tertiary Button Component
 * Text-only button for less prominent actions
 * Usage: Links, subtle CTAs, navigation
 */

interface TertiaryButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

export default function TertiaryButton({
  children,
  onClick,
  href,
  type = 'button',
  disabled = false,
  className = '',
  size = 'medium'
}: TertiaryButtonProps) {
  const router = useRouter();

  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-2.5 text-base',
    large: 'px-8 py-3 text-lg'
  };

  const baseClasses = `
    inline-flex items-center justify-center
    bg-transparent
    text-brand-primary 
    font-body font-medium 
    rounded-lg
    transition-all duration-base
    hover:bg-brand-primary/10
    active:bg-brand-primary/20
    disabled:opacity-50 disabled:cursor-not-allowed
    focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2
    ${sizeClasses[size]}
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
