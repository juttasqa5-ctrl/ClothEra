"use client";

import { Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function AnnouncementBar() {
  return (
    <div className="bg-[#2c1a0e] text-[#f8f4ef] text-xs font-sans font-light">
      {/* Top contact strip */}
      <div className="flex items-center justify-between px-4 md:px-8 py-2 border-b border-[#4a3020]">
        <div className="flex items-center gap-4">
          <a
            href="tel:+923152006371"
            className="flex items-center gap-1.5 hover:text-[#b8935a] transition-colors"
          >
            <Phone size={11} />
            <span className="hidden sm:inline">+92-315-200-6371</span>
          </a>
          <a
            href="mailto:info@clothera.com"
            className="flex items-center gap-1.5 hover:text-[#b8935a] transition-colors"
          >
            <Mail size={11} />
            <span className="hidden sm:inline">info@clothera.com</span>
          </a>
        </div>

        <div className="flex items-center gap-2 text-[10px] tracking-widest uppercase text-[#b8935a]">
          <span>PKR</span>
        </div>
      </div>

      {/* Scrolling promo bar */}
      <div className="overflow-hidden py-2 relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="inline-flex items-center gap-6 px-6 text-[11px] tracking-widest uppercase">
              <span>Free Shipping on Orders Above PKR 12,000</span>
              <span className="text-[#b8935a]">✦</span>
              <Link href="#sale" className="font-medium text-[#b8935a] hover:underline">
                Mazedar Sale is Live Now!
              </Link>
              <span className="text-[#b8935a]">✦</span>
              <span>New Arrivals: Eid Edit '26</span>
              <span className="text-[#b8935a]">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
