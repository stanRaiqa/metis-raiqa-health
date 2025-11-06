"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Header2, Header3, Body1 } from "./common/typography";

/**
 * FAQs Section Component
 * Features:
 * - Minimalist centered design
 * - Numbered items
 * - Accordion-style expand/collapse
 * - Clean horizontal lines
 * - Modern wellness aesthetic
 */

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 0,
    question: "Personalized wellness plans",
    answer:
      "Our expert team creates customized health and wellness programs tailored to your unique goals, lifestyle, and needs. Get comprehensive support from certified professionals.",
  },
  {
    id: 1,
    question: "Cutting-edge technology",
    answer:
      "We leverage the latest health technology and evidence-based practices to deliver effective, modern solutions for your wellness journey with real-time tracking and insights.",
  },
  {
    id: 2,
    question: "Expert team",
    answer:
      "Work with certified health professionals, nutritionists, and wellness coaches who bring years of experience in holistic health and sustainable lifestyle changes.",
  },
  {
    id: 3,
    question: "Community-driven",
    answer:
      "Join a supportive community of like-minded individuals on their wellness journey. Share experiences, get motivated, and celebrate milestones together.",
  },
];

const FAQAccordion = ({ faq, index }: { faq: FAQItem; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-gray-200"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-8 lg:py-10 text-left focus:outline-none group transition-all duration-300"
        aria-expanded={isOpen}
      >
        {/* Number */}
        <span className="text-brand-steel font-body text-lg flex-shrink-0 w-16 lg:w-20">
          {String(faq.id + 1).padStart(2, "0")}.
        </span>

         {/* Question - Left Aligned */}
         <Header3 className="flex-1 text-left !font-normal text-brand-dark group-hover:text-brand-primary transition-colors duration-300">
           {faq.question}
         </Header3>

        {/* Plus/Minus Icon */}
        <div className="flex-shrink-0 w-16 lg:w-20 flex justify-end">
          <div className="w-8 h-8 flex items-center justify-center">
            {isOpen ? (
              <Minus className="w-6 h-6 text-brand-dark transition-transform duration-300" />
            ) : (
              <Plus className="w-6 h-6 text-brand-dark transition-transform duration-300" />
            )}
          </div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.42, 0, 0.58, 1] }}
            className="overflow-hidden"
          >
             <div className="pb-8 pl-16 lg:pl-20 pr-16 lg:pr-20">
               <Body1 className="text-brand-steel leading-relaxed text-left">
                 {faq.answer}
               </Body1>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function HomeFAQs() {
  return (
    <section className="relative bg-white py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-8">
         {/* Section Header */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="mb-12 lg:mb-16 text-center space-y-4"
         >
           {/* Subtitle */}
           <p className="font-body text-base text-brand-forest italic">
             - Got questions?
           </p>

           {/* Main Heading */}
           <Header2 className="text-brand-dark !font-medium">
             Frequently Asked Questions
           </Header2>

           {/* Description */}
           <Body1 className="text-brand-steel max-w-2xl mx-auto">
             Find answers to common questions about our wellness programs,
             services, and how we can help you achieve your health goals.
           </Body1>
         </motion.div>

        {/* FAQ Items */}
        {faqs.map((faq, index) => (
          <FAQAccordion key={faq.id} faq={faq} index={index} />
        ))}
      </div>
    </section>
  );
}
