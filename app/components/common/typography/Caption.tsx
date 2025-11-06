'use client';

import React, {CSSProperties, ReactNode} from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../../theming/ThemeProvider';

interface CaptionProps {
  children: ReactNode;
  className?: string;
  as?: 'p' | 'div' | 'span';
}

export const Caption = ({ children, className = '', as = 'span'}: CaptionProps) => {
  const { currentTheme } = useTheme();
  const captionStyle = currentTheme?.typography?.components?.Captions?.md;

  const styles: CSSProperties = {
    fontFamily: 'var(--font-inter)',
    fontSize: captionStyle?.["font-size"],
    fontWeight: captionStyle?.["font-weight"],
    lineHeight: captionStyle?.["line-height"],
    letterSpacing: captionStyle?.["letter-spacing"],
  };

  const animationVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0, 0, 0.58, 1] as const,
      },
    },
  };

  const MotionComponent = motion[as as keyof typeof motion] as any;
  
  return (
    <MotionComponent 
      className={className} 
      style={styles}
      initial="hidden"
      animate="visible"
      variants={animationVariants}
    >
      {children}
    </MotionComponent>
  );
};

export default Caption; 