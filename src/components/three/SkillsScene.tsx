import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function NeuralNetwork() {
  const groupRef = useRef<THREE.Group>(null!);
  const linesRef = useRef<THREE.LineSegments>(null!);

  const { nodes, edges } = useMemo(() => {
    const nodesArr: THREE.Vector3[] = [];
    const layers = [3, 5, 5, 3];
    let idx = 0;
    for (let l = 0; l < layers.length; l++) {
      for (let n = 0; n < layers[l]; n++) {
        const x = (l - 1.5) * 2;
        const y = (n - (layers[l] - 1) / 2) * 0.8;
        nodesArr.push(new THREE.Vector3(x, y, 0));
        idx++;
      }
    }
    const edgesArr: [number, number][] = [];
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

  const lineGeo = useMemo(() => {
    const positions = new Float32Array(edges.length * 6);
    edges.forEach(([a, b], i) => {
      positions[i * 6] = nodes[a].x;
      positions[i * 6 + 1] = nodes[a].y;
      positions[i * 6 + 2] = nodes[a].z;
      positions[i * 6 + 3] = nodes[b].x;
      positions[i * 6 + 4] = nodes[b].y;
      positions[i * 6 + 5] = nodes[b].z;
    });
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [nodes, edges]);

  useFrame((state) => {
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    const mat = linesRef.current.material as THREE.LineBasicMaterial;
    mat.opacity = 0.25 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
  });

  return (
    <group ref={groupRef}>
      <lineSegments ref={linesRef} geometry={lineGeo}>
        <lineBasicMaterial color="#4da6ff" transparent opacity={0.25} />
      </lineSegments>
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.06, 12, 12]} />
          <meshStandardMaterial color="#00d4ff" emissive="#00aadd" emissiveIntensity={0.8} />
        </mesh>
      ))}
    </group>
  );
}

function DataStream({ count = 80 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 5;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return pos;
  }, [count]);

  const speeds = useMemo(() => {
    return Array.from({ length: count }, () => 0.5 + Math.random() * 1.5);
  }, [count]);

  useFrame((state) => {
    const posAttr = ref.current.geometry.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < count; i++) {
      posAttr.array[i * 3 + 1] += speeds[i] * 0.01;
      if (posAttr.array[i * 3 + 1] > 3) posAttr.array[i * 3 + 1] = -3;
    }
    posAttr.needsUpdate = true;
    ref.current.rotation.z = state.clock.elapsedTime * 0.01;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#00d4ff" size={0.03} transparent opacity={0.4} sizeAttenuation depthWrite={false} />
    </points>
  );
}

export function SkillsScene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 0, 3]} intensity={1} color="#4da6ff" distance={8} />
      <NeuralNetwork />
      <DataStream />
    </>
  );
}
