import Link from "next/link";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { ShieldCheck, Truck, Headphones, BadgeCheck, Star, ArrowRight, Zap, Gift, CreditCard } from "lucide-react";
import Hero from "@/components/Home/Hero";
import CategoryGrid from "@/components/Home/CategoryGrid";
import FeaturedProducts from "@/components/Home/FeaturedProducts";
import FlashSale from "@/components/Home/FlashSale";
import WhyGadgetGor from "@/components/Home/WhyGadgetGor";
import Brands from "@/components/Home/Brands";
import Reviews from "@/components/Home/Reviews";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <CategoryGrid />
      <FlashSale />
      <FeaturedProducts />
      <WhyGadgetGor />
      <Brands />
      <Reviews />
    </main>
  );
}
