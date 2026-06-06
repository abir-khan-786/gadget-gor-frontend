"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/components/Shared/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from "lucide-react";

export default function CartPage() {
    const { cart, updateQty, removeFromCart, clearCart, total, count, isReady } = useCart();
    console.log(cart, "aita paici")

    if (!isReady) {
        return (
            <div className="min-h- grid place-items-center bg-[#0a0f1c] text-white">
                <div className="animate-pulse">Loading cart...</div>
            </div>
        );
    }

    if (cart.length === 0) {
        return (
            <div className="min-h- bg-[#0a0f1c] text-white flex flex-col items-center justify-center px-4">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center"
                >
                    <ShoppingBag size={80} className="mx-auto mb-6 text-[#00aaff]/50" />
                    <h1 className="text-3xl font-bold mb-2">Your cart is empty</h1>
                    <p className="text-white/60 mb-8">Add some gadgets to get started</p>
                    <Link href="/shop">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#00aaff] text-black px-8 py-3 rounded-full font-semibold"
                        >
                            Continue Shopping
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0a0f1c] text-white">
            <div className="max-w-6xl mx-auto px-4 py-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <Link href="/shop" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-2">
                            <ArrowLeft size={18} /> Back to Shop
                        </Link>
                        <h1 className="text-3xl font-bold">Shopping Cart <span className="text-[#00aaff]">({count})</span></h1>
                    </div>
                    <button
                        onClick={clearCart}
                        className="text-sm text-red-400 hover:text-red-300"
                    >
                        Clear All
                    </button>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-4">
                        <AnimatePresence>
                            {cart.map((item) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    className="bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm"
                                >
                                    <div className="flex gap-4">
                                        <div className="relative w-24 h-24 bg-white/5 rounded-xl overflow-hidden flex-shrink-0">
                                            <Image
                                                src={item.image || "/placeholder.png"}
                                                alt={item.name}
                                                width={80}
                                                height={80}
                                                className="object-cover rounded"
                                            />
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <div className="flex justify-between items-start gap-2">
                                                <div>
                                                    <h3 className="font-semibold truncate">{item.name}</h3>
                                                    <p className="text-xs text-white/50">{item.category || item.category}</p>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart((item.id))}
                                                    className="p-1.5 hover:bg-red-500/20 rounded-lg text-red-400"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>

                                            <div className="flex items-end justify-between mt-3">
                                                <div className="flex items-center gap-2 bg-black/30 rounded-full p-1">
                                                    <button
                                                        onClick={() => updateQty((item.id), item.qty - 1)}
                                                        className="w-7 h-7 grid place-items-center hover:bg-white/10 rounded-full"
                                                    >
                                                        <Minus size={14} />
                                                    </button>
                                                    <span className="w-8 text-center text-sm font-medium">{item.qty}</span>
                                                    <button
                                                        onClick={() => updateQty((item.id), item.qty + 1)}
                                                        className="w-7 h-7 grid place-items-center hover:bg-white/10 rounded-full"
                                                    >
                                                        <Plus size={14} />
                                                    </button>
                                                </div>

                                                <div className="text-right">
                                                    <p className="font-bold text-[#00aaff]">৳{(item.price * item.qty).toLocaleString()}</p>
                                                    <p className="text-xs text-white/50">৳{item.price.toLocaleString()} each</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm sticky top-24">
                            <h2 className="text-xl font-bold mb-4">Order Summary</h2>

                            <div className="space-y-3 text-sm mb-6">
                                <div className="flex justify-between">
                                    <span className="text-white/60">Subtotal ({count} items)</span>
                                    <span>৳{total.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-white/60">Delivery</span>
                                    <span className="text-green-400">Free</span>
                                </div>
                                <div className="border-t border-white/10 pt-3 flex justify-between font-bold text-lg">
                                    <span>Total</span>
                                    <span className="text-[#00aaff]">৳{total.toLocaleString()}</span>
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-[#00aaff] text-black font-semibold py-3 rounded-xl mb-3"
                            >
                                Proceed to Checkout
                            </motion.button>

                            <Link href="/shop" className="block text-center text-sm text-white/60 hover:text-white">
                                Continue Shopping
                            </Link>

                            <div className="mt-6 pt-6 border-t border-white/10 text-xs text-white/50 space-y-2">
                                <p>✓ Free delivery in Dhaka</p>
                                <p>✓ 0% EMI available</p>
                                <p>✓ 7 days replacement</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}