"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "Latest Smartphones",
    subtitle: "ফ্ল্যাগশিপ ফোন এখন স্পেশাল প্রাইসে",
    desc: "Premium performance, pro cameras",
    bg: "from-[#0a0f1c] via-[#1a1f4a] to-[#0a0f1c]",
    cta: "/shop/smartphones",
  },
  {
    id: 2,
    title: "Premium Audio",
    subtitle: "Noise Cancelling Headphones",
    desc: "Immersive sound, all-day comfort",
    bg: "from-[#0a0f1c] via-[#0d3b4f] to-[#0a0f1c]",
    cta: "/shop/headphones",
  },
  {
    id: 3,
    title: "Smart Wearables",
    subtitle: "আপনার ফিটনেস পার্টনার",
    desc: "Track health, stay connected",
    bg: "from-[#0a0f1c] via-[#2a1f5a] to-[#0a0f1c]",
    cta: "/shop/wearables",
  },
];

export default function GadgetGorHeader() {
  const [current, setCurrent] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  return (
    <header className="w-full bg-[#0a0f1c] text-white">
      {/* Promo */}
      <div className="bg-[#00aaff]/10 border-b border-[#00aaff]/20 text-center text-xs sm:text-sm py-2 text-[#a0d8ff]">
        Free Delivery in Dhaka | 0% EMI Available
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#0a0f1c]/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" fill="#00aaff" />
            </svg>
            <span className="text-xl font-bold">Gadget <span className="text-[#00aaff]">Gor</span></span>
          </Link>

          <div className="hidden md:flex gap-8">
            {["Home", "Shop", "Deals", "About", "Contact"].map((i) => (
              <Link key={i} href={`/${i.toLowerCase()}`} className="text-sm hover:text-[#00aaff]">
                {i}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="relative">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-[#00aaff] text- w-4 h-4 rounded-full grid place-items-center">2</span>
            </button>
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Carousel */}
      <div className="relative h- min-h- overflow-hidden">
        {slides.map((s, i) => (
          <div key={s.id} className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100 z-10' : 'opacity-0'}`}>
            <div className={`absolute inset-0 bg-gradient-to-br ${s.bg}`} />
            <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold mb-4">{s.title}</h1>
                <p className="text-2xl text-[#a0d8ff] mb-2">{s.subtitle}</p>
                <p className="text-white/70 mb-8">{s.desc}</p>
                <Link href={s.cta} className="inline-flex flex-col items-center bg-[#00aaff] hover:bg-[#0090dd] px-8 py-4 rounded-full shadow-[0_0_30px_rgba(0,170,255,0.4)] hover:scale-105 transition">
                  <span className="text-lg font-semibold">Buy Now</span>
                  <span className="text-xs -mt-1">এখনই কিনুন</span>
                </Link>
              </div>
            </div>
          </div>
        ))}

        <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 grid place-items-center">‹</button>
        <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 grid place-items-center">›</button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className={`h-2 rounded-full transition-all ${i === current ? 'w-8 bg-[#00aaff]' : 'w-2 bg-white/40'}`} />
          ))}
        </div>
      </div>
    </header>
  );
}