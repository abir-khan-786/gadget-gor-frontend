"use client";
import { Shield, Truck, Award, Users, MapPin, Phone, Mail, Clock, CheckCircle, Star, Heart } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AboutPage() {
    const router = useRouter();

    const stats = [
        { label: "Happy Customers", value: "50,000+", icon: Users },
        { label: "Products Sold", value: "1,20,000+", icon: Award },
        { label: "Years Trusted", value: "5+", icon: Shield },
        { label: "Cities Covered", value: "64", icon: MapPin },
    ];

    const values = [
        {
            icon: Shield,
            title: "100% Authentic",
            desc: "Every product comes with official warranty. No copy, no refurbished.",
        },
        {
            icon: Truck,
            title: "Fast Delivery",
            desc: "Dhaka same-day, outside Dhaka 24-48 hours. Cash on delivery available.",
        },
        {
            icon: Heart,
            title: "Customer First",
            desc: "7-day easy return, lifetime support. Your satisfaction is our priority.",
        },
        {
            icon: Award,
            title: "Best Price",
            desc: "Official distributor pricing. Price match guarantee across Bangladesh.",
        },
    ];

    const team = [
        { name: "Mahadi Khan", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200" },
        { name: "Rafiq Ahmed", role: "Head of Operations", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200" },
        { name: "Sadia Rahman", role: "Customer Success", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200" },
    ];

    return (
        <div className="min-h-screen bg-[#0a0f1c] text-white">
            {/* Hero */}
            <section className="relative overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-gradient-to-b from-[#00aaff]/10 via-transparent to-transparent" />
                <div className="absolute top-20 -right-40 w-96 h-96 bg-[#00aaff]/20 rounded-full blur-" />

                <div className="relative max-w-6xl mx-auto px-4 py-16 lg:py-24">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#00aaff]/10 border border-[#00aaff]/20 rounded-full text-xs text-[#00aaff] mb-6">
                            <span className="w-1.5 h-1.5 bg-[#00aaff] rounded-full animate-pulse" />
                            EST. 2020 • DHAKA, BANGLADESH
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-bold leading-[1.1] mb-6">
                            Bangladesh's Most
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00aaff] to-cyan-400">
                                Trusted Gadget Store
                            </span>
                        </h1>

                        <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-2xl">
                            Gadget Gor started with a simple idea — everyone in Bangladesh should get authentic gadgets at the best price.

                            Today, 50,000+ customers trust us for their tech needs.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            <button onClick={() => router.push("/shop")} className="px-6 py-3 bg-[#00aaff] text-black font-semibold rounded-xl hover:bg-[#00aaff]/90 transition">
                                Shop Now
                            </button>
                            <button onClick={() => router.push("/contact")} className="px-6 py-3 bg-white/5 border border-white/15 rounded-xl hover:bg-white/10 transition">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="border-b border-white/5">
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((s) => (
                            <div key={s.label} className="text-center">
                                <s.icon size={28} className="mx-auto mb-3 text-[#00aaff]/70" />
                                <div className="text-3xl font-bold mb-1">{s.value}</div>
                                <div className="text-sm text-white/50">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story */}
            <section className="max-w-6xl mx-auto px-4 py-16 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div>
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Story</h2>
                        <div className="space-y-4 text-white/70 leading-relaxed">
                            <p>
                                In 2020, when the market was flooded with fake products, we made a decision — to build a store where customers could shop with complete trust.

                                It started with a small shop in Mirpur. Today, our online store ships 200+ orders every single day across Bangladesh.

                            </p>
                            <p>
                                We are an authorized partner of Apple, Samsung, and Xiaomi. Every product comes through official channels, with full warranty and GST invoice.

                                No copies. No refurbished units. Only 100% authentic gadgets.
                            </p>
                            <p>



                                Our mission is simple: deliver original products at the best price, with fast delivery and honest after-sales service.

                                Gadget Gor — Where Trust Meets Technology.
                            </p>
                        </div>

                        <div className="mt-8 flex items-center gap-6">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <img key={i} src={`https://i.pravatar.cc/40?img=${i + 10}`} className="w-10 h-10 rounded-full border-2 border-[#0a0f1c]" alt="" />
                                ))}
                            </div>
                            <div>
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-amber-400 text-amber-400" />)}
                                </div>
                                <p className="text-xs text-white/60 mt-1">4.9/5 from 12,450 reviews</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-white/5 border border-white/10">
                            <img src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=800" alt="Store" className="w-full h-full object-cover opacity-80" />
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-[#0a0f1c] border border-white/10 rounded-2xl p-4 shadow-2xl">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-emerald-500/20 rounded-xl grid place-items-center">
                                    <CheckCircle className="text-emerald-400" size={24} />
                                </div>
                                <div>
                                    <div className="font-semibold">Authorized Dealer</div>
                                    <div className="text-xs text-white/60">Verified 2020</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="bg-white/[0.01] border-y border-white/5">
                <div className="max-w-6xl mx-auto px-4 py-16 lg:py-20">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-3xl font-bold mb-3">Why 50,000+ People Choose Us</h2>
                        <p className="text-white/60">We don't just sell gadgets, we build trust</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {values.map((v) => (
                            <div key={v.title} className="group p-6 bg-white/[0.02] border border-white/10 rounded-2xl hover:bg-white/[0.04] hover:border-white/20 transition-all hover:-translate-y-1">
                                <div className="w-12 h-12 bg-[#00aaff]/10 rounded-xl grid place-items-center mb-4 group-hover:bg-[#00aaff]/20 transition">
                                    <v.icon size={22} className="text-[#00aaff]" />
                                </div>
                                <h3 className="font-semibold mb-2">{v.title}</h3>
                                <p className="text-sm text-white/60 leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="max-w-6xl mx-auto px-4 py-16 lg:py-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-3">Meet The Team</h2>
                    <p className="text-white/60">Passionate people behind Gadget Gor</p>
                </div>

                <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                    {team.map((person) => (
                        <div key={person.name} className="text-center group">
                            <div className="relative w-32 h-32 mx-auto mb-4">
                                <img src={person.img} alt={person.name} className="w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500" />
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
                            </div>
                            <h4 className="font-semibold">{person.name}</h4>
                            <p className="text-sm text-[#00aaff]">{person.role}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Location */}
            <section className="border-t border-white/5">
                <div className="max-w-6xl mx-auto px-4 py-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Visit Our Store</h2>
                            <div className="space-y-4">
                                {[
                                    { icon: MapPin, label: "Address", value: "Shop 45, Level 4, Bashundhara City, Panthapath, Dhaka 1205" },
                                    { icon: Phone, label: "Phone", value: "+880 1700-000000" },
                                    { icon: Mail, label: "Email", value: "hello@gadgetgor.com" },
                                    { icon: Clock, label: "Hours", value: "10 AM - 10 PM (Everyday)" },
                                ].map((item) => (
                                    <div key={item.label} className="flex gap-4">
                                        <div className="w-10 h-10 bg-white/5 rounded-xl grid place-items-center shrink-0">
                                            <item.icon size={18} className="text-white/60" />
                                        </div>
                                        <div>
                                            <div className="text-xs text-white/50 mb-0.5">{item.label}</div>
                                            <div className="text-white/90">{item.value}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">
                            <h3 className="text-xl font-semibold mb-3">Have Questions?</h3>
                            <p className="text-white/60 mb-6 text-sm">We're here to help you find the perfect gadget</p>
                            <div className="space-y-3">
                                <button className="w-full py-3 bg-[#00aaff] text-black font-medium rounded-xl">Chat on WhatsApp</button>
                                <button className="w-full py-3 bg-white/5 border border-white/10 rounded-xl">Call Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}