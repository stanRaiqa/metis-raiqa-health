# Raiqa Health Website Version Control

This file documents the version control system used for the Raiqa Health website.

## Overview

The website supports different versions with varying features:

- **ALPHA**: Basic version with minimal features for initial testing
- **BETA**: Enhanced version with more features for wider testing
- **FIRST-DRAFT**: Current production version with complete feature set

The version is controlled via the `WEBSITE_VERSION` environment variable.

## Setting Up Environment

1. Create a `.env.local` file in the project root with:

   ```bash
   WEBSITE_VERSION=FIRST-DRAFT
   ```

2. Set the value to one of: `ALPHA`, `BETA`, or `FIRST-DRAFT`

## Feature Configuration

Features for each version are defined in `app/config/versionConfig.ts`. This configuration controls:

- UI Components (headers, footers)
- Feature flags (contact form, booking system, blog)
- Content visibility (pricing, testimonials)

## Usage in Components

### 1. Using the VersionFeature Component

```tsx
import VersionFeature from '@/app/components/VersionFeature';

// To conditionally render a component based on a feature flag:
<VersionFeature feature="enableBookingSystem">
  <BookingComponent />
</VersionFeature>

// With a fallback for when feature is disabled:
<VersionFeature 
  feature="enableBookingSystem" 
  fallback={<ComingSoonBanner />}
>
  <BookingComponent />
</VersionFeature>
```

### 2. Checking Version Configuration Directly

```tsx
import { isFeatureEnabled, getCurrentVersion } from '@/app/config/versionConfig';

// Check if a specific feature is enabled
const canBook = isFeatureEnabled('enableBookingSystem');

// Get the current version
const version = getCurrentVersion();
```

## Version Indicator

The `VersionIndicator` component shows the current active version. It's visible in development mode or for non-production versions:

```tsx
import VersionIndicator from '@/app/components/VersionIndicator';

// Basic badge with just the version name
<VersionIndicator />

// Full text version indicator
<VersionIndicator showFullText={true} />
```

## Adding New Features

1. Add a new feature flag to the `VersionFeatureConfig` interface in `versionConfig.ts`
2. Configure the feature for each version in the `versionConfigs` object
3. Use the `VersionFeature` component or `isFeatureEnabled` function to control the feature's visibility
