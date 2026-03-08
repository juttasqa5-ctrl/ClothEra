"use client";

import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-14 md:py-20 bg-[#2c1a0e] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 border border-[#b8935a]/20 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-48 h-48 border border-[#b8935a]/10 translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-[#b8935a]/10 rotate-45" />

      <div className="relative z-10 text-center px-4 max-w-xl mx-auto">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[#b8935a] font-sans font-light mb-3">
          Stay In The Loop
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-[#f8f4ef] font-light mb-2">
          Don't Miss Out on a Sale Again
        </h2>
        <p className="font-serif italic text-[#c9b09a] text-base font-light mb-8">
          Sign up now for sale alerts & special offers.
        </p>

        {submitted ? (
          <div className="text-[#b8935a] font-sans text-sm tracking-widest uppercase">
            ✓ Thank you for subscribing!
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 bg-transparent border border-[#b8935a]/50 text-[#f8f4ef] placeholder-[#9c7b65] px-5 py-3.5 text-[12px] font-sans focus:outline-none focus:border-[#b8935a] transition-colors"
            />
            <button
              onClick={handleSubmit}
              className="bg-[#b8935a] text-white text-[11px] tracking-[0.3em] uppercase font-sans font-medium px-7 py-3.5 hover:bg-[#a07845] transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
