import React from 'react';
import { Metadata } from 'next';
import { Header2, Header3, Body1 } from '../components/common/typography';

export const metadata: Metadata = {
  title: 'Shipping, Returns & Cancellations - Metis by Raiqa Health',
  description: 'Shipping, returns, and cancellations policy for Metis medical weight loss program. Learn about delivery times, refund eligibility, and order cancellation process.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function ShippingReturnsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-[900px] mx-auto px-6 py-16 lg:py-24">
        {/* Header */}
        <div className="mb-12">
          <Header2 className="text-brand-dark mb-4 !font-semibold">
            Fulfilment, Shipping, Returns & Cancellations Policy
          </Header2>
          <Body1 className="text-brand-steel italic mb-6">
            Last updated: November 2025
          </Body1>
          <Body1 className="text-brand-dark leading-relaxed font-medium">
            At Metis Raiqa Health, your health, privacy, and peace of mind always come first.
          </Body1>
        </div>

        {/* Section 1 */}
        <div className="mb-10">
          <Header3 className="text-brand-dark mb-4 !font-semibold">1. Order Fulfilment</Header3>
          <Body1 className="text-brand-dark leading-relaxed mb-4">
            Once your consultation is reviewed and approved, your prescription is sent to a licensed pharmacy for dispensing.
          </Body1>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-brand-steel">Orders are processed within 1–3 business days.</li>
            <li className="text-brand-steel">You&apos;ll receive a confirmation email and tracking details once dispatched.</li>
            <li className="text-brand-steel">If your consultation is not approved, your payment will be refunded in full.</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="mb-10 bg-brand-neutral-light p-8 rounded-2xl">
          <Header3 className="text-brand-dark mb-4 !font-semibold">2. Shipping & Delivery</Header3>
          <Body1 className="text-brand-dark leading-relaxed mb-4">
            We deliver Australia-wide through trusted courier and pharmacy partners.
          </Body1>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li className="text-brand-steel">
              <strong>Metro areas:</strong> Same-day delivery
            </li>
            <li className="text-brand-steel">
              <strong>Regional areas:</strong> 1–3 business days
            </li>
            <li className="text-brand-steel">
              <strong>Standard delivery:</strong> 2–7 business days
            </li>
          </ul>
          <Body1 className="text-brand-dark leading-relaxed">
            Delivery times may vary due to courier delays, pharmacy processing, or postal disruptions. Metis - Raiqa Health is not liable for delays caused by incorrect shipping details or external courier issues.
          </Body1>
        </div>

        {/* Section 3 */}
        <div className="mb-10">
          <Header3 className="text-brand-dark mb-4 !font-semibold">3. Cancellations</Header3>
          <Body1 className="text-brand-dark leading-relaxed mb-4">
            We understand that circumstances can change. Here&apos;s what you need to know:
          </Body1>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-brand-steel">Orders can be cancelled only <strong>before the pharmacy begins dispensing</strong>.</li>
            <li className="text-brand-steel">Subscription cancellations are subject to a minimum 3-month commitment period.</li>
            <li className="text-brand-steel">To cancel, email <a href="mailto:support@raiqa.health" className="text-brand-primary underline">support@raiqa.health</a> with your order details.</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div className="mb-10">
          <Header3 className="text-brand-dark mb-4 !font-semibold">4. Returns & Replacements</Header3>
          <Body1 className="text-brand-dark leading-relaxed mb-4 bg-yellow-50 p-4 rounded-lg">
            ⚠️ <strong>Important:</strong> Under Australian regulations, prescription medications cannot be returned or resold, even if sealed or unused.
          </Body1>
          <Body1 className="text-brand-dark leading-relaxed">
            If your order is damaged, incorrect, or missing, please contact us within 3 days of delivery for a replacement or resolution.
          </Body1>
        </div>

        {/* Section 5 */}
        <div className="mb-10 bg-brand-neutral-light p-8 rounded-2xl">
          <Header3 className="text-brand-dark mb-4 !font-semibold">5. Refunds</Header3>
          <Body1 className="text-brand-dark leading-relaxed mb-4">
            Refunds are issued only in the following cases:
          </Body1>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li className="text-brand-steel">Your consultation is declined</li>
            <li className="text-brand-steel">The prescribed medication is unavailable</li>
            <li className="text-brand-steel">The package is confirmed lost in transit</li>
          </ul>
          <Body1 className="text-brand-dark leading-relaxed">
            Eligible refunds are processed within 7–10 business days after confirmation.
          </Body1>
        </div>

        {/* Section 6 */}
        <div className="mb-10">
          <Header3 className="text-brand-dark mb-4 !font-semibold">6. Lost Deliveries</Header3>
          <Body1 className="text-brand-dark leading-relaxed mb-4">
            If your order hasn&apos;t arrived within 10 days of dispatch, contact <a href="mailto:support@raiqa.health" className="text-brand-primary underline">support@raiqa.health</a>.
          </Body1>
          <Body1 className="text-brand-dark leading-relaxed">
            Our team will coordinate with the courier for a resolution or replacement.
          </Body1>
        </div>

        {/* Section 7 */}
        <div className="mb-10">
          <Header3 className="text-brand-dark mb-4 !font-semibold">7. Address Updates</Header3>
          <Body1 className="text-brand-dark leading-relaxed mb-4">
            Address updates can only be made <strong>before dispatch</strong>.
          </Body1>
          <Body1 className="text-brand-dark leading-relaxed bg-blue-50 p-4 rounded-lg">
            💡 <strong>Tip:</strong> Please verify your delivery address carefully at checkout to avoid any issues.
          </Body1>
        </div>

        {/* Contact Section */}
        <div className="mb-10 bg-brand-neutral-light p-8 rounded-2xl">
          <Header3 className="text-brand-dark mb-4 !font-semibold">8. Contact Us</Header3>
          <Body1 className="text-brand-dark leading-relaxed mb-4">
            For fulfilment, shipping, or delivery-related questions:
          </Body1>
          <div className="space-y-2">
            <Body1 className="text-brand-steel">
              📧 Email: <a href="mailto:support@raiqa.health" className="text-brand-primary underline">support@raiqa.health</a>
            </Body1>
            <Body1 className="text-brand-steel">
              📍 Address: Lobby 1, Level 2/76 Skyring Terrace, Newstead QLD 4006
            </Body1>
            <Body1 className="text-brand-steel">
              🌐 Website: <a href="https://raiqa.health" className="text-brand-primary underline">https://raiqa.health</a>
            </Body1>
            <Body1 className="text-brand-steel mt-4">
              <strong>Response time:</strong> 24–48 business hours
            </Body1>
          </div>
        </div>

        {/* Summary Box */}
        <div className="bg-brand-primary text-white p-8 rounded-2xl">
          <Header3 className="text-white mb-4">Quick Summary</Header3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-white mr-2">✓</span>
              <Body1 className="text-white">Orders processed within 1-3 business days</Body1>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-2">✓</span>
              <Body1 className="text-white">Same-day delivery for metro areas</Body1>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-2">✓</span>
              <Body1 className="text-white">3-month minimum commitment</Body1>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-2">✓</span>
              <Body1 className="text-white">Prescription medications cannot be returned</Body1>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-2">✓</span>
              <Body1 className="text-white">Refunds available for declined consultations</Body1>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

