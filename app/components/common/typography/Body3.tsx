'use client';

import React, {CSSProperties, ReactNode} from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../../theming/ThemeProvider';

interface Body3Props {
  children: ReactNode;
  className?: string;
  as?: 'p' | 'div' | 'span';
}

export const Body3 = ({ children, className = '', as = 'p'}: Body3Props) => {
  const { currentTheme } = useTheme();
  const bodyStyle = currentTheme?.typography?.components?.Body?.sm;

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

export default Body3;