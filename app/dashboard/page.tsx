import { Package, Heart, ShoppingBag, User } from "lucide-react";

export default function UserDashboardPage() {
  return (
    <main className="container-pad py-14">
      <p className="badge w-fit">User Dashboard</p>
      <h1 className="mt-3 text-4xl font-black">Welcome back, Customer</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-4">
        {[
          [ShoppingBag, "Total Orders", "12"],
          [Package, "Pending", "2"],
          [Heart, "Wishlist", "8"],
          [User, "Profile", "Active"]
        ].map(([Icon, title, value]: any) => (
          <div key={title} className="card p-6">
            <Icon className="text-blue-600" />
            <p className="mt-4 text-sm text-slate-500">{title}</p>
            <h2 className="text-3xl font-black">{value}</h2>
          </div>
        ))}
      </div>
      <div className="mt-8 card overflow-hidden">
        <div className="border-b p-6"><h2 className="text-2xl font-black">Recent Orders</h2></div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50"><tr><th className="p-4">Order</th><th>Product</th><th>Status</th><th>Total</th></tr></thead>
            <tbody>
              {[["#GG1021", "Nova X1 Smart Watch", "Confirmed", "৳3490"], ["#GG1019", "AirBass Pro", "Pending", "৳2190"]].map((row) => (
                <tr key={row[0]} className="border-t"><td className="p-4 font-bold">{row[0]}</td><td>{row[1]}</td><td><span className="badge">{row[2]}</span></td><td className="font-bold">{row[3]}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
