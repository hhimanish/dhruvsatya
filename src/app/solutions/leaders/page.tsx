"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Mountain, BrainCircuit, Compass } from "lucide-react";

export default function LeadersPage() {
  const offerings = [
    {
      id: "transformational",
      icon: Mountain,
      title: "Executive Leadership Capability",
      desc: "Equipping senior leaders with the strategic agility and behavioral nuance required to navigate complexity and drive large-scale enterprise change.",
      image: "/images/Team Conference.jpg"
    },
    {
      id: "coaching",
      icon: BrainCircuit,
      title: "C-Suite Advisory & Coaching",
      desc: "Bespoke, high-impact advisory interventions designed to pressure-test executive decision-making and refine leadership presence.",
      image: "/images/Founder Potrait.jpg"
    },
    {
      id: "vmosa",
      icon: Compass,
      title: "Strategic Operating Models (VMOSA)",
      desc: "Deploying our proprietary Vision, Mission, Objectives, Strategies, and Action framework to translate abstract goals into executable mandates.",
      image: "/images/Meeting2.jpg"
    }
  ];

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      
      {/* Cinematic Hero */}
      <section className="relative pt-40 pb-32 bg-brand-foundation text-white overflow-hidden">
        <div className="absolute inset-0 w-full h-full animate-slow-zoom origin-center z-0">
          <Image 
            src="/images/Personal.jpg"
            alt="Leaders Transformation"
            fill
            sizes="100vw"
            quality={60}
            className="object-cover opacity-30 mix-blend-luminosity"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-foundation via-brand-foundation/70 to-brand-foundation/30 z-0" />
        
        <div className="container mx-auto px-6 md:px-12 max-w-5xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8">
              <span className="inline-block bg-brand-accent text-brand-foundation px-6 py-2 transform -skew-x-6 shadow-[0_0_20px_rgba(252,163,17,0.3)]">
                For Leaders.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
              Leadership is not a title; it is the capability to operationalize vision. We equip executives with the behavioral frameworks required to navigate complexity and drive scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dynamic Offerings - Rich Cards */}
      <section className="py-32 px-6 bg-brand-ivory/30 relative">
        <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {offerings.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative rounded-3xl overflow-hidden flex flex-col hover:-translate-y-4 transition-all duration-500 shadow-2xl h-auto min-h-[450px] md:h-[550px]"
              >
                {/* Background Image that reveals on hover */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-foundation via-brand-foundation/90 to-brand-foundation/70" />
                </div>

                <div className="relative z-10 p-10 flex flex-col h-full">
                  <div className="w-16 h-16 bg-brand-accent/20 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-md border border-brand-accent/30 group-hover:bg-brand-accent transition-colors duration-500">
                    <item.icon className="w-8 h-8 text-brand-accent group-hover:text-brand-foundation transition-colors duration-500" />
                  </div>
                  
                  <h4 className="text-3xl font-display font-bold mb-4 text-white group-hover:text-brand-accent transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 mb-10 text-lg leading-relaxed flex-grow">
                    {item.desc}
                  </p>
                  
                  <Link
                    href="/programs"
                    className="inline-flex items-center text-brand-accent font-bold tracking-widest uppercase hover:text-white transition-colors mt-auto"
                  >
                    View Programs
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-brand-foundation text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/Audiance.jpg"
            alt="CTA Background"
            fill
            sizes="100vw"
            quality={60}
            className="object-cover opacity-10 mix-blend-luminosity grayscale"
          />
        </div>
        <div className="container mx-auto max-w-3xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-10">
            Ready to elevate executive capability?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center px-10 py-5 bg-brand-accent text-brand-foundation font-bold rounded-full hover:bg-white transition-colors text-lg"
          >
            START THE CONVERSATION
            <ArrowRight className="w-6 h-6 ml-3" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
