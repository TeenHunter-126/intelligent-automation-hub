import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function GearRing({ radius = 1, teeth = 12, thickness = 0.15, ...props }: { radius?: number; teeth?: number; thickness?: number } & React.ComponentProps<"group">) {
  const ref = useRef<THREE.Group>(null!);
  const geo = useMemo(() => {
    const shape = new THREE.Shape();
    const inner = radius * 0.7;
    const outer = radius;
    const toothDepth = radius * 0.18;
    for (let i = 0; i < teeth; i++) {
      const a1 = (i / teeth) * Math.PI * 2;
      const a2 = ((i + 0.3) / teeth) * Math.PI * 2;
      const a3 = ((i + 0.5) / teeth) * Math.PI * 2;
      const a4 = ((i + 0.8) / teeth) * Math.PI * 2;
      if (i === 0) shape.moveTo(Math.cos(a1) * inner, Math.sin(a1) * inner);
      shape.lineTo(Math.cos(a2) * (inner + toothDepth), Math.sin(a2) * (inner + toothDepth));
      shape.lineTo(Math.cos(a3) * (outer + toothDepth), Math.sin(a3) * (outer + toothDepth));
      shape.lineTo(Math.cos(a4) * outer, Math.sin(a4) * outer);
    }
    shape.closePath();
    const holePath = new THREE.Path();
    holePath.absarc(0, 0, inner * 0.6, 0, Math.PI * 2, true);
    shape.holes.push(holePath);
    return new THREE.ExtrudeGeometry(shape, { depth: thickness, bevelEnabled: false });
  }, [radius, teeth, thickness]);

  useFrame((_, delta) => {
    ref.current.rotation.z += delta * 0.15;
  });

  return (
    <group ref={ref} {...props}>
      <mesh geometry={geo} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#4da6ff" metalness={0.9} roughness={0.2} emissive="#1a4a8a" emissiveIntensity={0.3} transparent opacity={0.85} />
      </mesh>
    </group>
  );
}

function CircuitOrb() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    ref.current.rotation.x = state.clock.elapsedTime * 0.2;
    ref.current.rotation.y = state.clock.elapsedTime * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={ref} scale={1.2}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#00d4ff"
          emissive="#0066aa"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.15}
          distort={0.3}
          speed={2}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  );
}

function FloatingParticles({ count = 60 }) {
  const ref = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
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

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#4da6ff" size={0.04} transparent opacity={0.6} sizeAttenuation depthWrite={false} />
    </points>
  );
}

function RingStructure() {
  const ref = useRef<THREE.Group>(null!);
  useFrame((state) => {
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    ref.current.rotation.y = state.clock.elapsedTime * 0.15;
  });

  return (
    <group ref={ref}>
      {[0, 1, 2].map((i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, (i * Math.PI) / 3]}>
          <torusGeometry args={[1.8 + i * 0.3, 0.015, 16, 100]} />
          <meshStandardMaterial color={i === 0 ? "#4da6ff" : i === 1 ? "#00d4ff" : "#1a8aff"} emissive={i === 0 ? "#1a4a8a" : "#005588"} emissiveIntensity={0.8} transparent opacity={0.5 - i * 0.1} />
        </mesh>
      ))}
    </group>
  );
}

export function HeroScene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} color="#4da6ff" />
      <pointLight position={[-3, 2, 4]} intensity={1.5} color="#00d4ff" distance={10} />
      <pointLight position={[3, -2, 2]} intensity={0.8} color="#4da6ff" distance={8} />

      <CircuitOrb />

      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
        <GearRing radius={0.8} teeth={10} position={[2.5, 1.5, -1]} />
      </Float>
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.3}>
        <GearRing radius={0.5} teeth={8} position={[-2.8, -1, -0.5]} />
      </Float>

      <RingStructure />
      <FloatingParticles />
    </>
  );
}
