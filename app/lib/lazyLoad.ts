/**
 * Lazy loading utility using Intersection Observer
 * Reduces initial JavaScript payload by deferring non-critical component loading
 */

// Export a dummy component to make this a proper module
const LazyLoad = () => null;
export default LazyLoad;

// This script runs on the client side only
if (typeof window !== 'undefined') {
  // Wait until the page has loaded to avoid competing with critical resources
  window.addEventListener('load', () => {
    // Small delay to ensure initial rendering is complete
    setTimeout(() => {
      setupLazyLoading();
    }, 100);
  });
}

function setupLazyLoading() {
  // Select all lazy-loaded sections
  const lazyElements = document.querySelectorAll('[data-loading-strategy="lazy"]');
  
  if (!lazyElements.length) return;
  
  // Create an intersection observer with appropriate thresholds
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // When element is approaching viewport (300px before it's visible)
      if (entry.isIntersecting) {
        // Change display to trigger the dynamic import
        entry.target.setAttribute('data-visible', 'true');
        // Stop observing this element
        observer.unobserve(entry.target);
      }
    });
  }, {
    // Start loading when element is within 300px of viewport
    rootMargin: '300px',
    threshold: 0.01 // Trigger with minimal visibility
  });
  
  // Observe each lazy element
  lazyElements.forEach(element => {
    observer.observe(element);
  });
  
  // Cleanup function
  return () => {
    lazyElements.forEach(element => {
      observer.unobserve(element);
    });
  };
} 