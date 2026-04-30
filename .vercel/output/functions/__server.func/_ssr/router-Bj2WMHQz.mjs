import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as createRouter, u as useRouter, a as createRootRoute, b as createFileRoute, l as lazyRouteComponent, H as HeadContent, S as Scripts, O as Outlet, L as Link } from "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const appCss = "/assets/styles-Ctfjg7Pn.css";
const SITE_URL$1 = "https://mziahassan.com";
const FULL_NAME$1 = "Muhammad Zia Ul Hassan";
const TITLE$1 = `${FULL_NAME$1} — Mechatronics & Control Engineer`;
const DESCRIPTION$1 = "Portfolio of Muhammad Zia Ul Hassan — Mechatronics & Control Engineer specializing in Robotics, Industrial Automation (PLC/SCADA), Machine Learning, and Control Systems. Based in Lahore, Pakistan.";
const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Person",
  name: FULL_NAME$1,
  url: SITE_URL$1,
  jobTitle: "Mechatronics & Control Engineer",
  description: DESCRIPTION$1,
  email: "mzia9612@gmail.com",
  telephone: "+923174694078",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK"
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
    "Mechatronics"
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Engineering and Technology Lahore",
    url: "https://www.uet.edu.pk"
  },
  worksFor: {
    "@type": "Organization",
    name: "Punjab Group of Colleges"
  }
});
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
const Route$1 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: TITLE$1 },
      { name: "description", content: DESCRIPTION$1 },
      { name: "author", content: FULL_NAME$1 },
      { name: "keywords", content: "mechatronics engineer, robotics engineer, PLC programmer, industrial automation, control systems, machine learning, ROS, SCADA, Lahore Pakistan, Zia Hassan" },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#1a2332" },
      /* Open Graph */
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL$1 },
      { property: "og:title", content: TITLE$1 },
      { property: "og:description", content: DESCRIPTION$1 },
      { property: "og:image", content: `${SITE_URL$1}/og-image.png` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: `${FULL_NAME$1} — Mechatronics & Control Engineer` },
      { property: "og:locale", content: "en_US" },
      { property: "og:site_name", content: FULL_NAME$1 },
      /* Twitter / X */
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE$1 },
      { name: "twitter:description", content: DESCRIPTION$1 },
      { name: "twitter:image", content: `${SITE_URL$1}/og-image.png` },
      { name: "twitter:image:alt", content: `${FULL_NAME$1} — Mechatronics & Control Engineer` },
      /* Canonical & geo */
      { name: "geo.region", content: "PK-PB" },
      { name: "geo.placename", content: "Lahore" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: SITE_URL$1 },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
      }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: jsonLd
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {});
}
const $$splitComponentImporter = () => import("./index-CUySqi4k.mjs");
const SITE_URL = "https://mziahassan.com";
const FULL_NAME = "Muhammad Zia Ul Hassan";
const TITLE = `${FULL_NAME} — Mechatronics & Control Engineer`;
const DESCRIPTION = "Portfolio of Muhammad Zia Ul Hassan — Mechatronics & Control Engineer specializing in Robotics, Industrial Automation (PLC/SCADA), Machine Learning, and Control Systems. Based in Lahore, Pakistan.";
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: TITLE
    }, {
      name: "description",
      content: DESCRIPTION
    }, {
      name: "keywords",
      content: "mechatronics engineer, robotics engineer, PLC programmer, industrial automation, control systems, machine learning, ROS, SCADA, Lahore Pakistan, Zia Hassan, UET Lahore"
    }, {
      property: "og:title",
      content: TITLE
    }, {
      property: "og:description",
      content: DESCRIPTION
    }, {
      property: "og:url",
      content: SITE_URL
    }, {
      property: "og:image",
      content: `${SITE_URL}/og-image.png`
    }, {
      name: "twitter:title",
      content: TITLE
    }, {
      name: "twitter:description",
      content: DESCRIPTION
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
function DefaultErrorComponent({ error, reset }) {
  const router = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-8 w-8 text-destructive",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold tracking-tight text-foreground", children: "Something went wrong" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "An unexpected error occurred. Please try again." }),
    false,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const getRouter = () => {
  const router = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultErrorComponent
  });
  return router;
};
export {
  getRouter
};
