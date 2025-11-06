'use client';

import { useEffect, useState } from 'react';
import useAnalytics from '@/app/hooks/useAnalytics';

/**
 * Example component showing how to use analytics
 * This is for demonstration only - implement in your actual components
 */
const AnalyticsExample = () => {
  const { trackPractitioner, trackPatient, trackContentEngagement, trackSearch } = useAnalytics();
  const [hasTracked, setHasTracked] = useState(false);
  
  // Example: Track page view on component mount
  useEffect(() => {
    // Track that a practitioner viewed this page
    trackPractitioner('view', {
      page: 'example-page',
      timestamp: new Date().toISOString()
    });
    
    setHasTracked(true);
  }, [trackPractitioner]);
  
  // Example: Track interest in practitioner information
  const handlePractitionerInterest = () => {
    trackPractitioner('interest', {
      section: 'how-it-works',
      timestamp: new Date().toISOString()
    });
    
    // Your actual logic would go here
    alert('Practitioner interest tracked!');
  };
  
  // Example: Track content engagement
  const handleContentEngagement = () => {
    trackContentEngagement({
      content_type: 'features',
      section_id: 'marketplace-features',
      engagement_type: 'click',
      duration: 30
    });
    
    // Your actual logic would go here
    alert('Content engagement tracked!');
  };
  
  // Example: Track a search event
  const handleSearch = () => {
    trackSearch({
      query: 'doctor near me',
      filters: {
        specialty: 'dental',
        availability: 'today'
      },
      results_count: 5,
      location: 'Sydney'
    });
    
    // Your actual search logic would go here
    alert('Search tracked!');
  };
  
  return (
    <div className="p-4 border rounded-lg m-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Analytics Example</h2>
      <p className="mb-2">Page view tracked: {hasTracked ? 'Yes' : 'No'}</p>
      
      <div className="flex flex-col gap-2">
        <button 
          onClick={handlePractitionerInterest}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Practitioner Information (Track Interest)
        </button>
        
        <button 
          onClick={handleContentEngagement}
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
        >
          View Features (Track Content)
        </button>
        
        <button 
          onClick={handleSearch}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Search Doctors (Track Event)
        </button>
      </div>
      
      <div className="mt-4 text-sm text-gray-600">
        <p>This is just an example component showing how to use the analytics hooks in your components.</p>
      </div>
    </div>
  );
};

export default AnalyticsExample; 