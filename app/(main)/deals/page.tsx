"use client";
import { useState, useEffect } from "react";
import { Flame, Clock, Tag, Zap, Percent, Timer, ShoppingCart } from "lucide-react";
import { useCart } from "@/components/Shared/CartContext";
import { useRouter } from "next/navigation";

export default function DealsPage() {
    const { addToCart } = useCart();
    const router = useRouter();
    const [timeLeft, setTimeLeft] = useState({ h: 5, m: 23, s: 45 });

    // Countdown
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                let { h, m, s } = prev;
                if (s > 0) s--;
                else if (m > 0) { m--; s = 59; }
                else if (h > 0) { h--; m = 59; s = 59; }
                return { h, m, s };
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const flashDeals = [
        { id: 101, name: "AirPods Pro 2", price: 22990, oldPrice: 27990, image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400", stock: 12, sold: 88 },
        { id: 102, name: "Xiaomi Power Bank 20000mAh", price: 1890, oldPrice: 2490, image: "https://images.unsplash.com/photo-1609094330563-b9a2f4e11c8d?w=400", stock: 5, sold: 95 },
        { id: 103, name: "Anker Soundcore R50i", price: 2190, oldPrice: 3290, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400", stock: 23, sold: 77 },
        { id: 104, name: "Samsung 25W Charger", price: 1290, oldPrice: 1990, image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400", stock: 8, sold: 92 },
    ];

    const dailyDeals = [
        { id: 201, name: "iPhone 15 Pro Max", price: 159999, oldPrice: 164999, image: "https://images.unsplash.com/photo-1695822822491-d92cee6bd0c9?w=400", badge: "HOT" },
        { id: 202, name: "Galaxy S24 Ultra", price: 132999, oldPrice: 139999, image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400", badge: "-5%" },
        { id: 203, name: "OnePlus Buds 3", price: 7990, oldPrice: 9990, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400", badge: "NEW" },
        { id: 204, name: "Apple Watch Series 9", price: 42990, oldPrice: 47990, image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400", badge: "-10%" },
        { id: 205, name: "Sony WH-1000XM5", price: 28990, oldPrice: 32990, image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400", badge: "DEAL" },
        { id: 206, name: "Baseus 65W Charger", price: 2490, oldPrice: 3290, image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=400", badge: "-24%" },
    ];

    const coupons = [
        { code: "GOR500", off: "৳500 OFF", min: "৳5000+", color: "from-violet-500/20 to-purple-500/20", border: "border-violet-500/30" },
        { code: "NEW10", off: "10% OFF", min: "First order", color: "from-[#00aaff]/20 to-cyan-500/20", border: "border-[#00aaff]/30" },
        { code: "FLASH15", off: "15% OFF", min: "৳15000+", color: "from-amber-500/20 to-orange-500/20", border: "border-amber-500/30" },
    ];

    return (
        <div className="min-h-screen bg-[#0a0f1c] text-white">
            {/* Hero Flash Sale */}
            <section className="relative overflow-hidden border-b border-white/5">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w- h- bg-gradient-to-b from-orange-500/20 via-red-500/10 to-transparent blur-" />
                </div>

                <div className="relative max-w-6xl mx-auto px-4 py-12 lg:py-16">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-500/15 border border-orange-500/30 rounded-full text-xs text-orange-400 mb-4">
                                <Flame size={14} className="animate-pulse" /> FLASH SALE LIVE
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-bold mb-3">
                                Mega <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Deals</span>
                            </h1>
                            <p className="text-white/60">Up to 50% off • Limited stock • Ends soon</p>
                        </div>

                        {/* Countdown */}
                        <div className="flex items-center gap-3">
                            <div className="text-right mr-2 hidden sm:block">
                                <div className="text-xs text-white/50">Ends in</div>
                                <div className="text-sm font-medium">Today 11:59 PM</div>
                            </div>
                            {Object.entries(timeLeft).map(([k, v]) => (
                                <div key={k} className="text-center">
                                    <div className="w-14 h-14 lg:w-16 lg:h-16 bg-white/5 border border-white/15 rounded-2xl grid place-items-center backdrop-blur">
                                        <span className="text-xl lg:text-2xl font-bold tabular-nums">{String(v).padStart(2, '0')}</span>
                                    </div>
                                    <div className="text- text-white/50 mt-1 uppercase">{k}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-4 py-10">
                {/* Flash Deals */}
                <section className="mb-14">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            <Zap size={22} className="text-orange-400" /> Flash Deals
                        </h2>
                        <div className="text-xs px-2.5 py-1 bg-red-500/15 text-red-400 rounded-full border border-red-500/20">
                            {flashDeals.reduce((s, d) => s + d.stock, 0)} left
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {flashDeals.map((deal) => {
                            const percent = Math.round((deal.sold / (deal.sold + deal.stock)) * 100);
                            const discount = Math.round(((deal.oldPrice - deal.price) / deal.oldPrice) * 100);

                            return (
                                <div key={deal.id} className="group relative bg-white/[0.02] border border-white/10 rounded-3xl p-4 hover:bg-white/[0.04] hover:border-orange-500/30 transition-all">
                                    <div className="absolute top-3 left-3 z-10 px-2 py-1 bg-red-500 text-white text- font-bold rounded-lg">-{discount}%</div>

                                    <div className="aspect-square rounded-2xl overflow-hidden bg-white/5 mb-4">
                                        <img src={deal.image} alt={deal.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                                    </div>

                                    <h3 className="font-medium text-sm mb-2 line-clamp-1">{deal.name}</h3>

                                    <div className="flex items-baseline gap-2 mb-3">
                                        <span className="text-xl font-bold text-orange-400">৳{deal.price.toLocaleString('en-BD')}</span>
                                        <span className="text-xs text-white/40 line-through">৳{deal.oldPrice.toLocaleString('en-BD')}</span>
                                    </div>

                                    {/* Progress */}
                                    <div className="mb-3">
                                        <div className="flex justify-between text- text-white/50 mb-1.5">
                                            <span>Sold: {deal.sold}</span>
                                            <span>{percent}%</span>
                                        </div>
                                        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                                            <div className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all" style={{ width: `${percent}%` }} />
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => addToCart({ id: deal.id, name: deal.name, price: deal.price, image: deal.image, category: "Deals" } as any, 1)}
                                        className="w-full py-2.5 bg-white/5 border border-white/15 rounded-xl text-sm font-medium hover:bg-orange-500 hover:text-black hover:border-orange-500 transition flex items-center justify-center gap-1.5"
                                    >
                                        <ShoppingCart size={15} /> Add to Cart
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Coupons */}
                <section className="mb-14">
                    <h2 className="text-xl font-bold mb-5 flex items-center gap-2">
                        <Tag size={20} className="text-[#00aaff]" /> Coupon Codes
                    </h2>
                    <div className="grid sm:grid-cols-3 gap-4">
                        {coupons.map((c) => (
                            <div key={c.code} className={`relative overflow-hidden bg-gradient-to-b ${c.color} border ${c.border} rounded-2xl p-5`}>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-2xl font-bold mb-1">{c.off}</div>
                                        <div className="text-xs text-white/60">Min spend {c.min}</div>
                                    </div>
                                    <button
                                        onClick={() => navigator.clipboard.writeText(c.code)}
                                        className="px-3 py-1.5 bg-black/30 backdrop-blur border border-white/20 rounded-lg text-xs font-mono hover:bg-black/50 transition"
                                    >
                                        {c.code}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Daily Deals Grid */}
                <section>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            <Percent size={22} className="text-[#00aaff]" /> Today's Best Deals
                        </h2>
                        <button onClick={() => router.push('/shop')} className="text-sm text-white/60 hover:text-white">View All →</button>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {dailyDeals.map((product) => {
                            const discount = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);

                            return (
                                <div key={product.id} onClick={() => router.push(`/product/${product.id}`)} className="group cursor-pointer bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden hover:bg-white/[0.04] hover:border-white/20 transition-all hover:-translate-y-1">
                                    <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
                                        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                                        <div className="absolute top-3 left-3 px-2.5 py-1 bg-[#00aaff] text-black text- font-bold rounded-lg">{product.badge}</div>
                                        <div className="absolute top-3 right-3 px-2 py-1 bg-black/70 backdrop-blur text- rounded-lg">-{discount}%</div>
                                    </div>

                                    <div className="p-5">
                                        <h3 className="font-semibold mb-3 group-hover:text-[#00aaff] transition">{product.name}</h3>
                                        <div className="flex items-end justify-between">
                                            <div>
                                                <div className="flex items-baseline gap-2">
                                                    <span className="text-xl font-bold">৳{product.price.toLocaleString('en-BD')}</span>
                                                    <span className="text-sm text-white/40 line-through">৳{product.oldPrice.toLocaleString('en-BD')}</span>
                                                </div>
                                                <div className="text- text-emerald-400 mt-1">Save ৳{(product.oldPrice - product.price).toLocaleString('en-BD')}</div>
                                            </div>
                                            <button
                                                onClick={(e) => { e.stopPropagation(); addToCart(product as any, 1); }}
                                                className="w-9 h-9 grid place-items-center bg-white/5 border border-white/15 rounded-xl hover:bg-[#00aaff] hover:text-black hover:border-[#00aaff] transition"
                                            >
                                                <ShoppingCart size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Bottom Banner */}
                <div className="mt-16 p-8 lg:p-10 bg-gradient-to-r from-[#00aaff]/15 via-violet-500/10 to-transparent border border-white/10 rounded-3xl text-center">
                    <Timer size={32} className="mx-auto mb-3 text-[#00aaff]" />
                    <h3 className="text-2xl font-bold mb-2">New Deals Every Day at 12 PM</h3>
                    <p className="text-white/60 mb-5">Follow us to never miss a flash sale</p>
                    <div className="flex justify-center gap-3">
                        <button className="px-5 py-2.5 bg-[#00aaff] text-black font-medium rounded-xl text-sm">Get Notifications</button>
                        <button className="px-5 py-2.5 bg-white/5 border border-white/15 rounded-xl text-sm">Join Telegram</button>
                    </div>
                </div>
            </div>
        </div>
    );
}