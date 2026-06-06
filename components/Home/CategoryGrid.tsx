"use client";
import Link from "next/link";

const categories = [
    { name: "Smartphones", href: "/shop/smartphones", count: "120+ Products" },
    { name: "Earbuds", href: "/shop/earbuds", count: "85+ Products" },
    { name: "Smartwatch", href: "/shop/wearables", count: "60+ Products" },
    { name: "Power Bank", href: "/shop/powerbank", count: "45+ Products" },
    { name: "Gaming", href: "/shop/gaming", count: "70+ Products" },
    { name: "Accessories", href: "/shop/accessories", count: "200+ Products" },
];

export default function CategoryGrid() {
    return (
        <section className="w-full bg-[#0a0f1c] py-16">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-white mb-2">Shop by Category</h2>
                <p className="text-white/60 mb-8">Browse our top categories</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    {categories.map(cat => (
                        <Link key={cat.name} href={cat.href} className="group bg-white/[0.03] border border-white/10 hover:border-[#00aaff]/50 p-6 rounded-2xl hover:-translate-y-1 transition">
                            <h3 className="font-semibold text-white">{cat.name}</h3>
                            <p className="text-xs text-white/40 mt-2">{cat.count}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}