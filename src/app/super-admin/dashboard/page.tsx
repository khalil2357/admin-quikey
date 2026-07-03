"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Server, Store, Users, DollarSign, Activity } from "lucide-react";

export default function SuperAdminDashboard() {
  const platformKpis = [
    { name: "Total MRR", value: "৳145,230", change: "+12.5%", isPositive: true, icon: DollarSign },
    { name: "Active Stores", value: "1,204", change: "+4.2%", isPositive: true, icon: Store },
    { name: "Global Users", value: "85,241", change: "+1.4%", isPositive: true, icon: Users },
    { name: "System Uptime", value: "99.99%", change: "Stable", isPositive: true, icon: Server },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Platform Overview</h1>
          <p className="text-sm text-gray-500">Monitor overall platform health and metrics.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm">
            Export Report
          </button>
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm">
            System Alerts
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {platformKpis.map((kpi, idx) => (
          <motion.div
            key={kpi.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-2 bg-red-50 rounded-lg">
                <kpi.icon className="w-5 h-5 text-red-600" />
              </div>
              <div className={`flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-full bg-gray-100 text-gray-700`}>
                {kpi.change}
                {kpi.isPositive && <ArrowUpRight className="w-3 h-3" />}
              </div>
            </div>
            <h3 className="text-gray-500 text-sm font-medium">{kpi.name}</h3>
            <p className="text-2xl font-bold text-gray-900 mt-1">{kpi.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Platform Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Growth Chart */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm p-5 min-h-[350px] flex flex-col"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">Platform Growth</h3>
            <select className="text-sm bg-gray-50 border border-gray-200 rounded-md px-2 py-1 outline-none">
              <option>This Year</option>
              <option>Last Year</option>
            </select>
          </div>
          <div className="flex-1 border-2 border-dashed border-gray-100 rounded-lg flex items-center justify-center bg-gray-50/50">
            <p className="text-gray-400 text-sm font-medium">Global Growth Chart</p>
          </div>
        </motion.div>

        {/* Server Health */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 min-h-[350px] flex flex-col"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900">System Nodes</h3>
            <Activity className="w-4 h-4 text-green-500" />
          </div>
          <div className="flex-1 space-y-4">
            {['API Server', 'Auth Service', 'Postgres DB', 'Redis Cache'].map((node, i) => (
              <div key={node} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full ${i === 3 ? 'bg-yellow-400' : 'bg-green-500 animate-pulse'}`}></div>
                  <p className="text-sm font-medium text-gray-900">{node}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">{i === 3 ? '78% Load' : 'Optimal'}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
