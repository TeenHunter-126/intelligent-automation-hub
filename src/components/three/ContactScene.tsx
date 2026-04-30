import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function HolographicSphere() {
  const ref = useRef<THREE.Mesh>(null!);
  const wireRef = useRef<THREE.LineSegments>(null!);

  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.2;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.2;
    wireRef.current.rotation.y = -state.clock.elapsedTime * 0.15;
    wireRef.current.rotation.z = state.clock.elapsedTime * 0.1;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <group>
        <mesh ref={ref}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="#1a2332" metalness={1} roughness={0.1} emissive="#0a1628" emissiveIntensity={0.5} transparent opacity={0.3} />
        </mesh>
        <lineSegments ref={wireRef}>
          <edgesGeometry args={[new THREE.SphereGeometry(1.02, 16, 16)]} />
          <lineBasicMaterial color="#4da6ff" transparent opacity={0.4} />
        </lineSegments>
      </group>
    </Float>
  );
}

function OrbitRings() {
  const ref = useRef<THREE.Group>(null!);
  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.1;
  });

  return (
    <group ref={ref}>
      {[0, 1, 2].map((i) => (
        <mesh key={i} rotation={[Math.PI / 3 + i * 0.5, i * 0.8, 0]}>
          <torusGeometry args={[1.6 + i * 0.25, 0.008, 8, 80]} />
          <meshStandardMaterial color={i === 1 ? "#00d4ff" : "#4da6ff"} emissive="#1a4a8a" emissiveIntensity={1} transparent opacity={0.35} />
        </mesh>
      ))}
    </group>
  );
}

function SignalParticles({ count = 40 }) {
  const ref = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
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

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#00d4ff" size={0.04} transparent opacity={0.5} sizeAttenuation depthWrite={false} />
    </points>
  );
}

export function ContactScene() {
  return (
    <>
      <ambientLight intensity={0.15} />
      <pointLight position={[0, 0, 4]} intensity={1.2} color="#4da6ff" distance={8} />
      <pointLight position={[2, 1, 2]} intensity={0.5} color="#00d4ff" distance={6} />
      <HolographicSphere />
      <OrbitRings />
      <SignalParticles />
    </>
  );
}
