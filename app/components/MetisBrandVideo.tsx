"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Header2, Body1 } from "./common/typography";
import { PrimaryButton } from "./common/buttons";

/**
 * MetisBrandVideo Component
 * Section showcasing Metis physical wellness with embedded brand video
 * - Standard 32px (px-8) horizontal padding
 * - Max-width: 1280px
 * - Two-column layout with video on the left
 */

export default function MetisBrandVideo() {
  const router = useRouter();

  return (
    <section className="relative bg-brand-light py-16 lg:py-32 overflow-hidden border-t border-brand-neutral-light">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Brand Video */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full aspect-[3/4] max-h-[600px] rounded-3xl overflow-hidden shadow-xl flex items-center justify-center bg-brand-primary-dark">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto object-cover"
              >
                <source src="/videos/Metis BrandVideo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Subtitle */}
            <p className="font-body text-base text-brand-forest italic">
              Metis
            </p>

            {/* Heading */}
            <Header2 className="text-brand-dark !font-medium ">
              Your Partner in Real Wellness
            </Header2>

            {/* Body Content */}
            <div className="space-y-4">
              <Body1 className="">
                At Metis by Raiqa Health, we strip away the confusion and bring
                back clarity, science, care, and real results. No quick fixes.
                No fad trends. Just personalized, doctor-guided care built
                around you. From your first consult to ongoing support, Metis
                makes your wellness journey simple, safe, and sustainable.
              </Body1>

              {/* <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-brand-primary mr-2">✓</span>
                  <span className="font-body text-brand-steel">
                    Expert-led physical wellness programs tailored to your goals
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-primary mr-2">✓</span>
                  <span className="font-body text-brand-steel">
                    Evidence-based treatments for sustainable health outcomes
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-primary mr-2">✓</span>
                  <span className="font-body text-brand-steel">
                    Continuous monitoring and progress tracking with our health team
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-primary mr-2">✓</span>
                  <span className="font-body text-brand-steel">
                    Holistic support combining fitness, nutrition, and lifestyle guidance
                  </span>
                </li>
              </ul> */}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <PrimaryButton onClick={() => router.push("/get-started")}>
                Start Your Journey
              </PrimaryButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
