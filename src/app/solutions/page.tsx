"use client";

import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight, Building2, User, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function SolutionsPage() {
  const pathways = [
    {
      title: "For Organizations",
      desc: "Transform your culture, enhance execution, and drive systemic operational excellence.",
      href: "/solutions/organizations",
      icon: Building2,
      image: "/images/Meeting.jpg",
      features: ["Culture Transformation", "Sales Excellence", "Behavioral Safety", "Plant Productivity"]
    },
    {
      title: "For Leaders",
      desc: "Develop high-performing executives capable of leading through complexity and inspiring teams.",
      href: "/solutions/leaders",
      icon: User,
      image: "/images/Personal.jpg",
      features: ["Executive Coaching", "Transformational Leadership", "High Performance Leadership"]
    },
    {
      title: "For Institutions",
      desc: "Elevate educational institutions by developing leadership capabilities in educators and administrators.",
      href: "/solutions/institutions",
      icon: GraduationCap,
      image: "/images/Group Pic.jpg",
      features: ["Faculty Development", "Academic Leadership", "Institutional Excellence"]
    }
  ];

  return (
    <main className="flex min-h-screen flex-col bg-brand-ivory/30">
      <Navbar />
      
      {/* Cinematic Hero */}
      <section className="relative pt-40 pb-32 bg-brand-foundation text-white overflow-hidden">
        {/* Parallax Background Image */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src="/images/Focus.jpg"
            alt="DhruvSatya Solutions Focus"
            fill
            className="object-cover opacity-30 mix-blend-luminosity"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-foundation via-brand-foundation/70 to-brand-foundation/30 z-0" />
        
        <div className="container mx-auto px-6 md:px-12 max-w-5xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8">
              <span className="inline-block bg-brand-accent text-brand-foundation px-6 py-2 transform -skew-x-6 shadow-[0_0_20px_rgba(252,163,17,0.3)]">
                Transformation Pathways.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
              Choose the path that aligns with your current challenge. Our methodologies are tailored for organizational scale, leadership depth, and institutional impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pathway Cards with Rich Textures */}
      <section className="py-32 px-6 bg-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {pathways.map((path, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative rounded-3xl overflow-hidden flex flex-col hover:-translate-y-4 transition-all duration-500 shadow-2xl h-auto min-h-[500px] md:h-[650px]"
              >
                {/* Background Image that reveals on hover */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={path.image}
                    alt={path.title}
                    fill
                    className="object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-foundation via-brand-foundation/90 to-brand-foundation/70" />
                </div>

                <div className="relative z-10 p-10 flex flex-col h-full">
                  <div className="w-16 h-16 bg-brand-accent/20 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-md border border-brand-accent/30 group-hover:bg-brand-accent transition-colors duration-500">
                    <path.icon className="w-8 h-8 text-brand-accent group-hover:text-brand-foundation transition-colors duration-500" />
                  </div>
                  
                  <h2 className="text-3xl font-display font-bold mb-4 text-white group-hover:text-brand-accent transition-colors duration-300">
                    {path.title}
                  </h2>
                  <p className="text-gray-300 mb-10 text-lg leading-relaxed flex-grow">
                    {path.desc}
                  </p>
                  
                  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl mb-8 border border-white/10">
                    <ul className="space-y-4">
                      {path.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm font-medium text-gray-200">
                          <span className="w-2 h-2 rounded-full bg-brand-accent mr-4 shadow-[0_0_8px_rgba(252,163,17,0.8)]" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={path.href}
                    className="inline-flex items-center text-brand-accent font-bold tracking-widest uppercase hover:text-white transition-colors mt-auto"
                  >
                    Explore Pathway
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
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
