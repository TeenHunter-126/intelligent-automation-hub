import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

const SITE_URL = "https://mziahassan.com";
const FULL_NAME = "Muhammad Zia Ul Hassan";
const TITLE = `${FULL_NAME} — Mechatronics & Control Engineer`;
const DESCRIPTION =
  "Portfolio of Muhammad Zia Ul Hassan — Mechatronics & Control Engineer specializing in Robotics, Industrial Automation (PLC/SCADA), Machine Learning, and Control Systems. Based in Lahore, Pakistan.";

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Person",
  name: FULL_NAME,
  url: SITE_URL,
  jobTitle: "Mechatronics & Control Engineer",
  description: DESCRIPTION,
  email: "mzia9612@gmail.com",
  telephone: "+923174694078",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  sameAs: ["https://www.linkedin.com/in/m-zia-ul-hassan-8076a7206/"],
  knowsAbout: [
    "Robotics",
    "Industrial Automation",
    "PLC Programming",
    "Machine Learning",
    "Control Systems",
    "ROS",
    "Embedded Systems",
    "Mechatronics",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Engineering and Technology Lahore",
    url: "https://www.uet.edu.pk",
  },
  worksFor: {
    "@type": "Organization",
    name: "Punjab Group of Colleges",
  },
});

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "author", content: FULL_NAME },
      { name: "keywords", content: "mechatronics engineer, robotics engineer, PLC programmer, industrial automation, control systems, machine learning, ROS, SCADA, Lahore Pakistan, Zia Hassan" },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#1a2332" },

      /* Open Graph */
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: `${SITE_URL}/og-image.png` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: `${FULL_NAME} — Mechatronics & Control Engineer` },
      { property: "og:locale", content: "en_US" },
      { property: "og:site_name", content: FULL_NAME },

      /* Twitter / X */
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: `${SITE_URL}/og-image.png` },
      { name: "twitter:image:alt", content: `${FULL_NAME} — Mechatronics & Control Engineer` },

      /* Canonical & geo */
      { name: "geo.region", content: "PK-PB" },
      { name: "geo.placename", content: "Lahore" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: SITE_URL },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: jsonLd,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
