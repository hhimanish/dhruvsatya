"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import { CinematicMesh } from "@/components/ui/CinematicMesh";

export function Hero() {
  const titleWords = "Transformation Begins Within.".split(" ");

  return (
    <section className="relative min-h-[100svh] pb-24 md:pb-0 w-full flex items-center justify-center overflow-hidden bg-brand-foundation text-brand-ivory pt-20">
      {/* Background Photographic Foundation */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 w-full h-full animate-slow-zoom origin-center">
          <Image
            src="/images/audience.jpg"
            alt="DhruvSatya Transformation Leadership"
            fill
            sizes="100vw"
            quality={60}
            className="object-cover opacity-25 mix-blend-luminosity grayscale"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-foundation via-brand-foundation/80 to-brand-foundation/60 z-10" />
      </div>

      {/* Cinematic Ambient Mesh & Grain (GetLayers.ai Signature) */}
      <CinematicMesh intensity="medium" showNoise={true} className="z-10" />

      {/* Subtle Horizontal Laser / Scanning Horizon Light */}
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-accent/25 to-transparent pointer-events-none z-10" />

      <div className="container mx-auto px-6 md:px-12 relative z-20 flex flex-col items-center text-center max-w-5xl">
        {/* Holographic Status Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <div className="inline-flex items-center px-4 py-2 border border-white/15 rounded-xl md:rounded-full bg-white/[0.04] backdrop-blur-xl shadow-[0_0_25px_rgba(252,163,17,0.15)] group hover:border-brand-accent/60 transition-all duration-300">
            <span className="relative flex h-2 w-2 mr-2.5 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent" />
            </span>
            <span className="text-[10px] md:text-xs font-semibold tracking-[0.22em] uppercase text-gray-200 leading-snug">
              DhruvSatya Center for Personal Transformation
            </span>
            <span className="hidden sm:inline-block w-[1px] h-3 bg-white/20 mx-2" />
            <span className="hidden sm:inline-block text-[10px] font-bold tracking-widest uppercase text-brand-accent">
              25 Years
            </span>
          </div>
        </motion.div>

        {/* Cinematic Headline with Dynamic Viewport Scaling */}
        <h1 className="text-[11vw] sm:text-5xl md:text-7xl lg:text-[8rem] font-display font-black leading-[0.9] tracking-tighter mb-8 md:mb-10 overflow-y-hidden flex flex-wrap justify-center w-full px-2">
          {titleWords.map((word, index) => {
            const isHighlight = word.toLowerCase().includes("within");
            return (
              <motion.span
                key={index}
                initial={{ y: "110%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: index * 0.12,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className={`inline-block mr-3 md:mr-7 last:mr-0 pb-2 ${
                  isHighlight
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-amber-200 to-brand-accent drop-shadow-[0_0_35px_rgba(252,163,17,0.35)]"
                    : "text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-100 to-gray-400"
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
          transition={{ duration: 0.9, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-2xl text-gray-300 max-w-3xl mb-12 md:mb-14 font-light leading-relaxed drop-shadow-sm"
        >
          We are the catalyst for profound human and institutional evolution. We build world-class leaders, instill execution discipline, and turn latent capability into permanent enterprise impact.
        </motion.p>

        {/* Luminous High-Tech CTA Cluster */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto px-4 sm:px-0"
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-5 rounded-full bg-brand-accent text-brand-foundation font-display font-black text-xs md:text-sm tracking-widest uppercase overflow-hidden shadow-[0_0_30px_rgba(252,163,17,0.3)] hover:shadow-[0_0_50px_rgba(252,163,17,0.5)] transition-all duration-500"
          >
            {/* Shimmer sweep effect */}
            <span className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/50 to-transparent group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out transform -skew-x-12" />
            <span className="relative flex items-center font-bold">
              START A CONVERSATION
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>

          <Link
            href="/solutions"
            className="group inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-5 rounded-full bg-white/[0.04] border border-white/20 text-white font-display font-bold text-xs md:text-sm tracking-widest uppercase hover:bg-white/10 hover:border-brand-accent/60 transition-all duration-300 backdrop-blur-md"
          >
            EXPLORE PATHWAYS
          </Link>
        </motion.div>
      </div>

      {/* Cinematic Ambient Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center pointer-events-none z-20"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] font-semibold text-gray-400 mb-3 rotate-90">
          Scroll
        </span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-brand-accent via-brand-accent/50 to-transparent" />
      </motion.div>
    </section>
  );
}
