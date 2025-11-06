'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FileText, User, Package, HeadphonesIcon, CheckCircle } from 'lucide-react';
import { Header2, Body1, Header3, Body2 } from './common/typography';
import { PrimaryButton } from './common/buttons';

/**
 * How It Works Section
 * Shows the 4-step process with sticky scroll
 * - Standard 32px (px-8) horizontal padding
 * - Max-width: 1280px
 * - Brand colors from design system
 */

interface Step {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  imageSrc: string;
  imageAlt: string;
  icon: React.ReactNode;
  buttonText: string;
  buttonLink: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: 'Online Doctor Consultation',
    subtitle: 'Step 1',
    description: 'Start with some quiz and then an online doctor consultation. You\'ll discuss your weight history, health profile, and goals.',
    benefits: [
      'Quick online assessment',
      'Private virtual consultation',
      'Personalized health evaluation',
      'Expert medical guidance'
    ],
    imageSrc: '/images/doctor.jpg',
    imageAlt: 'Online Doctor Consultation',
    icon: <FileText className="w-6 h-6" />,
    buttonText: 'Start Consultation',
    buttonLink: '/get-started'
  },
  {
    id: 2,
    title: 'Personalized Plan',
    subtitle: 'Step 2',
    description: 'Once approved, your doctor creates a personalized plan including your medication, dosage, and health recommendations.',
    benefits: [
      'Customized treatment plan',
      'Tailored medication dosage',
      'Lifestyle recommendations',
      'Ongoing adjustments'
    ],
    imageSrc: '/images/HairLossTreatment-1.jpg',
    imageAlt: 'Personalized Treatment Plan',
    icon: <User className="w-6 h-6" />,
    buttonText: 'Learn More',
    buttonLink: '/services'
  },
  {
    id: 3,
    title: 'Medication Delivered to Your Door',
    subtitle: 'Step 3 (if prescribed)',
    description: 'Your prescribed medication is shipped directly and discreetly to your home. Metro areas: Same-day delivery. Regional areas: 1–3 days. No pharmacy visits, no waiting.',
    benefits: [
      'Same-day delivery in metro areas',
      '1-3 days for regional delivery',
      'Discreet packaging',
      'Shipping included in plan'
    ],
    imageSrc: '/images/HairLossTreatment-2.jpg',
    imageAlt: 'Home Delivery',
    icon: <Package className="w-6 h-6" />,
    buttonText: 'View Plans',
    buttonLink: '/pricing'
  },
  {
    id: 4,
    title: 'Ongoing Support & Monthly Refills',
    subtitle: 'Step 4',
    description: 'You\'ll have unlimited access to our weight loss support team for questions, progress tracking, and advice. Every month, you\'ll have a medical review and get your next refill delivered right to you.',
    benefits: [
      'Unlimited support access',
      'Progress tracking',
      'Monthly medical reviews',
      'Automatic refills'
    ],
    imageSrc: '/images/Skin_Care.jpg',
    imageAlt: 'Ongoing Support',
    icon: <HeadphonesIcon className="w-6 h-6" />,
    buttonText: 'Get Started',
    buttonLink: '/get-started'
  }
];

export default function HomeHowItWorks() {
  return (
    <section className="relative bg-brand-light py-16 lg:py-32" id="how-it-works">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12 lg:mb-16 space-y-4">
          

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="font-body text-base text-brand-forest italic"
          >
            Simple & Effective
          </motion.p>
            <Header2 className="text-brand-dark text-center !font-medium">How It Works</Header2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Body2 className="text-brand-steel max-w-2xl mx-auto text-left">
            Get started with simple, doctor-guided care that&apos;s completely private, convenient, and fully online. Our trusted medical professionals provide personalized treatment plans designed around your unique needs—all from the comfort of your home.
            </Body2>
          </motion.div>
        </div>

        {/* Sticky Scroll Content */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Side - Scrolling Content */}
            <div className="space-y-16 lg:space-y-32">
              {steps.map((step) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, margin: '-100px' }}
                  className="min-h-[400px] lg:min-h-[500px]"
                >
                  <div className="bg-white p-6 lg:p-8 rounded-2xl  transition-shadow duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {/* <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                          {step.icon}
                        </div> */}
                        <div>
                          <Body2 className="text-brand-steel text-sm">{step.subtitle}</Body2>
                          <Header3 className="text-brand-dark !font-medium">{step.title}</Header3>
                        </div>
                      </div>
                      <div className="text-[80px] lg:text-[100px] font-bold text-brand-steel opacity-10 leading-none pointer-events-none">
                        {step.id}
                      </div>
                    </div>

                    <Body2 className="text-brand-steel mb-6">{step.description}</Body2>

                    <div className="space-y-3 mb-8">
                      {step.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                          <Body2 className="text-brand-steel">{benefit}</Body2>
                        </div>
                      ))}
                    </div>

                    {/* Mobile Image */}
                    <div className="lg:hidden relative aspect-[4/3] w-full rounded-xl overflow-hidden mb-6">
                      <Image src={step.imageSrc} alt={step.imageAlt} fill className="object-cover" />
                    </div>

                    {/* CTA Button */}
                    <PrimaryButton size="medium" href={step.buttonLink} className="w-full sm:w-auto">
                      {step.buttonText}
                    </PrimaryButton>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Side - Static Image */}
            <div className="hidden lg:block relative">
              <div className="sticky top-36">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-green-900 to-green-950 p-8 rounded-3xl shadow-2xl"
                >
                  {/* Main Image */}
                  <div className="relative h-[450px] w-full rounded-2xl overflow-hidden shadow-xl ">
                    <Image 
                      src="/images/doctor.jpg" 
                      alt="Healthcare Professional" 
                      fill 
                      className="object-cover" 
                    />
                  </div>

                  {/* Did You Know Card */}
                  <div className="bg-green-800/70 absolute bottom-6 left-6 right-6 backdrop-blur-sm rounded-2xl p-6 border border-green-700/30">
                    <Body1 className="text-white/90  leading-relaxed mb-3 ">
                      80% of weight loss is linked to habits, not willpower.
                    </Body1>
                    <p className="text-white/70 text-base ">
                      Did you know?
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

