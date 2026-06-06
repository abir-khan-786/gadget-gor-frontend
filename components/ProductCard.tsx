import Link from "next/link";
import Image from "next/image";
import { Star } from "lucide-react";
import { Product } from "@/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="card overflow-hidden transition hover:-translate-y-1">
      <div className="relative h-56 overflow-hidden bg-slate-100">
        <Image src={product.image} alt={product.name} fill className="object-cover" />
        <span className="absolute left-4 top-4 badge">{product.category}</span>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-1 text-sm font-semibold text-amber-500">
          <Star size={16} fill="currentColor" /> {product.rating} <span className="text-slate-400">({product.reviews})</span>
        </div>
        <h3 className="mt-3 text-lg font-black">{product.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{product.description}</p>
        <div className="mt-5 flex items-center justify-between">
          <div>
            <p className="text-xl font-black">৳{product.price}</p>
            {product.oldPrice && <p className="text-xs text-slate-400 line-through">৳{product.oldPrice}</p>}
          </div>
          <Link href={`/products/${product.id}`} className="rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
