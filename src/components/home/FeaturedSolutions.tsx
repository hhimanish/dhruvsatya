"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, User, Fuel, GraduationCap, ArrowRight, ArrowUpRight } from "lucide-react";

export function FeaturedSolutions() {
  const pathways = [
    {
      title: "For Enterprises & Corporates",
      tagline: "Culture, Execution & Systemic Performance",
      desc: "Transform organizational culture, eliminate interdepartmental friction, and build rigorous execution cadences that deliver sustainable business growth.",
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
      desc: "Field-tested operational, safety (Zero Harm), and distributor excellence frameworks for Oil & Gas, LPG retail, and manufacturing plants.",
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
    <section className="py-24 md:py-28 px-4 md:px-12 bg-slate-50/70 text-slate-900 relative overflow-hidden border-t border-slate-200/60">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-sky-200 shadow-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-slate-700">
                Strategic Pathways
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-black tracking-tight text-slate-900">
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
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200/90 hover:border-brand-cyan/60 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 min-h-[420px] shadow-sm"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm ${
                    idx % 2 === 0
                      ? "bg-sky-50 text-brand-cyan border border-sky-200 group-hover:bg-brand-cyan group-hover:text-white"
                      : "bg-amber-50 text-brand-accent border border-amber-200 group-hover:bg-brand-accent group-hover:text-white"
                  }`}>
                    <path.icon className="w-6 h-6" />
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                    idx % 2 === 0
                      ? "text-brand-cyan bg-sky-50 border-sky-200"
                      : "text-brand-accent bg-amber-50 border-amber-200"
                  }`}>
                    {path.badge}
                  </span>
                </div>

                <h3 className={`text-xl font-display font-bold text-slate-900 mb-2 transition-colors ${
                  idx % 2 === 0 ? "group-hover:text-brand-cyan" : "group-hover:text-brand-accent"
                }`}>
                  {path.title}
                </h3>
                <div className={`text-[11px] font-bold uppercase tracking-wider mb-4 ${
                  idx % 2 === 0 ? "text-brand-cyan" : "text-brand-accent"
                }`}>
                  {path.tagline}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">
                  {path.desc}
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={path.href}
                  className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                    idx % 2 === 0
                      ? "text-brand-cyan hover:text-blue-700"
                      : "text-brand-accent hover:text-amber-600"
                  }`}
                >
                  Explore Pathway
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
