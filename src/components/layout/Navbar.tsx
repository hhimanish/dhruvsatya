"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Corporate OD & Training", href: "/solutions/organisations" },
  { name: "Personal Mastery", href: "/solutions/leaders" },
  { name: "Campus & FDP", href: "/solutions/institutions" },
  { name: "Soumitra Chatterjee", href: "/founder" },
  { name: "Impact", href: "/impact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 15);
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
            ? "bg-[#0B0F17]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Brand Identity Left */}
          <Link href="/" className="flex items-center gap-3 z-50 group py-1" data-cursor-suppress>
            <Image
              src="/images/logo-horizontal.png"
              alt="DhruvSatya Center for Personal Transformation"
              width={220}
              height={68}
              priority
              className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Navigation Links Center */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                data-cursor-suppress
                className="text-[11px] xl:text-xs font-semibold tracking-wider uppercase text-[#94A3B8] hover:text-[#D4AF37] transition-colors duration-200 whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Action Right: Subtle bordered button */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              data-cursor-suppress
              className="px-5 py-2.5 rounded-full border border-[#D4AF37]/50 text-[#F8F6F0] bg-white/[0.04] backdrop-blur-md hover:bg-[#D4AF37] hover:text-[#0B0F17] hover:border-[#D4AF37] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all duration-300 text-[11px] xl:text-xs font-bold tracking-wider uppercase whitespace-nowrap"
            >
              Schedule Executive Consult
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden z-[100] text-[#F8F6F0] p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Navigation Menu"
            data-cursor-suppress
          >
            <Menu className="w-7 h-7 text-[#D4AF37]" />
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
            className="fixed inset-0 min-h-screen min-h-[100dvh] w-full bg-[#0B0F17]/98 backdrop-blur-2xl z-[999] flex flex-col pt-6 pb-[calc(2rem+env(safe-area-inset-bottom))] overflow-y-auto"
          >
            {/* Overlay Header */}
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center mb-8 border-b border-white/10 pb-4">
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
                className="text-[#F8F6F0] p-2 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 transition-all"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close Menu"
              >
                <X className="w-6 h-6 text-[#D4AF37]" />
              </button>
            </div>

            <div className="flex flex-col space-y-6 px-6 md:px-12">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-2xl font-display font-bold text-[#F8F6F0] hover:text-[#D4AF37] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/programs"
                className="text-2xl font-display font-bold text-[#F8F6F0] hover:text-[#D4AF37] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Browse All Programs
              </Link>
            </div>

            <div className="mt-auto pt-8 px-6 md:px-12">
              <Link
                href="/contact"
                className="block w-full text-center px-6 py-4 bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] text-[#0B0F17] text-base font-black tracking-widest uppercase rounded-xl shadow-lg hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Schedule Executive Consult
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
