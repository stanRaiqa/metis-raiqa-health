'use client';

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import darkTheme from './themes/newThemes/generated/dark-theme.json';
import lightTheme from './themes/newThemes/generated/light-theme.json';
import desktopTheme from './themes/newThemes/generated/desktop-theme.json';
import mobileTheme from './themes/newThemes/generated/mobile-theme.json';

// Color scale from 50 to 950
type ColorScale = {
  '50': string;
  '100': string;
  '200': string;
  '300': string;
  '400': string;
  '500': string;
  '600': string;
  '700': string;
  '800': string;
  '900': string;
  '950': string;
};

// Brand colors structure
type BrandColors = {
  'brand colors'?: {
    health?: {
      Purple?: ColorScale;
      Teal?: ColorScale;
      Blue?: ColorScale;
    };
    raiqa?: {
      'Neural Pulse'?: ColorScale;
      'Quantum Orchid'?: ColorScale;
      'Visionary Violet'?: ColorScale;
      'Catalyst Orange'?: ColorScale;
      'Neural Saffron'?: ColorScale;
    };
    common?: {
      Slate?: ColorScale;
      Zinc?: ColorScale;
    };
  };
};

// UI Colors
type UIColors = {
  colors?: {
    primary?: string;
    'primary-foreground'?: string;
    'primary-border'?: string;
    secondary?: string;
    'secondary-foreground'?: string;
    'secondary-border'?: string;
    accent?: string;
    'accent-foreground'?: string;
    background?: string;
    foreground?: string;
    'text primary'?: string;
    'text secondary'?: string;
    card?: string;
    'card-foreground'?: string;
    cardBorder?: string;
    input?: string;
    muted?: string;
    'muted-foreground'?: string;
    popover?: string;
    'popover-foreground'?: string;
    ring?: string;
    'sidebar-background'?: string;
    'sidebar-foreground'?: string;
    'sidebar-primary'?: string;
    'sidebar-primary-foreground'?: string;
    'sidebar-accent'?: string;
    'sidebar-accent-foreground'?: string;
    'sidebar-border'?: string;
    'sidebar-ring'?: string;
    success?: string;
    'success-foreground'?: string;
    destructive?: string;
    'destructive-foreground'?: string;
    info?: string;
    'info-foreground'?: string;
    warning?: string;
    'warning-foreground'?: string;
    'brand-1'?: string;
    'brand-2'?: string;
    'brand-3'?: string;
    'brand-4'?: string;
    'brand-5'?: string;
    [key: string]: string | undefined;
  };
};

// Typography component types
type TypographyElement = {
  'font-size'?: number;
  'line-height'?: number;
  'font-weight'?: number;
  'letter-spacing'?: number;
};

// Typography definition
type Typography = {
  typography?: {
    components?: {
      Display?: {
        xxl?: TypographyElement;
        xl?: TypographyElement;
        lg?: TypographyElement;
      };
      Headings?: {
        h1?: TypographyElement;
        h2?: TypographyElement;
        h3?: TypographyElement;
        h4?: TypographyElement;
        h5?: TypographyElement;
        h6?: TypographyElement;
      };
      Body?: {
        xxl?: TypographyElement;
        xl?: TypographyElement;
        lg?: TypographyElement;
        md?: TypographyElement;
        sm?: TypographyElement;
      };
      Buttons?: {
        lg?: TypographyElement;
        md?: TypographyElement;
        sm?: TypographyElement;
      };
      Numbers?: {
        lg?: TypographyElement;
      };
      Subheadings?: {
        xxl?: TypographyElement;
        xl?: TypographyElement;
        lg?: TypographyElement;
        md?: TypographyElement;
        sm?: TypographyElement;
      };
      Captions?: {
        md?: TypographyElement;
      };
    };
  };
};

// Font definition
type FontDefinition = {
  font?: {
    weight?: {
      thin?: number;
      extralight?: number;
      light?: number;
      normal?: number;
      medium?: number;
      semibold?: number;
      bold?: number;
      extrabold?: number;
      black?: number;
    };
    'letter-spacing'?: {
      tighter?: number;
      tight?: number;
      normal?: number;
      wide?: number;
      wider?: number;
      widest?: number;
    };
    size?: {
      [key: string]: number;
    };
    'line-height'?: {
      [key: string]: number;
    };
  };
};

