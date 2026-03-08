import Link from "next/link";
import { Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact Us", href: "#contact" },
  { label: "Careers", href: "#careers" },
  { label: "Customer Support", href: "#support" },
];

const policies = [
  { label: "Shipping Policy", href: "#shipping" },
  { label: "Refund & Exchange Policy", href: "#refund" },
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms and Service", href: "#terms" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1108] text-[#c9b09a]">
      {/* Main footer */}
      <div className="px-4 md:px-8 py-14 md:py-20 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand column */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-serif text-3xl font-light tracking-[0.15em] text-[#f8f4ef]">
                ClothEra
              </span>
              <span className="block text-[8px] tracking-[0.4em] uppercase text-[#b8935a] font-sans font-light mt-0.5">
                By Elegance
              </span>
            </Link>
            <p className="font-sans text-[12px] leading-relaxed text-[#9c7b65] mb-6 max-w-xs">
              Crafting beautiful and affordable women's clothing that blends tradition with contemporary elegance.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              <a
                href="#instagram"
                className="w-8 h-8 border border-[#4a3020] flex items-center justify-center text-[#9c7b65] hover:border-[#b8935a] hover:text-[#b8935a] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={14} />
              </a>
              <a
                href="#facebook"
                className="w-8 h-8 border border-[#4a3020] flex items-center justify-center text-[#9c7b65] hover:border-[#b8935a] hover:text-[#b8935a] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={14} />
              </a>
              <a
                href="#youtube"
                className="w-8 h-8 border border-[#4a3020] flex items-center justify-center text-[#9c7b65] hover:border-[#b8935a] hover:text-[#b8935a] transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={14} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#f8f4ef] font-medium mb-5">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+923152006371"
                  className="flex items-center gap-2.5 text-[12px] font-sans text-[#9c7b65] hover:text-[#b8935a] transition-colors group"
                >
                  <Phone size={13} className="text-[#b8935a]" />
                  (+92) 315-200-6371
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@clothera.com"
                  className="flex items-center gap-2.5 text-[12px] font-sans text-[#9c7b65] hover:text-[#b8935a] transition-colors"
                >
                  <Mail size={13} className="text-[#b8935a]" />
                  info@clothera.com
                </a>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#f8f4ef] font-medium mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[12px] font-sans text-[#9c7b65] hover:text-[#b8935a] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-sans text-[11px] tracking-[0.3em] uppercase text-[#f8f4ef] font-medium mb-5">
              Policies
            </h4>
            <ul className="space-y-2.5">
              {policies.map((policy) => (
                <li key={policy.label}>
                  <Link
                    href={policy.href}
                    className="text-[12px] font-sans text-[#9c7b65] hover:text-[#b8935a] transition-colors"
                  >
                    {policy.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#2c1a0e] px-4 md:px-8 py-5">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[10px] font-sans text-[#6b5744] text-center">
            ©2026. All Rights Reserved by{" "}
            <Link href="/" className="text-[#b8935a] hover:underline">
              ClothEra
            </Link>
          </p>
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-sans text-[#6b5744]">We Accept:</span>
            <div className="flex gap-1.5">
              {["VISA", "MC", "COD"].map((method) => (
                <span
                  key={method}
                  className="text-[9px] border border-[#4a3020] text-[#9c7b65] px-2 py-0.5 font-sans"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile bottom nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#fdfaf7] border-t border-[#e8d5c4] flex items-center justify-around py-3 px-4 shadow-lg">
        <Link href="/" className="flex flex-col items-center gap-1 text-[9px] font-sans text-[#2c1a0e] tracking-widest uppercase">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          Home
        </Link>
        <Link href="#" className="flex flex-col items-center gap-1 text-[9px] font-sans text-[#2c1a0e] tracking-widest uppercase">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          Menu
        </Link>
        <Link href="#shop" className="flex flex-col items-center gap-1 text-[9px] font-sans text-[#b8935a] tracking-widest uppercase">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
          Shop
        </Link>
        <Link href="#account" className="flex flex-col items-center gap-1 text-[9px] font-sans text-[#2c1a0e] tracking-widest uppercase">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          Account
        </Link>
        <Link href="#cart" className="flex flex-col items-center gap-1 text-[9px] font-sans text-[#2c1a0e] tracking-widest uppercase relative">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/></svg>
          Cart
        </Link>
      </div>
    </footer>
  );
}
