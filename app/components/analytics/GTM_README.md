# Google Tag Manager (GTM) Setup

This document explains how Google Tag Manager is integrated into the Raiqa Health platform.

## Setup

### 1. Environment Variables

Add the following environment variable to your `.env.local` file:

```bash
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXXXX
```

Replace `GTM-XXXXXXXXX` with your actual GTM Container ID.

### 2. GTM Container Setup

In your Google Tag Manager container, you can now:

1. **Create triggers** based on the custom events we're tracking
2. **Set up tags** for various marketing and analytics tools
3. **Configure variables** to capture data layer information

## Available Events

The following events are automatically tracked and available in GTM:

### Page Views
- **Event**: `page_view`
- **Variables**: `page_path`, `page_title`, `platform`

### User Interactions
- **Event**: `button_click`
- **Variables**: `button_name`, `page_path`, `platform`

### Form Interactions
- **Event**: `form_start`
- **Variables**: `form_name`, `page_path`, `platform`

- **Event**: `form_submit`
- **Variables**: `form_name`, `page_path`, `platform`

### Healthcare Specific Events
- **Event**: `practitioner_search`
- **Variables**: `specialty`, `location`, `platform`

- **Event**: `appointment_booking`
- **Variables**: `practitioner_id`, `service_type`, `platform`

- **Event**: `service_view`
- **Variables**: `service_name`, `service_category`, `platform`

### Conversion Events
- **Event**: `lead_generation`
- **Variables**: `lead_source`, `form_type`, `platform`

- **Event**: `user_registration`
- **Variables**: `user_type`, `platform`

### Error Tracking
- **Event**: `error_occurred`
- **Variables**: `error_type`, `error_message`, `page_path`, `platform`

## Usage Examples

### Basic Event Tracking

```tsx
import { useGTM } from '@/app/hooks/useGTM';

function MyComponent() {
  const { trackButtonClick, trackFormSubmit } = useGTM();

  const handleButtonClick = () => {
    trackButtonClick('book_appointment', '/services');
  };

  const handleFormSubmit = () => {
    trackFormSubmit('contact_form', '/contact');
  };

  return (
    <button onClick={handleButtonClick}>
      Book Appointment
    </button>
  );
}
```

### Healthcare Specific Tracking

```tsx
import { useGTM } from '@/app/hooks/useGTM';

function PractitionerSearch() {
  const { trackPractitionerSearch, trackAppointmentBooking } = useGTM();

  const handleSearch = (specialty: string, location: string) => {
    trackPractitionerSearch(specialty, location);
  };

  const handleBooking = (practitionerId: string, serviceType: string) => {
    trackAppointmentBooking(practitionerId, serviceType);
  };

  return (
    <div>
      {/* Your search component */}
    </div>
  );
}
```

### Custom Events

```tsx
import { useGTM } from '@/app/hooks/useGTM';

function CustomTracking() {
  const { trackCustomEvent } = useGTM();

  const handleCustomAction = () => {
    trackCustomEvent('video_watch', {
      video_title: 'Healthcare Tips',
      video_duration: 120,
      user_segment: 'new_user'
    });
  };

  return (
    <button onClick={handleCustomAction}>
      Watch Video
    </button>
  );
}
```

## GTM Configuration

### Recommended Triggers

1. **Page View Trigger**
   - Event: `page_view`
   - Use for: Google Analytics, Facebook Pixel, etc.

2. **Button Click Trigger**
   - Event: `button_click`
   - Use for: Conversion tracking, user behavior analysis

3. **Form Submit Trigger**
   - Event: `form_submit`
   - Use for: Lead generation tracking, form analytics

4. **Healthcare Events**
   - Events: `practitioner_search`, `appointment_booking`, `service_view`
   - Use for: Healthcare-specific analytics and marketing

### Recommended Variables

1. **Data Layer Variables**
   - `page_path`
   - `button_name`
   - `form_name`
   - `specialty`
   - `location`
   - `practitioner_id`
   - `service_type`
   - `service_name`
   - `lead_source`
   - `user_type`
   - `error_type`
   - `error_message`

2. **Built-in Variables**
   - `Page URL`
   - `Page Path`
   - `Referrer`
   - `User Agent`

## Testing

### Preview Mode
1. Use GTM's Preview mode to test your triggers and tags
2. Navigate through your website and verify events are firing
3. Check the data layer in browser console: `window.dataLayer`

### Debug Mode
In development, you can see GTM events in the console by setting:
```bash
NODE_ENV=development
```

## Best Practices

1. **Consistent Naming**: Use consistent event names and variable names
2. **Data Layer**: Always use the data layer for passing data to GTM
3. **Testing**: Always test in preview mode before publishing
4. **Documentation**: Keep track of all custom events and their purposes
5. **Performance**: Don't overload with too many events - focus on business value

## Troubleshooting

### Common Issues

1. **Events not firing**
   - Check if GTM is properly loaded
   - Verify the GTM ID is correct
   - Check browser console for errors

2. **Data not appearing in GTM**
   - Verify triggers are set up correctly
   - Check if variables are configured properly
   - Use preview mode to debug

3. **Performance issues**
   - Limit the number of tags firing on each page
   - Use appropriate trigger conditions
   - Consider using tag firing rules

### Debug Commands

```javascript
// Check if GTM is loaded
console.log(window.dataLayer);

// Manually push an event
window.dataLayer.push({
  event: 'test_event',
  test_data: 'test_value'
});
``` 