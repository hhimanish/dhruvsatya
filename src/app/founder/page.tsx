"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function FounderPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-brand-foundation text-white overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-brand-accent/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
              <span className="inline-block bg-brand-accent text-brand-foundation px-6 py-2 transform -skew-x-6 mb-2 shadow-[0_0_20px_rgba(252,163,17,0.3)]">
                Meet the Mind Behind the
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                Transformation.
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-lg font-light leading-relaxed">
              Soumitra Chatterjee has consulted over 600 organizations and impacted more than 600,000 lives across India and overseas.
            </p>
            <Link 
              href="#journey"
              className="inline-flex items-center text-brand-accent font-bold tracking-widest uppercase text-sm hover:text-white transition-colors"
            >
              Explore the Journey
              <ArrowRight className="w-5 h-5 ml-3" />
            </Link>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-1/2 flex justify-center md:justify-end relative group"
          >
            {/* Yellow geometric frame */}
            <motion.div 
              className="absolute top-4 -right-4 md:right-4 w-72 md:w-96 h-96 md:h-[500px] border-2 border-brand-accent rounded-2xl z-0 transition-transform duration-700 ease-out group-hover:translate-x-4 group-hover:-translate-y-4" 
            />
            <div className="absolute -bottom-8 left-12 w-32 h-32 bg-brand-accent/20 blur-[50px] rounded-full z-0 group-hover:bg-brand-accent/40 transition-colors duration-700" />

            <div className="relative w-72 h-96 md:w-96 md:h-[500px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10">
              <Image 
                src="/images/soumitra-new.jpg"
                alt="Soumitra Chatterjee Portrait"
                fill
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-foundation/80 via-transparent to-transparent group-hover:from-brand-foundation/60 transition-colors duration-700" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-brand-ivory text-center px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-display font-medium text-brand-foundation leading-tight">
            "Your circumstances are not always within your control. Your response, your mindset and your ambition are."
          </h2>
        </div>
      </section>

      {/* Career & Philosophy */}
      <section id="journey" className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-sm font-semibold text-brand-accent tracking-widest uppercase mb-4">
                The Experience
              </h3>
              <h4 className="text-3xl font-display font-medium text-brand-foundation mb-6">
                40 Years of Leadership & Transformation
              </h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                As the Managing Director and founder of DhruvSatya Center for Personal Transformation, Soumitra Chatterjee brings over 40 years of corporate and institutional experience. He has served key organizations in senior management positions, including at the board level.
              </p>
              <p className="text-gray-600 leading-relaxed">
                He is mentored by some of the world's top coaches, including Tony Robbins, T. Harv Eker, Mac Attram, and Alex Mendosian. His approach bridges world-class transformational methodologies with the realities of Indian business and education.
              </p>
            </div>
            
            <div className="bg-brand-foundation text-white p-10 rounded-2xl">
              <h3 className="text-xl font-medium mb-8 border-b border-white/20 pb-4">
                Areas of Expertise
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-brand-accent mr-3">■</span>
                  <span>Transformational Leadership</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-3">■</span>
                  <span>Executive Coaching</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-3">■</span>
                  <span>Sales Coaching & Excellence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-3">■</span>
                  <span>Personal Transformation (Awaken Your Giant Within)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-accent mr-3">■</span>
                  <span>High-Impact Keynotes / Power Talks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-foundation text-center text-white px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-display font-medium mb-8">
            Bring this thinking to your organization.
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-brand-accent text-white font-medium rounded-full hover:bg-white hover:text-brand-foundation transition-all duration-300"
          >
            START A CONVERSATION
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
