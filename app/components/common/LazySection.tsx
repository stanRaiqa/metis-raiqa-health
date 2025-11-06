'use client';

import React, { useState, useEffect, ReactNode, useRef } from 'react';

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  placeholder?: ReactNode;
  id?: string;
}

const LazySection: React.FC<LazySectionProps> = ({
  children,
  className = '',
  threshold = 0.1,
  rootMargin = '200px 0px',
  placeholder,
  id,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const uniqueId = id || `lazy-section-${Math.random().toString(36).substring(2, 9)}`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [rootMargin, threshold]);

  return (
    <div 
      ref={sectionRef} 
      id={uniqueId}
      className={`content-defer ${className}`}
      style={{
        minHeight: !isVisible ? '300px' : 'auto'
      }}
    >
      {isVisible ? (
        children
      ) : (
        placeholder || <div className="w-full h-[300px] bg-gray-50 animate-pulse rounded-lg"></div>
      )}
    </div>
  );
};

export default LazySection; 