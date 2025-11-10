import React from 'react';
import { Metadata } from 'next';
import { Header2, Header3, Header4, Body1 } from '../components/common/typography';

export const metadata: Metadata = {
  title: 'Privacy Policy - Metis by Raiqa Health | Medical Weight Loss',
  description: 'Privacy Policy for Metis medical weight loss program. Learn how we collect, use, store, and protect your personal and health information in compliance with Australian Privacy Principles.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <div className="max-w-[900px] mx-auto px-6 py-16 lg:py-24">
        {/* Header */}
        <div className="mb-12">
          <Header2 className="text-brand-dark mb-4 !font-semibold">Privacy Policy</Header2>
          <Body1 className="text-brand-steel italic">
            Last updated: November 2025
          </Body1>
        </div>

        {/* Introduction */}
        <div className="mb-12 space-y-4">
          <Body1 className="text-brand-dark leading-relaxed">
            Welcome to Metis, a medical weight management program operated by Raiqa Health.
            Your privacy and trust are central to the way we deliver care. This Privacy Policy explains how we collect, use, store, and protect your personal and health information when you use our website, platform, or related services (collectively, the &quot;Services&quot;).
          </Body1>
          <Body1 className="text-brand-dark leading-relaxed">
            By accessing or using Metis, you agree to the terms outlined below.
          </Body1>
        </div>

        {/* Section 1 */}
        <div className="mb-10">
          <Header3 className="text-brand-dark mb-4 !font-semibold">1. Information We Collect</Header3>
          <Body1 className="text-brand-dark leading-relaxed mb-4">
            We only collect information necessary to provide you with safe, effective, and regulated medical care.
          </Body1>

          <div className="space-y-6">
            <div>
              <Header4 className="text-brand-dark mb-2 !font-semibold">a. Personal Information</Header4>
              <ul className="list-disc pl-6 space-y-2">
                <li className="text-brand-steel">Full name, date of birth, gender</li>
                <li className="text-brand-steel">Contact details (email, phone number, postal address)</li>
                <li className="text-brand-steel">Billing and payment information</li>
              </ul>
            </div>

            <div>
              <Header4 className="text-brand-dark mb-2 !font-semibold">b. Health Information</Header4>
              <ul className="list-disc pl-6 space-y-2">
                <li className="text-brand-steel">Medical history, medications, allergies, and health conditions</li>
                <li className="text-brand-steel">Weight history, BMI, and treatment goals</li>
                <li className="text-brand-steel">Photos, lab results, or progress reports shared during consultations</li>
                <li className="text-brand-steel">Doctor&apos;s notes, prescriptions, and care plans</li>
              </ul>
            </div>

            <div>
              <Header4 className="text-brand-dark mb-2 !font-semibold">c. Technical & Usage Information</Header4>
              <ul className="list-disc pl-6 space-y-2">
                <li className="text-brand-steel">Device details (type, browser, operating system)</li>
                <li className="text-brand-steel">IP address and general location</li>
                <li className="text-brand-steel">Website usage patterns, logs, and cookies</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="mb-10">
          <Header3 className="text-brand-dark mb-4 !font-semibold">2. How We Use Your Information</Header3>
          <Body1 className="text-brand-dark leading-relaxed mb-4">
            Your information is used solely to provide and improve your medical care. Specifically, we may:
          </Body1>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-brand-steel">Facilitate online consultations and medical assessments</li>
            <li className="text-brand-steel">Manage prescriptions, refills, and dosage adjustments</li>
            <li className="text-brand-steel">Coordinate with licensed pharmacies for secure delivery</li>
            <li className="text-brand-steel">Provide follow-up support, reminders, and health check-ins</li>
            <li className="text-brand-steel">Enhance our platform experience and clinical quality</li>
            <li className="text-brand-steel">Comply with medical, legal, and regulatory requirements</li>
          </ul>
          <Body1 className="text-brand-dark leading-relaxed mt-4 font-semibold">
            We never sell, trade, or rent your personal or health data.
          </Body1>
        </div>

        {/* Section 3 */}
        <div className="mb-10">
          <Header3 className="text-brand-dark mb-4 !font-semibold">3. Sharing and Disclosure</Header3>
          <Body1 className="text-brand-dark leading-relaxed mb-4">
            We share your information only when necessary for your care or compliance:
          </Body1>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-brand-steel">Doctors and clinical teams directly involved in your treatment</li>
            <li className="text-brand-steel">Pharmacies and partner laboratories processing prescriptions or diagnostics</li>
            <li className="text-brand-steel">Delivery services for secure and discreet shipment of medications</li>
            <li className="text-brand-steel">Technology partners providing hosting, analytics, or platform support</li>
            <li className="text-brand-steel">Regulatory authorities or law enforcement, if legally required</li>
          </ul>
          <Body1 className="text-brand-dark leading-relaxed mt-4">
            All partners are contractually bound to follow Australian Privacy Principles (APPs) and, where applicable, U.S. HIPAA regulations for handling medical data.
          </Body1>
        </div>

        {/* Section 4 */}
        <div className="mb-10">
          <Header3 className="text-brand-dark mb-4 !font-semibold">4. Data Storage and Security</Header3>
          <Body1 className="text-brand-dark leading-relaxed mb-4">
            Your data is stored on encrypted, access-controlled servers located in Australia.
            We maintain industry-standard safeguards including:
          </Body1>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-brand-steel">End-to-end encryption for data in transit and at rest</li>
            <li className="text-brand-steel">Multi-factor authentication for authorized access</li>
            <li className="text-brand-steel">Regular system audits and security monitoring</li>
          </ul>
          <Body1 className="text-brand-dark leading-relaxed mt-4">
            While we take every precaution, no online system is completely immune from risk. Please use strong passwords and safeguard your account details.
          </Body1>
        </div>

        {/* Section 5 */}
        <div className="mb-10">
          <Header3 className="text-brand-dark mb-4 !font-semibold">5. Your Rights</Header3>
          <Body1 className="text-brand-dark leading-relaxed mb-4">
            You have the right to:
          </Body1>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-brand-steel">Access and request a copy of your personal data</li>
            <li className="text-brand-steel">Correct or update inaccurate information</li>
            <li className="text-brand-steel">Withdraw consent or request deletion (where legally permissible)</li>
            <li className="text-brand-steel">Opt out of non-essential communications</li>
          </ul>
          <Body1 className="text-brand-dark leading-relaxed mt-4">
            To exercise these rights, please contact: <a href="mailto:support@raiqa.health" className="text-brand-primary underline">support@raiqa.health</a>
          </Body1>
        </div>

        {/* Section 6 */}
        <div className="mb-10">
          <Header3 className="text-brand-dark mb-4 !font-semibold">6. Cookies and Tracking</Header3>
          <Body1 className="text-brand-dark leading-relaxed">
            Metis uses cookies and similar technologies to enhance functionality, improve performance, and personalize your experience. You can disable cookies in your browser settings, but some features may not function properly.
          </Body1>
        </div>

        {/* Section 7 */}
        <div className="mb-10">
          <Header3 className="text-brand-dark mb-4 !font-semibold">7. Data Retention</Header3>
          <Body1 className="text-brand-dark leading-relaxed">
            We retain your information only for as long as required to meet medical, legal, and operational obligations. Once no longer needed, data is securely deleted or anonymized in compliance with applicable laws.
          </Body1>
        </div>

        {/* Section 8 */}
        <div className="mb-10">
          <Header3 className="text-brand-dark mb-4 !font-semibold">8. Cross-Border Data Transfers</Header3>
          <Body1 className="text-brand-dark leading-relaxed">
            Your data may be processed for operational and compliance purposes. We ensure that all international transfers meet equivalent privacy and security standards under APPs and HIPAA.
          </Body1>
        </div>

        {/* Section 9 */}
        <div className="mb-10">
          <Header3 className="text-brand-dark mb-4 !font-semibold">9. Updates to This Policy</Header3>
          <Body1 className="text-brand-dark leading-relaxed">
            We may update this Privacy Policy periodically to reflect new services, regulatory changes, or technology improvements. The latest version will always be available on our website with the effective date clearly displayed.
          </Body1>
        </div>

        {/* Section 10 - Contact */}
        <div className="mb-10 bg-brand-neutral-light p-8 rounded-2xl">
          <Header3 className="text-brand-dark mb-4 !font-semibold">10. Contact Us</Header3>
          <Body1 className="text-brand-dark leading-relaxed mb-4">
            If you have any questions or concerns about this Privacy Policy or our data practices, please contact:
          </Body1>
          <div className="space-y-2">
            <Body1 className="text-brand-dark font-semibold">Raiqa Health – Privacy Office</Body1>
            <Body1 className="text-brand-steel">📧 <a href="mailto:support@raiqa.health" className="text-brand-primary underline">support@raiqa.health</a></Body1>
            <Body1 className="text-brand-steel">📍 Lobby 1, Level 2/76 Skyring Terrace, Newstead QLD 4006</Body1>
            <Body1 className="text-brand-steel">🌐 <a href="https://raiqa.health" className="text-brand-primary underline">https://raiqa.health</a></Body1>
          </div>
        </div>
      </div>
    </main>
  );
}

