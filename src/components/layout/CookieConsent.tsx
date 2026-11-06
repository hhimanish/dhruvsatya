"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("ds_cookie_consent");
    if (!hasConsented) {
      setTimeout(() => setIsVisible(true), 0);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("ds_cookie_consent", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-[5rem] md:bottom-0 left-0 right-0 z-[110] p-4 md:p-6 pointer-events-none"
        >
          <div className="max-w-4xl mx-auto bg-brand-foundation/90 backdrop-blur-lg border border-white/10 p-6 md:p-8 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 pointer-events-auto">
            <div className="flex-1">
              <h3 className="text-white font-display font-bold text-lg mb-2">We value your privacy</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                We use strictly necessary cookies to ensure our website functions perfectly. By clicking &quot;Accept&quot;, you agree to our use of cookies for analytics and a personalized enterprise experience in accordance with global data governance standards.
              </p>
            </div>
            <div className="flex gap-4 flex-shrink-0 w-full md:w-auto">
              <button
                onClick={handleAccept}
                className="flex-1 md:flex-none px-6 py-3 bg-brand-accent text-brand-foundation font-bold rounded-xl hover:bg-white transition-colors"
                aria-label="Accept Cookies"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
