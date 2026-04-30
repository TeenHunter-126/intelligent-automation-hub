import { motion } from "framer-motion";
import { Code2, Cpu, Bot, Brain, Factory, Activity, Wrench } from "lucide-react";
import { Section } from "./Section";

const categories = [
  { icon: Code2, title: "Programming", items: ["C / C++", "Python", "Ladder Logic", "Structured Text", "MATLAB"], level: 92 },
  { icon: Cpu, title: "Embedded Systems", items: ["Arduino", "STM32", "Raspberry Pi", "ESP32", "Microcontrollers"], level: 88 },
  { icon: Bot, title: "Robotics", items: ["ROS", "Kinematics", "Path Planning", "Computer Vision", "Sensor Fusion"], level: 90 },
  { icon: Brain, title: "Machine Learning", items: ["TensorFlow", "OpenCV", "CNN / RNN", "Scikit-learn", "Deep Learning"], level: 85 },
  { icon: Factory, title: "Industrial Automation", items: ["Siemens TIA Portal", "Mitsubishi GX Works", "SCADA / HMI", "VFD & Servo", "Pneumatics"], level: 94 },
  { icon: Activity, title: "Control Systems", items: ["PID Tuning", "State-Space", "Simulink", "System Identification"], level: 87 },
];

const software = ["SolidWorks", "MATLAB", "Simulink", "TIA Portal", "GX Works", "ANSYS", "Proteus", "AutoCAD", "LabVIEW", "KiCad"];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Technical Skills" title="An engineering toolkit built for the physical world." description="Decade-ready stack spanning firmware, control, robotics, and industrial systems.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -8, rotateX: 4, rotateY: -4 }}
            style={{ transformStyle: "preserve-3d" }}
            className="group relative glass rounded-2xl p-6 hover:border-primary/40 hover:shadow-glow transition-smooth"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-10 transition-smooth" />
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                  <c.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-mono text-xs text-accent">{c.level}%</span>
              </div>
              <h3 className="font-display font-semibold text-lg mb-3">{c.title}</h3>
              <div className="h-1 rounded-full bg-muted overflow-hidden mb-4">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${c.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.2 + i * 0.05, ease: "easeOut" }}
                  className="h-full bg-gradient-primary"
                />
              </div>
              <div className="flex flex-wrap gap-1.5">
                {c.items.map((it) => (
                  <span key={it} className="text-[11px] px-2 py-1 rounded-md bg-secondary/60 text-muted-foreground">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-14"
      >
        <div className="flex items-center gap-3 mb-5">
          <Wrench className="w-4 h-4 text-accent" />
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Software & Tools</span>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="flex flex-wrap gap-2">
          {software.map((s, i) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              whileHover={{ scale: 1.08, y: -2 }}
              className="px-4 py-2 rounded-full glass text-sm font-medium hover:border-primary/60 hover:text-accent transition-smooth cursor-default"
            >
              {s}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
