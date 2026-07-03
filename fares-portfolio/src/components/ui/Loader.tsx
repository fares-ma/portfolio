"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Text reveals from bottom (mask animation)
      gsap.fromTo(
        ".loader-text > span",
        { y: "100%" },
        { y: "0%", duration: 0.8, ease: "power3.out", delay: 0.2 }
      );

      // 2. Slide up the entire container after 1.4 seconds
      gsap.to(containerRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: "power4.inOut",
        delay: 1.4,
        onComplete: () => {
          onComplete();
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[10000] bg-[#050510] flex items-center justify-center will-change-transform"
    >
      <div className="overflow-hidden py-4">
        <h1 className="loader-text text-4xl sm:text-6xl font-heading font-extrabold uppercase tracking-wider text-white overflow-hidden flex">
          <span className="inline-block transform translate-y-full">
            Fares Mohamed
          </span>
        </h1>
      </div>
    </div>
  );
}
