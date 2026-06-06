"use client";

import { CartItem, Product } from "@/types";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type CartContextType = {
    cart: CartItem[];
    addToCart: (product: Product, qty?: number) => void;
    removeFromCart: (id: string | number) => void;
    updateQty: (id: string | number, qty: number) => void;
    clearCart: () => void;
    total: number;
    count: number;
    isReady: boolean;
    getTotal: () => number; // ✅ নতুন
    getSubtotal: (id: string | number) => number; // ✅ bonus
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isReady, setIsReady] = useState(false);

    // Load from localStorage
    useEffect(() => {
        try {
            const saved = localStorage.getItem("gadgetgor-cart");
            if (saved) {
                setCart(JSON.parse(saved));
            }
        } catch (error) {
            console.error("Failed to load cart:", error);
        }
        setIsReady(true);
    }, []);

    // Save to localStorage
    useEffect(() => {
        if (isReady) {
            localStorage.setItem("gadgetgor-cart", JSON.stringify(cart));
        }
    }, [cart, isReady]);

    const addToCart = (product: Product, qty: number = 1) => {
        console.log(product, "aita add korci");
        setCart(prev => {
            const exist = prev.find(p => String(p.id) === String(product.id));
            if (exist) {
                return prev.map(p =>
                    String(p.id) === String(product.id)
                        ? { ...p, qty: p.qty + qty }
                        : p
                );
            }
            return [...prev, { ...product, qty }];
        });
    };

    const removeFromCart = (id: string | number) => {
        setCart(prev => prev.filter(p => String(p.id) !== String(id)));
    };

    const updateQty = (id: string | number, qty: number) => {
        if (qty < 1) {
            removeFromCart(id);
            return;
        }
        setCart(prev =>
            prev.map(p => (String(p.id) === String(id) ? { ...p, qty } : p))
        );
    };

    const clearCart = () => setCart([]);

    // ✅ Total calculate
    const total = cart.reduce((sum, item) => sum + Number(item.price) * item.qty, 0);
    const count = cart.reduce((sum, item) => sum + item.qty, 0);

    // ✅ getTotal function
    const getTotal = () => {
        return cart.reduce((sum, item) => sum + Number(item.price) * item.qty, 0);
    };

    // ✅ Bonus: single item subtotal
    const getSubtotal = (id: string | number) => {
        const item = cart.find(p => String(p.id) === String(id));
        return item ? Number(item.price) * item.qty : 0;
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                updateQty,
                clearCart,
                total,
                count,
                isReady,
                getTotal,
                getSubtotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within CartProvider");
    }
    return context;
};