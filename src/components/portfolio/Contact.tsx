import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { Section } from "./Section";

const Scene3D = lazy(() => import("@/components/three/Scene3D").then((m) => ({ default: m.Scene3D })));
const ContactScene = lazy(() => import("@/components/three/ContactScene").then((m) => ({ default: m.ContactScene })));

export function Contact() {
  return (
    <Section id="contact" eyebrow="Get In Touch" title="Let's build something intelligent." description="Available for opportunities in Robotics, Automation, and Intelligent Systems — locally and internationally.">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Suspense fallback={null}>
          <Scene3D className="!absolute inset-0" camera={{ position: [0, 0, 5], fov: 45 }}>
            <ContactScene />
          </Scene3D>
        </Suspense>
      </div>

      <div className="relative z-[1] max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          {[
            { icon: Mail, label: "Email", value: "mzia9612@gmail.com", href: "mailto:mzia9612@gmail.com" },
            { icon: Phone, label: "Phone", value: "+92 317 4694078", href: "tel:+923174694078" },
            { icon: Linkedin, label: "LinkedIn", value: "/in/m-zia-ul-hassan-8076a7206", href: "https://www.linkedin.com/in/m-zia-ul-hassan-8076a7206/" },
            { icon: MapPin, label: "Based in", value: "Lahore, Pakistan · Open to relocation" },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href?.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group flex items-center gap-4 p-5 rounded-2xl glass hover:border-primary/40 hover:shadow-glow transition-smooth"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
                <c.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">{c.label}</div>
                <div className="text-sm font-medium truncate group-hover:text-accent transition-smooth">{c.value}</div>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} Muhammad Zia Ul Hassan. Crafted with precision.</div>
        <div className="font-mono text-xs">Mechatronics · Robotics · Automation · AI</div>
      </div>
    </footer>
  );
}
