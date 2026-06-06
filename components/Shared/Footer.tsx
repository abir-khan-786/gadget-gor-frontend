import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#050811] border-t border-white/10">
      {/* Newsletter */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Get exclusive deals</h3>
            <p className="text-white/60 text-sm">Subscribe for 10% off your first order</p>
          </div>
          <div className="flex gap-2 w-full lg:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 lg:w-80 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-[#00aaff]"
            />
            <button className="px-6 py-3 bg-[#00aaff] text-white rounded-xl text-sm font-medium hover:bg-[#0088dd]">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 bg-[#00aaff] rounded-lg grid place-items-center font-bold text-black">G</div>
            <span className="text-xl font-bold text-white">Gadget<span className="text-[#00aaff]">Gor</span></span>
          </div>
          <p className="text-white/60 text-sm max-w-xs">Bangladesh's most trusted gadget store. 100% authentic products with official warranty.</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase">Shop</h4>
          <ul className="space-y-2">
            {["Smartphones", "Earbuds", "Smartwatch", "Power Bank"].map(i => (
              <li key={i}><Link href="#" className="text-white/60 hover:text-white text-sm">{i}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase">Support</h4>
          <ul className="space-y-2">
            {["Contact Us", "Track Order", "Warranty", "FAQ"].map(i => (
              <li key={i}><Link href="#" className="text-white/60 hover:text-white text-sm">{i}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase">Contact</h4>
          <p className="text-white/60 text-sm">Bashundhara City, Dhaka</p>
          <p className="text-white/60 text-sm mt-1">+880 1700-000000</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-xs">© 2026 Gadget Gor. All rights reserved.</p>
          <div className="flex gap-2">
            {["bKash", "Nagad", "Visa", "COD"].map(p => (
              <div key={p} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded text- text-white/60">{p}</div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}