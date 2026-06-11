"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { PageBanner } from "@/components/site-sections";

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = new FormData(e.currentTarget);
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.get("name"),
        email: form.get("email"),
        password: form.get("password"),
      }),
    });
    if (res.ok) {
      router.push("/account/orders");
      router.refresh();
    } else {
      const data = await res.json();
      setError(data.error || "Registration failed");
    }
    setLoading(false);
  }

  return (
    <>
      <PageBanner title="Create Account" subtitle="Register to track RFQ orders and payment status." />
      <div className="section-compact">
        <div className="container-wide max-w-md">
          <form onSubmit={handleSubmit} className="card p-6 md:p-8 space-y-4">
            {error && <p className="text-red-400 text-sm">{error}</p>}
            <div>
              <label htmlFor="register-name" className="form-label">Name</label>
              <input id="register-name" name="name" className="form-input" autoComplete="name" />
            </div>
            <div>
              <label htmlFor="register-email" className="form-label">Email</label>
              <input id="register-email" name="email" type="email" required className="form-input" autoComplete="email" />
            </div>
            <div>
              <label htmlFor="register-password" className="form-label">Password</label>
              <input id="register-password" name="password" type="password" required minLength={8} className="form-input" autoComplete="new-password" />
            </div>
            <button type="submit" disabled={loading} className="btn-primary w-full">
              {loading ? "Creating account…" : "Create account"}
            </button>
            <p className="text-center text-sm text-slate-400">
              Already have an account? <Link href="/login" className="text-cyan-400 hover:text-cyan-300">Sign in</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
