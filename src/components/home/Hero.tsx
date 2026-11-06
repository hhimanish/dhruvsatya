"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const titleWords = "Transformation Begins Within.".split(" ");

  return (
    <section className="relative min-h-[100svh] pb-24 md:pb-0 w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#F0F7FF] via-[#FFFFFF] to-[#FFFDF7] text-slate-800 pt-28">
      {/* Subtle Luminous Background Pattern */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-15 pointer-events-none">
        <div className="absolute inset-0 w-full h-full animate-slow-zoom origin-center">
          <Image
            src="/images/audience.jpg"
            alt="DhruvSatya Audience"
            fill
            sizes="100vw"
            quality={65}
            className="object-cover mix-blend-multiply"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#F0F7FF]/90 via-white/85 to-[#FFFDF7]/95" />
      </div>

      {/* Radiant Joyful Ambient Glows (Azure Cyan + Sunshine Gold) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft Azure Blue Glow (Top Left) */}
        <div className="absolute top-[5%] -left-[10%] w-[60%] h-[60%] rounded-full bg-sky-200/50 blur-[130px]" />
        {/* Soft Sunshine Gold Glow (Bottom Right) */}
        <div className="absolute bottom-[5%] -right-[10%] w-[60%] h-[60%] rounded-full bg-amber-200/50 blur-[130px]" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02]" />

      <div className="container mx-auto px-6 md:px-12 relative z-20 flex flex-col items-center text-center">
        {/* Joyful Brand Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <div className="inline-flex items-center px-4 py-2 border border-sky-200/80 rounded-full bg-white/95 shadow-sm hover:shadow-md hover:border-brand-accent/60 transition-all">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-accent mr-2.5 animate-pulse flex-shrink-0 shadow-[0_0_10px_rgba(248,166,18,0.8)]" />
            <span className="text-[11px] md:text-xs font-bold tracking-[0.18em] uppercase text-slate-700 leading-snug">
              Center for Personal Transformation
            </span>
            <span className="hidden sm:inline-block w-[1px] h-3.5 bg-slate-200 mx-2.5" />
            <span className="hidden sm:inline-block text-[11px] font-black tracking-widest uppercase text-brand-cyan">
              25+ Years of Impact
            </span>
          </div>
        </motion.div>

        {/* Dynamic Joyful Typography */}
        <h1 className="text-[11vw] sm:text-5xl md:text-7xl lg:text-[7.5rem] font-display font-black leading-[0.95] tracking-tight mb-8 md:mb-10 overflow-y-hidden flex flex-wrap justify-center w-full px-2">
          {titleWords.map((word, index) => {
            const isTransformation = word.toLowerCase().includes("transformation");
            const isWithin = word.toLowerCase().includes("within");

            return (
              <motion.span
                key={index}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className={`inline-block mr-3 md:mr-7 last:mr-0 pb-2 ${
                  isTransformation
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-sky-600 to-blue-600"
                    : isWithin
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-amber-500 to-amber-600"
                    : "text-slate-900"
                }`}
              >
                {word}
              </motion.span>
            );
          })}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-2xl text-slate-600 max-w-3xl mb-12 font-normal leading-relaxed"
        >
          We are the catalyst for profound human and institutional evolution. We inspire leaders, cultivate vibrant organizational cultures, and turn latent capability into joyful, unstoppable execution.
        </motion.p>

        {/* Joyful Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto px-4 sm:px-0"
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-5 bg-gradient-to-r from-brand-accent to-amber-500 text-white font-display font-black text-xs md:text-sm tracking-wider uppercase overflow-hidden rounded-full shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/40 hover:-translate-y-0.5 transition-all duration-300"
          >
            <span className="relative flex items-center font-black">
              START A CONVERSATION
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <Link
            href="/solutions"
            className="group inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-5 bg-white border-2 border-brand-cyan text-brand-cyan font-display font-bold text-xs md:text-sm tracking-wider uppercase hover:bg-brand-cyan hover:text-white rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            EXPLORE SOLUTIONS
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
