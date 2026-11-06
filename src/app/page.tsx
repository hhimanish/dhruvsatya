import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { CredibilityBand } from "@/components/home/CredibilityBand";
import { FeaturedSolutions } from "@/components/home/FeaturedSolutions";
import { FeaturedPrograms } from "@/components/home/FeaturedPrograms";
import { Footer } from "@/components/layout/Footer";
import dynamic from 'next/dynamic';

const DiagnosticTool = dynamic(() => import('@/components/home/DiagnosticTool').then(mod => mod.DiagnosticTool), {
  loading: () => <div className="h-screen bg-brand-foundation animate-pulse" />
});

const PhilosophySection = dynamic(() => import('@/components/home/PhilosophySection').then(mod => mod.PhilosophySection), {
  loading: () => <div className="h-[50vh] bg-white animate-pulse" />
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <Hero />
      <CredibilityBand />
      
      {/* The Big Idea / Transformation Statement */}
      <section className="py-24 md:py-36 bg-gradient-to-b from-white via-sky-50/40 to-white px-4 md:px-6 relative overflow-hidden text-slate-900 border-b border-slate-100">
        {/* Soft Radiant Glows */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-sky-100/60 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-amber-100/60 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-display font-bold leading-[1.2] md:leading-[1.15] mb-8 md:mb-12 tracking-tight text-slate-900">
            Organisations change when people change.
            <br className="hidden md:block" />
            <span className="text-slate-500 block md:inline mt-2 md:mt-0 font-normal">People change when perspective changes.</span>
            <br className="hidden md:block" />
            <span className="inline-block bg-gradient-to-r from-brand-accent via-amber-400 to-[#F8A612] text-white font-black px-6 py-3 mt-6 transform -skew-x-6 shadow-xl shadow-amber-500/20 text-lg sm:text-xl md:text-3xl lg:text-4xl max-w-full rounded-xl">
              <span className="block transform skew-x-6">Perspective changes when we challenge ourselves.</span>
            </span>
          </h2>
          <div className="inline-block relative px-2">
            <p className="text-lg sm:text-xl md:text-3xl text-slate-900 font-black tracking-widest uppercase">
              That is where <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-accent">transformation begins</span>.
            </p>
            <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-brand-cyan via-brand-accent to-brand-cyan scale-x-75 opacity-70" />
          </div>
        </div>
      </section>

      <FeaturedSolutions />
      <FeaturedPrograms />
      <DiagnosticTool />
      <PhilosophySection />
      
      <Footer />
    </main>
  );
}
