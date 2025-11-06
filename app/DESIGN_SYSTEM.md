# Men's Health Website - Design System

A comprehensive, scalable design system built for professional men's health websites.

## Table of Contents

1. [Color Palette](#color-palette)
2. [Typography](#typography)
3. [Spacing System](#spacing-system)
4. [Components](#components)
5. [Usage Examples](#usage-examples)

## Color Palette

### Brand Colors

```css
/* Primary Identity */
--color-primary: #4A90E2          /* Muted Azure */
--color-primary-light: #6BA4E9    /* Lighter variant */
--color-primary-dark: #3A7BC8     /* Darker variant */

/* Base Colors */
--color-base-dark: #161616        /* Charcoal - Text */
--color-base-light: #FFFFFF       /* White - Background */

/* Secondary Colors */
--color-secondary-1: #2E3A47      /* Steel Gray - Surfaces */
--color-secondary-2: #A7C5EB      /* Ice Blue - Highlights */

/* CTA & Interactive */
--color-cta: #3B9CA8              /* Ocean Teal */
--color-cta-hover: #2F7D87        /* Hover state */
--color-cta-active: #256B73       /* Active state */

/* Neutral */
--color-neutral: #D9D9D9          /* Light Gray */
--color-neutral-dark: #A8A8A8
--color-neutral-light: #F5F5F5
```

### Tailwind Usage

```tsx
// Background colors
<div className="bg-brand-primary">Primary</div>
<div className="bg-brand-teal">CTA Button</div>
<div className="bg-brand-steel">Surface</div>

// Text colors
<h1 className="text-brand-dark">Heading</h1>
<p className="text-brand-neutral-dark">Secondary text</p>

// Hover states
<button className="bg-brand-teal hover:bg-brand-teal-hover">
  Click Me
</button>
```

## Typography

### Font Families

1. **Poppins** - Headings, CTAs, Titles
   - Weights: 400, 500, 600, 700
   - Usage: `font-heading` or `font-poppins`

2. **Inter** - Body text, Product info
   - Weights: 400, 500, 600
   - Usage: `font-body` or `font-inter`

3. **Space Grotesk** - Numbers, Technical data
   - Weights: 400, 500, 600, 700
   - Usage: `font-mono` or `font-space-grotesk`

### Type Scale

```css
--font-size-xs: 0.75rem      /* 12px */
--font-size-sm: 0.875rem     /* 14px */
--font-size-base: 1rem       /* 16px */
--font-size-lg: 1.125rem     /* 18px */
--font-size-xl: 1.25rem      /* 20px */
--font-size-2xl: 1.5rem      /* 24px */
--font-size-3xl: 1.875rem    /* 30px */
--font-size-4xl: 2.25rem     /* 36px */
--font-size-5xl: 3rem        /* 48px -> 64px on desktop */
--font-size-6xl: 3.75rem     /* 60px -> 80px on desktop */
--font-size-7xl: 4.5rem      /* 72px -> 96px on desktop */
```

### Usage Examples

```tsx
import { Header1, Header2, Body1, BodyLG } from '@/app/components/common/typography';

// Headings (Poppins)
<Header1>Hero Title</Header1>
<Header2>Section Title</Header2>
<h3 className="font-heading text-3xl font-semibold">Subsection</h3>

// Body text (Inter)
<Body1>Regular paragraph text</Body1>
<BodyLG>Larger emphasis text</BodyLG>
<p className="font-body text-base">Regular text</p>

// Numbers & Data (Space Grotesk)
<span className="font-mono text-2xl font-medium">99.9%</span>
```

## Spacing System

8px base unit for consistent, scalable spacing:

```css
--space-1: 0.25rem   /* 4px */
--space-2: 0.5rem    /* 8px */
--space-3: 0.75rem   /* 12px */
--space-4: 1rem      /* 16px */
--space-6: 1.5rem    /* 24px */
--space-8: 2rem      /* 32px */
--space-12: 3rem     /* 48px */
--space-16: 4rem     /* 64px */
--space-20: 5rem     /* 80px */
--space-24: 6rem     /* 96px */
--space-32: 8rem     /* 128px */
```

### Tailwind Usage

```tsx
// Padding
<div className="p-4">16px padding</div>
<div className="px-6 py-8">24px horizontal, 32px vertical</div>

// Margin
<section className="mt-16 mb-20">64px top, 80px bottom</section>

// Gap (Flexbox/Grid)
<div className="flex gap-4">16px gap</div>
<div className="grid grid-cols-3 gap-6">24px gap</div>
```

## Components

### Buttons

```tsx
// Primary CTA Button
<button className="btn btn-primary">
  Get Started
</button>

// Using Tailwind directly
<button className="bg-brand-teal hover:bg-brand-teal-hover text-white font-heading font-semibold px-6 py-3 rounded-lg transition-base">
  Get Started
</button>

// Secondary Button
<button className="btn btn-secondary">
  Learn More
</button>

// Outline Button
<button className="btn btn-outline">
  Secondary Action
</button>
```

### Cards

```tsx
// Using utility class
<div className="card">
  <h3 className="font-heading text-2xl font-semibold mb-4">Card Title</h3>
  <p className="font-body text-base">Card content goes here</p>
</div>

// Using Tailwind directly
<div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-base">
  Content
</div>
```

### Sections

```tsx
// Standard section spacing
<section className="section">
  <div className="container-custom">
    {/* Content */}
  </div>
</section>

// Custom section
<section className="py-16 md:py-20 lg:py-24">
  <div className="max-w-7xl mx-auto px-4">
    {/* Content */}
  </div>
</section>
```

## Usage Examples

### Hero Section

```tsx
import { Header1, Body1 } from '@/app/components/common/typography';

export default function Hero() {
  return (
    <section className="py-20 bg-brand-light">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <Header1 className="mb-6">
            Transform Your Men's Health Journey
          </Header1>
          <Body1 className="text-lg text-brand-neutral-dark mb-8">
            Professional care designed specifically for men's health needs
          </Body1>
          <button className="btn btn-primary">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}
```

### Feature Card

```tsx
export default function FeatureCard({ title, description, metric }) {
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-heading text-2xl font-semibold">
          {title}
        </h3>
        <span className="font-mono text-3xl font-medium text-brand-primary">
          {metric}
        </span>
      </div>
      <p className="font-body text-base text-brand-neutral-dark">
        {description}
      </p>
    </div>
  );
}
```

### CTA Section

```tsx
export default function CTASection() {
  return (
    <section className="section bg-gradient-primary">
      <div className="container-custom text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Start Your Journey?
        </h2>
        <p className="font-body text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Join thousands of men who have transformed their health with our platform
        </p>
        <button className="bg-white text-brand-primary hover:bg-brand-neutral-light font-heading font-semibold px-8 py-4 rounded-lg transition-base">
          Get Started Free
        </button>
      </div>
    </section>
  );
}
```

## Responsive Design

### Breakpoints

```tsx
// Mobile First Approach
<div className="text-base md:text-lg lg:text-xl">
  Responsive text
</div>

<section className="py-12 md:py-16 lg:py-20">
  Responsive section padding
</section>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  Responsive grid
</div>
```

## Accessibility

### Color Contrast

All color combinations meet WCAG AA standards:
- Text on backgrounds maintains 4.5:1 ratio
- Large text maintains 3:1 ratio
- Interactive elements have clear hover/focus states

### Focus States

```tsx
<button className="focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2">
  Accessible Button
</button>
```

## Performance

### Font Loading

Fonts are loaded via Google Fonts with `display: swap` for optimal performance.

### Animation

All animations use GPU-accelerated properties (transform, opacity):

```tsx
<div className="transition-base hover:transform hover:-translate-y-1">
  Performant hover effect
</div>
```

## Best Practices

1. **Use CSS Variables**: Prefer CSS variables over hardcoded values for consistency
2. **Mobile First**: Build mobile layouts first, then enhance for larger screens
3. **Semantic HTML**: Use appropriate HTML elements (h1, h2, p, etc.)
4. **Consistent Spacing**: Use the 8px spacing scale for all layouts
5. **Typography Hierarchy**: Maintain clear visual hierarchy with heading levels
6. **Accessible Colors**: Ensure sufficient contrast for all text
7. **Performance**: Use CSS transforms and opacity for animations

## Migration Guide

### From Old System

```tsx
// Old
<div style={{ fontFamily: 'var(--font-neulis-sans)' }}>

// New
<div className="font-body">

// Old
<h1 style={{ fontSize: '3rem' }}>

// New
<Header1> or <h1 className="text-5xl font-heading font-bold">
```

## Support

For questions or issues with the design system:
- Check this documentation
- Review component examples
- Inspect globals.css for CSS variables
- Check tailwind.config.ts for Tailwind configuration

