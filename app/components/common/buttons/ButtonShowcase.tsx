'use client';

import React from 'react';
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  DangerButton,
  IconButton
} from './index';
import { Heart, Download, Trash2, X, Menu } from 'lucide-react';

/**
 * Button Showcase Component
 * Demonstrates all button variants from the design system
 * Use this as a reference or testing page
 */

export default function ButtonShowcase() {
  return (
    <div className="min-h-screen bg-brand-light py-20">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl font-bold text-brand-dark mb-4">
            Design System Buttons
          </h1>
          <p className="font-body text-lg text-brand-neutral-dark">
            Standardized button components for the Men&apos;s Health platform
          </p>
        </div>

        <div className="space-y-12">
          {/* Primary Buttons */}
          <section className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="font-heading text-2xl font-semibold text-brand-dark mb-6">
              Primary Buttons
            </h2>
            <div className="flex flex-wrap gap-4">
              <PrimaryButton size="small">Small Button</PrimaryButton>
              <PrimaryButton size="medium">Medium Button</PrimaryButton>
              <PrimaryButton size="large">Large Button</PrimaryButton>
              <PrimaryButton disabled>Disabled Button</PrimaryButton>
            </div>
            <div className="mt-4">
              <PrimaryButton fullWidth>Full Width Button</PrimaryButton>
            </div>
          </section>

          {/* Secondary Buttons */}
          <section className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="font-heading text-2xl font-semibold text-brand-dark mb-6">
              Secondary Buttons
            </h2>
            <div className="space-y-4">
              <div>
                <p className="font-body text-sm text-brand-neutral-dark mb-3">Outline Variant</p>
                <div className="flex flex-wrap gap-4">
                  <SecondaryButton variant="outline" size="small">
                    Small
                  </SecondaryButton>
                  <SecondaryButton variant="outline" size="medium">
                    Medium
                  </SecondaryButton>
                  <SecondaryButton variant="outline" size="large">
                    Large
                  </SecondaryButton>
                  <SecondaryButton variant="outline" disabled>
                    Disabled
                  </SecondaryButton>
                </div>
              </div>
              <div className="bg-brand-primary p-6 rounded-lg">
                <p className="font-body text-sm text-white mb-3">Ghost Variant (for colored backgrounds)</p>
                <div className="flex flex-wrap gap-4">
                  <SecondaryButton variant="ghost" size="small">
                    Small
                  </SecondaryButton>
                  <SecondaryButton variant="ghost" size="medium">
                    Medium
                  </SecondaryButton>
                  <SecondaryButton variant="ghost" size="large">
                    Large
                  </SecondaryButton>
                </div>
              </div>
            </div>
          </section>

          {/* Tertiary Buttons */}
          <section className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="font-heading text-2xl font-semibold text-brand-dark mb-6">
              Tertiary Buttons (Text-only)
            </h2>
            <div className="flex flex-wrap gap-4">
              <TertiaryButton size="small">Small</TertiaryButton>
              <TertiaryButton size="medium">Medium</TertiaryButton>
              <TertiaryButton size="large">Large</TertiaryButton>
              <TertiaryButton disabled>Disabled</TertiaryButton>
            </div>
          </section>

          {/* Danger Buttons */}
          <section className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="font-heading text-2xl font-semibold text-brand-dark mb-6">
              Danger Buttons
            </h2>
            <div className="flex flex-wrap gap-4">
              <DangerButton size="small">Delete</DangerButton>
              <DangerButton size="medium">Remove Account</DangerButton>
              <DangerButton size="large">Permanent Delete</DangerButton>
              <DangerButton disabled>Disabled</DangerButton>
            </div>
          </section>

          {/* Icon Buttons */}
          <section className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="font-heading text-2xl font-semibold text-brand-dark mb-6">
              Icon Buttons
            </h2>
            <div className="space-y-6">
              <div>
                <p className="font-body text-sm text-brand-neutral-dark mb-3">Circle Shape</p>
                <div className="flex flex-wrap gap-4">
                  <IconButton ariaLabel="Menu" variant="ghost" size="small">
                    <Menu className="w-4 h-4" />
                  </IconButton>
                  <IconButton ariaLabel="Like" variant="primary" size="medium">
                    <Heart className="w-5 h-5" />
                  </IconButton>
                  <IconButton ariaLabel="Download" variant="secondary" size="large">
                    <Download className="w-6 h-6" />
                  </IconButton>
                  <IconButton ariaLabel="Close" variant="ghost" disabled>
                    <X className="w-5 h-5" />
                  </IconButton>
                </div>
              </div>
              <div>
                <p className="font-body text-sm text-brand-neutral-dark mb-3">Square Shape</p>
                <div className="flex flex-wrap gap-4">
                  <IconButton ariaLabel="Menu" variant="ghost" shape="square" size="small">
                    <Menu className="w-4 h-4" />
                  </IconButton>
                  <IconButton ariaLabel="Like" variant="primary" shape="square" size="medium">
                    <Heart className="w-5 h-5" />
                  </IconButton>
                  <IconButton ariaLabel="Delete" variant="ghost" shape="square" size="large">
                    <Trash2 className="w-6 h-6" />
                  </IconButton>
                </div>
              </div>
            </div>
          </section>

          {/* Combined Examples */}
          <section className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="font-heading text-2xl font-semibold text-brand-dark mb-6">
              Real-World Examples
            </h2>
            
            <div className="space-y-8">
              {/* Hero CTA */}
              <div>
                <p className="font-body text-sm font-medium text-brand-neutral-dark mb-3">
                  Hero Section CTAs
                </p>
                <div className="bg-brand-primary p-6 rounded-lg">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <PrimaryButton size="large">Get Started</PrimaryButton>
                    <SecondaryButton size="large" variant="ghost">
                      Learn More
                    </SecondaryButton>
                  </div>
                </div>
              </div>

              {/* Form Actions */}
              <div>
                <p className="font-body text-sm font-medium text-brand-neutral-dark mb-3">
                  Form Actions
                </p>
                <div className="flex justify-end gap-3 p-4 bg-brand-neutral-light rounded-lg">
                  <TertiaryButton>Cancel</TertiaryButton>
                  <PrimaryButton>Save Changes</PrimaryButton>
                </div>
              </div>

              {/* Destructive Confirmation */}
              <div>
                <p className="font-body text-sm font-medium text-brand-neutral-dark mb-3">
                  Destructive Action
                </p>
                <div className="flex gap-3">
                  <SecondaryButton variant="outline">Cancel</SecondaryButton>
                  <DangerButton>Yes, Delete Account</DangerButton>
                </div>
              </div>

              {/* Card Actions */}
              <div>
                <p className="font-body text-sm font-medium text-brand-neutral-dark mb-3">
                  Card Actions
                </p>
                <div className="max-w-sm">
                  <div className="space-y-3">
                    <PrimaryButton fullWidth>Book Appointment</PrimaryButton>
                    <SecondaryButton fullWidth variant="outline">
                      View Details
                    </SecondaryButton>
                    <TertiaryButton>Cancel Booking</TertiaryButton>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Design Tokens */}
          <section className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="font-heading text-2xl font-semibold text-brand-dark mb-6">
              Design Tokens
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="font-body text-sm font-medium text-brand-neutral-dark mb-2">
                  Primary Color
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-brand-ice"></div>
                  <div>
                    <p className="font-mono text-sm text-brand-dark">#A7C5EB</p>
                    <p className="font-body text-xs text-brand-neutral-dark">Ice Blue</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-body text-sm font-medium text-brand-neutral-dark mb-2">
                  Border Color
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg border-2 border-brand-primary bg-white"></div>
                  <div>
                    <p className="font-mono text-sm text-brand-dark">#4A90E2</p>
                    <p className="font-body text-xs text-brand-neutral-dark">Primary Blue</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-body text-sm font-medium text-brand-neutral-dark mb-2">
                  Danger Color
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-error"></div>
                  <div>
                    <p className="font-mono text-sm text-brand-dark">#E74C3C</p>
                    <p className="font-body text-xs text-brand-neutral-dark">Error Red</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

