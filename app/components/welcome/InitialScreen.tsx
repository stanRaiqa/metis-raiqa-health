'use client';

import React, { useState, useRef, useEffect } from 'react';
import {InitialScreen as Props} from "@/sanity.types";

interface CarouselItem {
    id: number;
    title: string;
    description: string;
    image?: string;
}

const carouselItems: CarouselItem[] = [
    {
        id: 1,
        title: "Welcome to Raiqa Health",
        description: "Your trusted partner in healthcare. Connect with qualified practitioners and get the care you deserve.",
    },
    {
        id: 2,
        title: "Easy Booking",
        description: "Book appointments with healthcare professionals in just a few clicks. No more waiting on hold.",
    },
    {
        id: 3,
        title: "Quality Care",
        description: "Access to verified healthcare practitioners who are committed to providing the best care possible.",
    }
];

function InitialScreen(block: Props) {
    const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);


    const handleContinue = () => {
        if (currentCarouselIndex < carouselItems.length - 1) {
            setCurrentCarouselIndex(currentCarouselIndex + 1);
        } else {
            // Handle completion - you can navigate to the next page or trigger a callback
        }
    };

    const handleDotClick = (index: number) => {
        setCurrentCarouselIndex(index);
    };


    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-6">
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
                {/* Carousel Content */}
                <div className="min-h-[300px] flex flex-col items-center justify-center mb-8">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            {carouselItems[currentCarouselIndex].title}
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            {carouselItems[currentCarouselIndex].description}
                        </p>
                    </div>
                </div>

                {/* Navigation Dots */}
                <div className="flex justify-center space-x-2 mb-8">
                    {carouselItems.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentCarouselIndex
                                    ? 'bg-blue-600 scale-110'
                                    : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                            aria-label={`Go to step ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Continue Button */}
                <button
                    onClick={handleContinue}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 transform hover:scale-105"
                >
                    {currentCarouselIndex === carouselItems.length - 1 ? 'Get Started' : 'Continue'}
                </button>
            </div>
        </div>
    );
}

export default InitialScreen;