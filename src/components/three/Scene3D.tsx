import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import { Suspense, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  camera?: { position: [number, number, number]; fov: number };
}

export function Scene3D({ children, className, camera = { position: [0, 0, 5], fov: 45 } }: Props) {
  return (
    <Canvas
      className={className}
      camera={camera}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ pointerEvents: "auto" }}
    >
      <Suspense fallback={null}>
        {children}
        <Preload all />
      </Suspense>
    </Canvas>
  );
}
