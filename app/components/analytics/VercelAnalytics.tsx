'use client';

import { Analytics as VercelAnalytics } from '@vercel/analytics/react';
import { useEffect, useState } from 'react';
import type { BeforeSendEvent, BeforeSend } from '@vercel/analytics/react';

type VercelAnalyticsProps = {
  debug?: boolean;
  mode?: 'auto' | 'development' | 'production';
  beforeSend?: BeforeSend;
};

/**
 * Vercel Analytics component with customizable configuration
 * This component wraps Vercel's Analytics component with additional options
 * 
 * @param debug - Enable debug mode to log events to console
 * @param mode - Set mode manually (defaults to auto)
 * @param beforeSend - Function to filter events before sending
 */
const VercelAnalyticsWrapper = ({ 
  debug = false, 
  mode = 'auto',
  beforeSend 
}: VercelAnalyticsProps) => {
  // Use state to track mounted status to ensure client-side only rendering
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Log initialization in debug mode
    if (debug) {
      console.log('Vercel Analytics initialized with mode:', mode);
    }
  }, [debug, mode]);

  // Only render when component is mounted (client-side)
  if (!mounted) return null;

  return (
    <VercelAnalytics
      debug={debug}
      mode={mode}
      beforeSend={beforeSend}
    />
  );
};

export default VercelAnalyticsWrapper; 