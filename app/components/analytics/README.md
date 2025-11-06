# Analytics Integration

This directory contains all analytics components for the Raiqa Health website.

## Components

### AnalyticsProvider
The main analytics provider that combines all tracking services:
- Google Analytics (GA4)
- Vercel Analytics
- Vercel Speed Insights
- SEO Tracker
- **Meta Pixel** (NEW)

### MetaPixel
Facebook Meta Pixel integration for tracking user interactions and conversions.

## Meta Pixel Setup

The Meta Pixel is automatically configured with the following:

1. **Pixel ID**: `1053250110280625` (default) or `NEXT_PUBLIC_META_PIXEL_ID` environment variable
2. **Automatic PageView tracking**: Tracks every page view automatically
3. **Event tracking**: Available through the analytics context

## Usage

### Basic Setup
The Meta Pixel is automatically enabled in `app/layout.tsx`:

```tsx
<AnalyticsProvider 
  metaPixelId={process.env.NEXT_PUBLIC_META_PIXEL_ID || '1053250110280625'}
  metaPixelEnabled={true}
  // ... other props
/>
```

### Tracking Custom Events

Use the `useAnalyticsContext` hook to track custom events:

```tsx
import { useAnalyticsContext } from '@/app/components/analytics/AnalyticsProvider';

function MyComponent() {
  const { trackMetaPixelEvent } = useAnalyticsContext();

  const handlePurchase = () => {
    trackMetaPixelEvent('Purchase', {
      value: 99.99,
      currency: 'AUD',
      content_name: 'Healthcare Service',
      content_category: 'Healthcare'
    });
  };

  return (
    <button onClick={handlePurchase}>
      Buy Now
    </button>
  );
}
```

### Common Events

Here are some common Meta Pixel events you might want to track:

#### Lead Event
```tsx
trackMetaPixelEvent('Lead', {
  content_name: 'Contact Form',
  content_category: 'Healthcare'
});
```

#### Purchase Event
```tsx
trackMetaPixelEvent('Purchase', {
  value: 99.99,
  currency: 'AUD',
  content_name: 'Healthcare Service',
  content_category: 'Healthcare'
});
```

#### ViewContent Event
```tsx
trackMetaPixelEvent('ViewContent', {
  content_name: 'Service Page',
  content_category: 'Healthcare'
});
```

#### AddToCart Event
```tsx
trackMetaPixelEvent('AddToCart', {
  value: 49.99,
  currency: 'AUD',
  content_name: 'Appointment Booking',
  content_category: 'Healthcare'
});
```

#### InitiateCheckout Event
```tsx
trackMetaPixelEvent('InitiateCheckout', {
  value: 99.99,
  currency: 'AUD',
  content_name: 'Healthcare Service',
  content_category: 'Healthcare'
});
```

## Environment Variables

Add to your `.env.local` file:

```env
NEXT_PUBLIC_META_PIXEL_ID=1053250110280625
```

## Testing

1. Use the Facebook Pixel Helper browser extension to verify tracking
2. Check the browser console for debug logs (when `vercelDebug` is enabled)
3. Verify events appear in your Facebook Ads Manager

## Notes

- The Meta Pixel script is loaded with `strategy="afterInteractive"` for optimal performance
- Includes a noscript fallback for users with JavaScript disabled
- All events are automatically logged to console in development mode
- The pixel ID is configurable via environment variables 