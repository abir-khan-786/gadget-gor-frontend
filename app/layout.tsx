import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Shared/Footer";
import ToastProvider from "@/components/ToastProvider";
import GadgetGorHeader from "@/components/Shared/GadgetGorHeader";

export const metadata: Metadata = {
  title: "Gadget Gor - Online Gadget Shop",
  description: "Modern online gadget shop frontend"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ToastProvider />
        <GadgetGorHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
