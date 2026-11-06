"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Library,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
  Award,
  Users2,
  School
} from "lucide-react";

export default function InstitutionsPage() {
  const institutionalPillars = [
    {
      id: "fdp",
      icon: BookOpen,
      title: "Faculty Development Programs (FDP)",
      tagline: "Empower Educators. Transform Classrooms. Inspire Minds.",
      desc: "The quality of an academic institution cannot exceed the quality of its teachers. Having partnered with over 300+ educational institutions across India, our FDP interventions equip professors and lecturers with modern experiential pedagogies, empathetic student mentorship, and commanding classroom presence.",
      image: "/images/team-con.jpg",
      cohort: "Engineering, MBA & Degree College Faculty",
      deliverables: [
        "Transitioning from Rote Lectures to Case-Based Engagement",
        "Empathetic Mentorship for Gen Z Students",
        "Vocal Dynamics, Body Language & Classroom Poise",
        "Aligning Research & Pedagogy with NAAC/NBA Standards"
      ]
    },
    {
      id: "leadership",
      icon: GraduationCap,
      title: "Academic Leadership & Governance",
      tagline: "Visionary Institutional Building for Deans & Principals.",
      desc: "Designed specifically for educational trustees, directors, principals, and heads of departments (HODs). We help academic administrators transition from bureaucratic firefighting into strategic institution builders who cultivate research excellence and faculty pride.",
      image: "/images/group-pic.jpg",
      cohort: "Trustees, Directors, Principals & HODs",
      deliverables: [
        "Strategic Roadmapping for Institutional Differentiation",
        "Breaking Inter-Departmental Academic Silos",
        "Industry-Academia Strategic Research Partnerships",
        "Faculty Performance Governance & Talent Retention"
      ]
    },
    {
      id: "employability",
      icon: Award,
      title: "Campus-to-Corporate Employability Bootcamps",
      tagline: "Bridge Academic Theory with High-Stakes Corporate Execution.",
      desc: "Equipping graduating students with the psychological resilience, interview acumen, and professional polish required to crack competitive corporate recruitment drives and thrive during their first 90 days in enterprise roles.",
      image: "/images/audience.jpg",
      cohort: "Final & Pre-Final Year Engineering & MBA Students",
      deliverables: [
        "Aptitude, Group Discussion (GD) & Mock HR Interviews",
        "Executive Business Communication & Corporate Etiquette",
        "Emotional Resilience & Stress Mastery during Placements",
        "Problem-Solving Mindset & Professional Ownership"
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
            src="/images/group-pic.jpg"
            alt="Educational Institutions Transformation"
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
              Higher Education & Academic Interventions
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-black tracking-tight leading-[1.05] mb-8"
          >
            Elevating the Standards of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-amber-200 to-brand-accent">
              Academic Excellence.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed mb-12"
          >
            With over 300+ universities, engineering colleges, and business schools transformed across India, we bring world-class corporate capability methodologies to higher education.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold uppercase tracking-wider text-gray-300">
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">300+ Colleges & Universities</span>
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">10,000+ Educators Empowered</span>
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10">Campus Placement Acceleration</span>
          </div>
        </div>
      </section>

      {/* Solutions Showcase */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-brand-foundation via-[#0c121e] to-brand-foundation relative">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-brand-accent mb-3 block">
              Academic Intervention Catalog
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              Empowering Educators & Students Alike
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Interventions custom-tailored to improve teaching impact, institutional accreditations, and graduate placement conversion rates.
            </p>
          </div>

          <div className="space-y-16">
            {institutionalPillars.map((item, idx) => (
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
                      {item.cohort}
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
                      Core Methodological Deliverables
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
                      href={`/contact?institution=${encodeURIComponent(item.title)}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-accent text-brand-foundation text-xs font-black uppercase tracking-wider hover:bg-white transition-all shadow-lg"
                    >
                      Book for Your Institution
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Partnership CTA */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-r from-brand-foundation via-[#161f33] to-brand-foundation border-t border-white/10 text-center">
        <div className="container mx-auto max-w-4xl">
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-brand-accent mb-4 block">
            Academic Empowerment
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Partner With India&apos;s Leading Transformation Center
          </h2>
          <p className="text-gray-300 text-base md:text-xl font-light mb-10 max-w-2xl mx-auto">
            Discuss your upcoming academic semester, FDP requirements, or campus placement preparation with our educational leadership team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-brand-accent text-brand-foundation font-display font-black text-sm uppercase tracking-widest rounded-full hover:bg-white hover:text-brand-foundation transition-all shadow-xl shadow-brand-accent/20"
            >
              Inquire for College or University
            </Link>
            <Link
              href="/programs"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white font-display font-bold text-sm uppercase tracking-widest rounded-full hover:bg-white/10 transition-all"
            >
              Browse Complete Interventions
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
