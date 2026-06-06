"use client";
import { useWishlist } from "@/components/Shared/WishlistContext";
import { useCart } from "@/components/Shared/CartContext";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function WishlistPage() {
    const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();
    const { addToCart } = useCart();
    const router = useRouter();

    if (wishlist.length === 0) {
        return (
            <div className="min-h- bg-[#0a0f1c] text-white grid place-items-center p-4">
                <div className="text-center">
                    <Heart size={64} className="mx-auto mb-4 text-white/20" />
                    <h2 className="text-2xl font-bold mb-2">Your wishlist is empty</h2>
                    <p className="text-white/60 mb-6">Save items you love</p>
                    <button onClick={() => router.push('/shop')} className="px-6 py-3 bg-[#00aaff] text-black rounded-xl font-medium">
                        Start Shopping
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0a0f1c] text-white">
            <div className="max-w-6xl mx-auto px-4 py-10">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold flex items-center gap-3">
                        <Heart className="text-red-500 fill-red-500" /> Wishlist ({wishlist.length})
                    </h1>
                    <button onClick={clearWishlist} className="text-sm text-white/60 hover:text-red-400 flex items-center gap-1.5">
                        <Trash2 size={14} /> Clear All
                    </button>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {wishlist.map((item) => (
                        <div key={item.id} className="group bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition">
                            <div className="relative aspect-square bg-white/5">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                <button onClick={() => removeFromWishlist(item.id)} className="absolute top-3 right-3 w-8 h-8 grid place-items-center bg-black/70 rounded-full hover:bg-red-500 transition">
                                    <Trash2 size={14} />
                                </button>
                            </div>
                            <div className="p-4">
                                <h3 className="font-medium mb-1 line-clamp-1">{item.name}</h3>
                                <p className="text-[#00aaff] font-bold mb-3">৳{Number(item.price).toLocaleString('en-BD')}</p>
                                <button
                                    onClick={() => {
                                        addToCart(item, 1);
                                        removeFromWishlist(item.id);
                                    }}
                                    className="w-full py-2.5 bg-[#00aaff] text-black rounded-xl text-sm font-medium hover:bg-[#00aaff]/90 flex items-center justify-center gap-1.5"
                                >
                                    <ShoppingCart size={15} /> Move to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}