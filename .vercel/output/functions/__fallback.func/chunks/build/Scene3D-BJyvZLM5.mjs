import { U as jsxRuntimeExports, r as reactExports } from "./server.mjs";
import { m, u as useThree, W as WebGLCubeRenderTarget, C as CubeCamera, e as extend, a as useBridge, b as useMutableCallback, c as useIsomorphicLayoutEffect, d as createRoot, f as unmountComponentAtNode, g as createPointerEvents, i as isRef, E as ErrorBoundary, B as Block, T as THREE } from "./events-b389eeca.esm-K-Wm_rAg.mjs";
import "node:async_hooks";
import "node:stream";
import "node:stream/web";
import "util";
import "crypto";
import "async_hooks";
import "stream";
function g(n, t) {
  let o;
  return (...i) => {
    window.clearTimeout(o), o = window.setTimeout(() => n(...i), t);
  };
}
function j({ debounce: n, scroll: t, polyfill: o, offsetSize: i } = { debounce: 0, scroll: false, offsetSize: false }) {
  const a = o || class {
  };
  if (!a) throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
  const [c, h] = reactExports.useState({ left: 0, top: 0, width: 0, height: 0, bottom: 0, right: 0, x: 0, y: 0 }), e = reactExports.useRef({ element: null, scrollContainers: null, resizeObserver: null, lastBounds: c, orientationHandler: null }), d = n ? typeof n == "number" ? n : n.scroll : null, f = n ? typeof n == "number" ? n : n.resize : null, w = reactExports.useRef(false);
  reactExports.useEffect(() => (w.current = true, () => void (w.current = false)));
  const [z, m2, s] = reactExports.useMemo(() => {
    const r = () => {
      if (!e.current.element) return;
      const { left: y, top: C, width: H, height: O, bottom: S, right: x, x: B, y: R } = e.current.element.getBoundingClientRect(), l = { left: y, top: C, width: H, height: O, bottom: S, right: x, x: B, y: R };
      e.current.element instanceof HTMLElement && i && (l.height = e.current.element.offsetHeight, l.width = e.current.element.offsetWidth), Object.freeze(l), w.current && !D(e.current.lastBounds, l) && h(e.current.lastBounds = l);
    };
    return [r, f ? g(r, f) : r, d ? g(r, d) : r];
  }, [h, i, d, f]);
  function v() {
    e.current.scrollContainers && (e.current.scrollContainers.forEach((r) => r.removeEventListener("scroll", s, true)), e.current.scrollContainers = null), e.current.resizeObserver && (e.current.resizeObserver.disconnect(), e.current.resizeObserver = null), e.current.orientationHandler && ("orientation" in screen && "removeEventListener" in screen.orientation ? screen.orientation.removeEventListener("change", e.current.orientationHandler) : "onorientationchange" in window && window.removeEventListener("orientationchange", e.current.orientationHandler));
  }
  function b() {
    e.current.element && (e.current.resizeObserver = new a(s), e.current.resizeObserver.observe(e.current.element), t && e.current.scrollContainers && e.current.scrollContainers.forEach((r) => r.addEventListener("scroll", s, { capture: true, passive: true })), e.current.orientationHandler = () => {
      s();
    }, "orientation" in screen && "addEventListener" in screen.orientation ? screen.orientation.addEventListener("change", e.current.orientationHandler) : "onorientationchange" in window && window.addEventListener("orientationchange", e.current.orientationHandler));
  }
  const L = (r) => {
    !r || r === e.current.element || (v(), e.current.element = r, e.current.scrollContainers = E(r), b());
  };
  return X(s, !!t), W(m2), reactExports.useEffect(() => {
    v(), b();
  }, [t, s, m2]), reactExports.useEffect(() => v, []), [L, c, z];
}
function W(n) {
  reactExports.useEffect(() => {
    const t = n;
    return window.addEventListener("resize", t), () => void window.removeEventListener("resize", t);
  }, [n]);
}
function X(n, t) {
  reactExports.useEffect(() => {
    if (t) {
      const o = n;
      return window.addEventListener("scroll", o, { capture: true, passive: true }), () => void window.removeEventListener("scroll", o, true);
    }
  }, [n, t]);
}
function E(n) {
  const t = [];
  if (!n || n === document.body) return t;
  const { overflow: o, overflowX: i, overflowY: a } = window.getComputedStyle(n);
  return [o, i, a].some((c) => c === "auto" || c === "scroll") && t.push(n), [...t, ...E(n.parentElement)];
}
const k = ["x", "y", "top", "bottom", "left", "right", "width", "height"], D = (n, t) => k.every((o) => n[o] === t[o]);
function CanvasImpl({
  ref,
  children,
  fallback,
  resize,
  style,
  gl,
  events = createPointerEvents,
  eventSource,
  eventPrefix,
  shadows,
  linear,
  flat,
  legacy,
  orthographic,
  frameloop,
  dpr,
  performance,
  raycaster,
  camera,
  scene,
  onPointerMissed,
  onCreated,
  ...props
}) {
  reactExports.useMemo(() => extend(THREE), []);
  const Bridge = useBridge();
  const [containerRef, containerRect] = j({
    scroll: true,
    debounce: {
      scroll: 50,
      resize: 0
    },
    ...resize
  });
  const canvasRef = reactExports.useRef(null);
  const divRef = reactExports.useRef(null);
  reactExports.useImperativeHandle(ref, () => canvasRef.current);
  const handlePointerMissed = useMutableCallback(onPointerMissed);
  const [block, setBlock] = reactExports.useState(false);
  const [error, setError] = reactExports.useState(false);
  if (block) throw block;
  if (error) throw error;
  const root = reactExports.useRef(null);
  useIsomorphicLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (containerRect.width > 0 && containerRect.height > 0 && canvas) {
      if (!root.current) root.current = createRoot(canvas);
      async function run() {
        await root.current.configure({
          gl,
          scene,
          events,
          shadows,
          linear,
          flat,
          legacy,
          orthographic,
          frameloop,
          dpr,
          performance,
          raycaster,
          camera,
          size: containerRect,
          // Pass mutable reference to onPointerMissed so it's free to update
          onPointerMissed: (...args) => handlePointerMissed.current == null ? void 0 : handlePointerMissed.current(...args),
          onCreated: (state) => {
            state.events.connect == null ? void 0 : state.events.connect(eventSource ? isRef(eventSource) ? eventSource.current : eventSource : divRef.current);
            if (eventPrefix) {
              state.setEvents({
                compute: (event, state2) => {
                  const x = event[eventPrefix + "X"];
                  const y = event[eventPrefix + "Y"];
                  state2.pointer.set(x / state2.size.width * 2 - 1, -(y / state2.size.height) * 2 + 1);
                  state2.raycaster.setFromCamera(state2.pointer, state2.camera);
                }
              });
            }
            onCreated == null ? void 0 : onCreated(state);
          }
        });
        root.current.render(/* @__PURE__ */ jsxRuntimeExports.jsx(Bridge, {
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ErrorBoundary, {
            set: setError,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, {
              fallback: /* @__PURE__ */ jsxRuntimeExports.jsx(Block, {
                set: setBlock
              }),
              children: children != null ? children : null
            })
          })
        }));
      }
      run();
    }
  });
  reactExports.useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) return () => unmountComponentAtNode(canvas);
  }, []);
  const pointerEvents = eventSource ? "none" : "auto";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    ref: divRef,
    style: {
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      pointerEvents,
      ...style
    },
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      ref: containerRef,
      style: {
        width: "100%",
        height: "100%"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", {
        ref: canvasRef,
        style: {
          display: "block"
        },
        children: fallback
      })
    })
  });
}
function Canvas(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(m, {
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(CanvasImpl, {
      ...props
    })
  });
}
function Preload({
  all,
  scene,
  camera
}) {
  const gl = useThree(({
    gl: gl2
  }) => gl2);
  const dCamera = useThree(({
    camera: camera2
  }) => camera2);
  const dScene = useThree(({
    scene: scene2
  }) => scene2);
  reactExports.useLayoutEffect(() => {
    const invisible = [];
    if (all) {
      (scene || dScene).traverse((object) => {
        if (object.visible === false) {
          invisible.push(object);
          object.visible = true;
        }
      });
    }
    gl.compile(scene || dScene, camera || dCamera);
    const cubeRenderTarget = new WebGLCubeRenderTarget(128);
    const cubeCamera = new CubeCamera(0.01, 1e5, cubeRenderTarget);
    cubeCamera.update(gl, scene || dScene);
    cubeRenderTarget.dispose();
    invisible.forEach((object) => object.visible = false);
  }, []);
  return null;
}
function Scene3D({ children, className, camera = { position: [0, 0, 5], fov: 45 } }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Canvas,
    {
      className,
      camera,
      dpr: [1, 1.5],
      gl: { antialias: true, alpha: true },
      style: { pointerEvents: "auto" },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Suspense, { fallback: null, children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsx(Preload, { all: true })
      ] })
    }
  );
}
export {
  Scene3D
};
