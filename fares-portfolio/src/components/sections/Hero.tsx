"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { GithubIcon, LinkedinIcon, EmailIcon } from "@/components/ui/Icons";
import FaresSignature from "@/components/ui/FaresSignature";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a master timeline that delays its visible animations until the preloader finishes sliding up
      const tl = gsap.timeline({ delay: 2.0 });

      // 1. Name letters staggered typing animation
      tl.fromTo(".name-char",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, stagger: 0.05, duration: 0.4, ease: "power2.out" },
        0 // starts at delay + 0
      );

      // 2. Subtitle words staggered reveal
      tl.fromTo(".subtitle-word",
        { opacity: 0, y: "100%" },
        { opacity: 1, y: "0%", stagger: 0.04, duration: 0.6, ease: "power3.out" },
        0.4
      );

      // 4. CTA Button and Social Icons fade-in
      tl.fromTo(".hero-animate-in",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: "power3.out" },
        1.0
      );

      // 5. Scroll indicator fade-in
      tl.fromTo(".hero-scroll-indicator",
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.8 },
        1.6
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const splitLetters = (text: string) => {
    return text.split("").map((char, index) => (
      <span key={index} className="name-char inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  const splitWords = (text: string) => {
    return text.split(" ").map((word, index) => (
      <span key={index} className="inline-block overflow-hidden mr-2">
        <span className="subtitle-word inline-block">
          {word}
        </span>
      </span>
    ));
  };

  return (
    <section ref={containerRef} id="hero" className="relative w-full h-screen flex flex-col overflow-hidden bg-[#050510]">
      {/* Background Image with parallax-like overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero_bg.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050510]/30 via-[#050510]/50 to-[#050510]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex">
        <div className="w-full max-w-[92%] mx-auto flex flex-col md:flex-row h-full">

          {/* Left Column: Signature + Availability + Social Icons */}
          <div className="flex flex-col justify-center md:w-[40%] pt-24 md:pt-0 relative z-20">
            {/* Handwritten Signature Component */}
            <div className="relative w-fit mb-6">
              <FaresSignature className="w-[220px] h-[180px] md:w-[320px] md:h-[260px]" />
            </div>

            {/* Availability Badge */}
            <div className="hero-animate-in mb-8 flex flex-col text-left font-mono text-[11px] md:text-xs leading-relaxed text-white/70 uppercase tracking-widest">
              <span>Available for</span>
              <span className="text-white font-bold">work &amp; freelance</span>
            </div>

            {/* Social Icons */}
            <div className="hero-animate-in hidden md:flex h-16 gap-4 items-end rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 px-4 pb-3 shadow-2xl w-fit">
              <a target="_blank" href="https://github.com/fares-ma" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg">
                <GithubIcon className="w-6 h-6 text-white" />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/fares-mohamed-dotnet/" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg">
                <LinkedinIcon className="w-6 h-6 text-white" />
              </a>
              <a href="mailto:farsagwa6@gmail.com" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg">
                <EmailIcon className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>

          {/* Right Column: Name + Subtitle + CV */}
          <div className="flex flex-col justify-center md:items-end md:text-right md:w-[60%] mt-12 md:mt-0 pt-16 lg:pt-32">
            {/* Large Name */}
            <h1 className="font-heading font-extrabold uppercase leading-[0.85] text-white">
              <div className="block overflow-hidden pb-2 text-[16vw] md:text-[10vw] lg:text-[8vw] tracking-tighter">
                {splitLetters("Fares")}
              </div>
              <div className="block overflow-hidden pb-2 text-[16vw] md:text-[10vw] lg:text-[8vw] tracking-tighter">
                {splitLetters("Mohamed")}
              </div>
            </h1>

            {/* Subtitle */}
            <div className="mt-6 md:mt-8 flex flex-col md:items-end">
              <p className="text-lg md:text-2xl font-medium text-white/80 leading-relaxed">
                {splitWords("Backend .NET Developer")}
                <br />
                {splitWords("based in Egypt")}
              </p>
            </div>

            {/* Download CV Button */}
            <div className="hero-animate-in mt-8 md:mt-10">
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group overflow-hidden rounded-full p-[2px] inline-block"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-accent to-purple-500 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative bg-[#050510] px-8 py-4 rounded-full flex items-center gap-2">
                  <strong className="tracking-wider text-white text-sm">DOWNLOAD CV</strong>
                </div>
              </a>
            </div>

            {/* Mobile Social Icons */}
            <div className="hero-animate-in flex md:hidden mt-10 justify-center w-full gap-4">
              <a target="_blank" href="https://github.com/fares-ma" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/10 flex items-center justify-center">
                <GithubIcon className="w-5 h-5 text-white" />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/fares-mohamed-dotnet/" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/10 flex items-center justify-center">
                <LinkedinIcon className="w-5 h-5 text-white" />
              </a>
              <a href="mailto:farsagwa6@gmail.com" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/10 flex items-center justify-center">
                <EmailIcon className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 select-none z-10 text-white/50">
        <span className="font-mono text-xs uppercase tracking-widest">scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
