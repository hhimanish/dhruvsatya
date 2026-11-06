"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mountain,
  BrainCircuit,
  Compass,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
  UserCheck,
  ShieldAlert,
  Award
} from "lucide-react";

export default function LeadersPage() {
  const leadershipPillars = [
    {
      id: "transformational",
      icon: Mountain,
      title: "Transformational Leadership Masterclass",
      tagline: "Move Beyond Management. Lead with Vision & Purpose.",
      desc: "Management is about coping with complexity; leadership is about orchestrating change. This signature immersion challenges senior leaders to dismantle personal blind spots, expand strategic vision, and inspire high-discretionary performance across their teams.",
      image: "/images/founder-portrait1.png",
      duration: "2-Day Executive Immersion",
      pillars: [
        "Self-Awareness & Paradigm Breakthroughs",
        "Strategic Influence & Authentic Followers",
        "Leading with Agility Through Volatility (VUCA)",
        "Establishing an Uncompromising Culture of Integrity"
      ]
    },
    {
      id: "executive-coaching",
      icon: BrainCircuit,
      title: "1-on-1 CXO Executive Coaching",
      tagline: "High-Confidentiality Advisory for Enterprise Leaders.",
      desc: "At the summit of enterprise hierarchy, executive isolation and high-consequence decision fatigue are real threats. Led personally by Soumitra Chatterjee, this engagement provides a sounding board for CXOs navigating boardroom diplomacy, strategic dilemmas, and inner equilibrium.",
      image: "/images/founder-potrait.jpg",
      duration: "6 - 12 Month Engagement",
      pillars: [
        "Unbiased Sounding Board for Strategic Choices",
        "Stress De-escalation & Emotional Equanimity",
        "Boardroom Influence & Stakeholder Consensus",
        "Personal Energy & Work-Life Harmony"
      ]
    },
    {
      id: "vmosa",
      icon: Compass,
      title: "The VMOSA Strategic Framework",
      tagline: "Vision, Mission, Objectives, Strategies & Action Plans.",
      desc: "When leadership teams pull in divergent directions, enterprise momentum dies. The VMOSA strategic retreat brings executive teams into absolute alignment, translating high-level vision into quantifiable scorecards and accountable roadmaps.",
      image: "/images/Meeting2.jpg",
      duration: "1 - 2 Day Strategic Retreat",
      pillars: [
        "Unifying Executive Purpose & North Star Metrics",
        "Formulating Winning Market Differentiation Strategies",
        "Building Cascading Balanced Scorecards",
        "Establishing Monthly Milestone Governance Cadences"
      ]
    },
    {
      id: "influence",
      icon: Award,
      title: "Executive Presence & Boardroom Persuasion",
      tagline: "Command Attention. Inspire Conviction. Drive Decision-Making.",
      desc: "Great ideas fail if they cannot be communicated with compelling authority. This workshop coaches senior leaders on vocal power, somatic grounding, narrative architecture, and handling hostile inquiries with poise.",
      image: "/images/Personal.jpg",
      duration: "1-Day Intensive Coaching",
      pillars: [
        "Mastering Executive Poise & Gravitas",
        "Narrative Frameworks that Win Board Approval",
        "Defusing Hostile Questions with Grace",
        "Visual & Non-Verbal Authority Mastery"
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
            src="/images/Personal.jpg"
            alt="Leadership Transformation"
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
              Executive Evolution
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tight leading-[1.05] mb-8"
          >
            Leadership is Not a Title. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-amber-200 to-brand-accent">
              It is Inner Clarity in Action.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-12"
          >
            We partner with founders, CXOs, and enterprise leaders to cultivate the emotional resilience, strategic conviction, and executive presence required to lead through unprecedented complexity.
          </motion.p>
        </div>
      </section>

      {/* Leadership Solutions Grid */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-brand-foundation via-[#0c121e] to-brand-foundation relative">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-brand-accent mb-3 block">
              Executive Interventions
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Pathways to Executive Mastery
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Designed for senior leaders who bear the weight of enterprise decisions and require deep, confidential, and transformative capability elevation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadershipPillars.map((pillar, index) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative rounded-3xl overflow-hidden bg-white/[0.03] border border-white/10 hover:border-brand-accent/50 p-8 md:p-10 flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-brand-accent/15 border border-brand-accent/30 flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-brand-foundation transition-all duration-300">
                      <pillar.icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-brand-accent px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20">
                      {pillar.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand-accent/90 mb-4">
                    {pillar.tagline}
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed mb-8">
                    {pillar.desc}
                  </p>

                  <div className="bg-white/[0.03] p-5 rounded-2xl border border-white/5 mb-8">
                    <div className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3 flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-brand-accent" />
                      Executive Focus Areas
                    </div>
                    <ul className="space-y-2">
                      {pillar.pillars.map((item, pIdx) => (
                        <li key={pIdx} className="text-xs text-gray-300 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <Link
                    href={`/contact?advisory=${encodeURIComponent(pillar.title)}`}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-accent hover:text-white transition-colors"
                  >
                    Request Executive Briefing
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Conversation CTA */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-r from-brand-foundation via-[#161f33] to-brand-foundation border-t border-white/10 text-center">
        <div className="container mx-auto max-w-4xl">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-brand-accent mb-4 block">
            Direct CXO Engagement
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Confidential Dialogue with Soumitra Chatterjee
          </h2>
          <p className="text-gray-300 text-base md:text-xl font-light mb-10 max-w-2xl mx-auto">
            Schedule a private executive discussion to explore how our leadership advisory and coaching can unlock your next breakthrough.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-brand-accent text-brand-foundation font-display font-black text-sm uppercase tracking-widest rounded-full hover:bg-white hover:text-brand-foundation transition-all shadow-xl shadow-brand-accent/20"
            >
              Initiate Confidential Dialogue
            </Link>
            <Link
              href="/founder"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white font-display font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white/10 transition-all"
            >
              Meet the Founder
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
