import React from "react";
import {Body1, Body3,} from "../typography";
import Image from "next/image";
import {PrimaryButton} from "@/app/components/common/buttons";
import Header5 from "@/app/components/common/typography/Header5";
import { useRouter } from 'next/navigation';
import LinkButton from "@/app/components/common/buttons/LinkButton";
import {bookingBaseUrl} from "@/app/enum";
import {ServicesList} from "@/app/types";
import ComingSoonBadge from "@/app/components/common/ComingSoonBadge";
import {getProfessionImagePath} from "@/app/utils/profession-image-maper";
import { useGTM } from '@/app/hooks/useGTM';

interface ServiceCardProps {
  card: ServicesList;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ card }) => {
  const router = useRouter();
  const { trackServiceView, trackButtonClick, trackCustomEvent } = useGTM();
  // Helper to slugify the card title
  const getSlug = (title?: string) =>
    (title || '')
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '') // remove non-alphanumeric except space and dash
      .trim()
      .replace(/\s+/g, '-') // replace spaces with dashes
      .replace(/-+/g, '-'); // collapse multiple dashes

  const handleLearnMore = () => {
    const slug = getSlug(card.name);
    
    // Track service view
    trackServiceView(card.name || 'Unknown Service', 'Healthcare');
    trackButtonClick('learn_more_service', '/services');
    trackCustomEvent('service_card_click', {
      service_name: card.name,
      service_slug: slug,
      action: 'learn_more',
      service_available: card.serviceAvailableInThePlatform
    });
    
    router.push(`/services/${slug}`);
  };

  const handleBookNow = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()
    const slug = getSlug(card.name);
    // Track booking action
    trackButtonClick('book_now_service', '/services');
    trackCustomEvent('service_booking_initiated', {
      service_name: card.name,
      service_slug: card.slug,
      min_price: minPrice,
      service_count: serviceCount,
      service_available: card.serviceAvailableInThePlatform
    });
    router.push(`/services/${slug}`);
    //router.push(`${bookingBaseUrl+ "/practitioner/" + (card.slug || '')}`);
  };

  // Calculate pricing from events (non-guest events only)
  const availableEvents = card.events || [];
  const minPrice = availableEvents.length > 0 ? Math.min(...availableEvents.map(e => e.price).filter(price => price > 0)) : 0;

  // Get service count
  const serviceCount = card.events?.length || 0;

  return (
    <div onClick={handleLearnMore} className="relative group cursor-pointer flex flex-col p-3 sm:p-4 md:p-5 bg-white rounded-xl sm:rounded-2xl md:rounded-3xl overflow-visible border border-opacity-20 hover:border-opacity-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
      {/* Coming Soon Badge */}
      {!card.serviceAvailableInThePlatform && (
        <ComingSoonBadge />
      )}
      
      <div className="relative h-32 sm:h-36 md:h-40 lg:h-48 w-full overflow-hidden rounded-lg sm:rounded-xl">
        <Image
          src={"/images/service-images/"+getProfessionImagePath(card.name, 'Default',card.serviceAvailableInThePlatform)}
          alt={card.name || ''}
          fill
          className="object-cover"
        />
      </div>

      <div className="pt-3 sm:pt-4 md:pt-6 pb-2 flex flex-col flex-grow">
        <Header5 className="font-bold mb-1 sm:mb-2">
          {card.name}
        </Header5>
        
        {/* Service Count Badge */}
        <div className="flex gap-1">
          <Body3>
            {serviceCount} {serviceCount === 1 ? 'Service' : 'Services'}
          </Body3>


          <Body3 className="font-bold">
            starting from
          </Body3>
          <div className="flex gap-4 items-center mb-3 sm:mb-4">
            <Body3 className="text-[#3116C8]">${minPrice.toFixed(0)}</Body3>
          </div>
        </div>

        {/* Buttons: Always visible on mobile, transition on hover for larger screens */}
        <div>
          {/* Mobile: always visible */}
          <div className="flex gap-3 mt-auto sm:hidden">
            {card.serviceAvailableInThePlatform ? (
              <>
                <PrimaryButton onClick={(e)=>handleBookNow(e)} >
                  Book Now
                </PrimaryButton>
                <LinkButton onClick={handleLearnMore}>
                  Learn More
                </LinkButton>
              </>
            ) : (
              <div className="w-full text-center">
                <div className="bg-gray-200 text-gray-700 px-[20px] py-[16px] rounded-full font-bold inline-block">
                  <Body3>Coming Soon</Body3>
                </div>
              </div>
            )}
          </div>
          {/* Desktop: fade/slide on hover */}
          <div className="mt-auto transition-all duration-300 max-h-0 opacity-0 translate-y-2 group-hover:max-h-40 group-hover:opacity-100 group-hover:translate-y-0 overflow-hidden hidden sm:block">
            {card.serviceAvailableInThePlatform ? (
              <div className="flex gap-3">
                <PrimaryButton onClick={(e)=>handleBookNow(e)}>
                  Book Now
                </PrimaryButton>
                {/* <LinkButton onClick={handleLearnMore}>
                  Learn More
                </LinkButton> */}
              </div>
            ) : (
              <div className="w-full text-center">
                <div className="bg-gray-200 text-gray-700 px-[20px] py-[16px] rounded-full font-bold inline-block">
                  <Body3>Coming Soon</Body3>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard; 