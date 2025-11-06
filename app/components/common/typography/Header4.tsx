'use client';

import React, {CSSProperties, ReactNode} from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../../theming/ThemeProvider';
import {HeaderProps} from "@/app/types";

export const Header4 = ({ children, className = ''}: HeaderProps) => {
  const { currentTheme } = useTheme();
  const headerStyle = currentTheme.typography?.components?.Headings?.h4;

  const styles: CSSProperties = {
    fontFamily: 'var(--font-poppins)',
    fontSize: headerStyle?.["font-size"],
    fontWeight: headerStyle?.["font-weight"],
    lineHeight: headerStyle?.["line-height"],
    letterSpacing: headerStyle?.["letter-spacing"],
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
  
  return (
    <motion.h4 
      className={className} 
      style={styles}
      initial="hidden"
      animate="visible"
      variants={animationVariants}
    >
      {children}
    </motion.h4>
  );
};

export default Header4; 