"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, User, Fuel, GraduationCap, ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";

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
    <section className="py-28 px-4 md:px-12 bg-brand-foundation text-brand-ivory relative overflow-hidden">
      {/* Top Animated Gradient Hairline */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] gradient-hairline-animated" />
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
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
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-cyan hover:text-brand-accent transition-colors group"
          >
            Explore All Pathways
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pathways.map((path, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group gradient-card-bloom gradient-border-card relative rounded-3xl overflow-hidden bg-white/[0.03] p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 min-h-[420px]"
            >
              {/* Background Ambient Photo */}
              <div className="absolute inset-0 z-0 opacity-15 group-hover:opacity-25 transition-opacity duration-700">
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
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    idx % 2 === 0
                      ? "bg-brand-cyan/15 border border-brand-cyan/30 text-brand-cyan group-hover:bg-brand-cyan group-hover:text-brand-foundation"
                      : "bg-brand-accent/15 border border-brand-accent/30 text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-foundation"
                  }`}>
                    <path.icon className="w-6 h-6" />
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                    idx % 2 === 0
                      ? "text-brand-cyan bg-brand-cyan/10 border-brand-cyan/25"
                      : "text-brand-accent bg-brand-accent/10 border-brand-accent/25"
                  }`}>
                    {path.badge}
                  </span>
                </div>

                <h3 className={`text-xl font-display font-bold text-white mb-2 transition-colors ${
                  "group-hover:text-gradient-animated"
                }`}>
                  {path.title}
                </h3>
                <div className={`text-[11px] font-semibold uppercase tracking-wider mb-4 ${
                  idx % 2 === 0 ? "text-brand-cyan/90" : "text-brand-accent/90"
                }`}>
                  {path.tagline}
                </div>
                <p className="text-xs text-gray-300 leading-relaxed mb-6">
                  {path.desc}
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-white/5 flex items-center justify-between">
                <Link
                  href={path.href}
                  className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                    idx % 2 === 0
                      ? "text-brand-cyan hover:text-white"
                      : "text-brand-accent hover:text-white"
                  }`}
                >
                  Explore Solution
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
