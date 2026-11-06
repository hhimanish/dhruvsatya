"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles, Compass, ShieldCheck, TrendingUp, Users, Target, User } from "lucide-react";
import Link from "next/link";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const options = [
  { id: "leadership", label: "Executive Leadership & Mindset", icon: MountainIcon, href: "/solutions/leaders" },
  { id: "culture", label: "Organisational Culture & Silos", icon: Users, href: "/solutions/organisations" },
  { id: "sales", label: "Sales & Commercial Acceleration", icon: TrendingUp, href: "/solutions/organisations#sales" },
  { id: "safety", label: "Behavioural Safety (BBS Zero Harm)", icon: ShieldCheck, href: "/solutions/organisations#safety" },
  { id: "institutions", label: "Academic & Institutional Excellence", icon: Compass, href: "/solutions/institutions" },
  { id: "personal", label: "1-on-1 CXO Strategic Coaching", icon: User, href: "/founder" },
];

function MountainIcon(props: any) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

export function DiagnosticTool() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="py-24 md:py-36 bg-brand-foundation text-white border-y border-white/10 relative overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-accent/[0.04] rounded-full blur-[150px] pointer-events-none" />

      {/* Subtle scanning radar line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-accent/30 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-gray-300">
              Interactive Diagnostic
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-black text-white tracking-tight">
            What Are You Trying to Change?
          </h2>
          <p className="text-gray-400 text-sm md:text-base mt-4 max-w-2xl mx-auto font-light">
            Select your primary strategic imperative to reveal the optimal intervention pathway.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {options.map((opt) => {
            const isSelected = selected === opt.id;
            const Icon = opt.icon;

            return (
              <button
                key={opt.id}
                onClick={() => setSelected(opt.id)}
                className="text-left w-full focus:outline-none"
              >
                <SpotlightCard
                  spotlightColor="rgba(252, 163, 17, 0.25)"
                  enableTilt={false}
                  className={`p-6 md:p-8 transition-all duration-300 ${
                    isSelected
                      ? "border-brand-accent bg-brand-accent/[0.12] shadow-[0_0_35px_rgba(252,163,17,0.25)] ring-1 ring-brand-accent"
                      : "border-white/10 bg-white/[0.03] hover:border-brand-accent/40 hover:bg-white/[0.06]"
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? "bg-brand-accent text-brand-foundation"
                          : "bg-white/5 text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-foundation"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    {isSelected && (
                      <CheckCircle2 className="text-brand-accent w-5 h-5 animate-in zoom-in duration-300" />
                    )}
                  </div>
                  <span className="text-lg md:text-xl font-display font-bold text-white block group-hover:text-brand-accent transition-colors">
                    {opt.label}
                  </span>
                </SpotlightCard>
              </button>
            );
          })}
        </div>

        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              className="mt-12 text-center overflow-hidden p-8 rounded-3xl bg-white/[0.03] border border-brand-accent/30 backdrop-blur-xl shadow-[0_0_40px_rgba(252,163,17,0.15)]"
            >
              <div className="text-xs uppercase tracking-widest text-brand-accent font-bold mb-2">
                Identified Transformation Pathway
              </div>
              <h4 className="text-2xl font-display font-bold text-white mb-4">
                Targeting: {options.find((o) => o.id === selected)?.label}
              </h4>
              <p className="text-gray-300 text-sm md:text-base mb-8 max-w-xl mx-auto font-light leading-relaxed">
                Explore tailored intervention blueprints, measurable Kirkpatrick metrics, and authentic case studies aligned with this challenge.
              </p>
              <Link
                href={options.find((o) => o.id === selected)?.href || "/contact"}
                className="inline-flex items-center px-8 py-4 rounded-full bg-brand-accent text-brand-foundation font-display font-black text-xs uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_25px_rgba(252,163,17,0.3)]"
              >
                EXPLORE RECOMMENDED INTERVENTION
                <ArrowRight className="w-4 h-4 ml-2.5" />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
