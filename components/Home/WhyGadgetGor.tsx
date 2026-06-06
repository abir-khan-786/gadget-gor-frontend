/* components/WhyGadgetGor.jsx */
export default function WhyGadgetGor() {
    const features = [
        {
            icon: "🛡️",
            title: "Official Warranty",
            desc: "1 Year official warranty on all products",
            color: "from-blue-500/20 to-cyan-500/20"
        },
        {
            icon: "💳",
            title: "0% EMI Available",
            desc: "Up to 12 months installment with 0% interest",
            color: "from-purple-500/20 to-pink-500/20"
        },
        {
            icon: "🚚",
            title: "Fast Delivery",
            desc: "Same-day delivery in Dhaka, 2-3 days nationwide",
            color: "from-green-500/20 to-emerald-500/20"
        },
        {
            icon: "🔒",
            title: "Secure Payment",
            desc: "bKash, Nagad, Rocket, Visa, COD available",
            color: "from-orange-500/20 to-red-500/20"
        },
    ];

    return (
        <section className="bg-[#0a0f1c] py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
                        Why Choose Gadget Gor?
                    </h2>
                    <p className="text-white/60 text-base">
                        Trusted by 50,000+ customers across Bangladesh
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative"
                        >
                            {/* Hover glow */}
                            <div className={`absolute -inset-0.5 bg-gradient-to-br ${feature.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            {/* Card */}
                            <div className="relative h-full bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-7 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                                {/* Icon */}
                                <div className="text-4xl sm:text-5xl mb-4 transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                                    {feature.icon}
                                </div>

                                {/* Content */}
                                <h3 className="text-white font-semibold text-lg sm:text-xl mb-2 group-hover:text-[#00aaff] transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    {feature.desc}
                                </p>

                                {/* Bottom accent */}
                                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 pt-12 border-t border-white/10">
                    {[
                        { value: "50K+", label: "Happy Customers" },
                        { value: "500+", label: "Products" },
                        { value: "4.9", label: "Rating" },
                        { value: "24/7", label: "Support" },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-xs sm:text-sm text-white/50 uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}