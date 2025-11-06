'use client';

import React, { ReactNode } from 'react';
import { color, motion, rgba } from 'framer-motion';
import Image from 'next/image';
import { Header2, Body1 } from './typography';
import { PrimaryButton } from './buttons';
import { useRouter } from 'next/navigation';

/**
 * AsideSection Component
 * Reusable section with image on one side and content on the other
 * - Standard 32px (px-8) horizontal padding
 * - Max-width: 1280px
 * - Fully responsive
 * - Flexible image positioning (left/right)
 */

interface AsideSectionProps {
  // Content
  subtitle?: string;
  heading: string;
  body: string | ReactNode;
  ctaText?: string;
  ctaLink?: string;
  onCtaClick?: () => void;

  // Image
  imageSrc: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right'; // Default: 'right'

  // Styling
  backgroundColor?: string; // Default: 'bg-brand-light'
  contentClassName?: string;
  imageClassName?: string;
  
  // Layout
  imageWidth?: number; // Optional custom width
  imageHeight?: number; // Optional custom height
  reverseOnMobile?: boolean; // Show image first on mobile
  gradientFalse?: boolean; // Show gradient on false
}

export const AsideSection: React.FC<AsideSectionProps> = ({
  subtitle,
  heading,
  body,
  ctaText,
  ctaLink,
  onCtaClick,
  imageSrc,
  imageAlt,
  imagePosition = 'right',
  backgroundColor = 'bg-brand-light',
  contentClassName = '',
  imageClassName = '',
  imageWidth = 600,
  imageHeight = 500,
  reverseOnMobile = false,
}) => {
  // Determine grid order based on image position
  const router = useRouter();
  const imageOrder = imagePosition === 'left' 
    ? 'lg:order-1' 
    : 'lg:order-2';
  
  const contentOrder = imagePosition === 'left' 
    ? 'lg:order-2' 
    : 'lg:order-1';

  // Mobile order - Always show content first, image second (bottom)
  const mobileImageOrder = 'order-2'; // Image always at bottom on mobile
  const mobileContentOrder = 'order-1'; // Content always at top on mobile

  // const backgroundStyle =reverseOnMobile ? {
  //   backgroundColor: "#FFFFFF",
  //   backgroundImage: `
  //   radial-gradient(at 20% 30%, #4A90E2 0%, transparent 60%),
  //   radial-gradient(at 70% 65%, #4A90E2 0%, transparent 35%),
  //   radial-gradient(at 60% 80%, #3B9CA8 0%, transparent 65%),
  //   radial-gradient(at 10% 80%, rgba(46,58,71,0.3) 0%, transparent 0%),
  //   linear-gradient(180deg, #FFFFFF 0%, #D9D9D9 100%)
  // `,
  //   backgroundBlendMode: "screen, normal",
  //   // backgroundAttachment: "fixed",
  //   backgroundSize: "cover",
  //   // minHeight: "100vh",
  // }: {
  //   backgroundColor: "#FFFFFF",
  //   backgroundImage: `
  //     radial-gradient(at 80% 70%, #4A90E2 0%, transparent 60%),
  //     radial-gradient(at 20% 80%, #3B9CA8 0%, transparent 55%),
  //     radial-gradient(at 40% 20%, #A7C5EB 0%, transparent 65%),
  //     radial-gradient(at 90% 20%, rgba(46,58,71,0.3) 0%, transparent 70%),
  //     linear-gradient(0deg, #FFFFFF 0%, #D9D9D9 100%)
  //   `,
  //   backgroundBlendMode: "screen, normal",
  //   backgroundAttachment: "fixed",
  //   backgroundSize: "cover",
  //   minHeight: "100vh",
  // };

  const backgroundStyle = { backgroundSize: '100% 100%', backgroundPosition: '0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px,0px 0px', backgroundImage: 'radial-gradient(18% 28% at 24% 50%, #FFFFFF 7%, #073AFF00 100%),radial-gradient(18% 28% at 18% 71%, #FFFFFF59 6%, #073AFF00 100%),radial-gradient(70% 53% at 36% 76%, #73CEFF75 0%, #073AFF00 100%),radial-gradient(42% 53% at 15% 94%, #FFFFFFFF 7%, #073AFF00 100%),radial-gradient(42% 53% at 34% 72%, #FFFFFFFF 7%, #073AFF00 100%),radial-gradient(18% 28% at 35% 87%, #FFFFFFFF 7%, #073AFF00 100%),radial-gradient(31% 43% at 7% 98%, #FFFFFFFF 24%, #073AFF00 100%),radial-gradient(21% 37% at 72% 23%, #73F2FF24 24%, #073AFF00 100%),radial-gradient(35% 56% at 91% 74%, #A7C5EB 9%, #073AFF00 100%),radial-gradient(74% 86% at 67% 38%, #6DD7FF0D 24%, #073AFF00 100%),linear-gradient(125deg, #FFFFFFFF 1%, #FFFFFFFF 100%)'}

  return (
    <section className={`relative py-16 lg:py-24 overflow-hidden`}>
      {/* Container with standard 32px padding */}
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: imagePosition === 'left' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`${mobileContentOrder} ${contentOrder} space-y-2 ${contentClassName}`}
          >
            {/* Subtitle (Optional) */}
            {subtitle && (
              <p className="font-body text-sm font-medium text-brand-steel uppercase tracking-wider">
                {subtitle}
              </p>
            )}

            {/* Heading */}
            <Header2 className="text-brand-dark !leading-tight">
              {heading}
            </Header2>

            {/* Body Text */}
            {typeof body === 'string' ? (
              <Body1 className="text-brand-steel leading-relaxed">
                {body}
              </Body1>
            ) : (
              <div className="text-brand-steel leading-relaxed">
                {body}
              </div>
            )}

            {/* CTA Button (Optional) */}
            {ctaText && (
              <div className="pt-4">
                <PrimaryButton
                  onClick={()=>router.push(ctaLink||'')}
                >
                  {ctaText}
                </PrimaryButton>
              </div>
            )}
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: imagePosition === 'left' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className={`${mobileImageOrder} ${imageOrder} relative ${imageClassName}`}
          >
            <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[500px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={false}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AsideSection;

