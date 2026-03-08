"use client";

import Link from "next/link";

const collections = [
  {
    name: "Ronaq-E-Eid",
    href: "#ronaq",
    image: "https://images.unsplash.com/photo-1588117305388-c2631a279f82?w=400&q=80",
  },
  {
    name: "Shab-E-Eid",
    href: "#shab",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80",
  },
  {
    name: "Chandni Raat",
    href: "#chandni",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&q=80",
  },
  {
    name: "Sardiyon ki Shaam",
    href: "#sardiyon",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&q=80",
  },
  {
    name: "Paranda",
    href: "#paranda",
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&q=80",
  },
  {
    name: "Mehndi Lagai",
    href: "#mehndi",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80",
  },
  {
    name: "Baat Pakki",
    href: "#baat",
    image: "https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=400&q=80",
  },
  {
    name: "Meethi Eid",
    href: "#meethi",
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=400&q=80",
  },
  {
    name: "Behnon ki Eid",
    href: "#behno",
    image: "https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=400&q=80",
  },
  {
    name: "Moseeqi",
    href: "#moseeqi",
    image: "https://images.unsplash.com/photo-1603184017584-d84f0c8e9a87?w=400&q=80",
  },
  {
    name: "Raqs-e-Mughal",
    href: "#raqs",
    image: "https://images.unsplash.com/photo-1615346959423-e6e0d74fad91?w=400&q=80",
  },
  {
    name: "Baharaan",
    href: "#baharaan",
    image: "https://images.unsplash.com/photo-1614251055880-ee96e4803393?w=400&q=80",
  },
  {
    name: "Dupatta",
    href: "#dupatta",
    image: "https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?w=400&q=80",
  },
  {
    name: "Bottoms",
    href: "#bottoms",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=400&q=80",
  },
];

export default function CollectionCategories() {
  return (
    <section className="py-10 md:py-14 bg-[#fdfaf7]">
      <div className="px-4 md:px-8">
        {/* Section heading */}
        <div className="text-center mb-8">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#b8935a] font-sans font-light mb-2">
            Browse
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#2c1a0e] font-light">
            Our Collections
          </h2>
        </div>

        {/* Scrollable row on mobile, wrapped grid on desktop */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 md:grid md:grid-cols-7 md:gap-4 md:overflow-visible md:pb-0 lg:grid-cols-7">
          {collections.map((col) => (
            <Link
              key={col.name}
              href={col.href}
              className="flex-shrink-0 flex flex-col items-center gap-2 group"
            >
              <div className="w-[100px] h-[100px] md:w-full md:aspect-square rounded-full overflow-hidden border-2 border-transparent group-hover:border-[#b8935a] transition-all duration-300 md:rounded-none md:border-0">
                <img
                  src={col.image}
                  alt={col.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <span className="text-[10px] md:text-[11px] text-center font-sans font-medium tracking-widest uppercase text-[#2c1a0e] group-hover:text-[#b8935a] transition-colors leading-tight">
                {col.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
