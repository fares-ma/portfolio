"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GithubIcon } from "@/components/ui/Icons";

const projects = [
  {
    title: "Intelligent Employment System (IES)",
    techString: "ASP.NET Core & Angular 17 & FastAPI & SQL Server",
    description: "AI-powered recruitment platform (Graduation Project). Led backend development using Clean Architecture, integrating a Python FastAPI microservice.",
    image: "/images/project_ies.png",
    tags: ["ASP.NET Core", "Clean Arch", "2024"],
    links: [
      { text: "GitHub Code", url: "https://github.com/fares-ma/Intelligent_Employment_System" },
      { text: "Live Demo", url: "https://ies.runasp.net/" },
      { text: "Demo Video", url: "https://drive.google.com/file/d/165EpkJJ71wBCNGEW0z68YcBueoEsuzwU/view" }
    ]
  },
  {
    title: "Fares Store API",
    techString: ".NET 10 & Redis & Stripe & EF Core & JWT",
    description: "Scalable e-commerce backend platform built applying SOLID principles. Features JWT authentication, product catalog, and Stripe integration.",
    image: "/images/project_fares_store.png",
    tags: [".NET 10", "Web API", "2024"],
    links: [
      { text: "GitHub Code", url: "https://github.com/fares-ma/Store.Fares" },
      { text: "Swagger UI", url: "http://faresstore.runasp.net/swagger/index.html" }
    ]
  },
  {
    title: "Articles Management API",
    techString: ".NET 10 & AWS S3 & Docker & xUnit",
    description: "Scalable RESTful API (Clean Architecture/N-Tier) for articles. Integrated JWT auth, global exception handling, and AWS S3.",
    image: "/images/project_articles.png",
    tags: [".NET 10", "AWS S3", "2023"],
    links: [
      { text: "GitHub Code", url: "https://github.com/fares-ma/Articles_API_Task_02.git" },
      { text: "Swagger UI", url: "http://faresarticles.runasp.net/swagger/index.html" }
    ]
  },
  {
    title: "Travel Booking System",
    techString: "ASP.NET Core 10 & MVC & ASP.NET Identity & xUnit",
    description: "Production-ready travel booking platform delivered to a freelance client. Engineered role-based access control (RBAC).",
    image: "/images/project_travel.png",
    tags: ["MVC", "Identity", "2023"],
    links: [
      { text: "GitHub Code", url: "https://github.com/fares-ma/TravelBookingSystem.git" },
      { text: "Live Demo", url: "http://farestravel.runasp.net/" }
    ]
  },
  {
    title: "Company Management System",
    techString: "ASP.NET Core MVC & EF Core & SQL Server",
    description: "Multi-role system (Admin/Manager/Staff) built with ASP.NET Core MVC featuring secure department/employee management.",
    image: "/images/project_company.png",
    tags: ["MVC", "SQL Server", "2022"],
    links: [
      { text: "GitHub Code", url: "https://github.com/fares-ma/Company.Fares" },
      { text: "Live Demo", url: "http://company-fares.runasp.net/Account/SignIn?ReturnUrl=%2F" }
    ]
  }
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef<HTMLSpanElement>(null);
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title mask
      gsap.from(".project-title-char", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        stagger: 0.04,
        duration: 0.8,
        ease: "power3.out",
      });

      // Description text
      gsap.from("#selected-works-text", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        opacity: 0,
        y: 30,
        duration: 1,
      });

      // Track active card to update the sticky index
      const cards = gsap.utils.toArray<HTMLElement>(".work-card");
      
      cards.forEach((card, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top 50%",
          end: "bottom 50%",
          onEnter: () => updateIndex(i + 1),
          onEnterBack: () => updateIndex(i + 1),
        });

        // Card appear animation
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
          y: 80,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      });

      function updateIndex(newIndex: number) {
        if (indexRef.current) {
          gsap.to(indexRef.current, {
            y: -20,
            opacity: 0,
            duration: 0.2,
            onComplete: () => {
              setActiveIndex(newIndex);
              gsap.fromTo(indexRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.2 });
            }
          });
        }
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="works" className="relative w-full px-[5%] sm:px-[3%] py-24 mb-20 bg-[#050510] text-white">
      {/* Header Area */}
      <div className="flex flex-col">
        <h3 className="font-heading text-5xl md:text-7xl font-extrabold uppercase leading-none text-white/90">
          {"Selected Projects /".split("").map((char, i) => (
            <span key={i} className="project-title-char inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h3>
        
        <div id="selected-works-text" className="grid grid-cols-1 sm:grid-cols-12 mt-12 gap-4 items-start sm:justify-end text-white/70">
          <p className="sm:col-span-4 text-center sm:text-left font-mono tracking-widest text-sm lg:col-start-2">
            ( {projects.length} PROJECTS )
          </p>
          <p className="text-xl sm:text-2xl font-medium sm:col-span-8 lg:col-span-7 text-balance sm:font-semibold">
            Featured applications that have been meticulously crafted with clean architecture and modern .NET technologies.
          </p>
        </div>
      </div>

      {/* Grid Layout for Sticky Number + Cards */}
      <div className="relative mt-12 flex flex-col md:grid md:grid-cols-12 lg:mt-[10%] gap-x-8">
        
        {/* Left Side: Sticky Giant Number */}
        <div className="hidden md:flex sticky top-32 col-span-5 h-fit w-full overflow-hidden text-[20vw] leading-[0.8] font-bold text-white/10 font-heading">
          <span className="relative -tracking-wider">0</span>
          <span ref={indexRef} className="relative -tracking-wider will-change-transform">
            {activeIndex}.
          </span>
        </div>

        {/* Right Side: Project Cards */}
        <aside className="relative col-span-full flex flex-col space-y-16 md:space-y-24 md:col-span-7 min-w-0">
          {projects.map((project, index) => (
            <div key={index} className="work-card relative min-w-0 w-full group">
              {/* Image Wrapper */}
              <div className="relative w-full aspect-square md:aspect-[4/3] overflow-hidden rounded-2xl bg-white/5 border border-white/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="min-w-0 overflow-hidden mt-6">
                <p className="text-base md:text-lg font-mono text-white/50 mb-3 break-words">
                  {project.techString}
                </p>
                
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <h3 className="text-3xl md:text-4xl font-bold font-heading uppercase text-white/90 group-hover:text-accent transition-colors break-words">
                    {project.title}
                  </h3>

                  {/* Pill Tags */}
                  <div className="flex flex-wrap gap-2 select-none shrink-0 sm:justify-end">
                    {project.tags.map((tag, tIndex) => (
                      <p
                        key={tag}
                        className={`rounded-full border px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm transition-all duration-500 ease-in-out
                          ${tIndex === project.tags.length - 1 
                            ? "border-accent bg-accent text-white" 
                            : "border-white/20 text-white/70 group-hover:border-white/50 group-hover:text-white"
                          }`}
                      >
                        {tag}
                      </p>
                    ))}
                  </div>
                </div>

                <p className="text-white/75 mt-4 max-w-xl text-lg md:text-xl leading-relaxed">
                  {project.description}
                </p>

                {/* Explicit Clickable Project Links */}
                <div className="flex flex-wrap gap-4 mt-6">
                  {project.links.map((link) => (
                    <a
                      key={link.text}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-accent hover:border-accent text-white transition-all duration-300 font-mono text-sm shadow-md"
                    >
                      {link.text.includes("GitHub") && <GithubIcon className="w-4 h-4" />}
                      {link.text} →
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </aside>

      </div>
    </section>
  );
}
