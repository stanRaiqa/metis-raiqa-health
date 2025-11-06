'use client';

import React, { ReactNode, CSSProperties } from 'react';
import { useTheme } from '../../../theming/ThemeProvider';

interface CardProps {
  children: ReactNode;
  className?: string;
  elevation?: 0 | 1 | 2 | 3;
  padding?: 'none' | 'small' | 'medium' | 'large';
  style?: CSSProperties;
}

export const Card = ({ 
  children, 
  className = '', 
  elevation = 1,
  padding = 'medium',
  style = {}
}: CardProps) => {
  const { currentTheme } = useTheme();
  
  // Get shadow based on elevation
  const getShadow = () => {
    switch (elevation) {
      case 0:
        return 'none';
      case 1:
        return '0 2px 4px rgba(0, 0, 0, 0.1)';
      case 2:
        return '0 4px 8px rgba(0, 0, 0, 0.1)';
      case 3:
        return '0 8px 16px rgba(0, 0, 0, 0.1)';
      default:
        return '0 2px 4px rgba(0, 0, 0, 0.1)';
    }
  };
  
  // Get padding based on size
  const getPadding = () => {
    switch (padding) {
      case 'none':
        return '0';
      case 'small':
        return '12px';
      case 'large':
        return '24px';
      default: // medium
        return '16px';
    }
  };
  
  const styles = {
    backgroundColor: currentTheme.colors?.background,
    color: currentTheme.colors?.primary,
    borderRadius: `12px`,
    boxShadow: getShadow(),
    padding: getPadding(),
    overflow: 'hidden',
    transition: 'box-shadow 0.3s ease',
    ...style
  };
  
  return (
    <div className={className} style={styles}>
      {children}
    </div>
  );
};

export default Card; 