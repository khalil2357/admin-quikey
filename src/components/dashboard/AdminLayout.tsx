"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { 
  LayoutDashboard, ShoppingCart, Box, Users, Search, 
  Settings, LogOut, Menu, X, Bell, Store, Activity, 
  Tag, Palette, Globe, ShieldAlert 
} from "lucide-react";

interface AdminLayoutProps {
  children: React.ReactNode;
  isSuperAdmin?: boolean;
}

export default function AdminLayout({ children, isSuperAdmin = false }: AdminLayoutProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const handleLogout = () => {
    Cookies.remove("quikey_access_token");
    if (isSuperAdmin) {
      router.push("/super-admin-login");
    } else {
      router.push("/login");
    }
  };

  const storeAdminNav = [
    { name: "Home", href: "/dashboard", icon: LayoutDashboard },
    { name: "Orders", href: "/dashboard/orders", icon: ShoppingCart },
    { name: "Products", href: "/dashboard/products", icon: Box },
    { name: "Customers", href: "/dashboard/customers", icon: Users },
    { name: "Analytics", href: "/dashboard/analytics", icon: Activity },
    { name: "Discounts", href: "/dashboard/discounts", icon: Tag },
    { name: "Online Store", href: "/dashboard/store", icon: Store },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  const superAdminNav = [
    { name: "Platform Overview", href: "/super-admin/dashboard", icon: LayoutDashboard },
    { name: "Stores", href: "/super-admin/stores", icon: Store },
    { name: "Global Users", href: "/super-admin/users", icon: Users },
    { name: "Billing & Revenue", href: "/super-admin/billing", icon: Activity },
    { name: "Themes", href: "/super-admin/themes", icon: Palette },
    { name: "Domains", href: "/super-admin/domains", icon: Globe },
    { name: "Audit Logs", href: "/super-admin/audit", icon: ShieldAlert },
    { name: "Platform Settings", href: "/super-admin/settings", icon: Settings },
  ];

  const navItems = isSuperAdmin ? superAdminNav : storeAdminNav;

  const NavContent = () => (
    <div className="flex flex-col h-full bg-[#EBEBEB]">
      {/* Brand */}
      <div className="h-16 flex items-center px-6 border-b border-gray-200">
        {isSuperAdmin ? (
          <span className="text-xl font-bold text-red-600 tracking-tight">Quikey <span className="text-gray-800">Super</span></span>
        ) : (
          <img src="/logo/q_bag_3d_black.png" alt="Quikey" className="h-8 w-auto mix-blend-multiply" />
        )}
      </div>

      {/* Nav Links */}
      <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/dashboard" && item.href !== "/super-admin/dashboard" && pathname.startsWith(item.href));
          return (
            <button
              key={item.name}
              onClick={() => router.push(item.href)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive 
                  ? "bg-white text-black shadow-sm" 
                  : "text-gray-600 hover:bg-gray-200/50 hover:text-black"
              }`}
            >
              <item.icon className={`w-5 h-5 ${isActive ? "text-blue-600" : "text-gray-500"}`} />
              <span className={!sidebarOpen && !mobileSidebarOpen ? "hidden md:hidden lg:block" : ""}>
                {item.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* User Section */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span className={!sidebarOpen && !mobileSidebarOpen ? "hidden md:hidden lg:block" : ""}>
            Log out
          </span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-[#F6F6F7] text-gray-900 font-sans overflow-hidden">
      
      {/* Desktop Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: sidebarOpen ? 260 : 72 }}
        className="hidden md:block h-full border-r border-gray-200 z-20 flex-shrink-0"
      >
        <NavContent />
      </motion.aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {mobileSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileSidebarOpen(false)}
              className="md:hidden fixed inset-0 bg-black/50 z-30"
            />
            <motion.aside
              initial={{ x: -260 }}
              animate={{ x: 0 }}
              exit={{ x: -260 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="md:hidden fixed inset-y-0 left-0 w-[260px] bg-[#EBEBEB] z-40 border-r border-gray-200"
            >
              <NavContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Top Header */}
        <header className="h-16 flex items-center justify-between px-4 lg:px-8 border-b border-gray-200 bg-[#F6F6F7]">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setMobileSidebarOpen(true)}
              className="md:hidden p-2 -ml-2 text-gray-600 hover:bg-gray-200 rounded-lg"
            >
              <Menu className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="hidden md:block p-2 -ml-2 text-gray-600 hover:bg-gray-200 rounded-lg"
            >
              <Menu className="w-5 h-5" />
            </button>
            
            <div className="hidden sm:flex items-center bg-white border border-gray-300 rounded-lg px-3 py-1.5 w-64 lg:w-96 focus-within:ring-2 focus-within:ring-black focus-within:border-black transition-all shadow-sm">
              <Search className="w-4 h-4 text-gray-400 mr-2" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full bg-transparent border-none focus:outline-none text-sm placeholder:text-gray-400"
              />
              <div className="hidden lg:flex items-center justify-center bg-gray-100 text-gray-500 text-xs px-1.5 py-0.5 rounded border border-gray-200 ml-2">
                ⌘K
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="p-2 text-gray-600 hover:bg-gray-200 rounded-lg relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-600 rounded-full border-2 border-[#F6F6F7]"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-semibold text-sm shadow-sm ring-2 ring-white cursor-pointer hover:scale-105 transition-transform">
              {isSuperAdmin ? "SA" : "AD"}
            </div>
          </div>
        </header>

        {/* Page Content Container */}
        <main className="flex-1 overflow-y-auto bg-[#F6F6F7] p-4 lg:p-8">
          <div className="max-w-[1200px] mx-auto">
            {children}
          </div>
        </main>
        
      </div>
    </div>
  );
}
