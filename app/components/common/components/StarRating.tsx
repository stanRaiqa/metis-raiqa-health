'use client';

import React from 'react';

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {

  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <svg 
        key={i} 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill={i < rating ? "#FFA537" : "none"} 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
          stroke={i < rating ? "#FFA537" : "#D1D5DB"} 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return <div className="flex gap-1">{stars}</div>;
};

export default StarRating; 