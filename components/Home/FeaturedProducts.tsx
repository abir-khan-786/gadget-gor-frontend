"use client";

import { useState } from "react";
import Link from "next/link";

const dummyProducts = [
    {
        id: 1,
        name: "GadgetPro X1 Smartphone 128GB",
        price: 45999,
        oldPrice: 52999,
        image: "https://placehold.co/600x600/1e293b/00aaff?text=PHONE",
        badge: "Hot",
        badgeColor: "bg-red-500",
    },
    {
        id: 2,
        name: "SoundMax Pro Wireless Earbuds",
        price: 2990,
        oldPrice: 3990,
        image: "https://placehold.co/600x600/1e293b/00aaff?text=EARBUDS",
        badge: "New",
        badgeColor: "bg-[#00aaff]",
    },
    {
        id: 3,
        name: "FitTrack S3 Smart Watch",
        price: 3990,
        oldPrice: 4990,
        image: "https://placehold.co/600x600/1e293b/00aaff?text=WATCH",
        badge: "-20%",
        badgeColor: "bg-orange-500",
    },
    {
        id: 4,
        name: "PowerGo 20000mAh Power Bank",
        price: 2490,
        oldPrice: 2990,
        image: "https://placehold.co/600x600/1e293b/00aaff?text=POWER",
        badge: "Best",
        badgeColor: "bg-green-500",
    },
    {
        id: 5,
        name: "BassBoom Bluetooth Speaker",
        price: 3590,
        oldPrice: 4290,
        image: "https://placehold.co/600x600/1e293b/00aaff?text=SPEAKER",
        badge: "Hot",
        badgeColor: "bg-red-500",
    },
    {
        id: 6,
        name: "GamePad Pro Wireless Controller",
        price: 2990,
        oldPrice: 3590,
        image: "https://placehold.co/600x600/1e293b/00aaff?text=GAMEPAD",
        badge: "New",
        badgeColor: "bg-[#00aaff]",
    },
    {
        id: 7,
        name: "ClearView 1080p Webcam",
        price: 2190,
        oldPrice: 2790,
        image: "https://placehold.co/600x600/1e293b/00aaff?text=WEBCAM",
        badge: "-21%",
        badgeColor: "bg-orange-500",
    },
    {
        id: 8,
        name: "ChargeFast 65W GaN Charger",
        price: 1890,
        oldPrice: 2290,
        image: "https://placehold.co/600x600/1e293b/00aaff?text=CHARGER",
        badge: "Hot",
        badgeColor: "bg-red-500",
    },
];

export default function FeaturedProducts() {
    const [cartCount, setCartCount] = useState(0);

    const handleAdd = () => {
        setCartCount(c => c + 1);
    };

    return (
        <section className="w-full bg-[#0a0f1c] py-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-white">Featured Products</h2>
                        <p className="text-white/60 text-sm mt-1">Top 8 gadgets this week</p>
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                        <svg width="20" height="20" fill="none" stroke="white" strokeWidth="1.5">
                            <path d="M6 6h15l-1.5 9h-12z M6 6L5 3H2" />
                        </svg>
                        <span className="text-white font-bold text-sm">{cartCount}</span>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {dummyProducts.map((p) => (
                        <div key={p.id} className="group bg-white/[0.04] border border-white/10 rounded-2xl overflow-hidden hover:border-[#00aaff]/50 transition-all hover:-translate-y-1">
                            <div className="relative aspect-square bg-[#111827]">
                                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                                <span className={`absolute top-2.5 left-2.5 ${p.badgeColor} text-white text- font-bold px-2.5 py-1 rounded-full`}>
                                    {p.badge}
                                </span>
                            </div>

                            <div className="p-4">
                                <h3 className="text-white text-sm font-medium line-clamp-2 h-10">{p.name}</h3>

                                <div className="mt-2 flex items-baseline gap-2">
                                    <span className="text-[#00aaff] font-bold text-lg">৳{p.price.toLocaleString('en-BD')}</span>
                                    <span className="text-white/40 line-through text-xs">৳{p.oldPrice.toLocaleString('en-BD')}</span>
                                </div>

                                <div className="grid grid-cols-2 gap-2 mt-4">
                                    <button onClick={handleAdd} className="py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium border border-white/10 transition">
                                        Add
                                    </button>
                                    <button onClick={handleAdd} className="py-2.5 rounded-xl bg-[#00aaff] hover:bg-[#0088dd] text-white text-xs font-semibold transition">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}