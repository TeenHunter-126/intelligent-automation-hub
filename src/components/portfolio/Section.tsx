import { motion } from "framer-motion";
import { ReactNode } from "react";

export function Section({ id, eyebrow, title, description, children }: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-accent mb-4">
            <span className="w-8 h-px bg-accent" />
            {eyebrow}
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
            {title}
          </h2>
          {description && <p className="mt-4 text-muted-foreground text-lg">{description}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
