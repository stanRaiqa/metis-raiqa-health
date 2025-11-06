"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Body1, Header2, Header4, Header5, Header6 } from "./common/typography";

/**
 * HomeAboutUs Component
 * About Us section with image on left and content on right
 * Features two cards at the bottom showcasing key offerings
 * Matches the modern wellness brand design
 */

export default function HomeAboutUs() {
  const router = useRouter();

  const features = [
    {
      title: "Personalized plans",
      description:
        "Access evidence-based wellness programs & health resources tailored to your unique goals and lifestyle.",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <line
            x1="7"
            y1="17"
            x2="17"
            y2="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points="7 7 17 7 17 17"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Expert guidance",
      description:
        "Connect with certified health professionals and wellness experts who guide you every step of your journey.",
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <line
            x1="7"
            y1="17"
            x2="17"
            y2="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points="7 7 17 7 17 17"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-16 lg:py-32 overflow-hidden bg-white">
      {/* Container with standard padding */}
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative w-full aspect-[3/4] max-h-[600px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/Metis_Hero_image.jpg"
                alt="Wellness professionals team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={false}
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-between order-1 h-full lg:order-2"
          >
            {/* Subtitle */}
            <div className="space-y-2">
              <p className="font-body text-base text-brand-forest italic">
                - Your wellness, our expertise.
              </p>

              {/* Main Heading */}
              <Header2 className="text-brand-dark !font-medium !leading-tight">
                Pure wellness, we work with top professionals
              </Header2>

              {/* CTA Link */}
              <div className="pt-2">
                <button
                  onClick={() => router.push("/get-started")}
                  className="group inline-flex items-center gap-3 text-brand-dark text-base font-medium border-b-2 border-brand-dark pb-1 hover:border-brand-mint hover:text-brand-mint transition-colors duration-300"
                >
                  Be one of them now
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </motion.svg>
                </button>
              </div>
            </div>
            {/* Feature Cards */}
            <div className="grid grid-cols-1 h-full sm:grid-cols-2 gap-6 pt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-brand-neutral-light border border-brand-neutral-dark p-6 rounded-2xl space-y-3 flex flex-col justify-between items-end cursor-pointer group hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Icon Circle */}
                  <div 
                    className="w-10 h-10 rounded-full border border-brand-neutral-dark flex items-center justify-center text-brand-dark group-hover:bg-brand-primary group-hover:text-white group-hover:scale-[1.2] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 ease-out will-change-transform"
                  >
                    {feature.icon}
                  </div>

                  <div className="flex flex-col gap-2 items-end justify-between">
                    <Header5 className=" w-full text-brand-dark !font-medium">
                      {feature.title}
                    </Header5>
                    {/* Description */}
                    <Body1 className="!text-sm leading-relaxed">
                      {feature.description}
                    </Body1>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
