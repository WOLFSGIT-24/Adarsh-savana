import React, { useState, useEffect } from "react";
import { amenitiesData } from "../data";

export default function Amenities() {
  const [activeTab, setActiveTab] = useState(0);
  const [currentSlideIdx, setCurrentSlideIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const activeLevel = amenitiesData[activeTab];
  const slideImages = activeLevel.images || [activeLevel.imageUrl];

  useEffect(() => {
    setCurrentSlideIdx(0);
  }, [activeTab]);

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setCurrentSlideIdx((prev) => (prev + 1) % slideImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [activeTab, isHovered, slideImages.length]);

  return (
    <section id="amenities" className="w-full py-12 md:py-16 bg-marble text-charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-body text-xs font-bold text-navy-primary uppercase tracking-[0.25em] block">
            LIFESTYLE AMENITIES
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-navy-primary font-semibold leading-tight sm:whitespace-nowrap">
            An Elite Lifestyle, Beyond Your Front Door
          </h2>
          <div className="h-[2px] w-16 bg-navy-primary mx-auto" />
          <p className="font-body text-sm md:text-base text-gray-text leading-relaxed max-w-2xl mx-auto">
            Adarsh Savana brings together spaces designed for recreation, wellness, connection and everyday enjoyment. From active sports and fitness zones to tranquil gardens, children's spaces and community areas, there’s something thoughtfully planned for every member of the family.
          </p>
        </div>

        {/* Layout Container */}
        <div className="max-w-5xl mx-auto">
          
          {/* Visual Card with Text Overlay */}
          <div 
            className="w-full relative rounded-2xl overflow-hidden shadow-xl min-h-[400px] sm:min-h-[460px] flex flex-col justify-end p-6 sm:p-10 text-white group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Background Image Slider */}
            <div className="absolute inset-0 z-0">
              {slideImages.map((src, sIdx) => (
                <img
                  key={src}
                  src={src}
                  alt={`${activeLevel.title} slide ${sIdx + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                    sIdx === currentSlideIdx ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
