"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
  enableTilt?: boolean;
}

export function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(252, 163, 17, 0.18)",
  enableTilt = false,
  ...props
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth tilt springs
  const tiltX = useSpring(useTransform(mouseY, [-200, 200], [5, -5]), {
    stiffness: 300,
    damping: 30
  });
  const tiltY = useSpring(useTransform(mouseX, [-200, 200], [-5, 5]), {
    stiffness: 300,
    damping: 30
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x - rect.width / 2);
    mouseY.set(y - rect.height / 2);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={
        enableTilt
          ? {
              rotateX: tiltX,
              rotateY: tiltY,
              transformStyle: "preserve-3d"
            }
          : undefined
      }
      className={`group relative overflow-hidden rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl transition-colors duration-500 hover:border-brand-accent/40 ${className}`}
      {...(props as any)}
    >
      {/* Dynamic Cursor Spotlight Layer */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: isHovered
            ? `radial-gradient(650px circle at ${mouseX.get() + (cardRef.current?.clientWidth || 0) / 2}px ${
                mouseY.get() + (cardRef.current?.clientHeight || 0) / 2
              }px, ${spotlightColor}, transparent 45%)`
            : "none"
        }}
      />

      {/* Subtle Glowing Hairline Border */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-3xl border border-brand-accent/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          maskImage: isHovered
            ? `radial-gradient(350px circle at ${mouseX.get() + (cardRef.current?.clientWidth || 0) / 2}px ${
                mouseY.get() + (cardRef.current?.clientHeight || 0) / 2
              }px, black 30%, transparent)`
            : "none",
          WebkitMaskImage: isHovered
            ? `radial-gradient(350px circle at ${mouseX.get() + (cardRef.current?.clientWidth || 0) / 2}px ${
                mouseY.get() + (cardRef.current?.clientHeight || 0) / 2
              }px, black 30%, transparent)`
            : "none"
        }}
      />

      {/* Children content */}
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}
