'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, ArrowRightIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PrimaryButton } from '../common/buttons';
import { useRouter } from 'next/navigation';
import BMICalculatorModal from '../common/BMICalculatorModal';

/**
 * Responsive Navbar Component
 * Features:
 * - Logo with brand identity
 * - Navigation links (Skincare, Hair Care, Sexual Health)
 * - Get Started CTA button
 * - Mobile responsive with hamburger menu
 * - Max-width 1280px
 * - Smooth animations
 * - Sticky on scroll with backdrop blur
 */

interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

const navLinks: NavLink[] = [
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Calculate BMI', href: '#', hasDropdown: true }, // Special handling for BMI calculator
  { label: 'Pricing ', href: '/#subscription' },
  { label: 'Contact us', href: '/contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBMIModalOpen, setIsBMIModalOpen] = useState(false);
  const router = useRouter();
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavLinkClick = (link: NavLink, e: React.MouseEvent) => {
    if (link.label === 'Calculate BMI') {
      e.preventDefault();
      setIsBMIModalOpen(true);
      closeMobileMenu();
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-fixed transition-all bg-brand-light  duration-base `}
    >
      <div className='my-2 mx-2 sm:mx-4 shadow-sm rounded-md bg-brand-primary'>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 group"
            onClick={closeMobileMenu}
          >
            <div className="relative w-24 h-6 sm:w-36 sm:h-8 transition-transform ">
              <Image
                src="/images/metis-logo-white.png"
                alt="Men's Health Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavLinkClick(link, e)}
                className="font-body text-base  text-white hover:text-brand-ice transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <PrimaryButton size="medium" onClick={()=>router.push('/services')} theme='dark' className='border-brand-light gap-2 group'>
              Start Quiz <ArrowRightIcon className='w-4 h-4 transition-transform duration-300 group-hover:translate-x-1' />
            </PrimaryButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-modal-backdrop lg:hidden"
              onClick={closeMobileMenu}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-20 right-0 bottom-0 w-full  bg-white shadow-2xl z-modal lg:hidden overflow-y-auto"
            >
              <div className="p-6 space-y-6">
                {/* Mobile Navigation Links */}
                <div className="space-y-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={(e) => {
                          handleNavLinkClick(link, e);
                          if (link.label !== 'Calculate BMI') {
                            closeMobileMenu();
                          }
                        }}
                        className="block px-4 py-3 rounded-lg font-body text-base font-medium text-brand-dark hover:bg-brand-neutral-light hover:text-brand-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-4 border-t border-brand-neutral"
                >
                  <PrimaryButton 
                    size="large" 
                    onClick={(e) => {
                      e.stopPropagation();
                      closeMobileMenu();
                      router.push('/services');
                    }}
                    fullWidth
                  >
                    Get Started
                  </PrimaryButton>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      </div>

      {/* BMI Calculator Modal */}
      <BMICalculatorModal 
        isOpen={isBMIModalOpen} 
        onClose={() => setIsBMIModalOpen(false)} 
      />
    </nav>
  );
}

