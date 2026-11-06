"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, User, Fuel, GraduationCap, ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function FeaturedSolutions() {
  const pathways = [
    {
      title: "For Enterprises & Corporates",
      tagline: "Culture, Execution & Systemic Performance",
      desc: "Transform organizational culture, eliminate interdepartmental friction, and build rigorous execution cadences.",
      href: "/solutions/organisations",
      icon: Building2,
      image: "/images/team-conference.jpg",
      badge: "700+ Enterprises"
    },
    {
      title: "For C-Suite & Executive Leaders",
      tagline: "Vision, Clarity & 1-on-1 CXO Breakthroughs",
      desc: "Develop executive presence, align senior leadership around the VMOSA framework, and sharpen high-stakes decision intelligence.",
      href: "/solutions/leaders",
      icon: User,
      image: "/images/Personal.jpg",
      badge: "Executive Advisory"
    },
    {
      title: "For Specialized Industry Verticals",
      tagline: "Behaviour Based Safety (BBS) & Retail Networks",
      desc: "Field-tested operational, safety (Zero Harm), and distributor excellence frameworks for Oil & Gas, LPG retail, and plants.",
      href: "/programs",
      icon: Fuel,
      image: "/images/group-2.jpg",
      badge: "Oil, LPG & Plant OEE"
    },
    {
      title: "For Educational Institutions",
      tagline: "FDP, Academic Governance & Student Success",
      desc: "Elevating academic standards across 300+ engineering colleges and universities through faculty development and campus placement bootcamps.",
      href: "/solutions/institutions",
      icon: GraduationCap,
      image: "/images/group-pic.jpg",
      badge: "300+ Colleges"
    }
  ];

  return (
    <section className="py-28 px-4 md:px-12 bg-brand-foundation text-brand-ivory relative overflow-hidden border-t border-white/10">
      {/* Background Ambient Mesh Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-accent/[0.04] rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-gray-300">
                Strategic Solutions
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-black tracking-tight text-white">
              Tailored Transformation Pathways.
            </h2>
          </div>

          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-accent hover:text-white transition-colors group"
          >
            Explore All Pathways
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pathways.map((path, idx) => (
            <SpotlightCard
              key={idx}
              spotlightColor="rgba(252, 163, 17, 0.22)"
              enableTilt={true}
              className="p-6 sm:p-8 flex flex-col justify-between min-h-[420px]"
            >
              {/* Background Ambient Photo with Glass Texture */}
              <div className="absolute inset-0 z-0 opacity-15 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none">
                <Image
                  src={path.image}
                  alt={path.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-foundation via-brand-foundation/90 to-brand-foundation/70" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-accent/15 border border-brand-accent/30 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-foundation transition-all duration-300 shadow-[0_0_20px_rgba(252,163,17,0.15)]">
                    <path.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-accent px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20">
                    {path.badge}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">
                  {path.title}
                </h3>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-brand-accent/90 mb-4">
                  {path.tagline}
                </div>
                <p className="text-xs text-gray-300 leading-relaxed mb-6">
                  {path.desc}
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-white/5 flex items-center justify-between">
                <Link
                  href={path.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-accent hover:text-white transition-colors"
                >
                  Explore Solution
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
