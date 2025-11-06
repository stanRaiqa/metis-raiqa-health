'use client';

import { useAnalyticsContext } from './AnalyticsProvider';

export default function MetaPixelExample() {
  const { trackMetaPixelEvent } = useAnalyticsContext();

  const handlePurchase = () => {
    // Track a purchase event
    trackMetaPixelEvent('Purchase', {
      value: 99.99,
      currency: 'AUD',
      content_name: 'Healthcare Service',
      content_category: 'Healthcare'
    });
  };

  const handleLead = () => {
    // Track a lead event
    trackMetaPixelEvent('Lead', {
      content_name: 'Contact Form',
      content_category: 'Healthcare'
    });
  };

  const handleViewContent = () => {
    // Track a view content event
    trackMetaPixelEvent('ViewContent', {
      content_name: 'Service Page',
      content_category: 'Healthcare'
    });
  };

  return (
    <div className="p-4 space-y-4">
      <h3 className="text-lg font-semibold">Meta Pixel Event Tracking Examples</h3>
      <div className="space-x-2">
        <button 
          onClick={handlePurchase}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Track Purchase Event
        </button>
        <button 
          onClick={handleLead}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Track Lead Event
        </button>
        <button 
          onClick={handleViewContent}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          Track View Content Event
        </button>
      </div>
    </div>
  );
} 