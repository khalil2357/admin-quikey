"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = {
  Product: ["Theme Builder", "AI Features", "Analytics", "Payments", "Shipping", "Inventory", "Marketing"],
  Solutions: ["Fashion", "Electronics", "Restaurant", "Healthcare", "Education", "Grocery", "B2B"],
  Resources: ["Documentation", "API Reference", "Changelog", "Blog", "Tutorials", "Community", "Status"],
  Company: ["About", "Careers", "Press", "Partners", "Investors", "Contact", "Brand"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR", "Security", "Compliance"],
};

export default function Footer() {
  return (
    <footer style={{ background: "#000000", paddingTop: "64px", position: "relative", overflow: "hidden" }}>
      {/* Background Decor */}
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "100%", height: "1px", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)" }} />
      <div style={{ position: "absolute", bottom: "-10%", right: "-10%", width: "40%", height: "40%", background: "radial-gradient(circle, rgba(14, 165, 233, 0.03) 0%, transparent 60%)", pointerEvents: "none" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>

        <div style={{ display: "flex", flexDirection: "column", gap: "56px", marginBottom: "40px" }}>

          {/* TOP SECTION: Menus / Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <div style={{ fontSize: "12px", fontWeight: 700, color: "white", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "20px" }}>
                  {section}
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                  {links.map(link => (
                    <li key={link}>
                      <a
                        href="http://localhost:3000/#"
                        style={{
                          color: "#6b7281", fontSize: "14px", textDecoration: "none",
                          transition: "color 0.2s ease"
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = "#0ea5e9"}
                        onMouseLeave={(e) => e.currentTarget.style.color = "#6b7280"}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* MIDDLE SECTION: Brand & Newsletter */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 pt-10 border-t border-white/10">

            {/* Brand Info */}
            <div style={{ maxWidth: "340px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                <img
                  src="/logo/bw-bigger.png"
                  alt="Quikey Logo"
                  style={{ height: "48px", width: "auto", objectFit: "contain", marginLeft: "-8px" }}
                />
              </div>
              <p style={{ color: "#6b7280", fontSize: "14px", lineHeight: 1.6 }}>
                The modern commerce platform for entrepreneurs and enterprises. Build, launch, and grow your digital presence seamlessly.
              </p>
            </div>

            {/* Newsletter */}
            <div style={{ flex: "1 1 300px", maxWidth: "400px" }}>
              <div className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                Stay updated
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  style={{
                    flex: 1, padding: "12px 16px", borderRadius: "8px",
                    background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)",
                    color: "white", fontSize: "14px", outline: "none", transition: "border-color 0.3s"
                  }}
                  onFocus={(e) => e.target.style.borderColor = "#0ea5e9"}
                  onBlur={(e) => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    height: "48px",
                    padding: "0 20px", borderRadius: "8px",
                    background: "#ffffff", border: "none", color: "#000000",
                    fontSize: "14px", fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap",
                    boxShadow: "0 4px 10px rgba(255,255,255,0.2)"
                  }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-6 border-t border-white/10 text-center md:text-left">
          <p style={{ color: "#4b5563", fontSize: "13px" }}>
            © 2025 Quikey, Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {["Twitter", "GitHub", "LinkedIn", "Discord", "YouTube"].map(social => (
              <a
                key={social}
                href="#"
                style={{ color: "#4b5563", fontSize: "13px", textDecoration: "none", transition: "color 0.2s ease" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "white"}
                onMouseLeave={(e) => e.currentTarget.style.color = "#4b5563"}
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
