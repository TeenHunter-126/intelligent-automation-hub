import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Section } from "./Section";

const experience = [
  {
    role: "Head of Robotics & AI",
    company: "Punjab Group of Colleges",
    period: "Present",
    desc: "Leading robotics and AI curriculum development, mentoring students on competition-grade projects, and building a lab of autonomous systems from the ground up.",
  },
  {
    role: "Automation Intern",
    company: "Basfa Textile",
    period: "Industrial Internship",
    desc: "Hands-on experience with Mitsubishi and Siemens PLCs — commissioning, troubleshooting, and optimizing textile automation processes.",
  },
  {
    role: "Trainee Sales & Application Engineer",
    company: "Overseas Placement",
    period: "Field Experience",
    desc: "Worked with clients to specify, deploy, and support industrial automation solutions — bridging engineering and customer success.",
  },
  {
    role: "Automation Engineer",
    company: "Next Cola Pvt. Ltd.",
    period: "Project Engagement",
    desc: "Designed and deployed the automated bottle filling system — PLC programming, sensor integration, and HMI design for production use.",
  },
];

const education = {
  degree: "B.Sc. Mechatronics & Control Engineering",
  school: "University of Engineering and Technology (UET), Lahore",
  period: "2020 – 2024",
  desc: "Core coursework in control systems, robotics, embedded systems, mechanical design, signal processing, and applied AI.",
};

export function Experience() {
  return (
    <>
      <Section id="experience" eyebrow="Professional Experience" title="A journey from factory floors to AI labs.">
        <div className="relative">
          <div className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
          <div className="space-y-8">
            {experience.map((e, i) => (
              <motion.div
                key={e.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-14 md:pl-20"
              >
                <div className="absolute left-0 top-2 w-9 h-9 md:w-12 md:h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                  <Briefcase className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
                </div>
                <div className="glass rounded-2xl p-6 hover:border-primary/40 hover:shadow-glow transition-smooth">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-display font-semibold text-lg">{e.role}</h3>
                    <span className="text-xs font-mono px-2 py-0.5 rounded-md bg-accent/10 text-accent">{e.period}</span>
                  </div>
                  <div className="text-sm text-primary mb-3">{e.company}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="education" eyebrow="Education" title="Engineered at one of Pakistan's finest.">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl glass-strong rounded-3xl p-8 md:p-10 hover:shadow-glow transition-smooth overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-primary opacity-20 blur-3xl" />
          <div className="relative">
            <div className="font-mono text-xs uppercase tracking-widest text-accent mb-3">{education.period}</div>
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">{education.degree}</h3>
            <div className="text-primary mb-4">{education.school}</div>
            <p className="text-muted-foreground">{education.desc}</p>
          </div>
        </motion.div>
      </Section>
    </>
  );
}