// Spacing and sizing
type Spacing = {
  spacing?: {
    [key: string]: number;
  };
  width?: {
    [key: string]: number;
  };
  height?: {
    [key: string]: number;
  };
  'max-width'?: {
    [key: string]: number;
  };
};

// Border properties
type BorderProperties = {
  radius?: {
    [key: string]: number;
  };
  'border-width'?: {
    [key: string]: number;
  };
  'border radius'?: {
    sm?: number;
    default?: number;
    md?: number;
    lg?: number;
    xl?: number;
    full?: number;
  };
};

// Visual effects
type VisualEffects = {
  opacity?: {
    [key: string]: number;
  };
  blur?: {
    [key: string]: number;
  };
};

// Responsive breakpoints
type Breakpoints = {
  breakpoint?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    '2xl'?: number;
  };
};

// Define theme structure to match the new JSON theme files
type ThemeType = BrandColors &
    UIColors &
    Typography &
    FontDefinition &
    Spacing &
    BorderProperties &
    VisualEffects &
    Breakpoints & {
  [key: string]: any;
};

// Define the theme context type
type ThemeContextType = {
  currentTheme: ThemeType;
  isDarkMode: boolean;
  isMobileDevice: boolean;
  toggleTheme: () => void;
  setDeviceType: (isMobile: boolean) => void;
};

// Create the theme context
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Create a hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Props for the ThemeProvider component
type ThemeProviderProps = {
  children: ReactNode;
};

// Helper function to detect mobile devices
const detectMobileDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth <= 768; // Common breakpoint for mobile devices
};

// Deep merge function for merging themes
const mergeThemes = (target: any, source: any): any => {
  const output = { ...target };

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          Object.assign(output, { [key]: source[key] });
        } else {
          output[key] = mergeThemes(target[key], source[key]);
        }
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }

  return output;
};

const isObject = (item: any): boolean => {
  return item && typeof item === 'object' && !Array.isArray(item);
};

// Theme Provider component
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // State for dark mode and device type
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<ThemeType>(lightTheme as ThemeType);

  // Initialize theme based on user preference or system preference
  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      // setIsDarkMode(savedTheme === 'dark');
      setIsDarkMode(false);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      // setIsDarkMode(prefersDark);
      setIsDarkMode(false);
    }

    // Detect device type
    setIsMobileDevice(detectMobileDevice());

    // Add window resize listener for responsive themes
    const handleResize = () => {
      setIsMobileDevice(detectMobileDevice());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update theme when dark mode or device type changes
  useEffect(() => {
    // Select base theme based on mode
    const baseTheme = isDarkMode ? darkTheme : lightTheme;

    // Select device theme
    const deviceTheme = isMobileDevice ? mobileTheme : desktopTheme;

    // Merge themes (base theme + device-specific overrides)
    const mergedTheme = mergeThemes(baseTheme, deviceTheme);
    setCurrentTheme(mergedTheme as ThemeType);

    // Save theme preference
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

    // Update document theme class
    document.documentElement.classList.toggle('dark', isDarkMode);
    document.documentElement.classList.toggle('mobile', isMobileDevice);
    document.documentElement.classList.toggle('desktop', !isMobileDevice);
  }, [isDarkMode, isMobileDevice]);

  // Toggle between light and dark mode
  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  // Set device type (can be called externally if needed)
  const setDeviceType = (isMobile: boolean) => {
    setIsMobileDevice(isMobile);
  };

  // Create context value
  const contextValue: ThemeContextType = {
    currentTheme,
    isDarkMode,
    isMobileDevice,
    toggleTheme,
    setDeviceType
  };

  return (
      <ThemeContext.Provider value={contextValue}>
        <NextThemeProvider attribute="class" defaultTheme={'light'}>
          {children}
        </NextThemeProvider>
      </ThemeContext.Provider>
  );
};

export default ThemeProvider;