"use client";
import { useState } from "react";
import { Phone, Mail, Lock, Eye, EyeOff, User, ArrowRight, Shield, Check } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    otp: "",
  });

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: POST /api/auth/send-otp
    await new Promise(r => setTimeout(r, 1000));
    setLoading(false);
    setStep(2);
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: POST /api/auth/verify
    await new Promise(r => setTimeout(r, 1200));
    localStorage.setItem("gg-user", JSON.stringify({ name: form.name, phone: form.phone }));
    setLoading(false);
    router.push("/");
  };

  const passwordStrength = () => {
    const p = form.password;
    if (p.length < 6) return { text: "Weak", color: "text-red-400", width: "33%" };
    if (p.length < 8 || !/[A-Z]/.test(p)) return { text: "Medium", color: "text-amber-400", width: "66%" };
    return { text: "Strong", color: "text-emerald-400", width: "100%" };
  };

  const strength = passwordStrength();

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-white grid lg:grid-cols-2">
      {/* Left */}
      <div className="hidden lg:flex relative overflow-hidden border-r border-white/5">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-violet-500/25 rounded-full blur-" />
          <div className="absolute bottom-20 -left-20 w-80 h-80 bg-[#00aaff]/20 rounded-full blur-" />
        </div>

        <div className="relative z-10 flex flex-col justify-center p-12 xl:p-16">
          <Link href="/" className="flex items-center gap-2.5 mb-12">
            <div className="w-9 h-9 rounded-xl bg-[#00aaff] grid place-items-center">
              <Phone size={18} className="text-black" />
            </div>
            <span className="text-xl font-bold">Gadget Gor</span>
          </Link>

          <h1 className="text-4xl xl:text-5xl font-bold leading-[1.15] mb-6">
            Join 50,000+
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00aaff] to-violet-400 mt-1">
              happy customers
            </span>
          </h1>

          <div className="space-y-4 mt-12">
            {[
              "Get exclusive member-only deals",
              "Track orders in real-time",
              "Faster checkout with saved address",
              "Earn points on every purchase",
            ].map((text) => (
              <div key={text} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 grid place-items-center shrink-0">
                  <Check size={12} className="text-emerald-400" />
                </div>
                <span className="text-white/75">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-6">
              <div className={`w-8 h-8 rounded-full grid place-items-center text-xs font-bold transition ${step >= 1 ? "bg-[#00aaff] text-black" : "bg-white/10 text-white/50"}`}>1</div>
              <div className={`flex-1 h-0.5 transition ${step >= 2 ? "bg-[#00aaff]" : "bg-white/10"}`} />
              <div className={`w-8 h-8 rounded-full grid place-items-center text-xs font-bold transition ${step >= 2 ? "bg-[#00aaff] text-black" : "bg-white/10 text-white/50"}`}>2</div>
            </div>

            <h2 className="text-2xl font-bold mb-1">{step === 1 ? "Create your account" : "Verify phone"}</h2>
            <p className="text-white/60 text-sm">{step === 1 ? "It takes less than a minute" : `Code sent to +880${form.phone}`}</p>
          </div>

          {step === 1 ? (
            <form onSubmit={handleSendOTP} className="space-y-4">
              <div>
                <label className="text-xs text-white/60 mb-1.5 block">Full Name *</label>
                <div className="relative">
                  <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Mahadi Khan"
                    className="w-full pl-10 pr-4 py-3 bg-[#050811] border border-white/15 rounded-xl outline-none focus:border-[#00aaff]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-white/60 mb-1.5 block">Phone Number *</label>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40 text-sm">+880</span>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="1700-000000"
                    className="w-full pl-12 pr-4 py-3 bg-[#050811] border border-white/15 rounded-xl outline-none focus:border-[#00aaff]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-white/60 mb-1.5 block">Email (optional)</label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@email.com"
                    className="w-full pl-10 pr-4 py-3 bg-[#050811] border border-white/15 rounded-xl outline-none focus:border-[#00aaff]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-white/60 mb-1.5 block">Create Password *</label>
                <div className="relative">
                  <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
                  <input
                    required
                    type={showPass ? "text" : "password"}
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    placeholder="Minimum 6 characters"
                    className="w-full pl-10 pr-11 py-3 bg-[#050811] border border-white/15 rounded-xl outline-none focus:border-[#00aaff]"
                  />
                  <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40">
                    {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {form.password && (
                  <div className="mt-2">
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-current transition-all" style={{ width: strength.width, color: strength.text === "Weak" ? "#f87171" : strength.text === "Medium" ? "#fbbf24" : "#34d399" }} />
                    </div>
                    <p className={`text- mt-1 ${strength.color}`}>{strength.text} password</p>
                  </div>
                )}
              </div>

              <label className="flex items-start gap-2.5 pt-2 cursor-pointer">
                <input type="checkbox" required className="mt-0.5 w-4 h-4 rounded border-white/20 bg-transparent accent-[#00aaff]" />
                <span className="text-xs text-white/60 leading-relaxed">
                  I agree to the <Link href="/terms" className="text-[#00aaff] hover:underline">Terms</Link> and <Link href="/privacy" className="text-[#00aaff] hover:underline">Privacy Policy</Link>
                </span>
              </label>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-[#00aaff] text-black font-semibold rounded-xl hover:bg-[#00aaff]/90 transition disabled:opacity-50 flex items-center justify-center gap-2 mt-2"
              >
                {loading ? "Sending OTP..." : <>Continue <ArrowRight size={18} /></>}
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerify} className="space-y-5">
              <div>
                <label className="text-xs text-white/60 mb-3 block text-center">Enter 6-digit code</label>
                <input
                  type="text"
                  maxLength={6}
                  value={form.otp}
                  onChange={(e) => setForm({ ...form, otp: e.target.value.replace(/\D/g, "") })}
                  placeholder="000000"
                  className="w-full px-4 py-4 bg-[#050811] border border-white/15 rounded-xl outline-none focus:border-[#00aaff] text-center text-2xl tracking-[0.5em] font-mono"
                  autoFocus
                />
              </div>

              <button
                type="submit"
                disabled={loading || form.otp.length !== 6}
                className="w-full py-3.5 bg-[#00aaff] text-black font-semibold rounded-xl hover:bg-[#00aaff]/90 transition disabled:opacity-50"
              >
                {loading ? "Verifying..." : "Create Account"}
              </button>

              <div className="text-center">
                <button type="button" onClick={() => setStep(1)} className="text-xs text-white/50 hover:text-white/80">Change number</button>
                <span className="mx-2 text-white/20">•</span>
                <button type="button" className="text-xs text-[#00aaff] hover:underline">Resend code</button>
              </div>
            </form>
          )}

          <p className="text-center text-sm text-white/60 mt-8">
            Already have an account?{" "}
            <Link href="/login" className="text-[#00aaff] hover:underline font-medium">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}