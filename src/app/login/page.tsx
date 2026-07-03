"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:3500/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Invalid credentials");
      }

      // Successful login, optionally store tokens here if not using httpOnly cookies exclusively
      // Then redirect to the dashboard
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] flex items-center justify-center pt-[72px] pb-24 px-4 font-sans selection:bg-black selection:text-white relative overflow-hidden">
      
      {/* Background Orbs */}
      <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-blue-100 rounded-full blur-[120px] pointer-events-none mix-blend-multiply opacity-70" />
      <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-purple-100 rounded-full blur-[150px] pointer-events-none mix-blend-multiply opacity-70" />
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-50 rounded-full blur-[150px] pointer-events-none mix-blend-multiply opacity-60" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-[440px] relative z-10"
      >
        {/* Sleek Glassmorphic Login Card */}
        <div className="bg-white/70 backdrop-blur-3xl border border-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.05),0_0_0_1px_rgba(0,0,0,0.02)]">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-2">
              Welcome back
            </h1>
            <p className="text-slate-500 font-medium">
              Log in to your Quikey Admin portal
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm font-semibold text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider ml-1">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-5 py-4 bg-white/50 border border-gray-200 rounded-2xl text-slate-900 font-medium placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all shadow-sm"
                placeholder="admin@quikey.com"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between ml-1">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Password
                </label>
                <a href="#" className="text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors">
                  Forgot?
                </a>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-5 py-4 bg-white/50 border border-gray-200 rounded-2xl text-slate-900 font-medium placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all shadow-sm"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-black text-white rounded-full font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-[0_10px_20px_rgba(0,0,0,0.1)] flex items-center justify-center gap-2 group disabled:opacity-70 disabled:hover:scale-100"
            >
              {isLoading ? "Signing in..." : "Sign In"}
              {!isLoading && (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              )}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-100 text-center">
            <p className="text-sm font-medium text-slate-500">
              Don't have an account?{" "}
              <a href="http://localhost:3000/signup" className="text-black font-bold hover:underline">
                Start for free
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
