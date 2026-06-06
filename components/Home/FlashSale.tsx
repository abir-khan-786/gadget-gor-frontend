"use client";
import { useState, useEffect } from "react";

export default function FlashSale() {
    const [timeLeft, setTimeLeft] = useState({ hours: 8, minutes: 24, seconds: 17 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                let { hours, minutes, seconds } = prev;
                if (seconds > 0) seconds--;
                else {
                    seconds = 59;
                    if (minutes > 0) minutes--;
                    else { minutes = 59; if (hours > 0) hours--; }
                }
                return { hours, minutes, seconds };
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const deals = [
        { id: 1, name: "AirPods Pro 2nd Gen", price: 24990, old: 32990, sold: 87, total: 100, img: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400", discount: 24 },
        { id: 2, name: "Xiaomi Power Bank 20000mAh", price: 2190, old: 2990, sold: 156, total: 200, img: "https://images.unsplash.com/photo-1609094335404-72b6a8e3f8de?w=400", discount: 27 },
        { id: 3, name: "Haylou Watch 2 Pro", price: 3290, old: 4990, sold: 43, total: 80, img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400", discount: 34 },
        { id: 4, name: "Anker 65W GaN Charger", price: 2890, old: 3990, sold: 92, total: 120, img: "https://images.unsplash.com/photo-1583864897785-3538d96f7e9f?w=400", discount: 28 },
    ];

    return (
        <section className="relative bg-[#0a0f1c] py-10 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Header - stacks on mobile */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-8 sm:mb-10">
                    <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl grid place-items-center shadow-lg shadow-red-500/20 flex-shrink-0">
                            <span className="text-xl sm:text-2xl">⚡</span>
                        </div>
                        <div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-2">
                                Flash Sale
                                <span className="px-2 py-0.5 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 text- sm:text-xs font-bold uppercase tracking-wide">LIVE</span>
                            </h2>
                            <p className="text-white/60 text-xs sm:text-sm mt-0.5">Up to 70% OFF - Ends soon</p>
                        </div>
                    </div>

                    {/* Countdown - mobile optimized */}
                    <div className="flex items-center gap-1.5 sm:gap-2 self-start sm:self-auto">
                        {Object.entries(timeLeft).map(([k, v], idx) => (
                            <div key={k} className="flex items-center gap-1.5">
                                <div className="bg-black/60 backdrop-blur border border-white/20 rounded-lg sm:rounded-xl px-2.5 sm:px-3.5 py-2 text-center min-w- sm:min-w-">
                                    <div className="text-lg sm:text-xl font-bold text-white tabular-nums leading-none">
                                        {String(v).padStart(2, '0')}
                                    </div>
                                    <div className="text- sm:text- text-white/50 uppercase tracking-wider mt-0.5">
                                        {k.slice(0, 3)}
                                    </div>
                                </div>
                                {idx < 2 && <span className="text-white/20 hidden sm:block">:</span>}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Products - 2 cols mobile, 4 cols desktop */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                    {deals.map(d => {
                        const percent = Math.round((d.sold / d.total) * 100);
                        return (
                            <div key={d.id} className="group bg-[#111827]/80 backdrop-blur border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-red-500/50 active:scale-[0.98] transition-all duration-300">
                                <div className="relative aspect-square bg-black/20">
                                    <img
                                        src={d.img}
                                        alt={d.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                    <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-red-500 text-white text- sm:text-xs px-2 py-1 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg font-bold shadow-lg">
                                        -{d.discount}%
                                    </span>
                                </div>

                                <div className="p-3 sm:p-4">
                                    <h3 className="text-white font-medium text-xs sm:text-sm leading-snug line-clamp-2 min-h- sm:min-h-">
                                        {d.name}
                                    </h3>

                                    <div className="flex items-baseline gap-1.5 mt-2">
                                        <span className="text-base sm:text-xl font-bold text-white">৳{d.price.toLocaleString('en-BD')}</span>
                                        <span className="text- sm:text-sm line-through text-white/40">৳{d.old.toLocaleString('en-BD')}</span>
                                    </div>

                                    <div className="mt-2.5 sm:mt-3">
                                        <div className="flex justify-between text- sm:text- text-white/60 mb-1">
                                            <span>Sold: {d.sold}</span>
                                            <span className="text-red-400 font-medium">{percent}%</span>
                                        </div>
                                        <div className="h-1 sm:h-1.5 bg-white/10 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-red-500 to-orange-500 rounded-full transition-all"
                                                style={{ width: `${percent}%` }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}