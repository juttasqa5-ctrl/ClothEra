"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1400&q=80",
    mobileImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80",
    title: "Eid Edit '26",
    subtitle: "Celebrate in Grace",
    cta: "Shop Now",
    href: "#eid",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=1400&q=80",
    mobileImage: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=800&q=80",
    title: "Chandni Raat",
    subtitle: "Moonlit Elegance",
    cta: "Explore Collection",
    href: "#chandni",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=1400&q=80",
    mobileImage: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80",
    title: "Mazedar Sale",
    subtitle: "Up to 50% Off",
    cta: "Shop the Sale",
    href: "#sale",
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      goNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const goNext = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => setAnimating(false), 600);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const goPrev = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => setAnimating(false), 600);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full overflow-hidden" style={{ height: "clamp(400px, 75vh, 750px)" }}>
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-end md:justify-center px-8 md:px-16 lg:px-24 pb-16 md:pb-0">
            <div
              className={`max-w-lg transition-all duration-700 ${
                i === current
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <p className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-[#e8d5c4] font-sans font-light mb-3">
                New Collection
              </p>
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-light leading-tight mb-3">
                {slide.title}
              </h1>
              <p className="font-serif italic text-lg md:text-2xl text-[#e8d5c4] font-light mb-8">
                {slide.subtitle}
              </p>
              <Link
                href={slide.href}
                className="inline-block bg-transparent border border-white text-white text-[11px] tracking-[0.3em] uppercase font-sans font-medium px-8 py-3.5 hover:bg-white hover:text-[#2c1a0e] transition-all duration-300"
              >
                {slide.cta}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={goPrev}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 md:w-11 md:h-11 border border-white/60 text-white flex items-center justify-center hover:bg-white hover:text-[#2c1a0e] transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={goNext}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 md:w-11 md:h-11 border border-white/60 text-white flex items-center justify-center hover:bg-white hover:text-[#2c1a0e] transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={18} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 ${
              i === current
                ? "w-8 h-1.5 bg-[#b8935a]"
                : "w-1.5 h-1.5 bg-white/60 hover:bg-white"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
