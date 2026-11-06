"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import {
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Users,
  Target,
  Mountain,
  BrainCircuit,
  Compass,
  Factory,
  GraduationCap,
  Flame,
  BookOpen,
  Award,
  CheckCircle2,
  Clock,
  Search,
  Sparkles,
  ArrowUpRight,
  Check,
  Building2,
  BarChart3,
  Layers,
  ChevronDown,
  PhoneCall
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";

interface Program {
  id: string;
  title: string;
  tagline: string;
  category: string;
  duration: string;
  targetAudience: string;
  description: string;
  keyFeatures: string[];
  outcomes: string[];
  format: string;
  evaluationMetric: string;
}

const CATEGORIES = [
  "All Interventions",
  "Leadership & Strategic Governance",
  "Execution, Management & Team Synergy",
  "Sales, Commercial & Retail Transformation",
  "Behavior-Based Safety (BBS) & Operations",
  "Workplace Culture, Communication & Wellness",
  "Higher Education & Academic Excellence"
] as const;

// Curated Category Imagery from authentic workshop archives
const categoryImages: Record<string, string> = {
  "Leadership & Strategic Governance": "/images/founder-portrait1.png",
  "Execution, Management & Team Synergy": "/images/Meeting1.jpg",
  "Sales, Commercial & Retail Transformation": "/images/Motivate.jpg",
  "Behavior-Based Safety (BBS) & Operations": "/images/group-2.jpg",
  "Workplace Culture, Communication & Wellness": "/images/DSC_9993.JPG",
  "Higher Education & Academic Excellence": "/images/group-pic.jpg"
};

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Leadership & Strategic Governance":
      return Mountain;
    case "Execution, Management & Team Synergy":
      return Target;
    case "Sales, Commercial & Retail Transformation":
      return TrendingUp;
    case "Behavior-Based Safety (BBS) & Operations":
      return ShieldCheck;
    case "Workplace Culture, Communication & Wellness":
      return Users;
    case "Higher Education & Academic Excellence":
      return GraduationCap;
    default:
      return Sparkles;
  }
};

