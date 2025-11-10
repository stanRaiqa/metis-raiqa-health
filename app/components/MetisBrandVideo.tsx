"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Volume2, VolumeX } from "lucide-react";
import { Header2, Body1 } from "./common/typography";
import { PrimaryButton } from "./common/buttons";
import { bookingBaseUrl } from "../enum";

/**
 * MetisBrandVideo Component
 * Section showcasing Metis physical wellness with embedded brand video
 * - Standard 32px (px-8) horizontal padding
 * - Max-width: 1280px
 * - Two-column layout with video on the left
 */

export default function MetisBrandVideo() {
  const router = useRouter();
  const playerRef = useRef<any>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  useEffect(() => {
    // Load YouTube IFrame API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Create player when API is ready
    (window as any).onYouTubeIframeAPIReady = () => {
      playerRef.current = new (window as any).YT.Player('metis-youtube-player', {
        events: {
          onReady: () => {
            setIsPlayerReady(true);
          },
        },
      });
    };

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, []);

  const toggleMute = () => {
    if (playerRef.current && isPlayerReady) {
      if (isMuted) {
        playerRef.current.unMute();
        setIsMuted(false);
      } else {
        playerRef.current.mute();
        setIsMuted(true);
      }
    }
  };

  return (
    <section className="relative bg-brand-light py-16 lg:py-32 overflow-hidden border-t border-brand-neutral-light">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Brand Video */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-xl">
              <iframe
                id="metis-youtube-player"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/hajhm1sLFO4?autoplay=1&mute=1&controls=0&loop=1&playlist=hajhm1sLFO4&modestbranding=1&showinfo=0&rel=0&enablejsapi=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
              
              {/* Audio Control Button */}
              <button
                onClick={toggleMute}
                className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-black/10 hover:bg-brand-primary flex items-center justify-center text-white shadow-lg transition-all duration-300 hover:scale-110 z-10"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>
            </div>
          </motion.div>
          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Subtitle */}
            <p className="font-body text-base text-brand-forest italic">
              Metis
            </p>

            {/* Heading */}
            <Header2 className="text-brand-dark !font-medium ">
              Your Partner in Real Wellness
            </Header2>

            {/* Body Content */}
            <div className="space-y-4">
              <Body1 className="">
                At Metis by Raiqa Health, we strip away the confusion and bring
                back clarity, science, care, and real results. No quick fixes.
                No fad trends. Just personalized, doctor-guided care built
                around you. From your first consult to ongoing support, Metis
                makes your wellness journey simple, safe, and sustainable.
              </Body1>

              {/* <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-brand-primary mr-2">✓</span>
                  <span className="font-body text-brand-steel">
                    Expert-led physical wellness programs tailored to your goals
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-primary mr-2">✓</span>
                  <span className="font-body text-brand-steel">
                    Evidence-based treatments for sustainable health outcomes
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-primary mr-2">✓</span>
                  <span className="font-body text-brand-steel">
                    Continuous monitoring and progress tracking with our health team
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-primary mr-2">✓</span>
                  <span className="font-body text-brand-steel">
                    Holistic support combining fitness, nutrition, and lifestyle guidance
                  </span>
                </li>
              </ul> */}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <PrimaryButton href={bookingBaseUrl + "/form/metis/medical-weight-loss"}>
                Start Your Journey
              </PrimaryButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
