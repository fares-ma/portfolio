"use client";

import { motion } from "framer-motion";
import { LinkedinIcon } from "@/components/ui/Icons";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-32 bg-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16 lg:gap-24">
        
        {/* Left Side - Info */}
        <div className="w-full md:w-[45%]">
          <motion.div
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-mono text-accent text-sm tracking-widest uppercase mb-6 inline-block"
          >
            ( GET IN TOUCH )
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-6xl font-bold mb-12"
          >
            Let&apos;s build the <br/> future together.
          </motion.h2>

          <div className="flex flex-col gap-6">
            {[
              {icon: Mail, text: "farsagwa6@gmail.com", href: "mailto:farsagwa6@gmail.com" },
              {icon: Phone, text: "+20 106 454 0407", href: "tel:+201064540407" },
              {icon: LinkedinIcon, text: "linkedin.com/in/fares-mohamed-dotnet", href: "https://www.linkedin.com/in/fares-mohamed-dotnet/" },
              { icon: MapPin, text: "Cairo, Egypt", href: null },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group flex items-center gap-4 text-muted hover:text-accent transition-colors w-fit"
              >
                <div className="p-3 bg-surface border border-border rounded-lg group-hover:border-accent/50 transition-colors">
                  <item.icon size={20} />
                </div>
                {item.href ? (
                  <a href={item.href} target={item.icon === LinkedinIcon ? "_blank" : undefined} rel="noopener noreferrer" className="font-mono text-sm md:text-base">
                    {item.text}
                  </a>
                ) : (
                  <span className="font-mono text-sm md:text-base">{item.text}</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side - Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-[55%]"
        >
          <form 
            action="mailto:farsagwa6@gmail.com"
            method="POST"
            encType="text/plain"
            className="flex flex-col gap-6 bg-surface p-8 md:p-12 rounded-3xl border border-border"
          >

            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-mono text-sm text-accent">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                required
                className="bg-bg border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent text-white transition-colors" 
                placeholder="john@example.com"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-mono text-sm text-accent">Message</label>
              <textarea 
                id="message" 
                name="message"
                required
                rows={5}
                className="bg-bg border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent text-white transition-colors resize-none" 
                placeholder="How can I help you?"
              />
            </div>
            
            <button 
              type="submit"
              className="mt-4 bg-accent text-bg font-bold py-4 rounded-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
