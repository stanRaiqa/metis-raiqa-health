'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Header2, Body1 } from '../common/typography';
import Accordion from '../common/components/Accordion';

export interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

interface FAQsSectionProps {
    id?: string;
    backgroundColor?: string;
    eyebrow?: string;
    title?: string;
    description?: string;
    faqs: FAQItem[];
}

export default function FAQsSection({
    id,
    backgroundColor = 'bg-white',
    eyebrow,
    title,
    description,
    faqs,
}: FAQsSectionProps) {
    return (
        <section className={`relative ${backgroundColor} py-16 lg:py-24 overflow-hidden`} id={id}>
            <div className="max-w-[1280px] mx-auto px-8">
                {(eyebrow || title || description) && (
                    <div className="flex flex-col items-center justify-center mb-12 lg:mb-16 space-y-4">
                        {eyebrow && (
                            <motion.p
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="font-body text-sm font-medium text-brand-steel uppercase tracking-wider"
                            >
                                {eyebrow}
                            </motion.p>
                        )}

                        {title && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Header2 className="text-brand-dark text-center">{title}</Header2>
                            </motion.div>
                        )}

                        {description && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <Body1 className="text-brand-steel max-w-2xl mx-auto text-center">{description}</Body1>
                            </motion.div>
                        )}
                    </div>
                )}

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto"
                >
                    <div>
                        {faqs.map((faq) => (
                            <Accordion key={faq.id} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
