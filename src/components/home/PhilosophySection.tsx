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
    <section className="py-32 bg-brand-foundation text-brand-ivory relative overflow-hidden">
      
      {/* Background massive text watermarks */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full overflow-hidden opacity-[0.03] pointer-events-none flex flex-col pointer-events-none">
        <span className="text-[20rem] font-display font-black leading-none whitespace-nowrap -ml-20">TRUTH</span>
        <span className="text-[20rem] font-display font-black leading-none whitespace-nowrap ml-32">ACTION</span>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32 items-start">
          
          <div className="w-full lg:w-5/12 pt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-semibold text-brand-accent tracking-[0.3em] uppercase mb-6 flex items-center">
                <span className="w-8 h-[1px] bg-brand-accent mr-4"></span>
                The DhruvSatya Way
              </h2>
              <h3 className="text-3xl sm:text-3xl sm:text-4xl md:text-6xl font-display font-bold text-white mb-16 leading-[1.1]">
                Philosophy that drives <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-yellow-200">execution.</span>
              </h3>
            </motion.div>

            <div className="space-y-4">
              {philosophies.map((phil) => (
                <div 
                  key={phil.id}
                  className="cursor-pointer group relative overflow-hidden rounded-lg"
                  onClick={() => setActive(phil.id)}
                  onMouseEnter={() => setActive(phil.id)}
                >
                  <div className={`absolute inset-0 rounded-xl transition-all duration-500 ease-out ${active === phil.id ? 'bg-white/10 backdrop-blur-md border border-white/20 shadow-xl' : 'bg-transparent'}`} />
                  <div className={`px-6 py-5 flex items-center relative z-10`}>
                    <span className={`w-2 h-2 rounded-full mr-4 transition-all duration-300 ${active === phil.id ? 'bg-brand-accent shadow-[0_0_10px_rgba(252,163,17,0.8)] scale-100' : 'bg-white/20 scale-50'}`} />
                    <h4 className={`text-2xl md:text-3xl font-display font-bold tracking-tight transition-colors duration-300 ${active === phil.id ? "text-brand-accent drop-shadow-md" : "text-white/60 group-hover:text-white"}`}>
                      {phil.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-7/12 relative">
            {/* Dynamic Glassmorphic Card with Photographic Background */}
            <div className="relative w-full aspect-square md:aspect-[4/3] border border-white/10 p-10 md:p-16 flex flex-col justify-center overflow-hidden">
              
              <Image 
                src="/images/Team Conference.jpg"
                alt="DhruvSatya Team Deliberation"
                fill
                className="object-cover opacity-40 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-brand-foundation/70" />
              <div className="absolute inset-0 bg-brand-secondary/40 backdrop-blur-md" />

              {/* Internal glowing orb */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-accent/30 blur-[100px] rounded-full pointer-events-none" />

              <div className="absolute top-8 left-8 text-6xl text-brand-accent/30 font-serif leading-none font-bold">"</div>
              
              <div className="relative z-10 min-h-[150px] flex items-center">
                <AnimatePresence mode="wait">
                  {philosophies.map((phil) => (
                    active === phil.id && (
                      <motion.div
                        key={phil.id}
                        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <p className="text-3xl md:text-5xl text-white font-display font-medium leading-[1.2] tracking-tight">
                          {phil.description}
                        </p>
                      </motion.div>
                    )
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Decorative geometrical accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-brand-accent/50 z-0 hidden md:block" />
            <div className="absolute -bottom-3 -right-3 w-32 h-32 border-2 border-brand-accent/70 z-0 hidden md:block" />
            <div className="absolute -bottom-8 -right-8 w-4 h-4 bg-brand-accent z-0 hidden md:block animate-pulse" />
          </div>
          
        </div>
      </div>
    </section>
  );
}
