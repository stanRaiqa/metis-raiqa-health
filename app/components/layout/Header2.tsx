"use client";

import Link from "next/link";
import React, {useState, useEffect, useRef} from "react";
import { PrimaryButton } from "../common/buttons";
import { usePathname } from "next/navigation";
import { useTheme } from "@/app/theming/ThemeProvider";
import SideBar from "@/app/components/layout/SideBar";
import {NavBarItems} from "@/app/enum";
import {Header6} from "@/app/components/common/typography";
import VersionIndicator from "../VersionIndicator";

type MenuItem = {
  title: string;
  path: string;
};

export default function Header2() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredTopItem, setHoveredTopItem] = useState<string | null>(null);
  const [hoverDropdowns, setHoverDropdowns] = useState<{[key: string]: boolean}>({});
  const [activeDropdowns, setActiveDropdowns] = useState<{[key: string]: boolean}>({});
  const [mobileNavStack, setMobileNavStack] = useState<Array<{title: string, items: any[]}>>([]);
  // Determine active role
  const dropdownTimersRef = useRef<{[key: string]: NodeJS.Timeout}>({});


  const pathname = usePathname();
  const { currentTheme } = useTheme();
  
  // Get the first path from the URL
  let firstPathSegment = pathname?.split('/')[1] || '';
  const isPractitioner = firstPathSegment === 'practitioner';

  const [activeRole, setActiveRole] = useState(firstPathSegment === 'practitioner' ? 'Practitioner' : 'Patient');
  
  // Update activeRole whenever pathname changes
  useEffect(() => {
    const segment = pathname?.split('/')[1] || '';
    setActiveRole(segment === 'practitioner' ? 'Practitioner' : 'Patient');
  }, [pathname]);
  
  // Define menu items for patient and practitioner
  const patientMenuItems: MenuItem[] = [
    { title: "Home", path: "/" },
    { title: "Services", path: "/#services" },
    { title: "About Us", path: "/about-us" },
    { title: "Contact Us", path: "/contact" },
  ];

  const practitionerMenuItems: MenuItem[] = [
    { title: "Home", path: "/practitioner" },
    { title: "Join Us", path: "/practitioner/join" },
    { title: "About Us", path: "/practitioner/about-us" },
    { title: "Contact Us", path: "/practitioner/contact" },
  ];
  
  // Theme colors
  const primaryColor = currentTheme.colors?.primary;
  const textPrimary = currentTheme.colors?.["text primary"] || "#020617";
  const textSecondary = currentTheme.colors?.["text secondary"] || "#0F172A";
  const borderColor = currentTheme.colors?.cardBorder || "#F5F4FC";
  const healthPurple950 = currentTheme["brand colors"]?.health?.Purple?.["950"];

  const handleMouseEnter = (title: string, isMobile: boolean) => {
    if (isMobile) return;

    // Clear any existing timeout for this dropdown
    if (dropdownTimersRef.current[title]) {
      clearTimeout(dropdownTimersRef.current[title]);
    }

    setHoverDropdowns(prev => ({
      ...prev,
      [title]: true
    }));
  };

  const handleMouseLeave = (title: string, isMobile: boolean) => {
    if (isMobile) return;

    // Set a timeout to close the dropdown after a delay
    dropdownTimersRef.current[title] = setTimeout(() => {
      setHoverDropdowns(prev => ({
        ...prev,
        [title]: false
      }));
    }, 300); // 300ms delay before closing
  };

  const isDropdownActive = (title: string, parentTitle?: string) => {
    return activeDropdowns[title] || hoverDropdowns[title] || false;
  };

  const toggleDropdown = (title: string) => {
    setActiveDropdowns(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };
  
  // Set menu items based on current path
  const menuItems = isPractitioner ? practitionerMenuItems : patientMenuItems;
  
  return (
    <>
      <header className="fixed z-50 w-full inset-x-0 top-0 bg-white/70 backdrop-blur-lg border-b" style={{ borderColor: borderColor }}>
        <div className="max-w-[1600px] mx-auto">
          <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16 py-2 md:py-4">
            {/* Logo */}
            <Link className="flex items-center gap-2 flex-shrink-0 mr-2 md:mr-4" href={isPractitioner ? "/practitioner" : "/"}>
              <svg width="232" height="64" viewBox="0 0 232 64" className="h-8 w-auto sm:h-10 md:h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_49784_15891)">
                  <path d="M30.7203 39.6802H24.3203V56.3202C24.3203 60.5618 27.7588 64.0002 32.0003 64.0002C36.2419 64.0002 39.6803 60.5618 39.6803 56.3202V39.6802H33.2803V56.3202C33.2803 57.0271 32.7073 57.6002 32.0003 57.6002C31.2934 57.6002 30.7203 57.0271 30.7203 56.3202V39.6802Z" fill="url(#paint0_radial_49784_15891)"/>
                  <path d="M39.6802 33.2798V39.6799H56.3202C60.5618 39.6799 64.0002 36.2414 64.0002 31.9998C64.0002 27.7583 60.5618 24.3198 56.3202 24.3198H39.6802L39.6802 30.7198H56.3202C57.0271 30.7198 57.6002 31.2929 57.6002 31.9998C57.6002 32.7068 57.0271 33.2798 56.3202 33.2798H39.6802Z" fill="url(#paint1_radial_49784_15891)"/>
                  <path d="M33.2803 24.32H39.6803V7.68001C39.6803 3.43846 36.2419 0 32.0003 0C27.7588 0 24.3203 3.43846 24.3203 7.68001L24.3203 24.32H30.7203V7.68001C30.7203 6.97309 31.2934 6.40001 32.0003 6.40001C32.7073 6.40001 33.2803 6.97309 33.2803 7.68001V24.32Z" fill="url(#paint2_radial_49784_15891)"/>
                  <path d="M24.32 30.7198V24.3198H7.68001C3.43846 24.3198 0 27.7583 0 31.9998C0 36.2414 3.43846 39.6799 7.68001 39.6799H24.32V33.2798H7.68001C6.97309 33.2798 6.40001 32.7068 6.40001 31.9998C6.40001 31.2929 6.97309 30.7198 7.68001 30.7198H24.32Z" fill="url(#paint3_radial_49784_15891)"/>
                  <path d="M24.3202 47.3602H47.3602L39.6802 39.6802H24.3202V24.3202L16.6401 16.6401V55.3602L24.3202 47.3602Z" fill="url(#paint4_linear_49784_15891)"/>
                  <path d="M47.357 47.3602L47.3602 9.12012L39.677 16.6401H16.6401L24.317 24.3169V24.3201H39.6802V39.6802H39.677L47.357 47.3602Z" fill="url(#paint5_linear_49784_15891)"/>
                </g>
                <path d="M113.43 19.2644C113.43 20.389 112.526 21.2704 111.411 21.2704C110.297 21.2704 109.393 20.389 109.393 19.2644C109.393 18.1398 110.297 17.2583 111.411 17.2583C112.526 17.2583 113.43 18.1398 113.43 19.2644Z" fill={textPrimary}/>
                <path d="M109.785 39.9148V26.6018C109.785 25.69 110.508 24.9605 111.411 24.9605C112.315 24.9605 113.038 25.69 113.038 26.6018V39.9148C113.038 40.8267 112.315 41.5562 111.411 41.5562C110.508 41.5562 109.785 40.8267 109.785 39.9148Z" fill={textPrimary}/>
                <path d="M97.6073 41.4928H105.078C106.132 41.4928 106.704 40.7633 106.704 39.8515V31.432C106.704 28.0886 104.053 25.3834 100.68 25.3834H95.559C94.6854 25.3834 93.9625 26.1129 93.9625 26.9944C93.9625 27.8758 94.6854 28.6053 95.559 28.6053H100.68C102.336 28.6053 103.451 29.8515 103.451 31.4624V38.2709H97.6073C96.6132 38.2709 95.9204 37.4199 95.9204 36.508C95.9204 35.5962 96.6132 34.7451 97.6073 34.7451H100.65C101.523 34.7451 102.246 34.0156 102.246 33.1342C102.246 32.2527 101.523 31.5232 100.65 31.5232H97.6073C94.6854 31.5232 92.6672 33.7724 92.6672 36.508C92.6672 39.2436 94.6854 41.4928 97.6073 41.4928Z" fill={textPrimary}/>
                <path d="M138.246 41.6374H145.716C146.77 41.6374 147.343 40.9079 147.343 39.996V31.5766C147.343 28.2331 144.692 25.528 141.318 25.528H136.198C135.324 25.528 134.601 26.2575 134.601 27.1389C134.601 28.0204 135.324 28.7499 136.198 28.7499H141.318C142.975 28.7499 144.09 29.9961 144.09 31.607V38.4155H138.246C137.252 38.4155 136.559 37.5644 136.559 36.6526C136.559 35.7407 137.252 34.8897 138.246 34.8897H141.288C142.162 34.8897 142.885 34.1602 142.885 33.2787C142.885 32.3973 142.162 31.6678 141.288 31.6678H138.246C135.324 31.6678 133.306 33.917 133.306 36.6526C133.306 39.3881 135.324 41.6374 138.246 41.6374Z" fill={textPrimary}/>
                <path fillRule="evenodd" clipRule="evenodd" d="M127.524 45.0989V41.6374H123.819C119 41.6374 115.596 38.0203 115.596 33.5827C115.596 29.145 119 25.528 123.819 25.528H129.151C130.054 25.528 130.777 26.2575 130.777 27.1693V45.0989C130.777 46.0107 130.054 46.7402 129.151 46.7402C128.247 46.7402 127.524 46.0107 127.524 45.0989ZM127.524 28.7499H123.819C120.927 28.7499 118.849 30.9383 118.849 33.5827C118.849 36.227 120.927 38.4155 123.819 38.4155H127.524V28.7499Z" fill={textPrimary}/>
                <path d="M80.9902 33.0551L88.3127 41.1651C88.9154 41.8284 89.9701 41.8887 90.633 41.2857C91.3261 40.6827 91.3562 39.6275 90.7536 38.9642L85.7514 33.447C89.0058 33.4169 91.3261 30.9748 91.3261 27.8997C91.3261 24.7944 88.9154 22.292 85.6308 22.292H77.1632C76.2592 22.292 75.5059 23.0457 75.5059 23.9502V40.0496C75.5059 40.9541 76.2592 41.7078 77.1632 41.7078C78.0672 41.7078 78.8206 40.9541 78.8206 40.0496V25.4878H85.6007C87.0772 25.4878 88.0114 26.5731 88.0114 27.8997C88.0114 29.2262 87.0772 30.2814 85.6007 30.2814H82.1956C81.2916 30.2814 80.5382 31.0351 80.5382 31.9396C80.5382 32.3617 80.719 32.7536 80.9902 33.0551Z" fill={textPrimary}/>
                <path d="M231.012 40.6722H229.342V33.3956C229.342 30.4611 227.576 28.7911 225.286 28.7911C222.757 28.7911 221.206 30.7236 221.206 33.2763V40.6722H219.536V23.0176H221.206V29.2921H221.254C222.089 28.0277 223.568 27.2881 225.262 27.2881C228.864 27.2881 231.012 29.7693 231.012 33.3956V40.6722Z" fill={textPrimary}/>
                <path d="M214.72 40.6722H213.05V29.1251H210.307V27.6221H213.05V23.0176H214.72V27.6221H217.846V29.1251H214.72V40.6722Z" fill={textPrimary}/>
                <path d="M208.417 40.6722H206.747V23.0176H208.417V40.6722Z" fill={textPrimary}/>
                <path d="M203.726 40.6722H202.056V38.3818H202.008C200.935 40.0042 199.05 40.9823 196.927 40.9823C193.014 40.9823 189.913 38.024 189.913 34.1113C189.913 30.1987 193.11 27.2881 196.927 27.2881C199.098 27.2881 200.959 28.2662 202.008 29.9124H202.056V27.6221H203.726V40.6722ZM196.927 39.4793C199.837 39.4793 202.152 37.0935 202.152 34.1591C202.152 31.2484 199.861 28.7911 196.903 28.7911C193.897 28.7911 191.583 31.0814 191.583 34.1829C191.583 37.189 193.849 39.4793 196.927 39.4793Z" fill={textPrimary}/>
                <path d="M187.899 34.7555H176.018C176.161 37.356 178.547 39.4793 181.076 39.4793C183.104 39.4793 185.036 38.3103 185.752 36.4017H187.517C186.515 39.2169 183.891 40.9823 181.1 40.9823C177.402 40.9823 174.3 37.9763 174.3 34.1591C174.3 30.3657 177.426 27.2881 181.076 27.2881C184.988 27.2881 187.923 30.652 187.923 34.2545C187.923 34.4215 187.899 34.5885 187.899 34.7555ZM176.018 33.2525H186.205C185.728 30.6281 183.652 28.7911 181.076 28.7911C178.642 28.7911 176.471 30.5566 176.018 33.2525Z" fill={textPrimary}/>
                <path d="M171.59 40.6722H169.825V32.3936H160.687V40.6722H158.922V23.0176H160.687V30.7951H169.825V23.0176H171.59V40.6722Z" fill={textPrimary}/>
                <defs>
                  <radialGradient id="paint0_radial_49784_15891" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(39.6803 43.5202) rotate(126.87) scale(25.6 18.0648)">
                    <stop stopColor="#C6F7FA"/>
                    <stop offset="0.181205" stopColor="#1BE1EA"/>
                    <stop offset="1" stopColor="#5536F0"/>
                  </radialGradient>
                  <radialGradient id="paint1_radial_49784_15891" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(43.5202 24.3198) rotate(36.8699) scale(25.6 18.0648)">
                    <stop stopColor="#C6F7FA"/>
                    <stop offset="0.181205" stopColor="#1BE1EA"/>
                    <stop offset="1" stopColor="#5536F0"/>
                  </radialGradient>
                  <radialGradient id="paint2_radial_49784_15891" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(24.3203 20.48) rotate(-53.1301) scale(25.6 18.0648)">
                    <stop stopColor="#C6F7FA"/>
                    <stop offset="0.181205" stopColor="#1BE1EA"/>
                    <stop offset="1" stopColor="#5536F0"/>
                  </radialGradient>
                  <radialGradient id="paint3_radial_49784_15891" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20.48 39.6799) rotate(-143.13) scale(25.6 18.0648)">
                    <stop stopColor="#C6F7FA"/>
                    <stop offset="0.181205" stopColor="#1BE1EA"/>
                    <stop offset="1" stopColor="#5536F0"/>
                  </radialGradient>
                  <linearGradient id="paint4_linear_49784_15891" x1="15.6801" y1="22.2401" x2="43.2002" y2="49.6002" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFA537"/>
                    <stop offset="0.25" stopColor="#FF7139"/>
                    <stop offset="0.5" stopColor="#FD2C3F"/>
                    <stop offset="0.755" stopColor="#FF2185"/>
                    <stop offset="1" stopColor="#B830E1"/>
                  </linearGradient>
                  <linearGradient id="paint5_linear_49784_15891" x1="16.6401" y1="9.12012" x2="32.2768" y2="52.5312" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#806EEE"/>
                    <stop offset="1" stopColor="#3116C8"/>
                  </linearGradient>
                  <clipPath id="clip0_49784_15891">
                    <rect width="64.0001" height="64.0001" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
              
              {/* Beta Badge */}
              <VersionIndicator showFullText={false} />

            </Link>

            {/* Mobile menu toggle - only visible on mobile and tablets */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                {/* Hamburger icon - visible when menu is closed */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none"
                  className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
                >
                  <path d="M3 6H21M3 12H21M3 18H21" stroke={healthPurple950} strokeWidth="2" strokeLinecap="round"/>
                </svg>
                
                {/* Close/X icon - visible when menu is open */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none"
                  className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
                >
                  <path d="M6 6L18 18M6 18L18 6" stroke={healthPurple950} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>

            {/* Desktop navigation - hidden on mobile and tablets */}
            <nav className="hidden lg:flex items-center justify-between flex-1">
              <ul role="list" className="flex items-center gap-4 lg:gap-6 xl:gap-8 ml-[54px]">
                {/* Navigation Items */}
                {menuItems.map((item, index) => (
                  <li key={`${item.title}-${index}`}>
                    <Link 
                      href={item.path}
                      className="font-medium font-neulis-sans text-sm sm:text-base tracking-[0.5px] leading-5 whitespace-nowrap py-4 relative"
                      style={{
                        color: pathname === item.path ? primaryColor : hoveredTopItem === item.title ? primaryColor : healthPurple950,
                        position: 'relative'
                      }}
                      onMouseEnter={() => setHoveredTopItem(item.title)}
                      onMouseLeave={() => setHoveredTopItem(null)}
                    >
                      {item.title}
                      {(pathname === item.path || hoveredTopItem === item.title) && (
                        <span style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          width: '100%',
                          height: '4px',
                          backgroundColor: primaryColor,
                          borderRadius: '9999px'
                        }}></span>
                      )}
                    </Link>
                  </li>
                ))}
                {/*Role Switcher Dropdown */}
                <li>
                  <div
                      className="relative"
                      onMouseEnter={() => handleMouseEnter('roleSelector', false)}
                      onMouseLeave={() => handleMouseLeave('roleSelector', false)}
                  >
                    <button
                        onClick={() => toggleDropdown('roleSelector')}
                        className="font-medium font-neulis-sans text-sm sm:text-base tracking-[0.5px] leading-5 flex items-center gap-1 whitespace-nowrap py-4 relative"
                        style={{ color: hoveredTopItem === 'roleSelector' ? primaryColor : healthPurple950 }}
                    >
                      <span>{activeRole}</span>
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          className={`transition-transform duration-300 ${isDropdownActive('roleSelector') ? "rotate-180" : ""}`}
                      >
                        <path d="M7.01172 10L12.0117 15L17.0117 10H7.01172Z" fill={hoveredTopItem === 'roleSelector' ? primaryColor : healthPurple950}/>
                      </svg>
                      {hoveredTopItem === 'roleSelector' && (
                          <span style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            height: '4px',
                            backgroundColor: primaryColor,
                            borderRadius: '9999px'
                          }}></span>
                      )}
                    </button>

                    {isDropdownActive('roleSelector') && (
                        <div
                            className="absolute font-neulis-sans top-full mt-1 left-0 bg-white shadow-md rounded-md py-2 min-w-[180px] z-50 transform transition-all duration-300 ease-in-out"
                            style={{
                              animation: "fadeIn 0.3s forwards"
                            }}
                        >
                          <Link
                              href="/"
                              className="block w-full px-4 py-2 hover:bg-gray-100 font-neulis-sans text-sm sm:text-base"
                              style={{
                                color: activeRole === 'Patient' ? primaryColor : healthPurple950,
                                fontWeight: activeRole === 'Patient' ? 'bold' : 'normal'
                              }}
                              onClick={() => {
                                setActiveRole('Patient');
                                setActiveDropdowns(prev => ({...prev, roleSelector: false}));
                              }}
                          >
                            For Patient
                          </Link>
                          <Link
                              href="/practitioner"
                              className="block w-full px-4 py-2 hover:bg-gray-100 font-neulis-sans text-sm sm:text-base"
                              style={{
                                color: activeRole === 'Practitioner' ? primaryColor : healthPurple950,
                                fontWeight: activeRole === 'Practitioner' ? 'bold' : 'normal'
                              }}
                              onClick={() => {
                                setActiveRole('Practitioner');
                                setActiveDropdowns(prev => ({...prev, roleSelector: false}));
                              }}
                          >
                            For Practitioner
                          </Link>
                        </div>
                    )}
                  </div>
                </li>
              </ul>

              {/* Action Button */}
              <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 ml-4 sm:ml-6 lg:ml-8">
                {isPractitioner ?
                    <PrimaryButton href={isPractitioner ? "/practitioner/join" : "/patient/join"}>
                  Explore Raiqa
                </PrimaryButton>  :
                    <SideBar buttonType="primary">
                      Explore Raiqa
                    </SideBar>
                }
              </div>
            </nav>
          </div>
        </div>

        {/* Mobile Menu Drawer - appears when menu is toggled (visible on mobile and tablets) */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-40 border-t h-[calc(100vh-64px)] overflow-hidden" style={{ borderColor: borderColor }}>
            <div className="p-4">
              <ul className="flex flex-col space-y-4">
                {menuItems.map((item, index) => (
                  <li key={`${item.title}-${index}`}>
                    <Link 
                      href={item.path}
                      className="font-medium font-neulis-sans text-lg tracking-[0.5px] leading-5 block py-2"
                      style={{ color: pathname === item.path ? primaryColor : healthPurple950 }}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}

                {/* Role Switcher for Mobile */}
                {mobileNavStack.length === 0 && (
                  <div className="border-b pb-4 mb-4" style={{ borderColor: borderColor }}>
                    <Header6 className="mb-2">Switch View</Header6>
                    <div className="flex gap-2">
                      <Link
                        href="/"
                        className={`flex-1 py-2 px-3 text-center font-neulis-sans rounded-md transition duration-200 ${activeRole === 'Patient' ? 'bg-indigo-50' : 'bg-gray-50'}`}
                        style={{
                          color: activeRole === 'Patient' ? primaryColor : healthPurple950,
                          fontWeight: activeRole === 'Patient' ? 'medium' : 'normal',
                          borderWidth: 1,
                          borderStyle: 'solid',
                          borderColor: activeRole === 'Patient' ? primaryColor : borderColor
                        }}
                        onClick={() => {
                          setActiveRole('Patient');
                          setMobileMenuOpen(false);
                        }}
                      >
                        For Patient
                      </Link>
                      <Link
                        href="/practitioner"
                        className={`flex-1 py-2 px-3 text-center font-neulis-sans rounded-md transition duration-200 ${activeRole === 'Practitioner' ? 'bg-indigo-50' : 'bg-gray-50'}`}
                        style={{
                          color: activeRole === 'Practitioner' ? primaryColor : healthPurple950,
                          fontWeight: activeRole === 'Practitioner' ? 'medium' : 'normal',
                          borderWidth: 1,
                          borderStyle: 'solid',
                          borderColor: activeRole === 'Practitioner' ? primaryColor : borderColor
                        }}
                        onClick={() => {
                          setActiveRole('Practitioner');
                          setMobileMenuOpen(false);
                        }}
                      >
                        For Practitioner
                      </Link>
                    </div>
                  </div>
                )}


                
                {/* Mobile Action Button */}
                <li className="pt-4 mt-4 border-t" style={{ borderColor: borderColor }}>
                  <div className="flex flex-col gap-4">
                    <PrimaryButton href={isPractitioner ? "/practitioner/join" : "/patient/join"} onClick={() => setMobileMenuOpen(false)}>
                      Explore Raiqa
                    </PrimaryButton>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
