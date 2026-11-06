"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Search, Loader2, Sparkles, TrendingUp, AlertTriangle, Target, Users } from "lucide-react";
import Image from "next/image";

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

    // Mock rate limiting
    const lastAnalyze = localStorage.getItem("analyzer_submit_time");
    if (lastAnalyze && Date.now() - parseInt(lastAnalyze) < 60000) {
      setError("Please wait a minute before running another diagnostic to prevent rate limits.");
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
    if (category.includes("Training")) return <Target className="w-6 h-6 text-brand-accent" />;
    if (category.includes("Change")) return <TrendingUp className="w-6 h-6 text-brand-accent" />;
    if (category.includes("Transformation")) return <Sparkles className="w-6 h-6 text-brand-accent" />;
    if (category.includes("Motivation")) return <Users className="w-6 h-6 text-brand-accent" />;
    return <AlertTriangle className="w-6 h-6 text-brand-accent" />;
  };

  return (
    <main className="flex min-h-screen flex-col bg-brand-foundation relative">
      <Navbar />
      
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <Image 
          src="/images/Inspire.jpg"
          alt="Background"
          fill
          className="object-cover mix-blend-luminosity grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-foundation via-brand-foundation/90 to-brand-foundation" />
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-6xl relative z-10 pt-40 pb-32 flex-grow">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-brand-accent mr-2" />
            <span className="text-white/80 text-sm font-medium tracking-wider uppercase">AI Powered</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Organisational <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-yellow-200">Diagnostics</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light">
            Instantly analyze your organisational footprint to uncover hidden gaps in training, change management, and team motivation.
          </p>
        </motion.div>

        {/* Dynamic Layout: Form vs Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Input Form Column (Takes full width if no report, shifts left if report exists) */}
          <motion.div 
            layout
            className={`transition-all duration-700 ease-in-out ${report ? 'lg:col-span-4' : 'lg:col-start-3 lg:col-span-8'}`}
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-[2rem] p-8 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 blur-[50px] rounded-full group-hover:bg-brand-accent/20 transition-colors duration-700" />
              
              <h2 className="text-2xl font-display font-bold text-white mb-8 flex items-center">
                <Search className="w-5 h-5 text-brand-accent mr-3" />
                Input Parameters
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 uppercase tracking-wider">Company LinkedIn URL</label>
                  <input 
                    type="text" 
                    value={formData.linkedin}
                    onChange={(e) => setFormData({...formData, linkedin: e.target.value})}
                    placeholder="https://linkedin.com/company/..."
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 uppercase tracking-wider">Company Website URL</label>
                  <input 
                    type="text" 
                    value={formData.website}
                    onChange={(e) => setFormData({...formData, website: e.target.value})}
                    placeholder="https://yourcompany.com"
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 uppercase tracking-wider">Specific Scenario / Context</label>
                  <textarea 
                    value={formData.scenario}
                    onChange={(e) => setFormData({...formData, scenario: e.target.value})}
                    placeholder="Describe any current challenges, recent mergers, leadership changes, or cultural shifts..."
                    rows={4}
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-all resize-none"
                  />
                </div>

                {error && (
                  <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg text-sm flex items-start">
                    <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                    {error}
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-brand-accent text-brand-foundation font-bold text-lg rounded-xl px-6 py-4 hover:bg-white hover:shadow-[0_0_20px_rgba(252,163,17,0.4)] transition-all duration-300 disabled:opacity-50 flex items-center justify-center group"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      Run Diagnostics
                      <Sparkles className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Interactive Dashboard Results Column */}
          <AnimatePresence>
            {report && (
              <motion.div 
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                className="lg:col-span-8 flex flex-col gap-6"
              >
                {/* Executive Summary Card */}
                <div className="bg-white/5 backdrop-blur-xl rounded-[2rem] p-8 border border-brand-accent/30 shadow-[inset_0_0_20px_rgba(252,163,17,0.05)]">
                  <h3 className="text-xl font-display font-bold text-white mb-4 flex items-center">
                    <Target className="w-5 h-5 text-brand-accent mr-3" />
                    Executive Summary
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed font-light">
                    {report.executiveSummary}
                  </p>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {report.metrics.map((metric, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/10 hover:border-brand-accent/50 transition-colors group"
                    >
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center group-hover:bg-brand-accent/20 transition-colors">
                            {getIconForCategory(metric.category)}
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-3xl font-display font-black text-white">{metric.score}</span>
                          <span className="text-brand-accent font-bold">/100</span>
                          <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Urgency Score</p>
                        </div>
                      </div>
                      
                      <h4 className="text-xl font-bold text-white mb-4 group-hover:text-brand-accent transition-colors">
                        {metric.category}
                      </h4>
                      
                      <div className="space-y-3 mb-6">
                        {metric.insights.map((insight, i) => (
                          <div key={i} className="flex items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 mr-3 flex-shrink-0" />
                            <p className="text-gray-400 text-sm">{insight}</p>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-white/10 mt-auto">
                        <span className="text-xs uppercase tracking-widest text-brand-accent font-bold mb-2 block">Recommended Action Plan</span>
                        <p className="text-white/90 text-sm font-medium">{metric.actionPlan}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Strategic Advantage Footer */}
                <div className="bg-gradient-to-r from-brand-accent/10 to-transparent rounded-2xl p-6 border-l-4 border-brand-accent flex items-start">
                  <Sparkles className="w-6 h-6 text-brand-accent mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-bold mb-2">The DhruvSatya Strategic Advantage</h4>
                    <p className="text-gray-400">{report.strategicAdvantage}</p>
                  </div>
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
