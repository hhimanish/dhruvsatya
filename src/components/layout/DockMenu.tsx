"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Lightbulb, GraduationCap, Activity, PhoneCall } from "lucide-react";
import { useState, useEffect } from "react";

const dockItems = [
  { name: "Home", icon: Home, href: "/" },
  { name: "Solutions", icon: Lightbulb, href: "/solutions" },
  { name: "Programs", icon: GraduationCap, href: "/programs" },
  { name: "Analyzer", icon: Activity, href: "/analyzer" },
  { name: "Contact", icon: PhoneCall, href: "/contact" },
];

export function DockMenu() {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[80] pointer-events-none">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 }}
        className="pointer-events-auto flex items-center justify-center gap-2 md:gap-4 px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
      >
        {dockItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link key={item.name} href={item.href}>
              <motion.div
                whileHover={!isMobile ? { scale: 1.3, y: -10 } : {}}
                whileTap={{ scale: 0.9 }}
                className="relative group flex flex-col items-center justify-center p-2 rounded-xl transition-colors hover:bg-white/10"
              >
                <div className={`p-2 rounded-xl transition-colors ${isActive ? 'bg-brand-accent text-brand-foundation' : 'text-white'}`}>
                  <Icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={isActive ? 2.5 : 2} />
                </div>
                
                {/* Tooltip for desktop */}
                {!isMobile && (
                  <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-brand-foundation text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded shadow-lg pointer-events-none whitespace-nowrap">
                    {item.name}
                  </div>
                )}
                
                {/* Active indicator dot */}
                {isActive && (
                  <motion.div 
                    layoutId="dock-active"
                    className="absolute -bottom-1.5 w-1 h-1 rounded-full bg-brand-accent"
                  />
                )}
              </motion.div>
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
}
