"use client";

import { useState } from "react";
import Link from "next/link";
import ProductCard from "./ProductCard";

interface TabData {
  id: string;
  label: string;
  products: Product[];
}

interface Product {
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  hoverImage?: string;
  href: string;
  badge?: string;
}

interface FeaturedProductsProps {
  title: string;
  subtitle?: string;
  tabs: TabData[];
  viewAllHref?: string;
}

export default function FeaturedProducts({
  title,
  subtitle,
  tabs,
  viewAllHref = "#",
}: FeaturedProductsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);

  const currentProducts =
    tabs.find((t) => t.id === activeTab)?.products || [];

  return (
    <section className="py-12 md:py-20 bg-[#fdfaf7]">
      <div className="px-4 md:px-8 max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#b8935a] font-sans font-light mb-2">
            Curated For You
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#2c1a0e] font-light mb-3">
            {title}
          </h2>
          {subtitle && (
            <p className="font-serif italic text-[#6b5744] text-base md:text-lg font-light max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Tabs */}
        {tabs.length > 1 && (
          <div className="flex items-center justify-center gap-0 mb-8 md:mb-12 overflow-x-auto no-scrollbar border-b border-[#e8d5c4]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 md:px-6 py-3 text-[10px] md:text-[11px] tracking-widest uppercase font-sans font-medium whitespace-nowrap transition-all border-b-2 -mb-px ${
                  activeTab === tab.id
                    ? "border-[#b8935a] text-[#b8935a]"
                    : "border-transparent text-[#6b5744] hover:text-[#2c1a0e]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        {/* Products grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {currentProducts.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-10 md:mt-14">
          <Link
            href={viewAllHref}
            className="inline-block border border-[#2c1a0e] text-[#2c1a0e] text-[11px] tracking-[0.3em] uppercase font-sans font-medium px-10 py-3.5 hover:bg-[#2c1a0e] hover:text-white transition-all duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
}
