export default function AdminDashboard() {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
            <div className="grid md:grid-cols-4 gap-4">
                {[
                    { label: "Total Sales", value: "৳12.4L", change: "+12%" },
                    { label: "Orders", value: "1,234", change: "+8%" },
                    { label: "Products", value: "456", change: "+3" },
                    { label: "Customers", value: "5,678", change: "+24%" },
                ].map(card => (
                    <div key={card.label} className="bg-white/[0.03] border border-white/10 rounded-2xl p-5">
                        <div className="text-xs text-white/50 mb-1">{card.label}</div>
                        <div className="text-2xl font-bold mb-1">{card.value}</div>
                        <div className="text- text-emerald-400">{card.change}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}