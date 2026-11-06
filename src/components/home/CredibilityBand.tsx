"use client";

import { motion, animate, useReducedMotion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const stats = [
  { id: 1, value: 25, label: "Years of Experience", suffix: "+" },
  { id: 2, value: 600, label: "Organisations Served", suffix: "+" },
  { id: 3, value: 300, label: "Institutions Transformed", suffix: "+" },
  { id: 4, value: 600000, label: "People Transformed", suffix: "+" },
];

function Counter({ value, inView }: { value: number; inView: boolean }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (inView && nodeRef.current && !prefersReducedMotion) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(latest) {
          if (nodeRef.current) {
            nodeRef.current.textContent = new Intl.NumberFormat('en-IN').format(Math.round(latest));
          }
        },
      });
      return () => controls.stop();
    }
  }, [value, inView, prefersReducedMotion]);

  // SSR renders the final value so it's not "0" in the HTML
  return <span ref={nodeRef} className="tabular-nums inline-block">{new Intl.NumberFormat('en-IN').format(value)}</span>;
}

export function CredibilityBand() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2 }
    );
    
    const el = document.getElementById("credibility-band");
    if (el) observer.observe(el);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="credibility-band" className="py-16 md:py-20 bg-gradient-to-r from-sky-50/70 via-white to-amber-50/70 border-y border-slate-200/70 relative z-10 overflow-hidden">
      {/* Soft Luminous Accents */}
      <div className="absolute -top-24 left-1/4 w-72 h-72 bg-sky-200/40 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-72 h-72 bg-amber-200/40 rounded-full blur-[90px] pointer-events-none" />
      {/* Ambient background glows */}
      <div className="absolute -top-24 left-1/4 w-72 h-72 bg-brand-cyan/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-72 h-72 bg-brand-accent/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center text-center px-4 pt-8 sm:pt-0"
            >
              <div className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-black text-slate-900 mb-3 tracking-tight flex items-center justify-center">
                <Counter value={stat.value} inView={inView} />
                <span className={index % 2 === 0 ? "text-brand-accent" : "text-brand-cyan"}>{stat.suffix}</span>
              </div>
              <div className="text-xs md:text-sm font-bold text-slate-600 tracking-[0.18em] uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
