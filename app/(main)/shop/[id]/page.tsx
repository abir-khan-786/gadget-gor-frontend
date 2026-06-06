"use client";

import { useParams, useRouter } from "next/navigation";
import { products } from "@/lib/products";
import { useCart } from "@/components/Shared/CartContext";
import { useState } from "react";
import { ArrowLeft, Star, Minus, Plus, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw, } from "lucide-react";
import { useWishlist } from "@/components/Shared/WishlistContext";


export default function ProductPage() {
    const { toggleWishlist, isInWishlist } = useWishlist();
    const param = useParams();
    const router = useRouter();
    const { addToCart } = useCart();
    const [qty, setQty] = useState(1);
    const [liked, setLiked] = useState(false);

    // ✅ id safe
    const id = Array.isArray(param.id) ? param.id[0] : param.id;
    const product = products.find(p => String(p.id) === String(id));

    console.log("Param:", param, "Found:", product);

    if (!product) {
        return (
            <div className="min-h-screen bg-[#0a0f1c] text-white flex items-center justify-center">
                <div className="text-center">
                    <div className="text-6xl mb-4">🔍</div>
                    <h1 className="text-2xl font-bold mb-2">Product Not Found</h1>
                    <p className="text-white/60 mb-6">ID: {String(id)}</p>
                    <button onClick={() => router.push("/shop")} className="px-6 py-3 bg-[#00aaff] text-black rounded-xl font-medium">
                        Browse Products
                    </button>
                </div>
            </div>
        );
    }

    const price = Number(product.price) || 0;
    const oldPrice = Number(product.oldPrice) || price;
    const discount = oldPrice > price ? Math.round(((oldPrice - price) / oldPrice) * 100) : 0;

    return (
        <div className="min-h-screen bg-[#0a0f1c] text-white">
            {/* Header */}
            <div className="sticky top-0 z-30 bg-[#0a0f1c]/80 backdrop-blur-xl border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
                    <button onClick={() => router.back()} className="flex items-center gap-2 text-white/70 hover:text-white">
                        <ArrowLeft size={20} />
                        <span className="hidden sm:inline">Back</span>
                    </button>
                    <div className="flex items-center gap-3">
                        <button onClick={() => setLiked(!liked)} className={`w-9 h-9 grid place-items-center rounded-full border transition ${liked ? "bg-red-500/20 border-red-500/50 text-red-400" : "bg-white/5 border-white/10 text-white/70 hover:text-white"}`}>
                            <Heart size={18} fill={liked ? "currentColor" : "none"} />
                        </button>
                        <button className="w-9 h-9 grid place-items-center rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white">
                            <Share2 size={18} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-6 lg:py-10">
                <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12">
                    {/* LEFT - Image */}
                    <div>
                        <div className="relative aspect-square bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 rounded- overflow-hidden">
                            <img src={product.image} alt={product.name} className="w-full h-full object-contain p-8 lg:p-12" />

                            {discount > 0 && (
                                <div className="absolute top-5 left-5">
                                    <div className="px-3 py-1.5 bg-red-500 text-white text-xs font-bold rounded-full shadow-lg shadow-red-500/20">
                                        -{discount}% OFF
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Thumbnails - fake for design */}
                        <div className="flex gap-3 mt-4 overflow-x-auto">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className={`w-20 h-20 rounded-2xl border-2 shrink-0 overflow-hidden cursor-pointer ${i === 1 ? "border-[#00aaff]" : "border-white/10 hover:border-white/30"}`}>
                                    <img src={product.image} className="w-full h-full object-cover opacity-70" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT - Details */}
                    <div className="lg:py-4">
                        {/* Category */}
                        <div className="flex items-center gap-2 mb-3">
                            <span className="text-[#00aaff] text-sm font-medium">{product.category}</span>
                            <span className="text-white/20">•</span>
                            <span className={`text-xs ${product.stock > 0 ? "text-emerald-400" : "text-red-400"}`}>
                                {product.stock > 0 ? `In Stock (${product.stock})` : "Out of Stock"}
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text- lg:text- font-bold leading-tight tracking-tight mb-3">
                            {product.name}
                        </h1>

                        {/* Rating */}
                        <div className="flex items-center gap-3 mb-5">
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={15} className={i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-white/20"} />
                                ))}
                            </div>
                            <span className="text-sm">
                                <b className="text-white">{product.rating}</b>
                                <span className="text-white/50"> · {product.reviews} reviews</span>
                            </span>
                        </div>

                        {/* Price */}
                        <div className="mb-6">
                            <div className="flex items-baseline gap-3">
                                <div className="text- font-bold">৳{price.toLocaleString("en-BD")}</div>
                                {oldPrice > price && (
                                    <div className="text-lg text-white/40 line-through">৳{oldPrice.toLocaleString("en-BD")}</div>
                                )}
                            </div>
                            {discount > 0 && (
                                <p className="text-sm text-emerald-400 mt-1">You save ৳{(oldPrice - price).toLocaleString("en-BD")} ({discount}%)</p>
                            )}
                        </div>

                        {/* Description */}
                        <p className="text- leading-relaxed text-white/70 mb-6">
                            {product.description}
                        </p>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-2.5 mb-8">
                            {product.features?.slice(0, 4).map((f, i) => (
                                <div key={i} className="flex items-center gap-2.5 px-3.5 py-2.5 bg-white/[0.03] border border-white/10 rounded-xl">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#00aaff]" />
                                    <span className="text- text-white/80">{f}</span>
                                </div>
                            ))}
                        </div>

                        {/* Qty + Add */}
                        <div className="flex gap-3 mb-6">
                            <div className="flex items-center bg-white/[0.04] border border-white/15 rounded-2xl">
                                <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-11 h-12 grid place-items-center hover:text-[#00aaff] transition">
                                    <Minus size={18} />
                                </button>
                                <div className="w-12 text-center font-semibold">{qty}</div>
                                <button onClick={() => setQty(Math.min(product.stock, qty + 1))} className="w-11 h-12 grid place-items-center hover:text-[#00aaff] transition">
                                    <Plus size={18} />
                                </button>
                            </div>

                            <button
                                onClick={() => addToCart(product, qty)}
                                disabled={product.stock === 0}
                                className="flex-1 h-12 bg-[#00aaff] hover:bg-[#00aaff]/90 text-black font-semibold rounded-2xl flex items-center justify-center gap-2 transition disabled:opacity-40"
                            >
                                <ShoppingCart size={19} />
                                Add to Cart — ৳{(price * qty).toLocaleString("en-BD")}
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

                        {/* Buy Now */}
                        <button className="w-full h-12 bg-white/5 hover:bg-white/10 border border-white/15 rounded-2xl font-medium transition mb-8">
                            Buy Now
                        </button>

                        {/* Trust badges */}
                        <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/10">
                            {[
                                { icon: Truck, label: "Free Delivery", sub: "Dhaka city" },
                                { icon: Shield, label: "Warranty", sub: "Official" },
                                { icon: RotateCcw, label: "7-Day Return", sub: "Easy return" },
                            ].map((item) => (
                                <div key={item.label} className="text-center">
                                    <item.icon size={20} className="mx-auto mb-1.5 text-white/60" />
                                    <div className="text-xs font-medium text-white/90">{item.label}</div>
                                    <div className="text- text-white/50">{item.sub}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Bottom info */}
                <div className="mt-16 grid md:grid-cols-3 gap-4">
                    {["Specifications", "What's in the box", "Reviews"].map(tab => (
                        <div key={tab} className="p-5 bg-white/[0.02] border border-white/10 rounded-2xl hover:bg-white/[0.04] cursor-pointer transition">
                            <h3 className="font-medium mb-1">{tab}</h3>
                            <p className="text-sm text-white/50">View details →</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}