# Men's Health Website - Design System Quick Start

## 🎨 What's New

A complete, scalable design system has been implemented with:
- **Professional color palette** tailored for men's health
- **Google Fonts integration** (Poppins, Inter, Space Grotesk)
- **Comprehensive design tokens** for colors, typography, spacing, shadows, and more
- **Scalable component architecture** using Tailwind CSS
- **Updated typography components** with the new system

## 🚀 Getting Started

### 1. View the Design System

To see all components and colors in action:

```tsx
// Import the showcase component
import DesignSystemShowcase from '@/app/components/example/DesignSystemShowcase';

// Use it in your page
<DesignSystemShowcase />
```

### 2. Use the Color Palette

```tsx
// Background colors
<div className="bg-brand-primary">Primary brand color</div>
<div className="bg-brand-teal">CTA/Interactive elements</div>
<div className="bg-brand-steel">Surfaces</div>

// Text colors
<h1 className="text-brand-dark">Main text</h1>
<p className="text-brand-neutral-dark">Secondary text</p>

// Button with hover
<button className="bg-brand-teal hover:bg-brand-teal-hover text-white">
  Click Me
</button>
```

### 3. Use Typography

```tsx
import { Header1, Header2, Body1, BodyLG } from '@/app/components/common/typography';

// Headings (Poppins font)
<Header1>Main Hero Title</Header1>
<Header2>Section Title</Header2>

// Body text (Inter font)
<Body1>Regular paragraph text</Body1>
<BodyLG>Larger emphasis text</BodyLG>

// Or use Tailwind directly
<h1 className="font-heading text-5xl font-bold">Hero Title</h1>
<p className="font-body text-base">Body text</p>

// Numbers/Data (Space Grotesk)
<span className="font-mono text-3xl font-medium">99.9%</span>
```

### 4. Use Buttons

```tsx
// Pre-styled button classes
<button className="btn btn-primary">Primary Action</button>
<button className="btn btn-secondary">Secondary Action</button>
<button className="btn btn-outline">Outline Button</button>

// Or custom with Tailwind
<button className="bg-brand-teal hover:bg-brand-teal-hover text-white font-heading font-semibold px-6 py-3 rounded-lg transition-base">
  Custom Button
</button>
```

### 5. Use Cards

```tsx
// Using utility class
<div className="card">
  <h3 className="font-heading text-2xl font-semibold mb-4">Card Title</h3>
  <p className="font-body text-base">Card content</p>
</div>

// Or build custom
<div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-base">
  Custom card content
</div>
```

### 6. Use Sections

```tsx
// Standard section
<section className="section">
  <div className="container-custom">
    {/* Your content */}
  </div>
</section>

// Custom responsive padding
<section className="py-12 md:py-16 lg:py-20">
  <div className="max-w-7xl mx-auto px-4">
    {/* Your content */}
  </div>
</section>
```

## 📦 What Changed

### Files Modified

1. **`app/fonts.ts`**
   - Replaced local fonts with Google Fonts
   - Added Poppins (headings), Inter (body), Space Grotesk (numbers)

2. **`app/layout.tsx`**
   - Updated to use new font variables
   - Removed old font references

3. **`app/globals.css`**
   - Complete redesign with design tokens
   - Added CSS variables for colors, typography, spacing
   - Added component utilities (buttons, cards, sections)
   - Removed legacy styles

4. **`tailwind.config.ts`**
   - Added brand color palette
   - Configured new font families
   - Added spacing, shadows, and z-index scales
   - Enhanced with transition utilities

5. **Typography Components**
   - Updated Header1, Header2, Header3, Body1, BodyLG
   - Now use new CSS variables and Tailwind classes
   - Removed dependency on old theme provider

### New Files Created

1. **`app/DESIGN_SYSTEM.md`**
   - Comprehensive documentation
   - Usage examples for all components
   - Best practices and guidelines

2. **`app/components/example/DesignSystemShowcase.tsx`**
   - Interactive showcase of all design system elements
   - Live examples of colors, typography, buttons, cards
   - Reference for building new components

