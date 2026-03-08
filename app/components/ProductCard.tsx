"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, ShoppingBag } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  hoverImage?: string;
  href: string;
  sizes?: string[];
  badge?: string;
}

const DEFAULT_SIZES = ["XS", "S", "M", "L", "XL"];

export default function ProductCard({
  name,
  price,
  originalPrice,
  image,
  hoverImage,
  href,
  sizes = DEFAULT_SIZES,
  badge,
}: ProductCardProps) {
  const [wishlisted, setWishlisted] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <div className="product-card group relative flex flex-col">
      {/* Image container */}
      <div className="relative overflow-hidden bg-[#f0e8e0] aspect-[3/4]">
        {/* Primary image */}
        <img
          src={image}
          alt={name}
          className="product-image-primary absolute inset-0 w-full h-full object-cover object-top"
          loading="lazy"
        />
        {/* Hover image */}
        {hoverImage && (
          <img
            src={hoverImage}
            alt={`${name} alternate view`}
            className="product-image-secondary absolute inset-0 w-full h-full object-cover object-top"
            loading="lazy"
          />
        )}

        {/* Badge */}
        {badge && (
          <div className="absolute top-3 left-3 bg-[#b8935a] text-white text-[9px] tracking-widest uppercase px-2.5 py-1 font-sans font-medium z-10">
            {badge}
          </div>
        )}

        {/* Wishlist */}
        <button
          onClick={() => setWishlisted(!wishlisted)}
          className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
          aria-label="Add to wishlist"
        >
          <Heart
            size={14}
            className={wishlisted ? "fill-[#b8935a] text-[#b8935a]" : "text-[#2c1a0e]"}
          />
        </button>

        {/* Quick add overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#2c1a0e]/90 backdrop-blur-sm py-3 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
          <div className="flex gap-1.5 justify-center mb-2.5">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`text-[9px] w-7 h-7 border font-sans font-medium tracking-wider transition-colors ${
                  selectedSize === size
                    ? "border-[#b8935a] bg-[#b8935a] text-white"
                    : "border-white/40 text-white hover:border-[#b8935a]"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
          <button className="w-full flex items-center justify-center gap-2 text-white text-[10px] tracking-widest uppercase font-sans font-medium hover:text-[#b8935a] transition-colors">
            <ShoppingBag size={12} />
            Add to Bag
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="pt-3 pb-4 px-0.5">
        <Link href={href}>
          <h3 className="font-serif text-[15px] text-[#2c1a0e] font-light leading-snug mb-1.5 hover:text-[#b8935a] transition-colors">
            {name}
          </h3>
        </Link>
        <div className="flex items-center gap-2">
          <span className="font-sans text-[13px] font-medium text-[#2c1a0e]">{price}</span>
          {originalPrice && (
            <span className="font-sans text-[12px] text-[#9c7b65] line-through">{originalPrice}</span>
          )}
        </div>

        {/* Sizes quick select */}
        <div className="flex gap-1 mt-2.5">
          {sizes.slice(0, 5).map((size) => (
            <span
              key={size}
              className="text-[9px] text-[#6b5744] font-sans border border-[#e8d5c4] w-6 h-6 flex items-center justify-center hover:border-[#b8935a] hover:text-[#b8935a] cursor-pointer transition-colors"
            >
              {size}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
