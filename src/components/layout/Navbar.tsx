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
            ? "bg-brand-foundation/95 backdrop-blur-md shadow-2xl py-3.5 border-b border-brand-cyan/20"
            : "bg-transparent py-5 lg:py-6"
        }`}
      >
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-start">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center shrink-0 z-50 group py-1 mr-4 lg:mr-6 xl:mr-8"
            aria-label="DhruvSatya Home"
          >
            <div className="relative h-9 sm:h-10 md:h-12 w-[140px] sm:w-[165px] md:w-[190px] shrink-0">
              <Image
                src="/logo.png"
                alt="DhruvSatya Center for Personal Transformation"
                fill
                priority
                unoptimized
                className="object-contain object-left transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_12px_rgba(0,149,219,0.25)]"
                sizes="(max-width: 640px) 140px, (max-width: 1024px) 165px, 190px"
              />
            </div>
          </Link>

          {/* Desktop Nav - Moved to Left Side directly following the Logo */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2.5 2xl:gap-4">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className="text-[10px] xl:text-[11px] 2xl:text-xs font-bold tracking-wider uppercase text-gray-300 hover:text-brand-accent transition-colors flex items-center gap-0.5 whitespace-nowrap px-1.5 xl:px-2 py-1.5 rounded-lg hover:bg-white/[0.04]"
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-3.5 h-3.5 ml-0.5 opacity-70 group-hover:opacity-100 transition-opacity" />}
                </Link>
                
                {/* Dropdown */}
                {link.dropdown && (
                  <div className="absolute top-full left-0 mt-3 w-64 bg-brand-secondary border border-brand-cyan/25 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 rounded-2xl overflow-hidden backdrop-blur-xl">
                    {link.dropdown.map((dropLink) => (
                      <Link
                        key={dropLink.name}
                        href={dropLink.href}
                        className="block px-6 py-4 text-sm font-medium text-gray-200 hover:bg-brand-cyan/10 hover:text-brand-accent transition-colors border-b border-white/5 last:border-b-0"
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
              className="shimmer-button btn-gradient-animated px-3.5 xl:px-4.5 2xl:px-5 py-2 xl:py-2.5 text-brand-foundation text-[10px] xl:text-[11px] 2xl:text-xs font-black tracking-wider uppercase rounded-full whitespace-nowrap shadow-lg ml-2 xl:ml-3 shrink-0"
            >
              START A CONVERSATION
            </Link>
          </nav>

          {/* Mobile Toggle Button */}
          <button
            className="lg:hidden ml-auto z-[100] text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
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
            className="fixed inset-0 min-h-screen min-h-[100dvh] w-full bg-brand-foundation/98 backdrop-blur-2xl z-[999] flex flex-col pt-6 pb-[calc(2rem+env(safe-area-inset-bottom))] overflow-y-auto"
          >
            {/* Overlay Header */}
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center mb-8 border-b border-white/10 pb-4">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center shrink-0">
                <div className="relative h-10 w-[160px] shrink-0">
                  <Image
                    src="/logo.png"
                    alt="DhruvSatya Center for Personal Transformation"
                    fill
                    priority
                    unoptimized
                    className="object-contain object-left drop-shadow-[0_2px_12px_rgba(0,149,219,0.25)]"
                    sizes="160px"
                  />
                </div>
              </Link>
              <button
                className="text-white p-2 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 transition-all"
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
                    className="text-2xl font-display text-white hover:text-brand-accent transition-colors"
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
                          className="text-lg text-gray-300 hover:text-brand-cyan transition-colors"
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
                className="block w-full text-center px-6 py-4 bg-brand-accent text-brand-foundation text-base font-black tracking-widest uppercase hover:bg-white transition-all rounded-full shadow-lg"
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
