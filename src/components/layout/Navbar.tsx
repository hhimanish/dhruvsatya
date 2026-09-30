"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-foundation/95 backdrop-blur-md shadow-lg border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 z-50">
          <span
            className={`font-display font-black text-2xl tracking-tighter ${mobileMenuOpen ? 'text-brand-foundation' : 'text-white'}`}
          >
            DHRUVSATYA
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 ml-6">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                href={link.href}
                className="text-[11px] xl:text-xs font-bold tracking-widest uppercase text-gray-300 hover:text-brand-accent transition-colors flex items-center gap-1 whitespace-nowrap"
              >
                {link.name}
                {link.dropdown && <ChevronDown className="w-4 h-4 ml-1" />}
              </Link>
              
              {/* Dropdown */}
              {link.dropdown && (
                <div className="absolute top-full left-0 mt-4 w-64 bg-brand-secondary border border-white/10 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 rounded-none overflow-hidden">
                  {link.dropdown.map((dropLink) => (
                    <Link
                      key={dropLink.name}
                      href={dropLink.href}
                      className="block px-6 py-4 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-brand-accent transition-colors border-b border-white/5 last:border-b-0"
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
            className="px-5 py-3 xl:px-6 bg-brand-accent text-brand-foundation text-[11px] xl:text-xs font-bold tracking-widest uppercase hover:bg-white transition-colors whitespace-nowrap"
          >
            START A CONVERSATION
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden z-50 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-brand-foundation" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))] overflow-y-auto"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col space-y-3">
                  <Link
                    href={link.href}
                    className="text-2xl font-display text-brand-foundation"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="flex flex-col pl-4 space-y-3 border-l-2 border-brand-accent">
                      {link.dropdown.map((dropLink) => (
                        <Link
                          key={dropLink.name}
                          href={dropLink.href}
                          className="text-lg text-gray-600"
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
            
            <div className="mt-auto pt-8">
              <Link
                href="/contact"
                className="block w-full text-center px-6 py-4 bg-brand-foundation text-white text-lg font-medium hover:bg-brand-accent transition-colors rounded-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                START A CONVERSATION
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
