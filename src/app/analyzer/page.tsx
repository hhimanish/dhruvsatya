"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Search, Loader2, Sparkles, TrendingUp, AlertTriangle, Target, Users, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { CinematicMesh } from "@/components/ui/CinematicMesh";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

type Metric = {
  category: string;
  score: number;
  insights: string[];
  actionPlan: string;
};

type DiagnosticReport = {
  executiveSummary: string;
  metrics: Metric[];
  strategicAdvantage: string;
};

export default function AnalyzerPage() {
  const [formData, setFormData] = useState({
    linkedin: "",
    website: "",
    scenario: ""
  });
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<DiagnosticReport | null>(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    const lastAnalyze = localStorage.getItem("analyzer_submit_time");
    if (lastAnalyze && Date.now() - parseInt(lastAnalyze) < 30000) {
      setError("Please wait 30 seconds before running another diagnostic.");
      return;
    }

    if (!formData.linkedin && !formData.website && !formData.scenario) {
      setError("Please provide at least one input for the AI to analyze.");
      return;
    }

    setLoading(true);
    setError("");
    setReport(null);

    try {
      localStorage.setItem("analyzer_submit_time", Date.now().toString());
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to generate analysis.");
      }

      const data = await res.json();
      setReport(data);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const getIconForCategory = (category: string) => {
    if (category.includes("Training") || category.includes("Execution")) return <Target className="w-5 h-5 text-brand-accent" />;
    if (category.includes("Change") || category.includes("Sales")) return <TrendingUp className="w-5 h-5 text-brand-accent" />;
    if (category.includes("Transformation") || category.includes("Leadership")) return <Sparkles className="w-5 h-5 text-brand-accent" />;
    if (category.includes("Motivation") || category.includes("Culture")) return <Users className="w-5 h-5 text-brand-accent" />;
    if (category.includes("Safety")) return <ShieldCheck className="w-5 h-5 text-brand-accent" />;
    return <AlertTriangle className="w-5 h-5 text-brand-accent" />;
  };

  return (
    <main className="flex min-h-screen flex-col bg-brand-foundation text-brand-ivory relative selection:bg-brand-accent selection:text-brand-foundation">
      <Navbar />

      {/* Cinematic Ambient Mesh & Grain (GetLayers.ai Signature) */}
      <CinematicMesh intensity="medium" showNoise={true} className="fixed z-0" />

      {/* Ambient Grid overlay */}
      <div className="fixed inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none z-0 opacity-30" />

      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10 pt-40 pb-32 flex-grow">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(252,163,17,0.15)]">
            <span className="relative flex h-2 w-2 mr-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent" />
            </span>
            <span className="text-white/90 text-xs font-bold tracking-[0.2em] uppercase">
              AI Diagnostic Telemetry
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-white tracking-tight leading-[1.05] mb-6">
            Enterprise Organisational <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent via-amber-200 to-brand-accent drop-shadow-[0_0_35px_rgba(252,163,17,0.3)]">
              Diagnostic Engine.
            </span>
          </h1>
          <p className="text-gray-300 text-base md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Instantly diagnose latent cultural bottlenecks, managerial capability gaps, and execution friction across your organization.
          </p>
        </motion.div>

        {/* Dynamic Layout: Form vs Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Input Form Column */}
          <motion.div
            layout
            className={`transition-all duration-700 ease-in-out ${
              report ? "lg:col-span-4" : "lg:col-start-3 lg:col-span-8"
            }`}
          >
            <SpotlightCard
              spotlightColor="rgba(252, 163, 17, 0.22)"
              enableTilt={false}
              className="p-8 relative overflow-hidden"
            >
              {/* Animated scanning radar beam if loading */}
              {loading && (
                <motion.div
                  initial={{ top: "-10%" }}
                  animate={{ top: "110%" }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent z-20 pointer-events-none opacity-80"
                />
              )}

              <h2 className="text-xl font-display font-bold text-white mb-6 flex items-center justify-between">
                <span className="flex items-center gap-2.5">
                  <Search className="w-5 h-5 text-brand-accent" />
                  Telemetry Parameters
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent px-2 py-0.5 rounded-full bg-brand-accent/10 border border-brand-accent/20">
                  Real-time
                </span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-2 uppercase tracking-wider">
                    Company LinkedIn URL
                  </label>
                  <input
                    type="text"
                    value={formData.linkedin}
                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                    placeholder="https://linkedin.com/company/..."
                    className="w-full bg-black/30 border border-white/10 rounded-2xl px-4 py-3.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-2 uppercase tracking-wider">
                    Company Website URL
                  </label>
                  <input
                    type="text"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    placeholder="https://yourcompany.com"
                    className="w-full bg-black/30 border border-white/10 rounded-2xl px-4 py-3.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-2 uppercase tracking-wider">
                    Operational Context or Specific Challenges
                  </label>
                  <textarea
                    value={formData.scenario}
                    onChange={(e) => setFormData({ ...formData, scenario: e.target.value })}
                    placeholder="E.g., Recent mergers, siloed cross-functional handoffs, leadership transition, frontline sales underperformance..."
                    rows={4}
                    className="w-full bg-black/30 border border-white/10 rounded-2xl px-4 py-3.5 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all resize-none"
                  />
                </div>

                {error && (
                  <div className="bg-red-500/10 border border-red-500/40 text-red-300 px-4 py-3 rounded-xl text-xs flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brand-accent text-brand-foundation font-display font-black text-sm uppercase tracking-widest rounded-2xl px-6 py-4 hover:bg-white hover:text-brand-foundation hover:shadow-[0_0_30px_rgba(252,163,17,0.4)] transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-brand-foundation" />
                      Analyzing Telemetry...
                    </>
                  ) : (
                    <>
                      Run Diagnostic Audit
                      <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </SpotlightCard>
          </motion.div>

          {/* Interactive Dashboard Results Column */}
          <AnimatePresence>
            {report && (
              <motion.div
                initial={{ opacity: 0, x: 40, scale: 0.96 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, type: "spring", bounce: 0.2 }}
                className="lg:col-span-8 flex flex-col gap-6"
              >
                {/* Executive Summary Card */}
                <SpotlightCard
                  spotlightColor="rgba(252, 163, 17, 0.2)"
                  className="p-8 border-brand-accent/40 shadow-[0_0_40px_rgba(252,163,17,0.12)]"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-display font-bold text-white flex items-center gap-2.5">
                      <Target className="w-5 h-5 text-brand-accent" />
                      Executive Diagnostic Synthesis
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent px-3 py-1 rounded-full bg-brand-accent/15 border border-brand-accent/30">
                      Audit Complete
                    </span>
                  </div>
                  <p className="text-gray-200 text-sm md:text-base leading-relaxed font-light">
                    {report.executiveSummary}
                  </p>
                </SpotlightCard>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {report.metrics.map((metric, idx) => (
                    <SpotlightCard
                      key={idx}
                      spotlightColor="rgba(252, 163, 17, 0.2)"
                      className="p-6 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex justify-between items-start mb-5">
                          <div className="w-10 h-10 rounded-xl bg-brand-accent/15 border border-brand-accent/30 flex items-center justify-center text-brand-accent">
                            {getIconForCategory(metric.category)}
                          </div>
                          <div className="text-right">
                            <span className="text-3xl font-display font-black text-white">
                              {metric.score}
                            </span>
                            <span className="text-brand-accent font-bold text-sm">/100</span>
                            <p className="text-[9px] text-gray-400 uppercase tracking-widest mt-0.5">
                              Urgency Index
                            </p>
                          </div>
                        </div>

                        <h4 className="text-base font-display font-bold text-white mb-3">
                          {metric.category}
                        </h4>

                        <div className="space-y-2 mb-6">
                          {metric.insights.map((insight, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-1.5 flex-shrink-0" />
                              <p className="text-gray-300 text-xs leading-relaxed">{insight}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 border-t border-white/10 mt-auto">
                        <span className="text-[10px] uppercase tracking-widest text-brand-accent font-bold mb-1.5 block">
                          Recommended Action Plan
                        </span>
                        <p className="text-white text-xs font-medium leading-snug">
                          {metric.actionPlan}
                        </p>
                      </div>
                    </SpotlightCard>
                  ))}
                </div>

                {/* Strategic Advantage & CTA Footer */}
                <div className="p-8 rounded-3xl bg-gradient-to-r from-brand-accent/15 via-white/[0.04] to-transparent border border-brand-accent/30 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <Sparkles className="w-6 h-6 text-brand-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-display font-bold text-lg mb-1">
                        The DhruvSatya Strategic Advantage
                      </h4>
                      <p className="text-gray-300 text-xs md:text-sm leading-relaxed max-w-xl">
                        {report.strategicAdvantage}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/contact?audit=${encodeURIComponent("Custom Diagnostic Followup")}`}
                    className="w-full md:w-auto px-6 py-3 rounded-full bg-brand-accent text-brand-foundation text-xs font-black uppercase tracking-wider hover:bg-white hover:text-brand-foundation transition-all shadow-lg flex-shrink-0 text-center"
                  >
                    Discuss With Advisor
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <Footer />
    </main>
  );
}
