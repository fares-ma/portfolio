"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface FaresSignatureProps {
  onComplete?: () => void;
  className?: string;
}

export default function FaresSignature({ onComplete, className = "" }: FaresSignatureProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        delay: 2.0,
        onComplete: () => {
          if (onComplete) onComplete();
        }
      });

      // 1. Draw the main cursive name paths sequentially
      tl.fromTo(
        ".sig-path-main",
        { strokeDashoffset: (i: number, el: any) => el.getTotalLength() },
        { 
          strokeDashoffset: 0, 
          stagger: 0.2, 
          duration: 0.9, 
          ease: "power2.inOut" 
        },
        0
      );

      // 2. Draw the horizontal crossing/underline swoops
      tl.fromTo(
        ".sig-line-main",
        { strokeDashoffset: (i: number, el: any) => el.getTotalLength() },
        { strokeDashoffset: 0, stagger: 0.15, duration: 0.5, ease: "power2.out" },
        1.1
      );
    }, svgRef);

    // Initial state setup for stroke-dasharray & offset using path lengths
    if (svgRef.current) {
      const paths = svgRef.current.querySelectorAll("path");
      paths.forEach((path: any) => {
        const length = path.getTotalLength();
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;
      });
    }

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <svg
      ref={svgRef}
      className={`select-none overflow-visible ${className}`}
      viewBox="0 0 400 200"
      fill="none"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* "Fares" in cursive */}
      <path
        className="sig-path-main"
        d="M 50 90 C 25 60, 35 30, 65 30 C 90 30, 80 80, 55 110 C 45 125, 60 120, 75 105 C 85 90, 95 90, 90 105 C 88 115, 98 115, 102 105 C 105 95, 115 95, 115 105 C 120 100, 125 100, 125 110 C 130 100, 140 90, 145 108"
      />

      {/* "M" of Mohamed */}
      <path
        className="sig-path-main"
        d="M 170 105 L 180 55 L 195 100 L 210 60 L 225 105"
      />

      {/* "ohamed" in cursive */}
      <path
        className="sig-path-main"
        d="M 225 105 C 235 90, 245 90, 245 105 C 250 80, 258 55, 262 55 C 265 55, 260 85, 265 105 C 272 95, 282 95, 280 105 C 278 112, 285 112, 288 105 C 292 95, 298 95, 298 105 C 302 95, 308 95, 308 105 C 312 100, 318 100, 318 108 C 322 100, 328 100, 328 108 M 328 108 L 332 65 C 332 65, 328 95, 335 105 C 342 110, 352 105, 360 95"
      />

      {/* Underline Swoop 1 */}
      <path
        className="sig-line-main"
        d="M 40 145 C 120 165, 240 155, 360 125"
      />

      {/* Underline Swoop 2 */}
      <path
        className="sig-line-main"
        d="M 50 160 C 130 180, 230 170, 340 140"
      />
    </svg>
  );
}
