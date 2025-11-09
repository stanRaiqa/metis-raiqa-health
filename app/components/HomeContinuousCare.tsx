"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Header2, Header4, Body2, Header6, Header5 } from "./common/typography";
import { MessageSquare, UserCheck, Users, Shield } from "lucide-react";
import { PrimaryButton } from "./common/buttons";

/**
 * HomeContinuousCare Component
 * Displays continuous care and support features in card format
 *
 * Features:
 * - Card-based layout with icons
 * - Different background colors for visual interest
 * - Call-to-action buttons
 * - Standard 32px (px-8) horizontal padding
 * - Max-width: 1280px
 */

interface CareCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
  buttonText: string;
  buttonLink: string;
}

export default function HomeContinuousCare() {
  const router = useRouter();

  const careCards: CareCard[] = [
    {
      id: "expert-access",
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Unlimited Expert Access",
      description: "Chat anytime with your care team, nurses, and health coaches who listen.",
      bgColor: "bg-[#FFF4E6]",
      buttonText: "Get Started Now →",
      buttonLink: "/get-started",
    },
    {
      id: "doctor-reviews",
      icon: <UserCheck className="w-8 h-8" />,
      title: "Doctor-Led Reviews",
      description: "Your progress matters. Every month, your doctor checks in to adjust your plan and ensure it's working for you.",
      bgColor: "bg-[#E3F2FD]",
      buttonText: "Get Started Now →",
      buttonLink: "/get-started",
    },
    {
      id: "specialist-access",
      icon: <Users className="w-8 h-8" />,
      title: "Dietitian & Psychologist Support",
      description: "Based on your doctor's evaluation, you'll receive coordinated care from licensed dietitians and behavioral health experts.",
      bgColor: "bg-[#F3E5F5]",
      buttonText: "Get Started Now →",
      buttonLink: "/get-started",
    },
    {
      id: "safe-care",
      icon: <Shield className="w-8 h-8" />,
      title: "Safe, Ongoing Care",
      description: "Each refill is reviewed for safety and effectiveness, because long-term health needs long-term attention.",
      bgColor: "bg-[#E8F5E9]",
      buttonText: "Get Started Now →",
      buttonLink: "/get-started",
    },
  ];

  return (
    <section className="relative bg-white py-16 lg:py-24 overflow-hidden border-t border-brand-neutral-light">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-left mb-12"
        >
          <p className="font-body text-base text-brand-forest italic mb-2">
            Your Wellness Journey
          </p>
          <Header2 className="text-brand-dark !font-medium !leading-tight">
            Care that doesn’t stop at the prescription.
          </Header2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {careCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className={`bg-brand-neutral-light rounded-2xl p-6 lg:p-8 h-full flex flex-col transition-transform duration-300 hover:shadow-lg`}
              >
                {/* Icon */}
                <div className=" top-6 right-6 w-12 h-12 rounded-full  flex items-center justify-center text-brand-dark">
                  {card.icon}
                </div>

                {/* Content */}
                <div className="flex-grow mb-6 pt-2">
                  <Header5 className="text-brand-dark !font-medium mb-3">
                    {card.title}
                  </Header5>
                  <Body2 className="text-brand-steel">{card.description}</Body2>
                </div>

                {/* CTA Button */}
                <div className="mt-auto">
                  <button
                    onClick={() => router.push(card.buttonLink)}
                    className="inline-flex items-center gap-2 text-brand-dark font-semibold hover:gap-3 transition-all group"
                  >
                    <span>{card.buttonText}</span>
                    <span className="text-xl transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
