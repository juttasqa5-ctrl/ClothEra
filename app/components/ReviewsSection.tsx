"use client";

import { useState } from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Anonymous",
    product: "Zeenia - 3 pc",
    date: "08/03/2026",
    rating: 5,
    text: "Please restock this pink dress article in XS before Eid. I want to order this one. This dress is just amazing which has stolen my heart and I want to carry it on Eid.",
  },
  {
    id: 2,
    name: "Mira",
    product: "Nishat - 3Pc",
    date: "04/10/2025",
    rating: 5,
    text: "Most recommended dress Nishat.. due to its royal beauty. The work detail is amazing and the fabric is superb. Delivery was so fast. Thank you so much!",
  },
  {
    id: 3,
    name: "Anonymous",
    product: "Bahaar - 3Pc",
    date: "29/12/2025",
    rating: 5,
    text: "I am very pleased with the overall quality. The embroidery work is finely done with great attention to detail. The fabric quality is good, giving a graceful and comfortable wear.",
  },
  {
    id: 4,
    name: "Nimal",
    product: "Reham - 3pc",
    date: "01/12/2025",
    rating: 5,
    text: "Amazing! I love the dress, every thing is on point. The quality exceeded my expectations and the delivery was prompt.",
  },
  {
    id: 5,
    name: "Aarzoo",
    product: "Aarzoo - 2pc",
    date: "04/01/2026",
    rating: 5,
    text: "This is my third parcel from ClothEra. All dresses are so nice and beautiful. Always satisfied with the quality and craftsmanship.",
  },
  {
    id: 6,
    name: "Hafsa Ebad",
    product: "Izzah - 3PC",
    date: "17/11/2025",
    rating: 5,
    text: "Outstanding quality! Kindly restock this dress in medium and large size as soon as possible. The details are impeccable.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={12}
          className={star <= rating ? "fill-[#b8935a] text-[#b8935a]" : "text-[#e8d5c4]"}
        />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const [visibleCount, setVisibleCount] = useState(6);

  return (
    <section className="py-14 md:py-20 bg-[#f8f4ef]">
      <div className="px-4 md:px-8 max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-[10px] tracking-[0.4em] uppercase text-[#b8935a] font-sans font-light mb-2">
            What They Say
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#2c1a0e] font-light mb-3">
            Let Customers Speak
          </h2>
          <div className="flex items-center justify-center gap-2 mt-2">
            <StarRating rating={5} />
            <span className="font-sans text-[12px] text-[#6b5744]">
              4.6/5 based on 756 reviews
            </span>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.slice(0, visibleCount).map((review) => (
            <div
              key={review.id}
              className="bg-white border border-[#e8d5c4] p-5 md:p-6 hover:shadow-md transition-shadow"
            >
              <StarRating rating={review.rating} />
              <p className="font-serif text-[#2c1a0e] text-sm md:text-[15px] font-light leading-relaxed mt-3 mb-4">
                "{review.text}"
              </p>
              <div className="border-t border-[#f0e8e0] pt-3 flex items-center justify-between">
                <div>
                  <p className="font-sans text-[12px] font-medium text-[#2c1a0e]">{review.name}</p>
                  <p className="font-sans text-[11px] text-[#9c7b65]">{review.product}</p>
                </div>
                <span className="font-sans text-[10px] text-[#9c7b65]">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {visibleCount < reviews.length && (
          <div className="text-center mt-8">
            <button
              onClick={() => setVisibleCount((c) => c + 3)}
              className="border border-[#2c1a0e] text-[#2c1a0e] text-[11px] tracking-[0.3em] uppercase font-sans font-medium px-8 py-3 hover:bg-[#2c1a0e] hover:text-white transition-all duration-300"
            >
              Load More Reviews
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
