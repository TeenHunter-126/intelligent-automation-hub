import { motion } from "framer-motion";
import { Brain, Cpu, Target, Zap } from "lucide-react";
import { Section } from "./Section";

const traits = [
  { icon: Brain, title: "Critical Thinker", desc: "Breaking down complex systems into elegant solutions." },
  { icon: Cpu, title: "Hands-On Engineer", desc: "From PCB to PLC to production line deployment." },
  { icon: Target, title: "Outcome-Driven", desc: "Turning ideas into measurable real-world impact." },
  { icon: Zap, title: "Fast Learner", desc: "Thriving at the intersection of hardware, code & AI." },
];

export function About() {
  return (
    <Section id="about" eyebrow="About Me" title="Where mechatronics meets intelligent automation.">
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5 text-muted-foreground leading-relaxed text-lg"
        >
          <p>
            I'm <span className="text-foreground font-semibold">Muhammad Zia Ul Hassan</span>, a Mechatronics & Control Engineer with a deep passion for robotics, industrial automation, and applied machine learning. I graduated with a <span className="text-foreground">B.Sc. in Mechatronics & Control Engineering</span> from <span className="text-foreground">UET Lahore (2020–2024)</span>.
          </p>
          <p>
            My work bridges the gap between sophisticated control theory and the messy reality of factory floors — from designing a multi-featured sociable robot for my FYP, to commissioning Mitsubishi and Siemens PLC systems on production lines, to building ML-powered recognition pipelines.
          </p>
          <p>
            I love turning abstract ideas into automated systems that people actually <span className="text-foreground italic">use</span> — machines that are reliable, safe, and a little bit delightful.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {traits.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-5 hover:shadow-glow transition-smooth"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center mb-3">
                <t.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="font-semibold text-sm mb-1">{t.title}</div>
              <div className="text-xs text-muted-foreground">{t.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
