'use client';

import React, {CSSProperties, ReactNode} from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../../theming/ThemeProvider';

interface Body1Props {
  children: ReactNode;
  className?: string;
  as?: 'p' | 'div' | 'span';
  addAnimation?: boolean;
}

export const Body1 = ({ children, className = '', as = 'p', addAnimation = true}: Body1Props) => {
  const { currentTheme } = useTheme();
  const bodyStyle = currentTheme?.typography?.components?.Body?.md;

  const styles: CSSProperties = {
    fontFamily: 'var(--font-inter)',
    fontSize: bodyStyle?.["font-size"],
    fontWeight: bodyStyle?.["font-weight"],
    lineHeight: bodyStyle?.["line-height"],
    letterSpacing: bodyStyle?.["letter-spacing"],
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

  if(!addAnimation){
    return (
        <p className={className} style={styles}>
          {children}
        </p>
    )
  }
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

export default Body1; 