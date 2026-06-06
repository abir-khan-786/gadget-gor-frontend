"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/components/Shared/CartContext";
import { ArrowLeft, CreditCard, Truck, Shield, MapPin, Phone, User, Mail, Check } from "lucide-react";

export default function CheckoutPage() {
    const router = useRouter();
    const { cart, getTotal, clearCart } = useCart();
    const [step, setStep] = useState(1);
    const [payment, setPayment] = useState("cod");
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
        city: "Dhaka",
        note: "",
    });

    const subtotal = getTotal();
    const shipping = subtotal > 2000 ? 0 : 60;
    const total = subtotal + shipping;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulate order
        await new Promise(r => setTimeout(r, 1500));

        clearCart();
        setStep(3);
        setLoading(false);
    };

    if (cart.length === 0 && step !== 3) {
        return (
            <div className="min-h-screen bg-[#0a0f1c] text-white grid place-items-center p-4">
                <div className="text-center">
                    <div className="text-6xl mb-4">🛒</div>
                    <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
                    <button onClick={() => router.push("/shop")} className="mt-4 px-6 py-3 bg-[#00aaff] text-black rounded-xl font-medium">
                        Continue Shopping
                    </button>
                </div>
            </div>
        );
    }

    if (step === 3) {
        return (
            <div className="min-h-screen bg-[#0a0f1c] text-white flex items-center justify-center p-4">
                <div className="max-w-md w-full text-center">
                    <div className="w-20 h-20 mx-auto mb-6 bg-emerald-500/20 rounded-full grid place-items-center">
                        <Check size={40} className="text-emerald-400" />
                    </div>
                    <h1 className="text-3xl font-bold mb-3">Order Placed!</h1>
                    <p className="text-white/60 mb-2">Order #GG{Math.floor(Math.random() * 90000) + 10000}</p>
                    <p className="text-white/60 mb-8">We'll call you within 30 minutes to confirm</p>
                    <div className="space-y-3">
                        <button onClick={() => router.push("/shop")} className="w-full py-3 bg-[#00aaff] text-black rounded-xl font-semibold">
                            Continue Shopping
                        </button>
                        <button onClick={() => router.push("/")} className="w-full py-3 bg-white/5 border border-white/10 rounded-xl">
                            Back to Home
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0a0f1c] text-white">
            {/* Header */}
            <div className="sticky top-0 z-40 bg-[#050811]/90 backdrop-blur-xl border-b border-white/10">
                <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
                    <button onClick={() => router.back()} className="flex items-center gap-2 text-white/70 hover:text-white">
                        <ArrowLeft size={20} /> Back
                    </button>
                    <h1 className="font-semibold">Checkout</h1>
                    <div className="w-20" />
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-6 lg:py-10">
                <div className="grid lg:grid-cols-[1fr_380px] gap-8">
                    {/* LEFT - Form */}
                    <div>
                        {/* Steps */}
                        <div className="flex items-center gap-3 mb-8">
                            {[
                                { n: 1, label: "Information" },
                                { n: 2, label: "Payment" },
                            ].map((s) => (
                                <div key={s.n} className="flex items-center gap-3">
                                    <div className={`w-8 h-8 rounded-full grid place-items-center text-sm font-medium transition ${step >= s.n ? "bg-[#00aaff] text-black" : "bg-white/10 text-white/50"}`}>
                                        {s.n}
                                    </div>
                                    <span className={`text-sm hidden sm:block ${step >= s.n ? "text-white" : "text-white/50"}`}>{s.label}</span>
                                    {s.n < 2 && <div className={`w-12 h-px mx-2 ${step > s.n ? "bg-[#00aaff]" : "bg-white/10"}`} />}
                                </div>
                            ))}
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {step === 1 && (
                                <div className="space-y-5">
                                    <div>
                                        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                            <User size={20} className="text-[#00aaff]" /> Contact Information
                                        </h2>
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="text-xs text-white/60 mb-1.5 block">Full Name *</label>
                                                <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Mahadi Khan" className="w-full px-4 py-3 bg-white/[0.03] border border-white/15 rounded-xl outline-none focus:border-[#00aaff] transition" />
                                            </div>
                                            <div>
                                                <label className="text-xs text-white/60 mb-1.5 block">Phone Number *</label>
                                                <div className="relative">
                                                    <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
                                                    <input required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="01XXXXXXXXX" className="w-full pl-10 pr-4 py-3 bg-white/[0.03] border border-white/15 rounded-xl outline-none focus:border-[#00aaff]" />
                                                </div>
                                            </div>
                                            <div className="sm:col-span-2">
                                                <label className="text-xs text-white/60 mb-1.5 block">Email (optional)</label>
                                                <div className="relative">
                                                    <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
                                                    <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" className="w-full pl-10 pr-4 py-3 bg-white/[0.03] border border-white/15 rounded-xl outline-none focus:border-[#00aaff]" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                            <MapPin size={20} className="text-[#00aaff]" /> Delivery Address
                                        </h2>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="text-xs text-white/60 mb-1.5 block">Full Address *</label>
                                                <textarea required value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} placeholder="House, Road, Area" rows={3} className="w-full px-4 py-3 bg-white/[0.03] border border-white/15 rounded-xl outline-none focus:border-[#00aaff] resize-none" />
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="text-xs text-white/60 mb-1.5 block">City</label>
                                                    <select value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} className="w-full px-4 py-3 bg-[#0f172a] border border-white/15 rounded-xl outline-none focus:border-[#00aaff]">
                                                        <option>Dhaka</option>
                                                        <option>Chittagong</option>
                                                        <option>Sylhet</option>
                                                        <option>Rajshahi</option>
                                                        <option>Khulna</option>
                                                        <option>Barisal</option>
                                                        <option>Rangpur</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label className="text-xs text-white/60 mb-1.5 block">Delivery Note</label>
                                                    <input value={form.note} onChange={e => setForm({ ...form, note: e.target.value })} placeholder="Floor, landmark" className="w-full px-4 py-3 bg-white/[0.03] border border-white/15 rounded-xl outline-none focus:border-[#00aaff]" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <button type="button" onClick={() => setStep(2)} disabled={!form.name || !form.phone || !form.address} className="w-full py-3.5 bg-[#00aaff] text-black font-semibold rounded-xl hover:bg-[#00aaff]/90 transition disabled:opacity-40">
                                        Continue to Payment
                                    </button>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="space-y-5">
                                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                        <CreditCard size={20} className="text-[#00aaff]" /> Payment Method
                                    </h2>

                                    <div className="space-y-3">
                                        {[
                                            { id: "cod", label: "Cash on Delivery", desc: "Pay when you receive", icon: "💵", recommended: true },
                                            { id: "bkash", label: "bKash", desc: "Pay with bKash", icon: "📱" },
                                            { id: "nagad", label: "Nagad", desc: "Pay with Nagad", icon: "💳" },
                                            { id: "card", label: "Card Payment", desc: "Visa/Mastercard", icon: "💳" },
                                        ].map((m) => (
                                            <label key={m.id} className={`relative flex items-center gap-4 p-4 border rounded-2xl cursor-pointer transition ${payment === m.id ? "bg-[#00aaff]/10 border-[#00aaff]/50" : "bg-white/[0.02] border-white/10 hover:border-white/20"}`}>
                                                <input type="radio" name="payment" checked={payment === m.id} onChange={() => setPayment(m.id)} className="sr-only" />
                                                <div className="text-2xl">{m.icon}</div>
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2">
                                                        <span className="font-medium">{m.label}</span>
                                                        {m.recommended && <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text- rounded-full">RECOMMENDED</span>}
                                                    </div>
                                                    <p className="text-xs text-white/50 mt-0.5">{m.desc}</p>
                                                </div>
                                                <div className={`w-5 h-5 rounded-full border-2 grid place-items-center ${payment === m.id ? "border-[#00aaff]" : "border-white/30"}`}>
                                                    {payment === m.id && <div className="w-2.5 h-2.5 bg-[#00aaff] rounded-full" />}
                                                </div>
                                            </label>
                                        ))}
                                    </div>

                                    <div className="flex gap-3 pt-4">
                                        <button type="button" onClick={() => setStep(1)} className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10">
                                            Back
                                        </button>
                                        <button type="submit" disabled={loading} className="flex-1 py-3 bg-[#00aaff] text-black font-semibold rounded-xl hover:bg-[#00aaff]/90 disabled:opacity-50">
                                            {loading ? "Processing..." : `Place Order • ৳${total.toLocaleString("en-BD")}`}
                                        </button>
                                    </div>
                                </div>
                            )}
                        </form>
                    </div>

                    {/* RIGHT - Order Summary */}
                    <div className="lg:sticky lg:top-24 h-fit">
                        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
                            <h3 className="font-semibold text-lg mb-4">Order Summary</h3>

                            <div className="space-y-3 mb-4 max-h- overflow-y-auto pr-2 -mr-2">
                                {cart.map((item: any) => (
                                    <div key={item.id} className="flex gap-3">
                                        <div className="relative">
                                            <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover bg-white/5" />
                                            <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#00aaff] text-black text- font-bold rounded-full grid place-items-center">
                                                {item.qty}
                                            </span>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium truncate">{item.name}</p>
                                            <p className="text-xs text-white/50">{item.category}</p>
                                            <p className="text-sm font-semibold mt-1">৳{(item.price * item.qty).toLocaleString("en-BD")}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-white/10 pt-4 space-y-2.5 text-sm">
                                <div className="flex justify-between text-white/70">
                                    <span>Subtotal ({cart.reduce((s: number, i: any) => s + i.qty, 0)} items)</span>
                                    <span>৳{subtotal.toLocaleString("en-BD")}</span>
                                </div>
                                <div className="flex justify-between text-white/70">
                                    <span>Shipping</span>
                                    <span className={shipping === 0 ? "text-emerald-400" : ""}>
                                        {shipping === 0 ? "FREE" : `৳${shipping}`}
                                    </span>
                                </div>
                                {shipping === 0 && (
                                    <p className="text- text-emerald-400">✓ Free shipping on orders over ৳2,000</p>
                                )}
                                <div className="flex justify-between font-semibold text-base pt-2.5 border-t border-white/10">
                                    <span>Total</span>
                                    <span className="text-[#00aaff]">৳{total.toLocaleString("en-BD")}</span>
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-3 gap-3">
                                {[
                                    { icon: Truck, label: "Fast Delivery" },
                                    { icon: Shield, label: "Secure" },
                                    { icon: Check, label: "Guaranteed" },
                                ].map((i) => (
                                    <div key={i.label} className="text-center">
                                        <i.icon size={18} className="mx-auto mb-1 text-white/50" />
                                        <p className="text- text-white/60">{i.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}