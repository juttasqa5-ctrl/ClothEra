"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingBag, User, Menu, X, Heart } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Mazedar Sale", href: "#sale", highlight: true },
  { label: "Eid Edit '26", href: "#eid" },
  { label: "Chandni Raat", href: "#chandni" },
  { label: "Best Sellers", href: "#bestsellers" },
  { label: "Festive Wear", href: "#festive" },
  { label: "Lawn", href: "#lawn" },
  { label: "Velvet", href: "#velvet" },
  { label: "Accessories", href: "#accessories" },
  { label: "Track Order", href: "#track" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#fdfaf7] shadow-sm border-b border-[#e8d5c4]">
      {/* Logo + Icons row */}
      <div className="flex items-center justify-between px-4 md:px-8 py-3 md:py-4">
        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#2c1a0e] p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Logo */}
        <Link href="/" className="flex flex-col items-center mx-auto md:mx-0">
          <span className="font-serif text-3xl md:text-4xl font-light tracking-[0.15em] text-[#2c1a0e] leading-none">
            ClothEra
          </span>
          <span className="text-[8px] tracking-[0.4em] uppercase text-[#b8935a] font-sans font-light mt-0.5">
            By Elegance
          </span>
        </Link>

        {/* Icons */}
        <div className="flex items-center gap-2 md:gap-4">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-[#2c1a0e] hover:text-[#b8935a] transition-colors p-1"
            aria-label="Search"
          >
            <Search size={18} />
          </button>
          <Link
            href="#account"
            className="hidden md:block text-[#2c1a0e] hover:text-[#b8935a] transition-colors p-1"
            aria-label="Account"
          >
            <User size={18} />
          </Link>
          <Link
            href="#wishlist"
            className="text-[#2c1a0e] hover:text-[#b8935a] transition-colors p-1"
            aria-label="Wishlist"
          >
            <Heart size={18} />
          </Link>
          <Link
            href="#cart"
            className="relative text-[#2c1a0e] hover:text-[#b8935a] transition-colors p-1"
            aria-label="Cart"
          >
            <ShoppingBag size={18} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#b8935a] text-white text-[9px] rounded-full flex items-center justify-center font-sans font-medium">
              0
            </span>
          </Link>
        </div>
      </div>

      {/* Search bar */}
      {searchOpen && (
        <div className="px-4 md:px-8 pb-3 animate-[fadeUp_0.2s_ease_forwards]">
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search for products..."
              autoFocus
              className="w-full border border-[#e8d5c4] bg-[#f8f4ef] rounded-none px-4 py-2.5 text-sm font-sans text-[#2c1a0e] placeholder-[#9c7b65] focus:outline-none focus:border-[#b8935a] transition-colors"
            />
            <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9c7b65]" />
          </div>
        </div>
      )}

      {/* Desktop nav */}
      <nav className="hidden md:block border-t border-[#e8d5c4] bg-[#fdfaf7]">
        <ul className="flex items-center justify-center gap-0 px-8 overflow-x-auto no-scrollbar">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`inline-block px-3.5 py-3 text-[11px] tracking-widest uppercase font-sans font-medium transition-colors whitespace-nowrap border-b-2 border-transparent hover:border-[#b8935a] hover:text-[#b8935a] ${
                  link.highlight
                    ? "text-[#b8935a]"
                    : "text-[#2c1a0e]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#fdfaf7] border-t border-[#e8d5c4] z-50 shadow-lg max-h-[80vh] overflow-y-auto">
          <ul className="py-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-6 py-3 text-[12px] tracking-widest uppercase font-sans font-medium border-b border-[#f0e8e0] transition-colors hover:bg-[#f8f4ef] hover:text-[#b8935a] ${
                    link.highlight ? "text-[#b8935a]" : "text-[#2c1a0e]"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="px-6 py-4 flex gap-4">
              <Link href="#account" className="flex items-center gap-2 text-[12px] tracking-widest uppercase font-sans text-[#2c1a0e]">
                <User size={16} /> Account
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
