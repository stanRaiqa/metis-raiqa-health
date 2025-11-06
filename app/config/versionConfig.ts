'use client'

import { WebsiteVersion } from '../types';
import {useSearchParams} from "next/navigation";

/**
 * Website feature configuration based on version
 */
interface VersionFeatureConfig {
  // UI Components
  useNewHeader: boolean;
  useNewFooter: boolean;
  
  // Feature flags
  enableContactForm: boolean;
  enableBookingSystem: boolean;
  enableBlog: boolean;
  
  // Content
  showPricing: boolean;
  showTestimonials: boolean;
  
  // Beta features
  useRoutingFormButton: boolean;

  showComingSoon: boolean;
}

/**
 * Feature configurations by version
 */
const versionConfigs: Record<WebsiteVersion, VersionFeatureConfig> = {
  'ALPHA': {
    useNewHeader: true,
    useNewFooter: true,
    enableContactForm: true,
    enableBookingSystem: false,
    enableBlog: false,
    showPricing: false,
    showTestimonials: false,
    useRoutingFormButton: false,
    showComingSoon: false
  },
  'BETA': {
    useNewHeader: true,
    useNewFooter: true,
    enableContactForm: true,
    enableBookingSystem: true,
    enableBlog: true,
    showPricing: true,
    showTestimonials: true,
    useRoutingFormButton: true,
    showComingSoon: false
  },
  'FIRST-DRAFT': {
    useNewHeader: false,
    useNewFooter: false,
    enableContactForm: true,
    enableBookingSystem: false,
    enableBlog: true,
    showPricing: true,
    showTestimonials: true,
    useRoutingFormButton: false,
    showComingSoon: true
  }
};

const GetMode = () => {
  // const params = useSearchParams();
  // const mode = params.get('mode');
  // return mode ? mode.toString().toUpperCase() : "FIRST-DRAFT"
  return process.env.WEBSITE_VERSION || 'BETA';
}

/**
 * Get current website version from environment variables
 * Defaults to FIRST-DRAFT if not specified
 */
export const getCurrentVersion = (): WebsiteVersion => {


  const version = GetMode() as WebsiteVersion;
  return version || 'FIRST-DRAFT';
};

/**
 * Get feature configuration for the current website version
 */
export const getVersionConfig = (): VersionFeatureConfig => {
  const version = getCurrentVersion();
  return versionConfigs[version];
};

/**
 * Check if a specific feature is enabled for the current version
 */
export const isFeatureEnabled = (featureName: keyof VersionFeatureConfig): boolean => {
  const config = getVersionConfig();
  return config[featureName];
};

export default {
  getCurrentVersion,
  getVersionConfig,
  isFeatureEnabled,
}; 