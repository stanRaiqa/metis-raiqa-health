'use client';

import React from 'react';
import Image from 'next/image';
import {Body1, Header6} from '../typography';
import {urlForImage} from "@/sanity/lib/utils";
import Body3 from "@/app/components/common/typography/Body3";
import {CardItem} from "@/sanity.types";


const FeatureCard = ( feature: CardItem ) => {
  return (
    <div 
      className="bg-[rgba(245,244,252,0.9)] backdrop-blur-[40px] rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 flex flex-col gap-3 sm:gap-4 md:gap-6 h-full transition-all duration-300 hover:shadow-lg"
    >
      <div className="h-[36px] sm:h-[40px] md:h-[48px] flex items-center">
        {feature.cardImage ? (
          <Image
            src={urlForImage(feature.cardImage)?.url() || ''}
            alt={feature.cardTitle || ''}
            width={48}
            height={48}
            className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] md:w-[48px] md:h-[48px] object-contain"
          />
        ) : (
          <div className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] md:w-[48px] md:h-[48px]"></div>
        )}
      </div>
      
      <div className="flex flex-col gap-1 sm:gap-2">
        <Header6 className="min-h-[24px]">
          {feature.cardTitle}
        </Header6>
        
        <Body1 className="line-clamp-4 sm:line-clamp-none">
          {feature.cardDescription}
        </Body1>
      </div>
    </div>
  );
};

export default FeatureCard; 