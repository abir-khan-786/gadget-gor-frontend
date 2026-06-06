import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="container-pad flex min-h-[70vh] items-center justify-center py-14">
      <form className="card w-full max-w-md space-y-4 p-8">
        <h1 className="text-3xl font-black">Login</h1>
        <input className="input" type="email" placeholder="Email" />
        <input className="input" type="password" placeholder="Password" />
        <button className="btn-primary w-full" type="button">Login</button>
        <p className="text-sm text-slate-600">New? <Link href="/register" className="font-bold text-blue-700">Create account</Link></p>
      </form>
    </main>
  );
}
