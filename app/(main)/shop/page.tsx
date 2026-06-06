"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { products } from "@/lib/products";
import { useCart } from "@/components/Shared/CartContext";
import { SlidersHorizontal, Star, Heart } from "lucide-react";
import { useWishlist } from "@/components/Shared/WishlistContext";

export default function ShopPage() {
    const [showFilters, setShowFilters] = useState(false);
    const [selectedCat, setSelectedCat] = useState("All");
    const [sortBy, setSortBy] = useState("popular");
    const { addToCart } = useCart();
    const { toggleWishlist, isInWishlist } = useWishlist();

    const categories = [
        "All",
        "Smartphone",
        "Audio",
        "Smart Watch",
        "Accessories",
        "Tablet",
        "Headphone",
        "Laptop",
        "Monitor",
        "Drone",
        "Camera"
    ];

    const filtered = useMemo(() => {
        let list = [...products];

        // Category filter
        if (selectedCat !== "All") {
            list = list.filter(p =>
                p.category.toLowerCase() === selectedCat.toLowerCase()
            );
        }

        // Sort
        if (sortBy === "low") {
            list.sort((a, b) => (a.price || 0) - (b.price || 0));
        } else if (sortBy === "high") {
            list.sort((a, b) => (b.price || 0) - (a.price || 0));
        } else {
            list.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        }

        return list;
    }, [selectedCat, sortBy]);

    return (
        <div className="min-h-screen bg-[#0a0f1c] text-white">
            {/* Top Bar */}
            <div className="sticky top-0 z-40 border-b border-white/10 bg-[#050811]/90 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold">Shop</h1>
                        <p className="text-sm text-white/60">{filtered.length} products found</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => setShowFilters(true)}
                            className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white/10 rounded-xl text-sm"
                        >
                            <SlidersHorizontal size={16} />
                            Filter
                        </button>

                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-4 py-2.5 bg-[#0f172a] border border-white/20 rounded-xl text-sm outline-none focus:border-[#00aaff]"
                        >
                            <option value="popular">Most Popular</option>
                            <option value="low">Price: Low to High</option>
                            <option value="high">Price: High to Low</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="flex gap-8">
                    {/* Desktop Sidebar */}
                    <aside className="hidden lg:block w-60 shrink-0">
                        <div className="sticky top-24 bg-white/[0.02] border border-white/10 rounded-2xl p-5">
                            <h3 className="font-semibold mb-4">Categories</h3>
                            <div className="space-y-1">
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCat(cat)}
                                        className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all ${selectedCat === cat
                                            ? "bg-[#00aaff] text-black font-medium"
                                            : "text-white/70 hover:bg-white/5 hover:text-white"
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* Mobile Filter */}
                    {showFilters && (
                        <div className="lg:hidden fixed inset-0 z-50 bg-black/90">
                            <div className="absolute right-0 top-0 h-full w-[80%] bg-[#0a0f1c] p-5 overflow-y-auto">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-xl font-bold">Filter</h2>
                                    <button
                                        onClick={() => setShowFilters(false)}
                                        className="w-8 h-8 grid place-items-center bg-white/10 rounded-lg"
                                    >
                                        ✕
                                    </button>
                                </div>
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => {
                                            setSelectedCat(cat);
                                            setShowFilters(false);
                                        }}
                                        className={`w-full text-left px-4 py-3 mb-2 rounded-xl ${selectedCat === cat ? "bg-[#00aaff] text-black" : "bg-white/5"
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Products */}
                    <main className="flex-1">
                        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
                            {filtered.map((product) => {
                                const price = Number(product.price) || 0;
                                const oldPrice = Number(product.oldPrice) || price;
                                const discount = oldPrice > price
                                    ? Math.round(((oldPrice - price) / oldPrice) * 100)
                                    : 0;

                                return (
                                    <div
                                        key={product.id}
                                        className="group bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:border-[#00aaff]/50 transition-all duration-300 hover:-translate-y-1"
                                    >
                                        <Link href={`/shop/${product.id}`}>
                                            <div className="relative aspect-square bg-[#0f172a] overflow-hidden">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                    loading="lazy"
                                                />

                                                {/* Category Badge */}
                                                <div className="absolute top-2.5 left-2.5">
                                                    <span className="px-2.5 py-1 text- font-medium bg-black/70 backdrop-blur-md text-white/90 rounded-full border border-white/20">
                                                        {product.category}
                                                    </span>
                                                </div>

                                                {/* Discount Badge */}
                                                {discount > 0 && (
                                                    <div className="absolute top-2.5 right-2.5">
                                                        <span className="px-2.5 py-1 text- font-bold bg-red-500 text-white rounded-full">
                                                            -{discount}%
                                                        </span>
                                                    </div>
                                                )}

                                                {/* Stock Badge */}
                                                {product.stock < 10 && product.stock > 0 && (
                                                    <div className="absolute bottom-2.5 left-2.5">
                                                        <span className="px-2.5 py-1 text- bg-orange-500/90 text-white rounded-full">
                                                            Only {product.stock} left
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        </Link>

                                        <div className="p-4">
                                            <Link href={`/shop/${product.id}`}>
                                                <h3 className="font-medium text-sm leading-snug line-clamp-2 h-[2.5rem] group-hover:text-[#00aaff] transition-colors">
                                                    {product.name}
                                                </h3>
                                            </Link>

                                            {/* Rating */}
                                            <div className="flex items-center gap-1.5 mt-2">
                                                <div className="flex">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star
                                                            key={i}
                                                            size={12}
                                                            className={i < Math.floor(product.rating)
                                                                ? "fill-yellow-400 text-yellow-400"
                                                                : "text-white/20"
                                                            }
                                                        />
                                                    ))}
                                                </div>
                                                <span className="text-xs text-white/50">
                                                    {product.rating} ({product.reviews})
                                                </span>
                                            </div>

                                            {/* Price */}
                                            <div className="mt-3 flex items-baseline gap-2">
                                                <span className="text-lg font-bold text-white">
                                                    ৳{price.toLocaleString("en-BD")}
                                                </span>
                                                {oldPrice > price && (
                                                    <span className="text-xs text-white/40 line-through">
                                                        ৳{oldPrice.toLocaleString("en-BD")}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Add to Cart */}
                                            <button
                                                onClick={() => addToCart(product, 1)}
                                                disabled={product.stock === 0}
                                                className="w-full mt-3.5 py-2.5 bg-white/5 hover:bg-[#00aaff] text-white hover:text-black border border-white/10 hover:border-[#00aaff] rounded-xl text-sm font-medium transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                                            >
                                                {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
                                            </button>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    toggleWishlist(product);
                                                }}
                                                className="absolute top-3 right-3 w-8 h-8 grid place-items-center bg-black/60 backdrop-blur rounded-full hover:bg-black/80 transition"
                                            >
                                                <Heart
                                                    size={16}
                                                    className={isInWishlist(product.id) ? "fill-red-500 text-red-500" : "text-white"}
                                                />
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {filtered.length === 0 && (
                            <div className="text-center py-24">
                                <p className="text-white/50">No products in "{selectedCat}"</p>
                                <button
                                    onClick={() => setSelectedCat("All")}
                                    className="mt-4 text-[#00aaff] text-sm"
                                >
                                    View all products
                                </button>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
}