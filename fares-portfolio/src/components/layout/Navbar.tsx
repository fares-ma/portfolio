"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#works" },
  { name: "Achievements", href: "#achievements" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Toggle scrolled state on scroll to transition header elements
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      gsap.to("#navbar-overlay", { clipPath: "inset(0 0 0% 0)", duration: 0.8, ease: "power4.inOut" });
      gsap.fromTo(
        ".nav-item-text",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.08, delay: 0.3, ease: "power3.out" }
      );
    } else {
      document.body.style.overflow = "";
      gsap.to("#navbar-overlay", { clipPath: "inset(0 0 100% 0)", duration: 0.8, ease: "power4.inOut" });
    }
  }, [isOpen]);

  return (
    <>
      {/* Top Header Bar */}
      <header
        ref={headerRef}
        className="fixed top-0 left-0 w-full px-6 md:px-10 pt-6 md:pt-7 z-[5000] flex justify-between items-start transition-transform duration-500 will-change-transform"
      >
        {/* Left: Name */}
        <div className={`relative z-[7001] transition-all duration-500 transform ${scrolled ? "opacity-0 -translate-y-10 pointer-events-none" : "opacity-100 translate-y-0"}`}>
          <h2 className="text-2xl md:text-4xl font-extrabold font-heading text-white uppercase tracking-wider select-none">
            Fares Mohamed
          </h2>
        </div>

        {/* Right Section: Nav Links & Hamburger Menu */}
        <div className="flex items-center gap-6 xl:gap-10 relative z-[7001]">
          {/* Nav Links (desktop) */}
          <div className={`hidden lg:flex gap-4 xl:gap-8 items-center transition-all duration-500 transform ${scrolled ? "opacity-0 -translate-y-10 pointer-events-none" : "opacity-100 translate-y-0"}`}>
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="group relative text-white/90 hover:text-accent text-lg xl:text-xl font-bold uppercase transition-colors"
              >
                <span className="overflow-hidden h-[1.2em] block leading-[1.2em]">
                  <span className="block transition-transform duration-300 group-hover:-translate-y-full font-heading">
                    {link.name}{index < navLinks.length - 1 ? "," : ""}
                  </span>
                  <span className="block transition-transform duration-300 group-hover:-translate-y-full text-accent font-heading">
                    {link.name}{index < navLinks.length - 1 ? "," : ""}
                  </span>
                </span>
              </Link>
            ))}
          </div>

          {/* Hamburger Menu (Always Visible) */}
          <button
            className="relative flex flex-col justify-center items-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`block w-5 h-[2px] bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[4px]" : "-translate-y-1"}`} />
            <span className={`block w-5 h-[2px] bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[4px]" : "translate-y-1"}`} />
          </button>
        </div>
      </header>

      {/* Fullscreen Overlay Menu */}
      <div
        id="navbar-overlay"
        className="fixed inset-0 z-[6000] bg-[#050510] flex flex-col justify-center items-center"
        style={{ clipPath: "inset(0 0 100% 0)" }}
      >
        <div className="flex flex-col gap-6 text-center">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="overflow-hidden block"
            >
              <span className="nav-item-text block text-5xl md:text-7xl font-extrabold font-heading uppercase text-white hover:text-accent transition-colors">
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
