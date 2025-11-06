# URL Slug Utilities

This directory contains utilities for working with URL slugs and path segments in the Next.js application.

## Files

### `url-slug.ts`
Contains utility functions and hooks for extracting and working with URL slugs.

## Available Functions and Hooks

### `useCurrentSlug()`
A React hook that returns the current URL slug (first segment).

```typescript
import { useCurrentSlug } from '@/app/utils/url-slug';

function MyComponent() {
  const slug = useCurrentSlug();
  
  if (slug === 'about-us') {
    // Handle about-us page
  }
  
  return <div>Current slug: {slug}</div>;
}
```

### `useLastSlug()`
A React hook that returns the last slug from the current URL.

```typescript
import { useLastSlug } from '@/app/utils/url-slug';

function MyComponent() {
  const lastSlug = useLastSlug();
  
  // For URL: https://localhost/service/nurse
  // lastSlug will be 'nurse'
  
  return <div>Last slug: {lastSlug}</div>;
}
```

### `extractSlugFromPathname(pathname: string)`
Utility function to extract slug from a given pathname.

```typescript
import { extractSlugFromPathname } from '@/app/utils/url-slug';

const slug = extractSlugFromPathname('/about-us/team'); // Returns 'about-us'
```

### `extractLastSlugFromPathname(pathname: string)`
Utility function to extract the last slug from a given pathname.

```typescript
import { extractLastSlugFromPathname } from '@/app/utils/url-slug';

const lastSlug = extractLastSlugFromPathname('/service/nurse'); // Returns 'nurse'
const lastSlug2 = extractLastSlugFromPathname('/about-us/team/member'); // Returns 'member'
```

### `extractPathSegments(pathname: string)`
Utility function to get all path segments from a pathname.

```typescript
import { extractPathSegments } from '@/app/utils/url-slug';

const segments = extractPathSegments('/about-us/team/member'); // Returns ['about-us', 'team', 'member']
```

### `usePathSegments()`
A React hook that returns all path segments of the current URL.

```typescript
import { usePathSegments } from '@/app/utils/url-slug';

function MyComponent() {
  const segments = usePathSegments();
  
  return (
    <div>
      Path segments: {segments.join(' > ')}
    </div>
  );
}
```

### `useIsCurrentSlug(targetSlug: string)`
A React hook to check if the current path matches a specific slug.

```typescript
import { useIsCurrentSlug } from '@/app/utils/url-slug';

function MyComponent() {
  const isAboutPage = useIsCurrentSlug('about-us');
  
  return (
    <div>
      {isAboutPage ? 'You are on the about page' : 'You are not on the about page'}
    </div>
  );
}
```

### `useIsLastSlug(targetSlug: string)`
A React hook to check if the last segment of the current path matches a specific slug.

```typescript
import { useIsLastSlug } from '@/app/utils/url-slug';

function MyComponent() {
  const isNursePage = useIsLastSlug('nurse');
  
  return (
    <div>
      {isNursePage ? 'You are on the nurse page' : 'You are not on the nurse page'}
    </div>
  );
}
```

## Components

### `CurrentSlug` Component
Located in `app/components/CurrentSlug.tsx`

A React component that displays the current slug with options for first or last slug.

```typescript
import CurrentSlug from '@/app/components/CurrentSlug';

function MyComponent() {
  return (
    <div>
      {/* Display first slug */}
      <CurrentSlug fallback="Home" className="text-blue-500" type="first" />
      
      {/* Display last slug */}
      <CurrentSlug fallback="Home" className="text-green-500" type="last" />
    </div>
  );
}
```

## Examples

### Basic Usage
```typescript
import { useCurrentSlug, useLastSlug } from '@/app/utils/url-slug';

function Navigation() {
  const currentSlug = useCurrentSlug();
  const lastSlug = useLastSlug();
  
  return (
    <nav>
      <a className={currentSlug === 'home' ? 'active' : ''} href="/">Home</a>
      <a className={currentSlug === 'about-us' ? 'active' : ''} href="/about-us">About</a>
      <a className={currentSlug === 'services' ? 'active' : ''} href="/services">Services</a>
      
      {/* Show last slug for nested pages */}
      <span>Current page: {lastSlug}</span>
    </nav>
  );
}
```

### Breadcrumb Navigation
```typescript
import { usePathSegments } from '@/app/utils/url-slug';

function Breadcrumb() {
  const segments = usePathSegments();
  
  return (
    <nav className="breadcrumb">
      {segments.map((segment, index) => (
        <span key={index}>
          {index > 0 && ' > '}
          {segment}
        </span>
      ))}
    </nav>
  );
}
```

### Conditional Rendering Based on Last Slug
```typescript
import { useIsLastSlug } from '@/app/utils/url-slug';

function ConditionalContent() {
  const isNursePage = useIsLastSlug('nurse');
  const isDoctorPage = useIsLastSlug('doctor');
  
  return (
    <div>
      {isNursePage && <NurseContent />}
      {isDoctorPage && <DoctorContent />}
    </div>
  );
}
```

### Service Detail Pages
```typescript
import { useLastSlug } from '@/app/utils/url-slug';

function ServiceDetail() {
  const serviceType = useLastSlug();
  
  return (
    <div>
      <h1>Service: {serviceType}</h1>
      {serviceType === 'nurse' && <NurseServiceDetails />}
      {serviceType === 'doctor' && <DoctorServiceDetails />}
    </div>
  );
}
``` 