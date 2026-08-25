import React, { useState, useEffect } from "react";
import { ArrowRight, Download, MapPin } from "lucide-react";

interface HeroProps {
  onOpenEnquiry: () => void;
  onRequestDownload?: () => void;
}

export default function Hero({ onOpenEnquiry, onRequestDownload }: HeroProps) {
  const heroImages = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpg"];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="overview"
      className="relative w-full h-[600px] md:h-[800px] mt-20 bg-marble flex items-center justify-start overflow-hidden"
    >
      {/* Background Images */}
      {heroImages.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${src}')` }}
        />
      ))}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#1b1b1d]/90 via-[#1b1b1d]/50 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#1b1b1d]/60 via-transparent to-transparent pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start text-left pt-20">
        <span className="font-body text-xs md:text-sm font-bold text-[#d4b778] uppercase tracking-[0.25em] mb-4">
          ADARSH SAVANA — PHASE 2
        </span>

        <h1 className="font-display text-4xl sm:text-5xl md:text-[64px] text-white font-bold leading-[1.1] mb-6 max-w-2xl drop-shadow-md">
          A New Chapter of<br className="hidden sm:inline" /> Space, Nature &amp; Possibility
        </h1>

        <p className="font-body text-sm sm:text-base md:text-lg text-white/90 leading-relaxed max-w-xl mb-8 drop-shadow-sm">
          Discover premium plotted living in North Bengaluru, thoughtfully planned across 24 acres with 250+ plots, lifestyle amenities and the freedom to build a home that’s truly yours.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 mb-10">
          <div className="font-body text-sm sm:text-base text-white font-bold drop-shadow-md">
            Plots from 1200 Sq.Ft. | ₹99.99 Lakhs Onwards*
          </div>
          <div className="hidden sm:block w-[1px] h-6 bg-white/30"></div>
          <div className="font-body text-sm sm:text-base text-white/90 flex items-center gap-1.5 drop-shadow-md">
            <MapPin className="w-4 h-4 text-[#d4b778]" />
            Off International Airport Road
          </div>
        </div>

        <button
          onClick={onOpenEnquiry}
          className="bg-navy-dark text-white font-body text-xs md:text-sm font-bold tracking-widest uppercase px-10 py-4 hover:bg-navy-primary transition-colors shadow-lg rounded-sm"
        >
          BOOK A SITE VISIT
        </button>
      </div>
    </section>
  );
}
