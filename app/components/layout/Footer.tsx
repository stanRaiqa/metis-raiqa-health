'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Instagram, Youtube, Heart, YoutubeIcon } from 'lucide-react';
import { Body2, Body3, Header6 } from '../common/typography';
import BMICalculatorModal from '../common/BMICalculatorModal';
import { bookingBaseUrl } from '@/app/enum';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isBMIModalOpen, setIsBMIModalOpen] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribe:', email);
  };

  return (
    <footer className="relative bg-brand-primary-dark mx-4 rounded-lg my-2 text-white overflow-hidden">
      {/* Newsletter Section */}
      <div className="border-b border-white/10 bg-brand-primary-light">
        <div className="max-w-[1280px] mx-auto px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left - Tagline */}
            <div>
              <h2 className="font-heading text-3xl lg:text-4xl text-white mb-2">
                Your transformation.
              </h2>
              <h2 className="font-heading text-3xl lg:text-4xl text-white italic">
                Our mission.
              </h2>
            </div>

            {/* Right - Newsletter Form */}
            <div className="relative">
              {/* Heart Icon */}
              <div className="absolute -top-8 right-0 mb-4 hidden lg:block">
                <Heart className="w-20 h-20 text-white fill-white" />
              </div>
              
              <p className="font-body text-white mb-4">
                Subscribe for helpful insight and resources.
              </p>
              
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 mb-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  className="flex-1 px-4 py-3 rounded-lg bg-white text-brand-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-brand-dark font-semibold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
                >
                  Subscribe now
                </button>
              </form>
              
              <p className="font-body text-white/80 text-sm">
                We never share your information with third parties.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-[1280px] mx-auto px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">
          
          {/* Left Section - Branding */}
          <div className="lg:col-span-4">
            {/* Metis Logo */}
            <div className="mb-6">
              <Image 
                src="/images/metis-logo-white.png" 
                alt="Metis Logo" 
                width={180} 
                height={60}
                className="h-12 w-auto"
              />
            </div>

          
          </div>

          {/* Programs Column */}
          <div className="lg:col-span-2">
            <Header6 className="!font-medium text-white text-lg  mb-4">Programs</Header6>
            <div className="flex flex-col gap-2">
              <Link href={bookingBaseUrl+"/form/metis/medical-weight-loss" }className="hover:underline">
                <Body3 className="text-white/80">Medical Weightloss</Body3>
              </Link>
              <button 
                onClick={() => setIsBMIModalOpen(true)} 
                className="hover:underline text-left"
              >
                <Body3 className="text-white/80">BMI Calculator</Body3>
              </button>
            </div>
          </div>

          {/* About Us Column */}
          <div className="lg:col-span-2">
            <Header6 className="!font-medium text-white text-lg  mb-4">About us</Header6>
            <div className="flex flex-col gap-2">
              <Link href="/#faqs" className="hover:underline">
                <Body3 className="text-white/80">FAQs</Body3>
              </Link>
              <Link href="/contact" className="hover:underline">
                <Body3 className="text-white/80">Contact Us</Body3>
              </Link>
              <Link href="/privacy-policy" className="hover:underline">
                <Body3 className="text-white/80">Privacy Policy</Body3>
              </Link>
              <Link href="/terms-conditions" className="hover:underline">
                <Body3 className="text-white/80">Terms and Conditions</Body3>
              </Link>
            </div>
          </div>

          {/* Follow Us & Certification */}
          <div className="lg:col-span-4">
            <Header6 className="!font-medium text-white text-lg  mb-4">Follow us</Header6>
            
            {/* Social Media Icons */}
            <div className="flex gap-3 mb-8">
              <Link
                href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61575972839309"
                aria-label="Facebook"
                className="hover:opacity-80 transition-opacity"
              >
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors">
                  <Facebook className="w-5 h-5 text-brand-primary-dark" />
                </div>
              </Link>

              <Link
                href="https://www.youtube.com/@RaiqaHealth"
                aria-label="YouTube"
                className="hover:opacity-80 transition-opacity"
              >
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors">
                  <YoutubeIcon className="w-5 h-5 text-brand-primary-dark" />
                </div>
              </Link>

              <Link
                href="https://www.instagram.com/raiqahealth"
                aria-label="Instagram"
                className="hover:opacity-80 transition-opacity"
              >
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors">
                  <Instagram className="w-5 h-5 text-brand-primary-dark" />
                </div>
              </Link>
            </div>

            {/* LegitScript Certification */}
            <a
              href="https://www.legitscript.com/websites/?checker_keywords=raiqa.health"
              target="_blank"
              rel="noopener noreferrer"
              title="Verify LegitScript Approval for www.raiqa.health"
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <Image
                src="https://static.legitscript.com/seals/44496772.png"
                alt="LegitScript Certified"
                width={73}
                height={79}
                className="w-20 h-auto"
              />
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="text-center mb-4">
            <Body3 className="text-white/80">
              <span className="font-semibold">Registered Office</span>
            </Body3>
            <Body3 className="text-white/80">
              Lobby 1, Level 2/76 Skyring Terrace, Newstead QLD 4006
            </Body3>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6">
            <Body3 className="text-white/80">
              <span className="font-semibold">Email</span>
            </Body3>
            <Body3 className="text-white/80">
              support@raiqa.health
            </Body3>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6 mt-2">
            <Body3 className="text-white/80">
              <span className="font-semibold">Call</span>
            </Body3>
            <Body3 className="text-white/80">
              +61 7 3472 8493
            </Body3>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6">
          <div className="text-center">
            <Body3 className="text-white/60">
              © {new Date().getFullYear()} Raiqa Health. All rights reserved.
            </Body3>
          </div>
        </div>
      </div>

      {/* LinkedIn Tracking Script */}
      <script type="text/javascript" dangerouslySetInnerHTML={{
        __html: `
          _linkedin_partner_id = "7558644";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
        `
      }} />
      <script type="text/javascript" dangerouslySetInnerHTML={{
        __html: `
          (function(l) {
            if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
            window.lintrk.q=[]}
            var s = document.getElementsByTagName("script")[0];
            var b = document.createElement("script");
            b.type = "text/javascript";b.async = true;
            b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
            s.parentNode.insertBefore(b, s);})(window.lintrk);
        `
      }} />
      <noscript>
        <Image height="1" width="1" style={{ display: 'none' }} alt="" src="https://px.ads.linkedin.com/collect/?pid=7558644&fmt=gif" />
      </noscript>

      {/* BMI Calculator Modal */}
      <BMICalculatorModal
        isOpen={isBMIModalOpen}
        onClose={() => setIsBMIModalOpen(false)}
      />
    </footer>
  );
}
