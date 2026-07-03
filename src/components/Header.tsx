"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import WhyQuikeyDropdown from "./navigation/WhyQuikeyDropdown";
import ProductsDropdown from "./navigation/ProductsDropdown";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);
  const [isHoverLocked, setIsHoverLocked] = useState(false);
  const megaMenuTimeout = useRef<NodeJS.Timeout | null>(null);
  const productsMenuTimeout = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isPricing = pathname === "/pricing";
  const isEnterprise = pathname === "/enterprise";
  const isDarkHeroPage = isHome || isPricing || isEnterprise;
  const isScrolledStyle = scrolled || (!isHome && !isDarkHeroPage) || megaMenuOpen || productsMenuOpen;

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    if (window.location.pathname !== "/") {
      router.push("/" + targetId);
      return;
    }
    const element = document.querySelector(targetId);
    if (element) {
      setMobileMenuOpen(false);
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleMouseEnterWhy = () => {
    if (isHoverLocked) return;
    if (megaMenuTimeout.current) clearTimeout(megaMenuTimeout.current);
    setMegaMenuOpen(true);
  };

  const handleMouseLeaveWhy = () => {
    megaMenuTimeout.current = setTimeout(() => {
      setMegaMenuOpen(false);
      setIsHoverLocked(false);
    }, 150);
  };

  const handleClickWhy = (e: React.MouseEvent) => {
    e.preventDefault();
    if (megaMenuTimeout.current) clearTimeout(megaMenuTimeout.current);

    if (megaMenuOpen) {
      setMegaMenuOpen(false);
      setIsHoverLocked(true);
    } else {
      setMegaMenuOpen(true);
      setIsHoverLocked(false);
    }
  };

  const handleMouseEnterProducts = () => {
    if (isHoverLocked) return;
    if (productsMenuTimeout.current) clearTimeout(productsMenuTimeout.current);
    setProductsMenuOpen(true);
  };

  const handleMouseLeaveProducts = () => {
    productsMenuTimeout.current = setTimeout(() => {
      setProductsMenuOpen(false);
      setIsHoverLocked(false);
    }, 150);
  };

  const handleClickProducts = (e: React.MouseEvent) => {
    e.preventDefault();
    if (productsMenuTimeout.current) clearTimeout(productsMenuTimeout.current);

    if (productsMenuOpen) {
      setProductsMenuOpen(false);
      setIsHoverLocked(true);
    } else {
      setProductsMenuOpen(true);
      setIsHoverLocked(false);
    }
  };

  return (
    <>
      <header className={`header ${isScrolledStyle ? "scrolled" : ""} z-[101]`}>
        <div className="container h-[72px] flex items-center justify-between">
          {/* Logo */}
          <a href="http://localhost:3000/" className="flex items-center" style={{ textDecoration: "none" }}>
            <img
              src="/logo/q_bag_3d_alpha.png"
              alt="Quikey Bag"
              style={{ height: "56px", width: "auto", objectFit: "contain", marginRight: "-6px" }}
            />
            <img
              src="/logo/quickylogo.png"
              alt="Quikey Logo"
              style={{
                height: "24px",
                width: "auto",
                objectFit: "contain",
                filter: "brightness(0) invert(1)",
                marginTop: "10px"
              }}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-4 h-full">
            <div
              className="h-full flex items-center"
              onMouseEnter={handleMouseEnterWhy}
              onMouseLeave={handleMouseLeaveWhy}
            >
              <button
                className="nav-link bg-transparent border-none cursor-pointer outline-none"
                onClick={handleClickWhy}
              >
                Why Quikey
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`transition-transform duration-200 ${megaMenuOpen ? "rotate-180" : ""}`}>
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
            </div>

            <div
              className="h-full flex items-center"
              onMouseEnter={handleMouseEnterProducts}
              onMouseLeave={handleMouseLeaveProducts}
            >
              <button
                className="nav-link bg-transparent border-none cursor-pointer outline-none"
                onClick={handleClickProducts}
              >
                Products
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`transition-transform duration-200 ${productsMenuOpen ? "rotate-180" : ""}`}>
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
            </div>
            <a href="http://localhost:3000/pricing" className="nav-link h-full flex items-center">Pricing</a>
            <a href="http://localhost:3000/themes" className="nav-link h-full flex items-center">Our theme store</a>
            <a href="http://localhost:3000/about" className="nav-link h-full flex items-center">About Us</a>
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="http://localhost:3001/login" className="text-white font-semibold text-sm hover:text-gray-300 transition-colors">
              Log in
            </a>
            <a href="http://localhost:3001/login" className="btn-primary btn-sm">
              Start for free
            </a>
          </div>
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-[6px] z-[102] relative w-8 h-8"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <motion.span 
              animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} 
              className="w-6 h-[2px] bg-white block rounded-full transition-colors"
            />
            <motion.span 
              animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }} 
              className="w-6 h-[2px] bg-white block rounded-full transition-colors"
            />
            <motion.span 
              animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} 
              className="w-6 h-[2px] bg-white block rounded-full transition-colors"
            />
          </button>
        </div>
      </header>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {megaMenuOpen && (
          <WhyQuikeyDropdown
            isOpen={megaMenuOpen}
            onMouseEnter={handleMouseEnterWhy}
            onMouseLeave={handleMouseLeaveWhy}
          />
        )}
      </AnimatePresence>

      {/* Products Dropdown */}
      <AnimatePresence>
        {productsMenuOpen && (
          <ProductsDropdown
            isOpen={productsMenuOpen}
            onMouseEnter={handleMouseEnterProducts}
            onMouseLeave={handleMouseLeaveProducts}
          />
        )}
      </AnimatePresence>

      {/* GSAP-Style Animated Mobile Sidebar */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            style={{
              position: "fixed", inset: 0, zIndex: 99,
              background: "#0A0A0A", display: "flex", flexDirection: "column",
              padding: "120px 32px 40px", overflowY: "auto"
            }}
          >
            <motion.div
              initial="closed" animate="open" exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
              }}
              style={{ display: "flex", flexDirection: "column", gap: "32px", flex: 1 }}
            >
              {[
                { name: "Why Quikey", href: "http://localhost:3000/#" },
                { name: "Products", href: "http://localhost:3000/#products" },
                { name: "Pricing", href: "http://localhost:3000/pricing" },
                { name: "Theme Store", href: "http://localhost:3000/themes" },
                { name: "About Us", href: "http://localhost:3000/about" },
              ].map((link, i) => (
                <div key={i} style={{ overflow: "hidden" }}>
                  <motion.div
                    variants={{
                      closed: { y: "100%", opacity: 0 },
                      open: { y: "0%", opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => {
                        setMobileMenuOpen(false);
                        if (link.href.startsWith("#") && link.href !== "#") {
                          handleSmoothScroll(e, link.href);
                        }
                      }}
                      className="text-[32px] sm:text-5xl font-extrabold text-white tracking-tight inline-block no-underline"
                    >
                      {link.name}
                    </a>
                  </motion.div>
                </div>
              ))}
            </motion.div>

            {/* Bottom Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "auto" }}
            >
              <a
                href="http://localhost:3001/login"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: "white", fontWeight: 600, fontSize: "18px",
                  textDecoration: "none", textAlign: "center", padding: "16px",
                  border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px"
                }}
              >
                Log in
              </a>
              <a
                href="http://localhost:3001/login"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary"
                style={{ textAlign: "center", width: "100%", padding: "16px" }}
              >
                Start for free
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
