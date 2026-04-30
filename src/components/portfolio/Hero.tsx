import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import portrait from "@/assets/zia-portrait.png";

const taglines = [
  "Building intelligent machines.",
  "Designing human-centered automation.",
  "Engineering tomorrow's robotics.",
];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const current = taglines[i];
    const speed = del ? 35 : 65;
    const t = setTimeout(() => {
      if (!del && text === current) {
        setTimeout(() => setDel(true), 1600);
        return;
      }
      if (del && text === "") {
        setDel(false);
        setI((i + 1) % taglines.length);
        return;
      }
      setText(del ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);
  return <span className="caret text-accent font-mono text-sm md:text-base">{text}</span>;
}

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20">
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-[120px] animate-float" />
      <div className="absolute bottom-10 right-0 w-[30rem] h-[30rem] rounded-full bg-accent/15 blur-[140px] animate-float" style={{ animationDelay: "2s" }} />

      {/* Floating geometric elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-lg border border-primary/30 glass"
          style={{
            width: 40 + i * 8,
            height: 40 + i * 8,
            top: `${15 + i * 12}%`,
            left: `${5 + (i % 2) * 85}%`,
          }}
          animate={{ y: [0, -20, 0], rotate: [0, 45, 0] }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
        />
      ))}

      <div className="relative max-w-7xl mx-auto px-6 w-full grid md:grid-cols-[1.3fr_1fr] gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span className="text-muted-foreground">Available for opportunities worldwide</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.02] tracking-tight"
          >
            <span className="block text-foreground">MUHAMMAD ZIA</span>
            <span className="block text-gradient animate-gradient">UL HASSAN</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl"
          >
            Mechatronics & Control Engineer <span className="text-foreground/60">·</span> Robotics <span className="text-foreground/60">·</span> Industrial Automation <span className="text-foreground/60">·</span> Machine Learning
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-4 h-7"
          >
            <Typewriter />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-medium text-sm shadow-glow hover:scale-[1.03] transition-smooth"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/zia-cv.pdf"
              download
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass-strong font-medium text-sm hover:border-primary/50 hover:shadow-glow-cyan transition-smooth"
            >
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-14 grid grid-cols-3 gap-6 max-w-md"
          >
            {[
              { n: "4+", l: "Years Experience" },
              { n: "15+", l: "Projects Delivered" },
              { n: "7+", l: "Industrial Systems" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-2xl md:text-3xl font-bold text-gradient">{s.n}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-primary blur-3xl opacity-40 animate-pulse-glow" />
          <div className="relative w-[280px] md:w-[360px] aspect-[4/5] rounded-[2rem] overflow-hidden glass-strong shadow-elegant">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 z-10 mix-blend-overlay" />
            <img src={portrait} alt="Muhammad Zia Ul Hassan" className="w-full h-full object-cover object-top" />
            <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-background to-transparent" />
          </div>
          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 top-12 glass-strong rounded-2xl px-4 py-3 shadow-elegant"
          >
            <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Currently</div>
            <div className="text-sm font-semibold">Head of Robotics & AI</div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 bottom-20 glass-strong rounded-2xl px-4 py-3 shadow-elegant"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-mono">PLC · ROS · ML</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
