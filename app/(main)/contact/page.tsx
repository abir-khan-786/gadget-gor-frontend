"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle, Headphones, Shield } from "lucide-react";

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "", message: "" });
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here call your backend API
        console.log("Contact form:", form);
        setSent(true);
        setTimeout(() => setSent(false), 3000);
    };

    const contacts = [
        {
            icon: Phone,
            title: "Hotline",
            value: "+880 1700-000000",
            action: "Call Now",
            href: "tel:+8801700000000",
            color: "from-emerald-500/20 to-emerald-500/5",
        },
        {
            icon: MessageCircle,
            title: "WhatsApp",
            value: "+880 1700-000000",
            action: "Chat Now",
            href: "https://wa.me/8801700000000",
            color: "from-[#25D366]/20 to-[#25D366]/5",
        },
        {
            icon: Mail,
            title: "Email",
            value: "hello@gadgetgor.com",
            action: "Send Mail",
            href: "mailto:hello@gadgetgor.com",
            color: "from-[#00aaff]/20 to-[#00aaff]/5",
        },
    ];

    return (
        <div className="min-h-screen bg-[#0a0f1c] text-white">
            {/* Header */}
            <section className="relative border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#00aaff]/10 to-transparent" />
                <div className="relative max-w-6xl mx-auto px-4 py-16 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#00aaff]/10 border border-[#00aaff]/20 rounded-full text-xs text-[#00aaff] mb-4">
                        <Headphones size={14} /> WE'RE HERE TO HELP
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-bold mb-4">Get in Touch</h1>
                    <p className="text-white/60 max-w-xl mx-auto">Have a question about a product? Need help with your order? Our team replies within 30 minutes.</p>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-4 py-12 lg:py-16">
                <div className="grid lg:grid-cols-[1fr_420px] gap-10">
                    {/* Left */}
                    <div>
                        {/* Quick Contact Cards */}
                        <div className="grid sm:grid-cols-3 gap-4 mb-10">
                            {contacts.map((c) => (
                                <a key={c.title} href={c.href} target="_blank" className="group relative overflow-hidden bg-white/[0.02] border border-white/10 rounded-2xl p-5 hover:bg-white/[0.04] hover:border-white/20 transition-all hover:-translate-y-0.5">
                                    <div className={`absolute inset-0 bg-gradient-to-b ${c.color} opacity-0 group-hover:opacity-100 transition`} />
                                    <div className="relative">
                                        <c.icon size={22} className="text-white/70 group-hover:text-white mb-3" />
                                        <div className="text-xs text-white/50 mb-1">{c.title}</div>
                                        <div className="font-medium text-sm mb-3">{c.value}</div>
                                        <div className="text-xs text-[#00aaff] group-hover:underline">{c.action} →</div>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Form */}
                        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 lg:p-8">
                            <h2 className="text-xl font-semibold mb-6">Send us a message</h2>

                            {sent ? (
                                <div className="py-12 text-center">
                                    <div className="w-16 h-16 mx-auto mb-4 bg-emerald-500/20 rounded-full grid place-items-center">
                                        <CheckCircle className="text-emerald-400" size={32} />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">Message Sent!</h3>
                                    <p className="text-white/60 text-sm">We'll reply within 30 minutes</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-xs text-white/60 mb-1.5 block">Your Name *</label>
                                            <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Mahadi Khan" className="w-full px-4 py-3 bg-[#050811] border border-white/15 rounded-xl outline-none focus:border-[#00aaff] transition" />
                                        </div>
                                        <div>
                                            <label className="text-xs text-white/60 mb-1.5 block">Phone Number *</label>
                                            <input required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="01XXXXXXXXX" className="w-full px-4 py-3 bg-[#050811] border border-white/15 rounded-xl outline-none focus:border-[#00aaff]" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-xs text-white/60 mb-1.5 block">Email (optional)</label>
                                        <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" className="w-full px-4 py-3 bg-[#050811] border border-white/15 rounded-xl outline-none focus:border-[#00aaff]" />
                                    </div>

                                    <div>
                                        <label className="text-xs text-white/60 mb-1.5 block">Subject</label>
                                        <select value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} className="w-full px-4 py-3 bg-[#050811] border border-white/15 rounded-xl outline-none focus:border-[#00aaff]">
                                            <option value="">Select topic</option>
                                            <option>Order Help</option>
                                            <option>Product Inquiry</option>
                                            <option>Warranty Claim</option>
                                            <option>Return / Exchange</option>
                                            <option>Wholesale</option>
                                            <option>Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="text-xs text-white/60 mb-1.5 block">Message *</label>
                                        <textarea required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={5} placeholder="How can we help you?" className="w-full px-4 py-3 bg-[#050811] border border-white/15 rounded-xl outline-none focus:border-[#00aaff] resize-none" />
                                    </div>

                                    <button type="submit" className="w-full py-3.5 bg-[#00aaff] text-black font-semibold rounded-xl hover:bg-[#00aaff]/90 transition flex items-center justify-center gap-2">
                                        <Send size={18} /> Send Message
                                    </button>

                                    <p className="text- text-white/40 text-center">We usually reply within 30 minutes (10AM - 10PM)</p>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* Right - Info */}
                    <div className="space-y-6">
                        {/* Store Info */}
                        <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6">
                            <h3 className="font-semibold mb-5 flex items-center gap-2">
                                <MapPin size={18} className="text-[#00aaff]" /> Visit Our Store
                            </h3>

                            <div className="space-y-4 text-sm">
                                <div>
                                    <div className="text-white/50 text-xs mb-1">Address</div>
                                    <div className="text-white/90 leading-relaxed">Shop 45, Level 4<br />Bashundhara City Shopping Mall<br />Panthapath, Dhaka 1205</div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                                    <div>
                                        <div className="flex items-center gap-1.5 text-white/50 text-xs mb-1">
                                            <Clock size={12} /> Hours
                                        </div>
                                        <div className="text-white/90">10AM - 10PM</div>
                                        <div className="text- text-white/50">Everyday</div>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-1.5 text-white/50 text-xs mb-1">
                                            <Phone size={12} /> Phone
                                        </div>
                                        <div className="text-white/90">01700-000000</div>
                                    </div>
                                </div>
                            </div>

                            {/* Map placeholder */}
                            <div className="mt-5 h-40 rounded-2xl overflow-hidden bg-white/5 border border-white/10 relative">
                                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600" alt="map" className="w-full h-full object-cover opacity-60" />
                                <div className="absolute inset-0 grid place-items-center">
                                    <a href="https://maps.google.com/?q=Bashundhara+City" target="_blank" className="px-4 py-2 bg-black/70 backdrop-blur rounded-lg text-xs border border-white/20 hover:bg-black/90">
                                        Open in Google Maps
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Support Features */}
                        <div className="bg-gradient-to-b from-[#00aaff]/10 to-transparent border border-[#00aaff]/20 rounded-3xl p-6">
                            <h3 className="font-semibold mb-4">Why Contact Us?</h3>
                            <div className="space-y-3">
                                {[
                                    { icon: Shield, text: "Official warranty support" },
                                    { icon: Clock, text: "30-min response time" },
                                    { icon: Headphones, text: "7-day easy return help" },
                                ].map((item) => (
                                    <div key={item.text} className="flex items-center gap-3 text-sm">
                                        <div className="w-8 h-8 bg-white/10 rounded-lg grid place-items-center">
                                            <item.icon size={16} className="text-[#00aaff]" />
                                        </div>
                                        <span className="text-white/80">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* FAQ Quick */}
                        <div className="text-center p-6">
                            <p className="text-sm text-white/60 mb-3">Looking for quick answers?</p>
                            <button className="text-[#00aaff] text-sm hover:underline">View FAQ →</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}