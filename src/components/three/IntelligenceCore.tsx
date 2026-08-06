"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, Sparkles } from "@react-three/drei";
import { useMemo, useRef } from "react";
import type { Group } from "three";
import { AdditiveBlending, Color, Shape } from "three";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { SceneErrorBoundary } from "./SceneErrorBoundary";

const nodes: [number, number, number][] = [
  [-2.15, 1.05, -0.2], [-2.28, -1.04, 0.2], [2.12, 1.05, 0.1],
  [2.25, -1.02, -0.1], [-1.18, 1.9, -0.4], [1.25, 1.85, 0.2],
  [-1.24, -1.9, 0.2], [1.22, -1.92, -0.3],
];

function connectionTarget([x, y, z]: [number, number, number]): [number, number, number] {
  const length = Math.hypot(x, y, z);
  const radius = 0.7;
  return [(x / length) * radius, (y / length) * radius, (z / length) * radius];
}

function Core({ reduced }: { reduced: boolean }) {
  const group = useRef<Group>(null);
  const rings = useRef<Group>(null);
  const starShape = useMemo(() => {
    const shape = new Shape();
    for (let index = 0; index < 8; index += 1) {
      const radius = index % 2 === 0 ? 0.98 : 0.28;
      const angle = Math.PI / 2 + index * Math.PI / 4;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      if (index === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    }
    shape.closePath();
    return shape;
  }, []);

  useFrame((state, delta) => {
    if (reduced) return;
    if (group.current) {
      group.current.rotation.y += delta * 0.035;
      group.current.rotation.x = state.pointer.y * 0.035;
      group.current.rotation.z = -state.pointer.x * 0.025;
    }
    if (rings.current) rings.current.rotation.z -= delta * 0.055;
  });

  const connections = useMemo(() => nodes.map((node) => [connectionTarget(node), node]), []);
  const outerLinks = useMemo(() => nodes.map((node, index) => [node, nodes[(index + 1) % nodes.length]]), []);

  return (
    <group ref={group}>
      <ambientLight intensity={0.45} />
      <pointLight color="#56f4ff" intensity={34} distance={10} />
      <pointLight position={[3, 2, 4]} color="#6e7eff" intensity={19} />

      <Float speed={reduced ? 0 : 0.32} rotationIntensity={0.08} floatIntensity={0.08}>
        <mesh>
          <shapeGeometry args={[starShape]} />
          <meshPhysicalMaterial
            color="#d9ffff"
            emissive="#03ddeb"
            emissiveIntensity={3.1}
            roughness={0.16}
            metalness={0.62}
            side={2}
          />
        </mesh>
        <mesh position={[0, 0, -0.035]} scale={1.28}>
          <shapeGeometry args={[starShape]} />
          <meshBasicMaterial color="#50edf9" transparent opacity={0.18} side={2} />
        </mesh>
      </Float>

      <group ref={rings}>
        {[1.17, 1.52, 1.96].map((radius, index) => (
          <mesh key={radius} rotation={[Math.PI / 2 + index * 0.34, index * 0.42, 0]}>
            <torusGeometry args={[radius, index === 1 ? 0.018 : 0.011, 12, 120]} />
            <meshBasicMaterial color={index === 1 ? "#82f9ff" : "#18d9f2"} transparent opacity={0.54 - index * 0.08} />
          </mesh>
        ))}
      </group>

      {connections.map((points, index) => (
        <Line
          key={index}
          points={points}
          color={index % 2 ? "#54eaff" : "#6f82ff"}
          lineWidth={0.7}
          transparent
          opacity={0.48}
        />
      ))}

      {outerLinks.map((points, index) => (
        <Line key={`outer-${index}`} points={points} color="#2ce8f4" lineWidth={0.32} transparent opacity={0.13} />
      ))}

      {nodes.map((position, index) => (
        <Float key={index} speed={reduced ? 0 : 0.2 + index * 0.015} floatIntensity={0.08}>
          <mesh position={position}>
            <sphereGeometry args={[index % 3 === 0 ? 0.13 : 0.09, 24, 24]} />
            <meshBasicMaterial
              color={new Color(index % 2 ? "#a7fdff" : "#788cff")}
              blending={AdditiveBlending}
            />
          </mesh>
        </Float>
      ))}
      <Sparkles count={reduced ? 14 : 58} scale={5.8} size={1.15} speed={reduced ? 0 : 0.07} color="#7ef8ff" />
    </group>
  );
}

export default function IntelligenceCore() {
  const reduced = useReducedMotion();

  return (
    <SceneErrorBoundary>
      <div className="core-canvas" aria-hidden="true">
        <Canvas
          camera={{ position: [0, 0, 6.7], fov: 47 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        >
          <Core reduced={reduced} />
        </Canvas>
        <div className="core-canvas__halo" />
      </div>
    </SceneErrorBoundary>
  );
}
