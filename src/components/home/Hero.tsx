"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, X, Shield, Award, Sparkles, Volume2, VolumeX, Maximize2 } from "lucide-react";
import { gsap } from "gsap";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaContainerRef = useRef<HTMLDivElement>(null);
  const primaryBtnRef = useRef<HTMLAnchorElement>(null);
  const secondaryBtnRef = useRef<HTMLButtonElement>(null);
  const pedigreeRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const videoZoneRef = useRef<HTMLDivElement>(null);

  // States
  const [modalOpen, setModalOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [cursorMode, setCursorMode] = useState<"default" | "video" | "hidden">("default");
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // 1. Initial Device & Accessibility Check
  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    setIsTouchDevice(isTouch);
  }, []);

  // 2. GSAP Master Split-Text Mask Reveal Timeline
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      // Instant reveal for reduced-motion users
      if (videoRef.current) gsap.set(videoRef.current, { opacity: 1, scale: 1 });
      const words = headlineRef.current?.querySelectorAll(".word-inner");
      if (words) gsap.set(words, { yPercent: 0, opacity: 1 });
      gsap.set(
        [
          eyebrowRef.current,
          subheadlineRef.current,
          ctaContainerRef.current,
          pedigreeRef.current,
        ],
        { opacity: 1, y: 0 }
      );
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Step 1: Fade and scale background video
      if (videoRef.current) {
        tl.fromTo(
          videoRef.current,
          { scale: 1.08, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.8, ease: "power2.out" },
          0
        );
      }

      // Step 2: Slide each .word-inner upward from yPercent: 115, rotateZ: 2, opacity: 0
      const words = headlineRef.current?.querySelectorAll(".word-inner");
      if (words && words.length > 0) {
        tl.fromTo(
          words,
          { yPercent: 115, rotateZ: 2, opacity: 0 },
          { yPercent: 0, rotateZ: 0, opacity: 1, duration: 1.05, stagger: 0.07 },
          0.35
        );
      }

      // Step 3: Stagger-reveal eyebrow pill, subheadline paragraph, CTA buttons, and bottom pedigree bar
      tl.fromTo(
        [
          eyebrowRef.current,
          subheadlineRef.current,
          ctaContainerRef.current,
          pedigreeRef.current,
        ],
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: "power3.out" },
        "-=0.6"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // 3. Custom Morphing Cursor Tracking with gsap.quickTo
  useEffect(() => {
    if (isTouchDevice || !cursorRef.current) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const cursor = cursorRef.current;
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.22, ease: "power3.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.22, ease: "power3.out" });

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isTouchDevice]);

  // Cursor Mode Transitions
  useEffect(() => {
    if (isTouchDevice || !cursorRef.current) return;
    const cursor = cursorRef.current;

    if (cursorMode === "hidden") {
      gsap.to(cursor, { scale: 0, opacity: 0, duration: 0.2, ease: "power2.out" });
    } else if (cursorMode === "video") {
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
        width: 128,
        height: 128,
        duration: 0.35,
        ease: "power3.out",
      });
    } else {
      // Default dot state
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
        width: 12,
        height: 12,
        duration: 0.25,
        ease: "power2.out",
      });
    }
  }, [cursorMode, isTouchDevice]);

  // 4. Magnetic Button Physics
  const setupMagnetic = useCallback((element: HTMLElement | null) => {
    if (!element || isTouchDevice) return () => {};

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * 0.25;
      const deltaY = (e.clientY - centerY) * 0.25;
      gsap.to(element, { x: deltaX, y: deltaY, duration: 0.35, ease: "power3.out" });
    };

    const handleMouseLeave = () => {
      gsap.to(element, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.3)" });
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isTouchDevice]);

  useEffect(() => {
    const cleanPrimary = setupMagnetic(primaryBtnRef.current);
    const cleanSecondary = setupMagnetic(secondaryBtnRef.current);
    return () => {
      cleanPrimary();
      cleanSecondary();
    };
  }, [setupMagnetic]);

  // ESC key listener for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalOpen(false);
    };
    if (modalOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalOpen]);

  return (
    <>
      {/* Custom Morphing Cursor Element (Hidden on Touch & Motion-Sensitive) */}
      {!isTouchDevice && (
        <div
          ref={cursorRef}
          id="custom-cursor"
          className="pointer-events-none fixed top-0 left-0 z-[120] -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center text-center select-none"
          style={{
            width: 12,
            height: 12,
            backgroundColor: cursorMode === "video" ? "rgba(11, 15, 23, 0.75)" : "#D4AF37",
            backdropFilter: cursorMode === "video" ? "blur(14px)" : "none",
            border: cursorMode === "video" ? "1px solid rgba(212, 175, 55, 0.6)" : "none",
            boxShadow:
              cursorMode === "video"
                ? "0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(212, 175, 55, 0.25)"
                : "0 0 15px rgba(212, 175, 55, 0.6)",
          }}
        >
          {cursorMode === "video" && (
            <div className="flex flex-col items-center justify-center px-2">
              <Play className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37] mb-1 animate-pulse" />
              <span className="text-[9px] font-black uppercase tracking-widest text-[#F8F6F0] leading-tight">
                WATCH<br />KEYNOTE REEL
              </span>
            </div>
          )}
        </div>
      )}

      {/* Main Full-Viewport Hero Container */}
      <section
        ref={sectionRef}
        className="relative min-h-screen w-full overflow-hidden flex flex-col justify-between bg-[#0B0F17] text-[#F8F6F0] pt-28 pb-6 select-none"
      >
        {/* ========================================================= */}
        {/* ATMOSPHERIC VIDEO BACKGROUND & MULTI-STAGE VIGNETTE       */}
        {/* ========================================================= */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* HTML5 Video with Royalty-Free Executive Keynote Footage */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            poster="/images/audience.jpg"
            className="w-full h-full object-cover object-center will-change-transform opacity-0 scale-105"
          >
            <source
              src="https://upload.wikimedia.org/wikipedia/commons/transcoded/9/9a/WMEC2019_presentation_by_Robin_Owain.webm/WMEC2019_presentation_by_Robin_Owain.webm.480p.vp9.webm"
              type="video/webm"
            />
            <source
              src="https://raw.githubusercontent.com/bower-media-samples/big-buck-bunny-480p-30s/master/video.mp4"
              type="video/mp4"
            />
          </video>

          {/* Fallback & Atmospheric Image Layer */}
          <div className="absolute inset-0 z-0 opacity-25 mix-blend-luminosity">
            <Image
              src="/images/audience.jpg"
              alt="DhruvSatya Executive Transformation Workshop"
              fill
              sizes="100vw"
              quality={70}
              className="object-cover object-center"
              priority
            />
          </div>

          {/* DUAL-LAYER GRADIENT MASK (Tony Robbins Multi-Stage Scrim) */}
          {/* Layer 1: Horizontal Directional Scrim (Left 55% Solid Legibility, Right 45% Ambient Showcase) */}
          <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,#0B0F17_0%,rgba(11,15,23,0.95)_45%,rgba(11,15,23,0.70)_65%,rgba(11,15,23,0.30)_100%)]" />

          {/* Layer 2: Bottom Floor Fade */}
          <div className="absolute inset-0 z-10 bg-[linear-gradient(0deg,#0B0F17_0%,rgba(11,15,23,0.8)_15%,transparent_35%)]" />

          {/* Layer 3: Top Header Scrim */}
          <div className="absolute top-0 left-0 right-0 h-40 z-10 bg-gradient-to-b from-[#0B0F17] via-[#0B0F17]/70 to-transparent" />

          {/* Radial Warmth / Atmospheric Golden Glow */}
          <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-[#D4AF37]/10 blur-[140px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[#0095DB]/10 blur-[150px] pointer-events-none" />
        </div>

        {/* ========================================================= */}
        {/* HERO CONTENT GRID (Left 60% Column | Right 40% Video Zone) */}
        {/* ========================================================= */}
        <div className="container mx-auto px-6 md:px-12 relative z-20 flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* LEFT 60% COLUMN: EDITORIAL MANIFESTO */}
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col items-start text-left max-w-4xl">
              
              {/* Eyebrow Authority Badge */}
              <div
                ref={eyebrowRef}
                className="mb-6 opacity-0 will-change-transform"
                onMouseEnter={() => setCursorMode("hidden")}
                onMouseLeave={() => setCursorMode("default")}
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/[0.06] backdrop-blur-md border border-white/15 shadow-[0_4px_20px_rgba(0,0,0,0.25)]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] mr-3 animate-pulse shadow-[0_0_10px_rgba(212,175,55,0.9)] flex-shrink-0" />
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#F8F6F0]/90">
                    25+ YEARS OF LEGACY • 140+ CORPORATIONS • 40+ PREMIER INSTITUTIONS
                  </span>
                </div>
              </div>

              {/* Stacked Editorial Manifesto Headline (Robin Sharma Style) */}
              <h1
                ref={headlineRef}
                className="font-display font-extrabold text-[10vw] sm:text-5xl md:text-6xl lg:text-[4.75rem] xl:text-[5.5rem] tracking-[-0.03em] leading-[1.04] uppercase mb-6 sm:mb-8"
              >
                {/* Line 1: REINVENT LEADERSHIP. */}
                <div className="block overflow-hidden pb-1">
                  <span className="inline-block overflow-hidden mr-3 md:mr-4">
                    <span className="word-inner inline-block text-[#F8F6F0] will-change-transform">
                      REINVENT
                    </span>
                  </span>
                  <span className="inline-block overflow-hidden">
                    <span className="word-inner inline-block text-[#F8F6F0] will-change-transform">
                      LEADERSHIP.
                    </span>
                  </span>
                </div>

                {/* Line 2: UNLOCK HUMAN POTENTIAL. */}
                <div className="block overflow-hidden pb-1">
                  <span className="inline-block overflow-hidden mr-3 md:mr-4">
                    <span className="word-inner inline-block text-[#F8F6F0] will-change-transform">
                      UNLOCK
                    </span>
                  </span>
                  <span className="inline-block overflow-hidden mr-3 md:mr-4">
                    <span className="word-inner inline-block text-[#F8F6F0] will-change-transform">
                      HUMAN
                    </span>
                  </span>
                  <span className="inline-block overflow-hidden">
                    <span className="word-inner inline-block text-[#F8F6F0] will-change-transform">
                      POTENTIAL.
                    </span>
                  </span>
                </div>

                {/* Line 3: GENERATE BREAKTHROUGHS. (Metallic Gold Gradient) */}
                <div className="block overflow-hidden pb-1">
                  <span className="inline-block overflow-hidden mr-3 md:mr-4">
                    <span className="word-inner inline-block bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA771C] bg-clip-text text-transparent will-change-transform drop-shadow-[0_4px_25px_rgba(212,175,55,0.35)]">
                      GENERATE
                    </span>
                  </span>
                  <span className="inline-block overflow-hidden">
                    <span className="word-inner inline-block bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#AA771C] bg-clip-text text-transparent will-change-transform drop-shadow-[0_4px_25px_rgba(212,175,55,0.35)]">
                      BREAKTHROUGHS.
                    </span>
                  </span>
                </div>
              </h1>

              {/* Editorial Subheadline */}
              <p
                ref={subheadlineRef}
                className="text-base sm:text-lg md:text-xl text-[#94A3B8] font-normal leading-relaxed max-w-2xl mb-10 opacity-0 will-change-transform"
              >
                Where engineering rigor meets deep human transformation. Founded by{" "}
                <span className="text-[#F8F6F0] font-semibold">Soumitra Chatterjee</span>, DhruvSatya (The CPT) partners with Fortune 500 enterprises, premier academic institutions, and visionary leaders to architect measurable, lasting excellence.
              </p>

              {/* Dual-Intent Self-Segmentation CTA Split */}
              <div
                ref={ctaContainerRef}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full sm:w-auto opacity-0 will-change-transform"
              >
                {/* Primary CTA (Corporate HR / L&D Entry) */}
                <Link
                  ref={primaryBtnRef}
                  href="/solutions/organisations"
                  onMouseEnter={() => setCursorMode("hidden")}
                  onMouseLeave={() => setCursorMode("default")}
                  className="group relative inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F59E0B] text-[#0B0F17] font-display font-black text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:shadow-[0_0_35px_rgba(212,175,55,0.5)] transition-all duration-300 will-change-transform"
                >
                  <span className="flex items-center">
                    Transform Your Organization
                    <ArrowRight className="w-4 h-4 ml-2.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </span>
                </Link>

                {/* Secondary CTA (Individual / Personal Mastery Entry) */}
                <button
                  ref={secondaryBtnRef}
                  onClick={() => setModalOpen(true)}
                  onMouseEnter={() => setCursorMode("hidden")}
                  onMouseLeave={() => setCursorMode("default")}
                  className="group inline-flex items-center justify-center px-8 py-4 rounded-xl backdrop-blur-md bg-white/[0.06] border border-white/20 text-[#F8F6F0] hover:bg-white/[0.12] hover:border-[#D4AF37]/60 transition-all duration-300 text-xs sm:text-sm font-bold tracking-wider uppercase will-change-transform shadow-lg cursor-pointer"
                >
                  <span className="w-6 h-6 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center mr-3 group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-[#0B0F17] transition-all">
                    <Play className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37] group-hover:text-[#0B0F17] group-hover:fill-[#0B0F17]" />
                  </span>
                  Explore Personal Mastery
                </button>
              </div>

            </div>

            {/* RIGHT 40% COLUMN: INTERACTIVE VIDEO TRIGGER ZONE */}
            <div
              ref={videoZoneRef}
              onClick={() => setModalOpen(true)}
              onMouseEnter={() => setCursorMode("video")}
              onMouseLeave={() => setCursorMode("default")}
              className="lg:col-span-5 xl:col-span-4 h-72 sm:h-96 lg:h-[480px] w-full rounded-3xl relative flex flex-col justify-end p-6 sm:p-8 cursor-pointer group transition-all"
            >
              {/* Interactive Glassmorphic Border Card */}
              <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-[#D4AF37]/50 bg-white/[0.02] group-hover:bg-white/[0.06] backdrop-blur-sm transition-all duration-500 shadow-2xl" />

              {/* Ambient Live Stage Tag */}
              <div className="relative z-10 flex items-center justify-between mb-auto">
                <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-bold tracking-widest uppercase text-[#F8F6F0]">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping mr-2" />
                  Keynote Experience
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#D4AF37] group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-[#0B0F17] transition-all">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
              </div>

              {/* Bottom Card Copy */}
              <div className="relative z-10 pt-6">
                <div className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] mb-1">
                  Live Stage Archive
                </div>
                <h2 className="text-xl sm:text-2xl font-display font-bold text-[#F8F6F0] mb-2 leading-tight group-hover:text-[#D4AF37] transition-colors">
                  Inside the Transformation Arena
                </h2>
                <p className="text-xs text-[#94A3B8] leading-relaxed line-clamp-2">
                  Watch Soumitra Chatterjee deliver keynote breakthroughs on executive mindset, radical accountability, and organizational culture.
                </p>
                <div className="mt-4 flex items-center text-xs font-bold uppercase tracking-wider text-[#D4AF37] group-hover:translate-x-1 transition-transform">
                  <span>Watch Keynote Reel (3:45)</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================= */}
        {/* BOTTOM PEDIGREE BAR (Anchored at Hero Foot)               */}
        {/* ========================================================= */}
        <div
          ref={pedigreeRef}
          className="container mx-auto px-6 md:px-12 relative z-20 pt-8 opacity-0 will-change-transform"
        >
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="text-xs text-[#94A3B8] font-medium leading-relaxed max-w-4xl">
              <span className="text-[#D4AF37] font-bold uppercase tracking-wider mr-2">
                Proven Pedigree:
              </span>
              Led by{" "}
              <strong className="text-[#F8F6F0] font-semibold">Soumitra Chatterjee</strong>{" "}
              (B.Tech Jadavpur University • Landmark USA • Author of <em>Executive Reinvention</em> • Former GM/ED at J&J, Torrent & Vadilal)
            </div>

            {/* Scroll Indicator */}
            <div className="hidden lg:flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#94A3B8]/80">
              <span>Scroll to Explore</span>
              <div className="w-4 h-7 rounded-full border border-white/20 flex items-start justify-center p-1">
                <div className="w-1 h-2 rounded-full bg-[#D4AF37] animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* KEYNOTE REEL LIGHTBOX MODAL                               */}
      {/* ========================================================= */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-2xl transition-opacity animate-in fade-in duration-300"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl rounded-3xl overflow-hidden bg-[#0B0F17] border border-[#D4AF37]/40 shadow-[0_25px_70px_rgba(0,0,0,0.8)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0B0F17]">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#D4AF37]">
                  Keynote Presentation
                </span>
                <h3 className="text-lg font-display font-bold text-[#F8F6F0]">
                  Soumitra Chatterjee — Executive Reinvention & Personal Mastery
                </h3>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D4AF37] hover:text-[#0B0F17] text-[#F8F6F0] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0&controls=1&rel=0"
                title="Soumitra Chatterjee Keynote Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-[#0B0F17] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#94A3B8]">
                Over 600,000 lives and 600+ organizations impacted across India & globally.
              </div>
              <Link
                href="/contact"
                onClick={() => setModalOpen(false)}
                className="px-6 py-3 rounded-full bg-[#D4AF37] text-[#0B0F17] text-xs font-black tracking-wider uppercase hover:bg-white transition-colors"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Named export as requested
export const HeroSection = Hero;
