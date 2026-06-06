"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

const allProducts = [
    { id: "1", name: "iPhone 15 Pro Max 256GB", price: 164999, old: 179999, images: ["https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800", "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800"], brand: "Apple", rating: 4.9, reviews: 124, stock: 12, desc: "Titanium design, A17 Pro chip, 48MP camera. 1 year official warranty.", specs: { Display: "6.7\" Super Retina XDR", Chip: "A17 Pro", Storage: "256GB", Camera: "48MP" } },
    { id: "2", name: "Samsung Galaxy S24 Ultra", price: 139999, old: 149999, images: ["https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800"], brand: "Samsung", rating: 4.8, reviews: 89, stock: 8, desc: "Galaxy AI, 200MP camera, Titanium frame.", specs: { Display: "6.8\" AMOLED", Chip: "Snapdragon 8 Gen 3", RAM: "12GB" } },
    { id: "3", name: "AirPods Pro 2nd Gen", price: 24990, old: 32990, images: ["https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800"], brand: "Apple", rating: 4.9, reviews: 256, stock: 25, desc: "Active Noise Cancellation, Adaptive Transparency.", specs: { Chip: "H2", Battery: "6h + 30h" } },
    { id: "4", name: "Xiaomi Redmi Buds 5 Pro", price: 5990, old: 7990, images: ["https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800"], brand: "Xiaomi", rating: 4.6, reviews: 78, stock: 30, desc: "Hi-Res audio, 38h battery.", specs: { Driver: "10mm", ANC: "Yes" } },
    { id: "5", name: "Apple Watch Series 9", price: 45990, old: 52990, images: ["https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800"], brand: "Apple", rating: 4.8, reviews: 112, stock: 15, desc: "S9 chip, Double Tap gesture.", specs: { Display: "45mm Retina", Battery: "18h" } },
    { id: "6", name: "Anker PowerCore 20000", price: 3490, old: 4490, images: ["https://images.unsplash.com/photo-1609094335404-72b6a8e3f8de?w=800"], brand: "Anker", rating: 4.7, reviews: 203, stock: 40, desc: "20000mAh, PowerIQ 3.0", specs: { Capacity: "20000mAh", Output: "20W" } },
    { id: "7", name: "OnePlus Buds 3", price: 8990, old: 11990, images: ["https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=800"], brand: "OnePlus", rating: 4.5, reviews: 64, stock: 18, desc: "49dB ANC, 44h battery", specs: { ANC: "49dB", Battery: "44h" } },
    { id: "8", name: "Sony WH-1000XM5", price: 32990, old: 38990, images: ["https://images.unsplash.com/photo-1545127398-14699f92334b?w=800"], brand: "Sony", rating: 4.9, reviews: 187, stock: 9, desc: "Industry leading noise canceling", specs: { Driver: "30mm", Battery: "30h" } },
];

export default function ProductPage() {
    const params = useParams();
    const product = allProducts.find(p => p.id === params.id) || allProducts[0];

    const [selectedImg, setSelectedImg] = useState(0);
    const [qty, setQty] = useState(1);

    if (!product) {
        return <div className="min-h-screen bg-[#0a0f1c] grid place-items-center text-white">Product not found</div>;
    }

    const discount = Math.round(((product.old - product.price) / product.old) * 100);

    return (
        <div className="min-h-screen bg-[#0a0f1c] text-white">
            <div className="max-w-7xl mx-auto px-4 py-6">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-white/60 mb-6">
                    <Link href="/" className="hover:text-white">Home</Link>
                    <span>/</span>
                    <Link href="/shop" className="hover:text-white">Shop</Link>
                    <span>/</span>
                    <span className="text-white truncate">{product.name}</span>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Images */}
                    <div>
                        <div className="aspect-square bg-[#111827] rounded-3xl overflow-hidden border border-white/10 mb-4">
                            <img src={product.images[selectedImg]} alt={product.name} className="w-full h-full object-contain p-8" />
                        </div>
                        <div className="flex gap-3 overflow-x-auto">
                            {product.images.map((img, i) => (
                                <button key={i} onClick={() => setSelectedImg(i)} className={`w-20 h-20 flex-shrink-0 rounded-2xl overflow-hidden border-2 ${selectedImg === i ? 'border-[#00aaff]' : 'border-white/10'}`}>
                                    <img src={img} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Details */}
                    <div>
                        <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs mb-3">{product.brand}</span>
                        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

                        <div className="flex items-baseline gap-3 mb-4">
                            <span className="text-4xl font-bold">৳{product.price.toLocaleString('en-BD')}</span>
                            <span className="text-xl line-through text-white/40">৳{product.old.toLocaleString('en-BD')}</span>
                            <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded-full">-{discount}%</span>
                        </div>

                        <p className="text-white/70 mb-6">{product.desc}</p>

                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex bg-white/5 border border-white/20 rounded-xl">
                                <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-11 h-11">−</button>
                                <span className="w-12 grid place-items-center">{qty}</span>
                                <button onClick={() => setQty(qty + 1)} className="w-11 h-11">+</button>
                            </div>
                            <span className="text-sm text-white/60">{product.stock} in stock</span>
                        </div>

                        <button className="w-full py-4 bg-[#00aaff] rounded-2xl font-semibold mb-8 hover:bg-[#0094e0] transition">
                            Add to Cart — ৳{(product.price * qty).toLocaleString('en-BD')}
                        </button>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                            <h3 className="font-semibold mb-3">Specifications</h3>
                            {Object.entries(product.specs).map(([k, v]) => (
                                <div key={k} className="flex justify-between py-2 text-sm border-b border-white/5 last:border-0">
                                    <span className="text-white/60">{k}</span>
                                    <span>{v}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}