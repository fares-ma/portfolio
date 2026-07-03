"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { GithubIcon, LinkedinIcon, EmailIcon } from "@/components/ui/Icons";

export default function Footer() {
  const marquee1Ref = useRef<HTMLDivElement>(null);
  const marquee2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP infinite marquee effect
    const animateMarquee = (element: HTMLElement, direction: 1 | -1) => {
      const width = element.scrollWidth / 2;
      gsap.to(element, {
        x: direction === -1 ? -width : width,
        ease: "none",
        duration: 20,
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % width)
        }
      });
    };

    if (marquee1Ref.current) animateMarquee(marquee1Ref.current, -1);
    if (marquee2Ref.current) animateMarquee(marquee2Ref.current, 1);
  }, []);

  return (
    <footer className="relative w-full bg-[#050510] text-white overflow-hidden pt-20">
      {/* Marquee Section */}
      <div className="relative h-[12rem] md:h-[20rem] w-full overflow-hidden leading-none bg-[#0a0515] transform -skew-y-3 flex flex-col justify-center gap-4">
        
        {/* Marquee 1 (Left to Right) */}
        <div ref={marquee1Ref} className="flex whitespace-nowrap will-change-transform">
          {[...Array(4)].map((_, i) => (
            <div key={`m1-${i}`} className="flex items-center text-5xl md:text-8xl font-bold uppercase tracking-widest text-white/10">
              <span className="mx-8">Backend Developer</span>
              <svg className="w-12 h-12 md:w-20 md:h-20 fill-white/10" viewBox="0 0 100 101" xmlns="http://www.w3.org/2000/svg">
                <path d="M49.8234 1.99099C49.4293 9.09696 46.8886 17.4122 43.0707 24.0426C35.0272 38.01 21.1141 47.4665 5.21739 49.7899C4.1712 49.9394 2.55435 50.1024 1.65761 50.1567C0.747283 50.1975 0 50.279 0 50.3334C0 50.3877 0.747283 50.4692 1.65761 50.51C2.55435 50.5644 4.1712 50.7274 5.21739 50.8769C21.1141 53.2002 35.0272 62.6567 43.0707 76.6241C46.8886 83.2546 49.4293 91.5698 49.8234 98.6758C49.8641 99.5861 49.9457 100.333 50 100.333C50.0543 100.333 50.1359 99.5861 50.1766 98.6758C50.5707 91.5698 53.1114 83.2546 56.9293 76.6241C64.9728 62.6567 78.8859 53.2002 94.7826 50.8769C95.8288 50.7274 97.4456 50.5644 98.3424 50.51C99.2527 50.4692 100 50.3877 100 50.3334C100 50.279 99.2527 50.1975 98.3424 50.1567C97.4456 50.1024 95.8288 49.9394 94.7826 49.7899C78.8859 47.4665 64.9728 38.01 56.9293 24.0426C53.1114 17.4122 50.5707 9.09696 50.1766 1.99099C50.1359 1.08066 50.0543 0.333377 50 0.333377C49.9457 0.333377 49.8641 1.08066 49.8234 1.99099Z"></path>
              </svg>
            </div>
          ))}
        </div>

        {/* Marquee 2 (Right to Left) */}
        <div ref={marquee2Ref} className="flex whitespace-nowrap will-change-transform translate-x-[-100%]">
          {[...Array(4)].map((_, i) => (
            <div key={`m2-${i}`} className="flex items-center text-5xl md:text-8xl font-bold uppercase tracking-widest text-accent/50">
              <span className="mx-8">System Architect</span>
              <svg className="w-12 h-12 md:w-20 md:h-20 fill-accent/50" viewBox="0 0 100 101" xmlns="http://www.w3.org/2000/svg">
                <path d="M49.8234 1.99099C49.4293 9.09696 46.8886 17.4122 43.0707 24.0426C35.0272 38.01 21.1141 47.4665 5.21739 49.7899C4.1712 49.9394 2.55435 50.1024 1.65761 50.1567C0.747283 50.1975 0 50.279 0 50.3334C0 50.3877 0.747283 50.4692 1.65761 50.51C2.55435 50.5644 4.1712 50.7274 5.21739 50.8769C21.1141 53.2002 35.0272 62.6567 43.0707 76.6241C46.8886 83.2546 49.4293 91.5698 49.8234 98.6758C49.8641 99.5861 49.9457 100.333 50 100.333C50.0543 100.333 50.1359 99.5861 50.1766 98.6758C50.5707 91.5698 53.1114 83.2546 56.9293 76.6241C64.9728 62.6567 78.8859 53.2002 94.7826 50.8769C95.8288 50.7274 97.4456 50.5644 98.3424 50.51C99.2527 50.4692 100 50.3877 100 50.3334C100 50.279 99.2527 50.1975 98.3424 50.1567C97.4456 50.1024 95.8288 49.9394 94.7826 49.7899C78.8859 47.4665 64.9728 38.01 56.9293 24.0426C53.1114 17.4122 50.5707 9.09696 50.1766 1.99099C50.1359 1.08066 50.0543 0.333377 50 0.333377C49.9457 0.333377 49.8641 1.08066 49.8234 1.99099Z"></path>
              </svg>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="flex flex-col md:flex-row justify-between items-end px-10 md:px-20 py-20 mt-10">
        <div className="flex flex-col gap-6">
          <h2 className="text-5xl md:text-8xl font-heading font-extrabold leading-none text-white/90">
            Let's create<br/>something<br/>epic together.
          </h2>
          <a href="mailto:farsagwa6@gmail.com" className="text-2xl font-medium text-accent hover:text-white transition-colors">farsagwa6@gmail.com</a>
        </div>
        
        <div className="flex flex-col items-end gap-10 mt-20 md:mt-0">
          <div className="flex gap-4">
            <a href="https://github.com/fares-ma" target="_blank" rel="noreferrer" className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors group">
              <GithubIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.linkedin.com/in/fares-mohamed-dotnet/" target="_blank" rel="noreferrer" className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors group">
              <LinkedinIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
          </div>
          <p className="text-white/40 text-sm">&copy; {new Date().getFullYear()} Fares Mohamed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
