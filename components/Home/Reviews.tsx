/* components/Reviews.jsx */
export default function Reviews() {
    const reviews = [
        {
            name: "Rahim Ahmed",
            location: "Dhaka",
            rating: 5,
            text: "Best price for iPhone in Bangladesh. Got same day delivery! Product is 100% authentic with official warranty.",
            avatar: "RA",
            product: "iPhone 15 Pro"
        },
        {
            name: "Fatima Khan",
            location: "Chittagong",
            rating: 5,
            text: "Original product with warranty. EMI facility is great. Customer support helped me choose the right earbuds.",
            avatar: "FK",
            product: "AirPods Pro"
        },
        {
            name: "Tanvir Hasan",
            location: "Sylhet",
            rating: 5,
            text: "Customer service is excellent. Delivery was fast and packaging was premium. Highly recommended!",
            avatar: "TH",
            product: "Galaxy S24"
        },
    ];

    return (
        <section className="bg-[#050811] py-16 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-2 mb-4">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className="text-yellow-400 text-sm">★</span>
                            ))}
                        </div>
                        <span className="text-white text-sm font-medium">4.9/5</span>
                        <span className="text-white/60 text-xs">•</span>
                        <span className="text-white/60 text-xs">2,400+ reviews</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
                        What Our Customers Say
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        Don't just take our word for it - hear from our satisfied customers
                    </p>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
                    {reviews.map((review, index) => (
                        <div
                            key={index}
                            className="group relative"
                        >
                            {/* Glow effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-b from-[#00aaff]/20 to-transparent rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Card */}
                            <div className="relative h-full bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-3xl p-6 sm:p-7 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300">
                                {/* Quote icon */}
                                <div className="absolute top-6 right-6 text-white/10 group-hover:text-[#00aaff]/20 transition-colors">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M9.5 7C7 5 9 5 11.5S7 16 9.5 16H10v2H9.5C5.9 18 3 15.1 3 11.5S5.9 5 9.5 5H11v2H9.5zM18.5 7C16 7 14 9 14 11.5S16 16 18.5 16H19v2h-.5C14.9 18 12 15.1 12 11.5S14.9 5 18.5 5H20v2h-1.5z" />
                                    </svg>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#facc15" className="drop-shadow">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Review Text */}
                                <p className="text-white/80 text- leading-relaxed mb-6 relative z-10">
                                    "{review.text}"
                                </p>

                                {/* Product tag */}
                                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#00aaff]/10 border border-[#00aaff]/20 rounded-full mb-5">
                                    <span className="w-1.5 h-1.5 bg-[#00aaff] rounded-full"></span>
                                    <span className="text- text-[#00aaff] font-medium">{review.product}</span>
                                </div>

                                {/* Author */}
                                <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                                    <div className="relative">
                                        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#00aaff]/30 to-purple-600/30 flex items-center justify-center backdrop-blur">
                                            <span className="text-white font-bold text-sm">{review.avatar}</span>
                                        </div>
                                        <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-[#050811] flex items-center justify-center">
                                            <svg width="8" height="8" viewBox="0 0 24 24" fill="white">
                                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-white font-medium text-sm">{review.name}</div>
                                        <div className="flex items-center gap-1.5 mt-0.5">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white/40">
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" strokeWidth="1.5" />
                                                <circle cx="12" cy="10" r="3" strokeWidth="1.5" />
                                            </svg>
                                            <span className="text-white/50 text-xs">{review.location}</span>
                                            <span className="text-white/30 text-xs">•</span>
                                            <span className="text-white/40 text-xs">Verified Buyer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <button className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm transition group">
                        See all 2,400+ reviews
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-0.5 transition-transform">
                            <path d="M5 12h14M13 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}