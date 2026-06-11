"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { PageBanner } from "@/components/site-sections";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/account/orders";
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = new FormData(e.currentTarget);
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: form.get("email"), password: form.get("password") }),
    });
    if (res.ok) {
      router.push(redirectTo);
      router.refresh();
    } else {
      const data = await res.json();
      setError(data.error || "Login failed");
    }
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 md:p-8 space-y-4">
      {error && <p className="text-red-400 text-sm">{error}</p>}
      <div>
        <label htmlFor="login-email" className="form-label">Email</label>
        <input id="login-email" name="email" type="email" required className="form-input" autoComplete="email" />
      </div>
      <div>
        <label htmlFor="login-password" className="form-label">Password</label>
        <input id="login-password" name="password" type="password" required className="form-input" autoComplete="current-password" />
      </div>
      <button type="submit" disabled={loading} className="btn-primary w-full">
        {loading ? "Signing in…" : "Sign in"}
      </button>
      <p className="text-center text-sm text-slate-400">
        No account? <Link href="/register" className="text-cyan-400 hover:text-cyan-300">Register</Link>
      </p>
    </form>
  );
}

export default function LoginPage() {
  return (
    <>
      <PageBanner title="Account Login" subtitle="Sign in to complete USDT checkout or view order status." />
      <div className="section-compact">
        <div className="container-wide max-w-md">
          <Suspense fallback={<div className="card p-8 animate-pulse h-64" />}>
            <LoginForm />
          </Suspense>
        </div>
      </div>
    </>
  );
}
