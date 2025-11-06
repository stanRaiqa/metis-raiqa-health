# AsideSection Component Usage Guide

## Overview
A flexible, reusable section component with image on one side and content (heading, body, CTA) on the other.

## Features
✅ 32px horizontal padding (px-8)
✅ 1280px max-width container
✅ Fully responsive (mobile-first)
✅ Image position control (left/right)
✅ Optional subtitle, CTA button
✅ Smooth animations
✅ Custom styling support

## Basic Usage

```tsx
import AsideSection from '@/app/components/common/AsideSection';

<AsideSection
  heading="Modern healthcare, designed for men"
  body="Experience personalized health solutions tailored to your needs."
  imageSrc="/images/hero-image.jpg"
  imageAlt="Healthcare professional"
  ctaText="Get Started"
  ctaLink="/signup"
/>
```

## Advanced Usage

### Image on Left Side
```tsx
<AsideSection
  subtitle="Why Choose Us"
  heading="Expert Care, Anytime"
  body="Our licensed healthcare professionals are available 24/7."
  imageSrc="/images/doctor.jpg"
  imageAlt="Doctor consultation"
  imagePosition="left"  // Image on left, content on right
  ctaText="Learn More"
  onCtaClick={() => console.log('CTA clicked')}
/>
```

### Image on Right Side (Default)
```tsx
<AsideSection
  subtitle="Our Mission"
  heading="Better Health for Everyone"
  body="We believe healthcare should be accessible and convenient."
  imageSrc="/images/mission.jpg"
  imageAlt="Our mission"
  imagePosition="right"  // Image on right, content on left (default)
  ctaText="About Us"
  ctaLink="/about"
/>
```

### Mobile Layout Control
```tsx
<AsideSection
  heading="Your Health Journey Starts Here"
  body="Take the first step towards better health today."
  imageSrc="/images/journey.jpg"
  imageAlt="Health journey"
  reverseOnMobile={true}  // Show image first on mobile
  ctaText="Start Now"
/>
```

### Custom Styling
```tsx
<AsideSection
  heading="Premium Healthcare"
  body="Experience the difference with our premium services."
  imageSrc="/images/premium.jpg"
  imageAlt="Premium services"
  backgroundColor="bg-brand-ice/20"  // Custom background
  contentClassName="lg:pr-12"  // Extra padding on content
  imageClassName="lg:shadow-2xl"  // Custom image styling
/>
```

### With Custom Body Content (JSX)
```tsx
<AsideSection
  heading="Why Men's Health Matters"
  body={
    <div className="space-y-4">
      <p className="font-body text-brand-steel">
        Men face unique health challenges that require specialized care.
      </p>
      <ul className="list-disc list-inside space-y-2 text-brand-steel">
        <li>Personalized treatment plans</li>
        <li>Discreet and confidential</li>
        <li>Expert medical professionals</li>
      </ul>
    </div>
  }
  imageSrc="/images/health-matters.jpg"
  imageAlt="Men's health"
  ctaText="Learn More"
/>
```

## Props Reference

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `heading` | `string` | **Required** | Main heading text |
| `body` | `string \| ReactNode` | **Required** | Body content (text or JSX) |
| `imageSrc` | `string` | **Required** | Image source path |
| `imageAlt` | `string` | **Required** | Image alt text for accessibility |
| `subtitle` | `string` | `undefined` | Optional subtitle above heading |
| `ctaText` | `string` | `undefined` | CTA button text (button hidden if not provided) |
| `ctaLink` | `string` | `undefined` | CTA button link (Next.js Link) |
| `onCtaClick` | `() => void` | `undefined` | CTA button click handler |
| `imagePosition` | `'left' \| 'right'` | `'right'` | Image position relative to content |
| `backgroundColor` | `string` | `'bg-brand-light'` | Section background color |
| `contentClassName` | `string` | `''` | Additional CSS classes for content |
| `imageClassName` | `string` | `''` | Additional CSS classes for image |
| `imageWidth` | `number` | `600` | Image width (for optimization) |
| `imageHeight` | `number` | `500` | Image height (for optimization) |
| `reverseOnMobile` | `boolean` | `false` | Show image first on mobile devices |

## Complete Example

```tsx
import AsideSection from '@/app/components/common/AsideSection';

export default function AboutPage() {
  return (
    <>
      {/* Section 1: Image Right */}
      <AsideSection
        subtitle="About Us"
        heading="Healthcare Without Limits"
        body="We're revolutionizing men's healthcare with personalized, accessible solutions."
        imageSrc="/images/about.jpg"
        imageAlt="About our company"
        imagePosition="right"
        ctaText="Our Story"
        ctaLink="/about"
        backgroundColor="bg-brand-light"
      />

      {/* Section 2: Image Left */}
      <AsideSection
        subtitle="Our Approach"
        heading="Personalized Care for You"
        body="Every man's health journey is unique. That's why we create customized treatment plans."
        imageSrc="/images/approach.jpg"
        imageAlt="Our approach"
        imagePosition="left"
        ctaText="Get Started"
        ctaLink="/signup"
        backgroundColor="bg-brand-neutral-light"
        reverseOnMobile={true}
      />
    </>
  );
}
```

## Design System Compliance
- ✅ Uses brand colors and typography components
- ✅ Standard 32px padding (px-8)
- ✅ 1280px max-width container
- ✅ Smooth animations with Framer Motion
- ✅ Responsive breakpoints
- ✅ Accessible image alt text
- ✅ Optimized Next.js Image component

