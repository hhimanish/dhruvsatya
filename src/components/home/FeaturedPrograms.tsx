"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Mountain,
  Target,
  Clock,
  ArrowUpRight
} from "lucide-react";

export function FeaturedPrograms() {
  const flagshipPrograms = [
    {
      title: "Leadership Excellence",
      tagline: "Inspire. Influence. Lead with Impact.",
      category: "Leadership & Strategic Governance",
      duration: "2 Days",
      target: "Senior Executives & Department Heads",
      desc: "Develop executive presence, align multi-functional teams, and foster radical accountability to navigate corporate transitions.",
      icon: Mountain
    },
    {
      title: "Execution Excellence",
      tagline: "Drive Strategy into Action. Deliver Results.",
      category: "Execution, Management & Team Synergy",
      duration: "1 Day",
      target: "Operations & Project Managers",
      desc: "Dismantle departmental bottlenecks, translate strategy into daily sprints, and build a relentless finish-line orientation.",
      icon: Target
    },
    {
      title: "Behaviour Based Safety (BBS)",
      tagline: "Zero Harm Through Culture & Peer Observation.",
      category: "Behavior-Based Safety (BBS) & Operations",
      duration: "1 - 2 Days",
      target: "Plant Heads, Safety Officers & Supervisors",
      desc: "Field-tested across Indian oil refineries and heavy plants to eliminate unsafe acts and establish voluntary peer safety vigilance.",
      icon: ShieldCheck
    },
    {
      title: "Triple Your Business Growth",
      tagline: "Sales Academy Certification Program.",
      category: "Sales, Commercial & Retail Transformation",
      duration: "2 - 3 Days",
      target: "Sales Directors & Account Managers",
      desc: "Master consultative value selling, defend margins, overcome price resistance, and drive sustainable revenue growth.",
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-24 md:py-28 px-4 md:px-12 bg-white text-slate-900 relative overflow-hidden border-t border-slate-200/60">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 shadow-sm mb-4">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse shadow-[0_0_8px_#F8A612]" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-slate-700">
                Core Interventions
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-black tracking-tight text-slate-900">
              Flagship Capability Programs.
            </h2>
          </div>

          <Link
            href="/programs"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-brand-accent to-amber-500 text-white font-display font-black text-xs uppercase tracking-widest hover:shadow-lg hover:shadow-amber-500/25 transition-all shadow-md"
          >
            Browse All 25 Interventions
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {flagshipPrograms.map((prog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-slate-50/70 border border-slate-200/90 hover:border-brand-accent/60 hover:bg-white p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 min-h-[420px] shadow-sm"
            >
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm ${
                    idx % 2 === 0
                      ? "bg-amber-50 text-brand-accent border border-amber-200 group-hover:bg-brand-accent group-hover:text-white"
                      : "bg-sky-50 text-brand-cyan border border-sky-200 group-hover:bg-brand-cyan group-hover:text-white"
                  }`}>
                    <prog.icon className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-bold text-slate-600 bg-white px-2.5 py-1 rounded-full border border-slate-200 shadow-xs">
                    <Clock className={`w-3.5 h-3.5 ${idx % 2 === 0 ? "text-brand-accent" : "text-brand-cyan"}`} />
                    <span>{prog.duration}</span>
                  </div>
                </div>

                <div className={`text-[10px] font-black uppercase tracking-widest mb-2 ${
                  idx % 2 === 0 ? "text-brand-accent" : "text-brand-cyan"
                }`}>
                  {prog.category}
                </div>
                <h3 className={`text-xl font-display font-bold text-slate-900 mb-2 transition-colors ${
                  idx % 2 === 0 ? "group-hover:text-brand-accent" : "group-hover:text-brand-cyan"
                }`}>
                  {prog.title}
                </h3>
                <div className="text-[11px] font-semibold text-slate-500 italic mb-4">
                  "{prog.tagline}"
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">
                  {prog.desc}
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <Link
                  href="/programs"
                  className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                    idx % 2 === 0
                      ? "text-brand-accent hover:text-amber-600"
                      : "text-brand-cyan hover:text-blue-700"
                  }`}
                >
                  View Details
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
