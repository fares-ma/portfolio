"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const services = [
  {
    id: "01",
    title: "Backend Architecture",
    description: "I design and build robust, scalable backend systems and APIs tailored to your application's unique requirements, focusing on high availability and fault tolerance.",
    features: ["Microservices", "RESTful APIs", "System Design"],
  },
  {
    id: "02",
    title: "Database Optimization",
    description: "Your data layer is crucial. I optimize complex queries, design efficient schemas, and ensure your SQL and NoSQL databases run blazing fast under heavy load.",
    features: ["SQL / NoSQL", "Query Tuning", "Data Modeling"],
  },
  {
    id: "03",
    title: "Cloud & Deployment",
    description: "I ensure your applications are seamlessly deployed and highly scalable using modern cloud infrastructure and CI/CD pipelines for continuous delivery.",
    features: ["Azure / AWS", "Docker / Kubernetes", "CI/CD Pipelines"],
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-header-char", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        stagger: 0.05,
        duration: 0.8,
        ease: "power3.out",
      });
      
      gsap.from(".service-desc", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        opacity: 0,
        y: 30,
        duration: 1,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="services" className="relative w-full px-[5%] sm:px-[3%] py-24 bg-[#050510] text-white">
      <div className="flex flex-col w-full mb-20">
        <h3 className="font-heading text-5xl md:text-7xl font-extrabold uppercase leading-tight flex flex-wrap overflow-hidden">
          {"What I do /".split("").map((char, i) => (
            <span key={i} className="service-header-char inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-12 mt-12 gap-8 items-start service-desc">
          <p className="text-white/50 text-center md:text-left md:col-span-4 font-mono tracking-widest">( SERVICES )</p>
          <p className="text-xl md:text-2xl font-medium text-white/80 md:col-span-8 md:col-start-5 leading-relaxed">
            Robust backend infrastructure doesn&apos;t happen by chance, it is built with intention. I code secure, scalable solutions that make your application&apos;s foundation unbreakable.
          </p>
        </div>
      </div>

      <div className="relative w-full mt-20">
        <div className="flex flex-col gap-0">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="relative md:sticky border-t border-white/20 bg-[#050510]"
              style={{ 
                top: `${10 + index * 5}vh`,
                zIndex: index + 10 
              }}
            >
              <div className="flex flex-col md:grid md:grid-cols-12 items-start md:items-center gap-4 md:gap-6 py-8">
                <span className="md:col-span-2 text-white/50 font-mono text-xl">( {service.id} )</span>
                <h4 className="md:col-span-6 md:col-start-5 text-3xl md:text-5xl font-bold font-heading">{service.title}</h4>
                
                {/* Spinning Star Icon */}
                <div className="hidden lg:block lg:col-start-11 animate-[spin_10s_linear_infinite] text-white/20">
                  <svg viewBox="0 0 200 200" className="w-12 h-12 fill-current" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 0L170.711 29.2893L200 100L170.711 170.711L100 200L29.2893 170.711L0 100L29.2893 29.2893L100 0Z" />
                  </svg>
                </div>
              </div>

              <div className="flex flex-col md:grid md:grid-cols-12 pb-16 md:pb-24">
                <div className="md:col-span-7 md:col-start-5 flex flex-col gap-6">
                  <p className="text-lg md:text-xl text-white/70 max-w-[50ch] leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-col">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className={`flex gap-4 py-3 items-center ${fIndex < service.features.length - 1 ? 'border-b border-white/10' : ''}`}>
                        <span className="font-mono text-white/40 text-base">0{fIndex + 1}</span>
                        <span className="font-bold text-xl">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
