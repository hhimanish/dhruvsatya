"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const philosophies = [
  {
    id: "contribute",
    title: "CONTRIBUTE.",
    description: "Achievement without contribution is incomplete. Make the difference in your ecosystem.",
  },
  {
    id: "grounded",
    title: "STAY GROUNDED.",
    description: "Keep your ears to the ground. The closer you are to reality, the better you understand what needs to change.",
  },
  {
    id: "challenge",
    title: "CHALLENGE YOURSELF.",
    description: "Surround yourself with people who are better than you. Even if you lose to them, your game improves.",
  },
  {
    id: "breakthrough",
    title: "BREAK THROUGH.",
    description: "Life is working for you, not against you. Every challenge is an opportunity to break boundaries.",
  },
];

export function PhilosophySection() {
  const [active, setActive] = useState(philosophies[0].id);

  return (
    <section className="py-20 md:py-32 bg-slate-50/70 text-slate-900 relative overflow-hidden border-t border-slate-200/60">
      
      {/* Background massive text watermarks */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full overflow-hidden opacity-[0.03] pointer-events-none flex flex-col">
        <span className="text-[20rem] font-display font-black leading-none whitespace-nowrap -ml-20 text-slate-900">TRUTH</span>
        <span className="text-[20rem] font-display font-black leading-none whitespace-nowrap ml-32 text-slate-900">ACTION</span>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          <div className="w-full lg:w-5/12 pt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-bold text-brand-cyan tracking-[0.3em] uppercase mb-4 flex items-center">
                <span className="w-8 h-[2px] bg-gradient-to-r from-brand-cyan to-brand-accent mr-3"></span>
                The DhruvSatya Way
              </h2>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-slate-900 mb-8 md:mb-12 leading-[1.15]">
                Philosophy that drives <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-amber-500">execution.</span>
              </h3>
            </motion.div>

            <div className="space-y-3">
              {philosophies.map((phil) => (
                <div 
                  key={phil.id}
                  className="cursor-pointer group relative overflow-hidden rounded-xl"
                  onClick={() => setActive(phil.id)}
                  onMouseEnter={() => setActive(phil.id)}
                >
                  <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                    active === phil.id ? 'bg-white shadow-md border-l-4 border-brand-accent' : 'bg-transparent hover:bg-white/60'
                  }`} />
                  <div className="px-6 py-4 flex items-center relative z-10">
                    <span className={`w-2.5 h-2.5 rounded-full mr-4 transition-all duration-300 ${
                      active === phil.id ? 'bg-brand-accent shadow-[0_0_8px_rgba(248,166,18,0.8)] scale-100' : 'bg-slate-300 scale-75'
                    }`} />
                    <h4 className={`text-xl sm:text-2xl font-display font-bold tracking-tight transition-colors duration-300 ${
                      active === phil.id ? "text-slate-900" : "text-slate-500 group-hover:text-slate-800"
                    }`}>
                      {phil.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-7/12 relative">
            {/* Dynamic Joyful Card */}
            <div className="relative w-full aspect-square md:aspect-[4/3] bg-white border border-slate-200/90 rounded-3xl p-10 md:p-16 flex flex-col justify-center overflow-hidden shadow-xl">
              
              <div className="absolute inset-0 bg-gradient-to-br from-sky-50/50 via-white to-amber-50/50" />

              {/* Internal joyful glow */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-100/60 blur-[80px] rounded-full pointer-events-none" />

              <div className="absolute top-8 left-8 text-7xl text-brand-cyan/20 font-serif leading-none font-black">"</div>
              
              <div className="relative z-10 min-h-[150px] flex items-center">
                <AnimatePresence mode="wait">
                  {philosophies.map((phil) => (
                    active === phil.id && (
                      <motion.div
                        key={phil.id}
                        initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <p className="text-2xl sm:text-3xl md:text-5xl text-slate-900 font-display font-medium leading-[1.2] tracking-tight">
                          {phil.description}
                        </p>
                      </motion.div>
                    )
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Decorative geometrical accent */}
            <div className="absolute -bottom-4 -right-4 w-28 h-28 border-2 border-brand-accent/40 rounded-3xl z-0 hidden md:block" />
          </div>
          
        </div>
      </div>
    </section>
  );
}
