"use client";

import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-[#0a0f1c] text-white">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute -top-32 -right-32 w-72 h-72 sm:w-96 sm:h-96 bg-[#00aaff]/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-32 -left-32 w-72 h-72 sm:w-96 sm:h-96 bg-[#00ffcc]/10 rounded-full blur-3xl" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Left */}
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur border border-white/10 rounded-full px-3 py-1.5 mb-6">
                            <span className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse" />
                            <span className="text-xs sm:text-sm text-white/80">Order today, get it tomorrow in Dhaka</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
                            Best Gadgets,
                            <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#00aaff] to-[#00ffcc]">
                                Best Prices
                            </span>
                        </h1>

                        <p className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-white/70 max-w-xl mx-auto lg:mx-0">
                            100% authentic smartphones, earbuds, and smartwatches at Gadget Gor — with 0% EMI, bKash/Nagad, and official warranty.
                        </p>

                        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                            <Link
                                href="/shop"
                                className="w-full sm:w-auto bg-[#00aaff] hover:bg-[#0094e0] px-7 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-semibold shadow-[0_8px_30px_rgba(0,170,255,0.3)] transition active:scale-[0.98] text-center"
                            >
                                Shop Now
                            </Link>

                            <Link
                                href="/deals"
                                className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-2xl border border-white/20 hover:bg-white/10 backdrop-blur text-center font-medium transition active:scale-[0.98]"
                            >
                                Today's Deals →
                            </Link>
                        </div>

                        <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-5 sm:gap-8 text-xs sm:text-sm text-white/50">
                            <span className="flex items-center gap-1.5">✓ Official Warranty</span>
                            <span className="flex items-center gap-1.5">✓ 0% EMI</span>
                            <span className="flex items-center gap-1.5">✓ Fast Delivery</span>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="relative">
                        {/* Mobile */}
                        <div className="lg:hidden grid grid-cols-3 gap-3 max-w-sm mx-auto">
                            {[
                                { emoji: "📱", name: "iPhone 15", price: "$1,399" },
                                { emoji: "🎧", name: "AirPods", price: "$249" },
                                { emoji: "⌚", name: "Watch", price: "$399" },
                            ].map((item, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-3 backdrop-blur">
                                    <div className="aspect-square bg-black/40 rounded-xl grid place-items-center text-3xl">{item.emoji}</div>
                                    <p className="mt-2 text- text-white/60 text-center">{item.name}</p>
                                    <p className="text-xs font-bold text-[#00aaff] text-center">{item.price}</p>
                                </div>
                            ))}
                        </div>

                        {/* Desktop */}
                        <div className="hidden lg:block">
                            <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded- p-8">
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="col-span-2 bg-[#0f172a] rounded-2xl p-5 -rotate-2 hover:rotate-0 transition-transform border border-white/5">
                                        <div className="aspect-[9/14] bg-black rounded-xl grid place-items-center">
                                            <span className="text-6xl">📱</span>
                                        </div>
                                        <p className="mt-3 text-sm text-white">iPhone 15 Pro — $1,399</p>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="bg-[#0f172a] rounded-2xl p-3.5 rotate-3 hover:rotate-0 transition border border-white/5">
                                            <div className="aspect-square bg-black rounded-xl grid place-items-center text-3xl">🎧</div>
                                        </div>
                                        <div className="bg-[#0f172a] rounded-2xl p-3.5 -rotate-3 hover:rotate-0 transition border border-white/5">
                                            <div className="aspect-square bg-black rounded-xl grid place-items-center text-3xl">⌚</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}