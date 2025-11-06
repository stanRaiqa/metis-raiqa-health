'use client';

import React, { memo } from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
  quality?: number;
  fill?: boolean;
  loading?: 'lazy' | 'eager';
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

/**
 * Performance-optimized image component with best practices for web vitals
 * - Default size configuration for mobile/desktop
 * - Automatic quality adjustment
 * - Proper loading strategy based on viewport position
 */
const OptimizedImage: React.FC<OptimizedImageProps> = memo(({
  src,
  alt,
  width = 0,
  height = 0,
  priority = false,
  className = '',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  quality = 75,
  fill = false,
  loading = 'lazy',
  placeholder = 'empty',
  blurDataURL
}) => {
  // Calculate responsive quality based on screen size (lower for mobile)
  const responsiveQuality = typeof window !== 'undefined' && window.innerWidth < 768 ? Math.min(quality, 65) : quality;
  
  // Determine ideal values for performance
  const imageProps = {
    src,
    alt,
    width: fill ? undefined : width,
    height: fill ? undefined : height,
    priority,
    className,
    sizes,
    quality: responsiveQuality,
    loading: priority ? 'eager' : loading,
    fill,
    placeholder,
    blurDataURL
  };

  return <Image {...imageProps} />;
});

OptimizedImage.displayName = 'OptimizedImage';
export default OptimizedImage; 