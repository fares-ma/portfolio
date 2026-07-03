"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Photo reveal (slide up + zoom in slightly)
      gsap.fromTo(".about-photo-wrapper",
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-photo-wrapper",
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // 2. Main Title slide-up reveal (looks like writing)
      gsap.fromTo(".about-title-reveal",
        { y: "100%" },
        {
          y: "0%",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-title-container",
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // 3. Subtitle text opacity reveal on scroll
      gsap.fromTo(".about-subtitle",
        { opacity: 0.2, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".about-subtitle",
            start: "top 80%",
            end: "bottom 60%",
            scrub: 1
          }
        }
      );

      // 4. Description paragraph texts reveal on scroll
      gsap.fromTo(".about-desc-p",
        { opacity: 0.1, y: 15 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1.2,
          scrollTrigger: {
            trigger: ".about-desc-container",
            start: "top 85%",
            end: "bottom 65%",
            scrub: 1
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="about" className="w-full py-32 bg-[#050510] relative text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24 items-start">
        
        {/* Left Column (col-span-5): Rectangular Portrait Image */}
        <div className="md:col-span-5 flex justify-center md:sticky md:top-24">
          <div className="about-photo-wrapper relative w-full max-w-[450px] aspect-[3/4] overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
            <Image
              src="/images/profile.jpg"
              alt="Fares Mohamed Elsayed"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
            />
          </div>
        </div>

        {/* Right Column (col-span-7): Custom Text Layout */}
        <div className="md:col-span-7 flex flex-col">
          
          {/* Main Title (Large, Uppercase font sizes) */}
          <div className="about-title-container overflow-hidden mb-8">
            <h2 className="about-title-reveal text-4xl sm:text-6xl font-extrabold uppercase leading-[0.95] font-heading">
              .NET Developer, <br/>
              <span className="text-accent">Backend Engineer/</span>
            </h2>
          </div>

          {/* Subtitle (Medium size, semi-bold) */}
          <p className="about-subtitle text-xl sm:text-2xl font-medium text-white/90 leading-relaxed mb-12 select-none">
            With a passion for clean code and performance, I design and deploy scalable production-ready APIs, ensuring a seamless journey from database architecture to live deployment.
          </p>

          {/* Split layout: tag on left, descriptions on right */}
          <div className="about-desc-container grid grid-cols-1 sm:grid-cols-12 gap-6 items-start border-t border-white/10 pt-10">
            <div className="sm:col-span-3 font-mono text-accent text-sm tracking-widest uppercase py-1 select-none">
              ( About Me )
            </div>
            
            <div className="sm:col-span-9 flex flex-col gap-8 text-white/70 text-lg leading-relaxed select-none">
              <p className="about-desc-p">
                I specialize in building scalable web APIs using ASP.NET Core with Clean Architecture, CQRS, and EF Core. I focus on optimizing database queries and response times through caching with Redis and containerization with Docker.
              </p>
              <p className="about-desc-p">
                I graduated in 2026 with a GPA of 3.1, won 2nd place in the DEPI graduation competition, and love competitive programming. In my free time, I solve problem-sets on ICPC or share insights about backend architectures.
              </p>
            </div>
          </div>

          {/* Core Tech Stack Icons */}
          <div className="mt-12 border-t border-white/10 pt-10">
            <h4 className="font-mono text-accent text-sm mb-6 uppercase tracking-wider">( Tech Stack )</h4>
            <div className="flex flex-wrap gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://skillicons.dev/icons?i=cs,dotnet,docker,redis,aws,git,github,postman,vscode&theme=dark" 
                alt="Tech Stack"
                className="max-w-full drop-shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all duration-300 hover:drop-shadow-[0_0_25px_rgba(6,182,212,0.6)]" 
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