export function ProgramsClient({ programs }: { programs: Program[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Interventions");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeAudience, setActiveAudience] = useState<string>("All");
  const [expandedProgramId, setExpandedProgramId] = useState<string | null>(null);

  // Audience filters
  const audienceFilters = ["All", "C-Suite & Executives", "Managers & Leads", "Sales & Frontline", "All Employees", "Academic & Faculty"];

  const filteredPrograms = useMemo(() => {
    return programs.filter((p) => {
      // Category match
      const categoryMatch = selectedCategory === "All Interventions" || p.category === selectedCategory;

      // Search match
      const searchLower = searchQuery.toLowerCase().trim();
      const searchMatch =
        !searchLower ||
        p.title.toLowerCase().includes(searchLower) ||
        p.tagline.toLowerCase().includes(searchLower) ||
        p.description.toLowerCase().includes(searchLower) ||
        p.category.toLowerCase().includes(searchLower) ||
        p.targetAudience.toLowerCase().includes(searchLower);

      // Audience match
      let audienceMatch = true;
      if (activeAudience === "C-Suite & Executives") {
        audienceMatch = /c-suite|executive|cxo|director|board|head/i.test(p.targetAudience);
      } else if (activeAudience === "Managers & Leads") {
        audienceMatch = /manager|lead|supervisor|hod/i.test(p.targetAudience);
      } else if (activeAudience === "Sales & Frontline") {
        audienceMatch = /sales|account|retail|distributor|frontline/i.test(p.targetAudience);
      } else if (activeAudience === "All Employees") {
        audienceMatch = /all employees|workforce|professionals|teams/i.test(p.targetAudience);
      } else if (activeAudience === "Academic & Faculty") {
        audienceMatch = /faculty|professor|dean|student|academic/i.test(p.targetAudience);
      }

      return categoryMatch && searchMatch && audienceMatch;
    });
  }, [programs, selectedCategory, searchQuery, activeAudience]);

  return (
    <main className="flex min-h-screen flex-col bg-white text-slate-800 selection:bg-brand-accent selection:text-white">
      <Navbar />

      {/* Cinematic Executive Hero */}
      <section className="relative pt-40 pb-28 md:pt-48 md:pb-36 bg-gradient-to-b from-[#F0F7FF] via-[#FFFFFF] to-[#FFFDF7] text-slate-900 overflow-hidden border-b border-slate-100">
        {/* Ambient Photographic Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/achieving-world-class.jpg"
            alt="Dhruvsatya Capability Interventions"
            fill
            className="object-cover object-center opacity-10 mix-blend-multiply scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F0F7FF]/90 via-white/80 to-[#FFFDF7] z-10" />
        </div>

        <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-sky-200 shadow-xs mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gray-300">
              The Enterprise Learning & Capability Architecture
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tight leading-[1.05] mb-8"
          >
            Interventions Engineered for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-sky-300 to-brand-accent">
              Permanent Transformation.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-12"
          >
            Over 25 years of proven consulting and workshop excellence across 700+ corporate clients, 300+ academic institutions, and every major industrial vertical in India.
          </motion.p>

          {/* Quick Metrics Ribbon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto bg-white/90 shadow-sm p-6 rounded-3xl border border-slate-200"
          >
            <div>
              <div className="text-3xl md:text-4xl font-display font-black text-brand-cyan">25+</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest mt-1 font-bold">Years of Legacy</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-black text-brand-accent">700+</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest mt-1 font-bold">Corporate Interventions</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-black text-brand-cyan">300+</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest mt-1 font-bold">Academic Institutions</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-display font-black text-brand-accent">100k+</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest mt-1 font-bold">Leaders Transformed</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Control Bar: Search & Filtering Matrix */}
      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-xl border-y border-slate-200/80 py-5 px-4 md:px-12 shadow-sm">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search interventions, skills, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-slate-800 placeholder-slate-400 text-sm focus:outline-none focus:border-brand-accent/80 focus:ring-1 focus:ring-brand-accent/80 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Audience Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none">
              <span className="text-xs uppercase tracking-wider text-slate-600 font-bold whitespace-nowrap mr-2 flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-brand-accent" />
                Audience:
              </span>
              {audienceFilters.map((aud) => (
                <button
                  key={aud}
                  onClick={() => setActiveAudience(aud)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                    activeAudience === aud
                      ? "bg-brand-accent text-brand-foundation font-bold shadow-md shadow-brand-accent/20"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200/80 border border-slate-200/60"
                  }`}
                >
                  {aud}
                </button>
              ))}
            </div>
          </div>

          {/* Domain Category Tabs */}
          <div className="flex gap-2 overflow-x-auto mt-6 pt-4 border-t border-slate-100 pb-1 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-brand-accent to-amber-500 text-white shadow-md shadow-amber-500/25 font-bold"
                    : "bg-slate-50 text-slate-600 hover:bg-white hover:text-brand-cyan border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Program Catalog Grid */}
      <section className="py-20 px-4 md:px-12 bg-gradient-to-b from-brand-foundation via-[#0c121e] to-brand-foundation">
        <div className="container mx-auto max-w-7xl">
          {/* Header count & context */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4 pb-6 border-b border-white/10">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900">
                {selectedCategory === "All Interventions" ? "Complete Capability Interventions" : selectedCategory}
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Showing {filteredPrograms.length} customized enterprise learning frameworks
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-brand-accent hover:text-brand-foundation border border-white/15 text-xs font-bold tracking-wider uppercase transition-all duration-300"
            >
              <PhoneCall className="w-4 h-4" />
              Request Custom Intervention
            </Link>
          </div>

          {filteredPrograms.length === 0 ? (
            <div className="text-center py-24 bg-white/[0.02] rounded-3xl border border-white/5 p-8">
              <Sparkles className="w-12 h-12 text-brand-accent mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-display font-bold text-white mb-2">No matching interventions found</h3>
              <p className="text-gray-400 text-sm max-w-md mx-auto mb-6">
                We design fully bespoke programs tailored to your unique organizational goals and operational context.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All Interventions");
                  setSearchQuery("");
                  setActiveAudience("All");
                }}
                className="px-6 py-2.5 bg-brand-accent text-brand-foundation font-bold text-xs uppercase tracking-wider rounded-full hover:bg-white transition-all"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPrograms.map((program, idx) => {
                const CategoryIcon = getCategoryIcon(program.category);
                const isExpanded = expandedProgramId === program.id;

                return (
                  <motion.div
                    key={program.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (idx % 6) * 0.08 }}
                    className={`group relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-500 border ${
                      isExpanded
                        ? "bg-white/[0.08] border-brand-accent shadow-[0_20px_50px_rgba(252,163,17,0.15)] ring-1 ring-brand-accent"
                        : "bg-white/[0.03] border-white/10 hover:border-brand-accent/40 hover:bg-white/[0.05] hover:shadow-2xl hover:-translate-y-1.5"
                    }`}
                  >
                    {/* Top Pill & Category */}
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-6">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-accent/15 text-brand-accent border border-brand-accent/25">
                          <CategoryIcon className="w-3 h-3" />
                          {program.duration}
                        </span>
                        <span className="text-[11px] text-gray-400 font-medium tracking-tight">
                          {program.format.split("/")[0]}
                        </span>
                      </div>

                      <h3 className="text-2xl font-display font-bold text-slate-900 mb-2 group-hover:text-brand-cyan transition-colors">
                        {program.title}
                      </h3>
                      <p className="text-xs font-semibold text-brand-accent/90 tracking-wide uppercase mb-4">
                        {program.tagline}
                      </p>

                      <p className="text-sm text-gray-300 leading-relaxed line-clamp-3 mb-6">
                        {program.description}
                      </p>

                      {/* Target Audience Pill */}
                      <div className="mb-6 p-3 rounded-2xl bg-white/[0.03] border border-white/5">
                        <div className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">
                          Demography & Target Cohort
                        </div>
                        <div className="text-xs text-gray-200 line-clamp-2">
                          {program.targetAudience}
                        </div>
                      </div>

                      {/* Expandable Deep-Dive Drawer */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-6 pt-4 border-t border-white/10 overflow-hidden mb-6"
                          >
                            {/* Key Interventions */}
                            <div>
                              <div className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-3 flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-brand-accent" />
                                Core Curriculum & Pillars
                              </div>
                              <ul className="space-y-2">
                                {program.keyFeatures.map((feat, fIdx) => (
                                  <li key={fIdx} className="text-xs text-gray-300 flex items-start gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-1.5 flex-shrink-0" />
                                    <span>{feat}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Measurable ROI Outcomes */}
                            <div>
                              <div className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-3 flex items-center gap-2">
                                <BarChart3 className="w-4 h-4 text-brand-accent" />
                                Measurable Business Outcomes
                              </div>
                              <ul className="space-y-2">
                                {program.outcomes.map((outc, oIdx) => (
                                  <li key={oIdx} className="text-xs text-gray-300 flex items-start gap-2">
                                    <Check className="w-3.5 h-3.5 text-brand-accent mt-0.5 flex-shrink-0" />
                                    <span>{outc}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Kirkpatrick Evaluation */}
                            <div className="p-3 rounded-xl bg-brand-accent/10 border border-brand-accent/20">
                              <div className="text-[10px] font-bold uppercase tracking-wider text-brand-accent mb-1">
                                Rigorous Evaluation Model
                              </div>
                              <div className="text-xs text-gray-200 font-medium">
                                {program.evaluationMetric}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-4 mt-auto">
                      <button
                        onClick={() => setExpandedProgramId(isExpanded ? null : program.id)}
                        className="text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-white flex items-center gap-1.5 transition-colors"
                      >
                        {isExpanded ? "Collapse" : "Explore Curriculum"}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
                      </button>

                      <Link
                        href={`/contact?program=${encodeURIComponent(program.title)}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-accent text-brand-foundation text-xs font-black uppercase tracking-wider hover:bg-white hover:text-brand-foundation transition-all shadow-md group/btn"
                      >
                        Inquire
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* The Kirkpatrick 4-Level Evaluation & Delivery Excellence Architecture */}
      <section className="py-24 px-6 md:px-12 bg-slate-50/80 border-t border-slate-200/60 relative overflow-hidden text-slate-900">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-brand-accent mb-3 block">
              The Science of Transformation
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">
              Our 4-Level Kirkpatrick ROI Framework
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              We never treat training as an episodic event. Every Dhruvsatya intervention is engineered with measurable transfer-of-learning metrics, linking classroom engagement to bottom-line enterprise impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                level: "Level 1",
                title: "Reaction & Engagement",
                metric: "Net Promoter & Engagement Index",
                desc: "Immediate evaluation of relevance, psychological resonance, trainer mastery, and participant buy-in.",
                highlight: "98.4% Average Workshop Rating"
              },
              {
                level: "Level 2",
                title: "Learning & Competency",
                metric: "Pre & Post Diagnostic Mastery",
                desc: "Objective testing of framework comprehension, tactical problem-solving, and tool application.",
                highlight: "100% Concept Retention Audits"
              },
              {
                level: "Level 3",
                title: "Behavior Change",
                metric: "30-60-90 Day Field Application",
                desc: "On-the-job peer reviews, observation cycles, and supervisory validation of sustained habit change.",
                highlight: "Measurable Workplace Shifts"
              },
              {
                level: "Level 4",
                title: "Business Results & ROI",
                metric: "Enterprise Target Realization",
                desc: "Quantifiable correlation to sales velocity, zero-harm safety records, OEE plant gains, and staff retention.",
                highlight: "Documented Financial ROI"
              }
            ].map((card, i) => (
              <div
                key={i}
                className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 relative hover:border-brand-accent/50 transition-all duration-300"
              >
                <div className="text-xs font-black uppercase tracking-widest text-brand-accent mb-2">
                  {card.level}
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900 mb-3">
                  {card.title}
                </h3>
                <div className="text-xs font-semibold text-gray-400 mb-4 pb-4 border-b border-white/5">
                  Focus: {card.metric}
                </div>
                <p className="text-xs text-gray-300 leading-relaxed mb-6">
                  {card.desc}
                </p>
                <div className="inline-block px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-[11px] font-bold text-brand-accent">
                  {card.highlight}
                </div>
              </div>
            ))}
          </div>

          {/* Flexible Delivery Modes */}
          <div className="mt-20 p-10 md:p-14 rounded-3xl bg-white/[0.02] border border-white/10 max-w-5xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-slate-900 text-center mb-4">
              Flexible Deployment & Delivery Modes
            </h3>
            <p className="text-sm text-gray-300 text-center max-w-2xl mx-auto mb-10">
              Designed to meet your workforce wherever they operate — from boardroom suites in Mumbai to remote plant shopfloors and regional retail networks.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {[
                { title: "Classroom Immersions", desc: "Interactive, experiential 1 to 2-day on-site interventions with live case simulations." },
                { title: "Blended Learning", desc: "Pre-session digital diagnostics combined with live workshops and 90-day coaching cadences." },
                { title: "Shopfloor & Field Labs", desc: "Hands-on Gemba walks, BBS observations, and retail forecourt coaching in regional vernacular." },
                { title: "Executive 1-on-1 Advisory", desc: "Confidential CXO retreats, shadow coaching, and board alignment interventions." }
              ].map((mode, mIdx) => (
                <div key={mIdx} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                  <h4 className="text-base font-bold text-slate-900 mb-2">{mode.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{mode.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Customization CTA */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-r from-brand-foundation via-[#161f33] to-brand-foundation border-t border-white/10 text-center relative overflow-hidden">
        <div className="container mx-auto max-w-4xl relative z-10">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-brand-accent mb-4 block">
            Partner With India's Foremost T&D Pioneer
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-slate-900 mb-8">
            Ready to Build a High-Performance Culture?
          </h2>
          <p className="text-base md:text-xl text-gray-300 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            Contact our advisory team to diagnose your current organizational challenges and co-create a tailored capability roadmap.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-brand-accent text-brand-foundation font-display font-black text-sm uppercase tracking-widest rounded-full hover:bg-white hover:text-brand-foundation transition-all shadow-xl shadow-brand-accent/20"
            >
              Start an Enterprise Conversation
            </Link>
            <Link
              href="/solutions"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white font-display font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white/10 transition-all"
            >
              Explore Solutions Pathways
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
