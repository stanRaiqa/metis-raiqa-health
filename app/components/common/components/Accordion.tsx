'use client';

import React, { useState } from 'react';
import { Header6, Body2 } from "../typography";
import { PortableText as CustomPortableText } from "@/components/PortableText";
import { PortableTextBlock } from "@portabletext/types";
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface AccordionProps {
  question: string;
  answer: string | PortableTextBlock | PortableTextBlock[]
}

export const Accordion = ({ question, answer }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-b border-brand-neutral"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 px-6 text-left focus:outline-none group"
        aria-expanded={isOpen}
      >
        <Header6 className="pr-4 group-hover:text-brand-primary transition-colors">{question}</Header6>
        <div className="flex-shrink-0">
          {isOpen ? (
            <Minus className="w-5 h-5 text-brand-dark" />
          ) : (
            <Plus className="w-5 h-5 text-brand-dark" />
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.42, 0, 0.58, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 px-6">
              <div className="font-neulis-sans">
                {typeof answer === 'string' ? (
                  <Body2 className="text-brand-steel leading-relaxed">{answer}</Body2>
                ) : (
                  <CustomPortableText
                    content={Array.isArray(answer) ? answer : [answer]}
                  />
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Accordion; 