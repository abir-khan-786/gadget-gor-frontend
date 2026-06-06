"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Product, WishlistItem } from "@/types";

type WishlistContextType = {
    wishlist: WishlistItem[];
    addToWishlist: (product: Product) => void;
    removeFromWishlist: (id: string | number) => void;
    isInWishlist: (id: string | number) => boolean;
    toggleWishlist: (product: Product) => void;
    clearWishlist: () => void;
    count: number;
};

const WishlistContext = createContext<WishlistContextType | null>(null);

export function WishlistProvider({ children }: { children: ReactNode }) {
    const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
    const [isReady, setIsReady] = useState(false);

    // Load
    useEffect(() => {
        try {
            const saved = localStorage.getItem("gadgetgor-wishlist");
            if (saved) setWishlist(JSON.parse(saved));
        } catch { }
        setIsReady(true);
    }, []);

    // Save
    useEffect(() => {
        if (isReady) {
            localStorage.setItem("gadgetgor-wishlist", JSON.stringify(wishlist));
        }
    }, [wishlist, isReady]);

    const addToWishlist = (product: Product) => {
        setWishlist(prev => {
            if (prev.find(p => String(p.id) === String(product.id))) return prev;
            return [...prev, product];
        });
    };

    const removeFromWishlist = (id: string | number) => {
        setWishlist(prev => prev.filter(p => String(p.id) !== String(id)));
    };

    const isInWishlist = (id: string | number) => {
        return wishlist.some(p => String(p.id) === String(id));
    };

    const toggleWishlist = (product: Product) => {
        if (isInWishlist(product.id)) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    };

    const clearWishlist = () => setWishlist([]);

    return (
        <WishlistContext.Provider value={{
            wishlist,
            addToWishlist,
            removeFromWishlist,
            isInWishlist,
            toggleWishlist,
            clearWishlist,
            count: wishlist.length
        }}>
            {children}
        </WishlistContext.Provider>
    );
}

export const useWishlist = () => {
    const ctx = useContext(WishlistContext);
    if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
    return ctx;
};