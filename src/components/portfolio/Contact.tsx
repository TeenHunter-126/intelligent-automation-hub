import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, Linkedin, Send, MapPin } from "lucide-react";
import { Section } from "./Section";
import { toast } from "sonner";

export function Contact() {
  const [sending, setSending] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
    if (!name || !email || !message) return;
    setSending(true);
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:zia.mechatronics@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSending(false);
      toast.success("Opening your email client…");
      (e.target as HTMLFormElement).reset();
    }, 600);
  };

  return (
    <Section id="contact" eyebrow="Get In Touch" title="Let's build something intelligent." description="Available for opportunities in Robotics, Automation, and Intelligent Systems — locally and internationally.">
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          {[
            { icon: Mail, label: "Email", value: "zia.mechatronics@gmail.com", href: "mailto:zia.mechatronics@gmail.com" },
            { icon: Phone, label: "Phone", value: "+92 300 0000000", href: "tel:+923000000000" },
            { icon: Linkedin, label: "LinkedIn", value: "/in/muhammad-zia-ul-hassan", href: "https://linkedin.com" },
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

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={onSubmit}
          className="glass-strong rounded-3xl p-6 md:p-8 space-y-4"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Name</span>
              <input name="name" required className="mt-1.5 w-full px-4 py-3 rounded-xl bg-secondary/60 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-smooth text-sm" placeholder="Your name" />
            </label>
            <label className="block">
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Email</span>
              <input name="email" type="email" required className="mt-1.5 w-full px-4 py-3 rounded-xl bg-secondary/60 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-smooth text-sm" placeholder="you@company.com" />
            </label>
          </div>
          <label className="block">
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Subject</span>
            <input name="subject" className="mt-1.5 w-full px-4 py-3 rounded-xl bg-secondary/60 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-smooth text-sm" placeholder="Opportunity / collaboration" />
          </label>
          <label className="block">
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Message</span>
            <textarea name="message" required rows={5} className="mt-1.5 w-full px-4 py-3 rounded-xl bg-secondary/60 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-smooth text-sm resize-none" placeholder="Tell me a bit about what you're building…" />
          </label>
          <button
            type="submit"
            disabled={sending}
            className="group w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-medium text-sm shadow-glow hover:scale-[1.01] disabled:opacity-60 transition-smooth"
          >
            {sending ? "Sending…" : "Send Message"}
            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.form>
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
