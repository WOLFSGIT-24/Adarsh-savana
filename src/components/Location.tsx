import React from "react";
import { Navigation } from "lucide-react";
import { locationsData } from "../data";

interface LocationProps {
  onOpenEnquiry: () => void;
}

export default function Location({ onOpenEnquiry }: LocationProps) {
  const renderMap = () => (
    <iframe
      src="https://maps.google.com/maps?q=Adarsh%20Savana&t=&z=14&ie=UTF8&iwloc=&output=embed"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Adarsh Savana Google Map"
      className="w-full h-full"
    ></iframe>
  );

  return (
    <section id="location" className="w-full py-12 md:py-16 bg-marble text-charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Informational Connectivity details */}
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="text-center lg:text-left">
              <span className="font-body text-xs font-bold text-navy-primary uppercase tracking-[0.25em] block">
                PRIME LOCATION
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-[28px] xl:text-[32px] sm:whitespace-nowrap text-navy-primary font-semibold leading-tight mt-4">
                Well Connected to What Matters
              </h2>
            </div>

            {/* Mobile Only Google Map */}
            <div className="lg:hidden w-full h-[300px] sm:h-[380px] rounded-xl overflow-hidden shadow-xl border border-navy-primary/10 my-4">
              {renderMap()}
            </div>

            {/* Destination Hub List without Driving Times */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-bold text-navy-primary uppercase tracking-wider mb-3">
                <span>Live close to what matters today</span>
              </div>

              <div className="grid grid-cols-1 gap-2.5">
                {locationsData.map((dest) => (
                  <div
                    key={dest.id}
                    className="flex items-center gap-3 sm:gap-4 p-3.5 bg-white rounded-lg shadow-sm border border-navy-primary/5 hover:border-gold/30 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-9 h-9 shrink-0 rounded-full bg-navy-primary/5 flex items-center justify-center text-navy-primary">
                      <span className="material-symbols-outlined text-[18px] text-navy-primary">
                        {dest.icon}
                      </span>
                    </div>
                    <span className="font-body text-sm font-semibold text-navy-primary">
                      {dest.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 text-center lg:text-left">
              <button 
                onClick={onOpenEnquiry}
                className="bg-navy-dark text-white font-body text-xs font-bold tracking-widest uppercase px-8 py-4.5 hover:bg-navy-primary transition-colors shadow-lg rounded-sm cursor-pointer"
              >
                Explore Location Advantages
              </button>
            </div>

          </div>

          {/* Desktop Only Google Map */}
          <div className="hidden lg:block lg:col-span-7 rounded-xl shadow-2xl overflow-hidden border border-navy-primary/10 w-full h-[500px]">
            {renderMap()}
          </div>

        </div>
      </div>
    </section>
  );
}
