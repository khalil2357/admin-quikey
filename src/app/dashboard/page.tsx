"use client";

import { motion } from "framer-motion";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white p-12 rounded-3xl shadow-xl text-center max-w-lg w-full border border-gray-100"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5"/>
          </svg>
        </div>
        <h1 className="text-3xl font-black text-slate-900 mb-4">
          Login Successful!
        </h1>
        <p className="text-slate-500 font-medium leading-relaxed">
          Welcome to your Quikey Admin Dashboard. The system has authenticated you securely via the backend.
        </p>
      </motion.div>
    </div>
  );
}
