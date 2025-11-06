'use client';

import React from 'react';
import {Header6, Body2} from '../typography';
import Image from 'next/image';
import StarRating from './StarRating';
import {ReviewItem} from "@/sanity.types";

interface SingleReviewProps {
  review: ReviewItem;
}

const SingleReview: React.FC<SingleReviewProps> = ({ review }) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-16 items-center">
      <div className="w-full md:w-1/2 relative">
        <div className="mx-auto sm:mx-16 md:mx-20 lg:mx-28 max-w-xs">
          <Image
            src="/images/girl thumbs 2.png"
            alt="Patient Review"
            width={340}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-3 sm:gap-4 md:gap-6">
        <StarRating rating={review.rating || 5} />
        <Body2 className="text-lg sm:text-xl md:text-2xl">{`"Fast, Easy, and So Reassuring!"`}</Body2>
        <Body2>{review.patientReview}</Body2>
        <div className="mt-3 sm:mt-4">
          <Header6>{review.patientName}, {review.consultationType}</Header6>
        </div>
      </div>
    </div>
  );
};

export default SingleReview; 