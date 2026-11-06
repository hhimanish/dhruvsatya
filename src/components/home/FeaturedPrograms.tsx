"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Mountain,
  Target,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  ChevronRight
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
    <section className="py-28 px-4 md:px-12 bg-gradient-to-b from-brand-foundation via-[#0c121e] to-brand-foundation text-brand-ivory relative overflow-hidden border-t border-white/10">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-gray-300">
                Core Interventions
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-black tracking-tight text-white">
              Flagship Capability Programs.
            </h2>
          </div>

          <Link
            href="/programs"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-accent text-brand-foundation font-display font-black text-xs uppercase tracking-widest hover:bg-white transition-all shadow-lg shadow-brand-accent/20"
          >
            Browse All 25 Interventions
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {flagshipPrograms.map((prog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-3xl bg-white/[0.03] border border-white/10 hover:border-brand-accent/50 p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-accent/15 border border-brand-accent/30 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-foundation transition-all duration-300">
                    <prog.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-accent px-2.5 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20">
                    {prog.duration}
                  </span>
                </div>

                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">
                  {prog.category.split("&")[0]}
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">
                  {prog.title}
                </h3>
                <div className="text-[11px] font-semibold text-brand-accent/90 mb-4">
                  {prog.tagline}
                </div>
                <p className="text-xs text-gray-300 leading-relaxed mb-6">
                  {prog.desc}
                </p>

                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 mb-6">
                  <div className="text-[10px] uppercase font-bold text-gray-400 mb-0.5">Demography</div>
                  <div className="text-xs text-gray-300 font-medium">{prog.target}</div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <Link
                  href={`/contact?program=${encodeURIComponent(prog.title)}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-accent hover:text-white transition-colors"
                >
                  Inquire Now
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/programs"
                  className="text-xs text-gray-400 hover:text-white transition-colors"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
