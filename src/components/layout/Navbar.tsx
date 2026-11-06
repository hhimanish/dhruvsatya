"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Why DhruvSatya", href: "/about" },
  {
    name: "Solutions",
    href: "/solutions",
    dropdown: [
      { name: "For Organisations", href: "/solutions/organisations" },
      { name: "For Leaders", href: "/solutions/leaders" },
      { name: "For Institutions", href: "/solutions/institutions" },
    ],
  },
  { name: "Programs", href: "/programs" },
  { name: "The DhruvSatya Method", href: "/method" },
  { name: "Soumitra Chatterjee", href: "/founder" },
  { name: "Impact", href: "/impact" },
  { name: "AI Analyzer", href: "/analyzer" },
  { name: "Insights", href: "/insights" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3.5"
            : "bg-white/80 backdrop-blur-sm border-b border-slate-100/60 py-4"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center z-50 group py-1">
            <Image
              src="/images/logo-horizontal.png"
              alt="DhruvSatya Center for Personal Transformation"
              width={240}
              height={74}
              priority
              className="h-9 sm:h-11 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 ml-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className="text-[11px] xl:text-xs font-bold tracking-widest uppercase text-slate-700 hover:text-brand-cyan font-bold transition-colors flex items-center gap-1 whitespace-nowrap"
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-4 h-4 ml-1" />}
                </Link>
                
                {/* Dropdown */}
                {link.dropdown && (
                  <div className="absolute top-full left-0 mt-4 w-64 bg-white border border-slate-100 shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 rounded-2xl overflow-hidden backdrop-blur-xl">
                    {link.dropdown.map((dropLink) => (
                      <Link
                        key={dropLink.name}
                        href={dropLink.href}
                        className="block px-6 py-4 text-sm font-medium text-slate-700 hover:bg-sky-50 hover:text-brand-cyan transition-colors border-b border-slate-50 last:border-b-0"
                      >
                        {dropLink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="px-6 py-3 bg-gradient-to-r from-brand-accent to-amber-500 text-white text-[11px] xl:text-xs font-black tracking-widest uppercase rounded-full hover:shadow-lg hover:shadow-amber-500/25 transition-all whitespace-nowrap"
            >
              START A CONVERSATION
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden z-[100] text-slate-800 p-2"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu className="w-7 h-7 text-brand-accent" />
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 min-h-screen min-h-[100dvh] w-full bg-white/98 backdrop-blur-2xl z-[999] flex flex-col pt-6 pb-[calc(2rem+env(safe-area-inset-bottom))] overflow-y-auto text-slate-900"
          >
            {/* Overlay Header */}
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center mb-8 border-b border-slate-100 pb-4">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                <Image
                  src="/images/logo-horizontal.png"
                  alt="DhruvSatya Center for Personal Transformation"
                  width={200}
                  height={62}
                  className="h-10 w-auto object-contain"
                />
              </Link>
              <button
                className="text-slate-700 p-2 rounded-full bg-slate-100 hover:bg-slate-200 active:scale-95 transition-all"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close Menu"
              >
                <X className="w-6 h-6 text-brand-accent" />
              </button>
            </div>

            <div className="flex flex-col space-y-6 px-6 md:px-12">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col space-y-3">
                  <Link
                    href={link.href}
                    className="text-2xl font-display font-bold text-slate-900 hover:text-brand-cyan transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="flex flex-col pl-4 space-y-3 border-l-2 border-brand-cyan">
                      {link.dropdown.map((dropLink) => (
                        <Link
                          key={dropLink.name}
                          href={dropLink.href}
                          className="text-lg text-slate-600 hover:text-brand-cyan transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {dropLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-auto pt-8 px-6 md:px-12">
              <Link
                href="/contact"
                className="block w-full text-center px-6 py-4 bg-gradient-to-r from-brand-accent to-amber-500 text-white text-base font-black tracking-widest uppercase hover:shadow-xl transition-all rounded-full shadow-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                START A CONVERSATION
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
