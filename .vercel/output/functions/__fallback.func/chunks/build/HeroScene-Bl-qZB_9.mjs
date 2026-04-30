import { U as jsxRuntimeExports, r as reactExports } from "./server.mjs";
import { F as Float } from "./Float-DXbGLr0i.mjs";
import { h as useFrame, S as Shape, P as Path, j as ExtrudeGeometry, M as MeshPhysicalMaterial } from "./events-b389eeca.esm-K-Wm_rAg.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
var distort = "#define GLSLIFY 1\nvec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}float snoise(vec3 v){const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;i=mod289(i);vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;vec4 sh=-step(h,vec4(0.0));vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));}";
class DistortMaterialImpl extends MeshPhysicalMaterial {
  constructor(parameters = {}) {
    super(parameters);
    this.setValues(parameters);
    this._time = {
      value: 0
    };
    this._distort = {
      value: 0.4
    };
    this._radius = {
      value: 1
    };
  }
  // FIXME Use `THREE.WebGLProgramParametersWithUniforms` type when able to target @types/three@0.160.0
  onBeforeCompile(shader) {
    shader.uniforms.time = this._time;
    shader.uniforms.radius = this._radius;
    shader.uniforms.distort = this._distort;
    shader.vertexShader = `
      uniform float time;
      uniform float radius;
      uniform float distort;
      ${distort}
      ${shader.vertexShader}
    `;
    shader.vertexShader = shader.vertexShader.replace("#include <begin_vertex>", `
        float updateTime = time / 50.0;
        float noise = snoise(vec3(position / 2.0 + updateTime * 5.0));
        vec3 transformed = vec3(position * (noise * pow(distort, 2.0) + radius));
        `);
  }
  get time() {
    return this._time.value;
  }
  set time(v) {
    this._time.value = v;
  }
  get distort() {
    return this._distort.value;
  }
  set distort(v) {
    this._distort.value = v;
  }
  get radius() {
    return this._radius.value;
  }
  set radius(v) {
    this._radius.value = v;
  }
}
const MeshDistortMaterial = /* @__PURE__ */ reactExports.forwardRef(({
  speed = 1,
  ...props
}, ref) => {
  const [material] = reactExports.useState(() => new DistortMaterialImpl());
  useFrame((state) => material && (material.time = state.clock.elapsedTime * speed));
  return /* @__PURE__ */ reactExports.createElement("primitive", _extends({
    object: material,
    ref,
    attach: "material"
  }, props));
});
function GearRing({ radius = 1, teeth = 12, thickness = 0.15, ...props }) {
  const ref = reactExports.useRef(null);
  const geo = reactExports.useMemo(() => {
    const shape = new Shape();
    const inner = radius * 0.7;
    const outer = radius;
    const toothDepth = radius * 0.18;
    for (let i = 0; i < teeth; i++) {
      const a1 = i / teeth * Math.PI * 2;
      const a2 = (i + 0.3) / teeth * Math.PI * 2;
      const a3 = (i + 0.5) / teeth * Math.PI * 2;
      const a4 = (i + 0.8) / teeth * Math.PI * 2;
      if (i === 0) shape.moveTo(Math.cos(a1) * inner, Math.sin(a1) * inner);
      shape.lineTo(Math.cos(a2) * (inner + toothDepth), Math.sin(a2) * (inner + toothDepth));
      shape.lineTo(Math.cos(a3) * (outer + toothDepth), Math.sin(a3) * (outer + toothDepth));
      shape.lineTo(Math.cos(a4) * outer, Math.sin(a4) * outer);
    }
    shape.closePath();
    const holePath = new Path();
    holePath.absarc(0, 0, inner * 0.6, 0, Math.PI * 2, true);
    shape.holes.push(holePath);
    return new ExtrudeGeometry(shape, { depth: thickness, bevelEnabled: false });
  }, [radius, teeth, thickness]);
  useFrame((_, delta) => {
    ref.current.rotation.z += delta * 0.15;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("group", { ref, ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsx("mesh", { geometry: geo, rotation: [Math.PI / 2, 0, 0], children: /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#4da6ff", metalness: 0.9, roughness: 0.2, emissive: "#1a4a8a", emissiveIntensity: 0.3, transparent: true, opacity: 0.85 }) }) });
}
function CircuitOrb() {
  const ref = reactExports.useRef(null);
  useFrame((state) => {
    ref.current.rotation.x = state.clock.elapsedTime * 0.2;
    ref.current.rotation.y = state.clock.elapsedTime * 0.3;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Float, { speed: 2, rotationIntensity: 0.4, floatIntensity: 0.6, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { ref, scale: 1.2, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("icosahedronGeometry", { args: [1, 1] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      MeshDistortMaterial,
      {
        color: "#00d4ff",
        emissive: "#0066aa",
        emissiveIntensity: 0.5,
        metalness: 0.8,
        roughness: 0.15,
        distort: 0.3,
        speed: 2,
        transparent: true,
        opacity: 0.7
      }
    )
  ] }) });
}
function FloatingParticles({ count = 60 }) {
  const ref = reactExports.useRef(null);
  const positions = reactExports.useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return pos;
  }, [count]);
  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("points", { ref, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("bufferGeometry", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("bufferAttribute", { attach: "attributes-position", args: [positions, 3] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pointsMaterial", { color: "#4da6ff", size: 0.04, transparent: true, opacity: 0.6, sizeAttenuation: true, depthWrite: false })
  ] });
}
function RingStructure() {
  const ref = reactExports.useRef(null);
  useFrame((state) => {
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    ref.current.rotation.y = state.clock.elapsedTime * 0.15;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("group", { ref, children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { rotation: [Math.PI / 2, 0, i * Math.PI / 3], children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("torusGeometry", { args: [1.8 + i * 0.3, 0.015, 16, 100] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: i === 0 ? "#4da6ff" : i === 1 ? "#00d4ff" : "#1a8aff", emissive: i === 0 ? "#1a4a8a" : "#005588", emissiveIntensity: 0.8, transparent: true, opacity: 0.5 - i * 0.1 })
  ] }, i)) });
}
function HeroScene() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", { intensity: 0.3 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("directionalLight", { position: [5, 5, 5], intensity: 0.8, color: "#4da6ff" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [-3, 2, 4], intensity: 1.5, color: "#00d4ff", distance: 10 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pointLight", { position: [3, -2, 2], intensity: 0.8, color: "#4da6ff", distance: 8 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CircuitOrb, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Float, { speed: 1.5, rotationIntensity: 0.2, floatIntensity: 0.4, children: /* @__PURE__ */ jsxRuntimeExports.jsx(GearRing, { radius: 0.8, teeth: 10, position: [2.5, 1.5, -1] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Float, { speed: 1.2, rotationIntensity: 0.3, floatIntensity: 0.3, children: /* @__PURE__ */ jsxRuntimeExports.jsx(GearRing, { radius: 0.5, teeth: 8, position: [-2.8, -1, -0.5] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RingStructure, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingParticles, {})
  ] });
}
export {
  HeroScene
};
