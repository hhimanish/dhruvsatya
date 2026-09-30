"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Lightbulb, Sparkles, Telescope, Compass, Rocket } from "lucide-react";

const images = [
  "/images/Focus.jpg",
  "/images/Personal.jpg",
  "/images/group-2.jpg",
  "/images/profic-pic.jpg",
  "/images/Meeting2.jpg",
  "/images/Meeting.jpg"
];

const icons = [BookOpen, Lightbulb, Sparkles, Telescope, Compass, Rocket];

export function InsightsClient({ insights }: { insights: any[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <main className="flex min-h-screen flex-col bg-brand-foundation overflow-x-hidden">
      <Navbar />
      
      {/* Editorial Hero */}
      <section className="pt-40 pb-20 bg-brand-foundation text-white relative z-10 border-b border-white/10">
        <div className="absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 tracking-tight">
              <span className="inline-block bg-brand-accent text-brand-foundation px-8 py-2 -ml-8 transform -skew-x-6 shadow-[0_0_30px_rgba(252,163,17,0.2)]">
                Think With Soumitra.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed font-light">
              Perspectives, frameworks, and deep dives into the mechanics of leadership, organisational culture, and human potential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Hover Accordion Layout */}
      <section className="relative w-full h-auto min-h-screen md:h-[75vh] md:min-h-[600px] flex flex-col md:flex-row bg-brand-foundation">
        {insights.map((article: any, index: number) => {
          const Icon = icons[index % icons.length];
          const isHovered = hoveredIndex === index;
          const isAnyHovered = hoveredIndex !== null;

          return (
            <motion.div
              key={article.id}
              className="relative flex-1 min-h-[250px] md:min-h-0 h-full border-b md:border-b-0 md:border-r border-white/10 overflow-hidden cursor-pointer group"
              animate={{
                flex: isHovered ? 4 : isAnyHovered ? 0.5 : 1,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background Image */}
              <Image
                src={images[index % images.length]}
                alt={article.title}
                fill
                className={`object-cover transition-all duration-1000 ease-out origin-center ${
                  isHovered ? "scale-105 opacity-100 grayscale-0" : "scale-100 opacity-40 grayscale"
                }`}
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-foundation via-brand-foundation/60 to-transparent transition-opacity duration-500 opacity-90 group-hover:opacity-70" />
              <div className={`absolute inset-0 bg-brand-accent mix-blend-overlay transition-opacity duration-700 ${isHovered ? 'opacity-30' : 'opacity-0'}`} />

              {/* Content Wrapper */}
              <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end pointer-events-none">
                
                {/* Icon (Always Visible, shifts slightly on hover) */}
                <motion.div 
                  className={`w-12 h-12 rounded-xl flex items-center justify-center border border-white/20 mb-6 transition-colors duration-500 ${isHovered ? 'bg-brand-accent text-brand-foundation' : 'bg-white/10 text-white backdrop-blur-md'}`}
                  animate={{ y: isHovered ? 0 : 10 }}
                >
                  <Icon className="w-6 h-6" />
                </motion.div>

                {/* Category & Meta (Vertical on desktop unless hovered) */}
                <div className={`flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4 ${!isHovered && 'hidden md:flex md:flex-col md:items-end md:gap-2 md:[writing-mode:vertical-rl] md:rotate-180 md:absolute md:top-10 md:right-10 md:w-auto md:h-auto'}`}>
                  <div className="flex items-center gap-2 md:gap-4">
                    <div className="w-8 h-[2px] bg-brand-accent hidden md:block" />
                    <span className="text-xs font-bold tracking-widest text-brand-accent uppercase">
                      {article.category}
                    </span>
                  </div>
                  
                  {/* Meta (Author and Date) visible on hover or mobile */}
                  <div className={`flex items-center text-xs text-gray-300 font-medium ${!isHovered && 'md:hidden'}`}>
                    <span className="mr-2">•</span>
                    <span>{article.author}</span>
                    <span className="mx-2">•</span>
                    <span>{new Date(article.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 leading-tight drop-shadow-xl min-w-[250px] md:min-w-0">
                  {isHovered ? (
                    <span className="inline-block bg-brand-accent text-brand-foundation px-4 py-1 transform -skew-x-6">
                      {article.title}
                    </span>
                  ) : (
                    <span className="line-clamp-2 md:line-clamp-3">
                      {article.title}
                    </span>
                  )}
                </h2>

                {/* Excerpt (Only visible when hovered or on mobile) */}
                <motion.div
                  initial={false}
                  animate={{ 
                    opacity: isHovered ? 1 : 0, 
                    height: isHovered ? "auto" : 0 
                  }}
                  className="overflow-hidden hidden md:block"
                >
                  <p className="text-gray-200 text-lg leading-relaxed mb-8 max-w-xl">
                    {article.excerpt}
                  </p>
                  
                  <Link
                    href={`/insights/${article.id}`}
                    className="inline-flex items-center px-8 py-4 bg-white text-brand-foundation font-bold rounded-full hover:bg-brand-accent transition-colors tracking-widest uppercase text-sm pointer-events-auto"
                  >
                    READ ARTICLE
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </motion.div>

                {/* Mobile Link (Always visible on mobile) */}
                <div className="mt-4 md:hidden pointer-events-auto">
                   <Link
                    href={`/insights/${article.id}`}
                    className="inline-flex items-center text-brand-accent font-bold tracking-widest uppercase text-sm"
                  >
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
                
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Newsletter */}
      <section className="py-32 bg-white text-center px-6 border-t border-gray-100">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-foundation mb-6">
            Stay ahead of the curve.
          </h2>
          <p className="text-xl text-gray-500 mb-10 font-light">
            Join thousands of leaders who receive our monthly perspectives on transformation and high-performance leadership.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Enter your work email" 
              className="flex-grow px-8 py-5 rounded-full bg-brand-ivory/50 border border-gray-200 text-brand-foundation placeholder-gray-400 focus:outline-none focus:border-brand-accent focus:bg-white transition-colors text-lg"
              required
            />
            <button 
              type="submit"
              className="px-10 py-5 bg-brand-foundation text-white font-bold rounded-full hover:bg-brand-accent hover:text-brand-foundation transition-colors flex-shrink-0 tracking-widest uppercase text-sm"
            >
              SUBSCRIBE
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
