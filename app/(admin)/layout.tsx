"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    Package,
    ShoppingCart,
    Users,
    BarChart3,
    Settings,
    LogOut,
    Menu,
    X,
    Shield,
    Bell
} from 'lucide-react';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const menu = [
        { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
        { href: '/admin/products', label: 'Products', icon: Package },
        { href: '/admin/orders', label: 'Orders', icon: ShoppingCart, badge: '12' },
        { href: '/admin/customers', label: 'Customers', icon: Users },
        { href: '/admin/analytics', label: 'Analytics', icon: BarChart3 },
        { href: '/admin/settings', label: 'Settings', icon: Settings },
    ];

    return (
        <div className="min-h-screen bg-[#050811] text-white flex">
            {/* Sidebar */}
            <aside className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-[#0a0f1c] border-r border-white/10
        transform transition-transform duration-300 lg:transform-none
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
                <div className="flex flex-col h-full">
                    {/* Logo */}
                    <div className="h-16 flex items-center justify-between px-5 border-b border-white/10">
                        <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-red-500 grid place-items-center">
                                <Shield size={16} className="text-white" />
                            </div>
                            <div>
                                <div className="font-bold text-sm">Gadget Gor</div>
                                <div className="text- text-red-400 -mt-0.5">ADMIN PANEL</div>
                            </div>
                        </div>
                        <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-white/60">
                            <X size={20} />
                        </button>
                    </div>

                    {/* Nav */}
                    <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                        {menu.map((item) => {
                            const active = pathname === item.href;
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setSidebarOpen(false)}
                                    className={`
                    flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition
                    ${active
                                            ? 'bg-red-500/15 text-red-400 border border-red-500/20'
                                            : 'text-white/70 hover:text-white hover:bg-white/5'
                                        }
                  `}
                                >
                                    <div className="flex items-center gap-3">
                                        <item.icon size={18} />
                                        {item.label}
                                    </div>
                                    {item.badge && (
                                        <span className="text- px-1.5 py-0.5 bg-red-500 text-white rounded-full">
                                            {item.badge}
                                        </span>
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* User */}
                    <div className="p-4 border-t border-white/10">
                        <div className="flex items-center gap-3 px-3 py-2.5 mb-2">
                            <img src="https://i.pravatar.cc/32?u=admin" alt="" className="w-8 h-8 rounded-full" />
                            <div className="flex-1 min-w-0">
                                <div className="text-xs font-medium truncate">Admin</div>
                                <div className="text- text-white/50 truncate">admin@gadgetgor.com</div>
                            </div>
                        </div>
                        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs text-white/60 hover:text-red-400 hover:bg-red-500/10 transition">
                            <LogOut size={16} />
                            Logout
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Topbar */}
                <header className="h-16 bg-[#0a0f1c]/80 backdrop-blur border-b border-white/10 flex items-center justify-between px-4 lg:px-6 sticky top-0 z-40">
                    <div className="flex items-center gap-3">
                        <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 -ml-2 text-white/70">
                            <Menu size={20} />
                        </button>
                        <h1 className="font-semibold text-sm lg:text-base">
                            {menu.find(m => m.href === pathname)?.label || 'Admin'}
                        </h1>
                    </div>

                    <div className="flex items-center gap-3">
                        <button className="relative p-2 text-white/60 hover:text-white hover:bg-white/5 rounded-lg transition">
                            <Bell size={18} />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
                        </button>
                        <div className="w-px h-6 bg-white/10 hidden sm:block" />
                        <div className="hidden sm:flex items-center gap-2 text-xs">
                            <span className="text-white/50">Store:</span>
                            <span className="text-emerald-400">Online</span>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <main className="flex-1 p-4 lg:p-6 overflow-auto">
                    {children}
                </main>
            </div>

            {/* Mobile overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/60 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
        </div>
    );
};

export default AdminLayout;