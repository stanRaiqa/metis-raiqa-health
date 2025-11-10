import React from 'react';
import { Metadata } from 'next';
import { Header2, Header3, Header4, Body1 } from '../components/common/typography';

export const metadata: Metadata = {
  title: 'Terms & Conditions - Metis by Raiqa Health | Medical Weight Loss',
  description: 'Terms and Conditions for Metis medical weight loss program. Understand your rights, responsibilities, and our service terms for doctor-led weight management in Australia.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsConditionsPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <div className="max-w-[900px] mx-auto px-6 py-16 lg:py-24">
        {/* Header */}
        <div className="mb-12">
          <Header2 className="text-brand-dark mb-4 !font-semibold">Terms & Conditions</Header2>
          <Body1 className="text-brand-steel italic">
            Last updated: November 2025
          </Body1>
        </div>

        {/* Introduction */}
        <div className="mb-12 space-y-4">
          <Body1 className="text-brand-dark leading-relaxed">
            Welcome to Metis, a medical weight management program operated by Raiqa Health Pty Ltd (&quot;Metis,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
          </Body1>
          <Body1 className="text-brand-dark leading-relaxed">
            By accessing or using the Metis website, digital platform, or related services (collectively, the &quot;Services&quot;), you agree to these Terms & Conditions. Please read them carefully before using our Services. If you do not agree with any part, do not use Metis.
          </Body1>
        </div>

        {/* Section 1 */}
        <div className="mb-10">
          <Header3 className="text-brand-dark mb-4 !font-semibold">1. Who We Are</Header3>
          <Body1 className="text-brand-dark leading-relaxed mb-4">
            Metis by Raiqa Health is a doctor-led medical program designed to support safe, effective, and sustainable weight management through telehealth.
          </Body1>
          <Body1 className="text-brand-dark leading-relaxed mb-4">
            Our services include:
          </Body1>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li className="text-brand-steel">Online doctor consultations</li>
            <li className="text-brand-steel">Prescription-based weight management (if medically eligible)</li>
            <li className="text-brand-steel">Lifestyle and behavioral support</li>
            <li className="text-brand-steel">Ongoing progress monitoring and refills</li>
          </ul>
          <Body1 className="text-brand-dark leading-relaxed mb-4">
            All consultations, prescriptions, and care plans are provided by licensed medical practitioners in accordance with Australian regulations.
          </Body1>
          <Body1 className="text-brand-dark leading-relaxed">
            Metis is owned and operated by: <strong>Raiqa Health Pty Ltd</strong> registered in Australia.
          </Body1>
        </div>

        {/* Section 2 */}
        <div className="mb-10">
          <Header3 className="text-brand-dark mb-4 !font-semibold">2. Eligibility</Header3>
          <Body1 className="text-brand-dark leading-relaxed mb-4">
            To use Metis, you must:
          </Body1>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-brand-steel">Be 18 years or older</li>
            <li className="text-brand-steel">Be located in Australia, where Metis currently operates</li>
            <li className="text-brand-steel">Provide accurate and complete medical and personal information</li>
          </ul>
          <Body1 className="text-brand-dark leading-relaxed mt-4">
            By using Metis, you confirm you meet these eligibility requirements.
          </Body1>
        </div>

        {/* Section 3 */}
        <div className="mb-10">
          <Header3 className="text-brand-dark mb-4 !font-semibold">3. Medical Disclaimer</Header3>
          <Body1 className="text-brand-dark leading-relaxed mb-4">
            Metis provides access to independent, licensed healthcare professionals who assess your health profile and determine if prescription-based weight management is appropriate for you.
          </Body1>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li className="text-brand-steel">Metis itself does not provide medical advice, diagnosis, or treatment.</li>
            <li className="text-brand-steel">All clinical decisions are made solely by qualified practitioners.</li>
            <li className="text-brand-steel">Any content, articles, or communication from Metis are for educational purposes only and are not a substitute for professional medical advice.</li>
          </ul>
          <Body1 className="text-brand-dark leading-relaxed font-semibold bg-yellow-50 p-4 rounded-lg">
            ⚠️ If you are experiencing a medical emergency, please contact your local emergency services immediately.
          </Body1>
        </div>

        {/* Section 4 */}
        <div className="mb-10">
          <Header3 className="text-brand-dark mb-4 !font-semibold">4. Your Responsibilities</Header3>
          <Body1 className="text-brand-dark leading-relaxed mb-4">
            When using Metis, you agree to:
          </Body1>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-brand-steel">Provide accurate and honest health information</li>
            <li className="text-brand-steel">Follow the treatment guidance and dosage prescribed by your doctor</li>
            <li className="text-brand-steel">Report any side effects or adverse reactions promptly</li>
            <li className="text-brand-steel">Use the Services only for your personal medical needs</li>
            <li className="text-brand-steel">Keep your account and personal information secure</li>
          </ul>
        </div>

        {/* Section 5 */}
        <div className="mb-10">
          <Header3 className="text-brand-dark mb-4 !font-semibold">5. Telehealth Consent</Header3>
          <Body1 className="text-brand-dark leading-relaxed mb-4">
            By using Metis, you consent to receive healthcare services through telehealth, including online consultations, electronic prescriptions, and virtual follow-ups.
          </Body1>
          <Body1 className="text-brand-dark leading-relaxed mb-4">
            You acknowledge that:
          </Body1>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-brand-steel">Telehealth enables convenient and timely care but may have certain limitations (such as absence of physical examination).</li>
            <li className="text-brand-steel">You may withdraw consent at any time by ceasing to use Metis services.</li>
          </ul>
        </div>

        {/* Section 6 */}
        <div className="mb-10">
          <Header3 className="text-brand-dark mb-4 !font-semibold">6. Payments, Subscriptions & Renewals</Header3>
          <Body1 className="text-brand-dark leading-relaxed">
            All consultations, prescriptions, and programs must be paid in advance through our secure payment system. By subscribing, you authorize Metis to charge your chosen payment method for recurring monthly payments until cancellation. Prices are displayed in AUD and include applicable taxes. Metis may adjust pricing with prior notice.
          </Body1>
        </div>

        {/* Section 7 */}
        <div className="mb-10 bg-brand-neutral-light p-8 rounded-2xl">
          <Header3 className="text-brand-dark mb-4 !font-semibold">7. Refund & Cancellation Policy</Header3>
          <Body1 className="text-brand-dark leading-relaxed mb-4">
            We maintain transparent and fair payment policies for all patients.
          </Body1>

          <div className="space-y-6">
            <div>
              <Header4 className="text-brand-dark mb-2 !font-semibold">7.1. Payment Options</Header4>
              <Body1 className="text-brand-steel leading-relaxed">
                Metis offers a monthly, all-inclusive subscription plan covering:
              </Body1>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li className="text-brand-steel">Doctor consultations</li>
                <li className="text-brand-steel">Prescription medication (if approved)</li>
                <li className="text-brand-steel">Home delivery</li>
                <li className="text-brand-steel">Ongoing support and follow-up</li>
              </ul>
            </div>

            <div>
              <Header4 className="text-brand-dark mb-2 !font-semibold">7.2. Refund Policy</Header4>
              <Body1 className="text-brand-steel leading-relaxed mb-2">
                No refunds are provided once:
              </Body1>
              <ul className="list-disc pl-6 space-y-1">
                <li className="text-brand-steel">A consultation has occurred, or</li>
                <li className="text-brand-steel">Medication has been prescribed or dispatched</li>
              </ul>
              <Body1 className="text-brand-steel leading-relaxed mt-2">
                Payments for monthly subscriptions are non-refundable, even if treatment is discontinued early.
              </Body1>
            </div>

            <div>
              <Header4 className="text-brand-dark mb-2 !font-semibold">7.3. Minimum Commitment</Header4>
              <Body1 className="text-brand-steel leading-relaxed">
                To ensure effective care, Metis requires a minimum 3-month treatment commitment for all structured programs.
              </Body1>
            </div>

            <div>
              <Header4 className="text-brand-dark mb-2 !font-semibold">7.4. Cancellation Policy</Header4>
              <Body1 className="text-brand-steel leading-relaxed">
                You may cancel your plan after the initial 3-month period by emailing <a href="mailto:support@raiqa.health" className="text-brand-primary underline">support@raiqa.health</a> at least 7 days before your next billing date. Cancellations submitted late will apply to the following billing cycle.
              </Body1>
            </div>

            <div>
              <Header4 className="text-brand-dark mb-2 !font-semibold">7.5. Payment Failures</Header4>
              <Body1 className="text-brand-steel leading-relaxed">
                If a payment fails, Metis reserves the right to pause or terminate access until the issue is resolved.
              </Body1>
            </div>

            <div>
              <Header4 className="text-brand-dark mb-2 !font-semibold">7.6. Discretionary Refunds</Header4>
              <Body1 className="text-brand-steel leading-relaxed">
                In exceptional cases (e.g., duplicate charges, billing errors, or clinical contraindications), Metis may issue a partial or full refund at its sole discretion.
              </Body1>
            </div>
          </div>
        </div>

        {/* Section 8 */}
        <div className="mb-10">
          <Header3 className="text-brand-dark mb-4 !font-semibold">8. Privacy & Data Protection</Header3>
          <Body1 className="text-brand-dark leading-relaxed mb-4">
            We protect your privacy in line with:
          </Body1>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-brand-steel">Australian Privacy Principles (APPs) under the Privacy Act 1988 (Cth), and</li>
            <li className="text-brand-steel">HIPAA (U.S. Health Insurance Portability and Accountability Act), where applicable.</li>
          </ul>
          <Body1 className="text-brand-dark leading-relaxed mt-4">
            All practitioners, pharmacies, and partners must handle your data securely and confidentially. For full details, please refer to our <a href="/privacy-policy" className="text-brand-primary underline">Privacy Policy</a>.
          </Body1>
        </div>

        {/* Section 9 */}
        <div className="mb-10">
          <Header3 className="text-brand-dark mb-4 !font-semibold">9. Prescriptions, Fulfilment & Delivery</Header3>
          <Body1 className="text-brand-dark leading-relaxed mb-4">
            All prescriptions are issued only after doctor review and approval. Partner pharmacies dispense and deliver medications in discreet packaging.
          </Body1>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-brand-steel">Metro areas: Same-day delivery</li>
            <li className="text-brand-steel">Regional areas: 1–3 business days</li>
          </ul>
          <Body1 className="text-brand-dark leading-relaxed mt-4">
            Metis is not responsible for postal or courier delays once an order is dispatched.
          </Body1>
        </div>

        {/* Section 10 */}
        <div className="mb-10">
          <Header3 className="text-brand-dark mb-4 !font-semibold">10. Intellectual Property</Header3>
          <Body1 className="text-brand-dark leading-relaxed">
            All text, branding, design, and digital materials on the Metis platform are the property of Raiqa Health Pty Ltd. You may not copy, reproduce, or distribute any content without prior written permission.
          </Body1>
        </div>

        {/* Section 11 */}
        <div className="mb-10">
          <Header3 className="text-brand-dark mb-4 !font-semibold">11. Prohibited Use</Header3>
          <Body1 className="text-brand-dark leading-relaxed mb-4">
            You agree not to:
          </Body1>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-brand-steel">Misuse or attempt to disrupt our platform</li>
            <li className="text-brand-steel">Submit false or misleading health information</li>
            <li className="text-brand-steel">Share medications prescribed through Metis</li>
            <li className="text-brand-steel">Reverse-engineer, resell, or exploit our Services for third-party use</li>
          </ul>
        </div>

        {/* Section 12 */}
        <div className="mb-10">
          <Header3 className="text-brand-dark mb-4 !font-semibold">12. Third-Party Services</Header3>
          <Body1 className="text-brand-dark leading-relaxed">
            Metis may integrate with third-party providers such as pharmacies, payment gateways, or labs. We are not responsible for their policies, content, or performance.
          </Body1>
        </div>

        {/* Section 13 */}
        <div className="mb-10">
          <Header3 className="text-brand-dark mb-4 !font-semibold">13. Liability & Disclaimers</Header3>
          <Body1 className="text-brand-dark leading-relaxed mb-4">
            To the extent permitted by law:
          </Body1>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-brand-steel">Metis and Raiqa Health are not liable for indirect, incidental, or consequential damages from the use of our Services.</li>
            <li className="text-brand-steel">We do not guarantee specific outcomes, as results vary based on individual health factors and adherence.</li>
            <li className="text-brand-steel">You accept full responsibility for following prescribed treatment and using medication safely.</li>
          </ul>
          <Body1 className="text-brand-dark leading-relaxed mt-4 font-semibold">
            Nothing in these Terms limits your rights under Australian Consumer Law.
          </Body1>
        </div>

        {/* Section 14 */}
        <div className="mb-10">
          <Header3 className="text-brand-dark mb-4 !font-semibold">14. Termination</Header3>
          <Body1 className="text-brand-dark leading-relaxed mb-4">
            We may suspend or terminate your access if you:
          </Body1>
          <ul className="list-disc pl-6 space-y-2">
            <li className="text-brand-steel">Breach these Terms, or</li>
            <li className="text-brand-steel">Endanger the safety or integrity of our platform</li>
          </ul>
          <Body1 className="text-brand-dark leading-relaxed mt-4">
            You may request account closure anytime by contacting <a href="mailto:support@raiqa.health" className="text-brand-primary underline">support@raiqa.health</a>.
          </Body1>
        </div>

        {/* Section 15 */}
        <div className="mb-10">
          <Header3 className="text-brand-dark mb-4 !font-semibold">15. Changes to Terms</Header3>
          <Body1 className="text-brand-dark leading-relaxed">
            We may update these Terms periodically to reflect operational, regulatory, or service-related changes. Your continued use after such updates signifies your acceptance of the revised Terms.
          </Body1>
        </div>

        {/* Section 16 */}
        <div className="mb-10">
          <Header3 className="text-brand-dark mb-4 !font-semibold">16. Governing Law</Header3>
          <Body1 className="text-brand-dark leading-relaxed">
            These Terms are governed by the laws of Queensland, Australia. Any disputes shall be handled under the exclusive jurisdiction of Queensland courts.
          </Body1>
        </div>

        {/* Section 17 - Contact */}
        <div className="mb-10 bg-brand-neutral-light p-8 rounded-2xl">
          <Header3 className="text-brand-dark mb-4 !font-semibold">17. Contact Us</Header3>
          <Body1 className="text-brand-dark leading-relaxed mb-4">
            For questions, concerns, or legal correspondence:
          </Body1>
          <div className="space-y-2">
            <Body1 className="text-brand-dark font-semibold">Raiqa Health – Metis Program</Body1>
            <Body1 className="text-brand-steel">📧 <a href="mailto:support@raiqa.health" className="text-brand-primary underline">support@raiqa.health</a></Body1>
            <Body1 className="text-brand-steel">📍 Lobby 1, Level 2/76 Skyring Terrace, Newstead QLD 4006</Body1>
            <Body1 className="text-brand-steel">🌐 <a href="https://raiqa.health" className="text-brand-primary underline">https://raiqa.health</a></Body1>
          </div>
        </div>
      </div>
    </main>
  );
}

