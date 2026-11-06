"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const titleWords = "Transformation Begins Within.".split(" ");

  return (
    <section className="relative min-h-[100svh] pb-24 md:pb-0 w-full flex items-center justify-center overflow-hidden bg-brand-foundation text-brand-ivory pt-20">
      {/* Photographic Background with Navy Blend */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 w-full h-full animate-slow-zoom origin-center">
          <Image
            src="/images/audience.jpg"
            alt="DhruvSatya Audience"
            fill
            sizes="100vw"
            quality={65}
            className="object-cover opacity-35 mix-blend-luminosity grayscale"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-foundation via-brand-foundation/80 to-brand-foundation/60 z-0" />
      </div>

      {/* Atmospheric Ambient Glows Inspired Directly by the Logo (Azure Cyan + Satya Gold) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Azure Blue Orb (Left) */}
        <div className="absolute top-[10%] -left-[15%] w-[55%] h-[55%] rounded-full bg-brand-cyan/20 blur-[150px] mix-blend-screen" />
        {/* Satya Gold Orb (Right) */}
        <div className="absolute bottom-[5%] -right-[15%] w-[55%] h-[55%] rounded-full bg-brand-accent/20 blur-[150px] mix-blend-screen" />
      </div>

      {/* Subtle Grid and Hairline Accent */}
      <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.035]" />
      <div className="absolute top-1/4 right-[8%] w-[1px] h-32 bg-gradient-to-b from-brand-cyan/50 to-transparent hidden lg:block" />
      <div className="absolute bottom-1/3 left-[6%] w-24 h-[1px] bg-gradient-to-r from-brand-accent/50 to-transparent hidden lg:block" />

      <div className="container mx-auto px-6 md:px-12 relative z-20 flex flex-col items-center text-center">
        {/* Brand Pill with Logo Azure and Gold Echo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <div className="inline-flex items-center px-4 py-2 border border-brand-cyan/35 rounded-xl md:rounded-full bg-brand-cyan/10 backdrop-blur-md shadow-[0_0_20px_rgba(0,149,219,0.15)] group hover:border-brand-accent/60 transition-colors">
            <span className="w-2 h-2 rounded-full bg-brand-accent mr-2.5 animate-pulse flex-shrink-0 shadow-[0_0_8px_rgba(248,166,18,0.8)]" />
            <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-gray-200 leading-snug">
              DhruvSatya Center for Personal Transformation
            </span>
            <span className="hidden sm:inline-block w-[1px] h-3 bg-white/20 mx-2.5" />
            <span className="hidden sm:inline-block text-[10px] font-bold tracking-widest uppercase text-brand-accent">
              25 Years
            </span>
          </div>
        </motion.div>

        {/* Dynamic Typography with Logo Gradient Echo */}
        <h1 className="text-[11vw] sm:text-5xl md:text-7xl lg:text-[8rem] font-display font-black leading-[0.9] tracking-tighter mb-8 md:mb-10 overflow-y-hidden flex flex-wrap justify-center w-full px-2">
          {titleWords.map((word, index) => {
            const isTransformation = word.toLowerCase().includes("transformation");
            const isWithin = word.toLowerCase().includes("within");

            return (
              <motion.span
                key={index}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 1,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className={`inline-block mr-3 md:mr-8 last:mr-0 pb-2 ${
                  isTransformation
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-sky-300 to-brand-accent drop-shadow-[0_0_30px_rgba(0,149,219,0.25)]"
                    : isWithin
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-yellow-300 drop-shadow-[0_0_30px_rgba(248,166,18,0.35)]"
                    : "text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400"
                }`}
              >
                {word}
              </motion.span>
            );
          })}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-2xl text-gray-300 max-w-3xl mb-14 font-light leading-relaxed drop-shadow-sm"
        >
          We are the catalyst for profound human and institutional evolution. We build world-class leaders, transform organizational cultures, and turn latent capability into unstoppable execution.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto px-4 sm:px-0"
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-5 bg-brand-accent text-brand-foundation font-display font-black text-xs md:text-sm tracking-wider uppercase overflow-hidden rounded-full shadow-[0_0_25px_rgba(248,166,18,0.3)] hover:shadow-[0_0_40px_rgba(248,166,18,0.5)] transition-all duration-300"
          >
            <span className="absolute inset-0 w-full h-full bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            <span className="relative flex items-center font-black">
              START A CONVERSATION
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <Link
            href="/solutions"
            className="group inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-5 bg-brand-cyan/10 border border-brand-cyan/35 text-white font-display font-bold text-xs md:text-sm tracking-wider uppercase hover:bg-brand-cyan/20 hover:border-brand-cyan hover:text-brand-cyan rounded-full transition-all duration-300 backdrop-blur-md"
          >
            EXPLORE PATHWAYS
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator with Logo Dual Gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center pointer-events-none"
      >
        <span className="text-[9px] uppercase tracking-[0.25em] font-semibold text-gray-400 mb-3 rotate-90">
          Scroll
        </span>
        <div className="w-[1.5px] h-12 bg-gradient-to-b from-brand-cyan via-brand-accent to-transparent" />
      </motion.div>
    </section>
  );
}
