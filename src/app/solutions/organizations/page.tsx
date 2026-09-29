"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, ShieldCheck, Users, Target } from "lucide-react";

export default function OrganizationsPage() {
  const offerings = [
    {
      id: "culture",
      icon: Users,
      title: "Organizational Design & Culture Transformation",
      desc: "Aligning structural operating models with behavioral mindsets to foster agility, deep-rooted accountability, and high-performance execution across the enterprise.",
      image: "/images/Team Conference.jpg"
    },
    {
      id: "sales",
      icon: TrendingUp,
      title: "Commercial Excellence & Revenue Acceleration",
      desc: "Our flagship intervention designed to fundamentally upgrade sales force capability, optimize the revenue engine, and drive sustainable top-line growth.",
      image: "/images/Motivate.jpg"
    },
    {
      id: "safety",
      icon: ShieldCheck,
      title: "Operational Resilience & Safety Culture",
      desc: "Moving beyond standard compliance to embed a psychological and behavioral mandate for zero-harm operations and industrial resilience.",
      image: "/images/Group 2.jpg"
    },
    {
      id: "productivity",
      icon: Target,
      title: "Manufacturing Excellence & Asset Optimization",
      desc: "Data-driven interventions engineered to eliminate waste, optimize plant utilization, and maximize frontline throughput.",
      image: "/images/East B.jpg"
    }
  ];

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      
      {/* Cinematic Hero */}
      <section className="relative pt-40 pb-32 bg-brand-foundation text-white overflow-hidden">
        <div className="absolute inset-0 w-full h-full animate-slow-zoom origin-center z-0">
          <Image 
            src="/images/Meeting.jpg"
            alt="Organizations Transformation"
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
                For Organizations.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
              A company's strategy is only as robust as its people's ability to execute it. We architect resilient cultures that turn operational intent into enterprise value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dynamic Offerings - Split Layout */}
      <section className="py-32 px-6 bg-brand-ivory/30 relative">
        <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-sm font-semibold text-brand-accent tracking-widest uppercase mb-4">
              Strategic Interventions
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-brand-foundation">
              Areas of Organizational Impact
            </h3>
          </div>

          <div className="space-y-24">
            {offerings.map((item, idx) => (
              <motion.div 
                key={item.id}
                id={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="flex flex-col lg:flex-row items-center gap-16 group"
              >
                {/* Image Half */}
                <div className={`w-full lg:w-1/2 relative h-[350px] md:h-[450px] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] group cursor-pointer ${idx % 2 !== 0 ? 'lg:order-last' : ''}`}>
                  <motion.div 
                    className="absolute inset-0 w-full h-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  >
                    <Image 
                      src={item.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                    />
                    
                    {/* Vibrant Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-foundation/40 via-transparent to-brand-accent/20 mix-blend-multiply opacity-70 group-hover:opacity-10 transition-opacity duration-700" />
                    
                    {/* Premium Light Shimmer / Sweep Effect */}
                    <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-[150%] transition-transform duration-[1.5s] ease-in-out transform -skew-x-12" />
                    
                    {/* Elegant Glass Border Glow */}
                    <div className="absolute inset-0 rounded-[2.5rem] border-2 border-white/10 group-hover:border-brand-accent/50 transition-colors duration-500 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] group-hover:shadow-[inset_0_0_50px_rgba(252,163,17,0.3)] z-20" />
                  </motion.div>
                  
                  {/* Floating Icon Badge with Glassmorphism */}
                  <div 
                    className="absolute top-8 left-8 w-20 h-20 bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.2)] transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-30 group-hover:bg-brand-accent/90 group-hover:border-brand-accent"
                    aria-hidden="true"
                  >
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Content Half */}
                <div className="w-full lg:w-1/2">
                  <h4 className="text-3xl md:text-4xl font-display font-bold text-brand-foundation mb-6 group-hover:text-brand-accent transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-xl leading-relaxed mb-10 pl-6 border-l-4 border-brand-accent">
                    {item.desc}
                  </p>
                  <Link 
                    href="/programs" 
                    className="inline-flex items-center px-8 py-4 bg-brand-foundation text-white font-medium rounded-full hover:bg-brand-accent transition-all duration-300 hover:shadow-lg"
                  >
                    VIEW RELATED PROGRAMS <ArrowRight className="w-5 h-5 ml-3" />
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
            Ready to architect a high-performance culture?
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
