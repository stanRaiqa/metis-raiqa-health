'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { 
  Header1, 
  Header4, 
  Body1, 
  Body2
} from './common/typography';
import { NavBarItems } from '../enum';
import { PrimaryButton } from './common/buttons';
import {useTheme} from "@/app/theming/ThemeProvider";
import { useRouter } from 'next/navigation';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

function Page404() {
  const { currentTheme } = useTheme();
  const [animate, setAnimate] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Particle animation state
  const [particles] = useState<Particle[]>(() => 
    Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 5 + 1,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.5 + 0.1
    }))
  );

  // Used for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // Initial load animation
  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  // Particle animation loop
  useEffect(() => {
    const animateParticles = () => {
      const particleElements = document.querySelectorAll('.particle');
      
      particles.forEach((particle, index) => {
        if (particleElements[index]) {
          // Move particles
          particle.x += particle.speedX;
          particle.y += particle.speedY;
          
          // Loop particles when they go off-screen
          if (particle.x > 100) particle.x = 0;
          if (particle.x < 0) particle.x = 100;
          if (particle.y > 100) particle.y = 0;
          if (particle.y < 0) particle.y = 100;
          
          // Apply position
          const el = particleElements[index] as HTMLElement;
          el.style.left = `${particle.x}%`;
          el.style.top = `${particle.y}%`;
        }
      });
      
      animationFrameId = requestAnimationFrame(animateParticles);
    };
    
    let animationFrameId = requestAnimationFrame(animateParticles);
    return () => cancelAnimationFrame(animationFrameId);
  }, [particles]);

  // Get relevant navigation links
  const navigationLinks = NavBarItems.filter(item => 
    ['Services', 'How it works', 'Healthcare Companion'].includes(item.title)
  );

  // Get theme colors with fallbacks
  const primaryColor = currentTheme.colors?.primary || '#3116C8';
  const secondaryColor = currentTheme.colors?.secondary || '#7765F6';
  const accentColor = currentTheme.colors?.accent || '#F99C22';
  const brandColor1 = currentTheme.colors?.['brand-1'] || '#3116C8';
  const brandColor2 = currentTheme.colors?.['brand-2'] || '#7765F6';
  const brandColor3 = currentTheme.colors?.['brand-3'] || '#F99C22';
  const backgroundColor = currentTheme.colors?.background || '#FFFFFF';
  const foregroundColor = currentTheme.colors?.foreground || '#000000';
  const cardColor = currentTheme.colors?.card || '#F5F8FA';
  const cardBorderColor = currentTheme.colors?.cardBorder || '#E5E7EB';

  // Parallax movement values
  const parallaxX = (mousePosition.x - 0.5) * 20;
  const parallaxY = (mousePosition.y - 0.5) * 20;

  const router = useRouter();

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12 overflow-hidden"
      style={{ 
        background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, ${primaryColor}10, ${backgroundColor}90)`,
        color: foregroundColor,
        position: 'relative'
      }}
    >
      {/* Moving background particles */}
      {particles.map((particle, index) => (
        <div
          key={index}
          className="particle absolute rounded-full pointer-events-none"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            background: index % 3 === 0 ? primaryColor : index % 3 === 1 ? secondaryColor : accentColor,
            opacity: particle.opacity,
            filter: 'blur(1px)',
            zIndex: 0
          }}
        />
      ))}

      {/* Floating gradient orbs */}
      <div 
        className="absolute opacity-20 rounded-full pointer-events-none animate-float-slow"
        style={{
          width: '300px',
          height: '300px',
          left: '15%',
          top: '20%',
          background: `radial-gradient(circle at center, ${brandColor1}, transparent 70%)`,
          transform: `translate(${parallaxX * 0.3}px, ${parallaxY * 0.3}px)`,
          zIndex: 0
        }}
      />
      <div 
        className="absolute opacity-20 rounded-full pointer-events-none animate-float-medium"
        style={{
          width: '250px',
          height: '250px',
          right: '15%',
          bottom: '15%',
          background: `radial-gradient(circle at center, ${brandColor2}, transparent 70%)`,
          transform: `translate(${-parallaxX * 0.2}px, ${-parallaxY * 0.2}px)`,
          zIndex: 0
        }}
      />
      <div 
        className="absolute opacity-20 rounded-full pointer-events-none animate-float-fast"
        style={{
          width: '200px',
          height: '200px',
          right: '25%',
          top: '15%',
          background: `radial-gradient(circle at center, ${brandColor3}, transparent 70%)`,
          transform: `translate(${-parallaxX * 0.4}px, ${-parallaxY * 0.4}px)`,
          zIndex: 0
        }}
      />

      <div className={`text-center max-w-4xl mx-auto relative z-10 transition-all duration-1000 transform ${animate ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        {/* 404 Text */}
        <div className="relative mb-12">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <span 
              style={{ 
                fontSize: '24rem', 
                fontWeight: 800,
                color: brandColor1,
                transform: `translate(${parallaxX * 0.6}px, ${parallaxY * 0.6}px)`,
                transition: 'transform 0.1s ease-out',
                textShadow: `0 0 120px ${brandColor1}80`
              }}
              className="select-none animate-pulse"
            >
              404
            </span>
          </div>
          
          <div className="relative">
            <Header1 className="mb-6 select-none">
              <span className="relative z-10">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600" 
                  style={{
                    fontSize: 'calc(3rem + 2vw)',
                    fontWeight: '800',
                    display: 'block',
                    textShadow: `0 5px 30px ${brandColor1}30`
                  }}>
                  404
                </span>
                <span style={{
                  fontSize: 'calc(1.75rem + 1vw)',
                  display: 'block',
                  background: `linear-gradient(135deg, ${brandColor1}, ${brandColor2})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginTop: '0.5rem'
                }}>
                  Page Not Found
                </span>
              </span>
            </Header1>

            <div 
              className="w-32 h-1.5 mx-auto rounded-full mb-8 animate-pulse"
              style={{ 
                background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`,
                boxShadow: `0 2px 10px ${primaryColor}40`
              }}
            />

            <Body1 
              className="mb-12 max-w-2xl mx-auto select-none"
            >
              <span style={{
                fontSize: 'calc(1rem + 0.2vw)',
                lineHeight: '1.8',
                textShadow: `0 2px 10px ${backgroundColor}80`,
                display: 'block'
              }}>
                We&apos;re currently crafting something amazing for this page.
                In the meantime, explore these other sections of our platform 
                designed with your health journey in mind:
              </span>
            </Body1>
          </div>
        </div>

        {/* Navigation Links */}
        {/* <div className="grid md:grid-cols-3 gap-8 mb-16">
          {navigationLinks.map((item, index) => (
            <Link 
              href={item.link || '/'} 
              key={index}
              className="group"
              style={{
                transform: `translateY(${animate ? '0' : '40px'})`,
                opacity: animate ? 1 : 0,
                transition: `transform 0.7s cubic-bezier(0.33, 1, 0.68, 1) ${0.3 + index * 0.1}s, opacity 0.7s ease ${0.3 + index * 0.1}s`,
              }}
            >
              <div 
                className="p-8 rounded-2xl transition-all duration-500 h-full"
                style={{ 
                  background: `linear-gradient(135deg, ${cardColor}, ${cardColor}cc)`,
                  border: `1px solid ${cardBorderColor}`,
                  boxShadow: `0 10px 30px rgba(0,0,0,0.05)`,
                  backdropFilter: 'blur(10px)',
                  transform: `perspective(1000px) rotateX(${(mousePosition.y - 0.5) * 5}deg) rotateY(${(mousePosition.x - 0.5) * 5}deg)`,
                  transformStyle: 'preserve-3d'
                }}
              >
                <div
                  className="card-shine absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(105deg, transparent 40%, ${brandColor2}20 45%, ${brandColor2}30 50%, ${brandColor2}20 55%, transparent 60%)`,
                    backgroundSize: '200% 100%',
                    backgroundPosition: '100% 0%',
                    animation: 'shine 3s infinite',
                  }}
                />

                <div className="relative">
                  <div 
                    className="w-12 h-12 rounded-full mb-4 flex items-center justify-center"
                    style={{ 
                      background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`,
                      boxShadow: `0 5px 15px ${primaryColor}40`,
                      transform: 'translateZ(20px)'
                    }}
                  >
                    {getIconForLink(item.title)}
                  </div>

                  <Header4 className="mb-3">
                    <span style={{ 
                      transform: 'translateZ(15px)',
                      transition: 'transform 0.3s ease, color 0.3s ease',
                      color: foregroundColor,
                      display: 'block'
                    }}>
                      {item.title}
                    </span>
                  </Header4>

                  <div 
                    className="w-10 h-0.5 rounded-full mb-4 transition-all duration-300 group-hover:w-full"
                    style={{ 
                      background: `linear-gradient(to right, ${primaryColor}, ${primaryColor}00)`,
                      transform: 'translateZ(15px)'
                    }}
                  />

                  <Body2 className="transition-colors duration-300">
                    <span style={{ 
                      color: currentTheme.colors?.['text secondary'] || '#6B7280',
                      transform: 'translateZ(10px)',
                      display: 'block'
                    }}>
                      {getDescriptionForLink(item.title)}
                    </span>
                  </Body2>
                </div>
              </div>
            </Link>
          ))}
        </div> */}

        {/* Back to Home Button */}
        <PrimaryButton onClick={()=>router.push('/')}>
          
                Back To Home Page
         
        </PrimaryButton>
      </div>

      {/* Add global styles for animations */}
      <style jsx global>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes shine {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 6s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
        
        .animate-pulse {
          animation: pulse 6s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.08; }
          50% { opacity: 0.15; }
        }
      `}</style>
    </div>
  );
}

function getDescriptionForLink(title: string): string {
  switch (title) {
    case 'Services':
      return 'Explore our comprehensive range of healthcare services tailored to your unique health needs';
    case 'How it works':
      return 'Learn about our seamless process designed to make your healthcare journey smooth and effective';
    case 'Healthcare Companion':
      return 'Discover your AI-powered personal health assistant that provides guidance and support 24/7';
    default:
      return '';
  }
}

function getIconForLink(title: string): React.ReactNode {
  switch (title) {
    case 'Services':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      );
    case 'How it works':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case 'Healthcare Companion':
      return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
      );
    default:
      return null;
  }
}

export default Page404;