"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Image from "next/image";

export function Hero() {
  const titleWords = "Transformation Begins Within.".split(" ");

  return (
    <section className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-brand-foundation text-brand-ivory pt-20">
      
      {/* Photographic Background with Navy Blend */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 w-full h-full animate-slow-zoom origin-center">
          <Image 
            src="/images/audience.jpg" 
            alt="DhruvSatya Audience" 
            fill 
            sizes="100vw"
            quality={60}
            className="object-cover opacity-50 mix-blend-luminosity"
            priority
          />
        </div>
        <motion.div 
          animate={{
            backgroundColor: [
              "rgba(10, 17, 40, 0.75)", // Deep Base Navy
              "rgba(55, 15, 80, 0.75)", // Vibrant Royal Purple
              "rgba(0, 60, 75, 0.75)",  // Vibrant Deep Cyan
              "rgba(60, 20, 10, 0.75)", // Warm Mahogany/Amber
              "rgba(10, 17, 40, 0.75)"  // Back to Navy
            ]
          }}
          transition={{
            duration: 25,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="absolute inset-0 mix-blend-multiply z-0 pointer-events-none" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-foundation via-transparent to-transparent" />
      </div>

      {/* Dynamic Background Noise / Gradient */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-accent blur-[150px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-600 blur-[150px] mix-blend-screen opacity-50" />
      </div>

      {/* Grid Pattern and Yellow Accents */}
      <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5" />
      
      {/* Geometric Yellow Highlights */}
      <div className="absolute top-1/4 right-[10%] w-[1px] h-32 bg-brand-accent opacity-50 hidden lg:block" />
      <div className="absolute bottom-1/3 left-[5%] w-16 h-[1px] bg-brand-accent opacity-50 hidden lg:block" />

      <div className="container mx-auto px-6 md:px-12 relative z-20 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <div className="inline-flex items-center px-4 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-brand-accent mr-2 animate-pulse" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-300">
              DhruvSatya Center for Personal Transformation
            </span>
          </div>
        </motion.div>

        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[8rem] font-display font-black leading-[0.9] tracking-tighter mb-8 md:mb-10 overflow-hidden flex flex-wrap justify-center">
          {titleWords.map((word, index) => (
            <motion.span
              key={index}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ 
                duration: 1, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="inline-block mr-3 md:mr-8 last:mr-0 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 pb-2"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-2xl text-gray-400 max-w-3xl mb-16 font-light leading-relaxed"
        >
          We are the catalyst for profound, systemic change. We build world-class leaders, transform organisational cultures, and turn latent capability into unstoppable execution.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto px-4 sm:px-0"
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center px-6 py-4 md:px-10 md:py-5 bg-brand-accent text-brand-foundation font-bold text-xs md:text-sm tracking-wider uppercase overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            <span className="relative flex items-center">
              START A CONVERSATION
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 md:ml-3 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <Link
            href="/method"
            className="group inline-flex items-center justify-center px-6 py-4 md:px-10 md:py-5 bg-transparent border border-white/20 text-white font-bold text-xs md:text-sm tracking-wider uppercase hover:bg-white/5 transition-colors"
          >
            EXPLORE THE METHOD
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator (Hidden on mobile to prevent dock collision) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="hidden md:flex absolute bottom-10 left-1/2 transform -translate-x-1/2 flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-widest text-gray-500 mb-4 rotate-90">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-accent to-transparent" />
      </motion.div>

    </section>
  );
}
