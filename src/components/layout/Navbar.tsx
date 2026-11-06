"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  name: string;
  href: string;
  shortName?: string;
  dropdown?: { name: string; href: string }[];
}

const navLinks: NavItem[] = [
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
  { name: "The DhruvSatya Method", shortName: "Method", href: "/method" },
  { name: "Soumitra Chatterjee", shortName: "Leadership", href: "/founder" },
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
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between">
          {/* Logo - Anchored on Left */}
          <Link
            href="/"
            className="flex items-center shrink-0 z-50 group py-1 mr-4 lg:mr-6"
            aria-label="DhruvSatya Home"
          >
            <div className="relative h-9 sm:h-10 md:h-11 xl:h-12 w-[140px] sm:w-[165px] md:w-[185px] xl:w-[200px] shrink-0">
              <Image
                src="/logo.png"
                alt="DhruvSatya Center for Personal Transformation"
                fill
                priority
                unoptimized
                className="object-contain object-left transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_12px_rgba(0,149,219,0.25)]"
                sizes="(max-width: 640px) 140px, (max-width: 1024px) 165px, 200px"
              />
            </div>
          </Link>

          {/* Desktop Nav - Aligned to Right Side with Adaptive Spacing */}
          <nav className="hidden xl:flex items-center gap-1 xl:gap-2 2xl:gap-3.5 ml-auto">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className="text-[10px] xl:text-[11px] 2xl:text-xs font-bold tracking-wider uppercase text-gray-300 hover:text-brand-accent transition-colors flex items-center gap-0.5 whitespace-nowrap px-1.5 xl:px-2 py-1.5 rounded-lg hover:bg-white/[0.04]"
                >
                  {link.shortName ? (
                    <>
                      <span className="hidden 2xl:inline">{link.name}</span>
                      <span className="inline 2xl:hidden">{link.shortName}</span>
                    </>
                  ) : (
                    link.name
                  )}
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

            {/* Right-most Action CTA */}
            <Link
              href="/contact"
              className="shimmer-button btn-gradient-animated px-3.5 xl:px-5 py-2 xl:py-2.5 text-brand-foundation text-[10px] xl:text-[11px] 2xl:text-xs font-black tracking-wider uppercase rounded-full whitespace-nowrap shadow-lg ml-1.5 xl:ml-3 shrink-0"
            >
              START A CONVERSATION
            </Link>
          </nav>

          {/* Mobile Toggle Button */}
          <button
            className="xl:hidden z-[100] text-white p-2 rounded-lg hover:bg-white/10 transition-colors ml-auto"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu className="w-7 h-7 text-brand-accent" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-[110] bg-brand-foundation/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 xl:hidden overflow-y-auto"
          >
            <div className="w-full flex justify-between items-center mb-8 border-b border-white/10 pb-4">
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
                <X className="w-6 h-6 text-gray-300" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex flex-col space-y-4 my-auto">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-white/5 pb-2">
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-semibold tracking-wider uppercase text-white hover:text-brand-accent transition-colors flex justify-between items-center py-2"
                  >
                    <span>{link.name}</span>
                  </Link>
                  {link.dropdown && (
                    <div className="pl-4 mt-2 space-y-2 border-l border-brand-cyan/20">
                      {link.dropdown.map((subLink) => (
                        <Link
                          key={subLink.name}
                          href={subLink.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-sm text-gray-400 hover:text-brand-cyan transition-colors py-1"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile CTA Button */}
            <div className="mt-8 pt-4 border-t border-white/10">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="shimmer-button btn-gradient-animated block w-full py-4 text-brand-foundation text-center font-bold tracking-widest uppercase rounded-full shadow-lg"
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
