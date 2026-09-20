"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import type { Group } from "three";

function ToothModel({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.15 + mouse.current.x * 0.3;
    group.current.rotation.x = mouse.current.y * 0.15;
  });

  return (
    <group ref={group}>
      <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
        <mesh position={[0, 0.2, 0]} scale={[0.9, 1.2, 0.7]}>
          <sphereGeometry args={[1, 32, 32]} />
          <MeshDistortMaterial
            color="#f8fafc"
            emissive="#3d9a9a"
            emissiveIntensity={0.08}
            roughness={0.25}
            metalness={0.1}
            distort={0.12}
            speed={1.5}
          />
        </mesh>
        <mesh position={[0, -0.85, 0]} scale={[0.55, 0.9, 0.45]}>
          <cylinderGeometry args={[0.55, 0.35, 1.1, 24]} />
          <meshStandardMaterial color="#eef6f7" roughness={0.3} metalness={0.05} />
        </mesh>
      </Float>
      {[...Array(6)].map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        return (
          <Sphere
            key={i}
            args={[0.04, 8, 8]}
            position={[Math.cos(angle) * 1.4, Math.sin(i) * 0.3, Math.sin(angle) * 1.4]}
          >
            <meshStandardMaterial color="#3d9a9a" emissive="#3d9a9a" emissiveIntensity={0.4} />
          </Sphere>
        );
      })}
    </group>
  );
}

interface HeroToothSceneProps {
  className?: string;
}

export function HeroToothScene({ className }: HeroToothSceneProps) {
  const mouse = useRef({ x: 0, y: 0 });

  return (
    <div
      className={className}
      onPointerMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouse.current.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        mouse.current.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      }}
      aria-hidden
    >
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 4, 4]} intensity={1.2} color="#ffffff" />
        <directionalLight position={[-3, 2, -2]} intensity={0.4} color="#3d9a9a" />
        <Suspense fallback={null}>
          <ToothModel mouse={mouse} />
        </Suspense>
      </Canvas>
    </div>
  );
}
