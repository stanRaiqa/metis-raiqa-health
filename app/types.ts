import {ReactNode} from "react";
import {Variants} from "framer-motion";
import {CardItem} from "@/sanity.types";

export interface HeaderProps {
  children: ReactNode;
  className?: string;
  color?: string;
}

export interface ButtonProps extends HeaderProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export type TypographyElement = {
  'font-size'?: number;
  'line-height'?: number;
  'font-weight'?: number;
  'letter-spacing'?: number;
};

export interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  once?: boolean;
  threshold?: number;
}

export type Step = {
  heading: string;
  subHeading?: string;
};

export type AnimatedStepsProps = {
  steps: Step[];
  intervalDuration?: number; // Duration in milliseconds
  startAnimation?: boolean; // Control when the animation starts
};

export type CardItemType = {
  cardTitle: string;
  cardDescription: string;
  cardImage: any;
  buttonText?: string;
  buttonLink?: string;
};

export interface CardCardProps {
  card: CardItemType;
}

/**
 * Website version types
 */
export type WebsiteVersion = 'ALPHA' | 'BETA' | 'FIRST-DRAFT';

/**
 * Healthcare service event types
 */
export interface Event {
  title: string;
  slug: string;
  length: number;
  description: string;
  price: number;
  originalPrice: number;
  isGuest: boolean;
}

/**
 * Healthcare professional types
 */
export interface ServicesList {
  name: string;
  slug: string;
  profession: string;
  serviceAvailableInThePlatform: boolean;
  genderSensitive: boolean;
  isFemalePractitionerAvailable: boolean;
  isMalePractitionerAvailable: boolean
  events: Event[];
}