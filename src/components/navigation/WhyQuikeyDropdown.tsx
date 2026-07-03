"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Bot, CreditCard, BarChart3 } from "lucide-react";

export default function WhyQuikeyDropdown({ isOpen, onMouseEnter, onMouseLeave }: { isOpen: boolean, onMouseEnter: () => void, onMouseLeave: () => void }) {
  if (!isOpen) return null;

  // Stagger Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 140,
        damping: 15
      }
    }
  };

  return (
    <motion.div
      initial={{ clipPath: "circle(0% at 20% 0px)" }}
      animate={{ clipPath: "circle(150% at 20% 0px)" }}
      exit={{ clipPath: "circle(0% at 20% 0px)" }}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      className="fixed top-[72px] left-0 w-full bg-[#0a0a0a] border-b border-white/10 shadow-2xl z-[999] overflow-hidden"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ boxShadow: "0 40px 80px rgba(0,0,0,0.8)" }}
    >


      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 pt-[80px] pb-12 flex gap-12 max-w-7xl relative z-10"
      >
        {/* Left Area - Main Cards */}
        <div className="flex-1 grid grid-cols-3 gap-6 mt-[40]">
          <motion.div variants={itemVariants}>
            <Link href="/why-quikey/get-started" className="group block">
              <div className="aspect-[4/3] rounded-xl mb-4 overflow-hidden border border-white/5 relative transition-all duration-300 group-hover:border-blue-500/30 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] bg-card-bg ">
                <img
                  src="/why_quikey_get_started.png"
                  alt="Get started fast"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
              </div>
              <h3 className="text-white font-bold text-lg mb-1 group-hover:text-blue-400 transition-colors">Get started fast</h3>
              <p className="text-gray-400 text-sm leading-relaxed">You could be selling by tomorrow.</p>
            </Link>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link href="/why-quikey/switch" className="group block">
              <div className="aspect-[4/3] rounded-xl mb-4 overflow-hidden border border-white/5 relative transition-all duration-300 group-hover:border-green-500/30 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] bg-card-bg">
                <img
                  src="/why_quikey_switch.png"
                  alt="Switch to Quikey"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
              </div>
              <h3 className="text-white font-bold text-lg mb-1 group-hover:text-green-400 transition-colors">Switch to Quikey</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Get more customers. Make more sales.</p>
            </Link>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link href="/why-quikey/enterprise" className="group block">
              <div className="aspect-[4/3] rounded-xl mb-4 overflow-hidden border border-white/5 relative transition-all duration-300 group-hover:border-gray-500/30 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] bg-card-bg">
                <img
                  src="/why_quikey_enterprise.png"
                  alt="Trusted by enterprise"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
              </div>
              <h3 className="text-white font-bold text-lg mb-1 group-hover:text-gray-300 transition-colors">Trusted by enterprise</h3>
              <p className="text-gray-400 text-sm leading-relaxed">No matter your size, complexity, or ambition.</p>
            </Link>
          </motion.div>
        </div>

        {/* Right Sidebar - Features */}
        <div className="w-[340px] pl-10 border-l border-white/10 flex flex-col gap-5 mt-[40]">
          <motion.p variants={itemVariants} className="text-[11px] font-bold text-emerald-400 uppercase tracking-widest mb-[20px]">
            Built into every store
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link href="/why-quikey/checkout" className="group flex items-start gap-4 p-3 -mx-3 rounded-xl hover:bg-white/5 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                <CreditCard className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1 text-[15px] group-hover:text-purple-400 transition-colors">Quikey Pay</h4>
                <p className="text-gray-400 text-[13px] leading-snug">World's best checkout.<br />Proven to convert better.</p>
              </div>
            </Link>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link href="/why-quikey/ai" className="group flex items-start gap-4 p-3 -mx-3 rounded-xl hover:bg-white/5 transition-colors">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-fuchsia-500 to-rose-600 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                <Bot className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1 text-[15px] group-hover:text-fuchsia-400 transition-colors">Sidekick</h4>
                <p className="text-gray-400 text-[13px] leading-snug">Your commerce-obsessed<br />AI assistant.</p>
              </div>
            </Link>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link href="/why-quikey/analytics" className="group flex items-start gap-4 p-3 -mx-3 rounded-xl hover:bg-white/5 transition-colors mb-[20]">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                <BarChart3 className="w-7 h-7 text-white" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1 text-[15px] group-hover:text-blue-400 transition-colors">Analytics</h4>
                <p className="text-gray-400 text-[13px] leading-snug">Understand your store<br />performance in real-time.</p>
              </div>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
