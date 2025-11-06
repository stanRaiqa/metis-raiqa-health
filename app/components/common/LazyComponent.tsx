'use client';

import React, { useState, useEffect, useRef, ReactNode } from 'react';

interface LazyComponentProps {
  children: ReactNode;
  threshold?: number;
  rootMargin?: string;
  placeholder?: ReactNode;
  className?: string;
}

/**
 * A component that lazily renders its children when they come into view
 * This helps significantly with mobile performance by:
 * 1. Reducing initial JS bundle execution
 * 2. Deferring heavy component renders until needed
 * 3. Minimizing main thread blocking during initial page load
 */
const LazyComponent: React.FC<LazyComponentProps> = ({
  children,
  threshold = 0.1,
  rootMargin = "200px 0px",
  placeholder,
  className = ""
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip for server-side rendering
    if (typeof window === 'undefined') return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, disconnect the observer
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        rootMargin,
        threshold
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [rootMargin, threshold]);
  
  // Fallback for browsers without IntersectionObserver
  useEffect(() => {
    if (typeof window === 'undefined' || 'IntersectionObserver' in window) return;
    setIsVisible(true);
  }, []);

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : placeholder}
    </div>
  );
};

export default LazyComponent; 