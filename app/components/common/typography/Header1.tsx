'use client';

import React, { ReactNode, CSSProperties } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../../theming/ThemeProvider';
import {HeaderProps} from "@/app/types";

export const Header1 = ({ children, className = ''}: HeaderProps) => {
  const { currentTheme } = useTheme();
  const h1Style = currentTheme.typography?.components?.Headings?.h1;
  
  const styles: CSSProperties = {
    fontFamily: 'var(--font-poppins)',
    fontSize: h1Style?.["font-size"],
    fontWeight: h1Style?.["font-weight"],
    lineHeight: h1Style?.["line-height"],
    letterSpacing: h1Style?.["letter-spacing"],
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
    <motion.h1 
      className={className} 
      style={styles}
      initial="hidden"
      animate="visible"
      variants={animationVariants}
    >
      {children}
    </motion.h1>
  );
};

export default Header1; 