"use client";

import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  User,
  GraduationCap,
  Fuel,
  ShieldCheck,
  TrendingUp,
  Target,
  BarChart3,
  CheckCircle2,
  Layers,
  Sparkles,
  ArrowUpRight,
  PhoneCall
} from "lucide-react";
import { motion } from "framer-motion";

export default function SolutionsPage() {
  const pathways = [
    {
      title: "For Organisations & Enterprises",
      tagline: "Culture, Execution Rigor & Operational Synergy",
      desc: "Transform your institutional DNA. We align organizational values, break down departmental silos, instill disciplined execution cadences, and engineer high-performance workplace cultures.",
      href: "/solutions/organisations",
      icon: Building2,
      image: "/images/team-conference.jpg",
      metrics: "700+ Corporate Clients Served",
      interventions: [
        "Culture & Mindset Transformation",
        "Execution Excellence & Silo-Breaking",
        "Managerial Skill Development (MSD)",
        "KRA & KPI Governance Frameworks",
        "Diversity, Equity & Inclusion (DE&I)",
        "POSH Statutory Mastery & Ethics"
      ]
    },
    {
      title: "For C-Suite & Executive Leaders",
      tagline: "Strategic Clarity, Vision & Executive Presence",
      desc: "Leadership is the ultimate constraint on enterprise velocity. We partner with CEOs, board members, and business unit heads to sharpen decision intelligence, elevate executive stamina, and inspire transformational change.",
      href: "/solutions/leaders",
      icon: User,
      image: "/images/Personal.jpg",
      metrics: "1-on-1 CXO Breakthroughs",
      interventions: [
        "Transformational Leadership Masterclass",
        "VMOSA Strategic Blueprinting Retreat",
        "Executive Coaching & Decision Resilience",
        "High-Stakes Strategic Negotiation",
        "Boardroom Influence & Storytelling",
        "High-Performance Team Leadership"
      ]
    },
    {
      title: "For Specialized Industry Verticals",
      tagline: "Safety (BBS), Plant OEE & Retail Network Mastery",
      desc: "Deep, industry-specific operational frameworks developed through decades of field partnerships with India's largest energy corporations, manufacturing giants, and distribution ecosystems.",
      href: "/programs",
      icon: Fuel,
      image: "/images/group-2.jpg",
      metrics: "BBS Certified Across Oil Refineries",
      interventions: [
        "Behaviour Based Safety (BBS) & Zero Harm",
        "LPG Retail & Distributor Excellence",
        "Skyrocketing Plant Productivity (OEE)",
        "Forecourt Customer Service Mastery",
        "Triple Your Growth Sales Academy",
        "Field-Level Safety & Hazard Mitigation"
      ]
    },
    {
      title: "For Educational Institutions",
      tagline: "Academic Governance, FDP & Student Employability",
      desc: "An educational institution cannot exceed the quality of its educators. We bring world-class human capability development to university deans, professors, and graduating student cohorts.",
      href: "/solutions/institutions",
      icon: GraduationCap,
      image: "/images/group-pic.jpg",
      metrics: "300+ Engineering & B-Schools Served",
      interventions: [
        "Faculty Development Programs (FDP)",
        "Academic Leadership for Deans & Principals",
        "Campus-to-Corporate Employability Bootcamps",
        "Student Life Skills & Confidence Building",
        "Institutional NAAC/NBA Accreditation Culture",
        "Industry-Academia Collaboration Alignment"
      ]
    }
  ];

  return (
    <main className="flex min-h-screen flex-col bg-brand-foundation text-brand-ivory selection:bg-brand-accent selection:text-brand-foundation">
      <Navbar />

      {/* Cinematic Hero */}
      <section className="relative pt-40 pb-32 bg-brand-foundation overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Focus.jpg"
            alt="DhruvSatya Solutions Architecture"
            fill
            className="object-cover opacity-20 mix-blend-luminosity scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-foundation/90 via-brand-foundation/80 to-brand-foundation z-10" />
        </div>

        <div className="container mx-auto px-6 md:px-12 max-w-6xl text-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gray-300">
              Tailored Transformation Pathways
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tight leading-[1.05] mb-8"
          >
            Capabilities That Drive <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-sky-300 to-brand-accent">
              Measurable Business Results.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-10"
          >
            Choose the transformation pathway aligned to your exact organizational context. From enterprise-wide cultural shifts to executive advisory and specialized industrial safety.
          </motion.p>
        </div>
      </section>

      {/* Pathways Grid */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-brand-foundation via-[#0c121e] to-brand-foundation relative">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pathways.map((path, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative rounded-3xl overflow-hidden bg-white/[0.03] border border-white/10 hover:border-brand-accent/50 p-8 md:p-10 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:-translate-y-2"
              >
                {/* Background Image Ambient Glow */}
                <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
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
                    <div className="w-14 h-14 rounded-2xl bg-brand-accent/15 border border-brand-accent/30 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-foundation transition-all duration-300">
                      <path.icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-accent px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20">
                      {path.metrics}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">
                    {path.title}
                  </h3>
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand-accent/90 mb-4">
                    {path.tagline}
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed mb-8">
                    {path.desc}
                  </p>

                  <div className="bg-white/[0.03] p-5 rounded-2xl border border-white/5 mb-8">
                    <div className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3 flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
                      Signature Interventions
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {path.interventions.map((item, iIdx) => (
                        <li key={iIdx} className="text-xs text-gray-300 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="relative z-10 pt-4 border-t border-white/5 flex items-center justify-between">
                  <Link
                    href={path.href}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-accent hover:text-white transition-colors"
                  >
                    Deep-Dive Pathway
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    Request Briefing
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The 4-Stage Intervention Architecture */}
      <section className="py-24 px-6 md:px-12 bg-brand-foundation border-t border-white/10 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-brand-accent mb-3 block">
              The Consulting Methodology
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Our 4-Stage Intervention Architecture
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              We never deploy off-the-shelf slide decks. Every engagement follows a disciplined, consultative lifecycle engineered to guarantee measurable behavioral adoption and ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {[
              {
                step: "01",
                title: "Diagnose & Uncover",
                subtitle: "Culture & Performance Audits",
                desc: "We conduct executive interviews, shopfloor gemba audits, and 360-degree diagnostic surveys to identify latent operational bottlenecks and cultural inertia."
              },
              {
                step: "02",
                title: "Architect & Tailor",
                subtitle: "Custom Framework Design",
                desc: "We co-create the curriculum with your senior leadership, integrating your company's actual strategic OKRs, internal vocabulary, and industry case scenarios."
              },
              {
                step: "03",
                title: "Deliver & Inspire",
                subtitle: "Experiential Immersion",
                desc: "Led personally by Soumitra Chatterjee and senior master facilitators through high-energy simulations, psychological role-plays, and deep introspection."
              },
              {
                step: "04",
                title: "Embed & Measure",
                subtitle: "Kirkpatrick ROI Governance",
                desc: "Post-intervention 30-60-90 day review cadences, manager toolkits, and measurable KPI tracking to ensure permanent behavioral transfer."
              }
            ].map((st, sIdx) => (
              <div
                key={sIdx}
                className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 relative hover:border-brand-accent/50 transition-all duration-300 group"
              >
                <div className="text-3xl font-display font-black text-brand-accent/30 group-hover:text-brand-accent transition-colors mb-4">
                  {st.step}
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-1">
                  {st.title}
                </h3>
                <div className="text-xs font-semibold text-brand-accent mb-4">
                  {st.subtitle}
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Verticals We Specialize In */}
      <section className="py-20 px-6 md:px-12 bg-white/[0.02] border-t border-white/10">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-gray-400 mb-2 block">
              Cross-Sector Proven Pedigree
            </span>
            <h3 className="text-2xl md:text-4xl font-display font-bold text-white">
              Sectors Transformed Over 25 Years
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {[
              { name: "Oil & Gas / Energy", role: "IOCL, HPCL, BPCL" },
              { name: "Airlines & Aviation", role: "Crew & Service Leaders" },
              { name: "Banking & BFSI", role: "National & Private Banks" },
              { name: "Heavy Manufacturing", role: "Steel, Cement & Plant OEE" },
              { name: "Insurance Sector", role: "LIC & Leading Insurers" },
              { name: "Higher Education", role: "300+ Engineering & MBA" }
            ].map((sec, secIdx) => (
              <div key={secIdx} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="text-sm font-bold text-white mb-1">{sec.name}</div>
                <div className="text-[11px] text-gray-400">{sec.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-r from-brand-foundation via-[#161f33] to-brand-foundation border-t border-white/10 text-center">
        <div className="container mx-auto max-w-4xl">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-brand-accent mb-4 block">
            Begin the Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-8">
            Schedule a Diagnostic Consultation
          </h2>
          <p className="text-base md:text-xl text-gray-300 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            Discuss your organizational imperatives directly with our leadership advisory team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-brand-accent text-brand-foundation font-display font-black text-sm uppercase tracking-widest rounded-full hover:bg-white hover:text-brand-foundation transition-all shadow-xl shadow-brand-accent/20"
            >
              Start a Conversation
            </Link>
            <Link
              href="/programs"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white font-display font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white/10 transition-all"
            >
              View All 25 Programs
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
