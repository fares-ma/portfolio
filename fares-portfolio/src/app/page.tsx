import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Marquee from "@/components/sections/Marquee";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Hero />
      <About />
      <Services />
      <Experience />
      <Marquee />
      <Projects />
      <Achievements />
      <Contact />
    </div>
  );
}
