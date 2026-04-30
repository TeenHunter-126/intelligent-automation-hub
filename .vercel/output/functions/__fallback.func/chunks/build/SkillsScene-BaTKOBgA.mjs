import { U as jsxRuntimeExports, r as reactExports } from "./server.mjs";
import { V as Vector3, k as BufferGeometry, l as BufferAttribute, h as useFrame } from "./events-b389eeca.esm-K-Wm_rAg.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
function NeuralNetwork() {
  const groupRef = reactExports.useRef(null);
  const linesRef = reactExports.useRef(null);
  const { nodes, edges } = reactExports.useMemo(() => {
    const nodesArr = [];
    const layers = [3, 5, 5, 3];
    for (let l = 0; l < layers.length; l++) {
      for (let n = 0; n < layers[l]; n++) {
        const x = (l - 1.5) * 2;
        const y = (n - (layers[l] - 1) / 2) * 0.8;
        nodesArr.push(new Vector3(x, y, 0));
      }
    }
    const edgesArr = [];
    let offset = 0;
    for (let l = 0; l < layers.length - 1; l++) {
      for (let n = 0; n < layers[l]; n++) {
        for (let m = 0; m < layers[l + 1]; m++) {
          edgesArr.push([offset + n, offset + layers[l] + m]);
        }
      }
      offset += layers[l];
    }
    return { nodes: nodesArr, edges: edgesArr };
  }, []);
  const lineGeo = reactExports.useMemo(() => {
    const positions = new Float32Array(edges.length * 6);
    edges.forEach(([a, b], i) => {
      positions[i * 6] = nodes[a].x;
      positions[i * 6 + 1] = nodes[a].y;
      positions[i * 6 + 2] = nodes[a].z;
      positions[i * 6 + 3] = nodes[b].x;
      positions[i * 6 + 4] = nodes[b].y;
      positions[i * 6 + 5] = nodes[b].z;
    });
    const geo = new BufferGeometry();
    geo.setAttribute("position", new BufferAttribute(positions, 3));
    return geo;
  }, [nodes, edges]);
  useFrame((state) => {
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    const mat = linesRef.current.material;
    mat.opacity = 0.25 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("group", { ref: groupRef, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("lineSegments", { ref: linesRef, geometry: lineGeo, children: /* @__PURE__ */ jsxRuntimeExports.jsx("lineBasicMaterial", { color: "#4da6ff", transparent: true, opacity: 0.25 }) }),
    nodes.map((pos, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: pos, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("sphereGeometry", { args: [0.06, 12, 12] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#00d4ff", emissive: "#00aadd", emissiveIntensity: 0.8 })
    ] }, i))
  ] });
}
function DataStream({ count = 80 }) {
  const ref = reactExports.useRef(null);
  const positions = reactExports.useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 5;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return pos;
  }, [count]);
  const speeds = reactExports.useMemo(() => {
    return Array.from({ length: count }, () => 0.5 + Math.random() * 1.5);
  }, [count]);
  useFrame((state) => {
    const posAttr = ref.current.geometry.attributes.position;
    for (let i = 0; i < count; i++) {
      posAttr.array[i * 3 + 1] += speeds[i] * 0.01;
      if (posAttr.array[i * 3 + 1] > 3) posAttr.array[i * 3 + 1] = -3;
    }
    posAttr.needsUpdate = true;
    ref.current.rotation.z = state.clock.elapsedTime * 0.01;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("points", { ref, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("bufferGeometry", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("bufferAttribute", { attach: "attributes-position", args: [positions, 3] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pointsMaterial", { color: "#00d4ff", size: 0.03, transparent: true, opacity: 0.4, sizeAttenuation: true, depthWrite: false })
  ] });
}
function SkillsScene() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", { intensity: 0.2 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [0, 0, 3], intensity: 1, color: "#4da6ff", distance: 8 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(NeuralNetwork, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataStream, {})
  ] });
}
export {
  SkillsScene
};
