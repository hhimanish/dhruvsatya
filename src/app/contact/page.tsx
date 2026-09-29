"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    intent: "leadership",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      
      <section className="pt-32 pb-20 bg-brand-foundation text-white">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Context & Info */}
            <div>
              <h1 className="text-4xl md:text-6xl font-display font-medium mb-6">
                Let's talk about what needs to change.
              </h1>
              <p className="text-xl text-gray-300 mb-12 max-w-md leading-relaxed">
                Whether you're looking to transform your organization's culture, boost leadership capability, or drive operational excellence, we're here to help.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="p-3 bg-white/5 rounded-lg mr-4">
                    <MapPin className="text-brand-accent w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Headquarters</h4>
                    <p className="text-gray-400">27-A, Gariahat Road (South)<br />Dhakuria, Kolkata - 700031</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-white/5 rounded-lg mr-4">
                    <Phone className="text-brand-accent w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Phone</h4>
                    <p className="text-gray-400">+91 9830426007<br />033 40004753</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-white/5 rounded-lg mr-4">
                    <Mail className="text-brand-accent w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-1">Email</h4>
                    <p className="text-gray-400">schatterjee@thecpt.co.in</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Smart Form */}
            <div className="bg-white text-gray-900 rounded-2xl p-8 md:p-10 shadow-2xl">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h3 className="text-2xl font-display font-medium text-brand-foundation mb-4">Request Received</h3>
                  <p className="text-gray-600">
                    Thank you for reaching out. A senior consultant will contact you shortly to discuss your transformation journey.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-display font-medium text-brand-foundation mb-6">
                    Request a Consultation
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input 
                        required
                        type="text" 
                        id="name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-colors text-gray-900"
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Work Email</label>
                        <input 
                          required
                          type="email" 
                          id="email"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-colors text-gray-900"
                          value={formState.email}
                          onChange={(e) => setFormState({...formState, email: e.target.value})}
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Organization</label>
                        <input 
                          type="text" 
                          id="company"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-colors text-gray-900"
                          value={formState.company}
                          onChange={(e) => setFormState({...formState, company: e.target.value})}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="intent" className="block text-sm font-medium text-gray-700 mb-1">Primary Area of Interest</label>
                      <select 
                        id="intent"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-colors bg-white"
                        value={formState.intent}
                        onChange={(e) => setFormState({...formState, intent: e.target.value})}
                      >
                        <option value="leadership">Leadership Development</option>
                        <option value="culture">Organizational Culture</option>
                        <option value="sales">Sales Excellence</option>
                        <option value="institutional">Institutional Transformation</option>
                        <option value="coaching">Executive Coaching</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Briefly describe your challenge</label>
                      <textarea 
                        id="message"
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-accent focus:ring-1 focus:ring-brand-accent outline-none transition-colors resize-none"
                        value={formState.message}
                        onChange={(e) => setFormState({...formState, message: e.target.value})}
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center px-8 py-4 bg-brand-foundation text-white font-medium rounded-lg hover:bg-brand-accent transition-colors disabled:opacity-70"
                  >
                    {isSubmitting ? "SUBMITTING..." : "SUBMIT REQUEST"}
                    {!isSubmitting && <ArrowRight className="w-5 h-5 ml-2" />}
                  </button>
                  <p className="text-xs text-gray-500 text-center mt-4">
                    Your information is secure and will never be shared with third parties.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
