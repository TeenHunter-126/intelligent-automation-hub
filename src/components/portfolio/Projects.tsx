import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section } from "./Section";

const projects = [
  {
    title: "Multi-Featured Sociable Robot",
    tag: "Final Year Project",
    desc: "A humanoid 'Meet & Greet II' robot capable of speech, expression, and interactive gesture response — combining kinematics, vision, and embedded AI.",
    tech: ["ROS", "Python", "Computer Vision", "Servo Control", "NLP"],
    accent: "from-primary to-accent",
  },
  {
    title: "Hand Signs Detector (ASL)",
    tag: "Machine Learning",
    desc: "Real-time American Sign Language recognition using CNNs and OpenCV — classifying gestures from a live camera feed with high accuracy.",
    tech: ["TensorFlow", "OpenCV", "CNN", "Python"],
    accent: "from-accent to-primary",
  },
  {
    title: "Automated Bottle Filling System",
    tag: "Next Cola Pvt. Ltd.",
    desc: "End-to-end PLC-based filling line with volumetric sensing, conveyor sync, and HMI control — deployed on production.",
    tech: ["Siemens PLC", "TIA Portal", "HMI", "Pneumatics"],
    accent: "from-primary to-accent",
  },
  {
    title: "Pneumatic Pick & Drop",
    tag: "Industrial Automation",
    desc: "Dual implementation using relay logic and PLC ladder — showcasing the evolution from traditional control to modern automation.",
    tech: ["PLC", "Pneumatics", "Relay Logic", "Sensors"],
    accent: "from-accent to-primary",
  },
  {
    title: "Air Flow Ball Balancing",
    tag: "Control Systems",
    desc: "Classic PID control challenge — stabilizing a ping-pong ball at a setpoint using a regulated airflow system and real-time feedback.",
    tech: ["PID", "Arduino", "Sensors", "MATLAB"],
    accent: "from-primary to-accent",
  },
  {
    title: "Diesel Generator ATS Panel",
    tag: "Power Automation",
    desc: "Simulated Automatic Transfer Switch panel for diesel generators with mains-detection logic and fail-safe switching.",
    tech: ["PLC", "Simulation", "Power Systems"],
    accent: "from-accent to-primary",
  },
  {
    title: "Home Automation System",
    tag: "IoT / Embedded",
    desc: "Voice + app controlled home system managing lighting, appliances, and climate via an ESP-based mesh with secure cloud sync.",
    tech: ["ESP32", "MQTT", "IoT", "Mobile App"],
    accent: "from-primary to-accent",
  },
];

export function Projects() {
  return (
    <Section id="projects" eyebrow="Featured Projects" title="Real systems, real deployments, real results." description="A selection of robotics, automation, and ML systems I've designed, built, or commissioned.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
            whileHover={{ y: -10 }}
            className="group relative rounded-2xl overflow-hidden glass hover:border-primary/40 hover:shadow-glow transition-smooth"
          >
            {/* Visual header */}
            <div className={`relative h-36 overflow-hidden bg-gradient-to-br ${p.accent}`}>
              <div className="absolute inset-0 opacity-30" style={{
                backgroundImage: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(255,255,255,0.2) 0%, transparent 50%)"
              }} />
              <div className="absolute inset-0 grid-bg opacity-30" />
              <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-background/40 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider">
                {p.tag}
              </div>
              <motion.div
                className="absolute -right-8 -bottom-8 w-32 h-32 rounded-2xl border-2 border-white/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute right-6 bottom-6 w-16 h-16 rounded-full border-2 border-white/40"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-display font-semibold text-lg leading-tight group-hover:text-gradient transition-smooth">
                  {p.title}
                </h3>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:-translate-y-1 group-hover:translate-x-1 transition-smooth shrink-0" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="text-[10px] px-2 py-0.5 rounded-md bg-secondary/60 text-muted-foreground font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
