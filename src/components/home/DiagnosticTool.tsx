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
    <section className="py-20 md:py-28 bg-white text-slate-900 border-y border-slate-200/70 relative">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold text-brand-cyan tracking-[0.3em] uppercase mb-3">
            Start Your Journey
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-slate-900">
            What are you trying to change?
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setSelected(opt.id)}
              className={`relative p-7 text-left rounded-2xl transition-all duration-300 border ${
                selected === opt.id
                  ? "border-brand-cyan bg-sky-50/80 shadow-md shadow-sky-500/10 scale-[1.02] text-slate-900"
                  : "border-slate-200 bg-slate-50/70 hover:border-brand-cyan/60 hover:bg-white text-slate-700 hover:text-slate-900 shadow-xs"
              }`}
            >
              <span className="text-lg font-display font-bold">{opt.label}</span>
              {selected === opt.id && (
                <CheckCircle2 className="absolute top-7 right-7 text-brand-cyan w-5 h-5 animate-in zoom-in duration-300" />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 44 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              className="text-center overflow-hidden"
            >
              <p className="text-slate-600 text-base md:text-lg mb-6 font-normal">
                Let's explore the right pathway for your specific challenge.
              </p>
              <Link
                href={options.find(o => o.id === selected)?.href || "/contact"}
                className="inline-flex items-center px-9 py-4 bg-gradient-to-r from-brand-accent to-amber-500 text-white font-bold text-xs tracking-widest uppercase hover:shadow-lg hover:shadow-amber-500/30 rounded-full transition-all"
              >
                LET'S EXPLORE
                <ArrowRight className="w-4 h-4 ml-2.5" />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
