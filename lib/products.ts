import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Nova X1 Smart Watch",
    price: 3490,
    oldPrice: 4200,
    category: "Smart Watch",
    rating: 4.8,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
    description: "Premium smart watch with health tracking, long battery backup, and sleek metal finish.",
    features: ["7 days battery", "Heart rate monitor", "Bluetooth calling", "Water resistant"],
    stock: 18
  },
  {
    id: "2",
    name: "AirBass Pro Earbuds",
    price: 2190,
    oldPrice: 2790,
    category: "Audio",
    rating: 4.7,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?q=80&w=1200&auto=format&fit=crop",
    description: "Clear sound earbuds with deep bass, ENC mic and compact charging case.",
    features: ["ENC microphone", "30 hours backup", "Low latency mode", "Fast charging"],
    stock: 32
  },
  {
    id: "3",
    name: "PowerGo 20000mAh Power Bank",
    price: 1890,
    oldPrice: 2400,
    category: "Accessories",
    rating: 4.6,
    reviews: 64,
    image: "https://images.unsplash.com/photo-1609592806596-b43bada2f118?q=80&w=1200&auto=format&fit=crop",
    description: "High-capacity power bank for phones, earbuds and tablets with dual USB output.",
    features: ["20000mAh", "Dual USB output", "Type-C input", "Safe charging chip"],
    stock: 25
  },
  {
    id: "4",
    name: "GorPad Mini Tablet",
    price: 14500,
    oldPrice: 16900,
    category: "Tablet",
    rating: 4.9,
    reviews: 51,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=1200&auto=format&fit=crop",
    description: "Lightweight tablet for study, entertainment and online business management.",
    features: ["8 inch display", "4GB RAM", "64GB storage", "WiFi + SIM"],
    stock: 10
  }
];

export const getProduct = (id: string) => products.find((product) => product.id === id);
