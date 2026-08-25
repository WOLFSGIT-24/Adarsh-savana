import React from "react";
import { projectSnapshot } from "../data";

interface FooterProps {
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
  onOpenBooking?: () => void;
  onRequestDownload?: () => void;
}

export default function Footer({ onOpenPrivacy, onOpenTerms, onOpenBooking, onRequestDownload }: FooterProps = {}) {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-[#494949] text-white pt-16 pb-24 md:pb-8 relative overflow-hidden font-body">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(254,214,91,0.05),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Top CTA Section */}
        <div className="text-center pb-16 border-b border-white/10 mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-medium text-white mb-6">
            Ready to experience <span className="italic text-gold font-light">Savana?</span>
          </h2>
          <button
            onClick={() => onRequestDownload ? onRequestDownload() : handleScrollTo("lead-capture-section")}
            className="bg-white text-navy-dark font-body text-xs font-bold tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#B6C6D3] transition-colors duration-300 cursor-pointer"
          >
            Download Brochure
          </button>
        </div>

        {/* Main Links & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">
          
          {/* Brand & Contact (Left) */}
          <div className="lg:col-span-5 space-y-8">
            <img
              src="/logo.png"
              alt="Adarsh Savana Logo"
              className="max-h-14 w-auto object-contain brightness-0 invert"
            />
            <div className="space-y-4 text-sm text-white/70 leading-relaxed max-w-sm">
              <p>
                Sales Lounge: Adarsh Savana,<br />
                Sy. No.100, Chapparkallu Main Road,<br />
                Hegganahalli, Devanahalli, Bengaluru - 562110
              </p>
              <div className="pt-2">
                <a href="tel:07019448585" className="block text-white hover:text-gold transition-colors font-semibold text-lg mb-1">
                  07019448585
                </a>
                <a href="mailto:Hello@therealconnect.co.in" className="block hover:text-gold transition-colors">
                  Hello@therealconnect.co.in
                </a>
              </div>
            </div>
          </div>

          {/* Navigation (Middle) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-body text-xs font-bold text-gold uppercase tracking-[0.2em]">
              Explore
            </h4>
            <ul className="space-y-3 text-sm text-white/70">
              {[
                { label: "Overview", id: "overview" },
                { label: "Amenities", id: "amenities" },
                { label: "Location", id: "location" },
                { label: "Gallery", id: "gallery" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleScrollTo(link.id)}
                    className="hover:text-white hover:translate-x-1 transition-all duration-300 cursor-pointer text-left focus:outline-none"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* RERA & Authorised Partner (Right) */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="font-body text-xs font-bold text-gold uppercase tracking-[0.2em]">
              Compliance
            </h4>
            <div className="bg-white/5 border border-white/10 p-5 rounded-sm backdrop-blur-sm space-y-2">
              <p className="text-xs text-white/60 uppercase tracking-wider">RERA Registration No:</p>
              <p className="text-sm font-semibold text-white tracking-wide">{projectSnapshot.rera}</p>
              <a href="https://rera.karnataka.gov.in/" target="_blank" rel="noopener noreferrer" className="text-xs text-gold hover:text-white transition-colors underline block mt-2">
                rera.karnataka.gov.in
              </a>
            </div>
            
            <div className="pt-2">
              <span className="font-body text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] block mb-1">
                Authorized Sales Partner
              </span>
              <p className="text-[11px] text-white/50">
                This website is operated by an authorized marketing partner for Adarsh Savana.
              </p>
            </div>
          </div>

        </div>

        {/* Detailed Legal Disclaimer */}
        <div className="mb-8">
          <details className="group cursor-pointer">
            <summary className="font-body text-[10px] font-bold text-white/50 hover:text-gold transition-colors uppercase tracking-[0.2em] flex items-center gap-2 focus:outline-none pb-4">
              View Legal Disclaimer
              <svg className="w-3 h-3 transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="pt-4 pb-2">
              <p className="text-[10px] text-white/40 leading-relaxed text-justify">
                Disclaimer: The images, renders, floor plans, and other details shown herein are only indicative and for representational purposes. The Promoter / Developer reserves the right to change any or all of these in the interest of the development, as per applicable provisions of law. Artist's impressions are used to illustrate amenities, specifications, lifestyle imagery, and other details. A tolerance of +/- 3% is possible in the unit areas on account of design and construction variances. All brands, fittings, and fixtures shown are subject to final decision of the project architect and developer. This electronic / printed material does not constitute an offer and/or contract of any type between the Developer and the recipient. No booking or allotment shall be deemed to have been made on the basis of this electronic / printed material. Any purchaser / lessee of this development shall be governed by the terms and conditions of the agreement for sale / lease entered into between the parties, and no details mentioned in this material shall in any way govern such transactions unless as may be otherwise expressly provided in the agreement for sale / lease by the Developer. The Developer does not warrant or assume any liability or responsibility for the accuracy or completeness of any information contained herein. Adarsh Savana is registered under the Real Estate (Regulation and Development) Act, 2016. RERA Registration No: <strong className="text-white/60">{projectSnapshot.rera}</strong>. You are required to verify all the details — including area, amenities, services, terms of sales and payments, and other relevant terms — independently with the Developer's authorised sales team only, by physically visiting the project site and the authorised website of RERA Karnataka at rera.karnataka.gov.in. You are requested NOT to visit any unauthorised or unverified website, broker (online / offline) to receive any information about Adarsh Savana or its sister concerns. This website is operated by The Real Connect, an authorised channel sales partner for Adarsh Savana. Marketing and sales support is provided solely in an authorised capacity. The Real Connect and its associates shall not be liable for any misrepresentation or discrepancies arising from information shared through unofficial or unauthorised channels.
              </p>
            </div>
          </details>
        </div>

        {/* Bottom Bar: Copyright & Policies */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-white/10 text-[11px] text-white/50">
          <p>© {new Date().getFullYear()} Adarsh Developers. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button 
              onClick={(e) => { e.preventDefault(); onOpenPrivacy?.(); }}
              className="hover:text-gold transition-colors focus:outline-none cursor-pointer"
            >
              Privacy Policy
            </button>
            <button 
              onClick={(e) => { e.preventDefault(); onOpenTerms?.(); }}
              className="hover:text-gold transition-colors focus:outline-none cursor-pointer"
            >
              Terms & Conditions
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
