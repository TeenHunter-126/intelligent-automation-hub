import { motion } from "framer-motion";
import { Heart, Users, Droplet, HandHeart } from "lucide-react";
import { Section } from "./Section";

const items = [
  { icon: HandHeart, title: "Dast-e-Khair Foundation", desc: "Leadership role supporting community welfare initiatives and on-ground operations." },
  { icon: Users, title: "Click and Help", desc: "Volunteer team member organizing outreach events for underserved communities." },
  { icon: Droplet, title: "Blood Donor Society", desc: "Active donor and coordinator, connecting donors with patients in need." },
  { icon: Heart, title: "Student Initiatives", desc: "Mentorship & leadership in university societies during my time at UET Lahore." },
];

export function Volunteer() {
  return (
    <Section id="volunteer" eyebrow="Beyond Engineering" title="Leadership & giving back.">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className="glass rounded-2xl p-6 hover:border-accent/50 hover:shadow-glow-cyan transition-smooth"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
              <it.icon className="w-5 h-5 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-sm mb-2">{it.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{it.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
