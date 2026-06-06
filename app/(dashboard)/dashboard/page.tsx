"use client";
import { Package, Heart, Wallet, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
    const stats = [
        { label: "Total Orders", value: "12", change: "+2 this month", icon: Package, color: "text-[#00aaff]" },
        { label: "Wishlist", value: "5", change: "2 on sale", icon: Heart, color: "text-red-400" },
        { label: "Total Spent", value: "৳2,14,560", change: "+18%", icon: Wallet, color: "text-emerald-400" },
        { label: "Points Earned", value: "340", change: "+45", icon: TrendingUp, color: "text-amber-400" },
    ];

    // Chart data
    const monthlySpending = [
        { month: "Jan", amount: 12000 },
        { month: "Feb", amount: 8500 },
        { month: "Mar", amount: 22000 },
        { month: "Apr", amount: 18000 },
        { month: "May", amount: 34000 },
        { month: "Jun", amount: 22990 },
    ];

    const maxAmount = Math.max(...monthlySpending.map(d => d.amount));

    const categoryData = [
        { name: "Phones", percent: 45, color: "#00aaff" },
        { name: "Audio", percent: 25, color: "#8b5cf6" },
        { name: "Accessories", percent: 20, color: "#10b981" },
        { name: "Wearables", percent: 10, color: "#f59e0b" },
    ];

    const recentOrders = [
        { id: "#GG-10234", date: "2 Jun", total: 22990, status: "Delivered", item: "AirPods Pro 2" },
        { id: "#GG-10212", date: "28 May", total: 159999, status: "Shipping", item: "iPhone 15 Pro Max" },
        { id: "#GG-10198", date: "15 May", total: 7990, status: "Processing", item: "OnePlus Buds 3" },
    ];

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-2xl lg:text-3xl font-bold mb-1">Welcome back, Mahadi 👋</h1>
                <p className="text-white/60 text-sm">Here's your shopping overview</p>
            </div>

            {/* Stats */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {stats.map((s) => (
                    <div key={s.label} className="bg-white/[0.02] border border-white/10 rounded-2xl p-5 hover:bg-white/[0.04] transition">
                        <div className="flex items-start justify-between mb-3">
                            <s.icon size={20} className={s.color} />
                            <span className="text- text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">{s.change}</span>
                        </div>
                        <div className="text-2xl font-bold mb-1">{s.value}</div>
                        <div className="text-xs text-white/50">{s.label}</div>
                    </div>
                ))}
            </div>

            <div className="grid lg:grid-cols-[1.5fr_1fr] gap-6 mb-8">
                {/* Spending Chart */}
                <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="font-semibold">Monthly Spending</h2>
                        <div className="text-xs text-white/50">Last 6 months</div>
                    </div>

                    <div className="relative h- flex items-end gap-3">
                        {monthlySpending.map((data) => {
                            const height = (data.amount / maxAmount) * 100;
                            return (
                                <div key={data.month} className="flex-1 flex flex-col items-center gap-2 group">
                                    <div className="relative w-full flex items-end justify-center h-">
                                        <div
                                            className="w-full max-w- bg-gradient-to-t from-[#00aaff] to-[#00aaff]/60 rounded-t-xl transition-all duration-500 group-hover:from-[#00aaff] group-hover:to-cyan-400 relative"
                                            style={{ height: `${height}%` }}
                                        >
                                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition bg-black/80 px-2 py-1 rounded text- whitespace-nowrap">
                                                ৳{data.amount.toLocaleString('en-BD')}
                                            </div>
                                        </div>
                                    </div>
                                    <span className="text-xs text-white/50">{data.month}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Category Donut */}
                <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
                    <h2 className="font-semibold mb-6">Top Categories</h2>

                    <div className="flex items-center justify-center mb-6">
                        <div className="relative w-36 h-36">
                            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                                {(() => {
                                    let offset = 0;
                                    return categoryData.map((cat) => {
                                        const circumference = 2 * Math.PI * 40;
                                        const dash = (cat.percent / 100) * circumference;
                                        const el = (
                                            <circle
                                                key={cat.name}
                                                cx="50"
                                                cy="50"
                                                r="40"
                                                fill="none"
                                                stroke={cat.color}
                                                strokeWidth="12"
                                                strokeDasharray={`${dash} ${circumference - dash}`}
                                                strokeDashoffset={-offset}
                                                strokeLinecap="round"
                                            />
                                        );
                                        offset += dash;
                                        return el;
                                    });
                                })()}
                                <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="12" />
                            </svg>
                            <div className="absolute inset-0 grid place-items-center">
                                <div className="text-center">
                                    <div className="text-xl font-bold">12</div>
                                    <div className="text- text-white/50">Orders</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2.5">
                        {categoryData.map((cat) => (
                            <div key={cat.name} className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: cat.color }} />
                                    <span className="text-white/70">{cat.name}</span>
                                </div>
                                <span className="font-medium">{cat.percent}%</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Recent Orders + Activity */}
            <div className="grid lg:grid-cols-[1.5fr_1fr] gap-6">
                <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
                    <div className="flex items-center justify-between mb-5">
                        <h2 className="font-semibold">Recent Orders</h2>
                        <Link href="/dashboard/orders" className="text-xs text-[#00aaff] hover:underline flex items-center gap-1">
                            View all <ArrowRight size={12} />
                        </Link>
                    </div>

                    <div className="space-y-3">
                        {recentOrders.map((order) => (
                            <div key={order.id} className="flex items-center justify-between p-3.5 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.04] transition cursor-pointer">
                                <div className="flex items-center gap-3">
                                    <div className={`w-2 h-2 rounded-full ${order.status === "Delivered" ? "bg-emerald-400" :
                                        order.status === "Shipping" ? "bg-[#00aaff] animate-pulse" :
                                            "bg-amber-400"
                                        }`} />
                                    <div>
                                        <div className="text-sm font-medium">{order.item}</div>
                                        <div className="text- text-white/50">{order.id} • {order.date}</div>
                                    </div>
                                </div>
                                <div className="text-sm font-medium">৳{order.total.toLocaleString('en-BD')}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
                    <h2 className="font-semibold mb-5">Quick Actions</h2>
                    <div className="space-y-2.5">
                        {[
                            { label: "Track Package", desc: "2 items in transit", href: "/dashboard/orders" },
                            { label: "Wishlist Sale", desc: "2 items price dropped", href: "/wishlist" },
                            { label: "Review Products", desc: "3 pending reviews", href: "/dashboard/reviews" },
                        ].map((action) => (
                            <Link key={action.label} href={action.href} className="block p-3.5 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.06] hover:border-white/10 transition group">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-sm font-medium group-hover:text-[#00aaff] transition">{action.label}</div>
                                        <div className="text- text-white/50 mt-0.5">{action.desc}</div>
                                    </div>
                                    <ArrowRight size={14} className="text-white/30 group-hover:text-white/60 transition" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}