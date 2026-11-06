"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Users,
  Target,
  Layers,
  Sparkles,
  CheckCircle2,
  PhoneCall,
  ArrowUpRight,
  BarChart3,
  Building2
} from "lucide-react";

export default function OrganisationsPage() {
  const offerings = [
    {
      id: "culture",
      icon: Users,
      title: "Culture Transformation & Mindset Alignment",
      tagline: "Organisations change when people change. Transformation begins within.",
      desc: "Transform the invisible operating system of your company. We dismantle disengagement, align collective values with corporate vision, and foster deep psychological ownership across every tier of the workforce.",
      image: "/images/team-conference.jpg",
      deliverables: [
        "Diagnostic Culture & Engagement Audits",
        "Values Alignment & Leadership Modeling",
        "Employee Mindset Shift & Resilience Building",
        "Breaking Interdepartmental Silos & Friction"
      ],
      relatedProgram: "Culture & Team Synergy Interventions"
    },
    {
      id: "execution",
      icon: Target,
      title: "Execution Excellence & Accountability",
      tagline: "Drive Strategy into Action. Deliver Results Consistently.",
      desc: "Most corporate strategies fail not in formulation, but in day-to-day execution. We instill the rigorous operational rhythms, KRA/KPI governance scorecards, and non-negotiable peer accountability required to hit enterprise milestones on schedule.",
      image: "/images/Meeting1.jpg",
      deliverables: [
        "Cascading Corporate OKRs into Daily Sprints",
        "Weekly Execution Cadence & Bottleneck Removal",
        "Objective KRA & KPI Tracking Frameworks",
        "Time Mastery & Deep Work Focus for Teams"
      ],
      relatedProgram: "Execution Excellence & Managerial Skill Development"
    },
    {
      id: "managerial",
      icon: Layers,
      title: "Managerial Capability Pipeline (MSD)",
      tagline: "Build Confident Managers. Engaged Teams. Stronger Results.",
      desc: "Individual contributors promoted to management often burn out due to lack of coaching and delegation skills. Our Managerial Skill Development (MSD) curriculum builds world-class people managers who plan, delegate, coach, and govern performance.",
      image: "/images/Meeting.jpg",
      deliverables: [
        "Transitioning from Doer to Empowering Leader",
        "The Art of Delegation Without Quality Loss",
        "Conducting Courageous Performance Reviews",
        "Giving Feedback that Inspires Continuous Growth"
      ],
      relatedProgram: "Managerial Skill Development (MSD)"
    },
    {
      id: "sales",
      icon: TrendingUp,
      title: "Commercial & Sales Acceleration",
      tagline: "Triple Your Business Growth by Building a World-Class Salesforce.",
      desc: "Shift your sales organization from transactional commodity pitching into elite consultative advisory. We instill scientific pipeline qualification, diagnostic discovery questioning, value framing, and high-integrity deal closure.",
      image: "/images/Motivate.jpg",
      deliverables: [
        "Consultative Value Selling & Needs Discovery",
        "Defending Margins & Overcoming Price Resistance",
        "Win-Win Negotiation Frameworks (BATNA/ZOPA)",
        "Sales Academy Continuous Capability Certification"
      ],
      relatedProgram: "Triple Your Business Growth Sales Academy"
    },
    {
      id: "safety",
      icon: ShieldCheck,
      title: "Behaviour Based Safety (BBS) & Zero Harm",
      tagline: "Safety isn't just a priority; it's our daily behavior.",
      desc: "Field-tested across India's largest oil refineries, petrochemical terminals, and manufacturing plants (IOCL, HPCL, BPCL). We transform safety from mechanical compliance into voluntary, peer-driven behavioral vigilance to achieve zero incidents.",
      image: "/images/group-2.jpg",
      deliverables: [
        "Observation & Peer Intervention Protocols",
        "Hazard Spotting & Risk Normalization Elimination",
        "Supervisor Safety Leadership & Safe Pledges",
        "Near-Miss Reporting & Positive Reinforcement"
      ],
      relatedProgram: "Behaviour Based Safety (BBS)"
    },
    {
      id: "compliance",
      icon: Building2,
      title: "Workplace Inclusion & Statutory Governance",
      tagline: "Dignity, Equity, and Zero Tolerance Safeguards.",
      desc: "Move beyond tick-the-box legal compliance to build an authentic culture of mutual respect. Comprehensive statutory coverage under the POSH Act, specialized IC committee inquiries, and actionable Diversity, Equity & Inclusion (DE&I) practices.",
      image: "/images/DSC_9993.JPG",
      deliverables: [
        "POSH Mandatory Awareness for All Employees",
        "Specialized Legal Inquiry Clinics for IC Members",
        "Unconscious Bias & Cross-Generational Synergy",
        "Psychological Safety & Harassment-Free Protocols"
      ],
      relatedProgram: "POSH & DE&I Interventions"
    }
  ];

  return (
    <main className="flex min-h-screen flex-col bg-white text-slate-800 selection:bg-brand-accent selection:text-white">
      <Navbar />

      {/* Cinematic Hero */}
      <section className="relative pt-40 pb-32 bg-gradient-to-b from-[#F0F7FF] via-[#FFFFFF] to-[#FFFDF7] text-slate-900 overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Meeting.jpg"
            alt="Enterprise Transformation"
            fill
            className="object-cover opacity-10 mix-blend-multiply scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F0F7FF]/90 via-white/80 to-[#FFFDF7] z-10" />
        </div>

        <div className="container mx-auto px-6 md:px-12 max-w-6xl text-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-sky-200 shadow-xs mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gray-300">
              Enterprise Capability Solutions
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tight leading-[1.05] mb-8"
          >
            Transforming the DNA of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-amber-200 to-brand-accent">
              Modern Enterprises.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-12"
          >
            Organisations don&apos;t execute strategies; people do. We partner with forward-thinking enterprises to build the culture, capability, and execution discipline required for sustainable growth.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold uppercase tracking-wider text-gray-300">
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">700+ Enterprises Partnered</span>
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">25+ Industrial Sectors</span>
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">Kirkpatrick ROI Model</span>
          </div>
        </div>
      </section>

      {/* Offerings Showcase */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-brand-foundation via-[#0c121e] to-brand-foundation relative">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-brand-accent mb-3 block">
              Core Intervention Domains
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">
              Strategic Areas of Organizational Impact
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Every intervention is engineered to dismantle operational inertia and embed self-sustaining behavioral habits.
            </p>
          </div>

          <div className="space-y-16">
            {offerings.map((item, idx) => (
              <motion.div
                key={item.id}
                id={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col ${
                  idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 hover:border-brand-accent/40 transition-all duration-500`}
              >
                {/* Visual Half */}
                <div className="w-full lg:w-1/2 relative h-72 sm:h-96 rounded-2xl overflow-hidden group">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-foundation via-brand-foundation/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-brand-accent text-brand-foundation flex items-center justify-center shadow-lg">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-white bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                      Enterprise Impact
                    </span>
                  </div>
                </div>

                {/* Content Half */}
                <div className="w-full lg:w-1/2">
                  <div className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-2">
                    {item.tagline}
                  </div>
                  <h3 className="text-2xl md:text-4xl font-display font-bold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-8">
                    {item.desc}
                  </p>

                  <div className="mb-8">
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                      Core Framework Deliverables
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {item.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="text-xs text-gray-300 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <Link
                      href="/programs"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-accent text-brand-foundation text-xs font-black uppercase tracking-wider hover:bg-white transition-all shadow-lg"
                    >
                      View Related Programs
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-wider hover:bg-white/10 transition-all"
                    >
                      Inquire for Your Team
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Consultation CTA */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-r from-brand-foundation via-[#161f33] to-brand-foundation border-t border-white/10 text-center">
        <div className="container mx-auto max-w-4xl">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-brand-accent mb-4 block">
            Co-Create Your Capability Roadmap
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Equip Your Organization to Outperform
          </h2>
          <p className="text-gray-300 text-base md:text-xl font-light mb-10 max-w-2xl mx-auto">
            Schedule an executive discovery session to align your corporate objectives with our tailored intervention blueprints.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-brand-accent text-brand-foundation font-display font-black text-sm uppercase tracking-widest rounded-full hover:bg-white hover:text-brand-foundation transition-all shadow-xl shadow-brand-accent/20"
            >
              Request Enterprise Consultation
            </Link>
            <Link
              href="/solutions"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white font-display font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white/10 transition-all"
            >
              Explore Other Pathways
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
