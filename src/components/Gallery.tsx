import React from "react";

const images = [
  "/savana/savana_gallery_1.jpg",
  "/savana/savana_gallery_2.jpg",
  "/savana/savana_gallery_3.jpg",
  "/savana/savana_gallery_4.jpg",
  "/savana/savana_gallery_5.jpg",
  "/savana/savana_ch_entry.jpg",
  "/savana/savana_ch_badminton.jpg",
  "/savana/savana_ch_corridor.jpg",
  "/savana/savana_banner.jpg"
];

export default function Gallery() {

  return (
    <section id="gallery" className="w-full py-12 md:py-16 bg-marble text-charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-body text-xs font-bold text-navy-primary uppercase tracking-[0.25em] block">
            GALLERY
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-navy-primary font-semibold leading-tight">
            A Glimpse Into Life at Savana
          </h2>
          <p className="font-body text-sm md:text-base text-gray-text leading-relaxed">
            Explore the spaces that bring the Adarsh Savana lifestyle to life, from lush landscaped gardens and vibrant recreation zones to thoughtfully designed community spaces created for everyday moments, celebrations and connection.
          </p>
        </div>
      </div>

      {/* Marquee Animation Styles */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        /* Pause scrolling on touch/hover for better mobile interaction */
        .animate-marquee:active,
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Gallery Container - Infinite Scroll Marquee (Full Width) */}
      <div className="w-full overflow-hidden relative py-2 mt-4">
        <div className="animate-marquee gap-4 md:gap-6">
          {[...images, ...images].map((src, idx) => (
            <div 
              key={idx}
              className="flex-shrink-0 w-[70vw] sm:w-[45vw] md:w-[350px] aspect-[4/3] rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative group"
            >
              <img
                src={src}
                alt={`Gallery space ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
