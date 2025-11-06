'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {Header6, Body1, Body2, Caption, Body3, Body4} from '../typography';
import Image from 'next/image';
import {urlForImage} from "@/sanity/lib/utils";
import StarRating from "@/app/components/common/components/StarRating";
import {ReviewItem} from "@/sanity.types";

interface MultipleReviewsProps {
  reviews: ReviewItem[];
  displayCount?: number;
  autoScrollInterval?: number;
  maxCharacters?: number;
}

// Single review card component to avoid duplication
const ReviewCard: React.FC<{ review: ReviewItem; maxCharacters?: number }> = ({ review, maxCharacters = 250 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const reviewText = review.patientReview || '';
  const isTruncated = reviewText.length > maxCharacters;
  
  const displayText = isExpanded || !isTruncated 
    ? reviewText 
    : `${reviewText.substring(0, maxCharacters).trim()}...`;

  return (
    <div className="bg-gradient-to-b from-[#D9F7FB] to-white p-4 sm:p-4 md:p-6 lg:p-6 text-center sm:text-center md:text-left lg:text-left pt-12 sm:pt-12 md:pt-12 lg:pt-16 rounded-3xl shadow-md border-4 border-white w-full relative">
      <div className="absolute top-[-34px] left-[35%] sm:left-[35%] md:left-6 lg:left-6 w-[72px] h-[72px] border-4 border-white/60 rounded-full overflow-hidden">
        <div className="w-full h-full bg-gray-200">
          <Image
            src={urlForImage(review.patientImage)?.url() || ''}
            alt={review.patientName || ''}
            width={72}
            height={72}
            className="object-cover"
          />
        </div>
      </div>
      <Body1 className="mb-4">
        {displayText}
        {isTruncated && (
          <button 
            onClick={() => setIsExpanded(prev => !prev)} 
            className="ml-1 text-blue-600 hover:text-blue-800 font-medium"
          >
            {isExpanded ? 'Read less' : 'Read more'}
          </button>
        )}
      </Body1>
      <div className="flex flex-col sm:flex-col text-center sm:text-center md:text-left lg:text-left lg:flex-row justify-between items-center mt-4">
        <div>
          <Header6 className="font-bold">{review.patientName}</Header6>
          <Body4 className=" text-blue-600">{review.consultationType}</Body4>
        </div>
        {/*<StarRating rating={review.rating || 5} />*/}
      </div>
    </div>
  );
};

const MultipleReviews: React.FC<MultipleReviewsProps> = ({ 
  reviews, 
  displayCount = 1,
  autoScrollInterval = 4000,
  maxCharacters = 250
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleReviews, setVisibleReviews] = useState<Array<ReviewItem & {position: 'prev'|'current'|'next'}>>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Update visible reviews when current index changes
  useEffect(() => {
    if (reviews.length < 3) return; // Only process for carousel mode (3+ reviews)
    
    const totalItems = reviews.length;
    
    // Create a new array with 3 items (prev, current, next)
    const prev = (currentIndex - 1 + totalItems) % totalItems;
    const next = (currentIndex + 1) % totalItems;
    
    const newVisibleReviews = [
      { ...reviews[prev], position: 'prev' as const },
      { ...reviews[currentIndex], position: 'current' as const },
      { ...reviews[next], position: 'next' as const }
    ];
    
    setVisibleReviews(newVisibleReviews);
  }, [currentIndex, reviews]);

  // Setup auto-scrolling
  const startAutoScroll = useCallback(() => {
    if (autoScrollTimerRef.current) {
      clearInterval(autoScrollTimerRef.current);
    }
    
    autoScrollTimerRef.current = setInterval(() => {
      if (!isPaused && !isTransitioning) {
        handleNext();
      }
    }, autoScrollInterval);
  }, [isPaused, isTransitioning, autoScrollInterval]);
  
  // Manage the auto-scroll timer
  useEffect(() => {
    if (reviews.length < 3) return; // Only auto-scroll for 3+ reviews
    
    startAutoScroll();
    
    return () => {
      if (autoScrollTimerRef.current) {
        clearInterval(autoScrollTimerRef.current);
      }
    };
  }, [startAutoScroll, reviews.length]);

  const handleNext = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  if (reviews.length === 0) return null;

  // For 1-2 reviews, show them side by side without carousel
  if (reviews.length <= 5) {
    return (
      <div className="w-full">
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {reviews.map((review, index) => (
            <div key={index} className="w-full max-w-lg">
              <ReviewCard review={review} maxCharacters={maxCharacters} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // For 3+ reviews, show carousel
  return (
    <div 
      className="w-full relative overflow-hidden py-8"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Left arrow */}
      <button 
        onClick={handlePrev} 
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous reviews"
        disabled={isTransitioning}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Carousel container */}
      <div className="flex items-center justify-center gap-4 px-16 overflow-visible">
        {visibleReviews.map((review, index) => (
          <div 
            key={`${index}-${review.patientName}`} 
            className={`flex-shrink-0 ${
              review.position === 'prev' 
                ? `opacity-50 -mr-16` 
                : review.position === 'next'
                ? `opacity-50 -ml-16` 
                : 'opacity-100 z-10'
            }`}
            style={{
              transform: `${
                review.position === 'prev' 
                  ? `scale(0.85) translateX(${isTransitioning ? '120%' : '-20%'})` 
                  : review.position === 'next' 
                  ? `scale(0.85) translateX(${isTransitioning ? '-120%' : '20%'})` 
                  : isTransitioning 
                    ? 'scale(1) translateX(0) translateY(0)' 
                    : 'scale(1)'
              }`,
              width: review.position === 'current' ? '100%' : '80%',
              maxWidth: review.position === 'current' ? '550px' : '450px',
              transition: 'all 0.6s cubic-bezier(0.33, 1, 0.68, 1)',
              willChange: 'transform, opacity'
            }}
          >
            <ReviewCard review={review} maxCharacters={maxCharacters} />
          </div>
        ))}
      </div>
      
      {/* Right arrow */}
      <button 
        onClick={handleNext} 
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-md hover:bg-gray-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next reviews"
        disabled={isTransitioning}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 6L15 12L9 18" stroke="#0066CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Indicator dots */}
      <div className="flex justify-center mt-6 gap-2">
        {reviews.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => {
              if (!isTransitioning && idx !== currentIndex) {
                setCurrentIndex(idx);
              }
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentIndex ? 'bg-blue-600 w-4' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MultipleReviews; 