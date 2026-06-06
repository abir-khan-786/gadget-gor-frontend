"use client";

import { useState } from "react";
import Link from "next/link";

const products = [
    { id: 1, name: "iPhone 15 Pro Max 256GB", price: 164999, old: 179999, img: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500", brand: "Apple", cat: "Smartphone", rating: 4.9 },
    { id: 2, name: "Samsung Galaxy S24 Ultra", price: 139999, old: 149999, img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500", brand: "Samsung", cat: "Smartphone", rating: 4.8 },
    { id: 3, name: "AirPods Pro 2nd Gen", price: 24990, old: 32990, img: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500", brand: "Apple", cat: "Earbuds", rating: 4.9 },
    { id: 4, name: "Xiaomi Redmi Buds 5 Pro", price: 5990, old: 7990, img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500", brand: "Xiaomi", cat: "Earbuds", rating: 4.6 },
    { id: 5, name: "Apple Watch Series 9", price: 45990, old: 52990, img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500", brand: "Apple", cat: "Watch", rating: 4.8 },
    { id: 6, name: "Anker PowerCore 20000", price: 3490, old: 4490, img: "https://images.unsplash.com/photo-1609094335404-72b6a8e3f8de?w=500", brand: "Anker", cat: "Power Bank", rating: 4.7 },
    { id: 7, name: "OnePlus Buds 3", price: 8990, old: 11990, img: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500", brand: "OnePlus", cat: "Earbuds", rating: 4.5 },
    { id: 8, name: "Sony WH-1000XM5", price: 32990, old: 38990, img: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=500", brand: "Sony", cat: "Headphone", rating: 4.9 },
];

export default function ShopPage() {
    const [showFilters, setShowFilters] = useState(false);
    const [selectedCat, setSelectedCat] = useState("All");
    const [sortBy, setSortBy] = useState("popular");

    const categories = ["All", "Smartphone", "Earbuds", "Watch", "Power Bank", "Headphone"];
    const brands = ["Apple", "Samsung", "Xiaomi", "Anker", "Sony", "OnePlus"];

    const filtered = products.filter(p => selectedCat === "All" || p.cat === selectedCat);

    return (
        <div className="min-h-screen bg-[#0a0f1c] text-white">
            {/* Header */}
            <div className="border-b border-white/10 bg-[#050811]/80 backdrop-blur sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl sm:text-3xl font-bold">Shop</h1>
                            <p className="text-white/60 text-sm mt-0.5">{filtered.length} products</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <button onClick={() => setShowFilters(!showFilters)} className="lg:hidden px-4 py-2.5 bg-white/10 border border-white/20 rounded-xl text-sm flex items-center gap-2">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M7 12h10M10 18h4" /></svg>
                                Filter
                            </button>
                            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="px-4 py-2.5 bg-white/5 border border-white/20 rounded-xl text-sm focus:outline-none focus:border-[#00aaff]">
                                <option value="popular" className="bg-[#0a0f1c]">Popular</option>
                                <option value="low" className="bg-[#0a0f1c]">Price: Low</option>
                                <option value="high" className="bg-[#0a0f1c]">Price: High</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 lg:py-8">
                <div className="flex gap-8">
                    {/* Sidebar - Desktop */}
                    <aside className="hidden lg:block w-64 flex-shrink-0">
                        <div className="sticky top-24 space-y-6">
                            {/* Categories */}
                            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5">
                                <h3 className="font-semibold mb-4 text-white">Categories</h3>
                                <div className="space-y-2">
                                    {categories.map(cat => (
                                        <button key={cat} onClick={() => setSelectedCat(cat)} className={`w-full text-left px-3 py-2 rounded-xl text-sm transition ${selectedCat === cat ? 'bg-[#00aaff]/20 text-[#00aaff] border border-[#00aaff]/30' : 'text-white/70 hover:bg-white/5 hover:text-white'}`}>
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Brands */}
                            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5">
                                <h3 className="font-semibold mb-4 text-white">Brands</h3>
                                <div className="space-y-2.5">
                                    {brands.map(brand => (
                                        <label key={brand} className="flex items-center gap-2.5 cursor-pointer group">
                                            <input type="checkbox" className="w-4 h-4 rounded border-white/20 bg-white/5 text-[#00aaff] focus:ring-[#00aaff]/50" />
                                            <span className="text-sm text-white/70 group-hover:text-white">{brand}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Price */}
                            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5">
                                <h3 className="font-semibold mb-4 text-white">Price Range</h3>
                                <div className="flex items-center gap-2">
                                    <input type="number" placeholder="Min" className="w-full px-3 py-2 bg-black/30 border border-white/10 rounded-lg text-sm" />
                                    <span className="text-white/40">-</span>
                                    <input type="number" placeholder="Max" className="w-full px-3 py-2 bg-black/30 border border-white/10 rounded-lg text-sm" />
                                </div>
                                <button className="w-full mt-3 py-2 bg-[#00aaff]/20 hover:bg-[#00aaff]/30 border border-[#00aaff]/30 rounded-lg text-sm text-[#00aaff] font-medium transition">Apply</button>
                            </div>
                        </div>
                    </aside>

                    {/* Mobile Filter Drawer */}
                    {showFilters && (
                        <div className="lg:hidden fixed inset-0 z-50">
                            <div className="absolute inset-0 bg-black/80" onClick={() => setShowFilters(false)} />
                            <div className="absolute left-0 top-0 bottom-0 w-[85%] max-w-sm bg-[#0a0f1c] border-r border-white/10 p-5 overflow-y-auto">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-lg font-bold">Filters</h3>
                                    <button onClick={() => setShowFilters(false)} className="w-8 h-8 grid place-items-center rounded-lg bg-white/10">✕</button>
                                </div>
                                <div className="space-y-5">
                                    {categories.map(cat => (
                                        <button key={cat} onClick={() => { setSelectedCat(cat); setShowFilters(false) }} className={`w-full text-left px-4 py-3 rounded-xl ${selectedCat === cat ? 'bg-[#00aaff] text-white' : 'bg-white/5 text-white/80'}`}>
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Products Grid */}
                    <main className="flex-1">
                        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
                            {filtered.map(product => (
                                <div key={product.id} className="group relative">
                                    <Link href={`/shop/${product.id}`}>
                                        <div className="bg-white/[0.04] border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                                            {/* Image */}
                                            <div className="relative aspect-square bg-[#111827] overflow-hidden">
                                                <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                                <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                                                    <span className="px-2 py-1 bg-black/70 backdrop-blur text- sm:text-xs text-white rounded-lg border border-white/10">{product.brand}</span>
                                                </div>
                                                <button className="absolute top-2 right-2 sm:top-3 sm:right-3 w-8 h-8 bg-black/70 backdrop-blur rounded-full grid place-items-center opacity-0 group-hover:opacity-100 transition">
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>
                                                </button>
                                            </div>

                                            {/* Info */}
                                            <div className="p-3 sm:p-4">
                                                <h3 className="text-white font-medium text-xs sm:text-sm leading-snug line-clamp-2 min-h- sm:min-h- group-hover:text-[#00aaff] transition">
                                                    {product.name}
                                                </h3>

                                                <div className="flex items-center gap-1 mt-1.5">
                                                    <div className="flex">
                                                        {[...Array(5)].map((_, i) => (
                                                            <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill={i < Math.floor(product.rating) ? "#facc15" : "none"} stroke="#facc15" strokeWidth="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                                                        ))}
                                                    </div>
                                                    <span className="text- text-white/50">({product.rating})</span>
                                                </div>

                                                <div className="flex items-baseline gap-1.5 mt-2.5">
                                                    <span className="text-base sm:text-lg font-bold text-white">৳{product.price.toLocaleString('en-BD')}</span>
                                                    <span className="text- sm:text-xs text-white/40 line-through">৳{product.old.toLocaleString('en-BD')}</span>
                                                </div>

                                                <button className="w-full mt-3 py-2 sm:py-2.5 bg-white/10 hover:bg-[#00aaff] hover:text-white border border-white/10 hover:border-[#00aaff] rounded-xl text-xs sm:text-sm font-medium transition-all">
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>

                        {/* Load More */}
                        <div className="text-center mt-10">
                            <button className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/20 rounded-2xl text-sm font-medium transition">
                                Load More Products
                            </button>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}