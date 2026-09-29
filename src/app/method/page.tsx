"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Microscope, Milestone, Flame, Infinity as InfinityIcon } from "lucide-react";
import { useRef } from "react";

export default function MethodPage() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Map scroll progress to horizontal translation
  // Moves the content from 0% to -75% since there are 4 cards
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  const steps = [
    {
      title: "Diagnostic Deep Dive",
      desc: "We don't prescribe before we diagnose. We keep our ears to the ground, interacting with your team at all levels to understand the systemic root causes of your challenges, not just the symptoms.",
      image: "/images/Team deliberation 2.jpg",
      icon: Microscope
    },
    {
      title: "Strategic Alignment",
      desc: "Based on our findings, we align the leadership team on a unified vision and the required behavioral shifts needed to achieve it.",
      image: "/images/DSC_9875.JPG",
      icon: Milestone
    },
    {
      title: "Experiential Intervention",
      desc: "Our workshops are not lectures. They are immersive, high-energy, experiential environments designed to challenge paradigms and facilitate profound self-discovery.",
      image: "/images/FounderMethod.jpg",
      icon: Flame
    },
    {
      title: "Sustained Execution",
      desc: "Transformation doesn't happen in a day. We implement robust follow-up mechanisms, coaching frameworks, and execution dashboards to ensure new behaviors become permanent habits.",
      image: "/images/Team Group.jpg",
      icon: InfinityIcon
    }
  ];

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      
      {/* Cinematic Hero - Fresh Asset */}
      <section className="relative pt-40 pb-32 bg-brand-foundation text-white overflow-hidden">
        <div className="absolute inset-0 w-full h-full animate-slow-zoom origin-center z-0">
          <Image 
            src="/images/Group1.jpg"
            alt="The DhruvSatya Method"
            fill
            sizes="100vw"
            quality={60}
            className="object-cover opacity-30 mix-blend-luminosity grayscale"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-foundation via-brand-foundation/80 to-brand-foundation/40 z-0" />
        
        <div className="container mx-auto px-6 md:px-12 max-w-5xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8">
              <span className="inline-block bg-brand-accent text-brand-foundation px-6 py-2 transform -skew-x-6 shadow-[0_0_20px_rgba(252,163,17,0.3)]">
                The Creative Process.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
              A proven, four-step methodology to bridge the gap between organizational capability and world-class execution. Scroll down to begin the journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mobile & Tablet: Beautiful Vertical Stack */}
      <section className="block lg:hidden relative bg-brand-ivory/30 py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
        
        <div className="container mx-auto max-w-2xl relative z-10 space-y-32">
          {steps.map((step, i) => (
            <motion.div 
              key={i} 
              className="flex flex-col gap-10 relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Background Number Watermark */}
              <div className="absolute -top-16 -left-10 text-[25vh] font-display font-black text-brand-secondary/10 pointer-events-none select-none z-0">
                0{i + 1}
              </div>

              {/* Image */}
              <div className="w-full relative z-10">
                <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-gray-100">
                  <Image 
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-brand-foundation/20 mix-blend-multiply opacity-50" />
                  <div className="absolute inset-0 rounded-[2rem] border border-white/20 shadow-[inset_0_0_20px_rgba(255,255,255,0.1)]" />
                </div>
              </div>

              {/* Content */}
              <div className="w-full relative z-10">
                <div className="w-16 h-16 bg-white shadow-xl rounded-2xl flex items-center justify-center mb-8 border border-brand-accent/20">
                  <step.icon className="w-8 h-8 text-brand-accent" />
                </div>
                
                <h3 className="text-3xl md:text-5xl font-display font-bold text-brand-foundation mb-6 leading-tight">
                  {step.title}
                </h3>
                
                <div className="relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-accent to-transparent rounded-full" />
                  <p className="text-gray-600 text-lg md:text-2xl leading-relaxed pl-6 font-light">
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Desktop: Horizontal Scrolling Journey */}
      <section ref={targetRef} className="hidden lg:block relative h-[400vh] bg-brand-ivory/30">
        <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
        
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex w-[400vw]">
            {steps.map((step, i) => (
              <div key={i} className="w-screen h-screen flex items-center justify-center px-12 flex-shrink-0 relative">
                
                {/* Background Number Watermark */}
                <div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vh] font-display font-black text-brand-secondary/30 pointer-events-none select-none z-0"
                  aria-hidden="true"
                >
                  0{i + 1}
                </div>

                <div className="max-w-7xl w-full mx-auto flex flex-row items-center gap-24 relative z-10">
                  
                  {/* Left Half: Photography with premium physics */}
                  <div className="w-1/2">
                    <motion.div 
                      className="relative w-full min-h-[400px] lg:min-h-[500px] xl:min-h-[600px] aspect-square lg:aspect-[4/3] xl:aspect-video rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] group cursor-pointer bg-brand-foundation/5"
                      whileHover={{ scale: 1.03, y: -8 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      aria-hidden="true"
                    >
                      <Image 
                        src={step.image}
                        alt=""
                        fill
                        sizes="50vw"
                        quality={60}
                        className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                      />
                      
                      {/* Vibrant Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-brand-foundation/30 via-transparent to-brand-accent/10 mix-blend-multiply opacity-50 group-hover:opacity-0 transition-opacity duration-700" />
                      
                      {/* Premium Light Shimmer / Sweep Effect */}
                      <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-[150%] transition-transform duration-[1.5s] ease-in-out transform -skew-x-12" />
                      
                      {/* Elegant Glass Border Glow */}
                      <div className="absolute inset-0 rounded-[2rem] border border-white/20 group-hover:border-brand-accent/60 transition-colors duration-500 shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] group-hover:shadow-[inset_0_0_40px_rgba(252,163,17,0.3)]" />
                    </motion.div>
                  </div>

                  {/* Right Half: Content */}
                  <div className="w-1/2">
                    <div 
                      className="w-20 h-20 bg-white shadow-xl rounded-2xl flex items-center justify-center mb-10 border border-brand-accent/20 transition-colors duration-500 hover:bg-brand-accent group"
                      aria-hidden="true"
                    >
                      <step.icon className="w-10 h-10 text-brand-accent group-hover:text-brand-foundation transition-colors duration-500" />
                    </div>
                    
                    <h3 className="text-6xl font-display font-bold text-brand-foundation mb-8 leading-tight">
                      {step.title}
                    </h3>
                    
                    <div className="relative">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-accent to-transparent rounded-full" aria-hidden="true" />
                      <p className="text-gray-600 text-2xl leading-relaxed pl-8 font-light">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-brand-foundation text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0" aria-hidden="true">
          <Image 
            src="/images/Audiance.jpg"
            alt=""
            fill
            sizes="100vw"
            quality={60}
            className="object-cover opacity-10 mix-blend-luminosity grayscale"
          />
        </div>
        <div className="container mx-auto max-w-3xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Ready to experience the method?
          </h2>
          <p className="text-xl text-gray-400 mb-10 font-light">
            Start a conversation with our experts to diagnose your organizational challenges.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-10 py-5 bg-brand-accent text-brand-foundation font-bold rounded-full hover:bg-white transition-colors text-lg"
          >
            GET STARTED
            <ArrowRight className="w-6 h-6 ml-3" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
