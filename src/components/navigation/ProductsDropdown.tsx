"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import {
  Layout, Palette, Globe, UserCheck, Sparkles,
  Package, Truck, Wallet, Workflow, Smartphone,
  Store, MessagesSquare, Monitor, ShoppingBag,
  Share2, Building2, Map, Megaphone, Mail,
  Percent, BarChart3, CreditCard, Coins, FileText, ArrowRight
} from "lucide-react";

export default function ProductsDropdown({
  isOpen,
  onMouseEnter,
  onMouseLeave
}: {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  if (!isOpen) return null;

  // Stagger Animation Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
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
      initial={{ clipPath: "circle(0% at 30% 0px)" }}
      animate={{ clipPath: "circle(150% at 30% 0px)" }}
      exit={{ clipPath: "circle(0% at 30% 0px)" }}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
      className="fixed top-[72px] left-0 w-full bg-[#0a0a0a] border-b border-white/10 shadow-2xl z-[999] overflow-hidden "
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ boxShadow: "0 40px 80px rgba(0,0,0,0.8)" }}
    >


      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 pt-[80px] pb-8 max-w-7xl relative z-10 "
      >
        <div className="grid grid-cols-12 gap-8 mt-[40]">

          {/* Column 1: Build & Run (Left) */}
          <div className="col-span-3 flex flex-col gap-8">
            <motion.div variants={itemVariants}>
              <h3 className="pb-[20px] text-[#007E6E] font-bold text-xs uppercase tracking-widest mt-[40px] mb-[20px]">Build Your Website</h3>
              <div className="space-y-3.5">
                <Link href="/products/builder" className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Layout className="w-4.5 h-4.5 text-[#007E6E] shrink-0" />
                  <span className="text-sm font-semibold">Website Builder</span>
                </Link>
                <Link href="/products/themes" className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Palette className="w-4.5 h-4.5 text-[#007E6E] shrink-0" />
                  <span className="text-sm font-semibold">Themes</span>
                </Link>
                <Link href="/products/domains" className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Globe className="w-4.5 h-4.5 text-[#007E6E] shrink-0" />
                  <span className="text-sm font-semibold">Domains</span>
                </Link>
                <Link href="/products/accounts" className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <UserCheck className="w-4.5 h-4.5 text-[#007E6E] shrink-0" />
                  <span className="text-sm font-semibold">Customer Accounts</span>
                </Link>
                <Link href="/products/sidekick" className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Sparkles className="w-4.5 h-4.5 text-[#007E6E] shrink-0" />
                  <span className="text-sm font-semibold">Sidekick AI</span>
                </Link>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="pb-[20px] text-[#007E6E] font-bold text-xs uppercase tracking-widest mb-[20px]">Run Your Business</h3>
              <div className="space-y-3.5">
                <Link href="/products/orders" className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Package className="w-4.5 h-4.5 text-[#007E6E] shrink-0" />
                  <span className="text-sm font-semibold">Orders & Inventory</span>
                </Link>
                <Link href="/products/shipping" className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Truck className="w-4.5 h-4.5 text-[#007E6E] shrink-0" />
                  <span className="text-sm font-semibold">Shipping Setup</span>
                </Link>
                <Link href="/products/finances" className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Wallet className="w-4.5 h-4.5 text-[#007E6E] shrink-0" />
                  <span className="text-sm font-semibold">Finances & Funding</span>
                </Link>
                <Link href="/products/workflow" className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Workflow className="w-4.5 h-4.5 text-[#007E6E] shrink-0" />
                  <span className="text-sm font-semibold">Workflow Automation</span>
                </Link>
                <Link href="/products/mobile" className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Smartphone className="w-4.5 h-4.5 text-[#007E6E] shrink-0" />
                  <span className="text-sm font-semibold">Mobile App</span>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Column 2: Sell Anywhere (Middle-Left) */}
          <div className="col-span-3 ">
            <motion.div variants={itemVariants}>
              <h3 className=" pb-[20px] text-[#007E6E] font-bold text-xs uppercase tracking-widest mt-[40px] mb-[20px]">Sell Anywhere</h3>
              <div className="space-y-3.5">
                <Link href="/products/online-store" className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Store className="w-4.5 h-4.5 text-[#007E6E] shrink-0" />
                  <span className="text-sm font-semibold">Online Store</span>
                </Link>
                <Link href="/products/ai-chats" className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <MessagesSquare className="w-4.5 h-4.5 text-[#007E6E] shrink-0" />
                  <span className="text-sm font-semibold">AI Chats</span>
                </Link>
                <Link href="/products/pos" className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Monitor className="w-4.5 h-4.5 text-[#007E6E] shrink-0" />
                  <span className="text-sm font-semibold">Point of Sale</span>
                </Link>
                <Link href="/products/shop-app" className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <ShoppingBag className="w-4.5 h-4.5 text-[#007E6E] shrink-0" />
                  <span className="text-sm font-semibold">Shop App Integration</span>
                </Link>
                <Link href="/products/socials" className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Share2 className="w-4.5 h-4.5 text-[#007E6E] shrink-0" />
                  <span className="text-sm font-semibold">Socials & Marketplaces</span>
                </Link>
                <Link href="/products/global-commerce" className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Globe className="w-4.5 h-4.5 text-[#007E6E] shrink-0" />
                  <span className="text-sm font-semibold">Global Commerce</span>
                </Link>
                <Link href="/products/b2b" className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Building2 className="w-4.5 h-4.5 text-[#007E6E] shrink-0" />
                  <span className="text-sm font-semibold flex items-center gap-1.5">
                    B2B <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
                <Link href="/products/cross-markets" className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Map className="w-4.5 h-4.5 text-[#007E6E] shrink-0" />
                  <span className="text-sm font-semibold">Across Markets</span>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Column 3: Marketing & Get Paid (Middle-Right) */}
          <div className="col-span-3 flex flex-col gap-8">
            <motion.div variants={itemVariants}>
              <h3 className="pb-[20px] text-[#007E6E] font-bold text-xs uppercase tracking-widest mt-[40px] mb-[20px]">Marketing & Analytics</h3>
              <div className="space-y-3.5">
                <Link href="/products/advertising" className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Megaphone className="w-4.5 h-4.5 text-[#007E6E] shrink-0" />
                  <span className="text-sm font-semibold">Advertising & Campaigns</span>
                </Link>
                <Link href="/products/email" className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Mail className="w-4.5 h-4.5 text-[#007E6E] shrink-0" />
                  <span className="text-sm font-semibold">Email & Customer Chat</span>
                </Link>
                <Link href="/products/discounts" className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Percent className="w-4.5 h-4.5 text-[#007E6E] shrink-0" />
                  <span className="text-sm font-semibold">Discounts & Promos</span>
                </Link>
                <Link href="/products/analytics" className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <BarChart3 className="w-4.5 h-4.5 text-[#007E6E] shrink-0" />
                  <span className="text-sm font-semibold">Store Analytics</span>
                </Link>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="pb-[20px] text-[#007E6E] font-bold text-xs uppercase tracking-widest mb-[20px]">Get Paid</h3>
              <div className="space-y-3.5">
                <Link href="/products/checkout" className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <CreditCard className="w-4.5 h-4.5 text-[#007E6E] shrink-0" />
                  <span className="text-sm font-semibold">Checkout Engine</span>
                </Link>
                <Link href="/products/payments" className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Coins className="w-4.5 h-4.5 text-[#007E6E] shrink-0" />
                  <span className="text-sm font-semibold">Payments Integration</span>
                </Link>
                <Link href="/products/taxes" className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <FileText className="w-4.5 h-4.5 text-[#007E6E] shrink-0" />
                  <span className="text-sm font-semibold">Taxes & Audits</span>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Column 4: Non-Stop Innovation Sidebar (Rightmost) */}
          <div className="col-span-3 pl-6 border-l border-white/10 flex flex-col gap-6">
            <motion.div variants={itemVariants}>
              <h3 className="pb-[20px] text-[#007E6E] font-bold text-xs uppercase tracking-widest mt-[40px] mb-[20px]">Non-Stop Innovation</h3>
              <div className="rounded-xl overflow-hidden border border-white/5 relative bg-[#070a09] group/editions aspect-[4/3] mb-4">
                <img
                  src="/quikey_editions.png"
                  alt="Quikey Editions"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/editions:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
              </div>
              <h4 className="text-white font-bold text-sm mb-1">Quikey Editions</h4>
              <p className="text-gray-400 text-xs leading-relaxed">150+ platform updates to Quikey, twice a year.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-2 border-t border-white/5">
              <h4 className="pb-[20px] text-[11px] font-bold text-[#007E6E] uppercase tracking-wider mb-[20px]">Latest Updates</h4>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2 text-gray-300">
                  <div className="w-1 h-1 rounded-full bg-[#007E6E]" />
                  <span>Agentic Storefronts</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <div className="w-1 h-1 rounded-full bg-[#007E6E]" />
                  <span>Campaign Autopilot</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <div className="w-1 h-1 rounded-full bg-[#007E6E]" />
                  <span>Quikey AI Toolkit for devs</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer Area */}
        <motion.div variants={itemVariants} className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
          <Link href="/extend" className="inline-block text-xs font-bold text-[#007E6E] hover:underline uppercase tracking-wider mb-[20px]">
            Customize & Extend Quikey
          </Link>
          <div className="flex items-center gap-8 text-xs font-medium text-gray-400">
            <Link href="/agents" className="inline-block hover:text-white transition-colors mb-[20px]">
              Commerce for Agents <span className="text-gray-600 font-normal">— Build with agent tools</span>
            </Link>
            <Link href="/app-store" className="inline-block hover:text-white transition-colors mb-[20px]">
              Quikey App Store <span className="text-gray-600 font-normal">— Largest app ecosystem</span>
            </Link>
            <Link href="/devs" className="inline-block hover:text-white transition-colors mb-[20px]">
              Quikey.dev <span className="text-gray-600 font-normal">— Developer docs & CLI</span>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
