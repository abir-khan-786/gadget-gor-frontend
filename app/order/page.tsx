"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { products, getProduct } from "@/lib/products";

export default function OrderPage() {
  const searchParams = useSearchParams();
  const selectedId = searchParams.get("product") || products[0].id;
  const selected = getProduct(selectedId) || products[0];
  const [quantity, setQuantity] = useState(1);

  const total = selected.price * quantity;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toast.success("Order placed demo! Backend API connect korle real order save hobe.");
  }

  return (
    <main className="container-pad py-14">
      <div className="mb-8">
        <p className="badge w-fit">Checkout</p>
        <h1 className="mt-3 text-4xl font-black">Place your order</h1>
      </div>
      <div className="grid gap-8 lg:grid-cols-3">
        <form onSubmit={handleSubmit} className="card space-y-4 p-8 lg:col-span-2">
          <div className="grid gap-4 md:grid-cols-2">
            <input className="input" placeholder="Full name" required />
            <input className="input" placeholder="Phone number" required />
          </div>
          <input className="input" placeholder="Email address" type="email" />
          <textarea className="input min-h-28" placeholder="Delivery address" required />
          <select className="input" defaultValue={selected.id}>
            {products.map((product) => <option key={product.id} value={product.id}>{product.name}</option>)}
          </select>
          <input className="input" type="number" min={1} value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
          <select className="input">
            <option>Cash on Delivery</option>
            <option>Bkash</option>
            <option>Nagad</option>
            <option>Card</option>
          </select>
          <button className="btn-primary w-full" type="submit">Confirm Order</button>
        </form>

        <aside className="card h-fit p-8">
          <h2 className="text-2xl font-black">Order Summary</h2>
          <div className="mt-6 space-y-4 text-sm">
            <div className="flex justify-between"><span>Product</span><b>{selected.name}</b></div>
            <div className="flex justify-between"><span>Price</span><b>৳{selected.price}</b></div>
            <div className="flex justify-between"><span>Quantity</span><b>{quantity}</b></div>
            <div className="border-t pt-4 flex justify-between text-xl"><span>Total</span><b>৳{total}</b></div>
          </div>
        </aside>
      </div>
    </main>
  );
}
