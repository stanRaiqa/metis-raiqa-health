import React from 'react';
import Image from "next/image";
import {urlForImage} from "@/sanity/lib/utils";
import { useTheme } from "../../../theming/ThemeProvider";
import {CardItem} from "@/sanity.types";
import {Body1, Body3, Body4, Header6} from "../typography";

interface HelpFeatureCardProps {
  card: CardItem;
  index: number;
}

const HelpFeatureCard: React.FC<HelpFeatureCardProps> = ({ card, index }) => {
  const { currentTheme } = useTheme();
  
  // Brand colors
  const healthPurple50 = currentTheme["brand colors"]?.health?.Purple?.["50"] || "#F5F4FC";
  const healthPurple100 = currentTheme["brand colors"]?.health?.Purple?.["100"] || "#F0EEF9";
  const healthPurple600 = currentTheme["brand colors"]?.health?.Purple?.["600"] || "#3116C8";
  const healthPurple900 = currentTheme["brand colors"]?.health?.Purple?.["900"] || "#010623";
  
  // UI colors and other theme values
  const backgroundColor = currentTheme.colors?.background || "white";
  const iconBg = currentTheme.colors?.muted;
  const borderColor = currentTheme.colors?.cardBorder || "#F0EFF7";
  const textColor = currentTheme["brand colors"]?.common?.Slate?.["800"] || "#363040";
  
  return (
    <div 
      className="rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 h-full group overflow-hidden relative"
      style={{ 
        backgroundColor: backgroundColor,
        border: `1px solid ${borderColor}`
      }}
    >
      {/* Decorative accent */}
      <div 
        className="absolute -top-10 -right-10 w-16 sm:w-20 h-16 sm:h-20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
        style={{ backgroundColor: healthPurple50 }}
      ></div>
      
      {/* Icon Container with animation */}
      <div className="flex items-start mb-3 sm:mb-4 md:mb-5 relative z-10">
        <div
          style={{ backgroundColor: iconBg }}
          className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-110 flex-shrink-0"
        >
          {card.cardImage && (
            <Image
              src={urlForImage(card.cardImage)?.url() || ''}
              alt={card.cardTitle || 'Card icon'}
              width={24}
              height={24}
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 object-contain"
            />
          )}
        </div>
        <div className="ml-2 sm:ml-3 flex-grow">
          <div className="font-semibold transition-colors duration-300 title-container">
            <style jsx>{`
              .title-container {
                color: ${healthPurple900};
              }
              :global(.group:hover) .title-container {
                color: ${healthPurple600};
              }
            `}</style>
            <Header6>{card.cardTitle}</Header6>
          </div>
        </div>
      </div>
      
      {/* Card Content with improved typography */}
      <div className="mt-1 sm:mt-2 relative z-10">
        <div className="leading-relaxed description-text">
          <style jsx>{`
            .description-text {
              color: ${textColor};
            }
            :global(.group:hover) .description-text {
              color: ${healthPurple900};
            }
          `}</style>
          <Body1>{card.cardDescription}</Body1>
        </div>
      </div>
    </div>
  );
};

export default HelpFeatureCard; 