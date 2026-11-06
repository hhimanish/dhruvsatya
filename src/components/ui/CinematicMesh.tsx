"use client";

import React from "react";
import { motion } from "framer-motion";

interface CinematicMeshProps {
  intensity?: "subtle" | "medium" | "vibrant";
  showNoise?: boolean;
  className?: string;
}

export function CinematicMesh({
  intensity = "medium",
  showNoise = true,
  className = ""
}: CinematicMeshProps) {
  const opacityMap = {
    subtle: "opacity-30",
    medium: "opacity-50",
    vibrant: "opacity-75"
  };

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {/* Primary Amber-Gold Glow Orb */}
      <motion.div
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -50, 40, 0],
          scale: [1, 1.15, 0.9, 1]
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className={`absolute -top-32 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-brand-accent/25 via-amber-500/15 to-transparent blur-[140px] ${opacityMap[intensity]}`}
      />

      {/* Secondary Deep Navy / Sapphire Atmospheric Glow Orb */}
      <motion.div
        animate={{
          x: [0, -70, 50, 0],
          y: [0, 60, -30, 0],
          scale: [1, 0.9, 1.2, 1]
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className={`absolute top-1/3 -right-32 w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-blue-600/20 via-indigo-950/30 to-transparent blur-[160px] ${opacityMap[intensity]}`}
      />

      {/* Tertiary Warm Ochre / Rose Accent Light */}
      <motion.div
        animate={{
          x: [0, 40, -60, 0],
          y: [0, -30, 50, 0],
          scale: [1, 1.2, 0.95, 1]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
        className={`absolute -bottom-48 left-1/3 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-amber-600/20 via-brand-accent/10 to-transparent blur-[150px] ${opacityMap[intensity]}`}
      />

      {/* Micro Floating Particle Dots */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />

      {/* Film Grain / Noise Overlay Texture */}
      {showNoise && (
        <div
          className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />
      )}
    </div>
  );
}
