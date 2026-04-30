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

const SITE_URL = "https://mziahassan.com";
const FULL_NAME = "Muhammad Zia Ul Hassan";
const TITLE = `${FULL_NAME} — Mechatronics & Control Engineer`;
const DESCRIPTION =
  "Portfolio of Muhammad Zia Ul Hassan — Mechatronics & Control Engineer specializing in Robotics, Industrial Automation (PLC/SCADA), Machine Learning, and Control Systems. Based in Lahore, Pakistan.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: "mechatronics engineer, robotics engineer, PLC programmer, industrial automation, control systems, machine learning, ROS, SCADA, Lahore Pakistan, Zia Hassan, UET Lahore" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: `${SITE_URL}/og-image.png` },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
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
