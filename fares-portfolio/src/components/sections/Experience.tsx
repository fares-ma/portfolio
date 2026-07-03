"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const EXPERIENCES = [
  {
    title: "Back-end Developer",
    company: "FODWA · Remote",
    date: "Apr 2025 - Present",
    description: [
      "Develop and maintain RESTful APIs using ASP.NET Core Web API, ensuring high reliability and performance.",
      "Manage and optimize SQL Server databases, writing efficient queries and improving overall backend performance.",
      "Apply Clean Code principles and code review practices to maintain code quality and system stability."
    ]
  },
  {
    title: "Back-end Development Intern",
    company: "Link Development · Cairo",
    date: "Jun 2025 - Aug 2025",
    description: [
      "Developed production-ready features in a .NET 8 application following Clean Architecture patterns.",
      "Optimized database queries and implemented Redis caching strategies, reducing response latency by 25%.",
      "Increased code reusability by 40% through Generic Repository and Specification Pattern implementation.",
      "Achieved 85% unit test coverage using xUnit, Moq, and FluentAssertions in an Agile/Scrum environment."
    ]
  },
  {
    title: "Back-end Development Trainee",
    company: "ROUTE · Cairo",
    date: "Oct 2024 - May 2025",
    description: [
      "Mastered core .NET backend stack: C#, OOP, LINQ, EF Core, ASP.NET Core MVC, and RESTful API development.",
      "Built a multi-role university management system with Student and Admin dashboards with optimized queries.",
      "Collaborated in Agile team with regular code reviews, feedback sessions, and version control via Git."
    ]
  },
  {
    title: "Software Development Trainee",
    company: "Ministry of IT / DEPI · Egypt",
    date: "Jun 2025 - Dec 2025",
    description: [
      "Completed a government-sponsored Software Development track under DEPI, a national initiative by the Ministry of Communications and Information Technology to build job-ready technical talent.",
      "Won 2nd place out of all program tracks in the closing software development project competition, recognized at the Round 3 Graduation & Recognition Ceremony (Feb 2026)."
    ],
    link: { text: "View Certificates", url: "https://drive.google.com/drive/folders/1j5VQyK-s46uLoSUL83GOTaWrFY0HUsgV" }
  },
  {
    title: "Competitive Programmer",
    company: "ICPC",
    date: "Ongoing",
    description: [
      "Participated in ICPC, a global competitive programming contest, strengthening algorithmic problem-solving and data structures skills."
    ]
  }
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const boxes = gsap.utils.toArray(".career-info-box");
      boxes.forEach((box: any, i) => {
        gsap.fromTo(
          box,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: box,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="w-full py-32 bg-[#050510] relative text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-24 flex flex-col md:flex-row md:justify-between md:items-end gap-6 border-b border-white/10 pb-10">
          <div>
            <div className="font-mono text-accent text-sm tracking-widest uppercase mb-4 block">
              ( EXPERIENCE )
            </div>
            <h2 className="font-heading text-4xl md:text-6xl font-extrabold uppercase leading-none">
              Career &amp; <span className="text-accent/80">Experience</span>
            </h2>
          </div>
          <p className="text-white/60 text-lg md:text-xl max-w-md">
            Professional roles, internships, and certifications demonstrating growth in backend development.
          </p>
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative mt-20">
          
          {/* Main vertical line background */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 z-0" />
          
          {/* Main vertical line animated foreground */}
          <motion.div 
            className="absolute left-4 md:left-1/2 top-0 w-[2px] bg-accent -translate-x-1/2 origin-top z-0"
            style={{ height: lineHeight }}
          />

          <div className="flex flex-col gap-16 md:gap-24 relative z-10">
            {EXPERIENCES.map((exp, index) => {
              return (
                <div key={index} className="career-info-box relative group w-full">
                  
                  {/* Desktop Layout: grid-cols-[1fr_auto_1fr] */}
                  <div className="hidden md:grid grid-cols-[1fr_auto_1fr] gap-x-12 lg:gap-x-20 items-start w-full">
                    
                    {/* Left Column: Stacked Job Title, Company Name, and Date (Left Aligned) */}
                    <div className="text-left flex flex-col gap-2 pr-6 flex-1">
                      <h4 className="text-3xl lg:text-4xl font-extrabold text-white group-hover:text-accent transition-colors leading-tight">
                        {exp.title}
                      </h4>
                      <h5 className="text-xl lg:text-2xl font-bold text-white/70">
                        {exp.company}
                      </h5>
                      <span 
                        className="text-2xl lg:text-3xl font-bold text-accent mt-1"
                        style={{ fontFamily: "var(--font-fancy)" }}
                      >
                        {exp.date}
                      </span>
                    </div>

                    {/* Middle Column: Dot */}
                    <div className="flex justify-center pt-2 w-[20px] relative z-20">
                      <div className="w-4 h-4 rounded-full bg-[#050510] border-2 border-accent group-hover:bg-accent transition-colors duration-300 shadow-[0_0_10px_2px_rgba(6,182,212,0.4)]" />
                    </div>

                    {/* Right Column: Description */}
                    <div className="flex flex-col gap-4">
                      <p className="text-white/70 text-lg leading-relaxed text-left">
                        {exp.description.join(" ")}
                      </p>
                      {exp.link && (
                        <a 
                          href={exp.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors text-sm font-mono mt-1"
                        >
                          [ {exp.link.text} ]
                        </a>
                      )}
                    </div>

                  </div>

                  {/* Mobile View */}
                  <div className="md:hidden flex flex-col gap-4 pl-8 relative">
                    <div className="absolute left-[7px] top-[10px] w-2.5 h-2.5 rounded-full bg-accent z-20" />
                    <div className="flex flex-col gap-1">
                      <span 
                        className="text-2xl font-bold text-accent"
                        style={{ fontFamily: "var(--font-fancy)" }}
                      >
                        {exp.date}
                      </span>
                      <h4 className="text-2xl font-extrabold text-white">{exp.title}</h4>
                      <h5 className="text-lg text-white/50 font-semibold">{exp.company}</h5>
                    </div>
                    <p className="text-white/70 text-base leading-relaxed">
                      {exp.description.join(" ")}
                    </p>
                    {exp.link && (
                      <a 
                        href={exp.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors text-xs font-mono mt-1"
                      >
                        [ {exp.link.text} ]
                      </a>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
