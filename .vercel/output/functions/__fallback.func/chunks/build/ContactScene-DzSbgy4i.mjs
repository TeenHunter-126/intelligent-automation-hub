import { U as jsxRuntimeExports, r as reactExports } from "./server.mjs";
import { h as useFrame, n as SphereGeometry } from "./events-b389eeca.esm-K-Wm_rAg.mjs";
import { F as Float } from "./Float-DXbGLr0i.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
function HolographicSphere() {
  const ref = reactExports.useRef(null);
  const wireRef = reactExports.useRef(null);
  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.2;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.2;
    wireRef.current.rotation.y = -state.clock.elapsedTime * 0.15;
    wireRef.current.rotation.z = state.clock.elapsedTime * 0.1;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Float, { speed: 1.5, rotationIntensity: 0.2, floatIntensity: 0.5, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("group", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { ref, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("sphereGeometry", { args: [1, 32, 32] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#1a2332", metalness: 1, roughness: 0.1, emissive: "#0a1628", emissiveIntensity: 0.5, transparent: true, opacity: 0.3 })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("lineSegments", { ref: wireRef, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("edgesGeometry", { args: [new SphereGeometry(1.02, 16, 16)] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("lineBasicMaterial", { color: "#4da6ff", transparent: true, opacity: 0.4 })
    ] })
  ] }) });
}
function OrbitRings() {
  const ref = reactExports.useRef(null);
  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.1;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("group", { ref, children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { rotation: [Math.PI / 3 + i * 0.5, i * 0.8, 0], children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("torusGeometry", { args: [1.6 + i * 0.25, 8e-3, 8, 80] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: i === 1 ? "#00d4ff" : "#4da6ff", emissive: "#1a4a8a", emissiveIntensity: 1, transparent: true, opacity: 0.35 })
  ] }, i)) });
}
function SignalParticles({ count = 40 }) {
  const ref = reactExports.useRef(null);
  const positions = reactExports.useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = i / count * Math.PI * 2;
      const r = 1.8 + Math.random() * 0.5;
      pos[i * 3] = Math.cos(angle) * r;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 2;
      pos[i * 3 + 2] = Math.sin(angle) * r;
    }
    return pos;
  }, [count]);
  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.15;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("points", { ref, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("bufferGeometry", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("bufferAttribute", { attach: "attributes-position", args: [positions, 3] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pointsMaterial", { color: "#00d4ff", size: 0.04, transparent: true, opacity: 0.5, sizeAttenuation: true, depthWrite: false })
  ] });
}
function ContactScene() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", { intensity: 0.15 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [0, 0, 4], intensity: 1.2, color: "#4da6ff", distance: 8 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [2, 1, 2], intensity: 0.5, color: "#00d4ff", distance: 6 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HolographicSphere, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(OrbitRings, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SignalParticles, {})
  ] });
}
export {
  ContactScene
};
