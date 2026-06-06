/* components/Brands.jsx */
"use client";
import { motion } from "framer-motion";

// ✅ Type আগে define
type Brand = {
    name: string;
    logo: string;
};

function BrandCard({ brand }: { brand: Brand }) {
    return (
        <div className="group relative">
            <div className="h-24 sm:h-28 bg-white/[0.02] border border-white/10 rounded-2xl flex items-center justify-center p-5 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 cursor-pointer backdrop-blur-sm">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#00aaff]/0 via-[#00aaff]/5 to-[#00aaff]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                    src={brand.logo}
                    alt={brand.name}
                    className="relative max-w-[80%] max-h-[60%] object-contain filter grayscale group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-500"
                    loading="lazy"
                />
            </div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-black/80 backdrop-blur text- text-white rounded-md opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap z-20">
                {brand.name}
            </div>
        </div>
    );
}

export default function Brands() {
    const brands: Brand[] = [
        { name: "Apple", logo: "https://cdn.worldvectorlogo.com/logos/apple-13.svg" },
        { name: "Samsung", logo: "https://cdn.worldvectorlogo.com/logos/samsung-electronics.svg" },
        { name: "Xiaomi", logo: "https://cdn.worldvectorlogo.com/logos/xiaomi-1.svg" },
        { name: "OnePlus", logo: "https://cdn.worldvectorlogo.com/logos/oneplus-2.svg" },
        { name: "Sony", logo: "https://cdn.worldvectorlogo.com/logos/sony-ericsson.svg" },
        { name: "Anker", logo: "https://cdn.worldvectorlogo.com/logos/anker-logo-1.svg" },
        { name: "JBL", logo: "https://cdn.worldvectorlogo.com/logos/jbl-2.svg" },
        { name: "Realme", logo: "https://cdn.worldvectorlogo.com/logos/realme-1.svg" },
        { name: "OPPO", logo: "https://cdn.worldvectorlogo.com/logos/oppo-2022-1.svg" },
        { name: "Vivo", logo: "https://cdn.worldvectorlogo.com/logos/vivo-2.svg" },
        { name: "Huawei", logo: "https://cdn.worldvectorlogo.com/logos/huawei-2.svg" },
        { name: "LG", logo: "https://cdn.worldvectorlogo.com/logos/logo-lg.svg" },

    ];

    const col1 = [...brands.slice(0, 6), ...brands.slice(0, 6)];
    const col2 = [...brands.slice(6, 12), ...brands.slice(6, 12)];

    return (
        <section className="bg-[#050811] py-16 sm:py-20 border-y border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <p className="text-white/40 text-xs uppercase tracking-[0.2em] font-medium mb-3">
                        Trusted Partners
                    </p>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">
                        Official <span className="text-[#00aaff]">Authorized</span> Brands
                    </h2>
                </div>

                <div className="relative h- sm:h- max-w-5xl mx-auto">
                    <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#050811] to-transparent z-10 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#050811] to-transparent z-10 pointer-events-none" />

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 h-full">
                        <div className="relative overflow-hidden rounded-2xl">
                            <motion.div animate={{ y: ["0%", "-50%"] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="flex flex-col gap-4">
                                {col1.map((brand, i) => <BrandCard key={`c1-${i}`} brand={brand} />)}
                            </motion.div>
                        </div>

                        <div className="relative overflow-hidden rounded-2xl hidden sm:block">
                            <motion.div animate={{ y: ["-50%", "0%"] }} transition={{ duration: 25, repeat: Infinity, ease: "linear" }} className="flex flex-col gap-4">
                                {col2.map((brand, i) => <BrandCard key={`c2-${i}`} brand={brand} />)}
                            </motion.div>
                        </div>

                        <div className="relative overflow-hidden rounded-2xl hidden md:block">
                            <motion.div animate={{ y: ["0%", "-50%"] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="flex flex-col gap-4">
                                {col1.map((brand, i) => <BrandCard key={`c3-${i}`} brand={brand} />)}
                            </motion.div>
                        </div>

                        <div className="relative overflow-hidden rounded-2xl hidden lg:block">
                            <motion.div animate={{ y: ["-50%", "0%"] }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }} className="flex flex-col gap-4">
                                {col2.map((brand, i) => <BrandCard key={`c4-${i}`} brand={brand} />)}
                            </motion.div>
                        </div>

                        <div className="relative overflow-hidden rounded-2xl hidden lg:block">
                            <motion.div animate={{ y: ["0%", "-50%"] }} transition={{ duration: 26, repeat: Infinity, ease: "linear" }} className="flex flex-col gap-4">
                                {[...brands].reverse().map((brand, i) => <BrandCard key={`c5-${i}`} brand={brand} />)}
                            </motion.div>
                        </div>

                        <div className="relative overflow-hidden rounded-2xl hidden lg:block">
                            <motion.div animate={{ y: ["-50%", "0%"] }} transition={{ duration: 32, repeat: Infinity, ease: "linear" }} className="flex flex-col gap-4">
                                {col1.map((brand, i) => <BrandCard key={`c6-${i}`} brand={brand} />)}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}