/* components/Brands.jsx */
export default function Brands() {
    const brands = [
        { name: "Apple", logo: "🍎", color: "hover:text-gray-300" },
        { name: "Samsung", logo: "SAMSUNG", color: "hover:text-blue-400" },
        { name: "Xiaomi", logo: "mi", color: "hover:text-orange-400" },
        { name: "OnePlus", logo: "1+", color: "hover:text-red-400" },
        { name: "Sony", logo: "SONY", color: "hover:text-gray-300" },
        { name: "Anker", logo: "ANKER", color: "hover:text-blue-300" },
        { name: "JBL", logo: "JBL", color: "hover:text-orange-500" },
        { name: "Realme", logo: "realme", color: "hover:text-yellow-400" },
        { name: "OPPO", logo: "OPPO", color: "hover:text-green-400" },
        { name: "Vivo", logo: "vivo", color: "hover:text-blue-400" },
        { name: "Huawei", logo: "HUAWEI", color: "hover:text-red-500" },
        { name: "Baseus", logo: "Baseus", color: "hover:text-gray-300" },
    ];

    return (
        <section className="bg-[#050811] py-12 sm:py-16 border-y border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-10">
                    <p className="text-white/40 text-xs uppercase tracking-[0.2em] font-medium mb-2">
                        Trusted Partners
                    </p>
                    <h2 className="text-xl sm:text-2xl font-bold text-white">
                        Official Authorized Brands
                    </h2>
                </div>

                {/* Brands Grid */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-3 sm:gap-4">
                    {brands.map((brand, index) => (
                        <div
                            key={index}
                            className="group relative"
                        >
                            <div className="relative bg-white/[0.02] border border-white/10 rounded-2xl h-20 sm:h-24 flex items-center justify-center hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer overflow-hidden">
                                {/* Hover glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#00aaff]/0 to-[#00aaff]/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                                {/* Logo */}
                                <span className={`relative text-white/50 group-hover:text-white ${brand.color} font-bold text-lg sm:text-xl tracking-wide transition-colors duration-300`}>
                                    {brand.logo}
                                </span>
                            </div>

                            {/* Brand name on hover (mobile hidden) */}
                            <p className="text-center text- text-white/30 mt-2 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
                                {brand.name}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom text */}
                <div className="text-center mt-10">
                    <p className="text-white/40 text-sm">
                        100% Authentic Products • Official Warranty • Best Price Guarantee
                    </p>
                </div>
            </div>
        </section>
    );
}