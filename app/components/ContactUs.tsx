'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ChevronDown } from 'lucide-react';
import { Header1, Header2, Body1, Body2, Caption } from './common/typography';
import { PrimaryButton } from './common/buttons';
import { useContactForm } from '../machines/contact/useContactForm';
import { FormFieldData } from '../machines/contact/contactMachine';

/**     
 * Modern Contact Us Component
 * Split layout with contact info on left and form on right
 */

export default function ContactUs() {
    const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
    const [followUpEmail, setFollowUpEmail] = useState(false);
    const [followUpPhone, setFollowUpPhone] = useState(false);
    const [attachedFile, setAttachedFile] = useState<File | null>(null);

    // Initialize form fields
    const initialFields: Record<string, FormFieldData> = {
        firstName: {
            name: 'firstName',
            value: '',
            type: 'text',
            required: false
        },
        email: {
            name: 'email',
            value: '',
            type: 'email',
            required: true
        },
        treatment: {
            name: 'treatment',
            value: '',
            type: 'select',
            required: false
        },
        issueCategory: {
            name: 'issueCategory',
            value: '',
            type: 'select',
            required: false
        },
        helpQuery: {
            name: 'helpQuery',
            value: '',
            type: 'text',
            required: true
        },
        additionalInfo: {
            name: 'additionalInfo',
            value: '',
            type: 'textarea',
            required: false
        }
    };

    const {
        formData,
        errors,
        handleChange,
        handleSubmit,
        isSubmitting,
        isSuccess,
        isError,
        errorMessage
    } = useContactForm({ fields: initialFields });

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSubmit();
    };

    const getFieldError = (fieldName: string) => {
        return errors.find(err => err.field === fieldName)?.message;
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setAttachedFile(e.target.files[0]);
        }
    };

    return (
        <section className="relative bg-gray-50 py-16 lg:py-24">
            <div className="max-w-[1400px] mx-auto px-8">
                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start lg:gap-6">
                    {/* Left Column - Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center lg:sticky lg:top-28"
                    >
                        {/* Label */}
                        <Caption className="text-brand-steel mb-4 uppercase tracking-wider">
                            Get in Touch
                        </Caption>

                        {/* Main Heading */}
                        <h1 className="text-4xl lg:text-5xl font-bold text-brand-dark mb-4 leading-tight">
                            Let&apos;s chat.<br />
                            Reach out to us.
                        </h1>

                        {/* Description */}
                        <Body1 className="text-brand-steel mb-12 max-w-lg">
                            Have questions or feedback? We&apos;re here to help. Send us a message, and we&apos;ll respond within 24 Hours
                        </Body1>

                        {/* Contact Details */}
                        <div className="space-y-8">
                            {/* Phone */}
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <Phone className="w-6 h-6 text-brand-dark" />
                                </div>
                                <div>
                                    <Body2 className="text-brand-dark font-medium">1300 0RAIQA</Body2>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <Mail className="w-6 h-6 text-brand-dark" />
                                </div>
                                <div>
                                    <Body2 className="text-brand-dark font-medium">support@raiqa.health</Body2>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-brand-dark" />
                                </div>
                                <div>
                                    <Body2 className="text-brand-dark font-medium">
                                        Lobby 1, Level 2/76 Skyring Terrace, <br/>Newstead QLD 4006, Australia
                                    </Body2>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-lg p-4 lg:p-8 border border-brand-neutral" 
                    >
                        <form onSubmit={onSubmit} className="space-y-6">
                            {/* First Name */}
                            <div>
                                <label className="block text-sm font-medium text-brand-dark mb-2">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    value={formData.firstName.value}
                                    onChange={(e) => handleChange('firstName', e.target.value)}
                                    placeholder="Enter your first name"
                                    className={`w-full px-4 py-3 bg-white border ${
                                        getFieldError('firstName') ? 'border-red-500' : 'border-gray-300'
                                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all hover:border-gray-400`}
                                />
                                {getFieldError('firstName') && (
                                    <p className="mt-1 text-sm text-red-500">{getFieldError('firstName')}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-brand-dark mb-2">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    value={formData.email.value}
                                    onChange={(e) => handleChange('email', e.target.value)}
                                    placeholder="Enter your email"
                                    className={`w-full px-4 py-3 bg-white border ${
                                        getFieldError('email') ? 'border-red-500' : 'border-gray-300'
                                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all hover:border-gray-400`}
                                />
                                {getFieldError('email') && (
                                    <p className="mt-1 text-sm text-red-500">{getFieldError('email')}</p>
                                )}
                            </div>

                            {/* What treatment is your query relating to? */}
                            <div>
                                <label className="block text-sm font-medium text-brand-dark mb-2">
                                    What treatment is your query relating to?
                                </label>
                                <div className="relative">
                                    <select
                                        value={formData.treatment.value}
                                        onChange={(e) => handleChange('treatment', e.target.value)}
                                        className={`w-full px-4 py-3 pr-12 bg-white border ${
                                            getFieldError('treatment') ? 'border-red-500' : 'border-gray-300'
                                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all appearance-none cursor-pointer hover:border-gray-400 text-brand-dark font-medium`}
                                    >
                                        <option value="" className="text-gray-400">Select treatment</option>
                                        <option value="medical-weight-loss">Medical Weight Loss</option>
                                        <option value="other">Other</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                                </div>
                                {getFieldError('treatment') && (
                                    <p className="mt-1 text-sm text-red-500">{getFieldError('treatment')}</p>
                                )}
                            </div>

                            {/* Issue Category */}
                            <div>
                                <label className="block text-sm font-medium text-brand-dark mb-2">
                                    Issue Category
                                </label>
                                <div className="relative">
                                    <select
                                        value={formData.issueCategory.value}
                                        onChange={(e) => handleChange('issueCategory', e.target.value)}
                                        className={`w-full px-4 py-3 pr-12 bg-white border ${
                                            getFieldError('issueCategory') ? 'border-red-500' : 'border-gray-300'
                                        } rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all appearance-none cursor-pointer hover:border-gray-400 text-brand-dark font-medium`}
                                    >
                                        <option value="" className="text-gray-400">Select category</option>
                                        <option value="billing">Billing & Payment</option>
                                        <option value="medical">Medical Consultation</option>
                                        <option value="delivery">Delivery & Shipping</option>
                                        <option value="prescription">Prescription Related</option>
                                        <option value="account">Account Management</option>
                                        <option value="technical">Technical Support</option>
                                        <option value="general">General Inquiry</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                                </div>
                                {getFieldError('issueCategory') && (
                                    <p className="mt-1 text-sm text-red-500">{getFieldError('issueCategory')}</p>
                                )}
                            </div>

                            {/* How can we help you today? */}
                            <div>
                                <label className="block text-sm font-medium text-brand-dark mb-2">
                                    How can we help you today? <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={formData.helpQuery.value}
                                    onChange={(e) => handleChange('helpQuery', e.target.value)}
                                    placeholder="Brief description of your query"
                                    className={`w-full px-4 py-3 bg-white border ${
                                        getFieldError('helpQuery') ? 'border-red-500' : 'border-gray-300'
                                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all hover:border-gray-400`}
                                />
                                {getFieldError('helpQuery') && (
                                    <p className="mt-1 text-sm text-red-500">{getFieldError('helpQuery')}</p>
                                )}
                            </div>

                            {/* Additional Information */}
                            <div>
                                <label className="block text-sm font-medium text-brand-dark mb-2">
                                    Is there any other information you can share to assist us with your enquiry?
                                </label>
                                <textarea
                                    value={formData.additionalInfo.value}
                                    onChange={(e) => handleChange('additionalInfo', e.target.value)}
                                    placeholder="Any additional details that might help us assist you better"
                                    rows={5}
                                    className={`w-full px-4 py-3 bg-white border ${
                                        getFieldError('additionalInfo') ? 'border-red-500' : 'border-gray-300'
                                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-all resize-none hover:border-gray-400`}
                                />
                                {getFieldError('additionalInfo') && (
                                    <p className="mt-1 text-sm text-red-500">{getFieldError('additionalInfo')}</p>
                                )}
                            </div>

                            {/* Follow-up Method */}
                            <div>
                                <label className="block text-sm font-medium text-brand-dark mb-3">
                                    How would you like the Metis Customer Team to follow up?
                                </label>
                                <div className=" flex items-center gap-2">
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            id="followup-email"
                                            checked={followUpEmail}
                                            onChange={(e) => setFollowUpEmail(e.target.checked)}
                                            className="w-4 h-4 text-brand-primary border-gray-300 rounded focus:ring-brand-primary"
                                        />
                                        <label htmlFor="followup-email" className="text-sm text-brand-dark">
                                            Email
                                        </label>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            id="followup-phone"
                                            checked={followUpPhone}
                                            onChange={(e) => setFollowUpPhone(e.target.checked)}
                                            className="w-4 h-4 text-brand-primary border-gray-300 rounded focus:ring-brand-primary"
                                        />
                                        <label htmlFor="followup-phone" className="text-sm text-brand-dark">
                                            Phone
                                        </label>
                                    </div>
                                </div>
                            </div>

                           

                            {/* Privacy Policy Checkbox */}
                            <div className="flex items-start gap-2">
                                <input
                                    type="checkbox"
                                    id="privacy"
                                    checked={agreedToPrivacy}
                                    onChange={(e) => setAgreedToPrivacy(e.target.checked)}
                                    className="mt-1 w-4 h-4 text-brand-primary border-gray-300 rounded focus:ring-brand-primary"
                                />
                                <label htmlFor="privacy" className="text-sm text-brand-steel">
                                    I agree to our{' '}
                                    <a href="/privacy-policy" className="text-brand-primary underline hover:text-brand-primary-dark">
                                        privacy policy
                                    </a>
                                </label>
                            </div>

                            {/* Success/Error Messages */}
                            {isSuccess && (
                                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                                    <Body2 className="text-green-700">
                                        Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                                    </Body2>
                                </div>
                            )}

                            {isError && (
                                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                                    <Body2 className="text-red-700">
                                        {errorMessage || 'An error occurred. Please try again.'}
                                    </Body2>
                                </div>
                            )}

                            {/* Submit Button */}
                            <PrimaryButton
                                type="submit"
                                disabled={isSubmitting || !agreedToPrivacy}
                                className="w-full bg-black text-white py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </PrimaryButton>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

