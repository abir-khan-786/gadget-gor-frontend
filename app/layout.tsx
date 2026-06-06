import type { Metadata } from "next";
import "./globals.css";
import ToastProvider from "@/components/ToastProvider";
import { CartProvider } from "@/components/Shared/CartContext";
import { WishlistProvider } from "@/components/Shared/WishlistContext";

export const metadata: Metadata = {
  title: "Gadget Gor - Online Gadget Shop",
  description: "Modern online gadget shop frontend"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>


          <WishlistProvider>
            <ToastProvider />
            {children}
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
