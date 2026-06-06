"use client";
import { useState } from "react";
import { Phone, Mail, Lock, EyeOff, ArrowRight, Shield, Smartphone, Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [method, setMethod] = useState<"phone" | "email">("phone");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [form, setForm] = useState({ phone: "", email: "", password: "", otp: "" });

  const handleSendOTP = async () => {
    setLoading(true);
    // Call your backend: POST /api/auth/send-otp { phone: form.phone }
    await new Promise(r => setTimeout(r, 1000));
    setOtpSent(true);
    setLoading(false);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // TODO: Call your API
    // const res = await fetch('http://localhost:5000/api/auth/login', {... })

    await new Promise(r => setTimeout(r, 1200));
    localStorage.setItem("gg-user", JSON.stringify({ phone: form.phone, name: "Mahadi" }));
    setLoading(false);
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white grid lg:grid-cols-2">
      {/* Left - Branding */}
      <div className="hidden lg:flex relative overflow-hidden border-r border-white/5">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#00aaff]/30 rounded-full blur-" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-violet-500/20 rounded-full blur-" />
        </div>

        <div className="relative z-10 flex flex-col justify-between p-12 xl:p-16 w-full">
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-16">
              <div className="w-9 h-9 rounded-xl bg-[#00aaff] grid place-items-center">
                <Smartphone size={18} className="text-black" />
              </div>
              <span className="text-xl font-bold tracking-tight">Gadget Gor</span>
            </Link>

            <h1 className="text-4xl xl:text-5xl font-bold leading-[1.15] mb-6">
              Welcome back to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00aaff] to-cyan-400 mt-1">
                Bangladesh's trusted store
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-md">
              Login to track orders, manage wishlist, and get exclusive deals.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { icon: Shield, text: "100% Secure login" },
              { icon: Phone, text: "OTP verification" },
              { icon: Lock, text: "Your data is encrypted" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3 text-sm text-white/70">
                <div className="w-8 h-8 rounded-lg bg-white/5 grid place-items-center">
                  <item.icon size={16} className="text-white/60" />
                </div>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right - Form */}
      <div className="flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-">
          {/* Mobile logo */}
          <Link href="/" className="lg:hidden flex items-center justify-center gap-2 mb-10">
            <div className="w-8 h-8 rounded-lg bg-[#00aaff] grid place-items-center">
              <Smartphone size={16} className="text-black" />
            </div>
            <span className="font-bold">Gadget Gor</span>
          </Link>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Login to your account</h2>
            <p className="text-white/60 text-sm">Enter your details to continue shopping</p>
          </div>

          {/* Method Toggle */}
          <div className="grid grid-cols-2 gap-2 p-1 bg-white/5 border border-white/10 rounded-xl mb-6">
            {[
              { key: "phone", label: "Phone", icon: Phone },
              { key: "email", label: "Email", icon: Mail },
            ].map((m) => (
              <button
                key={m.key}
                onClick={() => setMethod(m.key as any)}
                className={`flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-sm font-medium transition ${method === m.key ? "bg-white text-black" : "text-white/70 hover:text-white"
                  }`}
              >
                <m.icon size={15} /> {m.label}
              </button>
            ))}
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {method === "phone" ? (
              <>
                <div>
                  <label className="text-xs text-white/60 mb-1.5 block">Phone Number</label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40 text-sm">+880</span>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="1700-000000"
                      className="w-full pl-12 pr-4 py-3 bg-[#050811] border border-white/15 rounded-xl outline-none focus:border-[#00aaff] transition"
                    />
                  </div>
                </div>

                {otpSent && (
                  <div>
                    <label className="text-xs text-white/60 mb-1.5 block">Enter OTP</label>
                    <input
                      type="text"
                      maxLength={6}
                      value={form.otp}
                      onChange={(e) => setForm({ ...form, otp: e.target.value })}
                      placeholder="6-digit code"
                      className="w-full px-4 py-3 bg-[#050811] border border-white/15 rounded-xl outline-none focus:border-[#00aaff] text-center tracking-[0.3em] font-mono"
                    />
                    <p className="text- text-white/50 mt-1.5">Code sent to +880{form.phone}</p>
                  </div>
                )}
              </>
            ) : (
              <>
                <div>
                  <label className="text-xs text-white/60 mb-1.5 block">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@email.com"
                    className="w-full px-4 py-3 bg-[#050811] border border-white/15 rounded-xl outline-none focus:border-[#00aaff]"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-1.5">
                    <label className="text-xs text-white/60">Password</label>
                    <Link href="/forgot" className="text-xs text-[#00aaff] hover:underline">Forgot?</Link>
                  </div>
                  <div className="relative">
                    <input
                      type={showPass ? "text" : "password"}
                      required
                      value={form.password}
                      onChange={(e) => setForm({ ...form, password: e.target.value })}
                      placeholder="••••••••"
                      className="w-full px-4 pr-11 py-3 bg-[#050811] border border-white/15 rounded-xl outline-none focus:border-[#00aaff]"
                    />
                    <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70">
                      {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
              </>
            )}

            {!otpSent && method === "phone" ? (
              <button
                type="button"
                onClick={handleSendOTP}
                disabled={loading || !form.phone}
                className="w-full py-3.5 bg-[#00aaff] text-black font-semibold rounded-xl hover:bg-[#00aaff]/90 transition disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? "Sending..." : <>Send OTP <ArrowRight size={18} /></>}
              </button>
            ) : (
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-[#00aaff] text-black font-semibold rounded-xl hover:bg-[#00aaff]/90 transition disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? "Logging in..." : <>Login <ArrowRight size={18} /></>}
              </button>
            )}
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10" /></div>
            <div className="relative flex justify-center"><span className="px-3 bg-[#0a0f1c] text-xs text-white/40">or continue with</span></div>
          </div>

          {/* Social */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { name: "Google", icon: "https://www.svgrepo.com/show/475656/google-color.svg" },
              { name: "Facebook", icon: "https://www.svgrepo.com/show/475647/facebook-color.svg" },
            ].map((s) => (
              <button key={s.name} className="flex items-center justify-center gap-2 py-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition text-sm">
                <img src={s.icon} alt="" className="w-4 h-4" /> {s.name}
              </button>
            ))}
          </div>

          <p className="text-center text-sm text-white/60 mt-8">
            Don't have an account?{" "}
            <Link href="/register" className="text-[#00aaff] hover:underline font-medium">Create account</Link>
          </p>

          <p className="text- text-white/40 text-center mt-6 leading-relaxed">
            By logging in, you agree to our <Link href="/terms" className="underline">Terms</Link> and <Link href="/privacy" className="underline">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </div>
  );
}