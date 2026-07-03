"use client";

import { motion } from "framer-motion";

const ACHIEVEMENTS = [
  {
    id: "01",
    title: "🏆 2nd Place — DEPI Competition",
    description: "Won 2nd place out of all program tracks in the Digital Egypt Pioneers Initiative closing project competition — Round 3 Graduation & Recognition Ceremony, February 2026.",
    link: { text: "View Certificates", url: "https://drive.google.com/drive/folders/1j5VQyK-s46uLoSUL83GOTaWrFY0HUsgV" }
  },
  {
    id: "02",
    title: "🌍 ICPC Participant",
    description: "Competed in the International Collegiate Programming Contest (ICPC) — the world's largest and most prestigious competitive programming contest — sharpening algorithmic problem-solving and data structures skills.",
    link: { text: "icpc.global", url: "https://icpc.global/" }
  },
  {
    id: "03",
    title: "🎓 CS Graduate",
    description: "Bachelor of Computer Science — New Cairo Academy, GPA: 3.1, Graduated July 2026. Led 5-person team on graduation project (100% grade). Vice Team Leader across multiple university projects.",
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="w-full py-32 bg-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <motion.div
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-mono text-accent text-sm tracking-widest uppercase mb-6 inline-block"
          >
            ( ACHIEVEMENTS )
          </motion.div>
          
          <h2 className="font-heading text-4xl md:text-5xl font-bold flex flex-wrap gap-2">
            {"Milestones /".split(" ").map((word, i) => (
              <div key={i} className="overflow-hidden">
                <motion.div
                  initial={{ y: "100%", opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  {word}
                </motion.div>
              </div>
            ))}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative bg-surface border border-border p-8 rounded-2xl transition-all duration-300 hover:border-accent flex flex-col h-full"
            >
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-accent opacity-0 group-hover:opacity-100 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-opacity duration-300" />
              
              <div className="font-mono text-accent text-sm mb-6">( {achievement.id} )</div>
              <h3 className="font-heading text-xl font-bold text-white mb-4 leading-relaxed">{achievement.title}</h3>
              <p className="text-muted leading-relaxed mb-8 flex-grow">{achievement.description}</p>
              
              {achievement.link && (
                <a 
                  href={achievement.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto text-accent hover:text-white transition-colors font-mono text-sm inline-flex"
                >
                  [ {achievement.link.text} ]
                </a>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
