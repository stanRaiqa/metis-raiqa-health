'use client';

import React from 'react';
import Link from 'next/link';

/**
 * Danger Button Component
 * For destructive or warning actions
 * Usage: Delete, Remove, Cancel subscription, etc.
 */

interface DangerButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
  size?: 'small' | 'medium' | 'large';
}

export default function DangerButton({
  children,
  onClick,
  href,
  type = 'button',
  disabled = false,
  className = '',
  fullWidth = false,
  size = 'medium'
}: DangerButtonProps) {
  const sizeClasses = {
    small: 'px-6 py-2.5 text-sm',
    medium: 'px-8 py-3.5 text-base',
    large: 'px-10 py-4 text-lg'
  };

  const baseClasses = `
    inline-flex items-center justify-center
    bg-error text-white
    font-body font-semibold 
    rounded-full 
    transition-all duration-base
    hover:bg-error/90 hover:shadow-lg
    active:scale-95
    disabled:opacity-50 disabled:cursor-not-allowed
    focus:outline-none focus:ring-2 focus:ring-error focus:ring-offset-2
    ${sizeClasses[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;

  if (href && !disabled) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

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

