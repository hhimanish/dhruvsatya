"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, ShieldCheck, Trophy, Users, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const milestones = [
    { year: "1999", title: "The Foundation", desc: "Started with a vision to bring world-class transformation to Indian organizations." },
    { year: "2010", title: "National Award", desc: "Recognized for excellence in training and organizational development." },
    { year: "2015", title: "ISO Certification", desc: "Achieved ISO 9001:2015 for quality management in consulting." },
    { year: "2024", title: "600,000+ Lives", desc: "Crossed the milestone of impacting over 6 lac individuals across industries." },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-brand-ivory/30">
      <Navbar />
      
      {/* Cinematic Hero */}
      <section className="relative pt-40 pb-32 bg-brand-foundation text-white overflow-hidden">
        {/* Parallax Background Image */}
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 35, ease: "linear", repeat: Infinity }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src="/images/Group 2.jpg"
            alt="DhruvSatya Transformation Legacy"
            fill
            className="object-cover opacity-60"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-foundation via-brand-foundation/60 to-transparent z-0" />
        
        <div className="container mx-auto px-6 md:px-12 max-w-5xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8 leading-[1.2]">
              <span className="inline-block bg-brand-accent text-brand-foundation px-6 py-2 transform -skew-x-6 mb-4 shadow-[0_0_20px_rgba(252,163,17,0.3)]">
                25 Years of Building
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                World-Class Organizations.
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              We are not just a training company. We are a catalyst for profound, systemic change that aligns human potential with strategic goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Difference - Split Human-Centric Layout */}
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Context & Imagery */}
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-sm font-semibold text-brand-accent tracking-widest uppercase mb-4 flex items-center">
                  <span className="w-8 h-[2px] bg-brand-accent mr-4" />
                  The DhruvSatya Difference
                </h2>
                <h3 className="text-3xl md:text-5xl font-display font-bold text-brand-foundation mb-8 leading-tight">
                  Why organizations trust us with their most valuable asset.
                </h3>
                
                <motion.div 
                  className="relative w-full h-80 md:h-96 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] mb-8 group cursor-pointer"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Image 
                    src="/images/Meeting2.jpg"
                    alt="DhruvSatya Team Deliberation"
                    fill
                    className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                  />
                  
                  {/* Vibrant Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-foundation/30 via-transparent to-brand-accent/10 mix-blend-multiply opacity-50 group-hover:opacity-0 transition-opacity duration-700" />
                  
                  {/* Premium Glow Effect on Hover */}
                  <div className="absolute inset-0 ring-2 ring-brand-accent/0 group-hover:ring-brand-accent/50 rounded-3xl transition-all duration-700 shadow-[inset_0_0_50px_rgba(252,163,17,0)] group-hover:shadow-[inset_0_0_50px_rgba(252,163,17,0.2)]" />
                </motion.div>

                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Most training programs focus on surface-level skills. We go deeper. We focus on the underlying paradigms, beliefs, and mindsets that drive behavior. 
                </p>
                <div className="border-l-4 border-brand-accent pl-6 bg-gradient-to-r from-brand-ivory/80 to-transparent py-4 rounded-r-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-[1.5s] ease-in-out skew-x-12" />
                  <p className="text-gray-600 text-lg leading-relaxed relative z-10">
                    When you change how a person sees their role, their capability to execute fundamentally shifts. That is why our interventions lead to measurable improvements in culture, safety, and revenue.
                  </p>
                </div>
              </motion.div>
            </div>
            
            {/* Floating Achievement Cards with Premium Physics */}
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-accent/15 blur-[100px] rounded-full z-0" />
                
                {[
                  { icon: ShieldCheck, title: "ISO 9001:2015", text: "Certified for rigorous quality management in consulting." },
                  { icon: Trophy, title: "National Award", text: "Recognized nationally for absolute training excellence." },
                  { icon: Users, title: "600+ Clients", text: "Trusted implicitly by industry-leading organizations." },
                  { icon: Award, title: "40+ Years", text: "Founder's unmatched legacy of leadership and vision." },
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(252,163,17,0.15)] hover:border-brand-accent/50 transition-colors duration-300 relative z-10 group overflow-hidden cursor-pointer"
                  >
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/60 to-transparent group-hover:translate-x-[150%] transition-transform duration-[1s] ease-in-out transform -skew-x-12 z-0" />
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-brand-ivory rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-accent transition-colors duration-500 shadow-inner">
                        <item.icon className="w-8 h-8 text-brand-accent group-hover:text-brand-foundation transition-colors duration-500" />
                      </div>
                      <h4 className="font-bold text-brand-foundation text-2xl mb-3 group-hover:text-brand-accent transition-colors duration-300">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed font-light">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Journey Timeline - Interactive Scroll Connected */}
      <section className="py-32 px-6 bg-brand-foundation text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/Audiance.jpg"
            alt="DhruvSatya Journey"
            fill
            className="object-cover opacity-30 mix-blend-overlay"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-foundation/90 via-brand-foundation/80 to-brand-foundation z-0" />
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-32"
          >
            <h2 className="text-sm font-semibold text-brand-accent tracking-widest uppercase mb-4">
              The Legacy
            </h2>
            <h3 className="inline-block bg-brand-accent text-brand-foundation px-8 py-3 transform -skew-x-6 shadow-[0_0_20px_rgba(252,163,17,0.3)] text-4xl md:text-6xl font-display font-bold">
              Our Journey
            </h3>
          </motion.div>
          
          <div ref={targetRef} className="relative pb-24 ml-4 md:ml-1/2">
            
            {/* The Background Track */}
            <div className="absolute left-[7px] md:left-0 top-0 bottom-0 w-1 bg-white/10 md:-ml-[2px]" />
            
            {/* The Animated Golden Fill Line */}
            <motion.div 
              style={{ scaleY: pathLength }}
              className="absolute left-[7px] md:left-0 top-0 bottom-0 w-1 bg-brand-accent md:-ml-[2px] origin-top shadow-[0_0_15px_rgba(252,163,17,0.8)] z-10" 
            />

            {milestones.map((milestone, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-24 relative pl-12 md:pl-0 group"
              >
                {/* Glowing Node that lights up when scrolled past */}
                <motion.div 
                  className="absolute left-[-5px] md:left-1/2 md:-ml-[9px] top-4 w-6 h-6 bg-brand-foundation border-4 border-brand-accent rounded-full z-20 shadow-[0_0_20px_rgba(252,163,17,1)] flex items-center justify-center"
                >
                  <CheckCircle2 className="w-3 h-3 text-brand-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
                
                <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-20 md:text-right" : "md:pl-20 md:ml-auto"}`}>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl group-hover:bg-white/10 group-hover:border-brand-accent/50 transition-all duration-300 relative overflow-hidden cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <span className="inline-block text-brand-accent font-display text-4xl md:text-5xl font-black mb-4 tracking-tighter drop-shadow-[0_0_15px_rgba(252,163,17,0.3)]">
                      {milestone.year}
                    </span>
                    <h4 className="text-3xl font-bold mb-4 text-white group-hover:text-brand-accent transition-colors duration-300 relative z-10">
                      {milestone.title}
                    </h4>
                    <p className="text-gray-300 text-lg leading-relaxed relative z-10 font-light">
                      {milestone.desc}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
