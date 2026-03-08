"use client";

import { useState } from "react";
import { Play } from "lucide-react";

const spotlights = [
  {
    id: 1,
    thumbnail: "https://images.unsplash.com/photo-1614251055880-ee96e4803393?w=400&q=80",
    productImage: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=100&q=80",
    productName: "Zeenia - 3 pc",
    href: "#zeenia",
  },
  {
    id: 2,
    thumbnail: "https://images.unsplash.com/photo-1615346959423-e6e0d74fad91?w=400&q=80",
    productImage: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=100&q=80",
    productName: "Motia – 4 Pc",
    href: "#motia",
  },
  {
    id: 3,
    thumbnail: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80",
    productImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=100&q=80",
    productName: "Meena 3 PC",
    href: "#meena",
  },
  {
    id: 4,
    thumbnail: "https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=400&q=80",
    productImage: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=100&q=80",
    productName: "Meerub - 3PC",
    href: "#meerub",
  },
  {
    id: 5,
    thumbnail: "https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=400&q=80",
    productImage: "https://images.unsplash.com/photo-1588117305388-c2631a279f82?w=100&q=80",
    productName: "Mehnaaz - 3Pc",
    href: "#mehnaaz",
  },
  {
    id: 6,
    thumbnail: "https://images.unsplash.com/photo-1603184017584-d84f0c8e9a87?w=400&q=80",
    productImage: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=100&q=80",
    productName: "Kohra (3pc)",
    href: "#kohra",
  },
  {
    id: 7,
    thumbnail: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=400&q=80",
    productImage: "https://images.unsplash.com/photo-1614251055880-ee96e4803393?w=100&q=80",
    productName: "Mehrbano",
    href: "#mehrbano",
  },
  {
    id: 8,
    thumbnail: "https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?w=400&q=80",
    productImage: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=100&q=80",
    productName: "Aarzoo - 2pc",
    href: "#aarzoo",
  },
];

export default function CustomerSpotlight() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-14 md:py-20 bg-[#2c1a0e]">
      <div className="px-4 md:px-8 max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#b8935a] font-sans font-light mb-2">
            Real Style
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#f8f4ef] font-light">
            Customer Spotlight
          </h2>
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {spotlights.map((item) => (
            <div
              key={item.id}
              className="relative group cursor-pointer overflow-hidden"
              style={{ aspectRatio: "9/16" }}
              onMouseEnter={() => setHovered(item.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={item.thumbnail}
                alt={item.productName}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors" />

              {/* Play button */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                  hovered === item.id ? "opacity-100" : "opacity-70"
                }`}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white flex items-center justify-center bg-white/20 backdrop-blur-sm">
                  <Play size={16} className="text-white fill-white ml-0.5" />
                </div>
              </div>

              {/* Product info at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center gap-2">
                  <img
                    src={item.productImage}
                    alt={item.productName}
                    className="w-8 h-8 object-cover border border-white/20"
                  />
                  <div>
                    <p className="text-white text-[10px] font-sans font-medium leading-tight">
                      {item.productName}
                    </p>
                    <a
                      href={item.href}
                      className="text-[#b8935a] text-[9px] font-sans tracking-wider hover:underline"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
