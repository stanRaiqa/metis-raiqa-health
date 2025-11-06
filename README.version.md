# Raiqa Health Website Version System

The Raiqa Health Website supports multiple versions (ALPHA, BETA, and FIRST-DRAFT) with different feature sets.

## Overview

The version system allows you to:

- Run different versions of the site with different feature sets
- Toggle features on and off per version
- Gradually roll out features across versions
- Show visual indicators of which version is running

## Available Versions

| Version | Description | Use Case |
|---------|-------------|----------|
| ALPHA | Basic version with minimal features | Early testing, proof of concept |
| BETA | Enhanced version with more features | User testing, feedback collection |
| FIRST-DRAFT | Current production version | Final release |

## How to Run Different Versions

### Using npm scripts

The following scripts are available in `package.json`:

```bash
# Run development server with alpha version
yarn dev:alpha

# Run development server with beta version
yarn dev:beta

# Run development server with first-draft version
yarn dev:first-draft

# Build for production with specific version
yarn build:alpha
yarn build:beta
yarn build:first-draft
```

### Using .env file

1. Create a `.env.local` file in the project root
2. Add `WEBSITE_VERSION=FIRST-DRAFT` (or ALPHA or BETA)
3. Run `yarn dev`

## Version Features

Each version has different features enabled or disabled. These are defined in `app/config/versionConfig.ts`.

| Feature | ALPHA | BETA | FIRST-DRAFT |
|---------|-------|------|-------------|
| New Header | ✅ | ✅ | ❌ |
| New Footer | ✅ | ✅ | ❌ |
| Contact Form | ✅ | ✅ | ✅ |
| Booking System | ❌ | ✅ | ❌ |
| Blog | ❌ | ✅ | ✅ |
| Pricing | ❌ | ✅ | ✅ |
| Testimonials | ❌ | ✅ | ✅ |

## Implementing Version-Specific Features

### Using the `VersionFeature` Component

```jsx
import VersionFeature from '@/app/components/VersionFeature';

// Only show content if feature is enabled
<VersionFeature feature="showPricing">
  <PricingSection />
</VersionFeature>

// Show alternate content when feature is disabled
<VersionFeature feature="enableBookingSystem" fallback={<ComingSoonBanner />}>
  <BookingSystem />
</VersionFeature>
```

### Using the Version Config API

```jsx
import { isFeatureEnabled, getCurrentVersion } from '@/app/config/versionConfig';

// Programmatically check for features
function MyComponent() {
  const canBook = isFeatureEnabled('enableBookingSystem');
  
  return (
    <div>
      {canBook ? (
        <BookButton />
      ) : (
        <DisabledButton />
      )}
    </div>
  );
}
```

## How to Add a New Version Feature

1. Add a feature flag to the `VersionFeatureConfig` interface in `app/config/versionConfig.ts`
2. Set the feature values for each version in the `versionConfigs` object
3. Use `<VersionFeature>` or `isFeatureEnabled()` to conditionally render content

## More Information

For detailed documentation, see `app/config/VERSION.md`.
