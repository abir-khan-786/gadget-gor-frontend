import Link from "next/link";
import { LayoutDashboard, Package, Heart, MapPin, Settings, LogOut, User, ShoppingBag } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const menu = [
        { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
        { href: "/dashboard/orders", label: "My Orders", icon: Package },
        { href: "/wishlist", label: "Wishlist", icon: Heart },
        { href: "/dashboard/addresses", label: "Addresses", icon: MapPin },
        { href: "/dashboard/settings", label: "Settings", icon: Settings },
    ];

    return (
        <div className="min-h-screen bg-[#0a0f1c] text-white">
            <div className="max-w-6xl mx-auto px-4 py-8 lg:py-12">
                <div className="grid lg:grid-cols-[260px_1fr] gap-8">
                    {/* Sidebar */}
                    <aside className="lg:sticky lg:top-8 self-start">
                        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-5">
                            {/* User */}
                            <div className="flex items-center gap-3 pb-5 mb-5 border-b border-white/10">
                                <div className="w-11 h-11 rounded-xl bg-[#00aaff]/20 grid place-items-center">
                                    <User size={20} className="text-[#00aaff]" />
                                </div>
                                <div>
                                    <div className="font-medium text-sm">Mahadi Khan</div>
                                    <div className="text-xs text-white/50">+880 1700-000000</div>
                                </div>
                            </div>

                            {/* Menu */}
                            <nav className="space-y-1">
                                {menu.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/70 hover:text-white hover:bg-white/5 transition"
                                    >
                                        <item.icon size={18} />
                                        {item.label}
                                    </Link>
                                ))}
                            </nav>

                            <button className="w-full mt-5 flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white/60 hover:text-red-400 hover:bg-red-500/10 transition">
                                <LogOut size={18} />
                                Logout
                            </button>
                        </div>

                        {/* Promo */}
                        <div className="mt-4 p-4 bg-gradient-to-b from-[#00aaff]/15 to-transparent border border-[#00aaff]/20 rounded-2xl">
                            <ShoppingBag size={20} className="text-[#00aaff] mb-2" />
                            <div className="text-sm font-medium mb-1">Get 10% off</div>
                            <div className="text-xs text-white/60">Refer a friend and earn points</div>
                        </div>
                    </aside>

                    {/* Content */}
                    <main>{children}</main>
                </div>
            </div>
        </div>
    );
}