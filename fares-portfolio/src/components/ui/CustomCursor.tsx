"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const coreSpringX = useSpring(mouseX, { stiffness: 1000, damping: 40 });
  const coreSpringY = useSpring(mouseY, { stiffness: 1000, damping: 40 });

  const trailSpringX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const trailSpringY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  useEffect(() => {
    // Only show cursor on devices with fine pointer (mouse)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor='pointer']")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Pulsating energy aura / radiation trail */}
      <motion.div
        className="fixed top-0 left-0 w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400/30 to-blue-500/10 pointer-events-none z-[9999] blur-[3px] shadow-[0_0_30px_rgba(6,182,212,0.7),0_0_60px_rgba(59,130,246,0.4)] mix-blend-screen"
        style={{
          x: trailSpringX,
          y: trailSpringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 2.0 : [1, 1.15, 0.95, 1.05, 1],
          opacity: isHovering ? 0.9 : 0.8,
        }}
        transition={{
          scale: isHovering 
            ? { duration: 0.2 } 
            : { repeat: Infinity, duration: 2.0, ease: "easeInOut" },
          opacity: { duration: 0.2 }
        }}
      />
      
      {/* Sharp core cyan/blue ball */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-cyan-300 pointer-events-none z-[9999] shadow-[0_0_12px_#06b6d4,0_0_24px_rgba(6,182,212,0.6)] mix-blend-screen"
        style={{
          x: coreSpringX,
          y: coreSpringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}
