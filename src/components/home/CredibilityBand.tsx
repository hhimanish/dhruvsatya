"use client";

import { motion, animate } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const stats = [
  { id: 1, value: 25, label: "Years of Experience", suffix: "+" },
  { id: 2, value: 600, label: "Organizations Served", suffix: "+" },
  { id: 3, value: 300, label: "Institutions Transformed", suffix: "+" },
  { id: 4, value: 6, label: "People Transformed", suffix: "L+" },
];

function Counter({ value, inView }: { value: number; inView: boolean }) {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (inView && nodeRef.current) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate(latest) {
          if (nodeRef.current) {
            nodeRef.current.textContent = Math.round(latest).toString();
          }
        },
      });
      return () => controls.stop();
    }
  }, [value, inView]);

  return <span ref={nodeRef}>0</span>;
}

export function CredibilityBand() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // Simple intersection observer to trigger animation
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
    <section id="credibility-band" className="py-20 bg-brand-foundation border-b border-white/5 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-4 divide-x-0 md:divide-x divide-white/10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <div className="text-5xl md:text-7xl font-display font-black text-white mb-4 tracking-tighter">
                <Counter value={stat.value} inView={inView} />
                <span className="text-brand-accent">{stat.suffix}</span>
              </div>
              <div className="text-xs md:text-sm font-bold text-gray-400 tracking-[0.2em] uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
