import { products } from "@/lib/products";
import { BarChart3, Boxes, ShoppingCart, Users } from "lucide-react";

export default function AdminDashboardPage() {
  return (
    <main className="container-pad py-14">
      <p className="badge w-fit">Admin Panel</p>
      <h1 className="mt-3 text-4xl font-black">Gadget Gor Admin Dashboard</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-4">
        {[
          [BarChart3, "Revenue", "৳86,400"],
          [ShoppingCart, "Orders", "156"],
          [Boxes, "Products", products.length],
          [Users, "Users", "1,240"]
        ].map(([Icon, title, value]: any) => (
          <div key={title} className="card p-6">
            <Icon className="text-blue-600" />
            <p className="mt-4 text-sm text-slate-500">{title}</p>
            <h2 className="text-3xl font-black">{value}</h2>
          </div>
        ))}
      </div>
      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="card p-6 lg:col-span-2">
          <h2 className="text-2xl font-black">Product Management</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead><tr className="border-b"><th className="py-3">Product</th><th>Stock</th><th>Price</th><th>Status</th></tr></thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b last:border-0"><td className="py-4 font-bold">{product.name}</td><td>{product.stock}</td><td>৳{product.price}</td><td><span className="badge">Active</span></td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <form className="card space-y-4 p-6">
          <h2 className="text-2xl font-black">Add Product</h2>
          <input className="input" placeholder="Product name" />
          <input className="input" placeholder="Price" />
          <input className="input" placeholder="Stock" />
          <textarea className="input min-h-24" placeholder="Description" />
          <button className="btn-primary w-full" type="button">Save Product</button>
        </form>
      </div>
    </main>
  );
}
