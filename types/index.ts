export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  category: string;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  features: string[];
  stock: number;
}


export type CartItem = Product & { qty: number };

export type WishlistItem = Product;