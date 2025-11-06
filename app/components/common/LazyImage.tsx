'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ImageProps } from 'next/image';

interface LazyImageProps extends Omit<ImageProps, 'onLoad'> {
  optimizePriority?: boolean;
  threshold?: number;
  rootMargin?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  optimizePriority = false,
  threshold = 0.1,
  rootMargin = '200px 0px',
  sizes,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    // Skip intersection observer for priority images
    if (props.priority) {
      setIsInView(true);
      return;
    }
    
    // Use Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );
    
    const current = document.getElementById(`lazy-image-${alt?.replace(/\s+/g, '-').toLowerCase()}`);
    if (current) {
      observer.observe(current);
    }
    
    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [alt, props.priority, rootMargin, threshold]);
  
  const imageClasses = `lazy-load-image use-transform ${isLoaded ? 'loaded' : ''} ${className}`;
  
  const handleLoad = () => {
    setIsLoaded(true);
  };
  
  // Use native loading="lazy" for non-priority images below the fold
  const loadingAttribute = optimizePriority 
    ? 'eager'
    : (props.priority ? 'eager' : 'lazy');
    
  // Optimize fetchPriority based on importance
  const fetchPriorityAttribute = optimizePriority || props.priority 
    ? 'high' 
    : 'auto';
    
  // Default sizes if not provided
  const defaultSizes = sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';
  
  return (
    <div id={`lazy-image-${alt?.replace(/\s+/g, '-').toLowerCase()}`} className="relative">
      {isInView && (
        <Image
          src={src}
          alt={alt || ""}
          width={width}
          height={height}
          className={imageClasses}
          onLoad={handleLoad}
          loading={loadingAttribute}
          fetchPriority={fetchPriorityAttribute as 'high' | 'low' | 'auto'}
          sizes={defaultSizes}
          {...props}
        />
      )}
      {!isInView && (
        <div 
          style={{ 
            width: typeof width === 'number' ? `${width}px` : width,
            height: typeof height === 'number' ? `${height}px` : height,
          }}
          className="bg-gray-100 animate-pulse"
        />
      )}
    </div>
  );
};

export default LazyImage; 