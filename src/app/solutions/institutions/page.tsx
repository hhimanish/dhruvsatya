"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, GraduationCap, Library } from "lucide-react";

export default function InstitutionsPage() {
  const offerings = [
    {
      id: "faculty",
      icon: BookOpen,
      title: "Faculty Development",
      desc: "Empowering educators with the methodologies and mindsets needed to inspire students and foster a culture of academic excellence.",
      image: "/images/Team Con.jpg"
    },
    {
      id: "academic-leadership",
      icon: GraduationCap,
      title: "Academic Leadership",
      desc: "Developing Principals, Deans, and HODs to lead with vision, manage complexity, and drive institutional growth.",
      image: "/images/Group Pic.jpg"
    },
    {
      id: "institutional-excellence",
      icon: Library,
      title: "Institutional Excellence",
      desc: "Systemic interventions designed to align institutional vision with operational realities, improving both culture and outcomes.",
      image: "/images/Meeting.jpg"
    }
  ];

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      
      {/* Cinematic Hero */}
      <section className="relative pt-40 pb-32 bg-brand-foundation text-white overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src="/images/Group Pic.jpg"
            alt="Educational Institutions Transformation"
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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-8">
              <span className="inline-block bg-brand-accent text-brand-foundation px-6 py-2 transform -skew-x-6 shadow-[0_0_20px_rgba(252,163,17,0.3)]">
                For Educational Institutions.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
              The quality of an educational institution cannot exceed the quality of its educators and leaders. We bring world-class transformation methodologies to the academic sector.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Dynamic Offerings - Split Layout */}
      <section className="py-32 px-6 bg-brand-ivory/30 relative">
        <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
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
                <div className={`w-full lg:w-1/2 relative h-[400px] rounded-3xl overflow-hidden shadow-2xl ${idx % 2 !== 0 ? 'lg:order-last' : ''}`}>
                  <Image 
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-brand-foundation/20 mix-blend-multiply transition-colors duration-500 group-hover:bg-brand-foundation/10" />
                  
                  {/* Floating Icon Badge */}
                  <div className="absolute top-6 left-6 w-16 h-16 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <item.icon className="w-8 h-8 text-brand-accent" />
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
            className="object-cover opacity-10 mix-blend-luminosity grayscale"
          />
        </div>
        <div className="container mx-auto max-w-3xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-10">
            Ready to transform your institution?
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
