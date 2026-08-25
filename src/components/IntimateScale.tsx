import React from "react";

interface IntimateScaleProps {
  onRequestDownload?: () => void;
}

export default function IntimateScale({ onRequestDownload }: IntimateScaleProps) {
  const highlights = [
    {
      title: "Freedom to Build",
      description: "Create a home that reflects your lifestyle, your priorities and your vision.",
    },
    {
      title: "A Tangible Asset",
      description: "Land offers a secure and tangible form of ownership with long-term potential.",
    },
    {
      title: "Built for Tomorrow",
      description: "Located in a high-growth development corridor, Savana is positioned around the future growth of North Bengaluru.",
    },
    {
      title: "A Family Legacy",
      description: "Today’s investment can become tomorrow’s family heirloom.",
    },
  ];

  const renderImage = () => (
    <div className="bg-champagne/40 rounded-2xl p-4 sm:p-6 w-full max-w-lg mx-auto shadow-2xl">
      <div className="relative overflow-hidden rounded-xl w-full aspect-square">
        <img
          src="/about.webp"
          alt="Adarsh Savana"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );

  return (
    <section className="w-full py-12 md:py-16 bg-marble overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Informational left section */}
          <div className="lg:col-span-6 space-y-4 text-center lg:text-left">
            <span className="font-body text-xs font-bold text-navy-primary uppercase tracking-[0.25em] block">
              AN INVESTMENT BEYOND FOUR WALLS
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-navy-primary font-semibold leading-tight">
              Build Today. Create Tomorrow.
            </h2>

            {/* Mobile Only Responsive Image */}
            <div className="lg:hidden w-full my-4">
              {renderImage()}
            </div>

            <p className="font-body text-sm md:text-base text-gray-text leading-relaxed pt-2">
              A plot is more than a piece of land. It is the freedom to build your home the way you want, when you want, while creating an asset that can become part of your family’s future.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-left">
              {highlights.map((item, idx) => (
                <div key={idx} className="bg-white/60 p-4 rounded-lg border border-gold-accent/20">
                  <h3 className="font-body text-sm font-bold text-navy-primary mb-1">
                    {item.title}
                  </h3>
                  <p className="font-body text-xs text-gray-text leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <div className="pt-2">
              {/* <button 
                onClick={onRequestDownload}
                className="inline-flex items-center gap-2 bg-transparent border border-navy-primary text-navy-primary font-body text-xs font-bold tracking-widest uppercase px-6 py-3.5 hover:bg-navy-primary hover:text-white transition-colors w-full sm:w-auto justify-center rounded-sm cursor-pointer"
              >
                Download Floor Plans
              </button> */}
            </div>
          </div>

          {/* Graphical Right Panel (Desktop Only) */}
          <div className="hidden lg:flex lg:col-span-6 relative justify-center items-center">
            {renderImage()}
          </div>

        </div>
      </div>
    </section>
  );
}
