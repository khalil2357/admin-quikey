"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight, Package, DollarSign, Users, ShoppingCart, TrendingUp } from "lucide-react";

export default function StoreDashboard() {
  const kpis = [
    { name: "Total Revenue", value: "৳45,231", change: "+12.5%", isPositive: true, icon: DollarSign },
    { name: "Total Orders", value: "1,204", change: "+4.2%", isPositive: true, icon: ShoppingCart },
    { name: "Active Customers", value: "852", change: "-1.4%", isPositive: false, icon: Users },
    { name: "Conversion Rate", value: "3.24%", change: "+0.8%", isPositive: true, icon: TrendingUp },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Store Overview</h1>
          <p className="text-sm text-gray-500">Here's what's happening with your store today.</p>
        </div>
        <button className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm">
          Add Product
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, idx) => (
          <motion.div
            key={kpi.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-gray-50 rounded-lg">
                <kpi.icon className="w-5 h-5 text-gray-600" />
              </div>
              <div className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full ${kpi.isPositive ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                {kpi.change}
                {kpi.isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
              </div>
            </div>
            <h3 className="text-gray-500 text-sm font-medium">{kpi.name}</h3>
            <p className="text-2xl font-bold text-gray-900 mt-1">{kpi.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Charts & Tables Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Chart Placeholder */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm p-5 min-h-[350px] flex flex-col"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Revenue Over Time</h3>
            <select className="text-sm bg-gray-50 border border-gray-200 rounded-md px-2 py-1 outline-none">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="flex-1 border-2 border-dashed border-gray-100 rounded-lg flex items-center justify-center bg-gray-50/50">
            <p className="text-gray-400 text-sm font-medium">Chart Visualization Area</p>
          </div>
        </motion.div>

        {/* Recent Orders List */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 min-h-[350px] flex flex-col"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Recent Orders</h3>
            <button className="text-sm text-blue-600 font-medium hover:underline">View all</button>
          </div>
          <div className="flex-1 space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <Package className="w-5 h-5 text-gray-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Order #{1000 + i}</p>
                    <p className="text-xs text-gray-500">2 mins ago</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">৳{Math.floor(Math.random() * 5000) + 500}</p>
                  <span className="text-[10px] bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full font-medium">
                    Pending
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
