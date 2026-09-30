"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const options = [
  { id: "leadership", label: "Leadership Capability", href: "/solutions/leaders" },
  { id: "culture", label: "Organisational Culture", href: "/solutions/organisations" },
  { id: "sales", label: "Sales & Execution", href: "/solutions/organisations#sales" },
  { id: "safety", label: "Behavioural Safety", href: "/solutions/organisations#safety" },
  { id: "institutions", label: "Institutional Excellence", href: "/solutions/institutions" },
  { id: "personal", label: "My Own Leadership", href: "/founder" },
];

export function DiagnosticTool() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="py-20 md:py-32 bg-brand-foundation text-white border-y border-white/5 relative">
      {/* Decorative gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-brand-accent/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-sm font-semibold text-brand-accent tracking-[0.3em] uppercase mb-4">
            Start Your Journey
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-white">
            What are you trying to change?
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setSelected(opt.id)}
              className={`relative p-8 text-left transition-all duration-300 border ${
                selected === opt.id
                  ? "border-brand-accent bg-brand-accent/20 shadow-[0_0_30px_rgba(245,166,35,0.2)] scale-[1.02] text-white"
                  : "border-white/20 bg-white/10 hover:border-brand-accent/50 hover:bg-white/20 text-gray-300 hover:text-white"
              }`}
            >
              <span className="text-xl font-display font-bold">{opt.label}</span>
              {selected === opt.id && (
                <CheckCircle2 className="absolute top-8 right-8 text-brand-accent w-6 h-6 animate-in zoom-in duration-300" />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 56 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              className="text-center overflow-hidden"
            >
              <p className="text-gray-400 text-lg mb-8 font-light">
                Let's explore the right path for your specific challenge.
              </p>
              <Link
                href={options.find(o => o.id === selected)?.href || "/contact"}
                className="inline-flex items-center px-10 py-5 bg-brand-accent text-brand-foundation font-bold text-sm tracking-widest uppercase hover:bg-white transition-colors"
              >
                LET'S EXPLORE
                <ArrowRight className="w-5 h-5 ml-3" />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
