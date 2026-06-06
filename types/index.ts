export type Product = {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  category: string;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  features: string[];
  stock: number;
};
