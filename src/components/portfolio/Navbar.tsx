import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${scrolled ? "glass-strong shadow-elegant" : ""}`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="font-display font-bold text-lg tracking-tight">
          <span className="text-gradient">ZIA</span>
          <span className="text-muted-foreground">.eng</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="relative text-muted-foreground hover:text-foreground transition-smooth after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gradient-primary hover:after:w-full after:transition-all">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/zia-cv.pdf"
          download
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium glass hover:shadow-glow transition-smooth"
        >
          Download CV
        </a>
      </nav>
    </motion.header>
  );
}
