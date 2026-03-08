import Link from "next/link";

const banners = [
  {
    title: "Raqs-e-Mughal",
    subtitle: "Fresh design crafted with care and love.",
    href: "#raqs",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80",
    cta: "Shop Collection",
  },
  {
    title: "Baat Pakki",
    subtitle: "Launching ClothEra's famous celebration dress",
    href: "#baat",
    image: "https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=800&q=80",
    cta: "Shop Collection",
  },
];

export default function PromoBanners() {
  return (
    <section className="py-8 md:py-12 bg-[#f8f4ef]">
      <div className="px-4 md:px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {banners.map((banner) => (
            <Link
              key={banner.title}
              href={banner.href}
              className="relative group overflow-hidden block"
              style={{ aspectRatio: "16/9" }}
            >
              <img
                src={banner.image}
                alt={banner.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <h3 className="font-serif text-2xl md:text-3xl text-white font-light mb-1">
                  {banner.title}
                </h3>
                <p className="font-serif italic text-[#e8d5c4] text-sm md:text-base font-light mb-4">
                  {banner.subtitle}
                </p>
                <span className="inline-block self-start text-[10px] tracking-[0.3em] uppercase font-sans font-medium text-white border-b border-white/60 pb-0.5 group-hover:border-white transition-colors">
                  {banner.cta} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
