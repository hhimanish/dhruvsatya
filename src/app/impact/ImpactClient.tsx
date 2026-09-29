"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle2, TrendingUp, Users, Target } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export function ImpactClient({ caseStudies }: { caseStudies: any[] }) {
  // Mapping case studies to specific premium images for visual storytelling
  const imageryMap = [
    "/images/Team Deliberation.jpg",
    "/images/Meeting1.jpg",
    "/images/Focus.jpg",
    "/images/Group 2.jpg",
    "/images/Meeting.jpg"
  ];

  return (
    <main className="flex min-h-screen flex-col bg-brand-ivory/30">
      <Navbar />
      
      {/* Dynamic Hero Section */}
      <section className="relative pt-40 pb-32 bg-brand-foundation text-white overflow-hidden">
        {/* Background Image with Parallax & Ken Burns */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          className="absolute inset-0 z-0"
        >
          <Image 
            src="/images/Inspire.jpg"
            alt="DhruvSatya Impact"
            fill
            className="object-cover opacity-40 mix-blend-luminosity"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-foundation via-brand-foundation/70 to-brand-foundation/40 z-0" />
        
        <div className="container mx-auto px-6 md:px-12 max-w-5xl text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6"
          >
            <span className="inline-block bg-brand-accent text-brand-foundation px-6 py-2 transform -skew-x-6 shadow-[0_0_20px_rgba(252,163,17,0.3)]">
              Proof of Transformation.
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md"
          >
            We measure our success by the tangible, sustained impact we create for our clients. Explore how we turn potential into world-class performance.
          </motion.p>
        </div>
      </section>

      {/* Human-Centric Interactive Case Studies */}
      <section className="py-24 px-6 bg-brand-ivory/30 relative">
        <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="space-y-24">
            {caseStudies.map((study: any, idx: number) => (
              <motion.div 
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col md:flex-row group"
              >
                {/* Visual Half */}
                <div className={`w-full md:w-2/5 relative h-64 md:h-auto overflow-hidden ${idx % 2 !== 0 ? 'md:order-last' : ''}`}>
                  <Image 
                    src={imageryMap[idx % imageryMap.length]}
                    alt={`${study.client} transformation`}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-brand-foundation/20 mix-blend-multiply group-hover:bg-brand-foundation/10 transition-colors duration-500" />
                  
                  {/* Floating Metric Badge */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white/50 shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex items-center text-brand-foundation">
                      <TrendingUp className="w-5 h-5 text-brand-accent mr-2" />
                      <span className="font-bold font-display text-sm">Measurable Shift Achieved</span>
                    </div>
                  </div>
                </div>

                {/* Content Half */}
                <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-ivory rounded-bl-full z-0 opacity-50" />
                  
                  <div className="relative z-10">
                    <div className="flex flex-wrap items-center justify-between mb-8 gap-4 border-b border-gray-100 pb-6">
                      <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-foundation">
                        {study.client}
                      </h2>
                      <span className="inline-block px-4 py-1 bg-brand-foundation text-brand-accent text-xs font-bold tracking-widest uppercase rounded-full">
                        {study.industry}
                      </span>
                    </div>
                    
                    <div className="mb-10">
                      <div className="flex items-center text-brand-foundation font-bold mb-3 uppercase tracking-wider text-sm">
                        <Target className="w-4 h-4 mr-2 text-brand-accent" />
                        The Challenge
                      </div>
                      <p className="text-gray-600 leading-relaxed text-lg pl-6 border-l-2 border-brand-accent/20">
                        {study.challenge}
                      </p>
                    </div>
                    
                    <div className="mb-10">
                      <div className="flex items-center text-brand-foundation font-bold mb-3 uppercase tracking-wider text-sm">
                        <Users className="w-4 h-4 mr-2 text-brand-accent" />
                        Our Approach
                      </div>
                      <p className="text-gray-600 leading-relaxed text-lg pl-6 border-l-2 border-brand-accent/20">
                        {study.solution}
                      </p>
                    </div>
                    
                    <div className="bg-brand-ivory rounded-2xl p-6 md:p-8 mt-auto border border-brand-accent/10 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-2 h-full bg-brand-accent" />
                      <h3 className="text-xl font-display font-bold text-brand-foundation mb-6">Measured Results</h3>
                      <ul className="space-y-4">
                        {study.results.map((result: string, i: number) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle2 className="w-6 h-6 text-brand-accent mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 font-medium text-lg">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {caseStudies.length === 0 && (
              <div className="text-center text-gray-500 py-12">
                Loading case studies...
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Vibrant Trust Bar */}
      <section className="py-24 bg-brand-foundation text-center border-t border-brand-accent/20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Trusted by <span className="text-brand-accent">600+</span> Leading Organizations
            </h2>
            <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
              Our methodologies have been validated across every major industry, consistently delivering systemic transformation at scale.
            </p>
            
            {/* Creative Typography Marquee */}
            <div className="w-full overflow-hidden mt-16 relative flex py-12">
              {/* Vibrant Edge fade gradients */}
              <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-brand-foundation via-brand-foundation/90 to-transparent z-20 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-brand-foundation via-brand-foundation/90 to-transparent z-20 pointer-events-none" />
              
              {/* Moving light ray behind the marquee */}
              <div className="absolute top-1/2 left-0 right-0 h-48 bg-brand-accent/5 blur-[100px] -translate-y-1/2 z-0 pointer-events-none" />

              <motion.div 
                className="flex w-max items-center z-10"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 180, ease: "linear", repeat: Infinity }}
              >
                {/* Render the list twice to create a perfect seamless infinite loop */}
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex items-center">
                    {[
                      "Infosys", "Airtel", "HDFC Bank", "Wipro", "L&T", "IBM", "Aditya Birla", "ICICI Bank", "Tata", "Siemens",
                      "ACC Limited", "Britannia", "LIC", "NTPC", "Berger Paints", "Usha Communications", "WPIL", "Wesman",
                      "PNB", "Voltas", "Syndicate Bank", "Tech Mahindra", "BHEL", "HP", "Air India", "FlaktGroup", "EY",
                      "Coal India", "SBI", "Tea Board", "Nokia", "HDFC Life", "Texmaco", "McNally Bharat", "Vodafone",
                      "Kotak", "IndianOil", "KND Engineering", "Alstom", "DPSC", "Wockhardt", "Eveready", "IGL", "SREI",
                      "ITC Infotech", "Lafarge", "Axis Bank", "Bank of India", "ING", "Randstad", "ITC", "SAIL", "Peerless",
                      "Albert David", "Quippo", "Apeejay", "Hindustan Copper", "Indian Bank", "Khadim's", "Acclaris", "Titan",
                      "Renuka Sugars", "CESC", "Greaves Cotton", "CINI", "Bharat Petroleum", "Ambuja Neotia", "Voith",
                      "UltraTech", "Vision Comptech", "Unicharm", "Castrol", "Tanishq", "ICICI Prudential", "La Opala",
                      "Adhunik", "Reliance", "Biocon", "Dendrite", "Paradeep Phosphates", "CMRI", "JCI", "UCO Bank",
                      "Signode", "Saviance", "Grasim", "Anand Group", "CSC", "Adani Wilmar", "The Oberoi"
                    ].map((brand, index) => {
                      // Dynamically assign creative typography styles based on index
                      const styles = [
                        "font-display font-black text-4xl md:text-5xl text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.8)] opacity-60 hover:opacity-100 hover:text-white hover:[-webkit-text-stroke:0px] transition-all duration-300",
                        "font-display font-bold text-2xl md:text-3xl text-brand-accent tracking-widest uppercase",
                        "font-sans font-light italic text-3xl md:text-4xl text-white/60 hover:text-white transition-colors",
                        "font-display font-black text-3xl md:text-5xl text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_0_30px_rgba(252,163,17,0.8)] hover:text-brand-accent transition-all duration-300",
                        "bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 font-bold text-xl md:text-2xl text-white hover:bg-brand-accent hover:border-brand-accent hover:text-brand-foundation transition-all duration-300 shadow-lg",
                        "font-display font-black text-5xl md:text-6xl text-white/20 hover:text-white/80 transition-colors uppercase tracking-tighter"
                      ];
                      
                      const selectedStyle = styles[index % styles.length];

                      return (
                        <motion.div 
                          key={index} 
                          className="flex-shrink-0 mx-8 md:mx-14 cursor-pointer group"
                          whileHover={{ scale: 1.1, y: -5 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <span className={`${selectedStyle} inline-block whitespace-nowrap`}>
                            {brand}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
