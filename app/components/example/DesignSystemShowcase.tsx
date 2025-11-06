'use client';

import React from 'react';
import{ Header1, Header2, Header3, Body1} from '../common/typography/index';
import BodyLG from '../common/typography/BodyLG';

/**
 * Design System Showcase Component
 * Demonstrates the Men's Health website design system
 * Use this as a reference for building new components
 */
export default function DesignSystemShowcase() {
  return (
    <div className="min-h-screen bg-brand-light">
      {/* Color Palette Section */}
      <section className="section bg-brand-steel text-white">
        <div className="container-custom">
          <Header1 className="mb-8 text-white">Men&apos;s Health Design System</Header1>
          <Body1 className="text-white/90" addAnimation={false}>
            A comprehensive, scalable design system for professional men&apos;s health websites
          </Body1>
        </div>
      </section>

      {/* Colors */}
      <section className="section">
        <div className="container-custom">
          <Header2 className="mb-12">Color Palette</Header2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {/* Primary Colors */}
            <div className="space-y-3">
              <div className="h-24 bg-brand-primary rounded-lg"></div>
              <p className="font-mono text-sm">Primary</p>
              <p className="font-mono text-xs text-brand-neutral-dark">#4A90E2</p>
            </div>
            
            <div className="space-y-3">
              <div className="h-24 bg-brand-teal rounded-lg"></div>
              <p className="font-mono text-sm">CTA/Teal</p>
              <p className="font-mono text-xs text-brand-neutral-dark">#3B9CA8</p>
            </div>
            
            <div className="space-y-3">
              <div className="h-24 bg-brand-steel rounded-lg"></div>
              <p className="font-mono text-sm">Steel Gray</p>
              <p className="font-mono text-xs text-brand-neutral-dark">#2E3A47</p>
            </div>
            
            <div className="space-y-3">
              <div className="h-24 bg-brand-ice rounded-lg"></div>
              <p className="font-mono text-sm">Ice Blue</p>
              <p className="font-mono text-xs text-brand-neutral-dark">#A7C5EB</p>
            </div>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="section bg-brand-neutral-light">
        <div className="container-custom">
          <Header2 className="mb-12">Typography</Header2>
          
          <div className="space-y-8 bg-white p-8 rounded-xl shadow-md">
            <div>
              <p className="font-mono text-sm text-brand-neutral-dark mb-2">Poppins - Headings</p>
              <Header1>Hero Heading (H1)</Header1>
            </div>
            
            <div>
              <p className="font-mono text-sm text-brand-neutral-dark mb-2">Poppins - Headings</p>
              <Header2>Section Heading (H2)</Header2>
            </div>
            
            <div>
              <p className="font-mono text-sm text-brand-neutral-dark mb-2">Poppins - Headings</p>
              <Header3>Subsection Heading (H3)</Header3>
            </div>
            
            <div>
              <p className="font-mono text-sm text-brand-neutral-dark mb-2">Inter - Body</p>
              <Body1>
                Large body text for emphasis and introductions. Inter font family provides excellent readability.
              </Body1>
            </div>
            
            <div>
              <p className="font-mono text-sm text-brand-neutral-dark mb-2">Inter - Body</p>
              <Body1 addAnimation={false}>
                Regular body text for main content. This is the primary text size used throughout the website for paragraphs and general content.
              </Body1>
            </div>
            
            <div>
              <p className="font-mono text-sm text-brand-neutral-dark mb-2">Space Grotesk - Numbers</p>
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-5xl font-bold text-brand-primary">99.9%</span>
                <span className="font-body text-base text-brand-neutral-dark">Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section className="section">
        <div className="container-custom">
          <Header2 className="mb-12">Buttons</Header2>
          
          <div className="flex flex-wrap gap-4">
            <button className="btn btn-primary">
              Primary Button
            </button>
            
            <button className="btn btn-secondary">
              Secondary Button
            </button>
            
            <button className="btn btn-outline">
              Outline Button
            </button>
            
            <button className="bg-brand-steel text-white hover:bg-brand-dark font-heading font-semibold px-6 py-3 rounded-lg transition-base">
              Custom Button
            </button>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="section bg-brand-neutral-light">
        <div className="container-custom">
          <Header2 className="mb-12">Cards</Header2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading text-xl font-semibold">Feature Card</h3>
                <span className="font-mono text-2xl font-medium text-brand-primary">01</span>
              </div>
              <p className="font-body text-base text-brand-neutral-dark">
                Cards provide a clean, elevated surface for content with consistent shadows and spacing.
              </p>
            </div>
            
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading text-xl font-semibold">Metric Card</h3>
                <span className="font-mono text-2xl font-medium text-brand-teal">02</span>
              </div>
              <p className="font-body text-base text-brand-neutral-dark">
                Use Space Grotesk for numbers and technical data to create visual distinction.
              </p>
            </div>
            
            <div className="card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading text-xl font-semibold">Info Card</h3>
                <span className="font-mono text-2xl font-medium text-brand-steel">03</span>
              </div>
              <p className="font-body text-base text-brand-neutral-dark">
                Hover effects provide subtle feedback and enhance user interaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gradients */}
      <section className="section gradient-primary text-white">
        <div className="container-custom text-center">
          <Header2 className="mb-6 text-white">Gradient Backgrounds</Header2>
          <BodyLG className="text-white/90 max-w-2xl mx-auto">
            Gradient backgrounds create visual interest and can be used for CTAs, hero sections, and highlights.
          </BodyLG>
          <div className="mt-8">
            <button className="bg-white text-brand-primary hover:bg-brand-neutral-light font-heading font-semibold px-8 py-4 rounded-lg transition-base">
              Call to Action
            </button>
          </div>
        </div>
      </section>

      {/* Spacing */}
      <section className="section">
        <div className="container-custom">
          <Header2 className="mb-12">Spacing System</Header2>
          
          <div className="bg-white p-8 rounded-xl shadow-md space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 bg-brand-primary"></div>
              <span className="font-mono text-sm">space-1 (4px)</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-brand-primary"></div>
              <span className="font-mono text-sm">space-2 (8px)</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-16 h-8 bg-brand-primary"></div>
              <span className="font-mono text-sm">space-4 (16px)</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24 h-8 bg-brand-primary"></div>
              <span className="font-mono text-sm">space-6 (24px)</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-32 h-8 bg-brand-primary"></div>
              <span className="font-mono text-sm">space-8 (32px)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Example */}
      <section className="section bg-brand-steel text-white">
        <div className="container-custom">
          <Header2 className="mb-6 text-white">Complete Example</Header2>
          <BodyLG className="text-white/90 mb-12">
            See how all elements work together in a real component
          </BodyLG>
          
          <div className="bg-white text-brand-dark p-8 rounded-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-heading text-3xl font-bold">Men&apos;s Health Package</h3>
              <span className="font-mono text-4xl font-bold text-brand-primary">$299</span>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="font-body flex items-center gap-3">
                <span className="w-6 h-6 bg-success rounded-full flex items-center justify-center text-white text-xs">✓</span>
                Comprehensive health assessment
              </li>
              <li className="font-body flex items-center gap-3">
                <span className="w-6 h-6 bg-success rounded-full flex items-center justify-center text-white text-xs">✓</span>
                Personalized treatment plan
              </li>
              <li className="font-body flex items-center gap-3">
                <span className="w-6 h-6 bg-success rounded-full flex items-center justify-center text-white text-xs">✓</span>
                24/7 support access
              </li>
            </ul>
            
            <button className="btn btn-primary w-full">
              Get Started Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

