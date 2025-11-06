'use client';

import React, {CSSProperties, ReactNode} from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../../theming/ThemeProvider';

interface Subtitle1Props {
  children: ReactNode;
  className?: string;
  as?: 'p' | 'div' | 'span';
}

export const Subtitle1 = ({ children, className = '', as = 'p'}: Subtitle1Props) => {
  const { currentTheme } = useTheme();
  const subtitleStyle = currentTheme?.typography?.components?.Subheadings?.lg;

  const styles: CSSProperties = {
    fontFamily: 'var(--font-inter)',
    fontSize: subtitleStyle?.["font-size"],
    fontWeight: subtitleStyle?.["font-weight"],
    lineHeight: subtitleStyle?.["line-height"],
    letterSpacing: subtitleStyle?.["letter-spacing"],
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

export default Subtitle1; 