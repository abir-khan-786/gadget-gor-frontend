import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="container-pad flex min-h-[70vh] items-center justify-center py-14">
      <form className="card w-full max-w-md space-y-4 p-8">
        <h1 className="text-3xl font-black">Create Account</h1>
        <input className="input" placeholder="Full name" />
        <input className="input" type="email" placeholder="Email" />
        <input className="input" type="password" placeholder="Password" />
        <button className="btn-primary w-full" type="button">Register</button>
        <p className="text-sm text-slate-600">Already have account? <Link href="/login" className="font-bold text-blue-700">Login</Link></p>
      </form>
    </main>
  );
}
