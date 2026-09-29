"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, Zap, Trophy, Target, Mountain, Compass, BrainCircuit, TrendingUp, Factory, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Icon mapping based on program ID
const getIcon = (id: string) => {
  switch (id) {
    case "awaken-your-giant-within": return Zap;
    case "achieving-world-class": return Trophy;
    case "catch-your-dreams": return Target;
    case "transformational-leadership": return Mountain;
    case "vmosa-workshop": return Compass;
    case "high-performance-leadership": return BrainCircuit;
    case "triple-your-business-growth": return TrendingUp;
    case "skyrocketing-plant-productivity": return Factory;
    default: return Target;
  }
};

// Category Image Mapping
const categoryImages: Record<string, string> = {
  "Motivation and Personal Transformation": "/images/DSC_9993.JPG",
  "Leadership development and Managerial Effectiveness": "/images/founder-portrait1.png",
  "Sales and Marketing": "/images/Conf.jpg",
  "Manufacturing Excellence": "/images/Group Pic.jpg"
};

export function ProgramsClient({ programs }: { programs: any[] }) {
  // Group programs by category
  const categories = programs.reduce((acc: any, program: any) => {
    if (!acc[program.category]) {
      acc[program.category] = [];
    }
    acc[program.category].push(program);
    return acc;
  }, {});

  return (
    <main className="flex min-h-screen flex-col bg-brand-ivory/30">
      <Navbar />
      
      {/* Cinematic Hero */}
      <section className="relative pt-40 pb-32 bg-brand-foundation text-white overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 35, ease: "linear", repeat: Infinity }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src="/images/achieving-world-class.jpg"
            alt="DhruvSatya Programs Inspiration"
            fill
            className="object-cover object-top opacity-30 mix-blend-luminosity grayscale"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-foundation via-brand-foundation/80 to-brand-foundation/40 z-0" />
        
        <div className="container mx-auto px-6 md:px-12 text-center max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8">
              <span className="inline-block bg-brand-accent text-brand-foundation px-6 py-2 transform -skew-x-6 shadow-[0_0_20px_rgba(252,163,17,0.3)]">
                The Core Methodologies.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
              A comprehensive library of our interventions designed to challenge perspective, break barriers, and build lasting capability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sticky Categorized Layouts */}
      <section className="bg-white">
        {Object.entries(categories).map(([category, items]: [string, any], idx: number) => (
          <div key={category} className={`relative border-t border-gray-100 ${idx % 2 === 0 ? 'bg-white' : 'bg-brand-ivory/20'}`}>
            <div className="container mx-auto max-w-7xl px-6 py-24">
              <div className="flex flex-col lg:flex-row gap-16">
                
                {/* Sticky Left Column: Category Image & Title */}
                <div className="w-full lg:w-5/12">
                  <div className="sticky top-32 space-y-8">
                    <h2 className="text-sm font-semibold text-brand-accent tracking-widest uppercase flex items-center">
                      <span className="w-8 h-[2px] bg-brand-accent mr-4" />
                      Domain of Impact
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-brand-foundation leading-tight">
                      {category}
                    </h3>
                    
                    <motion.div 
                      className="relative w-full h-64 md:h-[450px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] mt-8 group cursor-pointer"
                      whileHover={{ scale: 1.03, y: -8 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Image 
                        src={categoryImages[category] || "/images/Inspire.jpg"}
                        alt={category}
                        fill
                        className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                      />
                      
                      {/* Vibrant Overlay instead of dull gray */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-brand-foundation/30 via-transparent to-brand-accent/10 mix-blend-multiply opacity-50 group-hover:opacity-0 transition-opacity duration-700" />
                      
                      {/* Premium Light Shimmer / Sweep Effect */}
                      <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-[150%] transition-transform duration-[1.5s] ease-in-out transform -skew-x-12" />
                      
                      {/* Elegant Glass Border Glow */}
                      <div className="absolute inset-0 rounded-3xl border border-white/20 group-hover:border-brand-accent/60 transition-colors duration-500 shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] group-hover:shadow-[inset_0_0_40px_rgba(252,163,17,0.3)]" />
                    </motion.div>
                  </div>
                </div>

                {/* Right Column: Scrolling Cards */}
                <div className="w-full lg:w-7/12 space-y-8">
                  {items.map((program: any, i: number) => {
                    const Icon = getIcon(program.id);
                    return (
                      <motion.div 
                        key={program.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        className="group bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 relative overflow-hidden"
                      >
                        {/* Hover Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-ivory/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="relative z-10 flex flex-col h-full">
                          <div className="flex items-start justify-between mb-8">
                            <div className="w-16 h-16 bg-brand-ivory rounded-2xl flex items-center justify-center group-hover:bg-brand-accent transition-colors duration-500 shadow-inner">
                              <Icon className="w-8 h-8 text-brand-accent group-hover:text-brand-foundation transition-colors duration-500" />
                            </div>
                            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-brand-accent group-hover:bg-brand-accent transition-all duration-300">
                              <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-brand-foundation transition-colors duration-300" />
                            </div>
                          </div>
                          
                          <h4 className="text-3xl font-display font-bold text-brand-foundation mb-4 group-hover:text-brand-accent transition-colors duration-300">
                            {program.title}
                          </h4>
                          <p className="text-gray-600 text-lg leading-relaxed mb-8 flex-grow">
                            {program.description}
                          </p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                            <div>
                              <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Target Audience</span>
                              <span className="text-sm font-medium text-brand-foundation">{program.forWhom}</span>
                            </div>
                            <div>
                              <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Expected Outcome</span>
                              <span className="text-sm font-medium text-brand-foundation">{program.outcome}</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-32 bg-brand-foundation text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/Audiance.jpg"
            alt="CTA Background"
            fill
            className="object-cover opacity-10 mix-blend-luminosity grayscale"
          />
        </div>
        <div className="container mx-auto max-w-3xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Not sure which program is right for you?
          </h2>
          <p className="text-xl text-gray-400 mb-10 font-light">
            Our experts can help assess your needs and design a custom intervention tailored specifically for your organization's challenges.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-10 py-5 bg-brand-accent text-brand-foundation font-bold rounded-full hover:bg-white transition-colors text-lg"
          >
            LET'S TALK
            <ArrowRight className="w-6 h-6 ml-3" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
