"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "./CartContext";
import { Heart, User } from "lucide-react";
import { useWishlist } from "./WishlistContext";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Deals", href: "/deals" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function GadgetGorHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { count: cartCount } = useCart();
  const { count: wishlistCount } = useWishlist();


  return (
    <header className="w-full bg-[#0a0f1c] text-white sticky top-0 z-50">
      {/* Promo */}
      <div className="bg-[#00aaff]/10 border-b border-[#00aaff]/20 text-center text-xs sm:text-sm py-2 text-[#a0d8ff]">
        🚚 Free Delivery in Dhaka | 0% EMI Available
      </div>

      {/* Nav */}
      <nav className="backdrop-blur-xl bg-[#0a0f1c]/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <motion.svg
              width="28" height="28" viewBox="0 0 24 24" fill="none"
              whileHover={{ rotate: 20, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" fill="#00aaff" />
            </motion.svg>
            <span className="text-xl font-bold tracking-tight">
              Gadget <span className="text-[#00aaff] group-hover:drop-shadow-[0_0_8px_#00aaff] transition-all">Gor</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 rounded-full p-1 border border-white/10">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.name} href={item.href} className="relative px-4 py-2 text-sm font-medium">
                  {isActive && (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute inset-0 bg-[#00aaff] rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className={`relative z-10 transition-colors ${isActive ? "text-black" : "text-white/80 hover:text-white"}`}>
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-3">
            <Link href="/wishlist" className="relative">
              <Heart size={20} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-red-500 text-[10px] grid place-items-center rounded-full">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <Link href="/cart" className="relative p-2 hover:bg-white/10 rounded-full transition">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6h15l-1.5 9h-12z" /><circle cx="9" cy="20" r="1.5" /><circle cx="17" cy="20" r="1.5" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-[#00aaff] text-black text- w-5 h-5 rounded-full grid place-items-center font-bold">{cartCount}</span>
            </Link>
            <Link href="/login" className="relative p-2 hover:bg-white/10 rounded-full transition">
              <User size={20} />
            </Link>

            {/* Mobile Toggle */}
            <button
              className="md:hidden p-2 hover:bg-white/10 rounded-full"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <motion.div animate={{ rotate: menuOpen ? 90 : 0 }}>
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t border-white/10 bg-[#0a0f1c]/95 backdrop-blur-xl overflow-hidden"
            >
              <div className="px-4 py-3 flex flex-col gap-1">
                {navItems.map((item, i) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive
                          ? "bg-[#00aaff] text-black"
                          : "hover:bg-white/10 text-white/80"
                          }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}