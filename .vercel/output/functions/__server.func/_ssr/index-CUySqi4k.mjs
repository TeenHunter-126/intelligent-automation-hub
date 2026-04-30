import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { T as Toaster$1 } from "../_libs/sonner.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { S as Sparkles, A as ArrowRight, D as Download, B as Brain, C as Cpu, T as Target, Z as Zap, a as CodeXml, b as Bot, F as Factory, c as Activity, W as Wrench, d as Briefcase, H as HandHeart, U as Users, e as Droplet, f as Heart, M as Mail, P as Phone, L as Linkedin, g as MapPin } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.header,
    {
      initial: { y: -40, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.6 },
      className: `fixed top-0 inset-x-0 z-50 transition-smooth ${scrolled ? "glass-strong shadow-elegant" : ""}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "max-w-7xl mx-auto px-6 py-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#top", className: "font-display font-bold text-lg tracking-tight", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Zia Ul Hassan" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "hidden md:flex items-center gap-8 text-sm", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: l.href, className: "relative text-muted-foreground hover:text-foreground transition-smooth after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gradient-primary hover:after:w-full after:transition-all", children: l.label }) }, l.href)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "/zia-cv.pdf",
            download: true,
            className: "hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium glass hover:shadow-glow transition-smooth",
            children: "Download CV"
          }
        )
      ] })
    }
  );
}
const portrait = "/assets/zia-portrait-C4SagbfA.png";
const taglines = [
  "Building intelligent machines.",
  "Designing human-centered automation.",
  "Engineering tomorrow's robotics."
];
function Typewriter() {
  const [i, setI] = reactExports.useState(0);
  const [text, setText] = reactExports.useState("");
  const [del, setDel] = reactExports.useState(false);
  reactExports.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "caret text-accent font-mono text-sm md:text-base", children: text });
}
function Hero() {
  const yearsExperience = reactExports.useMemo(() => {
    const start = (/* @__PURE__ */ new Date("2023-11-01")).getTime();
    const years = (Date.now() - start) / (1e3 * 60 * 60 * 24 * 365.25);
    return `${(Math.floor(years * 10) / 10).toFixed(1)}+`;
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "relative min-h-screen flex items-center overflow-hidden pt-28 pb-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-40" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/20 blur-[120px] animate-float" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-10 right-0 w-[30rem] h-[30rem] rounded-full bg-accent/15 blur-[140px] animate-float", style: { animationDelay: "2s" } }),
    [...Array(6)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "absolute rounded-lg border border-primary/30 glass",
        style: {
          width: 40 + i * 8,
          height: 40 + i * 8,
          top: `${15 + i * 12}%`,
          left: `${5 + i % 2 * 85}%`
        },
        animate: { y: [0, -20, 0], rotate: [0, 45, 0] },
        transition: { duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }
      },
      i
    )),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-7xl mx-auto px-6 w-full grid md:grid-cols-[1.3fr_1fr] gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium mb-6",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-3.5 h-3.5 text-accent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Available for opportunities worldwide" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.h1,
          {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.1 },
            className: "font-display text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.02] tracking-tight",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-foreground", children: "MUHAMMAD ZIA" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-gradient animate-gradient", children: "UL HASSAN" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.p,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.7, delay: 0.3 },
            className: "mt-6 text-base md:text-lg text-muted-foreground max-w-xl",
            children: [
              "Mechatronics & Control Engineer ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/60", children: "·" }),
              " Robotics ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/60", children: "·" }),
              " Industrial Automation ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/60", children: "·" }),
              " Machine Learning"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.6, delay: 0.5 },
            className: "mt-4 h-7",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typewriter, {})
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.7, delay: 0.6 },
            className: "mt-10 flex flex-wrap gap-4",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "#projects",
                  className: "group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-medium text-sm shadow-glow hover:scale-[1.03] transition-smooth",
                  children: [
                    "View Projects",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "/zia-cv.pdf",
                  download: true,
                  className: "group inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass-strong font-medium text-sm hover:border-primary/50 hover:shadow-glow-cyan transition-smooth",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "w-4 h-4 group-hover:translate-y-0.5 transition-transform" }),
                    "Download CV"
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.8, delay: 0.9 },
            className: "mt-14 grid grid-cols-3 gap-6 max-w-md",
            children: [
              { n: yearsExperience, l: "Years Experience" },
              { n: "15+", l: "Projects Delivered" },
              { n: "7+", l: "Industrial Systems" }
            ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl md:text-3xl font-bold text-gradient", children: s.n }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: s.l })
            ] }, s.l))
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.92 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 1, delay: 0.2 },
          className: "relative mx-auto",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-[2rem] bg-gradient-primary blur-3xl opacity-40 animate-pulse-glow" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-[280px] md:w-[360px] aspect-[4/5] rounded-[2rem] overflow-hidden glass-strong shadow-elegant", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 z-10 mix-blend-overlay" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: portrait, alt: "Muhammad Zia Ul Hassan", className: "w-full h-full object-cover object-top" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-background to-transparent" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                animate: { y: [0, -10, 0] },
                transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                className: "absolute -left-4 top-12 glass-strong rounded-2xl px-4 py-3 shadow-elegant",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground uppercase tracking-wider", children: "Currently" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "Head of Robotics & AI" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                animate: { y: [0, 10, 0] },
                transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                className: "absolute -right-4 bottom-20 glass-strong rounded-2xl px-4 py-3 shadow-elegant",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-2 h-2 rounded-full bg-accent animate-pulse" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono", children: "PLC · ROS · ML" })
                ] })
              }
            )
          ]
        }
      )
    ] })
  ] });
}
function Section({ id, eyebrow, title, description, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id, className: "relative py-28 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-100px" },
        transition: { duration: 0.6 },
        className: "max-w-2xl mb-14",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-accent mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 h-px bg-accent" }),
            eyebrow
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl font-bold leading-tight", children: title }),
          description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-lg", children: description })
        ]
      }
    ),
    children
  ] }) });
}
const traits = [
  { icon: Brain, title: "Critical Thinker", desc: "Breaking down complex systems into elegant solutions." },
  { icon: Cpu, title: "Hands-On Engineer", desc: "From PCB to PLC to production line deployment." },
  { icon: Target, title: "Outcome-Driven", desc: "Turning ideas into measurable real-world impact." },
  { icon: Zap, title: "Fast Learner", desc: "Thriving at the intersection of hardware, code & AI." }
];
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "about", eyebrow: "About Me", title: "Where mechatronics meets intelligent automation.", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        className: "space-y-5 text-muted-foreground leading-relaxed text-lg",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "I'm ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-semibold", children: "Muhammad Zia Ul Hassan" }),
            ", a Mechatronics & Control Engineer with a deep passion for robotics, industrial automation, and applied machine learning. I graduated with a ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "B.Sc. in Mechatronics & Control Engineering" }),
            " from ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "UET Lahore (2020–2024)" }),
            "."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "My work bridges the gap between sophisticated control theory and the messy reality of factory floors — from designing a multi-featured sociable robot for my FYP, to commissioning Mitsubishi and Siemens PLC systems on production lines, to building ML-powered recognition pipelines." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "I love turning abstract ideas into automated systems that people actually ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground italic", children: "use" }),
            " — machines that are reliable, safe, and a little bit delightful."
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4", children: traits.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: i * 0.1 },
        whileHover: { y: -6 },
        className: "glass rounded-2xl p-5 hover:shadow-glow transition-smooth",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(t.icon, { className: "w-5 h-5 text-primary-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm mb-1", children: t.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: t.desc })
        ]
      },
      t.title
    )) })
  ] }) });
}
const categories = [
  { icon: CodeXml, title: "Programming", items: ["C / C++", "Python", "Ladder Logic", "Structured Text", "MATLAB"], level: 92 },
  { icon: Cpu, title: "Embedded Systems", items: ["Arduino", "STM32", "Raspberry Pi", "ESP32", "Microcontrollers"], level: 88 },
  { icon: Bot, title: "Robotics", items: ["ROS", "Kinematics", "Path Planning", "Computer Vision", "Sensor Fusion"], level: 90 },
  { icon: Brain, title: "Machine Learning", items: ["TensorFlow", "OpenCV", "CNN / RNN", "Scikit-learn", "Deep Learning"], level: 85 },
  { icon: Factory, title: "Industrial Automation", items: ["Siemens TIA Portal", "Mitsubishi GX Works", "SCADA / HMI", "VFD & Servo", "Pneumatics"], level: 94 },
  { icon: Activity, title: "Control Systems", items: ["PID Tuning", "State-Space", "Simulink", "System Identification"], level: 87 }
];
const software = ["SolidWorks", "MATLAB", "Simulink", "TIA Portal", "GX Works", "ANSYS", "Proteus", "AutoCAD", "LabVIEW", "KiCad"];
function Skills() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "skills", eyebrow: "Technical Skills", title: "An engineering toolkit built for the physical world.", description: "Decade-ready stack spanning firmware, control, robotics, and industrial systems.", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5", children: categories.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, delay: i * 0.08 },
        whileHover: { y: -8, rotateX: 4, rotateY: -4 },
        style: { transformStyle: "preserve-3d" },
        className: "group relative glass rounded-2xl p-6 hover:border-primary/40 hover:shadow-glow transition-smooth",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-10 transition-smooth" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "w-5 h-5 text-primary-foreground" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs text-accent", children: [
                c.level,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-lg mb-3", children: c.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 rounded-full bg-muted overflow-hidden mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { width: 0 },
                whileInView: { width: `${c.level}%` },
                viewport: { once: true },
                transition: { duration: 1.2, delay: 0.2 + i * 0.05, ease: "easeOut" },
                className: "h-full bg-gradient-primary"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: c.items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] px-2 py-1 rounded-md bg-secondary/60 text-muted-foreground", children: it }, it)) })
          ] })
        ]
      },
      c.title
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.8 },
        className: "mt-14",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { className: "w-4 h-4 text-accent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs uppercase tracking-widest text-muted-foreground", children: "Software & Tools" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-border" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: software.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.span,
            {
              initial: { opacity: 0, scale: 0.8 },
              whileInView: { opacity: 1, scale: 1 },
              viewport: { once: true },
              transition: { duration: 0.3, delay: i * 0.04 },
              whileHover: { scale: 1.08, y: -2 },
              className: "px-4 py-2 rounded-full glass text-sm font-medium hover:border-primary/60 hover:text-accent transition-smooth cursor-default",
              children: s
            },
            s
          )) })
        ]
      }
    )
  ] });
}
const projects = [
  {
    title: "Multi-Featured Sociable Robot",
    tag: "Final Year Project",
    desc: "A humanoid 'Meet & Greet II' robot capable of speech, expression, and interactive gesture response — combining kinematics, vision, and embedded AI.",
    tech: ["ROS", "Python", "Computer Vision", "Servo Control", "NLP"],
    accent: "from-primary to-accent"
  },
  {
    title: "Hand Signs Detector (ASL)",
    tag: "Machine Learning",
    desc: "Real-time American Sign Language recognition using CNNs and OpenCV — classifying gestures from a live camera feed with high accuracy.",
    tech: ["TensorFlow", "OpenCV", "CNN", "Python"],
    accent: "from-accent to-primary"
  },
  {
    title: "Automated Bottle Filling System",
    tag: "Next Cola Pvt. Ltd.",
    desc: "End-to-end PLC-based filling line with volumetric sensing, conveyor sync, and HMI control — deployed on production.",
    tech: ["Siemens PLC", "TIA Portal", "HMI", "Pneumatics"],
    accent: "from-primary to-accent"
  },
  {
    title: "Pneumatic Pick & Drop",
    tag: "Industrial Automation",
    desc: "Dual implementation using relay logic and PLC ladder — showcasing the evolution from traditional control to modern automation.",
    tech: ["PLC", "Pneumatics", "Relay Logic", "Sensors"],
    accent: "from-accent to-primary"
  },
  {
    title: "Air Flow Ball Balancing",
    tag: "Control Systems",
    desc: "Classic PID control challenge — stabilizing a ping-pong ball at a setpoint using a regulated airflow system and real-time feedback.",
    tech: ["PID", "Arduino", "Sensors", "MATLAB"],
    accent: "from-primary to-accent"
  },
  {
    title: "Diesel Generator ATS Panel",
    tag: "Power Automation",
    desc: "Simulated Automatic Transfer Switch panel for diesel generators with mains-detection logic and fail-safe switching.",
    tech: ["PLC", "Simulation", "Power Systems"],
    accent: "from-accent to-primary"
  },
  {
    title: "Home Automation System",
    tag: "IoT / Embedded",
    desc: "Voice + app controlled home system managing lighting, appliances, and climate via an ESP-based mesh with secure cloud sync.",
    tech: ["ESP32", "MQTT", "IoT", "Mobile App"],
    accent: "from-primary to-accent"
  }
];
function Projects() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "projects", eyebrow: "Featured Projects", title: "Real systems, real deployments, real results.", description: "A selection of robotics, automation, and ML systems I've designed, built, or commissioned.", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-5", children: projects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.article,
    {
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-50px" },
      transition: { duration: 0.5, delay: i % 3 * 0.1 },
      whileHover: { y: -10 },
      className: "group relative rounded-2xl overflow-hidden glass hover:border-primary/40 hover:shadow-glow transition-smooth",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative h-36 overflow-hidden bg-gradient-to-br ${p.accent}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-30", style: {
            backgroundImage: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(255,255,255,0.2) 0%, transparent 50%)"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-30" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 left-4 px-2.5 py-1 rounded-full bg-background/40 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider", children: p.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "absolute -right-8 -bottom-8 w-32 h-32 rounded-2xl border-2 border-white/30",
              animate: { rotate: 360 },
              transition: { duration: 20, repeat: Infinity, ease: "linear" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "absolute right-6 bottom-6 w-16 h-16 rounded-full border-2 border-white/40",
              animate: { rotate: -360 },
              transition: { duration: 15, repeat: Infinity, ease: "linear" }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-lg leading-tight group-hover:text-gradient transition-smooth mb-3", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed mb-4", children: p.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: p.tech.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] px-2 py-0.5 rounded-md bg-secondary/60 text-muted-foreground font-mono", children: t }, t)) })
        ] })
      ]
    },
    p.title
  )) }) });
}
const experience = [
  {
    role: "Head of Robotics & AI",
    company: "Punjab Group of Colleges",
    period: "Present",
    desc: "Leading robotics and AI curriculum development, mentoring students on competition-grade projects, and building a lab of autonomous systems from the ground up."
  },
  {
    role: "Automation Intern",
    company: "Basfa Textile",
    period: "Industrial Internship",
    desc: "Hands-on experience with Mitsubishi and Siemens PLCs — commissioning, troubleshooting, and optimizing textile automation processes."
  },
  {
    role: "Trainee Sales & Application Engineer",
    company: "Overseas Placement",
    period: "Field Experience",
    desc: "Worked with clients to specify, deploy, and support industrial automation solutions — bridging engineering and customer success."
  },
  {
    role: "Automation Engineer",
    company: "Next Cola Pvt. Ltd.",
    period: "Project Engagement",
    desc: "Designed and deployed the automated bottle filling system — PLC programming, sensor integration, and HMI design for production use."
  }
];
const education = {
  degree: "B.Sc. Mechatronics & Control Engineering",
  school: "University of Engineering and Technology (UET), Lahore",
  period: "2020 – 2024",
  desc: "Core coursework in control systems, robotics, embedded systems, mechanical design, signal processing, and applied AI."
};
function Experience() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "experience", eyebrow: "Professional Experience", title: "A journey from factory floors to AI labs.", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-8", children: experience.map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -20 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: i * 0.1 },
          className: "relative pl-14 md:pl-20",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 top-2 w-9 h-9 md:w-12 md:h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "w-4 h-4 md:w-5 md:h-5 text-primary-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-6 hover:border-primary/40 hover:shadow-glow transition-smooth", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 mb-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-lg", children: e.role }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono px-2 py-0.5 rounded-md bg-accent/10 text-accent", children: e.period })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-primary mb-3", children: e.company }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: e.desc })
            ] })
          ]
        },
        e.role
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "education", eyebrow: "Education", title: "Engineered at one of Pakistan's finest.", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 },
        className: "relative max-w-3xl glass-strong rounded-3xl p-8 md:p-10 hover:shadow-glow transition-smooth overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-primary opacity-20 blur-3xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs uppercase tracking-widest text-accent mb-3", children: education.period }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl md:text-3xl font-bold mb-2", children: education.degree }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary mb-4", children: education.school }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: education.desc })
          ] })
        ]
      }
    ) })
  ] });
}
const items = [
  { icon: HandHeart, title: "Dast-e-Khair Foundation", desc: "Leadership role supporting community welfare initiatives and on-ground operations." },
  { icon: Users, title: "Click and Help", desc: "Volunteer team member organizing outreach events for underserved communities." },
  { icon: Droplet, title: "Blood Donor Society", desc: "Active donor and coordinator, connecting donors with patients in need." },
  { icon: Heart, title: "Student Initiatives", desc: "Mentorship & leadership in university societies during my time at UET Lahore." }
];
function Volunteer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "volunteer", eyebrow: "Beyond Engineering", title: "Leadership & giving back.", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-5", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.5, delay: i * 0.08 },
      whileHover: { y: -6 },
      className: "glass rounded-2xl p-6 hover:border-accent/50 hover:shadow-glow-cyan transition-smooth",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(it.icon, { className: "w-5 h-5 text-primary-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-sm mb-2", children: it.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: it.desc })
      ]
    },
    it.title
  )) }) });
}
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "contact", eyebrow: "Get In Touch", title: "Let's build something intelligent.", description: "Available for opportunities in Robotics, Automation, and Intelligent Systems — locally and internationally.", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-2xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, x: -20 },
      whileInView: { opacity: 1, x: 0 },
      viewport: { once: true },
      transition: { duration: 0.6 },
      className: "space-y-4",
      children: [
        { icon: Mail, label: "Email", value: "mzia9612@gmail.com", href: "mailto:mzia9612@gmail.com" },
        { icon: Phone, label: "Phone", value: "+92 317 4694078", href: "tel:+923174694078" },
        { icon: Linkedin, label: "LinkedIn", value: "/in/m-zia-ul-hassan-8076a7206", href: "https://www.linkedin.com/in/m-zia-ul-hassan-8076a7206/" },
        { icon: MapPin, label: "Based in", value: "Lahore, Pakistan · Open to relocation" }
      ].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: c.href,
          target: c.href?.startsWith("http") ? "_blank" : void 0,
          rel: "noreferrer",
          className: "group flex items-center gap-4 p-5 rounded-2xl glass hover:border-primary/40 hover:shadow-glow transition-smooth",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "w-5 h-5 text-primary-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-mono uppercase tracking-widest text-muted-foreground", children: c.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium truncate group-hover:text-accent transition-smooth", children: c.value })
            ] })
          ]
        },
        c.label
      ))
    }
  ) }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border py-10 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Muhammad Zia Ul Hassan. Crafted with precision."
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-mono text-xs", children: "Mechatronics · Robotics · Automation · AI" })
  ] }) });
}
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skills, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Projects, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Experience, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Volunteer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, {})
  ] });
}
export {
  Index as component
};
