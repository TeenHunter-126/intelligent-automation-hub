import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Volunteer } from "@/components/portfolio/Volunteer";
import { Contact, Footer } from "@/components/portfolio/Contact";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Muhammad Zia Ul Hassan — Mechatronics & Control Engineer" },
      { name: "description", content: "Portfolio of Muhammad Zia Ul Hassan. Robotics, industrial automation, control systems, and applied machine learning." },
      { property: "og:title", content: "Muhammad Zia Ul Hassan — Mechatronics & Control Engineer" },
      { property: "og:description", content: "Building intelligent machines and human-centered automation solutions." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Volunteer />
      <Contact />
      <Footer />
      <Toaster />
    </main>
  );
}