3. **`DESIGN_SYSTEM_QUICKSTART.md`**
   - This file!
   - Quick reference for developers

## 🎯 Key Features

### Color Palette

- **Primary**: Muted Azure (#4A90E2) - Brand identity
- **CTA**: Ocean Teal (#3B9CA8) - Interactive elements
- **Steel Gray**: (#2E3A47) - Surfaces
- **Ice Blue**: (#A7C5EB) - Highlights
- **Charcoal**: (#161616) - Text

### Typography Hierarchy

- **H1**: 48px mobile / 64px desktop (Poppins Bold)
- **H2**: 36px mobile / 48px desktop (Poppins Bold)
- **H3**: 30px (Poppins SemiBold)
- **Body**: 16px (Inter Regular)
- **Large Body**: 18px (Inter Regular)

### Spacing Scale

Based on 8px increments:
- 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 80px, 96px, 128px

## 🔥 Pro Tips

### 1. Mobile-First Approach

```tsx
// Always start with mobile, then enhance
<div className="text-base md:text-lg lg:text-xl">
  Responsive text
</div>

<section className="py-12 md:py-16 lg:py-24">
  Responsive spacing
</section>
```

### 2. Use CSS Variables

```tsx
// Prefer CSS variables for consistency
<div style={{ backgroundColor: 'var(--color-primary)' }}>

// Or use Tailwind classes
<div className="bg-brand-primary">
```

### 3. Consistent Spacing

```tsx
// Use the spacing scale
<div className="space-y-4">  {/* 16px vertical spacing */}
  <p>Item 1</p>
  <p>Item 2</p>
</div>

<div className="flex gap-6">  {/* 24px gap */}
  <div>Column 1</div>
  <div>Column 2</div>
</div>
```

### 4. Semantic HTML

```tsx
// Use proper heading hierarchy
<section>
  <h2>Section Title</h2>  {/* Not h1 */}
  <h3>Subsection</h3>     {/* Not h2 */}
</section>
```

### 5. Accessible Focus States

```tsx
<button className="focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2">
  Accessible Button
</button>
```

## 📖 Full Documentation

For complete documentation, see:
- **`app/DESIGN_SYSTEM.md`** - Complete design system documentation
- **`app/globals.css`** - All CSS variables and utilities
- **`tailwind.config.ts`** - Tailwind configuration

## 🎨 Example: Complete Hero Section

```tsx
import { Header1, Body1 } from '@/app/components/common/typography';

export default function Hero() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-primary text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <Header1 className="mb-6 text-white">
            Transform Your Men's Health Journey
          </Header1>
          
          <Body1 className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto" addAnimation={false}>
            Professional care designed specifically for men's health needs.
            Join thousands who have transformed their lives.
          </Body1>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-primary bg-white text-brand-primary hover:bg-brand-neutral-light">
              Get Started Free
            </button>
            <button className="btn btn-outline border-white text-white hover:bg-white hover:text-brand-primary">
              Learn More
            </button>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="font-mono text-4xl font-bold mb-2">99.9%</div>
              <div className="font-body text-sm text-white/80">Success Rate</div>
            </div>
            <div>
              <div className="font-mono text-4xl font-bold mb-2">10K+</div>
              <div className="font-body text-sm text-white/80">Happy Clients</div>
            </div>
            <div>
              <div className="font-mono text-4xl font-bold mb-2">24/7</div>
              <div className="font-body text-sm text-white/80">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

## 🤝 Need Help?

- Review the showcase component: `app/components/example/DesignSystemShowcase.tsx`
- Check the full docs: `app/DESIGN_SYSTEM.md`
- Inspect CSS variables: `app/globals.css`
- Review Tailwind config: `tailwind.config.ts`

## ✅ Next Steps

1. ✅ Design system is ready to use
2. 🎨 Start building pages with the new components
3. 📱 Test responsiveness across devices
4. ♿ Ensure accessibility standards
5. 🚀 Deploy and iterate

---

**Built with care for men's health websites** 💙

